---
name: wireframe-css
description: wf.css 모노크롬 디자인 시스템으로 HTML 와이어프레임·화면 시안·목업·프로토타입 페이지를 만든다. 사용자가 "와이어프레임 만들어줘", "HTML 목업/화면 시안", "랜딩 페이지 시안", "wf.css로 ~ 화면", "프로토타입 페이지", "로그인/설정/대시보드 화면 짜줘" 등 코드 기반 저해상도 화면을 요청하면 — 명시적으로 wf.css를 말하지 않아도 — 반드시 이 스킬을 쓴다. 색·타이포·간격을 임의 hex/px로 하드코딩하지 말고 wf.css 토큰·컴포넌트 클래스를 사용한다. (※ 이 스킬은 HTML/CSS 코드 와이어프레임 전용. @ux-designer 에이전트가 PRD·검증된 IA를 바탕으로 이 스킬을 써서 HTML 와이어프레임을 그린다.)
---

# wireframe-css

`wf.css` 하나로 모노크롬(grey/slate) **저해상도 HTML 와이어프레임**을 빠르고 일관되게 만든다.
`wf.css`는 Toss Design System을 추출·디브랜드한 100% standalone 스타일시트로, 컬러·타이포·간격·그림자 토큰과 버튼/배지/카드/리스트 같은 컴포넌트 클래스를 모두 담고 있다. 와이어프레임 단계에 맞게 대표색을 무채색으로 치환해, 비주얼 디자인으로 오해받지 않는 "흑백 골격" 톤을 낸다.

## 핵심 원칙 — 이 4가지를 어기지 말 것

와이어프레임을 매번 새로 칠하지 않고 **하나의 토큰 체계 위에서** 조립하는 것이 이 스킬의 전부다. 그래야 (1) 화면 간 톤이 일관되고 (2) 라이트/다크가 자동 대응되며 (3) 색을 한 곳에서 바꾸면 전체가 따라오고 (4) 모노크롬 저해상도 느낌이 유지된다.

1. **standalone HTML + `<link>` wf.css.** 빌드·번들·외부 의존성 없음. 파일 하나 복사하고 링크하면 끝.
2. **레이아웃만 로컬 `<style>`.** 페이지 골격(grid/flex, 위치, 크기)만 로컬 CSS로 짠다.
3. **색·타이포·간격은 토큰만.** 로컬 CSS 안에서도 색은 `var(--wf-text-*)`/`var(--wf-bg-*)`, 글자는 `var(--wf-*-size)`/`.wf-t*` 유틸, 간격은 `var(--wf-space-*)`를 쓴다. **생 hex·임의 px 색·임의 폰트 크기를 직접 박지 않는다.**
4. **UI는 컴포넌트 클래스 재사용.** 버튼·배지·카드·리스트·칩·인풋 등은 `.wf-*` 클래스를 쓰고, 스타일을 재발명하지 않는다.

## 워크플로

1. **출력 위치 정하기.** 와이어프레임 HTML을 둘 폴더를 정하고, 그 폴더(또는 상위 공용 폴더)에 `wf.css`를 복사한다 — 이 스킬의 `assets/wf.css`가 원본이다. 같은 프로젝트에 이미 쓰던 `wf.css`가 있으면(예: quizn-board) 그걸 그대로 참조해도 된다.
2. **스캐폴딩.** 아래 골격으로 시작한다:

   ```html
   <!doctype html>
   <html lang="ko" data-theme="light">
   <head>
     <meta charset="utf-8" />
     <meta name="viewport" content="width=device-width, initial-scale=1" />
     <title>화면 이름 (wireframe)</title>
     <link rel="stylesheet" href="wf.css" />
     <style>
       * { box-sizing: border-box; }
       html, body { margin: 0; }
       body {
         font-family: var(--wf-font-family);
         background: var(--wf-bg-base);
         color: var(--wf-text-default);
         -webkit-font-smoothing: antialiased;
       }
       /* ↓ 여기에 레이아웃(grid/flex)만. 색·타이포·간격은 토큰으로. */
     </style>
   </head>
   <body>
     <!-- UI는 .wf-* 컴포넌트 클래스로 -->
   </body>
   </html>
   ```

