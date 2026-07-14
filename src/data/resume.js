// 이력서·포트폴리오 공용 데이터
// /resume 인쇄 페이지와 Career 페이지가 함께 사용한다.
// 수치는 사이트(Career)를 정본으로 한다 — 스펙: docs/superpowers/specs/2026-07-13-ai-era-resume-redesign-design.md

export const aiProjects = [
    {
        title: "Hostay",
        status: "판매중",
        period: "2026.06 — 07 · 361 commits",
        oneLiner: "국내외 8개 숙박 플랫폼(에어비앤비·부킹닷컴·직방 등)의 예약·차단·정산·채팅을 한 화면에서 관리하는 통합 PMS",
        why: "다중 플랫폼 숙소 운영 시 오버부킹 위험과 정산·메시지 분산 문제를 해소하기 위해",
        arch: "통합 캘린더 + iCal 연동, 예약 확정 시 타 채널 자동 차단, 수수료 자동 정산·CSV 내보내기, 역할별 공유 링크(권한·만료·PIN)",
        tags: ["PMS", "iCal", "자동화", "정산"],
        link: "https://hostay.vercel.app/preview.html",
    },
    {
        title: "Plan P",
        status: "출시 준비",
        period: "2026.07 · 118 commits",
        oneLiner: "계획해도 계획대로 되지 않는 P들을 위한 영어회화 앱 — 화면을 켤 때마다 잠금화면에 영어 문장이 뜨고, 소리 내어 말해야 잠금이 해제됩니다",
        why: "학습 앱을 여는 의지에 기대는 대신, 폰을 켜는 기존 습관 위에 학습을 얹어 습관화 비용을 없애기 위해",
        arch: "Kotlin + Jetpack Compose 네이티브, Room DB, 음성 인식 발화 판정(한국식 발음 관대), Leitner 간격반복, Play Billing 구독",
        tags: ["Android", "Kotlin", "Compose", "음성인식"],
        link: "/previews/plan-p.html",
    },
    {
        title: "Plan P: 투데이",
        status: "개발 중",
        period: "2026.07 · 45 commits · 3일 개발",
        oneLiner: "Plan P와 연동되는 투두·일정 관리 Android 앱 — 폰을 켜는 순간을 학습과 일정의 허브로 확장하는 스핀오프",
        why: "잠금화면 학습(Plan P) 위에 하루 일정까지 얹어, 폰을 켜는 습관을 생산성으로 연결하기 위해",
        arch: "Kotlin + Jetpack Compose, Room DB, 패키지 쿼리 기반 Plan P 연동(미설치 시 기능 양보), 폴더 그룹핑·온보딩 가이드",
        tags: ["Android", "Kotlin", "Compose", "Room"],
        link: "/previews/today.html",
    },
    {
        title: "PromoPilot",
        status: "로컬 운영",
        period: "2026.07",
        oneLiner: "로컬 프로젝트 폴더를 분석해 인스타그램·스레드·X 맞춤 홍보 카드뉴스를 자동 생성·검수·게시하는 마케팅 자동화 도구",
        why: "개발자가 만든 프로젝트의 SNS 홍보물 제작과 게시를 사람 손 없이 반복하기 위해",
        arch: "Next.js + Playwright 렌더링 — AI가 렌더된 PNG를 재검토해 배치를 자동 보정, Claude·MiniMax 모델 라우팅, X·Threads·Instagram API, dry-run/live 모드",
        tags: ["Next.js", "Playwright", "AI 에이전트", "SNS API"],
        link: "/previews/promopilot.html",
    },
    {
        title: "Quant Auto Trader",
        status: "운영 중",
        period: "2026.04 — 05 · 219 commits",
        oneLiner: "5개 LLM 에이전트가 병렬로 매매하고, 수익률 악화를 스스로 감지해 전략을 재튜닝하는 무인 퀀트 시스템",
        why: "사람 개입 없이 시장 변화에 적응하는 자기치유(self-healing) 트레이딩 구조를 검증하기 위해",
        arch: "Python + Cascade LLM(Gemini Flash→Claude Sonnet) 라우팅, 모멘텀·역발상·신호·변동성·DCA 5전략 노드, Supabase 저장, 실시간 대시보드",
        tags: ["Python", "LLM Agent", "Supabase", "자가치유"],
        link: "/previews/quant.html",
    },
    {
        title: "Auto_Thread",
        status: "3개월 무중단 운영",
        period: "2026.04 — 07 · 300 commits",
        oneLiner: "GitHub 저장소를 Gemini로 분석해 Threads·Twitter·Bluesky·Mastodon 4개 SNS에 홍보 콘텐츠를 자동 생성·게시하는 파이프라인",
        why: "개발자가 만든 프로젝트의 홍보를 사람 손 없이 지속하기 위해",
        arch: "Node.js 20(ESM) + GitHub Actions 워크플로우 4개, Gemini API 콘텐츠 생성, 플랫폼별 API 게시, dry-run 지원",
        tags: ["Node.js", "GitHub Actions", "Gemini", "SNS 자동화"],
        link: "/previews/auto-thread.html",
    },
    {
        title: "Multi-calendar",
        status: "배포 준비",
        period: "2026.03 — 05 · 84 commits",
        oneLiner: "여러 캘린더를 통합 관리하는 PWA — FCM 푸시 알림, 가계부, 모바일 앱(Capacitor)까지 지원",
        why: "가족·팀 단위의 분산된 일정을 하나의 캘린더로 모으고 알림까지 자동화하기 위해",
        arch: "Next.js 15 + Firebase(Auth·Realtime DB·FCM) + Gemini API, Vercel Cron 스케줄, Capacitor 모바일 빌드, PWA",
        tags: ["Next.js", "Firebase", "FCM", "PWA"],
        link: "/previews/multi-calendar.html",
    },
    {
        title: "bizsite-platform",
        status: "개발 중",
        period: "2026.05 · 9,685 lines",
        oneLiner: "네이버·카카오 지도 URL 하나로 사업장 정보를 수집해 소상공인 홈페이지를 즉시 발행하는 빌더",
        why: "소상공인이 개발자 없이 지도 링크 하나로 자기 홈페이지를 갖게 하기 위해",
        arch: "Next.js pnpm 모노레포(admin·sites·API 3앱 + types·db·ui 3패키지), Prisma, 지도 스크래퍼, /s/[slug] 즉시 발행 구조",
        tags: ["Next.js", "Monorepo", "Prisma", "스크래퍼"],
        link: "/previews/bizsite.html",
    },
    {
        title: "남녀분석보고서",
        status: "완전 AI 자동화",
        period: "2025.12 — 2026.04",
        oneLiner: "남녀 간 생각의 차이에서 오는 오해를 상황별 성별 심리·MBTI 관점으로 AI가 분석해 매일 발행하는 뉴스레터 — 생성부터 발송·수익화까지 전 과정 완전 AI 자동화",
        why: "사람 손이 한 번도 닿지 않고 굴러가는 완전 무인 콘텐츠 서비스를 검증하기 위해",
        arch: "멀티 LLM 폴백(Gemini 2.5 Flash→GLM-4.5) + 15종 제목 패턴 프롬프트, 크론잡 생성→아침·저녁 자동 발송→DB 동기화(GitHub Actions), Leonardo.ai 이미지 파이프라인, 쿠팡 파트너스 수익화",
        tags: ["Next.js", "Supabase", "Gemini", "GitHub Actions"],
        link: "https://man-woman-analysis-report.vercel.app/",
        linkLabel: "서비스 보기",
    },
    {
        title: "github-repo-finder-mcp",
        status: "npm 배포",
        period: "2026.03",
        oneLiner: "프로젝트 코드를 분석해 필요한 GitHub 라이브러리를 AI가 추천하는 MCP 서버",
        why: "AI 에이전트가 개발 중 라이브러리 탐색을 IDE 안에서 즉시 수행하도록",
        arch: "TypeScript + MCP SDK + Octokit(GitHub 검색) + Zod 검증, 다언어(Python·Java·Kotlin·Go·Rust) 분석, install.sh 한 줄로 IDE 자동 설정",
        tags: ["MCP", "TypeScript", "Octokit", "DX"],
        link: "https://github.com/jyoung9154/github-repo-finder-mcp",
        linkLabel: "GitHub 보기",
    },
];

