import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { getCareerYearLabel } from '../utils/careerUtils';
import { resume } from '../data/resume';

const DOCS = [
    { to: '/resume', label: '이력서' },
    { href: '/resume-v2.html', label: '상세 이력서' },
    { to: '/career-history', label: '경력기술서' },
    { to: '/portfolio', label: '포트폴리오' },
];

// 인쇄용 문서 3종(이력서·경력기술서·포트폴리오)이 공유하는 셸.
// 문서 탭·PDF 다운로드·인쇄 파일명·헤더(인적사항)를 한 곳에서 관리한다.
export default function DocShell({ docType, filename, children }) {
    // 인쇄(PDF 저장) 시 브라우저가 문서 제목을 파일명으로 쓰므로 제출용 이름으로 바꿔둔다.
    useEffect(() => {
        const original = document.title;
        const onBefore = () => { document.title = filename; };
        const onAfter = () => { document.title = original; };
        window.addEventListener('beforeprint', onBefore);
        window.addEventListener('afterprint', onAfter);
        return () => {
            window.removeEventListener('beforeprint', onBefore);
            window.removeEventListener('afterprint', onAfter);
            document.title = original;
        };
    }, [filename]);

    return (
        <div className="resume-root">
            <div className="resume-actions">
                <div className="flex items-center gap-6 flex-wrap">
                    <Link to="/career" className="r-back no-underline">
                        <span className="material-symbols-outlined text-sm">arrow_back</span>
                        포트폴리오로
                    </Link>
                    <nav className="r-doc-tabs" aria-label="문서 선택">
                        {DOCS.map(doc => doc.href ? (
                            <a key={doc.href} href={doc.href} className="r-doc-tab">
                                {doc.label}
                            </a>
                        ) : (
                            <NavLink key={doc.to} to={doc.to} className="r-doc-tab" activeClassName="active">
                                {doc.label}
                            </NavLink>
                        ))}
                    </nav>
                </div>
                <div className="flex items-center gap-4">
                    <span className="r-sync-note">
                        버튼을 누른 뒤 인쇄 창에서 &lsquo;대상: PDF로 저장&rsquo;을 선택하면 파일로 다운로드됩니다
                        <br />포트폴리오와 항상 동기화됩니다
                    </span>
                    <button type="button" className="btn-resume" onClick={() => window.print()}>
                        <span className="material-symbols-outlined text-sm">download</span>
                        PDF 다운로드
                    </button>
                </div>
            </div>

            <div className="resume-sheet">
                <header className="r-header">
                    <span className="r-doctype">{docType}</span>
                    <div>
                        <h1 className="r-name">{resume.name.en}</h1>
                        <p className="r-name-ko">{resume.name.ko} · {getCareerYearLabel()}</p>
                    </div>
                    <p className="r-title">{resume.title}</p>
                    <p className="r-profile">{resume.profile}</p>
                    <ul className="r-contacts">
                        {resume.contacts.map(c => (
                            <li key={c.label}>
                                {c.href ? <a href={c.href} target="_blank" rel="noopener noreferrer">{c.label}</a> : c.label}
                            </li>
                        ))}
                    </ul>
                </header>
                {children}
            </div>
        </div>
    );
}

export function Section({ label, flow, children }) {
    return (
        <section className={`r-section${flow ? ' r-section--flow' : ''}`}>
            <span className="r-rail">{label}</span>
            <div className="r-body">{children}</div>
        </section>
    );
}
