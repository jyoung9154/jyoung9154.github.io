import React from 'react';
import {
    SiSpring, SiReact, SiMysql, SiDocker, SiKubernetes,
    SiRedis, SiApachekafka, SiElasticsearch, SiLinux, SiGit
} from "react-icons/si";
import { MdOutlineSmartToy } from "react-icons/md";

// 기술 스택 뱃지 데이터
const techStacks = [
    { name: "AI", icon: <MdOutlineSmartToy className="text-purple-600" />, bg: "bg-purple-100", text: "text-purple-700" },
    { name: "Spring", icon: <SiSpring className="text-green-500" />, bg: "bg-green-100", text: "text-green-700" },
    { name: "React", icon: <SiReact className="text-sky-500" />, bg: "bg-sky-100", text: "text-sky-700" },
    { name: "MySQL", icon: <SiMysql className="text-blue-500" />, bg: "bg-blue-100", text: "text-blue-700" },
    { name: "Docker", icon: <SiDocker className="text-sky-600" />, bg: "bg-sky-100", text: "text-sky-700" },
    { name: "Kubernetes", icon: <SiKubernetes className="text-blue-600" />, bg: "bg-blue-100", text: "text-blue-700" },
    { name: "Redis", icon: <SiRedis className="text-red-500" />, bg: "bg-red-100", text: "text-red-700" },
    { name: "Kafka", icon: <SiApachekafka className="text-gray-800" />, bg: "bg-gray-100", text: "text-gray-800" },
    { name: "ElasticSearch", icon: <SiElasticsearch className="text-yellow-500" />, bg: "bg-yellow-100", text: "text-yellow-700" },
    { name: "Linux", icon: <SiLinux className="text-black" />, bg: "bg-gray-200", text: "text-gray-800" },
    { name: "Git", icon: <SiGit className="text-orange-500" />, bg: "bg-orange-100", text: "text-orange-700" }
];

const summaryHighlights = [
    "마이그레이션 자동화로 3일 소요 작업을 2시간으로 단축 (800+ 고객사 마이그레이션 진행)",
    "계정 탈취 확인 CS 요청 95% 감소 (주 100건 → 5건)",
    "메일 초기 로딩 20배 개선 (6초 → 0.3초)",
    "AI 검색 엔진 고도화로 검색 속도 60% 향상, 재탐색 40% 감소",
    "AI 기반 정보유출 자동탐지 적용으로 OOM/보안 사고 사전 차단 체계 구축",
    "메모리 사용량 40% 절감 및 OOM 장애 6개월 연속 0건 유지"
];

const companyProfile = {
    name: "더존비즈온",
    dept: "솔루션사업본부 솔루션개발팀",
    summary: "1977년 설립 | 소프트웨어 개발 | 임직원 1,755명 | 고객사 500+ (대기업·중견·공공)",
    units: [
        { label: "전자결재 Unit", period: "2018.09 ~ 2022.06" },
        { label: "메일 Unit", period: "2024.07 ~ 재직중" }
    ]
};

const stackCategories = [
    { title: "Backend", items: ["Spring Boot", "Spring AI", "Java", "JPA", "MyBatis"] },
    { title: "Frontend", items: ["React", "JavaScript", "JSP"] },
    { title: "Database", items: ["MySQL", "Oracle", "MSSQL", "Redis", "ElasticSearch"] },
    { title: "Infra & DevOps", items: ["Kubernetes", "Docker", "Kafka", "Linux", "Git"] },
    { title: "Mail Engine", items: ["SMTP", "POP3", "IMAP", "Mail Server Administration"] },
    { title: "AI / ML", items: ["Spring AI", "MCP", "LLM Tool Integration"] }
];

const competencyCards = [
    {
        title: "문제 발견 → 자동화 → 성과 측정",
        points: [
            "반복 CS를 코드로 해결하는 전략으로 유지보수 접수 95%를 자동화",
            "ElasticSearch + React 대시보드로 사용자 자가진단 구축, 응대 30분 → 즉시"
        ]
    },
    {
        title: "아키텍쳐 재설계 및 대규모 리팩토링 설계/설득",
        points: [
            "메일 프론트엔드 전면 리팩토링으로 렌더링 3.2초 → 0.8초, 번들 54% 감소",
            "의존성·성능 지표를 정량화해 CTO/팀장 승인 획득 후 단계적 실행"
        ]
    },
    {
        title: "0→1 전 생애주기 경험",
        points: [
            "Amaranth10 전자결재 프로젝트에서 기획·개발·런칭·운영 전 과정 주도",
            "전자결재 모듈을개발하고 베타/운영 안정화까지 책임"
        ]
    },
    {
        title: "End-to-End 풀스택 역량",
        points: [
            "React UI, Spring Boot API, Kubernetes 배포, Kafka/ElasticSearch 연동까지 직접 수행",
            "강원랜드 망연계 시스템에서 3-tier 보안 구조와 통계 API 동시 구축"
        ]
    },
    {
        title: "AI & MCP 통합",
        points: [
            "Spring AI 기반 MCP 서버 구축 및 자연어 처리 Tool 설계",
            "파라미터 검증·재시도·타임아웃·권한 정책으로 AI 연계 품질 확보"
        ]
    },
    {
        title: "성능 최적화 전문성",
        points: [
            "메일 초기 로딩 병목 제거로 6초 → 0.3초",
            "API 개선, 쿼리 튜닝, 인덱스 재설계, Progressive Loading으로 사용자 경험 개선"
        ]
    },
    {
        title: "소프트웨어 리엔지니어링",
        points: [
            "Filter + AOP 표준화로 인증 로직 단일화, 코드 변경 범위 156파일 → 1파일",
            "ThreadLocal 해제·버퍼 재사용·동적 스레드풀로 메모리 100% → 40%"
        ]
    }
];

