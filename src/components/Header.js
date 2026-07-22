import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="nav-header">
            <div className="container">
                <div className="logo-area">
                    <div className="logo-icon">
                        <span className="material-symbols-outlined">terminal</span>
                    </div>
                    <NavLink to="/" className="logo-text">
                        <span>포트폴리오</span>
                    </NavLink>
                </div>
                <nav className="hidden md:flex">
                    <NavLink to="/" exact activeClassName="active">
                        홈
                    </NavLink>
                    <NavLink to="/about" activeClassName="active">
                        소개
                    </NavLink>
                    <NavLink to="/timeline" activeClassName="active">
                        타임라인
                    </NavLink>
                    <NavLink to="/career" activeClassName="active">
                        경력
                    </NavLink>
                </nav>
                <div className="flex items-center gap-4">
                    {/* 정적 페이지(public/resume-v2.html)라 SPA 라우터를 타지 않는 일반 앵커 사용 */}
                    <a href="/resume-v2.html" className="btn-resume">
                        <span className="material-symbols-outlined text-sm">description</span>
                        이력서
                    </a>
                    <button
                        type="button"
                        className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-white transition-all hover:bg-white/10"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="메뉴 열기"
                    >
                        <span className="material-symbols-outlined text-xl">
                            {isMenuOpen ? 'close' : 'menu'}
                        </span>
                    </button>
                </div>
            </div>
            {isMenuOpen && (
                <nav className="md:hidden absolute top-full left-0 right-0 bg-[rgba(10,17,22,0.97)] backdrop-blur-2xl border-b border-white/5 px-6 py-6 flex flex-col gap-4 z-[999]">
                    <NavLink to="/" exact activeClassName="active" onClick={() => setIsMenuOpen(false)}>홈</NavLink>
                    <NavLink to="/about" activeClassName="active" onClick={() => setIsMenuOpen(false)}>소개</NavLink>
                    <NavLink to="/timeline" activeClassName="active" onClick={() => setIsMenuOpen(false)}>타임라인</NavLink>
                    <NavLink to="/career" activeClassName="active" onClick={() => setIsMenuOpen(false)}>경력</NavLink>
                </nav>
            )}
        </header>
    );
}
