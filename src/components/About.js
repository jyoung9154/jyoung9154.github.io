import React, { useState } from 'react';
import { MdOutlineSmartToy } from "react-icons/md";
import { 
    SiSpring, SiReact, SiMysql, SiDocker, SiKubernetes, 
    SiRedis, SiApachekafka, SiElasticsearch, SiLinux, SiGit 
} from "react-icons/si";

export default function About() {
    const [isHovered, setIsHovered] = useState(false);

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
                                    <p className="text-xl text-slate-400 font-medium">( Park Jae Young )</p>
                                </div>
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0DA6F2]/10 border border-[#0DA6F2]/30 mb-8 mt-4">
                                    <span className="material-symbols-outlined text-[#0DA6F2] text-sm">terminal</span>
                                    <span className="text-sm font-bold text-[#0DA6F2] uppercase tracking-wider">Java Full-Stack Developer & Data Engineer</span>
                                </div>
                                
                                <div className="space-y-6 text-lg text-slate-300 leading-relaxed max-w-3xl">
                                    <p className="font-medium text-white">
                                        프론트부터 백엔드, 배포 및 데이터 처리까지 <span className="text-[#0DA6F2] font-bold">풀스택 개발 가능</span>
                                    </p>
                                    <p>
                                        전자결재/메일 시스템 개발, AI MCP 개발, DB & File 마이그레이션 등 <span className="text-white font-bold">실전 경험 중심의 문제 해결자</span>
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/5">
                                        <div className="flex items-start gap-4 justify-center md:justify-start">
                                            <span className="text-2xl">🌍</span>
                                            <p className="text-sm leading-snug text-slate-400 m-0">
                                                세계 6대륙 40여 개국, 550일 여행 경험으로 <br /><span className="text-white">도전과 적응력 보유</span>
                                            </p>
                                        </div>
                                        <div className="flex items-start gap-4 justify-center md:justify-start">
                                            <span className="text-2xl">🪖</span>
                                            <p className="text-sm leading-snug text-slate-400 m-0">
                                                HID(정보사령부) 복무 — <br /><span className="text-white">신속한 판단 & 실행력</span>
                                            </p>
                                        </div>
                                    </div>
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

                    <div className="mb-32">
                        <div className="flex items-center gap-4 mb-16">
                            <h2 className="text-sm font-black uppercase tracking-[4px] text-slate-500 whitespace-nowrap">경력 여정</h2>
                            <div className="h-px flex-1 bg-white/5"></div>
                        </div>
                        
                        <div className="space-y-6">
                            {[
                                { date: '2024.06 ~ NOW', title: '더존비즈온 (DOUZONE)', desc: '그룹웨어 Amaranth 10 메일 서비스 풀스택 및 AI 개발 담당', active: true },
                                { date: '2022.09 ~ 2024.05', title: '세계여행', desc: '6대륙 41개국 세계 일주 - 견문 확장 및 글로벌 네트워킹' },
                                { date: '2018.09 ~ 2022.06', title: '더존비즈온 (DOUZONE)', desc: '전자결재 시스템 개발 및 마이그레이션 자동화 전담' },
                                { date: '2013.08 ~ 2017.11', title: '국군 정보사령부', desc: '특수작전부대(HID) 복무 - 리더십 및 목표 달성 역량 함양' },
                            ].map((item, idx) => (
                                <div key={idx} className={`p-8 rounded-3xl border ${item.active ? 'bg-[#0DA6F2]/5 border-[#0DA6F2]/20' : 'bg-white/5 border-white/5'} transition-all hover:bg-white/[0.07]`}>
                                    <span className={`text-xs font-black tracking-widest uppercase mb-2 block ${item.active ? 'text-[#0DA6F2]' : 'text-slate-500'}`}>{item.date}</span>
                                    <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                                    <p className="text-slate-400 mb-0">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}