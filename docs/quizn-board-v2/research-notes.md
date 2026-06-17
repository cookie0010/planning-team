# Research Notes — quizn-board-v2 (핵심 수요 검증)

> ⚠️ **작업 메모 — 확정 deep-dive 아님.** deep-research 워크플로(5각도 검색 → 21소스 → 87주장 → 25검증 → 16확정/9폐기) 결과 정리.
> 검증 질문: "K-12 교실에서 '학생들이 한 공유 캔버스에 실시간으로 함께 만드는 협업 화이트보드(canvas형, ≠wall형 Padlet)'에 대한 **실증된(revealed) 수요**가 있는가."
> 판정일: 2026-06-09 / 방법: 적대적 3표 검증(2/3 반박 시 폐기)

## 한 줄 판정

**입증도 반증도 안 됨.** 공개된 revealed-demand(실채택·실사용) 데이터가 *존재하지 않아*, 이 가정은 원리상 desk research로 결론 불가 → **1차 검증(교사 인터뷰·실사용 탐침)만이 유일한 길.**

## ★ 가장 중요한 메타-발견: 워크플로 요약 ≠ 살아남은 증거

워크플로 자동 요약은 "수요 약함 / wall(Padlet)이 충족"으로 기울었으나, **그 결론을 떠받칠 강한 주장들이 자체 적대검증에서 전부 0-3으로 폐기됨:**
- "한국 PD에서 협업 수요는 Padlet(wall)로 충족됨" → **0-3 폐기**
- "교사 연수에 캔버스(Miro/FigJam)가 전혀 없음" → **0-3 폐기**
- "K-12 실채택이 Padlet > Miro로 기운다" → **0-3 폐기**

→ 즉 **"wall이 이미 충족한다(해석 B)"는 입증되지 않았다.** 동시에 "캔버스를 원한다"는 직접 증거도 못 찾음. **증거 공백 그 자체가 결론.**

## 살아남은 증거 (confirmed)

| # | 확정 사실 | 신뢰 | 한계 |
|---|---|---|---|
| 1 | **동시 자유발산은 개인보다 열위** — 다수 동시 브레인스토밍이 산출량·질 모두 낮음(Taylor 1958~, Diehl&Stroebe 1987 22중18, Mullen 메타분석 개인 ~83% 우위). 주원인 production blocking. | high | 구두 turn-taking 한정. **단 "디지털 동시입력(EBS)이 손실 제거"라는 구제 주장은 0-3 폐기** → 디지털이라고 면제 안 됨 |
| 2 | **능동적 공동 *구성*은 가치 있음** — 개념도 함께 만든 학생 > 완성본 공유/강의(구성 g=0.72 vs 공유 g=0.43; 협업 구성 개인 대비 g=0.42) | high | 구조화 node-link 개념도 **통제실험**. 자유 캔버스 일반화 불가, 교실 채택 데이터 아님 |
| 3 | **Jamboard 종료(2024.12.31) = 수요 아님** — 벤더 강제 폐기. 난민 발생은 사실이나 캔버스 수요 증거 아님 | high | — |
| 4 | Google 후속 추천(FigJam/Miro/Lucidspark)이 다 캔버스 = **벤더 파트너십**, 교사 채택 수요 아님 | med | 2차 출처 |
| 5 | 한국 교사 PD 표준 프레임 = "Padlet(협업)/Mentimeter(수합)/띵커벨(평가)" 코스 제목 verbatim 반복 | high(사실)/약(추론) | 코스 제목 사실은 확정. 단 "∴협업수요=wall로 충족"이라는 추론은 위에서 0-3 폐기 |

## 폐기된 주장 (rely 금지)
- EBS가 발산 생산성 손실을 없앤다 (0-3)
- 집단이 질도 항상 낮다 (0-3) / 발산-수렴 분리 권고 (1-2)
- **공동작업 가치는 수렴 단계에 있다(GCM)** (0-3) ← 우리 "수렴 모트" 가설을 깎음
- Padlet K-12 채택 > Miro (0-3)
- 한국 PD에 캔버스 전무 / 협업=wall 충족 (0-3 ×3)

## quizn-board-v2 함의
1. **핵심 수요 가정(모트=실시간 공동참여)은 desk로 못 내림** → A2/판정c 그대로 최상위 리스크. PoC를 **'기능 빌드'가 아니라 '수요 탐침'**으로 재설계해야. measure: "교사가 도구 받았을 때 공동 *구성* 활동을 *반복* 수업에 넣는가."
2. **설계 금지선**: 동시 자유발산을 핵심에 두지 말 것(증거가 가장 강하게 반대, EBS 구제도 폐기됨).
3. **"수렴에 모트 집중" 재프레이밍은 확신 하향** — 증거가 깨끗이 지지 안 함(GCM 0-3, 일부 출처는 canvas=발산/Padlet=수렴으로 반대). 2번(공동구성 우수)이 약하게만 지지.

## 미해결 (1차 검증으로만 답 가능)
- Jamboard 종료 직전·FigJam EDU·Miro Education의 실제 K-12 활성 사용 데이터?
- 한국 1:1 기기 보급(2023~2025) 이후 실시간 캔버스 실사용·연수 수요가 실제 증가했나? (현재 PD는 여전히 Padlet 중심)
- 수렴/공간조직 job에서 실시간 동시편집이 비동기 wall 대비 학습성과·교사만족 우위라는 직접 비교 증거?

