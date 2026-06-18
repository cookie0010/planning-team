# One-Pager 산출물 템플릿

> 이 파일은 `@one-pager-writer`가 생성하는 1-pager의 **표준 구조**입니다.
> 작성 규칙(개조식 필수·출처 링크·버전 관리 등)은 `.claude/agents/one-pager-writer.md`를 따릅니다.
> 아래 구조를 사용자 언어로 그대로 따르세요. `(Required)`는 필수, `(Optional)`은 선택입니다.
> 워딩·어투 규칙(군더더기 라벨·`§`·'탐침' 등 회피, Pain Point·일상어·정직 프레이밍)은 `.claude/agents/one-pager-writer.md`의 "Style & 어투"를 따릅니다. **메타 변경설명 라인("문서 버전: vN — …")은 쓰지 말 것 — 헤더의 `Version` 필드만 둡니다.**

---

# [Idea Name]
> Project: [project-slug — carry over from the Idea Deep-Dive]
> Date: YYYY-MM-DD / Version: v1

## 0. 서비스 컨셉 (Service Concept)
- (Required) 이 서비스가 한마디로 무엇인지 — 누구를 위한 무엇인가 (제품 실체 중심 한 문장)
- (Optional) 대표 사용 장면 한 줄 (어떤 순간에 켜서 무엇을 하는가)

## 1. 배경 / 문제 (Problem)
- (Required) What problem or pain point exists today
- (Required) Who experiences it, and in what situation (the target)
- (Optional) How it is currently being solved (limits of the existing approach)
- (Required) Quantitative evidence (user count / time lost / market size) — **every data point (number, survey result, quote) MUST carry its source as an inline link in the form `([source](URL))` immediately after the claim. A number without a verifiable, linked source does not pass.**

> ⚠️ **현상(phenomenon) ≠ 문제(problem)**: "도구가 없다 / X가 일어난다"는 *현상*이다. 문제로 쓰려면 그 pain을 겪는 **주체와 비용**을 보여라. 수요·니즈가 미검증이면 단정하지 말고 **'가설'로 명시** — 현상을 문제로 둔갑시키면 미검증 결론을 전제로 까는 순환논리가 된다. (해답을 먼저 쥐고 풀 문제를 역설계하는 solution-first 함정 경계.)

## 2. 왜 지금? (Why Now) — build empathy
- (Required) A one-liner that makes the reader nod, "Yeah, that's me"
- (Required) Why we must move now (market shift / technology / internal situation)
- (Optional) What's lost by not acting / signals that back the timing

## 3. 제안 (Proposed Approach)
- (Required) 핵심 제안을 **논리 흐름대로** — "원인 / 해결책" 같은 PASA 라벨로 억지 분할하지 말 것 (현황 → 왜 이 접근 → 무엇을 만드는가가 자연히 이어지게)
- (Optional) 이 프로덕트만의 킥 (구체 기능 1~3개)
- (Required) **수요·문제가 미검증이면 '해결책'이라 단정 금지** → '가설적 제안'으로 쓰고, 현황→제안 사이의 논리 도약을 "PoC로 검증할 핵심 가설"로 명시 (입증된 척 금지 — '공백이 있다' ≠ '사용자가 우리 걸 쓴다')

## 4. 벤치마킹 (Benchmarking)
- (Required) Existing players / references that already tackle this problem (or the closest adjacent ones) — **each one MUST carry a live site link in the form `[제품/서비스명](URL)`. A benchmark named without a clickable link does not pass.**
- (Required) For each: what they do well, and the gap or weakness we exploit (one line each)
- (Optional) Quantitative reference points from them (pricing / user count / traction) — attach the source link `([출처](URL))` right after the number

> 벤치마킹엔 **비교만** 담는다 — 차별점은 5절, 자기잠식·경쟁 대응 같은 *리스크*는 10절(리스크)로 보낼 것.

## 5. 차별점 (Differentiation)
- (Required) 기존·인접 플레이어 전부와 갈라서는 **결정적 차별점** (4절 벤치마킹의 gap과 연결)
- (Optional) 차별점이 단일 요소가 아니라 결합(예: 채널 × 기능 × 현지화)이면, 그 결합 구조와 "하나만으론 성립 안 하는 이유"
- (Optional) 미검증 요소가 섞여 있으면 '가설'로 표기 (입증된 척 금지)

## 6. 비즈니스 모델 (Business Model)
- (Required) 가치를 수익·지속가능성으로 어떻게 연결하는가 — 과금 주체·방식; 무료라면 회사 전략상 가치(리텐션·전환·번들 등)
- (Optional) 모회사/기존 제품 채널과의 수익·전략 관계
- (Optional) 아직 미정이면 '추후 결정'으로 정직하게 (단정 금지)

## 7. 시장 진입 전략 (How it works)
- (Required) Initial users / use context (who first, and where)
- (Required) The essential core features (exclude nice-to-haves)
- (Optional) Usage flow in 1–3 steps

## 8. 기대 효과 (Why it matters)
- (Required) If it works, what value is created (for users / for the company)
- (Optional) Rough scale and direction ("how meaningful, roughly")
- (Optional) The link to company strategy / goals

## 9. 검증 계획 (Next Step)
- (Required) What you want to try next (prototype / experiment / interviews)
- (Required) What you'd confirm to judge "this looks viable" (the validation question)
- (Optional) What's needed (time / people / budget — rough)

## 10. 리스크 / 미해결 질문 (Risks & Open Questions)
- (Required) The most uncertain assumption (the one that, if wrong, breaks the premise)
- (Optional) Expected obstacles (technical / cost / organizational)
- (Optional) [ ] Questions you don't have answers to yet
