import React from 'react';
import { Link } from 'react-router-dom';
import { getCareerYearLabel } from '../utils/careerUtils';
import { resume } from '../data/resume';
import DocShell, { Section } from './DocShell';

/* 시그니처: 사람·AI 경계를 인코딩한 오케스트레이션 다이어그램
   ● 채운 원 = 사람이 판단, ○ 윤곽 박스 = AI 에이전트가 실행, ‖ = 검증 게이트 */
function WorkflowDiagram() {
    const ink = '#0F172A';
    const line = '#CBD5E1';
    const sub = '#475569';
    const accent = '#0369A1';
    const agents = [
        { y: 33, label: '구현 에이전트' },
        { y: 85, label: '테스트 에이전트' },
        { y: 137, label: '리서치 에이전트' },
    ];
    return (
        <svg className="r-diagram" viewBox="0 0 660 185" role="img"
             aria-label="워크플로우: 설계·위임(사람) → 구현·테스트·리서치 에이전트 → 검증 게이트 → 승인·통합(사람), 피드백 루프로 반복">
            <g stroke={line} strokeWidth="1.2" fill="none">
                <path d="M67 85 H140 V33 H200" />
                <path d="M67 85 H200" />
                <path d="M67 85 H140 V137 H200" />
                <path d="M320 33 H390 V85 H414" />
                <path d="M320 85 H414" />
                <path d="M320 137 H390 V85 H414" />
                <path d="M446 85 H552" />
                <path d="M576 104 C 576 168, 52 168, 52 104" strokeDasharray="4 4" />
            </g>
            <g fill={line}>
                {agents.map(a => <polygon key={a.y} points={`202,${a.y - 4} 210,${a.y} 202,${a.y + 4}`} />)}
                <polygon points="416,81 424,85 416,89" />
                <polygon points="554,81 562,85 554,89" />
            </g>
            {/* 사람 노드 (채움) */}
            <circle cx="52" cy="85" r="15" fill={ink} />
            <text x="52" y="59" textAnchor="middle" fontSize="10" fontWeight="700" fill={ink}>설계 · 위임</text>
            <text x="52" y="115" textAnchor="middle" fontSize="9" fill={sub}>사람</text>
            {/* 에이전트 노드 (윤곽) */}
            {agents.map(a => (
                <g key={a.label}>
                    <rect x="210" y={a.y - 15} width="110" height="30" rx="7" fill="#fff" stroke={ink} strokeWidth="1.2" />
                    <text x="265" y={a.y + 3.5} textAnchor="middle" fontSize="10" fill={ink}>{a.label}</text>
                </g>
            ))}
            {/* 검증 게이트 */}
            <g stroke={accent} strokeWidth="2.5">
                <line x1="426" y1="55" x2="426" y2="115" />
                <line x1="434" y1="55" x2="434" y2="115" />
            </g>
            <text x="430" y="42" textAnchor="middle" fontSize="10" fontWeight="700" fill={accent}>검증 게이트</text>
            {/* 사람 노드 (채움) */}
            <circle cx="576" cy="85" r="15" fill={ink} />
            <text x="576" y="59" textAnchor="middle" fontSize="10" fontWeight="700" fill={ink}>승인 · 통합</text>
            <text x="576" y="115" textAnchor="middle" fontSize="9" fill={sub}>사람</text>
            <text x="314" y="176" textAnchor="middle" fontSize="9" fill={sub}>피드백 루프 — 결과에 피드백을 주고 다시 위임</text>
        </svg>
    );
}

export default function Resume() {
    return (
        <DocShell docType="이력서" filename="박재영_이력서_AI풀스택개발자">
            <Section label="About">
                <div className="r-about">
                    {resume.about.map((line, i) => (
                        <p className="r-about-line" key={line}>{i === 0 ? `${getCareerYearLabel()} ${line}` : line}</p>
                    ))}
                </div>
            </Section>

            <Section label="Skills">
                <div className="r-skill"><span className="r-skill-key">주력</span><span>{resume.skills.main}</span></div>
                <div className="r-skill"><span className="r-skill-key">AI</span><span>{resume.skills.ai}</span></div>
            </Section>

            <Section label="How I Work">
                <WorkflowDiagram />
                <ul className="r-bullets">
                    {resume.howIWork.map(item => (
                        <li key={item.title}><strong>{item.title}</strong> — {item.desc}</li>
                    ))}
                </ul>
                <p className="r-hiw-note">{resume.howIWorkNote}</p>
            </Section>

            <Section label="Experience" flow>
                {resume.experience.map(exp => (
                    <article className="r-entry" key={`${exp.company}-${exp.date}`}>
                        <div className="r-entry-head">
                            <div>
                                <h3 className="r-entry-title">{exp.company}</h3>
                                <p className="r-entry-role">{exp.role}</p>
                            </div>
                            <span className="r-date">{exp.date}</span>
                        </div>
                        {exp.groups.map((group, gi) => (
                            <div className="r-group" key={group.heading || gi}>
                                {group.heading && <h4 className="r-group-heading">{group.heading}</h4>}
                                <ul className="r-bullets">
                                    {group.bullets.map(b => <li key={b}>{b}</li>)}
                                </ul>
                            </div>
                        ))}
                    </article>
                ))}
                <p className="r-more">프로젝트별 배경·수행·성과 상세는 <Link to="/career-history">경력기술서</Link>에 정리되어 있습니다.</p>
            </Section>

            <Section label="Side Projects" flow>
                <p className="r-note">{resume.sideProjects.note}</p>
                <ul className="r-bullets">
                    {resume.sideProjects.items.map(p => (
                        <li key={p.name} className="r-proj">
                            <span><strong>{p.name}</strong> — {p.desc} <span className="r-meta">· {p.tech} · {p.meta}</span></span>
                            <span className="r-date">{p.date}</span>
                        </li>
                    ))}
                </ul>
                <p className="r-more">프로젝트 구조·문제의식·링크는 <Link to="/portfolio">포트폴리오 문서</Link>에 정리되어 있습니다.</p>
            </Section>

            <Section label="Open Source">
                <ul className="r-bullets">
                    {resume.openSource.map(o => (
                        <li key={o.name}>
                            <strong><a href={o.href} target="_blank" rel="noopener noreferrer">{o.name}</a></strong> — {o.desc}
                        </li>
                    ))}
                </ul>
            </Section>

            <Section label="Education">
                {resume.education.map(e => (
                    <div className="r-row" key={e.name}>
                        <span>{e.name}</span>
                        <span className="r-date">{e.date}</span>
                    </div>
                ))}
            </Section>

            <Section label="Certifications">
                {resume.certifications.map(c => (
                    <div className="r-row" key={c.name}>
                        <span>{c.name}</span>
                        <span className="r-date">{c.date}</span>
                    </div>
                ))}
            </Section>

            <Section label="Military">
                <div className="r-row">
                    <span>{resume.military.name}</span>
                    <span className="r-date">{resume.military.date}</span>
                </div>
            </Section>
        </DocShell>
    );
}