## 주요 출처
- 브레인스토밍 생산성 손실(1차): [Diehl & Stroebe 1987 등 — Productivity Loss in Brainstorming](https://homepages.se.edu/cvonbergen/files/2013/01/Productivity-Loss-In-Brainstorming_Toward-the-Solution-of-a-Riddle.pdf) · [The Brainstorming Myth](https://criticalandcreativethinking.wordpress.com/wp-content/uploads/2011/07/the-brainstorming-myth1.pdf) · [Production blocking(Wikipedia)](https://en.wikipedia.org/wiki/Production_blocking)
- 협업 개념도 구성 효과(1차): [Systematic review of collaborative learning with concept maps](https://www.researchgate.net/publication/286029878_A_systematic_review_of_research_on_collaborative_learning_with_concept_maps) · [Group Concept Mapping(PMC)](https://pmc.ncbi.nlm.nih.gov/articles/PMC4078057/)
- Jamboard 종료/후속(1·2차): [Google 지원문서](https://support.google.com/jamboard/answer/14084927) · [Edutopia](https://www.edutopia.org/article/replacements-for-google-jamboard/) · [Temple EdVice](https://sites.temple.edu/edvice/2024/10/21/beyond-jamboard-top-collaborative-whiteboard-alternatives-for-teaching/)
- 한국 교사 PD 프레임: [에듀넷 코스](https://educator.edunet.net/local/ubmooc/view.php?id=268)

---

# 인사이트 — 수요 공백을 '우회'하는 논리 (2026-06-09, 사용자 정리 / one-pager용)

> 위 판정: "canvas/전자칠판이 교육적으로 유용한가"는 **솔직하게 가설로 남기고 PoC로 검증**한다(여력 있음). 대신 흔들리지 않는 fact와 디커플링 위에 포지셔닝을 세워 그 공백을 우회한다.

## 1) 흔들리지 않는 fact — 기기는 이미 깔렸고, 계속 깔리는 중
- 전국 단일 보급률 %는 정부가 깔끔히 공표하진 않으나, **중·고는 사실상 1:1 도달**: 컴퓨터 1대당 학생 수 = 초 1.1명 / **중 0.9명 / 고 1.0명** ([서울경제](https://www.sedaily.com/article/20028437)).
- 시도별 1인1기기 사업이 2022~2026에 걸쳐 단계 완료: 충북 2022 전국 최초 전원 지급 / **경기 2025 상반기 초3~고3 약 120만 명 보급 마무리** / 서울 중·고 2025 완료 / 제주 2026 초3~고1 체제 ([제주 시사저널](https://www.sisajournal.com/news/articleView.html?idxno=359113), [전북교육청 보급계획](https://it.jbe.go.kr/board/download.jbe?boardId=BBS_0000006&menuCd=DOM_000000105001001000&paging=ok&startPage=1&dataSid=45&command=update&fileSid=89)).
- → **교실에 학생 1인 1태블릿/크롬북이 깔려 있다는 전제는 fact.** (canvas 수요와 무관하게 성립하는 인프라 토대.)

## 2) ★디커플링 — 기기는 깔렸으나 그걸 정당화한 AIDT는 무너졌다
- 기기 보급의 명분 = AI디지털교과서(AIDT). 그런데 AIDT는 **한 학기 만에 붕괴**:
  - 2025 자율선정 학교 점검: **1회도 미접속 학생 평균 60%, 평균 활용률 8.1%** / 채택률 **1학기 32% → 2학기 19% 급락**, AIDT가 '교육자료'로 격하되며 사실상 퇴출 수순 ([교육을비추다](https://www.kyobit.com/news/articleView.html?idxno=3879), [THE AI](https://www.newstheai.com/news/articleView.html?idxno=10327)).
  - 원인 = **교사 업무 가중**: 수업 내내 기기 접속불량 해결·유해사이트 감시에 에너지 소모, 무거운 도구에 대한 거부 ([focusnjn 정책분석](https://focusnjn.com/article/1065591818096765)).
- → **디커플링 결론**: *깔린 기기*(fact) ↔ *그 기기를 채울 무거운 킬러앱(AIDT)의 실패*. 결과 = **유휴/저활용 기기 + 무거운 도구에 데인 교사**라는 빈 공간이 생김.

## 3) ★이번 기획의 핵심 포인트 — 퀴즈앤 성공 철학 차용
- 퀴즈앤의 성공 철학 = **"교사가 *가볍게* 수업을 설계할 수 있는 도구"**.
- 이 철학을 그대로 차용: 깔린 태블릿 위에서 **"교사가 *가볍게* 학생들을 참여시킬 수 있는 도구"**.
- AIDT가 '무거워서' 뒷전으로 밀린 바로 그 자리를, **가벼움(저마찰·저준비·저부담)**으로 파고든다. 이것이 이번 기획의 **핵심 포인트**이며, canvas/실시간 공동참여는 그 가벼운 참여를 담는 *형식 가설*이지 그 자체가 목적이 아니다.

## 4) 정직한 단서 (one-pager에서 보강 필요)
- **차별화 미해결**: "가볍게 참여시키는 도구"는 Padlet·띵커벨·퀴즈앤 자체와도 겹치는 우산이다. 가벼움만으론 차별점이 안 됨 → 차별은 결국 ① canvas 인터랙션 가설(PoC 검증 대상) + ② 퀴즈앤 distribution(이미 심의·로그인된 채널)에서 와야 함.
- **역풍 확인 필요**: 2026 일부 시도 '수업 중 스마트기기 사용금지' 흐름 ([충청리뷰](https://www.ccreview.co.kr/news/articleView.html?idxno=336601)) — 단 보통 *개인 스마트폰/비구조적 사용* 규제이고 *교육용 기기의 수업 활용*은 별개인 경우가 많아, 정확한 적용 범위는 one-pager 단계에서 확인.
