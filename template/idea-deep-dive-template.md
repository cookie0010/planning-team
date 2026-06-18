# Idea Deep-Dive 산출물 템플릿

> 이 파일은 `@idea-sparring-partner`(및 idea-sparring 스킬)가 수렴 시 생성하는 **Idea Deep-Dive의 표준 구조**입니다.
> 작성 규칙(지어내지 않기·출처 링크·확정 vs 가설 구분·성급한 수렴 금지)은 `.claude/agents/idea-sparring-partner.md`를 따릅니다.
> 아래 구조를 사용자 언어로 그대로 따르세요. `(Required)`는 필수, `(Optional)`은 스파링에서 실제로 나온 경우에만.
>
> **핵심 원칙 4가지:**
> 1. **지어내지 않기** — 안 나온 항목은 비우지 말고 `미확보`/`unknown`으로 *명시*하고 플래그. 숫자·인용·대안·경쟁사를 발명 금지.
> 2. **확정 vs 가설 구분** — 모든 load-bearing 주장에 `[확정]` / `[가설]` / `[미검증]` 태그. PoC로 검증할 것은 `[가설]`로 정직하게.
> 3. **출처 링크 필수** — 모든 정량 데이터·인용은 바로 뒤에 `([출처](URL))`. 출처 없는 숫자는 통과 못 함.
> 4. **이건 working-notes가 아니다** — 대화 왕복을 옮기지 말고, 다음 단계(@one-pager-writer)가 바로 쓸 수 있는 *결론*만. 단, 1-pager가 필요로 하는 깊이(벤치마킹·반증·디커플링)는 빠뜨리지 말 것.

---

# [Idea Name]
> Project slug: [kebab-case-id]
> One-line summary: [한 줄 — 누가/언제/무엇이 아쉬운가 → 그래서 무엇을 한다]
> Date: YYYY-MM-DD / Version: v1
> 수렴 상태: [수렴 완료 / 부분 수렴(미해결 쟁점 잔존)] — 미해결이면 §9에 명시

## 0. 핵심 인사이트 / 모트 (한 줄)
- (Required) 이 아이디어를 한 문장으로 — *진짜 차별점(모트)이 무엇인가*. 기능이 아니라 인사이트로.
- (Optional) 그 모트가 `[확정]`인지 `[가설]`인지 태그. (예: 모트=실시간 공동참여 `[가설, PoC 검증대상]`)

## 1. 문제 (Problem)
- (Required) 누가 / 어떤 상황에서 / 무엇에 막히는가
- (Required) 그 페인의 근본 원인 (증상 말고 구조적 원인까지)
- (Optional) 안 풀면 무슨 일이 벌어지나 (비용·기회손실)
- (Optional) 정량 신호 — 있으면 `([출처](URL))` 부착. 없으면 `미확보 — 1-pager/PoC 단계에서 측정` 명시.

## 2. 타깃 사용자 (Target User)
- (Required) 페인을 가장 크게 느끼는 핵심 사용자 (구체적으로)
- (Optional) 인접/2차 사용자
- (Required) **비-타깃** — 의도적으로 제외하는 세그먼트와 그 이유 (예: 원인이 구조적이라 도구로 해결 불가)

## 3. 기존 대안 & 벤치마킹 (Current Alternatives & Benchmarking)
> 다음 단계(@one-pager-writer §4 벤치마킹)가 바로 쓰는 핵심 입력. **여기를 부실하게 두지 말 것.**
- (Required) 오늘 이 문제가 어떻게 해결/우회되는가 (대안 없으면 "none" 명시)
- (Required) 기존 플레이어 / 레퍼런스 — **각각 라이브 링크 `[제품명](URL)` 필수.** 각 항목에: 잘하는 점 / 우리가 파고들 빈틈(한 줄씩)
- (Required) **의도적으로 제외한 경쟁셋과 이유** — (예: 카테고리가 다름, 사내 자기잠식 회피). frame을 흐리는 잘못된 비교 대상을 명시적으로 배제.
- (Optional) **선행 실패/부검(prior-art autopsy)** — 비슷한 시도가 왜 죽었나, 우리는 무엇이 다른가 (예: 토종 캔버스 알로가 떠난 4가지 이유 + 우리의 차이). 매우 강력한 섹션이니 있으면 꼭.
- (Optional) 정량 레퍼런스(가격·사용자수·트랙션) — 숫자 뒤 `([출처](URL))`.
- (Required) **이들 전부와 갈라서는 결정적 한 가지** (§0 모트와 연결)

