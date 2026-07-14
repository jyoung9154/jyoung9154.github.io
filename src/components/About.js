import React, { useState } from 'react';
import { MdOutlineSmartToy } from "react-icons/md";
import {
    SiSpring, SiReact, SiMysql, SiDocker, SiKubernetes,
    SiRedis, SiApachekafka, SiElasticsearch, SiLinux, SiGit
} from "react-icons/si";
import Travel from './Travel';
import Military from './Military';
import Chapter from './Chapter';

// 시간 순서의 여정 챕터 — 01 군복무 → 02 더존(전자결재) → 03 세계여행 → 04 더존(메일→AI)
const douzoneApproval = {
    id: 'douzone-approval',
    eyebrow: '02 · Douzone — 전자결재팀',
    title: <>첫 입사, <em>전자결재팀</em></>,
    counters: [
        { to: 45, label: 'Months' },
        { to: 500, suffix: '+', label: 'Companies Migrated' },
        { to: 800, suffix: '+', label: 'Maintenance Cases' },
    ],
    chips: ['Amaranth 10 초기멤버 — 개발부터 런칭까지', '마이그레이션 자동화 — 3일 → 2시간', 'BizboxAlpha 유지보수·고도화'],
    caption: 'Amaranth 10 그룹웨어의 초기 멤버로 개발부터 런칭까지 전 라이프사이클에 메인으로 참여했고, 수동으로 3일 걸리던 데이터 이관을 자동화해 2시간으로 줄였습니다.',
};

const douzoneAi = {
    id: 'douzone-ai',
    eyebrow: '04 · Douzone — 메일팀 → AI 전담',
    title: <>다시 더존, <em>AI 워크플로우 전담</em></>,
    counters: [
        { text: '500만+', label: 'Users' },
        { to: 90, suffix: '%', label: 'Faster Loading' },
        { to: 60, suffix: '%', label: 'Faster Search' },
    ],
    chips: ['2024.07 메일팀 재입사', '메일 최적화 — 10초 → 1초', 'MCP·RAG 플랫폼 구축', 'JIRA-AI 단독 개발', '현재 · AI 워크플로우 전담'],
    caption: '메일팀으로 재입사해 시스템을 바닥부터 최적화했고, 지금은 AI 워크플로우 개발을 전담하며 회사의 AI 전환을 이끕니다.',
};

