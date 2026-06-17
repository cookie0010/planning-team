#!/usr/bin/env python3
"""PRD 마크다운 → 공유/배포용 PDF 변환.

사용:
    python3 prd_to_pdf.py INPUT.md [-o OUTPUT.pdf] [--no-cover] [--title 제목]
                          [--cover-template PATH] [--style PATH]

동작:
- 문서 머리(# 제목, > Project/Date/Version 블록)를 파싱해 표지를 만든다.
- HTML 주석(<!-- -->, 작성 지침)은 배포본에서 제거한다.
- 표지를 쓸 때는 본문 첫 H1·메타 블록을 본문에서 빼서 중복을 없앤다.
- 의존성(markdown, weasyprint)이 없으면 ~/.cache/prd-to-pdf/venv 를
  자동 생성해 재실행한다 (PEP 668 회피, 재현성 확보).
"""

import argparse
import html
import os
import re
import subprocess
import sys
from datetime import date
from pathlib import Path

SKILL_DIR = Path(__file__).resolve().parent.parent
DEFAULT_COVER = SKILL_DIR / "assets" / "cover.html"
DEFAULT_STYLE = SKILL_DIR / "assets" / "style.css"
VENV = Path.home() / ".cache" / "prd-to-pdf" / "venv"


def ensure_deps() -> None:
    """markdown/weasyprint가 없으면 전용 venv를 만들어 그 파이썬으로 재실행."""
    try:
        import markdown  # noqa: F401
        import weasyprint  # noqa: F401
        return
    except ImportError:
        pass

    if os.environ.get("PRD_TO_PDF_BOOTSTRAPPED"):
        sys.exit(
            "의존성 부트스트랩에 실패했습니다. 수동 설치가 필요합니다:\n"
            f"  {VENV}/bin/pip install markdown weasyprint\n"
            "weasyprint가 시스템 라이브러리(pango) 문제로 실패하면: brew install weasyprint"
        )

    py = VENV / "bin" / "python"
    if not py.exists():
        print(f"[prd-to-pdf] 전용 venv 생성: {VENV}", file=sys.stderr)
        subprocess.run(
            [sys.executable, "-m", "venv", "--system-site-packages", str(VENV)],
            check=True,
        )
    for pkg in ("markdown", "weasyprint"):
        if subprocess.run([str(py), "-c", f"import {pkg}"], capture_output=True).returncode != 0:
            print(f"[prd-to-pdf] {pkg} 설치 중...", file=sys.stderr)
            subprocess.run([str(py), "-m", "pip", "install", "-q", pkg], check=True)

    os.execve(
        str(py),
        [str(py)] + sys.argv,
        {**os.environ, "PRD_TO_PDF_BOOTSTRAPPED": "1"},
    )


def parse_meta(md_text: str) -> dict:
    """문서 머리에서 표지용 메타데이터 추출. 없으면 빈 값."""
    meta = {"title": "", "project": "", "date": "", "version": ""}

    m = re.search(r"^#\s+(.+?)\s*$", md_text, flags=re.M)
    if m:
        meta["title"] = m.group(1).strip()

    m = re.search(r"^>\s*Project:\s*`?([^`\n]+)`?\s*$", md_text, flags=re.M)
    if m:
        meta["project"] = m.group(1).strip()

    # "> Date: YYYY-MM-DD / Version: vN" 또는 분리된 두 줄 모두 지원
    m = re.search(r"^>\s*Date:\s*([0-9-]+)\s*(?:/\s*Version:\s*(\S+))?\s*$", md_text, flags=re.M)
    if m:
        meta["date"] = m.group(1).strip()
        if m.group(2):
            meta["version"] = m.group(2).strip()
    if not meta["version"]:
        m = re.search(r"^>\s*Version:\s*(\S+)\s*$", md_text, flags=re.M)
        if m:
            meta["version"] = m.group(1).strip()

    return meta


def strip_comments(md_text: str) -> str:
    """배포본에서 HTML 주석(작성 지침 등 내부용)을 제거."""
    return re.sub(r"<!--.*?-->", "", md_text, flags=re.S)


def remove_doc_header(md_text: str) -> str:
    """표지를 쓸 때 본문 첫 H1 + 머리 블록쿼트(+직후 구분선)를 제거해 중복 방지."""
    lines = md_text.split("\n")
    out = []
    i = 0
    n = len(lines)
    # 선행 공백 줄 유지하며 첫 H1 탐색
    while i < n and lines[i].strip() == "":
        i += 1
    if i < n and lines[i].startswith("# "):
        i += 1
        # H1 직후의 공백/블록쿼트/구분선 한 묶음 제거
        while i < n and (lines[i].strip() == "" or lines[i].lstrip().startswith(">")):
            i += 1
        if i < n and re.fullmatch(r"\s*-{3,}\s*", lines[i]):
            i += 1
    out.extend(lines[i:])
    return "\n".join(out)


def render(args: argparse.Namespace) -> Path:
    import markdown
    from weasyprint import HTML

    src = Path(args.input).resolve()
    if not src.exists():
        sys.exit(f"입력 파일이 없습니다: {src}")
    md_text = src.read_text(encoding="utf-8")

    meta = parse_meta(md_text)
    if args.title:
        meta["title"] = args.title
    if not meta["title"]:
        meta["title"] = src.stem
    if not meta["date"]:
        meta["date"] = date.today().isoformat()

    body_md = strip_comments(md_text)

    cover_html = ""
    if not args.no_cover:
        body_md = remove_doc_header(body_md)
        cover_tpl = Path(args.cover_template).read_text(encoding="utf-8")
        cover_html = cover_tpl
        for key, value in meta.items():
            cover_html = cover_html.replace("{{" + key.upper() + "}}", html.escape(value))

    body_html = markdown.markdown(
        body_md,
        extensions=["tables", "fenced_code", "sane_lists"],
    )

    css = Path(args.style).read_text(encoding="utf-8")
    project_label = html.escape(meta["project"] or meta["title"])
    doc = f"""<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="utf-8">
<style>
{css}
@page content {{
  @top-right {{ content: "{project_label}"; }}
}}
</style>
</head>
<body>
{cover_html}
<div class="content">
{body_html}
</div>
</body>
</html>"""

    out = Path(args.output).resolve() if args.output else src.with_suffix(".pdf")
    HTML(string=doc, base_url=str(src.parent)).write_pdf(str(out))
    return out


def main() -> None:
    ensure_deps()
    p = argparse.ArgumentParser(description="PRD 마크다운을 배포용 PDF로 변환")
    p.add_argument("input", help="입력 마크다운 파일 (.md)")
    p.add_argument("-o", "--output", help="출력 PDF 경로 (기본: 입력과 같은 위치/이름)")
    p.add_argument("--no-cover", action="store_true", help="표지 없이 본문만")
    p.add_argument("--title", help="표지 제목 덮어쓰기 (기본: 문서 첫 H1)")
    p.add_argument("--cover-template", default=str(DEFAULT_COVER), help="표지 HTML 템플릿 경로")
    p.add_argument("--style", default=str(DEFAULT_STYLE), help="스타일 CSS 경로")
    args = p.parse_args()
    out = render(args)
    print(out)


if __name__ == "__main__":
    main()
