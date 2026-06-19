// ============================================================================
// wf-screen.js — board-v2 와이어프레임 공용 스크립트 (교사 A 영역)
// 테마 토글 + 캔버스 카드 더보기(⋮) 메뉴. 두 화면 공용.
// ============================================================================
(function () {
  // ===== 색상 테마(팔레트) 선택 — #themeBtn → 하단 색상 피커 =====
  // 팔레트 정의는 custom.css의 html[data-palette="..."] 토큰 오버라이드와 짝.
  // dot=대표(강조)색, bg=배경 틴트 — 스와치는 좌/우로 두 색을 나눠 보여줌
  var PALETTES = [
    { key: 'indigo',     name: '인디고',   dot: '#4a4fd6', bg: '#f5f6fe' },
    { key: 'violet',     name: '바이올렛', dot: '#7536c9', bg: '#f8f4fd' },
    { key: 'teal',       name: '틸',       dot: '#0c857f', bg: '#f1f9f9' },
    { key: 'emerald',    name: '에메랄드', dot: '#138046', bg: '#f2f9f5' },
    { key: 'amber',      name: '앰버 틴트', dot: '#c87000', bg: '#fef8f0' },
    { key: 'amber-warm', name: '앰버 웜',   dot: '#c87000', bg: '#f5f3ef' }
  ];
  var STORE_KEY = 'canvas-palette';
  var root = document.documentElement;

  function readPalette() {
    var saved;
    try { saved = localStorage.getItem(STORE_KEY); } catch (e) {}
    var ok = PALETTES.some(function (p) { return p.key === saved; });
    return ok ? saved : 'indigo';
  }
  function applyPalette(key) {
    root.dataset.palette = key;
    try { localStorage.setItem(STORE_KEY, key); } catch (e) {}
    var bar = document.getElementById('themePicker');
    if (bar) {
      bar.querySelectorAll('.theme-swatch').forEach(function (s) {
        s.classList.toggle('is-selected', s.dataset.palette === key);
      });
    }
  }

  // 저장값(또는 기본 인디고)을 즉시 적용
  applyPalette(readPalette());

  var themeBtn = document.getElementById('themeBtn');
  if (themeBtn) {
    // 색상 피커 바를 1회 생성
    var picker = document.createElement('div');
    picker.className = 'theme-picker';
    picker.id = 'themePicker';
    picker.setAttribute('role', 'group');
    picker.setAttribute('aria-label', '색상 테마 선택');
    var html = '<span class="tp-label">색상 테마</span>';
    PALETTES.forEach(function (p) {
      html += '<button class="theme-swatch" type="button" data-palette="' + p.key +
              '" style="--sw:' + p.dot + ';--bg:' + p.bg + '" title="' + p.name + '" aria-label="' + p.name + '"></button>';
    });
    picker.innerHTML = html;
    document.body.appendChild(picker);
    applyPalette(readPalette()); // 갓 만든 스와치에 선택 표시

    // 버튼 바로 아래에 위치시키기 (우측 정렬, 화면 밖으로 안 나가게 보정)
    function positionPicker() {
      var b = themeBtn.getBoundingClientRect();
      picker.style.visibility = 'hidden';
      picker.style.display = 'flex';
      var w = picker.offsetWidth;
      var left = b.right - w;                 // 버튼 오른쪽 끝에 맞춤
      left = Math.max(8, Math.min(left, window.innerWidth - w - 8));
      picker.style.left = left + 'px';
      picker.style.top = (b.bottom + 8) + 'px';
      picker.style.display = '';
      picker.style.visibility = '';
    }

    themeBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      var willOpen = !picker.classList.contains('is-open');
      if (willOpen) positionPicker();
      picker.classList.toggle('is-open');
    });
    window.addEventListener('resize', function () {
      if (picker.classList.contains('is-open')) positionPicker();
    });
    picker.addEventListener('click', function (e) {
      var sw = e.target.closest('.theme-swatch');
      if (sw) applyPalette(sw.dataset.palette);
    });
    // 바깥 클릭 시 닫기
    document.addEventListener('click', function (e) {
      if (picker.classList.contains('is-open') &&
          !picker.contains(e.target) && e.target !== themeBtn) {
        picker.classList.remove('is-open');
      }
    });
  }

  // 캔버스 카드 더보기(⋮) — 보관/삭제 (이벤트 위임)
  function closeAllMenus() {
    document.querySelectorAll('.card-menu.is-open').forEach(function (m) {
      m.classList.remove('is-open');
    });
    document.querySelectorAll('.wf-card.menu-open').forEach(function (c) {
      c.classList.remove('menu-open');
    });
  }
  document.addEventListener('click', function (e) {
    var kebab = e.target.closest('.kebab');
    if (kebab) {
      var menu = kebab.nextElementSibling;
      var isOpen = menu.classList.contains('is-open');
      closeAllMenus();
      if (!isOpen) {
        menu.classList.add('is-open');
        var ownerCard = kebab.closest('.wf-card');
        if (ownerCard) ownerCard.classList.add('menu-open');
      }
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
          '<div class="wf-card tpl is-selected"><div class="tpl-preview mode-blank"></div><div class="tpl-body"><div class="tpl-name">빈 캔버스</div><div class="tpl-desc">아무것도 없는 자유 캔버스</div></div></div>' +
          '<div class="wf-card tpl"><div class="tpl-preview mode-brainstorm"></div><div class="tpl-body"><div class="tpl-name">브레인스토밍</div><div class="tpl-desc">생각을 모으고 분류하는 틀</div></div></div>' +
          '<div class="wf-card tpl"><div class="tpl-preview mode-mindmap"></div><div class="tpl-body"><div class="tpl-name">마인드맵</div><div class="tpl-desc">중심 주제에서 가지치기</div></div></div>' +
        '</div>' +
        '<div class="tpl-foot">' +
          '<span class="tpl-note">고르면 바로 편집 화면으로 들어가요</span>' +
          '<div class="tpl-btns">' +
            '<button class="wf-btn is-weak" data-tpl-close>취소</button>' +
            '<a class="wf-btn" href="t-b-edit.html?new=1">이 템플릿으로 시작</a>' +
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

  // ===== 캔버스 삭제 — 확인 모달 (트리거: 카드 ⋮ 메뉴의 .menu-item.is-danger) =====
  var DEL_HTML =
    '<div class="confirm-dim" id="delDim" aria-hidden="true">' +
      '<div class="confirm-modal" role="alertdialog" aria-labelledby="delTitle">' +
        '<h2 id="delTitle" class="wf-st9 wf-bold">캔버스를 삭제할까요?</h2>' +
        '<p><span class="danger-name" id="delName">이 캔버스</span>를 <b>완전히 삭제</b>합니다. 페이지·객체·참여 기록이 모두 사라지고, <b>되돌릴 수 없어요.</b></p>' +
        '<div class="confirm-actions">' +
          '<button class="wf-btn is-weak" data-del-close>취소</button>' +
          '<button class="wf-btn is-danger" data-del-go>삭제</button>' +
        '</div>' +
      '</div>' +
    '</div>';
  document.body.insertAdjacentHTML('beforeend', DEL_HTML);
  var delDim = document.getElementById('delDim');
  var delName = document.getElementById('delName');
  document.addEventListener('click', function (e) {
    var del = e.target.closest('.menu-item.is-danger');
    if (del) {
      var card = del.closest('.ccard');
      var titleEl = card && card.querySelector('.title > span');
      delName.textContent = titleEl ? titleEl.textContent.trim() : '이 캔버스';
      closeAllMenus();
      delDim.classList.add('is-open');
      return;
    }
    // 와이어프레임: 실제 삭제는 구현 영역 — 취소·확인 모두 모달만 닫음
    if (e.target.closest('[data-del-close]') || e.target.closest('[data-del-go]') || e.target === delDim) {
      delDim.classList.remove('is-open');
    }
  });

  // ===== 제목 인라인 편집 — [data-editable] 더블클릭 → 편집(캔버스명·그룹명) =====
  document.addEventListener('dblclick', function (e) {
    var el = e.target.closest('[data-editable]');
    if (!el) return;
    el.setAttribute('contenteditable', 'true');
    el.focus();
    var range = document.createRange();
    range.selectNodeContents(el);
    var sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
  });
  document.addEventListener('keydown', function (e) {
    var t = e.target;
    if (e.key === 'Enter' && t.getAttribute && t.getAttribute('contenteditable') === 'true') {
      e.preventDefault();
      t.blur();
    }
  });
  document.addEventListener('blur', function (e) {
    var t = e.target;
    if (t.getAttribute && t.getAttribute('contenteditable') === 'true') {
      t.removeAttribute('contenteditable');
    }
  }, true);
})();