3. **레이아웃 + 컴포넌트 조립.** 골격(앱형/랜딩형)은 `examples/`를 복제해 변형하는 것이 가장 빠르다. 개별 UI 조각은 `references/components.md`의 스니펫을 복붙한다.
4. **(선택) 다크/라이트 토글.** `data-theme`만 바꾸면 전체가 전환된다. 토글 버튼이 필요하면:

   ```html
   <button class="icon-btn" id="themeBtn" title="테마 전환">◐</button>
   <script>
     themeBtn.onclick = () => {
       const r = document.documentElement;
       r.dataset.theme = r.dataset.theme === 'dark' ? 'light' : 'dark';
     };
   </script>
   ```

   토글이 없어도 OS 다크모드면 자동으로 다크가 적용된다(`prefers-color-scheme`).

## 자주 쓰는 토큰 치트시트

전체 목록은 `references/tokens.md` 참조. 거의 이 정도로 화면을 다 짤 수 있다:

| 용도 | 토큰 |
|---|---|
| 페이지 배경 / 카드·시트 배경 | `--wf-bg-base` / `--wf-bg-elevated` |
| 제목 / 본문 / 보조 텍스트 | `--wf-text-strong` / `--wf-text-default` / `--wf-text-sub` |
| 강조 텍스트·링크 / 비활성 | `--wf-text-accent` / `--wf-text-disabled` |
| 주조색(버튼 등) / 호버 | `--wf-primary` / `--wf-primary-hover` |
| 경계선 / 헤어라인 | `--wf-border` / `--wf-border-hairline` |
| 상태(성공·경고·위험) | `--wf-success` / `--wf-warning` / `--wf-danger` |
| 간격 | `--wf-space-4 … --wf-space-128` (4·8·12·16·20·24·32·48·64·…) |
| 라운드 | `--wf-radius-button`(12) / `-card`(16) / `-chip`(999) / `-full` |
| 그림자 | `--wf-shadow-1 … -3`, `--wf-shadow-float` |
| 폰트 패밀리 | `--wf-font-family` |

타이포는 유틸 클래스가 편하다: 제목은 `.wf-t2`/`.wf-t3`, 본문은 `.wf-t6`/`.wf-st10`, 작은 글씨는 `.wf-t7`. 굵기는 `.wf-bold`/`.wf-semibold`/`.wf-medium`. (스케일 표는 `references/tokens.md`.)

## 컴포넌트 빠른 목록

상세 변형·HTML 스니펫은 `references/components.md` 참조.

- **버튼** `.wf-btn` (+ `.is-weak .is-dark .is-light .is-danger` / `.is-small .is-large .is-xlarge .is-block` / `disabled`)
- **배지** `.wf-badge .c-blue|c-green|c-red|c-yellow|c-teal|c-elephant` (+ `.is-fill .is-small`)
- **카드** `.wf-card` (+ `.is-interactive`)
- **리스트** `.wf-list` > `.wf-list-row` (+ `.is-clickable .is-disabled`, 내부 `.wf-list-row__title` `.wf-list-row__desc`)
- **칩/탭** `.wf-chip` (+ `.is-selected`)
- **입력** `.wf-field` (+ `.is-error`)
- **구분선** `.wf-divider`(+`.is-thick`) / `.wf-hairline`
- **아바타** `.wf-avatar` (+ `.is-sm .is-lg`)
- **토스트** `.wf-toast` · **라디오** `.wf-radio`

탑바·사이드바·네비처럼 wf.css에 컴포넌트가 없는 부분은 `examples/app.html`의 로컬 CSS 패턴(토큰만 사용)을 그대로 가져다 쓴다.

## 예시 골격

- **앱/대시보드형** (탑바 + 사이드바 + stats·리스트·폼): `examples/app.html`
- **마케팅 랜딩형** (히어로·기능·요금제·후기·푸터): `examples/home.html`

둘 다 "레이아웃만 로컬 CSS, 나머지는 토큰/클래스" 원칙의 완성된 본보기다. 새 화면은 가까운 쪽을 복제해 섹션을 갈아끼우는 식으로 시작하면 빠르다.

## 여러 화면이면: 공용 컴포넌트 레이어로 추출

화면이 2개 이상이고 같은 UI(카드·폴더·모달·탑바·메뉴 등)를 반복하면, **화면마다 로컬 CSS로 복붙하지 말 것** — 곧 갈라진다(drift). wf.css 위에 **프로젝트 공용 레이어**를 둔다:

