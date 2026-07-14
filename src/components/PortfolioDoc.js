import React from 'react';
import { resume, aiProjects } from '../data/resume';
import DocShell, { Section } from './DocShell';

// 채용 관례: 포트폴리오는 '어떻게 생각하고 일하는지'를 보여주는 사례집 —
// 대표 프로젝트는 문제의식·구조까지 상세히, 나머지는 컴팩트하게 압축한다.
const FEATURED = ['Hostay', 'Quant Auto Trader', 'Auto_Thread', 'Plan P', '남녀분석보고서'];

const SITE_ORIGIN = 'https://jyoung9154.github.io';

function absoluteLink(link) {
    if (!link) return null;
    return link.startsWith('http') ? link : `${SITE_ORIGIN}${link}`;
}

export default function PortfolioDoc() {
    const featured = FEATURED.map(name => aiProjects.find(p => p.title === name)).filter(Boolean);
    const rest = aiProjects.filter(p => !FEATURED.includes(p.title));

    return (
        <DocShell docType="포트폴리오" filename="박재영_포트폴리오">
            <Section label="Overview">
                <p className="r-about-line">
                    전부 업무 외 시간에 역할이 나뉜 AI 에이전트 팀(설계자–워커 멀티에이전트 워크플로우)으로
                    기획부터 개발·배포·운영까지 단독 수행한 프로젝트입니다.
                </p>
                <p className="r-about-line">
                    2025.12 — 현재 · 10개 프로젝트 · 1,100+ 커밋 · 최장 3개월 무중단 운영.
                    각 항목은 어떤 문제의식에서 출발해 어떤 구조로 풀었는지를 중심으로 정리했습니다.
                </p>
            </Section>

            <Section label="Featured" flow>
                {featured.map(p => (
                    <article className="r-pf" key={p.title}>
                        <div className="r-ch-item-head">
                            <h4>{p.title} <span className="r-pf-status">{p.status}</span></h4>
                            <span className="r-date">{p.period}</span>
                        </div>
                        <p className="r-pf-oneliner">{p.oneLiner}</p>
                        <dl className="r-ch-rows">
                            <div><dt>문제의식</dt><dd>{p.why}</dd></div>
                            <div><dt>구조</dt><dd>{p.arch}</dd></div>
                        </dl>
                        <p className="r-pf-meta">
                            {p.tags.join(' · ')}
                            {p.link && <> · <a href={absoluteLink(p.link)} target="_blank" rel="noopener noreferrer">{absoluteLink(p.link)}</a></>}
                        </p>
                    </article>
                ))}
            </Section>

            <Section label="More" flow>
                <ul className="r-bullets">
                    {rest.map(p => (
                        <li key={p.title}>
                            <strong>{p.title}</strong> — {p.oneLiner}
                            <span className="r-meta"> · {p.tags.slice(0, 3).join('·')} · {p.status}</span>
                        </li>
                    ))}
                </ul>
            </Section>

            <Section label="Open Source">
                <ul className="r-bullets">
                    {resume.openSource.map(o => (
                        <li key={o.name}>
                            <strong><a href={o.href} target="_blank" rel="noopener noreferrer">{o.name}</a></strong> — {o.desc}
                            <span className="r-meta"> · {o.href}</span>
                        </li>
                    ))}
                </ul>
            </Section>

            <Section label="Links">
                <div className="r-row"><span>포트폴리오 웹사이트 (전체 프로젝트·프리뷰)</span><span className="r-date">jyoung9154.github.io</span></div>
                <div className="r-row"><span>GitHub</span><span className="r-date">github.com/jyoung9154</span></div>
            </Section>
        </DocShell>
    );
}
