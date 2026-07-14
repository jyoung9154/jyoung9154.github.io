# AI 시대 이력서/포트폴리오 개선 — 디자인 스펙

날짜: 2026-07-13
근거: 브런치 "AI시대의 이력서 작성하기" 1·2편 (https://brunch.co.kr/@103ab3ed4f1f4f6/153, /154)

## 컨텍스트

브런치 글 2편의 프레임으로 현재 포트폴리오(jyoung9154.github.io)와 다운로드 이력서를 진단한 결과:

**이미 충족**: 경력 기술이 배경→개선→성과 구조(글이 말한 "B2B SaaS 경력기술" 방식), 개인 AI 프로젝트 8개(= 5단계 사이드 증명), 수치 성과 다수.

**갭 4가지**:
1. "AI를 어떻게 쓰는가"(4단계 시스템화) 서사 부재 — "전부 AI로 개발"이라고만 하고 워크플로우·사람/AI 경계 설계가 없음
2. 막힌 지점 서사 없음 — 전부 성공담, 제약 속 설계 판단 이야기 부재
3. 쉬운 언어 레이어 부족 — LangGraph/MCP 등이 AI 이해도 낮은 독자에게 안 읽힘
4. PDF(3월, 별도 Vercel 사이트 인쇄본)와 사이트(7월)의 내용·수치 불일치

**확정된 결정**:
- PDF 전략: 사이트 안에 `/resume` 인쇄 페이지 신설 (별도 Vercel 이력서 사이트는 은퇴)
- 타깃 독자: 이중 레이어 (쉬운 한 줄 먼저 + 기술 상세는 아래)
- AI 서사 재료: 멀티에이전트 위임 체계 + 훅·스킬·MCP 환경 자동화 + 회사 업무 AI 활용
- 수치 정본: **사이트** (90% 감소, 500여 개사, 2024.07 입사). PDF에만 있는 수치(30초→4초, 처리량 40%, 3,000+기업)는 사용하지 않음
- PDF에만 있던 비수치 자산(학력, 컴활2급, KG ITBank 최우수상, Korean Agent Skills 120+, velog)은 /resume에 포함

## 변경 사항

### 1. 포지셔닝 통일

영문 타이틀을 **"AI-Native Full-Stack Developer"** 로 통일:
- `src/components/About.js:40` 뱃지 "Java Full-Stack Developer & Data Engineer" → "AI-Native Full-Stack Developer"
- `src/components/Career.js:225` 뱃지 "AI Full-Stack Developer" → "AI-Native Full-Stack Developer"
- Home의 한국어 "AI 풀스택 개발자"는 유지

### 2. Career: "00. AI와 일하는 방식" 섹션 신설

위치: Hero+Summary 섹션 다음, `01. 핵심 역량` 앞. 섹션 네비게이션(`Career.js:250-254`)에 `00. AI와 일하는 방식`(`#how-i-work`) 추가.

구성 (기존 `CompetencyCard`/`premium-card` 스타일 재사용):

**리드 문장** (쉬운 언어 레이어):
> AI에게 일을 '시키는' 수준을 넘어, 역할이 나뉜 AI 에이전트 팀을 설계해 운영합니다. 저는 설계와 판단에 집중하고, 구현·테스트·조사는 에이전트에게 위임합니다. 아래의 모든 프로젝트가 이 방식으로 만들어졌습니다.

**카드 1 — 설계자·워커 멀티에이전트 체계**
- 쉬운 한 줄: "혼자 일해도 팀처럼 굴러가는 구조"
- 상세: 메인 세션은 설계·검토·통합에 집중, 구현·테스트·리서치는 역할별 전용 서브에이전트에 위임. 작업 난이도에 따라 상위·경량 모델을 라우팅해 품질과 비용을 동시에 통제
- 증거: 개인 프로젝트 9개 · 1,100+ 커밋을 이 체계로 단독 수행

**카드 2 — 개발 환경의 시스템화**
- 쉬운 한 줄: "같은 작업을 두 번 손으로 하지 않도록, 환경 자체를 코드로 관리"
- 상세: 훅(hook)으로 품질 게이트·컨텍스트 관리를 자동화, 반복 작업은 재사용 가능한 스킬로 패키징, MCP 서버로 외부 도구 연결
- 증거: Korean Agent Skills — 한국 시장 특화 AI 에이전트 스킬 120+ 오픈소스 공개 `[확인 1]`

**카드 3 — 사람·AI 경계 설계**
- 쉬운 한 줄: "어디까지 AI에 맡기고, 어디서 사람이 판단할지를 설계하는 것이 진짜 역량"
- 상세: 사내 JIRA-AI에서 유형별 패턴 즉답(LLM 0회)·직통·일반 추론 라우팅, 자동 생성 패치는 5중 검증 게이트를 통과해야만 제안되도록 설계
- 증거: 완전 자동화 대신, 시스템이 틀릴 수 있는 지점에 사람의 승인 노드를 배치 `[확인 2]`

**막힌 지점 인용구** (blockquote, 카드 아래):
> "완벽한 자동화가 목표가 아닙니다. 막히는 지점을 아는 상태로 시스템을 계속 살아 있게 굴리는 것 — 자동 패치를 바로 적용하지 않고 검증 게이트와 사람 승인 뒤에 두는 이유입니다." `[확인 2]`

### 3. 이중 레이어 리프레임 (기존 콘텐츠 소폭 수정)

- `Career.js:558` 섹션 제목: "03. 개인 AI 프로젝트 — 전부 AI로 개발" → **"03. 사이드 프로젝트 — 어디까지 가는지의 증명"**
- 03 인트로(`Career.js:562-565`) 교체:
  > 업무 외 시간에 위의 멀티에이전트 워크플로우로 기획부터 배포·운영까지 단독 수행한 프로젝트들입니다. **9개 프로젝트 · 1,100+ 커밋 · 최장 3개월 무중단 운영** — 회사 밖에서 아이디어가 어디까지 갈 수 있는지의 증명입니다.
- JIRA-AI 인트로(`Career.js:350-352`): 쉬운 문장을 앞에 — "고객 문의가 들어오면 AI가 사내 지식·소스코드·운영로그를 뒤져 근거 있는 답변 초안을 만들어주는 시스템입니다." (기존 문장의 기술 정보는 유지)
- 메일 프로젝트 인트로(`Career.js:405-407`): "수백만 사용자가 쓰는 그룹웨어 메일에 AI를 심는 일과, 그 밑의 인프라를 빠르고 안정적으로 만드는 일을 함께 합니다." `[확인 3]` + 기존 문장 유지

### 4. `/resume` 인쇄 페이지 신설

**파일**:
- NEW `src/data/resume.js` — Career.js의 `aiProjects` 배열 이동(Career는 import로 사용) + /resume 전용 압축 데이터(경력 bullet, 학력, 자격증, 연락처)
- NEW `src/components/Resume.js` — 인쇄 최적화 페이지
- `src/styles/index.scss` — `@media print` 규칙 추가 (`.nav-header`, `footer` 숨김, A4 여백, 페이지 브레이크 제어)
- `src/components/App.js` — `<Route exact path="/resume">` 추가
- 링크 교체: `Header.js:34`, `Footer.js:48`, `Career.js:633`의 `/assets/resume.pdf` → `/resume`
- `public/assets/resume.pdf`는 삭제하지 않고 유지(외부에 뿌려진 기존 링크 보호), 단 사이트 어디서도 링크하지 않음

**페이지 디자인**: 흰 배경·검정 텍스트(다크 사이트와 별개), A4 2페이지 목표, 화면에서만 보이는 "PDF로 저장" 버튼(`window.print()`), 상단에 "이 이력서는 포트폴리오와 항상 동기화됩니다" 안내(인쇄 시 숨김).

**콘텐츠** (수치는 전부 사이트 정본):

- 헤더: 박재영 Park Jae Young — AI-Native Full-Stack Developer & Agentic Workflow Engineer · 서울 · jyoung_9154@naver.com · github.com/jyoung9154 · jyoung9154.github.io · velog.io/@jyoung9154
- ABOUT: {getCareerYearLabel()} Java/Spring 풀스택. B2B/B2C 그룹웨어(전자결재·메일) SaaS 설계·개발·운영, LLM/RAG/MCP 기반 AI 전환 주도. 역할별 AI 에이전트 팀을 설계·운영하는 워크플로우로 기획–개발–검증 전 과정 수행.
- HOW I WORK WITH AI (3 bullets): 섹션 2의 카드 3장 압축판
- WORK EXPERIENCE:
  - **더존비즈온 (2024.07 — 현재)** Full-Stack Developer · AI Service Transition
    - JIRA-AI(사내 단독 개발): LangGraph 12-노드 오케스트레이션, 3모드 라우팅(패턴 즉답 LLM 0회), 4원천 RAG(Milvus)+코드 5단계 추적, 자동 패치+5중 검증 게이트, 자가학습 루프
    - 메일 AI: Spring AI 기반 MCP·RAG 플랫폼 — 검색 속도 60% 개선·재탐색 40% 감소
    - 최적화: 초기 로딩 10s→1s 미만(90%+), 리엔지니어링으로 메모리 40% 절감
    - 운영 자동화: 탈취 조회 자가진단으로 확인 요청 90% 감소, SSL 인증서 자동화로 관련 CS 0건
    - FrontEnd 전면 리팩토링(온보딩·리뷰 효율 50%↑), 강원랜드 망연계·전자정부 프레임워크·AWS S3 대응
  - **World Travel (2022.09 — 2024.05)**: 6대륙 41개국 550일
  - **더존비즈온 (2018.09 — 2022.06)** Full-Stack Developer
    - Amaranth 10 전자결재 신규 구축 — 결재함·문서함·양식 핵심 로직 전담(기획 단계부터)
    - 마이그레이션 자동화 툴 — 이관 3일→2시간(97% 단축), 500여 개사 성공 이관
    - BizboxAlpha 유지보수 800여 건
- PROJECTS — SIDE (멀티에이전트 워크플로우 단독 개발): Hostay(통합 PMS, 361c) · Plan P(잠금화면 영어회화, 5일 개발) · Quant Auto Trader(자가치유 무인 퀀트, 운영 중) · Auto_Thread(4-SNS 자동화, 3개월 무중단) · PromoPilot(렌더 결과를 AI가 재검토·보정) — 각 1줄, `src/data/resume.js`에서 선별
- OPEN SOURCE: Korean Agent Skills(120+) `[확인 1]` · github-repo-finder-mcp(npm 배포)
- EDUCATION: 국가평생교육진흥원 컴퓨터공학 학사(2019.07–2021.08) · 부산과학기술대 소프트웨어개발(2011.03–2013.02) `[확인 4]`
- CERTIFICATIONS: 정보처리기사(2021.06) · TOPCIT Lv.3(2021.10) · 컴퓨터활용능력 2급(2019.08) · KG ITBank 프로젝트 최우수상(2018.06)
- MILITARY: 육군 정보사령부(HID) 중사 전역 (2013.08 — 2017.11)

### 5. 검증

1. `yarn start` 로컬 구동 → `/career`(새 섹션·리프레임), `/resume` 화면 확인
2. Playwright로 `/resume` 스크린샷 + print-to-PDF 출력해 A4 2페이지·헤더/푸터 숨김·페이지 브레이크 확인
3. 기존 페이지(Home/About/Timeline) 회귀 확인, `yarn build` 통과
4. Header/Footer/Career CTA의 이력서 링크가 `/resume`으로 이동하는지 확인

## 사실 확인 — 전부 해결됨 (2026-07-13)

- `[확인 1]` ✅ github.com/jyoung9154/AgentSkills — SKILL.md 137개 검증(GitHub API), "130+"로 표기. AIAgent_Report도 오픈소스 목록에 추가
- `[확인 2]` ✅ JIRA-AI 기원 서사 확정: "쌓여 있는 방대한 Jira 데이터가 있는데 왜 같은 문의에 매번 사람이 답하는가"라는 의문에서 시작 — 인트로에 반영
- `[확인 3]` ✅ "500만+ 사용자" 표현 사용 승인
- `[확인 4]` ✅ 학력 기간 표기 확인 완료

## 하지 않는 것

- Timeline/Travel/GitHubProjects 변경 없음, Home 히어로 카피 유지
- JD별 조립본 자동 생성(향후 `/resume?target=` 같은 변형) — 이번 범위 아님
- 별도 Vercel 이력서 사이트 수정 없음(은퇴), `resume.pdf`·`resume_bak.pdf`·`Mail_1.pdf` 파일 삭제 없음