- `wf-screen.css` — 여러 화면이 공유하는 컴포넌트(탑바·그리드·카드·모달 등). 각 화면은 `<link rel="stylesheet" href="wf-screen.css">`로 링크.
- 필요하면 `wf-screen.js` — 공유 동작(테마 토글·메뉴·모달·화면 이동). 각 화면은 `<script src="wf-screen.js">`.
- 원칙: **공용 파일엔 여러 화면이 공유하는 것만**, 각 화면 고유 레이아웃은 그 화면 `<style>`에. **한 곳 고치면 전 화면 반영.**
- 충돌 방지: 화면 인라인 `<style>`을 `<link>` 뒤(=cascade 나중)에 두면 화면별 오버라이드가 자연히 이긴다.
- JS 동작은 **이벤트 위임**(document에 리스너 1개, `e.target.closest(...)`로 분기)으로 두면 나중에 주입한 마크업에도 자동으로 붙는다.

## 미리보기·검증 — 캐시 함정 주의 (중요)

코드 와이어프레임은 **반드시 실제로 렌더해서 확인**한다. 'HTML만 보고 됐다'고 하지 말 것 — 특히 JS 동작(모달 열림·클릭 이동·토글)은 **실제 클릭으로** 검증한다.

- `file://`은 브라우저/자동화 도구에서 막히는 경우가 많다 → **로컬 정적 서버**로 띄운다.
- ⚠️ **가장 흔한 함정: 외부 `wf.css`/`wf-screen.css`/`.js`를 브라우저가 캐시**해서, 파일을 고쳐도 화면이 안 바뀐다. **HTML에 `?v=`를 붙여도 링크된 CSS/JS 캐시는 안 깨진다.** 두 가지로 차단:
  1. 서버를 **no-store**로 띄운다(매 응답 `Cache-Control: no-store`):
     ```bash
     python3 -c "
     import http.server, socketserver
     class H(http.server.SimpleHTTPRequestHandler):
         def end_headers(self):
             self.send_header('Cache-Control','no-store, must-revalidate'); super().end_headers()
     socketserver.TCPServer.allow_reuse_address=True
     with socketserver.TCPServer(('',8753),H) as s: s.serve_forever()
     "
     ```
  2. 그래도 한 번 캐시된 게 남으면 링크에 버전 쿼리(`wf-screen.css?v=2` / `wf-screen.js?v=2`)를 붙여 1회 무효화(no-store면 이후엔 자동으로 최신).
- 자동화로 확인할 땐 playwright 등으로 띄워 **스크린샷**을 보고, 토글/모달/내비는 클릭한 뒤 상태를 확인한다.

## 인터랙션·프로토타입 (선택)

저해상도여도 **클릭으로 화면이 이어지면** 검토가 훨씬 쉽다(Figma 프로토타입처럼, 단 실제 동작).

- **화면 간 이동**: 버튼·카드에 `<a href="다음화면.html">`, 또는 카드 전체를 누르게 하려면 `data-href="..."`+JS(이벤트 위임)로 연결. 카드 안의 버튼·메뉴는 `e.target.closest('a,button,.menu')`로 제외해 오작동을 막는다.
- **반복 오버레이(모달 등)**: 화면마다 복붙하지 말고 **JS로 1회 주입**하고 트리거는 `data-*` 속성으로(공용 `wf-screen.js`에서 처리). 한 모달을 여러 화면이 공유한다.
- **드롭다운·토글·메뉴**: 바깥 클릭으로 닫기는 document 위임으로 한 번에. 토글 스위치는 `<label><input type="checkbox"><span class="track"></span><span class="knob"></span></label>` + 토큰 색으로.
- `<a>`를 버튼처럼 쓰면 기본 밑줄이 생기니 로컬에 `a { color: inherit; text-decoration: none; }` 리셋을 둔다.

## 자주 하는 실수 (피할 것)

- ❌ `color: #333` / `font-size: 14px` 직접 박기 → ✅ `color: var(--wf-text-default)` / `.wf-st11`
- ❌ 버튼·카드 스타일을 로컬 CSS로 다시 만들기 → ✅ `.wf-btn` `.wf-card` 재사용
- ❌ 와이어프레임에 화려한 색 입히기 → ✅ 모노크롬 유지, 색은 상태(badge/success/danger)에만 절제해서
- ❌ `wf.css`를 출력 폴더에 안 두고 링크만 걸기 → ✅ HTML 옆(또는 참조 가능한 경로)에 `wf.css` 복사 확인
- ❌ 파일 고쳤는데 화면 그대로(외부 CSS/JS 캐시) → ✅ no-store 서버 + 필요시 `?v=N`, 변경 후 실제 렌더로 확인
- ❌ 같은 컴포넌트를 화면마다 복붙 → ✅ `wf-screen.css`/`.js` 공용 레이어로 추출(한 곳만 고치게)
- ❌ `<a>` 버튼에 기본 밑줄 → ✅ `a { color: inherit; text-decoration: none; }` 리셋