export const resume = {
    name: { ko: "박재영", en: "Park Jae Young" },
    title: "AI-Native Full-Stack Developer & Agentic Workflow Engineer",
    profile: "1992.07.09 · 남 · 서울 거주",
    contacts: [
        { label: "jyoung_9154@naver.com", href: "mailto:jyoung_9154@naver.com" },
        { label: "github.com/jyoung9154", href: "https://github.com/jyoung9154" },
    ],
    about: [
        "Java/Spring 기반 풀스택 개발자로, 500만+ 사용자 규모의 B2B/B2C 그룹웨어(전자결재·메일) SaaS를 설계·개발·운영해 왔습니다.",
        "전자결재팀에서 시작해 메일팀을 거쳐, 지금은 LLM/RAG/MCP 기반 AI 워크플로우 개발을 전담합니다.",
        "역할이 나뉜 AI 에이전트 팀을 설계해 기획–개발–검증 전 과정을 수행하고, 아키텍처부터 배포·자동화까지 End-to-End로 책임집니다.",
        "긍정적이고 밝은 ENFP — \"안 되는 건 없다, 안 할 뿐이지\"라는 마인드로 일합니다.",
        "취미 : 코딩 · 특징 : 집돌이",
    ],
    skills: {
        main: "Java · Spring Boot · React · MySQL · Kubernetes · Docker · Kafka · Redis · Elasticsearch",
        ai: "LangGraph · Spring AI · MCP · RAG (Milvus) · Azure OpenAI · 멀티에이전트 오케스트레이션",
    },
    howIWork: [
        {
            title: "설계자–워커 멀티에이전트 체계",
            desc: "설계·판단은 사람이 맡고, 구현·테스트·리서치는 역할별 에이전트에 위임 — 작업 난이도별 모델 라우팅으로 품질과 비용을 동시에 통제",
        },
        {
            title: "개발 환경의 시스템화",
            desc: "훅 기반 품질 게이트, 반복 작업의 스킬 패키징, MCP 도구 연결 — 같은 작업을 두 번 손으로 하지 않도록 환경 자체를 코드로 관리",
        },
        {
            title: "사람·AI 경계 설계",
            desc: "완전 자동화 대신, 시스템이 틀릴 수 있는 지점에 검증 게이트와 사람의 승인 노드를 배치 (JIRA-AI 5중 검증 게이트)",
        },
    ],
    howIWorkNote:
        "기술 스택도 중요하지만, AI 개발에서는 스택 그 자체보다 기술의 용어와 개발 플로우를 파악하는 능력이 더 중요하다고 믿습니다. 도구가 바뀌어도 이 워크플로우로 새 기술을 빠르게 흡수합니다.",
    experience: [
        {
            company: "더존비즈온 (DOUZONE)",
            role: "Full-Stack Developer · 메일팀 → AI 워크플로우 전담",
            date: "2024.07 — 현재",
            groups: [
                {
                    heading: "JIRA-AI — 이슈 자동 분석·응답 AI 시스템 (사내 단독 개발)",
                    bullets: [
                        "\"쌓여 있는 방대한 Jira 데이터가 있는데, 왜 같은 문의에 매번 사람이 답하는가\"라는 의문에서 출발 — 사내 지식·소스코드·운영로그를 대조해 근거 있는 1차 답변을 자동 생성하는 시스템을 기획부터 개발까지 단독 수행",
                        "LangGraph 12-노드 오케스트레이션 — 패턴 즉답(LLM 호출 0회)·직통·일반 추론 3모드 라우팅으로 품질 표준화와 비용 최소화",
                        "4원천 RAG(Milvus) + 코드 5단계 추적으로 답변마다 근거 첨부, 자동 생성 패치는 5중 검증 게이트 통과 후에만 제안",
                        "성공 답변을 패턴 지식으로 축적하고 12개월 미사용 지식은 자동 퇴역 — 운영할수록 즉답률이 오르는 자가학습 루프",
                    ],
                },
                {
                    heading: "그룹웨어 메일 — AI 고도화·최적화 (500만+ 사용자 SaaS)",
                    bullets: [
                        "Spring AI 기반 MCP·RAG 플랫폼 구축 — 자연어 메일 요약·추출 자동화, 검색 속도 60% 개선·재탐색 40% 감소",
                        "LLM 스마트 답장 템플릿·메일 요약 서비스 출시 — 텍스트 파싱·임베딩 파이프라인 최적화로 메일 분석 30초 → 4초(86% 개선)",
                        "MSA(Kafka·Spring Cloud Stream) 대용량 메일 아키텍처 설계, SMTP/POP/IMAP 프로토콜 개발, 게이트웨이 라우팅 자동화",
                        "초기 로딩 10초 → 1초 미만(90%+ 개선) 백엔드 최적화, 리엔지니어링으로 최대 메모리 사용량 40% 절감",
                        "탈취 조회 자가진단 화면 제공으로 확인 요청 90% 감소, SSL 인증서 등록 자동화로 관련 CS 0건",
                        "FrontEnd 전면 리팩토링(리뷰·온보딩 효율 50% 향상), 강원랜드 망연계·전자정부 프레임워크·AWS S3 등 엔터프라이즈 대응",
                    ],
                },
            ],
        },
        {
            company: "World Travel",
            role: "Global Perspective Building",
            date: "2022.09 — 2024.05",
            groups: [
                {
                    heading: null,
                    bullets: ["6대륙 41개국 550일 — 문화적 유연성, 도전정신, 글로벌 커뮤니케이션"],
                },
            ],
        },
        {
            company: "더존비즈온 (DOUZONE)",
            role: "Full-Stack Developer · 전자결재팀",
            date: "2018.09 — 2022.06",
            groups: [
                {
                    heading: null,
                    bullets: [
                        "Amaranth 10 그룹웨어(B2B 50만+ 사용자) 개발 초기 멤버 — 개발부터 런칭까지 전 라이프사이클에 메인으로 참여, 전자결재 결재함·문서함·양식 핵심 로직 전담",
                        "데이터 마이그레이션 자동화 툴 개발 — 이관 소요 3일 → 2시간(97% 단축), 500여 개사 성공 이관 후 사내 마이그레이션 표준 모델로 채택(타 모듈 개발의 참조 표준)",
                        "BizboxAlpha 유지보수 800여 건 수행 — 결함률 지속 감소",
                    ],
                },
            ],
        },
    ],
    sideProjects: {
        note: "전부 2025.12부터 현재까지 위 멀티에이전트 워크플로우로 기획–개발–배포–운영을 단독 수행 · 10개 프로젝트 · 1,100+ 커밋",
        items: [
            { name: "Plan P: 투데이", desc: "Plan P와 연동되는 투두·일정 관리 앱", tech: "Kotlin·Compose", meta: "개발 중", date: "2026.07.11" },
            { name: "Plan P", desc: "계획해도 계획대로 되지 않는 P들을 위한 영어회화 앱", tech: "Kotlin·Compose", meta: "출시 준비", date: "2026.07.07" },
            { name: "PromoPilot", desc: "카드뉴스를 AI가 재검토·보정해 SNS에 게시하는 자동화 도구", tech: "Next.js·Playwright", meta: "로컬 운영", date: "2026.07" },
            { name: "Hostay", desc: "8개 숙박 플랫폼의 예약·차단·정산·채팅 통합 PMS", tech: "Next.js", meta: "판매중", date: "2026.06.22 — 2026.07.13" },
            { name: "bizsite-platform", desc: "지도 URL 하나로 소상공인 홈페이지를 즉시 발행하는 빌더", tech: "Next.js·Prisma", meta: "개발 중", date: "2026.05" },
            { name: "Quant Auto Trader", desc: "LLM 5-에이전트가 전략을 재튜닝하는 무인 퀀트", tech: "Python", meta: "운영 중", date: "2026.04.18 — 2026.05.07" },
            { name: "Auto_Thread", desc: "GitHub 저장소를 분석해 4개 SNS에 홍보 자동 게시", tech: "Node.js", meta: "3개월 무중단", date: "2026.04.03 — 2026.07.08" },
            { name: "Multi-calendar", desc: "여러 캘린더를 통합 관리하는 PWA — 푸시·모바일 앱", tech: "Next.js·Firebase", meta: "배포 준비", date: "2026.03.10 — 2026.05.29" },
            { name: "남녀분석보고서", desc: "성별 심리·MBTI 분석 뉴스레터 — 생성·발송·수익화 전 과정 완전 AI 자동화", tech: "Next.js·Supabase", meta: "무인 운영", date: "2025.12" },
        ],
        more: "상세 설명과 프리뷰 링크는 포트폴리오(jyoung9154.github.io/career)에서 확인할 수 있습니다.",
    },
    openSource: [
        { name: "AgentSkills", desc: "직군별 한국어 AI 에이전트 스킬 130+ 오픈소스 (기획·개발·마케팅·DevOps)", href: "https://github.com/jyoung9154/AgentSkills" },
        { name: "AIAgent_Report", desc: "5개 AI 코딩 에이전트의 세션 히스토리를 파싱해 일일 업무보고서 자동 생성", href: "https://github.com/jyoung9154/AIAgent_Report" },
        { name: "github-repo-finder-mcp", desc: "프로젝트 분석 기반 GitHub 라이브러리 추천 MCP 서버 · npm 배포", href: "https://github.com/jyoung9154/github-repo-finder-mcp" },
    ],
    education: [
        { name: "국가평생교육진흥원 — 컴퓨터공학 학사", date: "2019.07 — 2021.08" },
        { name: "부산과학기술대학교 — 소프트웨어개발", date: "2011.03 — 2013.02" },
    ],
    certifications: [
        { name: "정보처리기사 (한국산업인력공단)", date: "2021.06" },
        { name: "TOPCIT Level 3 (IITP)", date: "2021.10" },
        { name: "컴퓨터활용능력 2급 (대한상공회의소)", date: "2019.08" },
        { name: "프로젝트 최우수상 — Esquisse (KG ITBank)", date: "2018.06" },
    ],
    military: { name: "대한민국 육군 정보사령부(HID) — 임관 후 특수임무 수행, 중사 전역", date: "2013.08 — 2017.11" },
};
