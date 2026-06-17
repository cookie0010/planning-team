# planning-team

소프트앤 제품 기획 파이프라인 작업 공간. **아이디어 → 1-pager → PRD → IA → 와이어프레임**을 단계별 서브에이전트로 진행한다.
핵심 원리: 각 단계는 독립 세션(서브에이전트)이라 **이전 단계를 오직 저장된 파일로만 본다.** 그래서 산출물 경로·네이밍·버전 규칙이 중요하다.

현재 진행 프로젝트 = `quizn-board-v2` (slug). 아래 `<slug>`는 프로젝트별 폴더명.

---

## 파이프라인 (에이전트 역할)

```
아이디어
  │ idea-sparring (스킬/에이전트) — 사고 파트너로 압박·검증
  ▼ docs/<slug>/idea-deep-dive.md
@one-pager-writer — 한 장 설득문서로 압축
  ▼ docs/<slug>/one-pager/one-pager.md
  ⤷ [자동] @one-pager-reviewer — 가독성만 다듬음(내용 불변) → one-pager-vN.n.md
  ★ 사용자 Go/No-go 게이트 ★
@prd-writer — '무엇을 만들까' 확정
  ▼ docs/<slug>/prd/prd-v<N>.md
  ★ 사용자 PRD 검증 게이트 ★
@ia-draft-writer — 화면 목록·이동 흐름 설계
  ▼ docs/<slug>/ia/ia-v<N>.md (+ FigJam 흐름도)
  ★ 사용자 IA 검증 게이트 ★
@ux-designer (+ wireframe-css 스킬) — HTML 와이어프레임
  ▼ docs/<slug>/ux/wireframe/*.html
  ★ 사용자 검증 게이트 ★
@design-team (하이파이·핸드오프) — 미생성
```

| 에이전트 | 역할 | 입력 | 산출물 |
|---|---|---|---|
| `idea-sparring-partner` (+ `idea-sparring` 스킬) | 막연한 아이디어를 사고 파트너로 압박·검증 (치어리더 아님) | 아이디어 | `idea-deep-dive.md` (+ `working-notes.md`·`research-notes.md`). **압축 금지** — 깊이 보존 |
| `one-pager-writer` | deep-dive를 한 장 Go/No-go 설득문서로 **압축** | deep-dive | `one-pager/one-pager.md`. 완료 시 리뷰어 자동 호출 |
| `one-pager-reviewer` | **가독성만** 다듬음 (사실·구조·논리 불변) | 완성 1-pager | `one-pager/one-pager-v{N}.{n}.md` (writer 버전 안 덮음) |
| `prd-writer` | What/Why 중심 PRD 확정 | 1-pager (없으면 deep-dive) | `prd/prd-v<N>.md` (+ prd-to-pdf로 PDF) |
| `ia-draft-writer` | 화면 목록·내비게이션·흐름 설계 | PRD (+ benchmark·reference, **있으면**) | `ia/ia-v<N>.md` + FigJam 흐름도 |
| `ux-designer` (+ `wireframe-css` 스킬) | 검증된 IA를 **HTML 박스 와이어프레임**으로 (Figma 아님) | PRD + 검증된 IA (+ benchmark·reference) | `ux/wireframe/*.html` + `ux/wireframe-notes-v<N>.md` |

**게이트**: 에이전트는 게이트(★)를 스스로 못 넘는다. 1-pager→PRD, PRD→IA, IA→와이어프레임 전환은 **항상 사용자가 결정**. (예외: 1-pager 작성→리뷰는 자동.)
**되돌리기**: 아래 단계가 상류 공백을 발견하면 직접 안 고치고 신호만 올린다 — `[NEEDS_SPARRING]`(→ 스파링), 또는 `@prd-writer`/`@one-pager-writer`로 라우팅 권고.

---

## 산출물 경로 규칙 (`docs/<slug>/`)

