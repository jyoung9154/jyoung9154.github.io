import React from 'react';
import { MdOutlineSmartToy } from "react-icons/md";
import {
    SiSpring, SiReact, SiMysql, SiDocker, SiKubernetes,
    SiRedis, SiApachekafka, SiElasticsearch, SiLinux, SiGit
} from "react-icons/si";
import { Link } from 'react-router-dom';
import { getCareerYearLabel } from '../utils/careerUtils';
import { aiProjects } from '../data/resume';
import careerProjects from '../data/career';
import GitHubProjects from './GitHubProjects';

function CompetencyCard({ number, title, content, colorClass }) {
    return (
        <div className={`p-8 rounded-3xl border ${colorClass} bg-white/5 transition-all hover:scale-[1.02] duration-300 h-full`}>
            <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-black opacity-20">{number}</span>
                <h3 className="text-xl font-bold text-white">{title}</h3>
            </div>
            <ul className="space-y-4">
                {content.map((item) => (
                    <li key={item} className="flex gap-3 text-slate-300 font-medium text-sm leading-relaxed">
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

function AiProjectCard({
    title, status, period, oneLiner, why, arch, tags, link, linkLabel = "프리뷰 보기",
}) {
    return (
        <div className="p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-[#0DA6F2]/30 transition-all flex flex-col gap-4">
            <div className="flex items-start justify-between gap-3">
                <h4 className="text-white text-lg font-extrabold mb-0">{title}</h4>
                <span className="flex-shrink-0 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-[#0DA6F2]/10 text-[#0DA6F2] border border-[#0DA6F2]/30">{status}</span>
            </div>
            <p className="date-text mb-0">{period}</p>
            <p className="text-slate-200 text-sm font-semibold leading-relaxed mb-0">{oneLiner}</p>
            <div className="flex gap-3">
                <span className="text-[10px] font-black uppercase text-slate-500 mt-0.5 min-w-[50px]">Why</span>
                <p className="text-slate-400 text-sm leading-relaxed mb-0">{why}</p>
            </div>
            <div className="flex gap-3">
                <span className="text-[10px] font-black uppercase text-[#0DA6F2] mt-0.5 min-w-[50px]">구조</span>
                <p className="text-slate-400 text-sm leading-relaxed mb-0">{arch}</p>
            </div>
            <div className="tags-grid mt-auto pt-2">
                {tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
            </div>
            {link && (
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0DA6F2] hover:text-sky-300 transition-colors no-underline"
                >
                    {linkLabel}
                    <span className="material-symbols-outlined text-base">open_in_new</span>
                </a>
            )}
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

    const howIWork = [
        {
            kicker: "구조 · Orchestration",
            title: "혼자 일해도 팀처럼 굴러갑니다",
            desc: "메인 세션은 설계·검토·통합만 맡고, 구현·테스트·리서치는 역할별 전용 서브에이전트에 위임합니다. 작업 난이도에 따라 상위·경량 모델을 라우팅해 품질과 비용을 함께 통제합니다.",
            proof: "개인 프로젝트 10개 · 1,100+ 커밋 단독 수행",
        },
        {
            kicker: "환경 · Systemization",
            title: "같은 작업을 두 번 손으로 하지 않습니다",
            desc: "훅(hook)으로 품질 게이트와 컨텍스트 관리를 자동화하고, 반복 작업은 재사용 가능한 스킬로 패키징하며, MCP 서버로 외부 도구를 연결합니다.",
            proof: "AgentSkills — 직군별 AI 스킬 130+ 오픈소스",
            link: "https://github.com/jyoung9154/AgentSkills",
        },
        {
            kicker: "경계 · Boundary",
            title: "어디서 사람이 판단할지를 설계합니다",
            desc: "완전 자동화 대신, 시스템이 틀릴 수 있는 지점에 검증 게이트와 사람의 승인 노드를 배치합니다. 사내 JIRA-AI의 자동 패치가 5중 검증 게이트를 통과해야만 제안되는 이유입니다.",
            proof: "패턴 즉답(LLM 0회)·직통·추론 3모드 라우팅 설계",
        },
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
                                <span className="block text-xs font-black text-[#0DA6F2] uppercase tracking-[3px] mb-2">AI-Native Full-Stack Developer</span>
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

                    <nav aria-label="섹션 바로가기" className="flex flex-wrap gap-3 mt-10">
                        {[
                            { href: '#how-i-work', label: '00. AI와 일하는 방식' },
                            { href: '#competencies', label: '01. 핵심 역량' },
                            { href: '#projects', label: '02. 주요 프로젝트' },
                            { href: '#ai-projects', label: '03. 사이드 프로젝트' },
                            { href: '#etc', label: '04. 기타 경험' },
                        ].map(item => (
                            <a key={item.href} href={item.href}
                               className="px-4 py-2 rounded-full text-xs font-bold text-slate-400 bg-white/5 border border-white/10 hover:text-[#0DA6F2] hover:border-[#0DA6F2]/40 transition-colors no-underline">
                                {item.label}
                            </a>
                        ))}
                    </nav>
                </section>

                {/* How I Work with AI */}
                <section id="how-i-work" className="mb-32 scroll-mt-24">
                    <div className="flex items-center gap-4 mb-16">
                        <div className="h-px flex-1 bg-white/5" />
                        <h2 className="text-sm font-black uppercase tracking-[2px] md:tracking-[4px] text-slate-500 text-center md:whitespace-nowrap">00. AI와 일하는 방식</h2>
                        <div className="h-px flex-1 bg-white/5" />
                    </div>

                    <p className="text-center max-w-3xl mx-auto text-xl text-slate-200 font-medium leading-relaxed mb-16">
                        AI에게 일을 &lsquo;시키는&rsquo; 수준을 넘어, <strong>역할이 나뉜 AI 에이전트 팀을 설계해 운영합니다.</strong>{' '}
                        저는 설계와 판단에 집중하고, 구현·테스트·조사는 에이전트에게 위임합니다.
                    </p>

                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        {howIWork.map(card => (
                            <div key={card.kicker} className="p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-[#0DA6F2]/30 transition-all flex flex-col gap-4">
                                <span className="text-[10px] font-black uppercase tracking-[3px] text-[#0DA6F2]">{card.kicker}</span>
                                <h4 className="text-white text-lg font-extrabold mb-0">{card.title}</h4>
                                <p className="text-slate-400 text-sm leading-relaxed mb-0">{card.desc}</p>
                                <p className="mt-auto pt-4 border-t border-white/5 text-xs font-semibold text-slate-500 mb-0 flex items-start gap-2">
                                    <span className="text-[#0DA6F2] mt-px">●</span>
                                    <span>
                                        {card.link
                                            ? <a href={card.link} target="_blank" rel="noopener noreferrer" className="hover:text-[#0DA6F2] transition-colors no-underline text-inherit">{card.proof}</a>
                                            : card.proof}
                                    </span>
                                </p>
                            </div>
                        ))}
                    </div>

                    <blockquote className="max-w-3xl mx-auto border-l-4 border-[#0DA6F2] pl-6 py-1 m-0">
                        <p className="text-slate-300 text-base leading-relaxed mb-0">
                            &ldquo;완벽한 자동화가 목표가 아닙니다. 막히는 지점을 아는 상태로 시스템을 계속 살아 있게 굴리는 것 —
                            그래서 자동 패치는 검증 게이트와 사람의 승인 뒤에 둡니다.&rdquo;
                        </p>
                    </blockquote>

                    <p className="text-center max-w-3xl mx-auto text-slate-500 text-sm leading-relaxed mt-10 mb-0">
                        기술 스택도 중요하지만, AI 개발에서는 스택 그 자체보다 기술의 용어와 개발 플로우를 파악하는 능력이
                        더 중요하다고 믿습니다. 도구가 바뀌어도 이 워크플로우로 새 기술을 빠르게 흡수합니다.
                    </p>
                </section>

                {/* Core Competencies */}
                <section id="competencies" className="mb-32 scroll-mt-24">
                    <div className="flex items-center gap-4 mb-16">
                        <div className="h-px flex-1 bg-white/5" />
                        <h2 className="text-sm font-black uppercase tracking-[2px] md:tracking-[4px] text-slate-500 text-center md:whitespace-nowrap">01. 핵심 역량 및 특징</h2>
                        <div className="h-px flex-1 bg-white/5" />
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
                        {techStacks.map((stack) => (
                            <div
                                key={stack.name}
                                className={`flex items-center gap-2 px-4 py-2 rounded-xl ${stack.bg} transition-all hover:scale-105 cursor-default shadow-md shadow-black/10`}
                            >
                                <span className="text-lg">{stack.icon}</span>
                                <span className={`font-bold text-[10px] uppercase tracking-wider ${stack.text}`}>{stack.name}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Project Details */}
                <section id="projects" className="mb-32 scroll-mt-24">
                    <div className="flex items-center gap-4 mb-16">
                        <div className="h-px flex-1 bg-white/5" />
                        <h2 className="text-sm font-black uppercase tracking-[2px] md:tracking-[4px] text-slate-500 text-center md:whitespace-nowrap">02. 주요 프로젝트</h2>
                        <div className="h-px flex-1 bg-white/5" />
                    </div>

                    <div className="space-y-12">
                        {careerProjects.map(project => (
                            <article className="premium-card group" key={project.id}>
                                <div className="flex flex-col md:flex-row justify-between items-start mb-10 gap-6">
                                    <div>
                                        <p className="date-text mb-2">{project.dateLabel}</p>
                                        <h3 className="company-title">{project.title}</h3>
                                        <p className="text-[#0DA6F2] font-semibold text-sm">{project.org}</p>
                                    </div>
                                    <span className="material-symbols-outlined text-slate-600 group-hover:text-[#0DA6F2] transition-colors text-3xl">{project.icon}</span>
                                </div>

                                <div className="space-y-12">
                                    <p className={`text-xl text-slate-200 font-medium border-l-4 ${project.accent ? 'border-[#0DA6F2]' : 'border-white/20'} pl-6 py-1 leading-relaxed`}>
                                        {project.intro}
                                    </p>

                                    <div className="space-y-6">
                                        {project.items.map(item => (
                                            <SubProjectItem
                                                key={item.title}
                                                title={item.title}
                                                date={item.date}
                                                background={item.background}
                                                improvement={item.improvement}
                                                result={item.result}
                                            />
                                        ))}
                                    </div>

                                    <div className="tags-grid">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="tag">{tag}</span>
                                        ))}
                                    </div>

                                    {project.link && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0DA6F2] hover:text-sky-300 transition-colors no-underline"
                                        >
                                            {project.linkLabel || '프리뷰 보기'}
                                            <span className="material-symbols-outlined text-base">open_in_new</span>
                                        </a>
                                    )}
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                {/* Personal AI Projects */}
                <section id="ai-projects" className="mb-32 scroll-mt-24">
                    <div className="flex items-center gap-4 mb-16">
                        <div className="h-px flex-1 bg-white/5" />
                        <h2 className="text-sm font-black uppercase tracking-[2px] md:tracking-[4px] text-slate-500 text-center md:whitespace-nowrap">03. 사이드 프로젝트 — 어디까지 가는지의 증명</h2>
                        <div className="h-px flex-1 bg-white/5" />
                    </div>

                    <p className="text-center max-w-3xl mx-auto text-slate-400 leading-relaxed mb-16">
                        업무 외 시간에 위의 <strong className="text-slate-200">멀티에이전트 워크플로우</strong>만으로
                        기획부터 아키텍처 설계, 배포·운영까지 단독 수행한 프로젝트들입니다.{' '}
                        <strong className="text-slate-200">10개 프로젝트 · 1,100+ 커밋 · 최장 3개월 무중단 운영</strong> —
                        회사 밖에서 아이디어가 어디까지 갈 수 있는지의 증명입니다.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                        {aiProjects.map(project => (
                            <AiProjectCard
                                key={project.title}
                                title={project.title}
                                status={project.status}
                                period={project.period}
                                oneLiner={project.oneLiner}
                                why={project.why}
                                arch={project.arch}
                                tags={project.tags}
                                link={project.link}
                                linkLabel={project.linkLabel}
                            />
                        ))}
                    </div>

                    <div className="mt-16">
                        <p className="text-center text-xs font-black uppercase tracking-[3px] text-slate-600 mb-8">전체 GitHub 저장소</p>
                        <GitHubProjects />
                    </div>
                </section>

                {/* Other Experience */}
                <section id="etc" className="mb-32 scroll-mt-24">
                    <div className="flex items-center gap-4 mb-16">
                        <div className="h-px flex-1 bg-white/5" />
                        <h2 className="text-sm font-black uppercase tracking-[2px] md:tracking-[4px] text-slate-500 text-center md:whitespace-nowrap">04. 기타 경험</h2>
                        <div className="h-px flex-1 bg-white/5" />
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

                {/* Contact CTA */}
                <section className="mb-20">
                    <div className="premium-card text-center py-16">
                        <h2 className="text-3xl md:text-4xl font-black text-white mb-4">함께 만들 준비가 되어 있습니다</h2>
                        <p className="text-slate-400 max-w-xl mx-auto mb-10 leading-relaxed">포지션 제안이나 프로젝트 문의를 환영합니다. 아래 채널로 편하게 연락 주세요.</p>
                        <div className="flex flex-wrap items-center justify-center gap-4">
                            <a href="mailto:jyoung_9154@naver.com" className="inline-block rounded-lg bg-sky-500 px-8 py-3 font-semibold text-white transition-colors hover:bg-sky-400 no-underline">이메일 보내기</a>
                            <a href="https://open.kakao.com/o/seT0joLh" target="_blank" rel="noopener noreferrer" className="inline-block rounded-lg bg-white/10 border border-white/10 px-8 py-3 font-semibold text-white transition-colors hover:border-[#0DA6F2]/40 hover:text-[#0DA6F2] no-underline">카카오톡 오픈채팅</a>
                            <Link to="/resume" className="inline-block rounded-lg bg-white/10 border border-white/10 px-8 py-3 font-semibold text-white transition-colors hover:border-[#0DA6F2]/40 hover:text-[#0DA6F2] no-underline">이력서 보기</Link>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