## 4. 가설 & 솔루션 스케치 (Hypothesis & Solution Sketch)
- (Required) 믿는 솔루션 방향 (가설 문장)
- (Required) 핵심 인터랙션/primitive — 사용자가 실제로 *무엇을 하는가* 한 줄
- (Required) **가장 작은 첫 버전(MVP/PoC) 후보** 한 줄 — *무엇을 빌드하는 게 아니라 무엇을 검증하는가* 관점으로
- (Optional) 명시적 **설계 가드레일** — 증거가 반대하는 방향(하지 말아야 할 것). (예: 동시 자유발산을 핵심에 두지 말 것)

## 5. 왜 지금 (Why Now)
- (Required) 지금이어야 하는 이유 — 무슨 변화가 이걸 가능/필요하게 했나 (시장·기술·규제·인프라)
- (Optional) **디커플링/우회 논리** — 핵심 수요가 미입증이어도 성립하는 흔들리지 않는 fact + 그 위에 얹는 포지셔닝. (예: 기기는 깔렸으나 킬러앱은 실패 → 빈 공간) 각 fact에 `([출처](URL))`.

## 6. 근거 & 신호 (Evidence & Signals) — 양쪽 다 정직하게
- (Required) **지지 근거** — 스파링/리서치에서 확보한 정량 신호·직접 인용. 각각 `([출처](URL))` + `[확정]/[가설]` 태그. 없으면 "정량 근거 없음 — 1-pager 단계에서 수집" 명시.
- (Required) **반증/실패 사례** — 적대적 검증에서 *살아남은 반대 증거*를 숨기지 말 것. (예: 집단 브레인스토밍이 개인보다 열위 / 특정 수요가 desk로 입증 불가). 이게 비어 있으면 스파링이 덜 된 것.
- (Optional) 적대 검증 결과 메모 (무엇이 0-3로 폐기됐나 등)

## 7. 성공 신호 (Success Signal)
- (Required) 무엇을 보면 "되고 있다"를 알 수 있나 (방향성). *정확한 목표 수치는 1-pager 단계에서 확정* — 여기선 방향만.
- (Optional) PoC가 '수요 탐침'이라면: 어떤 revealed signal을 측정할 것인가 한 줄.

## 8. 핵심 가정 (Key Assumptions to Validate)
> 스파링 후에도 *여전히 불확실한* 것만. 위험도 순.

| # | 가정 | 위험도 | 검증 방법 |
|---|---|---|---|
| A1 | (가장 큰 약한 고리부터) | 높음 | (가장 싼 검증 방법) |
| A2 | | | |

## 9. 미해결 질문 (Open Questions)
- (Required) 수렴 후에도 남은 진짜 미해결 질문 — 우선순위순. (확정된 것·추측은 넣지 말 것)
- 부분 수렴이라면: 다음 스파링에서 깰 쟁점을 명시.

## 10. 비목표 / 범위 밖 (Non-goals) — (Optional)
- 의도적으로 *지금은 안 하는* 것 + 이유 (스코프 방어용)

## 11. North-star / 장기 비전 — (Optional)
- (Optional) 장기 그림 / habit-transfer 시장 등. **반드시 "PoC 근거 아님 — 장기 가설"로 명시.** 단기 검증과 섞지 말 것.

## 12. 다음 단계 (Suggested Next Step)
- (Required) 라우팅 — Go 결정 상태에 따라:
  - **Go 미정(기본)**: `Hand off to @one-pager-writer for a Go/No-go 1-pager. Idea Deep-Dive saved at docs/<project-slug>/idea-deep-dive.md` + 함께 넘길 보조자료(working-notes.md / research-notes.md / 벤치마킹 메모) 경로 명시.
  - **Go 확정**: `Hand off to @prd-writer for the PRD (Go already confirmed — skipping the 1-pager).`
- (Optional) 다음 단계에서 *반드시 사용자에게 직접 물어 채울* 두 가지: 성공지표 정확한 목표치 · 요청하는 Go/No-go 결정.
