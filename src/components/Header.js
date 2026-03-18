import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
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
                    <a 
                      href="/assets/resume.pdf" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-resume"
                    >
                        <span className="material-symbols-outlined text-sm">download</span>
                        이력서
                    </a>
                </div>
            </div>
        </header>
    );
}
