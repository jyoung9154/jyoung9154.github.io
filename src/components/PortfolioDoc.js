import React from 'react';
import { resume, aiProjects } from '../data/resume';
import careerProjects from '../data/career';
import DocShell, { Section } from './DocShell';

const SITE_ORIGIN = 'https://jyoung9154.github.io';

function absoluteLink(link) {
    if (!link) return null;
    return link.startsWith('http') ? link : `${SITE_ORIGIN}${link}`;
}

// 회사 프로젝트(JIRA-AI)를 포트폴리오 사례 형식으로 압축 — 상세는 경력기술서가 정본
const jiraAi = careerProjects.find(p => p.id === 'jira-ai');
const companyProject = {
    title: 'JIRA-AI — 이슈 자동 분석·응답 AI 시스템',
    status: '사내 단독 개발',
    period: jiraAi.dateLabel,
    oneLiner:
        '문의 이슈가 등록되면 사내 지식·소스코드·운영로그를 대조해 근거 있는 1차 답변을 자동 생성하는 AI 시스템 — 기획부터 아키텍처 설계·개발까지 전 과정을 혼자 수행',
    why: '"쌓여 있는 방대한 Jira 데이터가 있는데, 왜 같은 문의에 매번 사람이 답하는가"라는 의문에서 출발',
    arch: 'LangGraph 12-노드 오케스트레이션(패턴 즉답 LLM 0회·직통·추론 3모드 라우팅), 4원천 RAG(Milvus) + 코드 5단계 추적, 자동 패치 5중 검증 게이트, 자가학습 루프',
    tags: jiraAi.tags,
    link: jiraAi.link,
};

function ProjectArticle({ p }) {
    return (
        <article className="r-pf">
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
    );
}

export default function PortfolioDoc() {
    return (
        <DocShell docType="포트폴리오" filename="박재영_포트폴리오">
            <Section label="Overview">
                <p className="r-about-line">
                    회사에서 기획부터 개발까지 단독 수행한 JIRA-AI와, 업무 외 시간에 역할이 나뉜
                    AI 에이전트 팀(설계자–워커 멀티에이전트 워크플로우)으로 기획·개발·배포·운영을
                    단독 수행한 사이드 프로젝트 사례집입니다.
                </p>
                <p className="r-about-line">
                    2025.12 — 현재 · 사이드 프로젝트 10개 · 1,100+ 커밋 · 최장 3개월 무중단 운영.
                    각 항목은 어떤 문제의식에서 출발해 어떤 구조로 풀었는지를 중심으로 정리했습니다.
                </p>
            </Section>

            <Section label="Company Project" flow>
                <ProjectArticle p={companyProject} />
            </Section>

            <Section label="Side Projects" flow>
                {aiProjects.map(p => (
                    <ProjectArticle key={p.title} p={p} />
                ))}
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
