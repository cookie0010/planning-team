// ============================================================================
// wf-screen.js — board-v2 와이어프레임 공용 스크립트 (교사 A 영역)
// 테마 토글 + 캔버스 카드 더보기(⋮) 메뉴. 두 화면 공용.
// ============================================================================
(function () {
  // 테마 토글 (있을 때만)
  var themeBtn = document.getElementById('themeBtn');
  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      var r = document.documentElement;
      r.dataset.theme = r.dataset.theme === 'dark' ? 'light' : 'dark';
    });
  }

  // 캔버스 카드 더보기(⋮) — 보관/삭제 (이벤트 위임)
  function closeAllMenus() {
    document.querySelectorAll('.card-menu.is-open').forEach(function (m) {
      m.classList.remove('is-open');
    });
  }
  document.addEventListener('click', function (e) {
    var kebab = e.target.closest('.kebab');
    if (kebab) {
      var menu = kebab.nextElementSibling;
      var isOpen = menu.classList.contains('is-open');
      closeAllMenus();
      if (!isOpen) menu.classList.add('is-open');
      return;
    }
    if (!e.target.closest('.card-menu')) closeAllMenus();

    // 캔버스 카드 콘텐츠 클릭 → 캔버스 열기 (버튼·링크·메뉴·액션 영역 제외)
    if (e.target.closest('[data-new-canvas]') || e.target.closest('a') || e.target.closest('button') || e.target.closest('.card-menu')) return;
    var card = e.target.closest('.ccard[data-href]');
    if (card) location.href = card.getAttribute('data-href');
  });

  // ===== 새 캔버스 만들기 — 공통 모달 (트리거: [data-new-canvas]) =====
  var TPL_HTML =
    '<div class="tpl-dim" id="tplDim" aria-hidden="true">' +
      '<div class="tpl-modal">' +
        '<div class="tpl-modal-head">' +
          '<div><h2 class="wf-st4 wf-bold">새 캔버스 만들기</h2>' +
          '<p>템플릿을 골라 시작하세요. 페이지마다 다른 템플릿을 더할 수 있어요.</p></div>' +
          '<button class="tpl-close" data-tpl-close aria-label="닫기">✕</button>' +
        '</div>' +
        '<div class="tpl-grid">' +
          '<div class="wf-card tpl is-selected"><div class="tpl-preview">빈 페이지</div><div class="tpl-body"><div class="tpl-name">빈 캔버스</div><div class="tpl-desc">아무것도 없는 자유 캔버스</div></div></div>' +
          '<div class="wf-card tpl"><div class="tpl-preview">포스트잇 · 구역</div><div class="tpl-body"><div class="tpl-name">브레인스토밍</div><div class="tpl-desc">생각을 모으고 분류하는 틀</div></div></div>' +
          '<div class="wf-card tpl"><div class="tpl-preview">중심 · 가지</div><div class="tpl-body"><div class="tpl-name">마인드맵</div><div class="tpl-desc">중심 주제에서 가지치기</div></div></div>' +
        '</div>' +
        '<div class="tpl-foot">' +
          '<span class="tpl-note">고르면 바로 편집 화면으로 들어가요</span>' +
          '<div class="tpl-btns">' +
            '<button class="wf-btn is-weak" data-tpl-close>취소</button>' +
            '<a class="wf-btn" href="t-b-edit.html">이 템플릿으로 시작</a>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</div>';
  document.body.insertAdjacentHTML('beforeend', TPL_HTML);
  var tplDim = document.getElementById('tplDim');
  document.addEventListener('click', function (e) {
    if (e.target.closest('[data-new-canvas]')) { e.preventDefault(); tplDim.classList.add('is-open'); return; }
    if (e.target.closest('[data-tpl-close]') || e.target === tplDim) { tplDim.classList.remove('is-open'); return; }
    var tpl = e.target.closest('.tpl');
    if (tpl && tplDim.contains(tpl)) {
      tplDim.querySelectorAll('.tpl').forEach(function (t) { t.classList.remove('is-selected'); });
      tpl.classList.add('is-selected');
    }
  });
})();
