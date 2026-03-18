import React from 'react';
import ProfilePictureIcon from '../assets/images/profile.jpeg';

export default function Home() {
    return (
        <div className="min-h-screen">
            <main className="container-main">
                <section className="min-h-[70vh] flex flex-col justify-center py-20">
                    <div className="grid md:grid-cols-12 gap-16 items-center">
                        <div className="md:col-span-7">
                            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0DA6F2] opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0DA6F2]"></span>
                                </span>
                                <span className="text-xs font-bold text-[#0DA6F2] uppercase tracking-[3px]">AI 풀스택 개발자</span>
                            </div>
                            
                            <h1 className="leading-[1.1] mb-8">
                                압도적인 <br />
                                <span className="text-gradient">AI 솔루션</span>을 <br />
                                개발합니다.
                            </h1>
                            
                            <p className="max-w-xl text-lg text-slate-400 mb-12 leading-relaxed">
                                6년차 풀스택 개발자 <span className="text-white font-semibold">박재영</span>입니다. <br />
                                인프라 규모의 복잡한 문제를 단순화하고, <br />
                                AI와 자동화를 통해 비즈니스 효율을 극대화하는 것에 특화되어 있습니다.
                            </p>
                            
                            <div className="flex flex-wrap gap-6">
                                <a href="/career" className="btn-resume no-underline">
                                    경력 보기
                                    <span className="material-symbols-outlined">arrow_forward</span>
                                </a>
                                <a href="/timeline" className="px-8 py-4 rounded-16 border border-white/10 hover:border-[#0DA6F2]/40 bg-white/5 font-bold text-white transition-all no-underline backdrop-blur-sm">
                                    프로젝트 타임라인
                                </a>
                            </div>
                        </div>
                        
                        <div className="md:col-span-5 flex justify-center">
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-[#0DA6F2] to-[#755CDE] rounded-[48px] blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                                <figure className="relative z-10 size-72 md:size-96 overflow-hidden rounded-[44px] border border-white/10 shadow-2xl transition-all duration-700">
                                    <img 
                                        className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700" 
                                        alt="프로필" 
                                        src={ProfilePictureIcon} 
                                    />
                                </figure>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <section className="py-32 border-t border-white/5">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                        <div className="group">
                            <span className="block text-5xl font-black text-white mb-3 group-hover:text-[#0DA6F2] transition-colors">6+</span>
                            <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">총 개발 경력</span>
                        </div>
                        <div className="group">
                            <span className="block text-5xl font-black text-white mb-3 group-hover:text-[#0DA6F2] transition-colors">500+</span>
                            <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">성공적인 클라이언트</span>
                        </div>
                        <div className="group">
                            <span className="block text-5xl font-black text-white mb-3 group-hover:text-[#0DA6F2] transition-colors">90%</span>
                            <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">업무 효율 개선</span>
                        </div>
                        <div className="group">
                            <span className="block text-5xl font-black text-white mb-3 group-hover:text-[#0DA6F2] transition-colors">AI</span>
                            <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">AI 개발 담당</span>
                        </div>
                    </div>
                </section> */}
            </main>
        </div>
    );
}