export default function About() {
    const [isHovered, setIsHovered] = useState(false);

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
            {/* 인사 — 여정이 시작되기 전, 지금의 나 */}
            <main className="container-main !pb-16">
                <div className="premium-card px-6 py-10 md:px-10 md:py-12">
                    <div className="flex flex-col md:flex-row gap-12 items-start text-left">
                        <div className="flex-1 w-full">
                            <div className="mb-2">
                                <h3 className="text-4xl font-black mb-1 text-white">박재영</h3>
                                <p className="text-xl text-slate-400 font-medium">( Park Jae Young )</p>
                            </div>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0DA6F2]/10 border border-[#0DA6F2]/30 mb-8 mt-4">
                                <span className="material-symbols-outlined text-[#0DA6F2] text-sm">terminal</span>
                                <span className="text-sm font-bold text-[#0DA6F2] uppercase tracking-wider">AI-Native Full-Stack Developer</span>
                            </div>

                            <div className="space-y-6 text-lg text-slate-300 leading-relaxed max-w-3xl">
                                <p className="font-medium text-white">
                                    프론트부터 백엔드, 배포 및 데이터 처리까지 <span className="text-[#0DA6F2] font-bold">풀스택 개발 가능</span>
                                </p>
                                <p>
                                    전자결재/메일 시스템 개발, AI MCP 개발, DB & File 마이그레이션 등 <span className="text-white font-bold">실전 경험 중심의 문제 해결자</span>
                                </p>
                                <p className="text-sm text-slate-400">
                                    긍정적이고 밝은 <span className="text-white font-bold">ENFP</span> — &ldquo;안 되는 건 없다, 안 할 뿐이지&rdquo;라는 마인드 · 취미는 코딩, 특징은 집돌이
                                </p>
                                <p className="text-sm text-slate-500 mb-0">
                                    아래로 스크롤하면 군복무부터 지금까지의 여정이 시간 순서로 이어집니다.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* 여정 — 시간 순서의 스크롤 챕터 */}
            <Military eyebrow="01 · Military Service — HID" />
            <Chapter
                id={douzoneApproval.id}
                eyebrow={douzoneApproval.eyebrow}
                title={douzoneApproval.title}
                counters={douzoneApproval.counters}
                chips={douzoneApproval.chips}
                caption={douzoneApproval.caption}
            />
            <Travel eyebrow="03 · World Trip" />
            <Chapter
                id={douzoneAi.id}
                eyebrow={douzoneAi.eyebrow}
                title={douzoneAi.title}
                counters={douzoneAi.counters}
                chips={douzoneAi.chips}
                caption={douzoneAi.caption}
            />

            {/* 현재 — 지금 쓰는 도구와 자격, 그리고 연결 */}
            <main className="container-main">
                <section>
                    <div className="mb-16">
                        <div className="flex items-center gap-4 mb-8">
                            <h2 className="text-sm font-black uppercase tracking-[4px] text-slate-500 whitespace-nowrap">기술 스택</h2>
                            <div className="h-px flex-1 bg-white/5" />
                        </div>
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
                    </div>

                    <div className="mb-16">
                        <div className="flex items-center gap-4 mb-8">
                            <h2 className="text-sm font-black uppercase tracking-[4px] text-slate-500 whitespace-nowrap">자격증</h2>
                            <div className="h-px flex-1 bg-white/5" />
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/5 flex items-center gap-4">
                                <span className="material-symbols-outlined text-[#0DA6F2] text-2xl">verified</span>
                                <div>
                                    <h4 className="text-white font-bold mb-1">정보처리기사</h4>
                                    <p className="text-slate-500 text-xs mb-0">2021.06 취득 · 국가 공인 기술 자격증</p>
                                </div>
                            </div>
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/5 flex items-center gap-4">
                                <span className="material-symbols-outlined text-[#0DA6F2] text-2xl">verified</span>
                                <div>
                                    <h4 className="text-white font-bold mb-1">TOPCIT Lv.3</h4>
                                    <p className="text-slate-500 text-xs mb-0">2021.10 취득 · ICT 역량 지수 표준화 시험</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <a
                            href="/timeline"
                            className="premium-card no-underline group flex justify-between items-center py-10"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <h3 className="text-2xl font-bold group-hover:text-gradient transition-all mb-0">🖇️ 전체 프로젝트 타임라인</h3>
                            <span className={`material-symbols-outlined text-4xl text-[#0DA6F2] transition-transform duration-500 ${isHovered ? 'translate-x-3' : ''}`}>arrow_forward</span>
                        </a>
                        <div className="flex gap-6 items-center flex-wrap">
                            <a href="https://github.com/jyoung9154" target="_blank" rel="noopener noreferrer" className="premium-card py-6 flex-1 text-center hover:border-[#0DA6F2]/40 transition-all no-underline">
                                <span className="block text-slate-500 text-xs font-bold uppercase tracking-widest mb-4">깃허브</span>
                                <img src="https://img.shields.io/github/followers/jyoung9154?label=FOLLOW&style=for-the-badge&logo=github&color=333" alt="GitHub" className="mx-auto" />
                            </a>
                            <a href="mailto:jyoung_9154@naver.com" className="premium-card py-6 flex-1 text-center hover:border-[#0DA6F2]/40 transition-all no-underline">
                                <span className="block text-slate-500 text-xs font-bold uppercase tracking-widest mb-4">이메일</span>
                                <img src="https://img.shields.io/badge/Connect-Naver-1EC800?style=for-the-badge&logo=naver" alt="Naver" className="mx-auto" />
                            </a>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