```
docs/<slug>/
├── idea-deep-dive.md            # 스파링 산출물
├── working-notes.md             # 스파링 근거·트레일
├── research-notes.md
├── one-pager/                   # one-pager-writer + reviewer
│   ├── one-pager.md, one-pager-v<N>.md        (writer)
│   └── one-pager-v<N>.<n>.md                  (reviewer 마이너)
├── prd/                         # prd-writer
│   └── prd-v<N>.md  (+ prd-v<N>.pdf)
├── ia/                          # ia-draft-writer  (※ ux 밖 최상위)
│   └── ia-v<N>.md  (+ ia-flowchart-v<N>.png/pdf)
├── ux/
│   ├── benchmark-v<N>.md        # IA·와이어프레임 설계 입력 (선택 — 필수 아님)
│   ├── references/              # UI 참고 캡처
│   ├── wireframe/               # HTML 와이어프레임 (standalone .html + wf.css + 공용 wf-screen.css/js)
│   └── wireframe-notes-v<N>.md
└── reference/                   # 벤치마크 캡처 등 원본 스크린샷
```

경로 성격 메모:
- **`one-pager/` · `prd/` · `ia/`** = 2026-06-17 정리. 옛 평면 구조(`one-pager.md`, `prd-v9.md`, `ux/ia/`)에서 각 서브폴더로 이동. IA는 `ux/` **밖** 최상위.
- **`ux/benchmark-v<N>.md`** = 누구의 필수 산출물도 아님. IA/UX 단계의 **선택 입력**(있으면 참고, 없으면 건너뜀). 새로 뜨려면 사용자 요청 시 `deep-research`.
- **`docs/template/`** = 에이전트가 **읽는** 틀 (one-pager / prd / idea-deep-dive 템플릿). 산출물 아님.
- **`references/`** (저장소 루트) = wf.css 원본 + 와이어프레임 예시 (wireframe-css 스킬 원천). `docs/<slug>/`와 무관한 공용 자산.

---

## 스킬 (`.claude/skills/`)

- **`idea-sparring`** — 아이디어 압박·검증 (메인 세션용; 에이전트판은 `idea-sparring-partner`).
- **`wireframe-css`** — `wf.css` 모노크롬 디자인 시스템으로 HTML 와이어프레임 제작. 색·타이포·간격은 토큰만, UI는 `.wf-*` 컴포넌트 클래스, 렌더해서 검증(no-cache 서버+playwright). `@ux-designer`의 빌드 방법.
- **`ux-designer`** — UX 품질(IA·모바일·폼·카피·접근성) 기반 지식. `@ux-designer`의 UX 토대.
- **`prd-to-pdf`** — PRD(또는 기획 md)를 표지 포함 배포용 PDF로 변환. 직접 변환 코드 짜지 말고 번들 스크립트 실행.

---

## 공통 규칙

- **버전 덮어쓰기 금지**: 모든 주 산출물은 `-v<N>` 새 파일로 추가. 문서 내 `Version:`과 파일명 동기화. (1-pager·PRD·IA·와이어프레임 모두.)
- **언어**: 사용자 입력 언어를 따른다 (한국어 입력 → 한국어 산출물).
- **에이전트 메모리**: 각 에이전트는 `.claude/agent-memory/<agent>/`에 프로젝트별 메모리를 갖는다(누적 결정·용어·미결). 에이전트 정의는 `.claude/agents/<agent>.md`.
- **문서 어투**: 군더더기·현학 라벨 금지, 일상어·정직 프레이밍, '해결책' 단정 금지 (사용자 취향).

---

## 실제 운영 메모 (정직하게)

위는 설계된 이상적 파이프라인이다. 실제로는 **메인 세션이 직접 처리한 단계**가 있다 — 특히 quizn-board-v2의 **HTML 와이어프레임은 @ux-designer 에이전트가 아니라 메인 세션이 직접 그렸고**, prd-v2도 사용자 지시로 메인 세션이 한 번 직접 썼다. 에이전트는 "이렇게 일하도록 정의된 일꾼"이고, 메인 세션이 같은 산출물 규칙(경로·버전·검증)을 따라 직접 처리하기도 한다.
