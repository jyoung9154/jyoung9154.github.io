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
    title: 'JIRA-AI — 이슈 자동 분석·업무 자동화 AI 시스템',
    status: '사내 단독 개발',
    period: jiraAi.dateLabel,
    oneLiner:
        '문의 이슈가 등록되면 사내 지식과 GitLab 소스, 비슷한 이슈를 대조해 근거가 붙은 1차 답변을 달고, 반복되는 운영 요청은 담당자 승인만 받아 처리하는 AI 시스템. 기획부터 설계, 개발까지 맡았습니다',
    why: '"쌓여 있는 방대한 Jira 데이터가 있는데, 왜 같은 문의에 매번 사람이 답하는가"라는 의문에서 출발',
    arch: 'LangGraph4j 15노드 워크플로(근거 수집, 코드 검색, 합성, 검수, 재하강), GitLab 소스로 만드는 RAG 코드 인덱스, 담당자 지식 승인 격리, Kafka DLT 지연 재접수, JWT 역할 규칙과 SSO, 메일 도메인 구축 승인 상태 기계',
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
