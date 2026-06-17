---
name: feedback-no-premature-save
description: 검증이 충분히 끝나기 전에 Idea Deep-Dive를 수렴·저장하지 말 것
metadata:
  type: feedback
---

아이디어 스파링 중, 사용자가 명시적으로 더 검증하길 원하면 Idea Deep-Dive를 성급히 작성·저장하지 말 것. 충분한 검증·수렴 후에만 저장한다.

**Why:** Softn ID 세션에서 사고 파트너가 약한 고리가 아직 열려 있는데도 수렴 신호를 주고 idea-deep-dive.md를 저장하려 하자, 사용자가 "아직 대화 끝나지도 않았는데 왜 벌써 저장하냐, 충분한 검증 후 저장해야지"라며 제지함.

**How to apply:** 수렴 판단은 사용자와 함께. 중간 상태가 필요하면 idea-deep-dive가 아니라 working-notes(검토용 정리본)로 명확히 구분해 남길 것. Deep-Dive 저장은 사용자가 검증이 충분하다고 동의했을 때만.

관련: [[project-softn-id]], [[user-softn]]
