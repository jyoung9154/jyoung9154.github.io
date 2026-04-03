import React from 'react';
import { MdOutlineSmartToy } from "react-icons/md";
import {
    SiSpring, SiReact, SiMysql, SiDocker, SiKubernetes,
    SiRedis, SiApachekafka, SiElasticsearch, SiLinux, SiGit
} from "react-icons/si";
import { getCareerYearLabel } from '../utils/careerUtils';
import GitHubProjects from './GitHubProjects';

function CompetencyCard({ number, title, content, colorClass }) {
    return (
        <div className={`p-8 rounded-3xl border ${colorClass} bg-white/5 transition-all hover:scale-[1.02] duration-300 h-full`}>
            <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-black opacity-20">{number}</span>
                <h3 className="text-xl font-bold text-white">{title}</h3>
            </div>
            <ul className="space-y-4">
                {content.map((item, idx) => (
                    <li key={idx} className="flex gap-3 text-slate-300 font-medium text-sm leading-relaxed">
                        <span className="text-[#0DA6F2] mt-1.5">•</span>
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function SubProjectItem({ title, date, background, improvement, result }) {
    return (
        <div className="mb-12 last:mb-0 p-8 rounded-2xl bg-white/5 border border-white/5">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-6">
                <h4 className="text-white text-xl font-extrabold">{title}</h4>
                <span className="date-text">{date}</span>
            </div>

            <div className="space-y-4">
                {background && (
                    <div className="flex gap-3">
                        <span className="text-[10px] font-black uppercase text-slate-500 mt-1 min-w-[50px]">배경</span>
                        <p className="text-slate-400 font-medium text-sm leading-relaxed">{background}</p>
                    </div>
                )}
                {improvement && (
                    <div className="flex gap-3">
                        <span className="text-[10px] font-black uppercase text-[#0DA6F2] mt-1 min-w-[50px]">개선</span>
                        <p className="text-slate-300 text-sm leading-relaxed font-semibold">{improvement}</p>
                    </div>
                )}
                {result && (
                    <div className="flex gap-3">
                        <span className="text-[10px] font-black uppercase text-purple-500 mt-1 min-w-[50px]">성과</span>
                        <p className="text-slate-400 font-medium text-sm leading-relaxed">{result}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default function Career() {
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
        { name: "Git", icon: <SiGit className="text-orange-500" />, bg: "bg-orange-100", text: "text-orange-700" },
    ];


    return (
        <div className="min-h-screen">
            <main className="container-main">
                {/* Hero + Summary 통합 Section */}
                <section className="mb-20">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
                        <div>
                            <h1 className="mb-6">
                                경력 및 &nbsp;
                                <span className="text-gradient">전문성</span>
                            </h1>
                            <p className="max-w-2xl text-xl text-slate-300 font-medium leading-relaxed mb-0">
                                {getCareerYearLabel()} AI 풀스택 개발자로, 서비스 기획부터 런칭·운영까지 전 과정을 수행합니다.
                                LLM / RAG / MCP 기반 지능형 AI 솔루션 전환을 주도하고 있습니다.
                            </p>
                        </div>
                        <div className="flex-shrink-0">
                            <div className="px-10 py-6 rounded-2xl bg-[#0DA6F2]/10 border border-[#0DA6F2]/30 text-center">
                                <span className="block text-xs font-black text-[#0DA6F2] uppercase tracking-[3px] mb-2">AI Full-Stack Developer</span>
                                <span className="block text-4xl font-black text-white">{getCareerYearLabel()}</span>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        <div className="premium-card flex flex-col gap-4 !rounded-2xl">
                            <span className="material-symbols-outlined text-[#0DA6F2] text-2xl">smart_toy</span>
                            <h4 className="text-white font-bold text-base mb-0">AI 전환 주도</h4>
                            <p className="text-slate-400 text-sm mb-0 leading-relaxed">LLM / RAG / MCP 기반 지능형 솔루션 설계 및 구축</p>
                        </div>
                        <div className="premium-card flex flex-col gap-4 !rounded-2xl">
                            <span className="material-symbols-outlined text-[#0DA6F2] text-2xl">rocket_launch</span>
                            <h4 className="text-white font-bold text-base mb-0">Full Lifecycle</h4>
                            <p className="text-slate-400 text-sm mb-0 leading-relaxed">초기 기획 → 개발 → 런칭 → 운영, 전 과정 수행</p>
                        </div>
                        <div className="premium-card flex flex-col gap-4 !rounded-2xl">
                            <span className="material-symbols-outlined text-[#0DA6F2] text-2xl">cloud</span>
                            <h4 className="text-white font-bold text-base mb-0">SaaS 인프라</h4>
                            <p className="text-slate-400 text-sm mb-0 leading-relaxed">대규모 클라우드 시스템 운영 및 최적화</p>
                        </div>
                    </div>
                </section>

                {/* Core Competencies */}
                <section className="mb-32">
                    <div className="flex items-center gap-4 mb-16">
                        <div className="h-px flex-1 bg-white/5"></div>
                        <h2 className="text-sm font-black uppercase tracking-[4px] text-slate-500 whitespace-nowrap">01. 핵심 역량 및 특징</h2>
                        <div className="h-px flex-1 bg-white/5"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        <CompetencyCard
                            number="01"
                            title="운영 효율화 전문성"
                            colorClass="border-blue-500/20"
                            content={[
                                "반복적인 CS 업무를 선제적으로 식별하고 자동화 도구로 해소",
                                "사용자 자가진단·자가처리 기능(발송 진행 확인, 계정탈취 조회 등) 제공",
                                "인증서 등록/검증/만료 알림 일원화로 장애 리스크 사전 차단"
                            ]}
                        />
                        <CompetencyCard
                            number="02"
                            title="대규모 시스템 리팩토링 경험"
                            colorClass="border-green-500/20"
                            content={[
                                "복잡한 레거시 코드 구조 분석 및 성능·유지보수성 동시 개선",
                                "목표/지표/로드맵 문서화를 통한 경영진 설득 및 단계적 실행",
                                "공통 UI/훅 표준화로 재사용성 및 온보딩 효율 상승"
                            ]}
                        />
                        <CompetencyCard
                            number="03"
                            title="풀스택 개발 및 운영"
                            colorClass="border-purple-500/20"
                            content={[
                                "React부터 Spring Boot, K8s, Kafka까지 전 영역 풀스택 경험",
                                "초기 기획→개발→런칭→운영 전 단계 참여로 안정성 확보",
                                "대량 발송, 반송, 포워딩, S3 연동 등 메일 핵심 기능 직접 설계"
                            ]}
                        />
                        <CompetencyCard
                            number="04"
                            title="문제 해결 중심 사고"
                            colorClass="border-orange-500/20"
                            content={[
                                "현업 불편을 능동적으로 발굴해 개발 건의 및 실행으로 전환",
                                "데이터 기반 성과 측정(TTI, 요청 건수 등)을 통한 지속 개선",
                                "보안·컴플라이언스를 고려한 시스템 안정성 강화"
                            ]}
                        />
                    </div>

                    {/* Compact Tech Badges */}
                    <div className="flex flex-wrap gap-3 justify-center">
                        {techStacks.map((stack, idx) => (
                            <div
                                key={idx}
                                className={`flex items-center gap-2 px-4 py-2 rounded-xl ${stack.bg} transition-all hover:scale-105 cursor-default shadow-md shadow-black/10`}
                            >
                                <span className="text-lg">{stack.icon}</span>
                                <span className={`font-bold text-[10px] uppercase tracking-wider ${stack.text}`}>{stack.name}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Project Details */}
                <section className="mb-32">
                    <div className="flex items-center gap-4 mb-16">
                        <div className="h-px flex-1 bg-white/5"></div>
                        <h2 className="text-sm font-black uppercase tracking-[4px] text-slate-500 whitespace-nowrap">02. 주요 프로젝트</h2>
                        <div className="h-px flex-1 bg-white/5"></div>
                    </div>

                    <div className="space-y-12">
                        {/* Project Card 1: AI & Mail High-Tech */}
                        <article className="premium-card group">
                            <div className="flex flex-col md:flex-row justify-between items-start mb-10 gap-6">
                                <div>
                                    <p className="date-text mb-2">2024.07 — 현재</p>
                                    <h3 className="company-title">그룹웨어 메일 솔루션 AI 기술 고도화 및 최적화</h3>
                                    <p className="text-[#0DA6F2] font-semibold text-sm">더존비즈온 (DOUZONE)</p>
                                </div>
                                <span className="material-symbols-outlined text-slate-600 group-hover:text-[#0DA6F2] transition-colors text-3xl">smart_toy</span>
                            </div>

                            <div className="space-y-12">
                                <p className="text-xl text-slate-200 font-medium border-l-4 border-[#0DA6F2] pl-6 py-1 leading-relaxed">
                                    메일 시스템의 대규모 인프라를 기반으로 <strong>LLM, RAG, MCP</strong>를 도입하여 지능형 협업 솔루션으로의 전환을 주도하고, 시스템 전반의 최적화를 달성했습니다.
                                </p>

                                <div className="space-y-6">
                                    <SubProjectItem
                                        title="SSL 인증서 등록 자동화 개발"
                                        date="2024.10.01 — 2024.10.31"
                                        background="인증서 갱신/적용을 터미널에서 수동으로 처리하며 반복적인 지연 및 다운타임 리스크 존재"
                                        improvement="사용자 직접 등록 UI 구현, 검증·만료 알림 일원화, K8s 업데이트 절차 자동 정립"
                                        result="인증서 등록 관련 CS 요청 0건 달성 및 만료로 인한 장애 리스크 전면 제거"
                                    />
                                    <SubProjectItem
                                        title="메일 탈취 조회 기능 개발"
                                        date="2024.11.01 — 2024.11.30"
                                        background="로그 실시간 확인에 대한 수동 대응 리소스 과다 (유지보수 요청의 90% 이상 차지)"
                                        improvement="사용자 자가 조회 화면 제공 및 탈취 의심 지표(IP/패턴) 시각화 대시보드 구축"
                                        result="탈취 확인 요청 건수 90% 감소 및 1차 응대 자동화로 운영 리소스 대폭 절감"
                                    />
                                    <SubProjectItem
                                        title="메일 허용정책 설정 기능 개발"
                                        date="2024.12.01 — 2024.12.31"
                                        background="릴레이 설정 및 스팸 장비 연동 시 개발팀 직접 DB 등록에 따른 병목 발생"
                                        improvement="관리자 전용 UI 제공 및 감사로그 연계를 통한 셀프 프로비저닝 시스템 구현"
                                        result="고객지원팀 직접 설정으로 개발팀 도달 요청 최소화 및 업무 편의성 극대화"
                                    />
                                    <SubProjectItem
                                        title="메일 FrontEnd 전체 리팩토링"
                                        date="2025.01.01 — 2025.06.30"
                                        background="레거시 구조로 인한 유지보수 가중, 렌더링 성능 저하로 인한 사용자 불편"
                                        improvement="컴포넌트 모듈화, 가상 스크롤 적용, 공통 UI/훅 표준화 및 아키텍처 재설계"
                                        result="화면 응답 속도 최적화 및 코드 리뷰/온보딩 효율 약 50% 향상"
                                    />
                                    <SubProjectItem
                                        title="강원랜드 메일 망연계 시스템 개발"
                                        date="2025.02.03 — 2025.02.28"
                                        background="망분리 환경에서 안전한 메일 연계 및 메일 수발신 통계 API 요청"
                                        improvement="망분리 환경의 내부망과 외부망 연계 API 개발 및 메일 수발신 통계 API 개발"
                                        result="망분리 환경에서의 안정적인 송수신과 통계 데이터를 통한 메일 탈취 및 의심계정 경고하여 CS적 요소 차단"
                                    />
                                    <SubProjectItem
                                        title="AWS S3 연동"
                                        date="2025.04.07 — 2025.04.14"
                                        background="더존 클라우드가 아닌 AWS 요청 고객사 수요 대응"
                                        improvement="메일모듈 AWS S3 연동 대응"
                                        result="AWS 인프라 환경에서의 원활한 데이터 스토리지 활용 및 다양한 인프라 호환성 확보"
                                    />
                                    <SubProjectItem
                                        title="발송 진행 확인 기능"
                                        date="2025.04.24 — 2025.05.08"
                                        background="메일 발송 상태 확인 요청 문의가 많아 개발 진행"
                                        improvement="메일 발송/성공/실패 단계 모니터링 화면 제공"
                                        result="메일 실시간 모니터링을 통한 메일의 신뢰성 및 운영 가시성 확보"
                                    />
                                    <SubProjectItem
                                        title="외부메일 반송 기능 고도화"
                                        date="2025.05.09 — 2025.05.16"
                                        background="아웃룩에서 발송한 메일 반송 사유 파악 어려움"
                                        improvement="아웃룩에서 메일 발송 후 반송 시 반송메일을 추가"
                                        result="발송자가 반송되었는지 확인이 가능하여 문의 감소"
                                    />
                                    <SubProjectItem
                                        title="전자정부 프레임워크 적용"
                                        date="2025.06.02 — 2025.07.02"
                                        background="공공 환경 고객사 수요 맞춤 개발 진행"
                                        improvement="전자정부 프레임워크 적용을 위한 Spring-Boot 버전 변경 및 대응"
                                        result="공공 레퍼런스 대응력 강화 및 호환성 점검 리스크 감소, 운영 가이드 준수로 유지보수 용이성 및 확장성 확보"
                                    />
                                    <SubProjectItem
                                        title="메일 BackEnd 최적화를 통한 속도 개선"
                                        date="2025.07.24 — 2025.08.20"
                                        background="클라우드형 고객사 메일 초기 접속 시 10초 이상 소요 되어 최적화 진행"
                                        improvement="캐싱 전략 도입, DB 쿼리 최적화 및 메일 리스트 조회 부분 리엔지니어링"
                                        result="초기 로딩 속도 90% 이상 개선 (10s -> 1s 미만) 및 사용자 만족도 극대화"
                                    />
                                    <SubProjectItem
                                        title="메일 AI MCP 및 RAG 플랫폼 구축"
                                        date="2025.09.01 — 현재"
                                        background="그룹웨어 LLM 도입에 따른 모듈별 AI 인터페이스 표준화 및 데이터 최적화 필요"
                                        improvement="Spring AI 기반 AI Tools 설계, MCP 기반 LLM 결합, AI 전용 검색엔진 쿼리 개발"
                                        result="자연어 기반 메일 요약/추출 자동화 및 검색 속도 60% 개선, 재탐색 40% 감소"
                                    />
                                    <SubProjectItem
                                        title="메일 소프트웨어 리엔지니어링"
                                        date="2025.10.13 — 2025.11.07"
                                        background="인증/기능 구간 메모리 누수 및 Kafka 대량 수신 시 처리 지연(OOM 리스크)"
                                        improvement="전역 인증 표준화(AOP/Filter), 메일 유량 제어 모델 개발 및 힙 덤프 기반 최적화"
                                        result="최대 메모리 사용량 40% 절감 및 운영 장애 티켓 대폭 감소로 시스템 안정성 확보"
                                    />
                                </div>

                                <div className="tags-grid">
                                    {["LLM", "RAG", "MCP", "Spring Boot", "React", "Kafka", "Redis", "AWS S3"].map(tag => (
                                        <span key={tag} className="tag">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </article>

                        {/* Project Card 2: Electronic Approval & Data Migration */}
                        <article className="premium-card group">
                            <div className="flex flex-col md:flex-row justify-between items-start mb-10 gap-6">
                                <div>
                                    <p className="date-text mb-2">2018.09 — 2022.06</p>
                                    <h3 className="company-title">전자결재/메일 솔루션 개발 및 대규모 데이터 마이그레이션</h3>
                                    <p className="text-[#0DA6F2] font-semibold text-sm">더존비즈온 (DOUZONE)</p>
                                </div>
                                <span className="material-symbols-outlined text-slate-600 group-hover:text-[#0DA6F2] transition-colors text-3xl">database</span>
                            </div>

                            <div className="space-y-12">
                                <p className="text-xl text-slate-200 font-medium border-l-4 border-white/20 pl-6 py-1 leading-relaxed">
                                    Amaranth 10 전자결재 시스템의 성공적인 런칭을 주도하고, 대규모 고객사의 클라우드 이관 과정을 자동화하여 혁신적인 생산성 향상을 이루었습니다.
                                </p>

                                <div className="space-y-6">
                                    <SubProjectItem
                                        title="데이터 마이그레이션 자동화 툴 개발"
                                        date="2018.12 — 2022.06"
                                        background="수동 마이그레이션으로 인한 막대한 시간 소요 및 휴먼 에러 발생 리스크"
                                        improvement="Spring Boot 기반 대규모 데이터/파일 이관 자동화 툴 설계 및 스트리밍 배치 처리 구현"
                                        result="이관 소요 시간 97% 단축 (3일 → 2시간) 및 500여 개사 이상의 성공적 이관 달성"
                                    />
                                    <SubProjectItem
                                        title="Amaranth 10 전자결재 시스템 구축"
                                        date="2019.11 — 2022.06"
                                        background="차세대 그룹웨어 출시를 위한 핵심 도메인(결재/문서함)의 신규 설계 및 개발 필요"
                                        improvement="결재함/문서함/양식 설정 등 핵심 로직 전담 개발 및 PDF 미리보기, 암호화 방식 고도화"
                                        result="기획 단계부터 참여하여 제품의 성공적인 시장 안착 및 200여 건 이상의 유지보수 수행"
                                    />
                                    <SubProjectItem
                                        title="BizboxAlpha 유지보수 및 고도화"
                                        date="2018.09 — 2021.03"
                                        background="대규모 고객사가 사용하는 레거시 시스템의 안정적 운영 및 기능 확장 요구"
                                        improvement="800여 건의 대규모 유지보수 수행 및 주요 결재 로직의 단계적 고도화"
                                        result="결함율 지속 감소 및 안정성 확보를 통한 기업 고객사 편의 극대화"
                                    />
                                </div>

                                <div className="tags-grid">
                                    {["Java/Spring", "MySQL", "Oracle", "MyBatis", "JavaScript", "JQuery"].map(tag => (
                                        <span key={tag} className="tag">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </article>
                    </div>
                </section>

                {/* GitHub Personal Projects */}
                <section className="mb-32">
                    <div className="flex items-center gap-4 mb-16">
                        <div className="h-px flex-1 bg-white/5"></div>
                        <h2 className="text-sm font-black uppercase tracking-[4px] text-slate-500 whitespace-nowrap">03. 개인 프로젝트 (GitHub)</h2>
                        <div className="h-px flex-1 bg-white/5"></div>
                    </div>
                    <GitHubProjects />
                </section>

                {/* Other Experience */}
                <section className="mb-32">
                    <div className="flex items-center gap-4 mb-16">
                        <div className="h-px flex-1 bg-white/5"></div>
                        <h2 className="text-sm font-black uppercase tracking-[4px] text-slate-500 whitespace-nowrap">04. 기타 경험</h2>
                        <div className="h-px flex-1 bg-white/5"></div>
                    </div>

                    <div className="space-y-12">
                        <article className="premium-card group">
                            <div className="flex flex-col md:flex-row justify-between items-start mb-10 gap-6">
                                <div>
                                    <p className="date-text mb-2">2013.08 — 2017.11</p>
                                    <h3 className="company-title">정보사령부 (HID) 군 복무</h3>
                                    <p className="text-[#0DA6F2] font-semibold text-sm">대한민국 육군</p>
                                </div>
                                <span className="material-symbols-outlined text-slate-600 group-hover:text-[#0DA6F2] transition-colors text-3xl">military_tech</span>
                            </div>

                            <div className="space-y-6">
                                <p className="text-xl text-slate-200 font-medium border-l-4 border-white/20 pl-6 py-1 leading-relaxed">
                                    특수 임무 수행을 통해 <strong>강인한 정신력, 신속한 판단력, 그리고 목표를 완수하는 실행력</strong>을 함양했습니다.
                                </p>
                                <SubProjectItem
                                    title="전략적 임무 완수 및 팀워크"
                                    date="2013.08 — 2017.11"
                                    background="고난도 환경에서의 특수 임무 수행 및 위기 상황 관리 필요"
                                    improvement="신속한 상황 판단 및 유연한 솔루션 도출을 통한 임무 목표 달성"
                                    result="조직 협업 시너지를 통한 완벽한 임무 성공 및 극한 상황에서의 리더십 증명"
                                />
                            </div>
                        </article>
                    </div>
                </section>
            </main>
        </div>
    );
}
