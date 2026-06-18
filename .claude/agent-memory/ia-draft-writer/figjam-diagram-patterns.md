---
name: figjam-diagram-patterns
description: FigJam generate_diagram 운용 — planKey, 잘 렌더된 IA 플로우차트 레시피, fileKey 재사용
metadata:
  type: reference
---

## planKey (whoami 결과)
- whoami가 2개 플랜 반환: **SoftN = `team::1615228139102610912`(Full seat, 쓰기 가능 — 이걸 사용)** / 개인 프로덕트 = `team::1524413750993371066`(View seat, 쓰기 불가).
- generate_diagram·use_figma는 SoftN planKey로. 다중 플랜이라도 SoftN이 명백한 정답(작업 프로젝트 + 유일한 쓰기 권한)이라 매번 되묻지 않아도 됨.

## 호출 전 필수
- **`figma:figma-generate-diagram` 스킬을 generate_diagram 호출 전에 반드시 로드.** (Mermaid 제약·플로우차트 가이드 세팅)

## 잘 렌더된 IA 플로우차트 레시피 (첫 시도에 깨끗이 렌더됨, 재사용)
- `flowchart LR`. 두 세계를 subgraph로, 각각 옅은 fill: 교사 `fill:#C2E5FF,stroke:#3DADFF`, 학생 `fill:#CDF4D3,stroke:#66D575`.
- 진입점 = 원 `(("...")):`, 자동 모달 = 육각형 `{{"..."}}`, 세계 간 다리(QR) = 스타디움 `(["..."])`.
- 점선 엣지 `-.->` = 자동 오픈·세계 간 다리·예외(정원초과/잠금). 실선 = 일반 이동.
- 한국어 라벨 OK. 특수문자(괄호·`=`·`·`·`/`) 들어가면 **반드시 따옴표로 감쌀 것** — 노드/엣지 라벨 모두.
- 노드 ID는 camelCase(projectList, canvasEditor…), `end`/`subgraph`/`graph` 금지. 이모지·`\n` 금지.
- 노드 ~12개 규모는 한 장으로 깔끔. 20개 넘으면 분할.

## fileKey 재사용 (반복 갱신)
- generate_diagram은 fileKey를 반환. **같은 IA를 v2로 다시 그릴 땐 그 fileKey를 넘겨 한 파일에 모을 것.** 새 파일 남발 금지.
- 제자리 교체 원하면: figma:figma-use-figjam 스킬 + use_figma로 옛 다이어그램 노드 삭제 후 같은 fileKey로 재생성. 옆에 둘지 위에 덮을지 사용자에게 한 번 확인.
- 생성 후 반환 URL은 **항상 마크다운 링크로** 사용자에게 보여줄 것.
- 도구가 개별 도형 이동·폰트 변경은 못 함 → 그런 요청은 "FigJam에서 직접 편집" 안내, 내용 변경은 재생성.

관련: [[project-canvas]]
