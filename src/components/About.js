import React, { useState } from 'react';
import { MdOutlineSmartToy } from "react-icons/md";
import {
    SiSpring, SiReact, SiMysql, SiDocker, SiKubernetes,
    SiRedis, SiApachekafka, SiElasticsearch, SiLinux, SiGit
} from "react-icons/si";
import { getCareerYearLabel } from '../utils/careerUtils';

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
            <main className="container-main">
                <section className="mb-32">

                    {/* Hero Profile Section */}
                    <div className="premium-card mb-16 px-10 py-12">
                        <div className="flex flex-col md:flex-row gap-12 items-center md:items-start text-center md:text-left">
                            <div className="flex-1 w-full">
                                <div className="mb-2">
                                    <h3 className="text-4xl font-black mb-1 text-white">박재영</h3>
                                    <p className="text-xl text-stone-400 font-medium">( Park Jae Young )</p>
                                </div>
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#DFB45A]/10 border border-[#DFB45A]/30 mb-8 mt-4">
                                    <span className="material-symbols-outlined text-[#DFB45A] text-sm">terminal</span>
                                    <span className="text-sm font-bold text-[#DFB45A] uppercase tracking-wider">Java Full-Stack Developer & Data Engineer</span>
                                </div>

                                <div className="space-y-6 text-lg text-stone-300 leading-relaxed max-w-3xl">
                                    <p className="font-medium text-white">
                                        프론트부터 백엔드, 배포 및 데이터 처리까지 <span className="text-[#DFB45A] font-bold">풀스택 개발 가능</span>
                                    </p>
                                    <p>
                                        전자결재/메일 시스템 개발, AI MCP 개발, DB & File 마이그레이션 등 <span className="text-white font-bold">실전 경험 중심의 문제 해결자</span>
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/5">
                                        <div className="flex items-start gap-4 justify-center md:justify-start">
                                            <span className="text-2xl">🌍</span>
                                            <p className="text-sm leading-snug text-stone-400 m-0">
                                                세계 6대륙 40여 개국, 550일 여행 경험으로 <br /><span className="text-white">도전과 적응력 보유</span>
                                            </p>
                                        </div>
                                        <div className="flex items-start gap-4 justify-center md:justify-start">
                                            <span className="text-2xl">🪖</span>
                                            <p className="text-sm leading-snug text-stone-400 m-0">
                                                HID(정보사령부) 복무 — <br /><span className="text-white">신속한 판단 & 실행력</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Tech Stack Badges */}
                    <div className="mb-16">
                        <div className="flex items-center gap-4 mb-8">
                            <h2 className="text-sm font-black uppercase tracking-[4px] text-stone-500 whitespace-nowrap">기술 스택</h2>
                            <div className="h-px flex-1 bg-white/5"></div>
                        </div>
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
                    </div>

                    {/* Certifications */}
                    <div className="mb-16">
                        <div className="flex items-center gap-4 mb-8">
                            <h2 className="text-sm font-black uppercase tracking-[4px] text-stone-500 whitespace-nowrap">자격증</h2>
                            <div className="h-px flex-1 bg-white/5"></div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/5 flex items-center gap-4">
                                <span className="material-symbols-outlined text-[#DFB45A] text-2xl">verified</span>
                                <div>
                                    <h4 className="text-white font-bold mb-1">정보처리기사</h4>
                                    <p className="text-stone-500 text-xs mb-0">2021.06 취득 · 국가 공인 기술 자격증</p>
                                </div>
                            </div>
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/5 flex items-center gap-4">
                                <span className="material-symbols-outlined text-[#DFB45A] text-2xl">verified</span>
                                <div>
                                    <h4 className="text-white font-bold mb-1">TOPCIT Lv.3</h4>
                                    <p className="text-stone-500 text-xs mb-0">2021.10 취득 · ICT 역량 지수 표준화 시험</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CTA and Links */}
                    <div className="grid md:grid-cols-2 gap-8 mb-32">
                        <a
                            href="/timeline"
                            className="premium-card no-underline group flex justify-between items-center py-10"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <h3 className="text-2xl font-bold group-hover:text-gradient transition-all mb-0">🖇️ 전체 프로젝트 타임라인</h3>
                            <span className={`material-symbols-outlined text-4xl text-[#DFB45A] transition-transform duration-500 ${isHovered ? 'transtone-x-3' : ''}`}>arrow_forward</span>
                        </a>
                        <div className="flex gap-6 items-center flex-wrap">
                            <a href="https://github.com/jyoung9154" target="_blank" rel="noopener noreferrer" className="premium-card py-6 flex-1 text-center hover:border-[#DFB45A]/40 transition-all no-underline">
                                <span className="block text-stone-500 text-xs font-bold uppercase tracking-widest mb-4">깃허브</span>
                                <img src="https://img.shields.io/github/followers/jyoung9154?label=FOLLOW&style=for-the-badge&logo=github&color=333" alt="GitHub" className="mx-auto" />
                            </a>
                            <a href="mailto:jyoung_9154@naver.com" className="premium-card py-6 flex-1 text-center hover:border-[#DFB45A]/40 transition-all no-underline">
                                <span className="block text-stone-500 text-xs font-bold uppercase tracking-widest mb-4">이메일</span>
                                <img src="https://img.shields.io/badge/Connect-Naver-1EC800?style=for-the-badge&logo=naver" alt="Naver" className="mx-auto" />
                            </a>
                        </div>
                    </div>

                    <div className="mb-32">
                        <div className="flex items-center gap-4 mb-16">
                            <h2 className="text-sm font-black uppercase tracking-[4px] text-stone-500 whitespace-nowrap">경력 여정</h2>
                            <div className="h-px flex-1 bg-white/5"></div>
                        </div>

                        <div className="space-y-6">
                            {[
                                { date: '2024.07 ~ NOW', title: '더존비즈온 (DOUZONE)', desc: '그룹웨어 Amaranth 10 메일 서비스 풀스택 및 AI 개발 담당', active: true },
                                { date: '2022.09 ~ 2024.05', title: '세계여행', desc: '6대륙 41개국 세계 일주 - 견문 확장 및 글로벌 네트워킹' },
                                { date: '2018.09 ~ 2022.06', title: '더존비즈온 (DOUZONE)', desc: '전자결재 시스템 개발 및 마이그레이션 자동화 전담' },
                                { date: '2013.08 ~ 2017.11', title: '국군 정보사령부', desc: '특수작전부대(HID) 복무 - 리더십 및 목표 달성 역량 함양' },
                            ].map((item, idx) => (
                                <div key={idx} className={`p-8 rounded-3xl border ${item.active ? 'bg-[#DFB45A]/5 border-[#DFB45A]/20' : 'bg-white/5 border-white/5'} transition-all hover:bg-white/[0.07]`}>
                                    <span className={`text-xs font-black tracking-widest uppercase mb-2 block ${item.active ? 'text-[#DFB45A]' : 'text-stone-500'}`}>{item.date}</span>
                                    <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                                    <p className="text-stone-400 mb-0">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
