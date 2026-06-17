# wf.css 컴포넌트 카탈로그

복붙용 HTML 스니펫. 모두 `wf.css` [10] 컴포넌트 규칙과 `examples/`에서 추출했다. 조합 규칙: **베이스 클래스 + 색(color) + 변형(variant) + 크기(size)**.

---

## Button — `.wf-btn`

```html
<!-- 기본(primary, medium) -->
<button class="wf-btn">저장</button>

<!-- 크기: small / (기본=medium) / large / xlarge / 가로 꽉 -->
<button class="wf-btn is-small">작게</button>
<button class="wf-btn is-large">크게</button>
<button class="wf-btn is-xlarge">아주 크게</button>
<button class="wf-btn is-block">가로 100%</button>

<!-- 색: weak(연배경) / dark / light / danger -->
<button class="wf-btn is-weak">보조</button>
<button class="wf-btn is-dark">다크</button>
<button class="wf-btn is-light">라이트</button>
<button class="wf-btn is-danger">삭제</button>
<button class="wf-btn is-weak is-danger">삭제(연한)</button>

<!-- 비활성 -->
<button class="wf-btn" disabled>비활성</button>
```
조합 예: `class="wf-btn is-weak is-small"`, `class="wf-btn is-danger is-large is-block"`.
링크 버튼이 필요하면 `<a class="wf-btn …">`도 동일하게 동작(예시 home.html 참고).

---

## Badge — `.wf-badge`

```html
<!-- 기본=weak(연배경+진한 글자). 색: c-blue/c-teal/c-green/c-red/c-yellow/c-elephant -->
<span class="wf-badge c-blue">진행</span>
<span class="wf-badge c-green">완료</span>
<span class="wf-badge c-red">지연</span>
<span class="wf-badge c-yellow">검토</span>
<span class="wf-badge c-elephant">보관</span>

<!-- is-fill: 색 채움 + 흰 글자 / is-small: 더 작게 -->
<span class="wf-badge is-fill c-green">완료</span>
<span class="wf-badge c-blue is-small">NEW</span>
```
(와이어프레임 모노크롬에서 `c-blue`는 무채색 슬레이트로 나온다 — 상태 강조는 green/red/yellow에 절제해서.)

---

## Card — `.wf-card`

```html
<div class="wf-card">
  <h3 class="wf-st10 wf-bold">카드 제목</h3>
  <p class="wf-t6 wf-text-sub" style="margin-top:6px">설명 텍스트.</p>
</div>

<!-- 클릭 가능(호버 시 떠오름) -->
<div class="wf-card is-interactive">…</div>
```
`.wf-card`는 elevated 배경 + 헤어라인 테두리 + shadow-2 + padding 24를 이미 포함.

---

## List & ListRow — `.wf-list` > `.wf-list-row`

```html
<div class="wf-list">
  <div class="wf-list-row is-clickable">
    <span class="wf-avatar is-sm">JD</span>
    <div class="wf-list-row__body">
      <div class="wf-list-row__title">행 제목</div>
      <div class="wf-list-row__desc">2시간 전 · 작성자</div>
    </div>
    <span class="wf-badge c-green">완료</span>
  </div>
  <div class="wf-list-row is-disabled">
    <div class="wf-list-row__body">
      <div class="wf-list-row__title">비활성 행</div>
      <div class="wf-list-row__desc">보관됨</div>
    </div>
  </div>
</div>
```
`.wf-list-row__body`는 `flex:1`이라 가운데 영역이 늘어나고, 좌(아바타/아이콘)·우(배지/버튼)는 양끝에 붙는다. 마지막 행 구분선은 자동 제거.

---

## Chip / Tab — `.wf-chip`

```html
<div style="display:flex; gap:8px">
  <button class="wf-chip is-selected">전체</button>
  <button class="wf-chip">진행 중</button>
  <button class="wf-chip">완료</button>
</div>
```
`.is-selected`가 연한 강조 배경 + accent 텍스트. 탭/필터/세그먼트에 그대로 쓴다.

---

## Text Field — `.wf-field`

```html
<input class="wf-field" placeholder="예: 제목 입력" />
<input class="wf-field is-error" value="잘못된 값" />

<!-- 라벨 + 필드 묶음 -->
<div>
  <label class="wf-t7 wf-text-sub wf-semibold">제목</label>
  <input class="wf-field" placeholder="입력" style="margin-top:6px" />
</div>
```
포커스 시 배경이 밝아지고 테두리가 primary로. `.is-error`는 빨간 테두리.

---

## Divider / Hairline

```html
<div class="wf-divider"></div>            <!-- 1px 실선 -->
<div class="wf-divider is-thick"></div>    <!-- 8px 두꺼운 구분 블록 -->
<div class="wf-hairline"></div>            <!-- 토스식 0.5px 시각 두께 헤어라인 -->
```

---

## Avatar — `.wf-avatar`

```html
<span class="wf-avatar is-sm">SL</span>   <!-- 28px -->
<span class="wf-avatar">SL</span>          <!-- 40px(기본) -->
<span class="wf-avatar is-lg">SL</span>    <!-- 56px -->
```
원형 + primary 배경 + 흰 글자. 이니셜/짧은 텍스트용.

---

## Toast — `.wf-toast`

```html
<div class="wf-toast">작업이 저장되었습니다 ✓</div>
```
보통 화면 하단 고정 래퍼 안에 둔다(예시 app.html의 `.toast-wrap`: `position:fixed; left:50%; bottom:28px; transform:translateX(-50%)`).

---

## Radio — `.wf-radio`

```html
<label style="display:flex; align-items:center; gap:8px">
  <input type="radio" name="opt" class="wf-radio" checked /> 옵션 A
</label>
<label style="display:flex; align-items:center; gap:8px">
  <input type="radio" name="opt" class="wf-radio" /> 옵션 B
</label>
```

---

## wf.css에 없는 것 (로컬 CSS + 토큰으로)

탑바·사이드바·네비게이션 아이템·아이콘 버튼·히어로·요금제 카드 같은 레이아웃성 요소는 컴포넌트 클래스가 없다. **`examples/app.html`(앱형)·`examples/home.html`(랜딩형)의 로컬 `<style>` 패턴을 그대로 가져다 쓴다** — 단, 그 안에서도 색·타이포·간격은 토큰만 사용한다. 자주 쓰는 두 가지:

```css
/* 아이콘 버튼 (원형) */
.icon-btn {
  width: 38px; height: 38px; border-radius: var(--wf-radius-full);
  border: none; cursor: pointer;
  background: var(--wf-a-grey-100); color: var(--wf-text-sub);
  display: inline-flex; align-items: center; justify-content: center;
}
.icon-btn:hover { background: var(--wf-a-grey-200); }

/* 자리표시 placeholder (이미지/차트 자리, 빗금 패턴) */
.placeholder {
  background: repeating-linear-gradient(45deg,
    var(--wf-a-grey-100), var(--wf-a-grey-100) 10px,
    var(--wf-a-grey-50) 10px, var(--wf-a-grey-50) 20px);
  border: 1px dashed var(--wf-border-strong);
  border-radius: var(--wf-radius-card);
  display: flex; align-items: center; justify-content: center;
  color: var(--wf-text-sub);
}
```
