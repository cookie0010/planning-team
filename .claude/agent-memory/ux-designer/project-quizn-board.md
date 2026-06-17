---
name: project-quizn-board
description: quizn-board-v2 UX 디자인 — HTML 와이어프레임 전환, 공용 컴포넌트(wf.css/wf-screen), 화면 결정, 디바이스·권한 모델
metadata:
  type: project
---

# quizn-board-v2 — UX 디자인 (와이어프레임)

⭐재개: "quizn-board UX/와이어프레임 이어서". 현재(2026-06-17) = **HTML 와이어프레임, 교사 area 거의 완성. 다음 = 학생 area(D·E-뷰어·F·G).**

**Why:** 퀴즈앤 distribution 교실 협업 canvas 보드 PoC. 검증 대상 = "교사가 실시간 공동참여 canvas를 수업에 반복 사용하는가"(수요). 박스 레벨 = 미관 아닌 구조·문구 검증.

**How to apply:** 재개 시 `docs/quizn-board-v2/prd/prd-v9.md`(확정 스펙) + `ia/ia-v8.md`(최신 IA) + `ux/wireframe/`(HTML)부터. (2026-06-17 경로 변경: PRD→`prd/`, IA→`ux/` 밖 최상위 `ia/`, one-pager→`one-pager/`) 화면은 IA 화면 목록과 1:1, 행동은 PRD 기능에 추적. ⚠️**이 HTML 와이어프레임은 메인 세션이 직접 그렸음**(ux-designer 에이전트 호출 아님) — 산출물은 ux/wireframe/에 있음.

## ★ Figma → HTML 전환 (중요)
- 박스 와이어프레임을 **HTML로** `docs/quizn-board-v2/ux/wireframe/`에 그린다. (구 Figma 박스 v1 fileKey=zjIQhVBjkvjCHUM1Npqcpe는 구버전.)
- **공용 컴포넌트**: `wf.css`(필수, toss tds 모노크롬 토큰 — 절대 수정 금지) + `wf-screen.css`(교사 A영역 공용: topbar/main/grid/ccard/folder/new-group/kebab/tpl-modal) + `wf-screen.js`(테마토글·카드 ⋮메뉴·카드 클릭 내비·'새 캔버스 만들기' 공통모달 주입). **공용 한 곳 고치면 목록·그룹 동시 반영** — 화면 고유 레이아웃만 각 html `<style>`에.
- **로컬 미리보기·검증**: ux/wireframe/에서 no-cache 정적서버(`python3 -c "...Cache-Control: no-store..."` 8753) — 외부 JS/CSS 캐시 안 갱신 문제 해결책. 자산 링크 `?v=N`. 검증=playwright MCP + http://localhost:8753/ (file:// 차단).
- **참고 이미지**: ux/references/ — canvas-tool-example1·2.png(B 플로팅 도구팔레트 참고, Miro/FigJam식), group-ui-example.png(그룹=폴더 카드 패턴 참고).

## 화면 파일 (교사 area)
- index.html = 보드(각 화면 iframe 축소 배치). t-a-list-v2 = A 목록(지휘석). t-a-group-v2 = A 그룹 내부(드릴인). t-a-empty = A 빈상태. t-b-edit = B 편집(편집자뷰). t-c-settings = C 설정. s-e-participant = E-참여자(초기본). t-a-list = 구버전 A.
- **T(템플릿 선택) = 별도 페이지 아님 → 공통 모달**(wf-screen.js 주입). A [+캔버스 생성]·'새 캔버스' 타일, B [+페이지 추가]에서 열림.

## 핵심 화면 결정
- **A**: 캔버스=주연 라이브카드 / 그룹=폴더카드(2×2 미니썸네일, 클릭→그룹 내부). 카드 콘텐츠 클릭→B(열기), 폴더→그룹 내부. **열기·크게보기·그룹열기 버튼 제거**(전체 카드 클릭영역). 카드 ⋮=복사하기·보관·삭제. 잠금=배지+필터칩(전체/진행중/잠금). 카드 meta=참여 N/20. 그리드 4열, '새 캔버스 만들기' 타일 맨앞. 로고='canvas', h1="기분좋은 하루, canvas와 함께해요". **'board-v2'·'지휘석' UI 라벨 제거**(개념만 — 스펙 누수 경계).
- **B(편집자 뷰)**: 상단 ←·캔버스명·진행중·타이머(⏸ + ▾드롭다운: 큰 잔여시간·정지·리셋·+5/+10/+30/+60분)·🔒잠금(타이머 옆)·presence·설정→C·공유. 페이지 레일(칩+[+페이지 추가]→공통모달·N/30). 캔버스=격자+포스트잇(작성자명 좌하단·감정표현 ☺ 우하단)+원격커서. 하단=플로팅 도구 팔레트(선택·이동|텍스트·포스트잇·펜·도형|+더보기|취소·다시 — 도구 미확정·예시). 공유=오버레이(권한 탭→권한별 QR·URL·링크복사).
- **C(설정 F6)**: 편집자 임명+QR초대 / 익명옵션 토글 / 닉네임+비번4(고정·끌수없음) / 캔버스 삭제. B 설정→C, 브레드크럼 복귀.
- ⚠️**F7 드릴다운(자기 화면 확대 열람) 별도 진입점 사라짐** — '크게 보기' 버튼 제거로 카드 클릭이 곧장 B(편집)로 감. @prd-writer로 F7+OQ-20(드릴다운=편집과 같은 동작인가) 정리 권고. 그 전까지 카드클릭=B 잠정.

## 디바이스·권한 (유지)
- 교사 = 데스크톱 1440. 학생 태블릿 1024(가로)·폰 390. 학생 도구바=하단 중앙 가로, 터치 ≥44px.
- 계층: 프로젝트>그룹(선택)>캔버스(QR·정원20[편집자·참여자·뷰어 포함]·≤30p)>페이지>객체. 공유=권한 선택(편집자/참여자/뷰어)→권한별 QR. 편집자=로그인 필수, 참여자·뷰어=비로그인 시 닉네임+비번4. 뷰어=보기전용·정원 포함.

## 남은 작업 = 학생 area
D 입장(참여자·뷰어/편집자 로그인/폰 변형), E-뷰어(보기전용·도구바 없음), F 안내 3종(정원초과·잠금·보관), G 내 활동(재진입, 참여자/뷰어 구분). E-참여자는 s-e-participant.html 초기본 존재(공감투표 ♥; B 포스트잇 감정표현 ☺와 표현 통일 여부 미정).

## 좌표·자원
- planKey SoftN = `team::1615228139102610912`(쓰기 가능). 개인 프로덕트 `team::1524413750993371066`=View(쓰기 불가).
- IA 흐름도 FigJam fileKey = `OT6YlTAIzTNYMrf0m9yRoo`(IA용 유지). figma 플러그인 인증됨. ux-designer 스킬 = .claude/skills/ux-designer.
- wireframe-notes-v1.md(2026-06-15) = ux-designer가 쓴 **Figma 박스 v1 노트**(구버전 맥락). HTML 작업분 노트는 아직 없음.

관련: [[skill-usage-log]]
