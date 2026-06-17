# wf.css 토큰 레퍼런스

모든 토큰은 `wf.css`의 `:root`에 정의되어 있다. 라이트가 기본이고 다크는 `prefers-color-scheme` 또는 `<html data-theme="dark">`로 자동 전환된다(어댑티브 토큰 `--wf-a-*`가 다크에서 재정의되고, 시맨틱 토큰은 그걸 참조하므로 따라온다).

## 목차
- [1. 시맨틱 토큰 (이걸 우선 쓴다)](#1-시맨틱-토큰-이걸-우선-쓴다)
- [2. 타이포그래피 (스케일 + 유틸 클래스)](#2-타이포그래피-스케일--유틸-클래스)
- [3. 간격 / 라운드 / 그림자 / 이징](#3-간격--라운드--그림자--이징)
- [4. 컬러 팔레트 (필요할 때만)](#4-컬러-팔레트-필요할-때만)
- [5. 유틸리티 클래스](#5-유틸리티-클래스)
- [6. 테마 / 커스터마이징](#6-테마--커스터마이징)

---

## 1. 시맨틱 토큰 (이걸 우선 쓴다)

화면을 짤 땐 거의 항상 이 시맨틱 토큰만으로 충분하다. 다크 대응이 자동이라 팔레트(아래 4번)를 직접 쓰는 것보다 안전하다.

### 텍스트
| 토큰 | 용도 |
|---|---|
| `--wf-text-strong` | 제목·강한 텍스트 |
| `--wf-text-default` | 본문 |
| `--wf-text-sub` | 보조·캡션 |
| `--wf-text-disabled` | 비활성 |
| `--wf-text-accent` | 강조·링크 (모노크롬: 진한 슬레이트) |
| `--wf-text-on-primary` | primary 배경 위 글자(흰색) |

### 배경(Surface)
| 토큰 | 용도 |
|---|---|
| `--wf-bg-base` | 페이지 배경 |
| `--wf-bg-elevated` | 카드·시트·헤더 배경 |
| `--wf-bg-subtle` | 약한 배경 |
| `--wf-bg-float` | 떠 있는 요소 배경 |
| `--wf-bg-pc-screen` | PC 화면 바깥 배경 |
| `--wf-dimmed` | 모달 딤드 오버레이 |

### 경계선
| 토큰 | 용도 |
|---|---|
| `--wf-border` | 기본 경계선 |
| `--wf-border-hairline` | 얇은 헤어라인(카드 테두리 등) |
| `--wf-border-strong` | 강한 경계선 |

### Brand / State
| 토큰 | 용도 |
|---|---|
| `--wf-primary` / `--wf-primary-hover` | 주조색(버튼) / 호버. 모노크롬 슬레이트, 흰 글자 항상 가독 |
| `--wf-primary-weak-bg` | 연한 강조 배경(선택된 nav 등) |
| `--wf-success` / `--wf-warning` / `--wf-danger` | 상태색(초록/노랑/빨강) — 와이어프레임에서 색은 여기에만 절제해서 |

---

## 2. 타이포그래피 (스케일 + 유틸 클래스)

두 계열: `t*`(타이틀), `st*`(서브타이틀·본문). line-height ≈ size × 1.5. 클래스를 붙이면 size+line이 함께 적용된다.

| 클래스 | size / line | 대략 용도 |
|---|---|---|
| `.wf-t1` | 30 / 40 | 최상위 타이틀 |
| `.wf-st1`~`.wf-st3` | 29~27 / 38~36 | 큰 타이틀 |
| `.wf-t2` | 26 / 35 | 페이지 제목 |
| `.wf-st4`~`.wf-st6` | 25~23 | 섹션 헤드 |
| `.wf-t3` | 22 / 31 | 소제목 |
| `.wf-st7` | 21 / 30 | |
| `.wf-t4` | 20 / 29 | |
| `.wf-st8`,`.wf-st9` | 19,18 | 카드 타이틀 |
| `.wf-t5` | 17 / 25.5 | 본문(큼) |
| `.wf-st10` | 16 / 24 | 본문·블록 타이틀 |
| `.wf-t6` | 15 / 22.5 | 본문(기본) |
| `.wf-st11` | 14 / 21 | 보조 본문 |
| `.wf-t7` | 13 / 19.5 | 캡션·라벨 |
| `.wf-st12` | 12 / 18 | 작은 캡션 |
| `.wf-st13` | 11 / 16.5 | 배지·미세 텍스트 |

각 스케일엔 정렬용 아이콘 높이 토큰도 있다: `--wf-t6-icon`, `--wf-st10-icon` 등.

**굵기 클래스**: `.wf-regular`(400) `.wf-medium`(500) `.wf-semibold`(600) `.wf-bold`(700) `.wf-extrabold`(800).
**토큰으로 쓸 때**: `font-size: var(--wf-t6-size); line-height: var(--wf-t6-line);`, `font-weight: var(--wf-weight-bold);`
**패밀리**: `var(--wf-font-family)` (Pretendard → 시스템 폰트 폴백).

---

## 3. 간격 / 라운드 / 그림자 / 이징

### 간격 `--wf-space-N`
`2, 4, 6, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 112, 128` (px). 예: `gap: var(--wf-space-16)`, `padding: var(--wf-space-24)`.

### 라운드
| 토큰 | px | 용도 |
|---|---|---|
| `--wf-radius-badge` | 8 | 배지 |
| `--wf-radius-button` | 12 | 버튼·인풋 |
| `--wf-radius-card` | 16 | 카드·리스트 |
| `--wf-radius-card-lg` | 20 | 큰 카드·배너 |
| `--wf-radius-chip` | 999 | 칩 |
| `--wf-radius-full` | 9999 | 원형(아바타·아이콘버튼) |

### 그림자
`--wf-shadow-1`(미세) · `--wf-shadow-2`(카드 기본) · `--wf-shadow-3`(호버) · `--wf-shadow-float`(플로팅).

### 이징 / 모션
`--wf-bezier-linear|ease|out|expo|back`, 기본 전환 `--wf-ease`(= out). 시간 `--wf-duration-fast`(0.12s) / `--wf-duration`(0.18s).

---

## 4. 컬러 팔레트 (필요할 때만)

시맨틱 토큰으로 안 되는 특수 케이스에서만. 각 색 `50`(옅음)~`900`(진함), 그리고 다크 자동 대응판 `--wf-a-*`.

- **slate(accent 앵커)** `--wf-slate-50…900` — 테마 독립. `500`=accent, `600`=primary.
- **blue 슬롯** `--wf-blue-*` / `--wf-a-blue-*` → 와이어프레임에선 slate로 alias됨(즉 blue를 써도 무채색으로 나온다).
- **grey** `--wf-grey-50…900` / `--wf-a-grey-50…900` (다크 대응).
- **상태색** `--wf-red-* --wf-green-* --wf-yellow-* --wf-teal-* --wf-orange-* --wf-purple-*` + `--wf-a-*` 대응.
- **grey opacity** `--wf-grey-opacity-50…900` (반투명 오버레이).
- **base** `--wf-white` `--wf-black`.

> 다크 자동 대응이 필요하면 항상 `--wf-a-*`(어댑티브) 쪽을 써라. 고정 `--wf-grey-500` 등은 라이트/다크 동일하게 고정된다.

---

## 5. 유틸리티 클래스

`wf.css` [8]·[9]에 정의:

- **타이포**: `.wf-t1….wf-st13`, `.wf-regular….wf-extrabold` (위 2번)
- **텍스트 색**: `.wf-text-strong` `.wf-text-default` `.wf-text-sub` `.wf-text-accent` `.wf-text-danger` `.wf-text-success`
- **배경**: `.wf-bg-base` `.wf-bg-elevated` `.wf-bg-subtle` `.wf-bg-float`
- **그라데이션 페이드**(가장자리 흐림): `.wf-fade-top` `.wf-fade-bottom` `.wf-fade-left` `.wf-fade-right`

---

## 6. 테마 / 커스터마이징

- **다크/라이트**: 기본 라이트. OS 다크모드 자동 적용. 강제는 `<html data-theme="dark">` / `"light"`.
- **accent 색 바꾸기**: `wf.css` [1]의 `--wf-slate-50…900` 10개만 바꾸면 accent 전체가 전파된다.
- **라이트 톤 전체**: [1] 고정 팔레트가 단일 소스 → 여기만 고치면 [2] 어댑티브 라이트가 참조해 전파.
- **다크 톤**: [7] 다크 오버라이드 블록에서 조정.