// 뱃지 컴포넌트
function TechBadges({ items = techStacks, className = "" }) {
    return (
        <div className={`flex flex-wrap gap-2 mt-2 ${className}`}>
            {items.map((tech) => (
                <span
                    key={tech.name}
                    className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition ${tech.bg} ${tech.text}`}
                >
                    {tech.icon}
                    {tech.name}
                </span>
            ))}
        </div>
    );
}

  // 섹션별 커스텀 뱃지 프리셋
const badges = {
    header: techStacks, // 전체 스택
    task1: ["Spring", "React", "MySQL", "Redis", "Git", "Docker", "Kubernetes"].map(n => techStacks.find(t => t.name === n)),
    task2: ["Linux", "Spring", "React", "MySQL", "Git"].map(n => (n === "Spring" ? "Spring" : n)).map(n => techStacks.find(t => t.name === n || (n === "Spring" && t.name === "Spring"))),
    task3: ["Linux", "Spring", "React", "MySQL", "Git", "Kubernetes", "ElasticSearch", "Kafka"].map(n => techStacks.find(t => t.name === n || (n === "Spring" && t.name === "Spring"))),
    mailModule: ["Spring", "React", "MySQL", "Kubernetes", "ElasticSearch", "Kafka", "Linux", "Git"].map(n => techStacks.find(t => t.name === n || (n === "Spring" && t.name === "Spring"))),
  };


const Mark = ({ children, className = "" }) => (
    <span className={`px-1.5 py-0.5 rounded-md bg-indigo-50 text-rose-600 font-semibold ${className}`}>
        {children}
    </span>
);

const MarkProject = ({ children, className = "" }) => (
    <span className={`px-1.5 py-0.5 rounded-md bg-slate-700 text-white font-semibold ${className}`}>
        {children}
    </span>
);

const MarkLink = ({ children, className = "" }) => (
    <span className={`px-1.5 py-0.5 rounded-md bg-blue-100 text-blue-800 font-semibold ${className}`}>
        {children}
    </span>
);

export default function Career() {
    return (
        <div className="career-container min-h-screen bg-gradient-to-br">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                    <h1 className="text-4xl font-bold text-gray-800 mb-6">경력기술서</h1>

                    <div className="grid gap-6 lg:grid-cols-3">
                        <div className="bg-slate-900 text-slate-50 rounded-2xl p-6 shadow-inner">
                            <p className="text-sm uppercase tracking-wide text-slate-300 mb-2">👨‍💻 핵심 요약</p>
                            <p className="text-lg font-semibold leading-relaxed">
                                6년차 풀스택 개발자 | 그룹웨어 메일·전자결재 개발. 신규 프로젝트 설계부터 운영까지 라이프사이클 경험과 자동화·AI 통합을 통해
                                측정 가능한 임팩트를 만들어낸 End-to-End 오너십 보유.
                            </p>
                            <p className="mt-4 text-sm text-slate-200">
                                반복 업무 자동화·CS 95% 감소·성능 20배 개선·Spring AI 기반 MCP 구축 등
                                문제 발견 → 자동화 → 성과 측정 사이클을 주도합니다.
                            </p>
                        </div>

                        <div className="border border-slate-200 rounded-2xl p-6 bg-slate-50">
                            <p className="text-sm font-semibold text-slate-500 mb-3">핵심 성과</p>
                            <ul className="space-y-2 text-sm text-slate-700">
                                {summaryHighlights.map((item) => (
                                    <li key={item} className="flex gap-2">
                                        <span className="text-indigo-500">•</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* 회사 정보 - 요청한 원문을 보존하여 반영 */}
                        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6 rounded-2xl shadow-lg">
                            <h2 className="text-2xl font-bold mb-1">{companyProfile.name}</h2>
                            <p className="text-blue-100 mb-2">{companyProfile.dept}</p>
                            <p className="text-sm text-blue-100">{companyProfile.summary}</p>
                            <div className="mt-4 space-y-1 text-base">
                                {companyProfile.units.map((unit) => (
                                    <p key={unit.label}>
                                        {unit.label} <span className="text-blue-100">[{unit.period}]</span>
                                    </p>
                                ))}
                            </div>
                            <TechBadges items={badges.header} className="mt-4" />
                        </div>
                    </div>
                </div>

                {/* 기술 스택 */}
                <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                        <span className="w-1 h-8 bg-gradient-to-b from-amber-500 to-orange-600 mr-3 rounded" />
                        기술 스택
                    </h2>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {stackCategories.map((stack) => (
                            <div key={stack.title} className="p-4 rounded-xl border border-gray-200 bg-gray-50">
                                <p className="font-semibold text-gray-900 mb-2">{stack.title}</p>
                                <ul className="text-sm text-gray-700 space-y-1">
                                    {stack.items.map((item) => (
                                        <li key={item} className="flex items-start gap-2">
                                            <span className="text-emerald-500">•</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 주요 업무 - 원문 그대로 */}
                <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                        <span className="w-1 h-8 bg-gradient-to-b from-blue-500 to-indigo-600 mr-3 rounded" />
                        주요 업무
                        
                    </h2>

                    <div className="space-y-6 text-base text-gray-700">
                        <div className="p-5 rounded-xl border border-gray-200 bg-gray-50">
                            <p className="font-bold text-gray-900 mb-2">1.<Mark>그룹웨어 전자결재</Mark> 백엔드, 프론트엔드 개발 및 유지보수</p>
                            <p>- 기술 스택 : Java(Spring), Spring Boot, JSP, React, MySQL, Redis, Git, SVN, Docker, k8s</p>
                            <TechBadges items={badges.task1} /> 
                        </div>

                        <div className="p-5 rounded-xl border border-gray-200 bg-gray-50">
                            <p className="font-semibold text-gray-900 mb-2">2.그룹웨어 전자결재 <Mark>마이그레이션 개발 및 운영 담당</Mark></p>
                            <p>- 기술 스택: Linux, Spring Boot(JPA), React, MySQL, MSSQL, Oracle DB, Git</p>
                            <TechBadges items={badges.task2} /> 
                        </div>

                        <div className="p-5 rounded-xl border border-gray-200 bg-gray-50">
                            <p className="font-semibold text-gray-900 mb-2">3.<Mark>그룹웨어 메일</Mark> 개발 및 유지보수</p>
                            <p>- 기술 스택: Linux, Spring Boot, React, MySQL, Git, k8s, MailEngine(SMTP, POP, IMAP), ElasticSearch, Kafka</p>
                            <TechBadges items={badges.task3} />
                        </div>
                    </div>
                </div>

                {/* 핵심 역량 및 특징  */}
                <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                        <span className="w-1 h-8 bg-gradient-to-b from-indigo-500 to-purple-600 mr-3 rounded" />
                        핵심 역량 및 특징
                    </h2>

                    <div className="space-y-2 text-gray-800 text-base">
                        <p>• 역할: <Mark>[클라우드(SaaS), 구축]</Mark> 그룹웨어 메일·전자결재 영역 풀스택 개발·운영, 대규모 데이터 마이그레이션 자동화 주도, <Mark>Spring AI 기반 MCP 서버 구축</Mark> 및 Tool 호출 표준화.</p>
                        <p>• 강점: "반복되는 CS는 코드로 해결한다"는 원칙 아래 <Mark>문제 발견 → 자동화 → 성과 측정</Mark> 선순환을 실행하여 운영 비용을 수치화하고 경영진을 설득.</p>
                        <p>• 핵심 기술: Spring Boot, React, MySQL, Kafka, ElasticSearch, Kubernetes, MailEngine(SMTP/POP/IMAP), AWS S3, Redis.</p>
                        <p>• 주요 성과: 마이그레이션 3일→2시간, 탈취 확인 요청 90% 감소, 초기 로딩 20배 개선, 메모리 40% 절감, AI 검색 속도 60% 개선 등 측정 가능한 지표를 다수 확보.</p>
                    </div>

                    <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6 mt-6">
                        {competencyCards.map((card) => (
                            <div key={card.title} className="p-5 border border-gray-200 rounded-xl bg-gray-50/60">
                                <h3 className="font-bold text-gray-900 mb-3">{card.title}</h3>
                                <ul className="text-sm text-gray-700 space-y-2 [&>li]:font-medium">
                                    {card.points.map((point) => (
                                        <li key={point} className="flex gap-2">
                                            <span className="text-indigo-500">•</span>
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 주요 프로젝트 - 원문 그대로 */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                        <span className="w-1 h-8 bg-gradient-to-b from-green-500 to-emerald-600 mr-3 rounded" />
                        주요 프로젝트
                    </h2>

                    {/* 1. 메일 모듈 */}
                    <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow mb-8">
                        <div className="flex flex-wrap items-center gap-4 mb-2">
                            <h3 className="text-xl font-bold text-gray-800">1. 그룹웨어 내 메일 모듈 개발 및 유지보수</h3>
                        </div>
                        <div className="text-base text-gray-700 space-y-1 mb-4">
                            <p>기간: 2024.07 ~ 재직중</p>
                            <p>기술 스택: Spring AI, Spring Boot, React, MySQL, Kubernetes, ElasticSearch, Kafka, MailEngine(SMTP/POP/IMAP), Linux, Git</p>
                            {/* <TechBadges items={badges.mailModule} className="mb-4" /> */}
                            <p>역할: 소프트웨어 리엔지니어링 및 메일 개발 및 리팩토링 주도, 운영 자동화로 CS/운영 비용 절감</p>
                        </div>

                        <div className="space-y-6">
                            {/* SSL 인증서 등록 기능 개발 */}
                            <div className="rounded-lg bg-gray-50 p-4">
                                <p className="text-xl font-semibold text-gray-800">
                                <MarkProject>SSL 인증서 등록 자동화 개발</MarkProject>
                                <span className="ml-2 align-baseline text-sm text-gray-500">
                                    2024.10.01 ~ 2024.10.31
                                </span>
                                </p>
                                <ul className="mt-2 text-base text-gray-700 space-y-1 [&>li]:font-medium">
                                <li>배경: 인증서 갱신/적용을 터미널에서 <Mark>수동으로 처리</Mark>하며 반복 및 오류·지연 발생 및 다운타임 리스크가 존재</li>
                                <li>개선: <Mark>사용자가 직접 인증서 등록</Mark>, 검증·만료 알림 일원화, 인증서 적용을 위한 Kubernetes 업데이트 절차 정립</li>
                                <li>성과: 개발 이후 인증서 등록 요청 <Mark>접수율 0건</Mark>으로 수렴 및 <Mark>인증서 만료로 인한 장애 리스크 축소</Mark></li>
                                </ul>
                            </div>

                            {/* 메일 탈취 조회 기능 개발 */}
                            <div className="rounded-lg bg-gray-50 p-4">
                                <p className="text-xl font-semibold text-gray-800">
                                <MarkProject>메일 탈취 조회 기능 개발</MarkProject>
                                <span className="ml-2 align-baseline text-sm text-gray-500">
                                    2024.11.01 ~ 2024.11.30
                                </span>
                                </p>
                                <ul className="mt-2 text-base text-gray-700 space-y-1 [&>li]:font-medium">
                                <li>배경: 메일 <Mark>유지보수</Mark> 접수의 <Mark>90% 이상</Mark>을 차지, 로그 실시간 확인·전달에 개발 및 운영 병목 발생</li>
                                <li>개선: 사용자 자가 조회 화면 제공, 탈취 의심계정 리스트·주요 지표(IP/지역/패턴) 시각화</li>
                                <li>성과: 탈취 확인 요청 건수 90% 감소, 1차 응대 <Mark>자동화로 CS 리소스 대폭 감소</Mark></li>
                                </ul>
                            </div>

                            {/* 메일 허용정책 설정 기능 개발 */}
                            <div className="rounded-lg bg-gray-50 p-4">
                                <p className="text-xl font-semibold text-gray-800">
                                <MarkProject>메일 허용정책 설정 기능 개발</MarkProject>
                                <span className="ml-2 align-baseline text-sm text-gray-500">
                                    2024.12.01 ~ 2024.12.31
                                </span>
                                </p>
                                <ul className="mt-2 text-base text-gray-700 space-y-1 [&>li]:font-medium">
                                <li>배경: 릴레이설정 및 스팸장비 연동 요청을 <Mark>고객지원 센터 접수 후 개발팀이 직접 등록</Mark>하는 비효율 존재</li>
                                <li>개선: 관리자 UI 제공, 권한 검증 및 감사로그 연계로 <Mark>셀프 프로비저닝 구현</Mark></li>
                                <li>성과: 관리자 페이지에서 <Mark>고객지원팀이 직접 설정</Mark>함으로서 고객지원 및 개발팀 편의성 극대화</li>
                                </ul>
                            </div>

                            {/* 메일 내보내기 기능(법무 모듈) 개발 */}
                            <div className="rounded-lg bg-gray-50 p-4">
                                <p className="text-xl font-semibold text-gray-800">
                                <MarkProject>메일 내보내기 기능(법무 모듈) 개발</MarkProject>
                                <span className="ml-2 align-baseline text-sm text-gray-500">
                                    2025.01.02 ~ 2025.01.24
                                </span>
                                </p>
                                <ul className="mt-2 text-base text-gray-700 space-y-1 [&>li]:font-medium">
                                <li>배경: 법무적 내용으로 주고 받은 메일을 법무모듈 - 사건 연동 기능 개발 요청</li>
                                <li>개발: 특정 <Mark>메일 내보내기 기능</Mark>을 개발하여 법무모듈에 전달 후 메일 뷰어 API 제공</li>
                                <li>성과: <Mark>법무 사건</Mark>과 주고받은 <Mark>메일을 하나의 페이지</Mark>에서 조회</li>
                                </ul>
                            </div>

                            {/* 메일 FrontEnd 전체 리팩토링 */}
                            <div className="rounded-lg bg-gray-50 p-4">
                                <p className="text-xl font-semibold text-gray-800">
                                <MarkProject>메일 FrontEnd 전체 리팩토링</MarkProject>
                                <span className="ml-2 align-baseline text-sm text-gray-500">
                                    2025.01.01 ~ 2025.06.30
                                </span>
                                </p>
                                <ul className="mt-2 text-base text-gray-700 space-y-1 [&>li]:font-medium">
                                    <li>배경: 현행 프론트(React)소스가 <Mark>유지보수하기 매우 불편한 구조</Mark>로 되어 있어 <Mark>기능고도화 및 성능 저하, 유지보수 부담</Mark> 가중</li>
                                    <li>개선: 컴포넌트 모듈화, 상태 관리 단순화, 리스트 <Mark>렌더링 최적화</Mark>(가상 스크롤/메모이제이션), <Mark>공통 UI/훅 표준화 설계 및 개발</Mark></li>
                                    <li>성과: 프론트 <Mark>속도 최적화 및 유지보수 효율 증대</Mark>, 화면 응답 속도 개선</li>
                                    <li>특이사항: 메일 모듈 팀장 및 CTO에게 <Mark>리팩토링 필요성</Mark>과 프론트 <Mark>아키텍처 설계 및 코드 리뷰를 통해 승인</Mark> 후 진행</li>
                                    <li className="pl-4">개선 범위 : 메일 프론트 전체</li>
                                    <li>
                                        * 참고:                                         
                                        <MarkLink><a 
                                            href="/assets/Mail_1.pdf" 
                                            target="_blank" 
                                            rel="noopener"
                                            aria-label="메일 아키텍처 재설계 PDF, 새 창에서 열림"
                                        >
                                            메일 아키텍처 재설계 기획서.pdf
                                        </a>
                                        </MarkLink>
                                        
                                    </li>
                                </ul>
                            </div>

                            {/* 강원랜드 메일 망연계 시스템 개발 */}
                            <div className="rounded-lg bg-gray-50 p-4">
                                <p className="text-xl font-semibold text-gray-800">
                                <MarkProject>강원랜드 메일 망연계 시스템 개발</MarkProject>
                                <span className="ml-2 align-baseline text-sm text-gray-500">
                                    2025.02.03 ~ 2025.02.28
                                </span>
                                </p>
                                <ul className="mt-2 text-base text-gray-700 space-y-1 [&>li]:font-medium">
                                <li>배경: 망분리 환경에서 안전한 메일 연계 및 메일 수발신 통계 API 요청</li>
                                <li>개선: 망분리 환경의 내부망과 <Mark>외부망 연계 API 개발</Mark> 및 메일 수발신 <Mark>통계 API 개발</Mark></li>
                                <li>성과: 망분리 환경에서의 안정적인 송수신과 통계 데이터를 통한 메일 탈취 및 의심계정 경고하여 CS적요소 차단</li>
                                </ul>
                            </div>

                            {/* AWS S3 연동 */}
                            <div className="rounded-lg bg-gray-50 p-4">
                                <p className="text-xl font-semibold text-gray-800">
                                <MarkProject>AWS S3 연동</MarkProject>
                                <span className="ml-2 align-baseline text-sm text-gray-500">
                                    2025.04.07 ~ 2025.04.14
                                </span>
                                </p>
                                <ul className="mt-2 text-base text-gray-700 space-y-1 [&>li]:font-medium">
                                <li>배경: 더존 클라우드가 아닌 AWS 요청 고객사 수요 대응</li>
                                <li>개선: <Mark>메일모듈 AWS S3 연동</Mark> 대응</li>
                                </ul>
                            </div>

                            {/* 발송 진행 확인 기능 */}
                            <div className="rounded-lg bg-gray-50 p-4">
                                <p className="text-xl font-semibold text-gray-800">
                                <MarkProject>발송 진행 확인 기능</MarkProject>
                                <span className="ml-2 align-baseline text-sm text-gray-500">
                                    2025.04.24 ~ 2025.05.08
                                </span>
                                </p>
                                <ul className="mt-2 text-base text-gray-700 space-y-1 [&>li]:font-medium">
                                <li>배경: 메일 발송 상태 확인 요청 문의가 많아 개발 진행</li>
                                <li>개선: 메일 <Mark>발송/성공/실패 단계 모니터링 화면 제공</Mark></li>
                                <li>성과: 메일 실시간 모니터링을 통한 메일의 신뢰성 및 운영 가시성 확보</li>
                                </ul>
                            </div>

                            {/* 외부메일 반송 기능 고도화 */}
                            <div className="rounded-lg bg-gray-50 p-4">
                                <p className="text-xl font-semibold text-gray-800">
                                <MarkProject>외부메일 반송 기능 고도화</MarkProject>
                                <span className="ml-2 align-baseline text-sm text-gray-500">
                                    2025.05.09 ~ 2025.05.16
                                </span>
                                </p>
                                <ul className="mt-2 text-base text-gray-700 space-y-1 [&>li]:font-medium">
                                <li>배경: 아웃룩에서 발송한 메일 <Mark>반송 사유 파악 어려움</Mark></li>
                                <li>개선: <Mark>아웃룩에서</Mark> 메일 발송 후 <Mark>반송 시 반송메일을 추가</Mark></li>
                                <li>성과: 발송자가 반송되었는지 확인이 가능하여 문의 감소</li>
                                </ul>
                            </div>

                            {/* 전자정부 프레임워크 적용 */}
                            <div className="rounded-lg bg-gray-50 p-4">
                                <p className="text-xl font-semibold text-gray-800">
                                <MarkProject>전자정부 프레임워크 적용</MarkProject>
                                <span className="ml-2 align-baseline text-sm text-gray-500">
                                    2025.06.02 ~ 2025.07.02
                                </span>
                                </p>
                                <ul className="mt-2 text-base text-gray-700 space-y-1 [&>li]:font-medium">
                                <li>배경: 공공 환경 고객사 수요 맞춤 개발 진행</li>
                                <li>개선: <Mark>전자정부 프레임워크</Mark> 적용을 위한 <Mark>Spring-Boot 버전 변경 및 대응</Mark></li>
                                <li>성과: 공공 레퍼런스 대응력 강화 및 호환성 점검 리스크 감소, 운영 가이드 준수로 유지보수 용이성 및 확장성 확보 </li>
                                </ul>
                            </div>

                            {/* 메일 BackEnd 속도 개선 */}
                            <div className="rounded-lg bg-gray-50 p-4">
                                <p className="text-xl font-semibold text-gray-800">
                                <MarkProject>메일 BackEnd 최적화를 통한 속도 개선</MarkProject>
                                <span className="ml-2 align-baseline text-sm text-gray-500">
                                    2025.07.24 ~ 2025.08.20
                                </span>
                                </p>
                                <ul className="mt-2 text-base text-gray-700 space-y-1 [&>li]:font-medium">
                                <li>배경: 클라우드형 고객사 메일 <Mark>초기 접속</Mark>시 <Mark>10초 이상 소요</Mark>되어 최적화 진행</li>
                                <li>개선: 초기 접속시 필수 기초데이터 영역 세분화 및 데이터 분리 및 백그라운드 싱크 및 쿼리·인덱스 개선</li>
                                <li>성과: 메일 <Mark>초기 접속 및 갱신시 8~10초 → 500ms 이내로 단축</Mark></li>
                                </ul>
                            </div>

                            <div className="rounded-lg bg-gray-50 p-4">
                                <p className="text-xl font-semibold text-gray-800">
                                <MarkProject>메일 AI MCP 개발</MarkProject>
                                <span className="ml-2 align-baseline text-sm text-gray-500">
                                    2025.09.01 ~ 2025.09.19
                                </span>
                                </p>
                                <ul className="mt-2 text-base text-gray-700 space-y-1 [&>li]:font-medium">
                                <li>배경: 그룹웨어 OneAI(LLM) 구현에 따른 모듈별 <Mark>AI MCP 개발</Mark></li>
                                <li>개발: Spring AI로 <Mark>AI Tools를 설계·구현</Mark>하고 MCP로 <Mark>LLM과 모듈 간 공유/호출</Mark>을 표준화. 구조화된 출력과 파라미터 검증으로 질의 정합성을 보장하고, 재시도·타임아웃·권한 정책으로 외부 연동의 신뢰성을 확보. </li>
                                <li>성과: 자연어 질의로 연관 메일과 해당 링크를 제시하고 요약·추출까지 자동화, AI 전용 검색엔진 쿼리를 개발하여 검색 속도 60% 이상 개선 및 재탐색 40% 감소.﻿​</li>
                                </ul>
                            </div>

                            <div className="rounded-lg bg-gray-50 p-4">
                              <p className="text-xl font-semibold text-gray-800">
                                <MarkProject>메일 소프트웨어 리엔지니어링</MarkProject>
                                <span className="ml-2 align-baseline text-sm text-gray-500">
                                  2025.10.13 ~ 2025.11.07
                                </span>
                              </p>
                            
                              <ul className="mt-2 text-base text-gray-700 space-y-1 [&>li]:font-medium">
                                <li>
                                  배경: <Mark>Client → Mail Front → Mail 모듈(인증) → Mailbox 모듈(기능) → MailEngine(SMTP/POP/IMAP) → Client</Mark> 파이프라인에서, 인증/기능 구간의 메모리 누수 및 힙 사용량 지속 증가로 처리 지연과 OOM 리스크가 확인.
                                </li>
                            
                                <li>
                                  <div className="mt-1">
                                    <div className="font-semibold text-gray-700">Mail 모듈(인증)</div>
                                    <ul className="mt-1 ml-4 list-disc space-y-1 [&>li]:font-medium [&>li]:text-gray-700">
                                      <li>
                                        인증·세션 처리를 <Mark>Filter(인증 처리) + AOP(세션 체크 및 컨텍스트 주입)</Mark>로 전역 표준화하여 컨트롤러 내 인증/세션 체크 중복 제거 및 경로별 정책 일관성 확보
                                      </li>
                                      <li>
                                        힙 덤프/GC 로그 분석을 통해 장기 참조·버퍼 미해제 지점 식별하여 객체 수명주기 재설계, <Mark>AOP Final에서 메모리 최적화</Mark> 진행.
                                      </li>
                                    </ul>
                                  </div>
                            
                                  <div className="mt-3">
                                    <div className="font-semibold text-gray-700">Mailbox 모듈(기능)</div>
                                    <ul className="mt-1 ml-4 list-disc space-y-1 [&>li]:font-medium [&>li]:text-gray-700">
                                      <li>
                                        멀티스레드 환경에서 Kafka에서 메일 <Mark>대량 수신 후 병렬 처리로 처리 속도를 초과</Mark>해 버퍼 적체 및 OOM이 발생하던 문제를 <Mark>메일 유량 제어 모델 개발</Mark>.
                                      </li>
                                      <li>
                                        스레드풀(코어/최대/큐 용량)과 워커 메모리 상한을 처리시간 기준으로 재설계, 대용량 첨부 스트리밍 처리·버퍼 재사용으로 힙 피크와 GC 정지 시간 감소.
                                      </li>
                                      <li>
                                        쿠버네티스 Pod 수에 맞춰 컨슈머 인스턴스/파티션 수를 재정렬
                                      </li>
                                    </ul>
                                  </div>
                                </li>
                            
                                <li> 성과: <Mark>최대 메모리 사용량 100% → 60% </Mark>로 감소 및 인증 로직 중복 제거로 변경 범위 축소, 코드 리뷰/배포 리드타임 단축과 결함율 감소, 운영 알림·장애 티켓 감소로 <Mark>운영 안정성 향상</Mark></li>
                              </ul>
                            </div>

                            <div className="rounded-lg bg-gray-50 p-4">
                                <p className="text-xl font-semibold text-gray-800">
                                <MarkProject>메일 AI 내부정보유출 자동 탐지 개발</MarkProject>
                                <span className="ml-2 align-baseline text-sm text-gray-500">
                                    2025.11.17 ~
                                </span>
                                </p>
                                <ul className="mt-2 text-base text-gray-700 space-y-1 [&>li]:font-medium">
                                <li>배경: 메일을 발송 전 <Mark>AI를 통한 개인정보 및 기업 민감정보 유출 리스크</Mark> 사전 차단 필요성이 대두 </li>
                                <li>개발: 관리자가 메일 발송 승인 조건을 AI 프롬프트로 추가함으로서 <Mark>메일 본문·첨부파일 자동 검증</Mark>, HTML 본문 파싱 및 URL 추출, PDF·Word·Excel 파일 내용 자동 분석, 발송제한/관리자승인 정책 연동하여 사전에 유출 차단 할 수 있도록 개발</li>
                                <li>성과: 외부 발송 메일 <Mark>보안 사고 사전 예방</Mark> 및 메일 관련 개인정보보호법 및 기업 기밀 유출 1차적으로 사전 차단, 관리자 승인 이력으로 메일 보안 가시성 확보</li>
                                </ul>
                            </div>
                            <div className="rounded-lg bg-gray-50 p-4">
                                <p className="text-xl font-semibold text-gray-800">
                                <MarkProject>그 외 주요기능 고도화 다수</MarkProject>
                                <span className="ml-2 align-baseline text-sm text-gray-500">
                                    2024.07.31 ~ 
                                </span>
                                </p>
                                {/* <ul className="mt-2 text-base text-gray-700 space-y-1 [&>li]:font-medium" */}
                            </div>
                        </div>

                    </div>

                    {/* 2. 전자결재 데이터 마이그레이션 */}
                    <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow mb-8">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">2. 전자결재 데이터 마이그레이션</h3>
                        <div className="text-base text-gray-700 space-y-1 [&>li]:font-medium mb-4">
                            <p>기간: 2018.12 ~ 2022.06 (3년 7개월)</p>
                            <p>개발 인원: 1명</p>
                            <p>기술 스택: Spring Boot(JPA), MySQL, MSSQL, Oracle, React, Linux, Git</p>
                            <p>역할: 업세일 대응을 위한 <Mark>대규모 고객사 데이터/파일 마이그레이션 자동화</Mark> 도구 설계·구현·운영</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="rounded-lg bg-gray-50 p-4">
                                <p className="text-xl font-semibold text-gray-900 mb-2">주요 개발 내역</p>
                                <ul className="text-base text-gray-700 space-y-1 [&>li]:font-medium">
                                    <li>* 더존비즈온의 그룹웨어 제품군 업세일에 따른 마이그레이션 진행</li>
                                    <li>* 데이터 이관, 첨부파일 이관 및 데이터 보정 등 전자결재 전반적인 데이터 및 파일 <Mark>마이그레이션 툴 개발</Mark></li>
                                    <li>* 마이그레이션 파이프라인 정립: 이관 대상 정의, 스키마 매핑, 정합성 기준, 롤백 정책 수립</li>
                                    <li>* 대용량 처리: 스트리밍/배치 처리, 체크포인팅, 실패 레코드 재처리, 검증 리포트 자동화</li>
                                    <li>* 표준 운영 절차(SOP): <Mark>사전 점검→본 이관→사후 검증 전 단계 자동 리포팅 문서화</Mark></li>
                                </ul>
                            </div>
                            <div className="rounded-lg bg-gray-50 p-4">
                                <p className="text-xl font-semibold text-gray-900 mb-2">성과</p>
                                <ul className="text-base text-gray-700 space-y-1 [&>li]:font-medium">
                                    <li>* 소요시간 단축: 수동으로 진행하였던 마이그레이션을 툴 개발로 인해 <Mark>마이그레이션 소요시간 대폭 단축 (3일 → 2시간)</Mark></li>
                                    <li>* 매출 기여: 고객사 <Mark>업세일 진행속도 증가</Mark>에 따른 그룹웨어 <Mark>매출액 증가</Mark></li>
                                    <li>* 처리 규모: 약 <Mark>500여 고객사 마이그레이션</Mark> 진행</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* 3. Amaranth10 */}
                    <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow mb-8">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">3. Amaranth10(그룹웨어) 전자결재 개발 및 유지보수</h3>
                        <div className="text-base text-gray-700 space-y-1 [&>li]:font-medium mb-4">
                            <p>기간: 2019.11 ~ 2022.06 (2년 7개월)</p>
                            <p>기술 스택: Spring Boot, React, MySQL, Java(Spring), JSP, Redis, Git, SVN, Docker</p>
                            <p>역할: <Mark>초기 기획 단계부터 런칭까지 핵심 기능 개발</Mark> 및 이후 유지보수 담당</p>
                        </div>

                        <div className="rounded-lg bg-gray-50 p-4">
                            <p className="text-xl font-semibold text-gray-900 mb-2">주요 개발 내역</p>
                            <div className="text-base text-gray-700 space-y-1 [&>li]:font-medium">
                                <p className="font-semibold"><MarkProject>사용자 화면단 개발</MarkProject></p>
                                <ul className="pl-4 list-disc [&>li]:font-medium">
                                    <li>결재함: 미결, 수신참조, 상신, 예결, 전결, 후결, 보류, 반려, 기결, 시행, 수신, 회람 개발</li>
                                    <li>문서함: 공문발송, 결재요청, 임시보관, 수신상신, 회람요청 개발</li>
                                    <li>결재양식, 결재작성 외 다수 개발</li>
                                </ul>
                                <p className="mt-2 font-semibold"><MarkProject> 관리자 화면단 개발</MarkProject></p>
                                <ul className="pl-4 list-disc [&>li]:font-medium">
                                    <li>문서채번 기능, 대결자 설정 기능, 결재 옵션, 결재양식 설정 외 다수 개발</li>
                                </ul>
                                <p className="mt-2 font-semibold"><MarkProject> 그 외 개발 내역</MarkProject></p>
                                <ul className="pl-4 list-disc [&>li]:font-medium">
                                    <li>결재패스워드 암호화 방식 개선, 프로필 연동 기능, 결재문서 내 PDF 미리보기 기능 추가 외 다수 개발</li>
                                </ul>
                            </div>
                        </div>

                        <div className="rounded-lg bg-gray-50 p-4">
                            <p className="text-xl font-semibold text-gray-900 mb-2">성과</p>
                            <ul className="text-base text-gray-700 space-y-1 [&>li]:font-medium list-disc pl-4">
                                <li><Mark>신규 프로그램 개발</Mark>로 사용자 경험 확대 및 다양한 옵션과 기능 개선 및 추가로 고객 편의 제공</li>
                                <li>제품 판매 이후 200여건 유지보수 진행</li>
                                <li>특이사항: 프로젝트 초기부터 런칭까지 참여</li>
                            </ul>
                        </div>
                    </div>

                    {/* 4. BizboxAlpha */}
                    <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">4. BizboxAlpha(그룹웨어) 전자결재 개발 및 유지보수</h3>
                        <div className="text-base text-gray-700 space-y-1 [&>li]:font-medium mb-4">
                            <p>기간: 2018.09 ~ 2021.03 (2년 6개월)</p>
                            <p>기술 스택: Java(Spring), MySQL, JSP, Redis, Git, SVN, Docker</p>
                            <p>역할: <Mark>전자결재 핵심 기능 고도화</Mark> 및 대규모 유지보수 수행</p>
                        </div>

                        <div className="rounded-lg bg-gray-50 p-4">
                            <p className="text-xl font-semibold text-gray-900 mb-2">주요 개발 내역</p>
                            <ul className="text-base text-gray-700 space-y-1 [&>li]:font-medium pl-4 list-disc">
                                <li>전자결재 내 주요 <Mark>기능 고도화 및 약 800여건 유지보수</Mark> 진행</li>
                            </ul>
                            <p className="text-xl font-semibold text-gray-900 mt-3 mb-2">성과</p>
                            <ul className="text-base text-gray-700 space-y-1 [&>li]:font-medium pl-4 list-disc">
                                <li>기능 고도화 및 유지보수를 진행함으로써 사용자 편의 제공</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
