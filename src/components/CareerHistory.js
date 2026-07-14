import React from 'react';
import { getCareerYearLabel } from '../utils/careerUtils';
import { resume } from '../data/resume';
import careerProjects from '../data/career';
import DocShell, { Section } from './DocShell';

// 채용 서류 관례: 인사담당자는 요약을 먼저 본다 — 수치 성과 하이라이트를 최상단에 배치한다.
const HIGHLIGHTS = [
    { head: 'JIRA-AI 사내 단독 개발', rest: 'LangGraph 12-노드 오케스트레이션으로 근거 있는 1차 답변 자동화' },
    { head: '성능 최적화', rest: '메일 분석 30초 → 4초(86% 개선), 초기 로딩 10초 → 1초 미만(90%+ 개선)' },
    { head: '운영 자동화', rest: '탈취 확인 요청 90% 감소, SSL 인증서 관련 CS 0건, 최대 메모리 사용량 40% 절감' },
    { head: '마이그레이션 자동화', rest: '이관 3일 → 2시간(97% 단축), 500여 개사 성공 — 사내 표준 모델로 채택' },
];

const EMPLOYMENT = [
    { company: '더존비즈온 (DOUZONE)', team: '메일팀 → AI 워크플로우 전담', role: 'Full-Stack Developer', date: '2024.07 — 현재' },
    { company: '더존비즈온 (DOUZONE)', team: '전자결재팀', role: 'Full-Stack Developer', date: '2018.09 — 2022.06' },
];

export default function CareerHistory() {
    return (
        <DocShell docType="경력기술서" filename="박재영_경력기술서">
            <Section label="Summary">
                <p className="r-about-line">
                    {getCareerYearLabel()} Java/Spring 풀스택 개발자.
                    전자결재팀에서 제품을 만들고, 메일팀에서 시스템을 최적화했으며, 지금은 AI 워크플로우 개발을 전담합니다.
                    아래 모든 항목은 배경(문제) → 수행 → 성과 순으로 정리했습니다.
                </p>
                <ul className="r-bullets" style={{ marginTop: '3mm' }}>
                    {HIGHLIGHTS.map(h => (
                        <li key={h.head}><strong>{h.head}</strong> — {h.rest}</li>
                    ))}
                </ul>
            </Section>

            <Section label="Employment">
                {EMPLOYMENT.map(e => (
                    <div className="r-row" key={e.date}>
                        <span><strong>{e.company}</strong> · {e.team} · {e.role}</span>
                        <span className="r-date">{e.date}</span>
                    </div>
                ))}
            </Section>

            <Section label="Projects" flow>
                {careerProjects.map(project => (
                    <article className="r-ch" key={project.id}>
                        <div className="r-ch-head">
                            <div>
                                <h3 className="r-entry-title">{project.title}</h3>
                                <p className="r-entry-role">{project.org}</p>
                            </div>
                            <span className="r-date">{project.dateLabel}</span>
                        </div>
                        <p className="r-ch-intro">{project.intro}</p>

                        {project.items.map(item => (
                            <div className="r-ch-item" key={item.title}>
                                <div className="r-ch-item-head">
                                    <h4>{item.title}</h4>
                                    <span className="r-date">{item.date}</span>
                                </div>
                                <dl className="r-ch-rows">
                                    <div><dt>배경</dt><dd>{item.background}</dd></div>
                                    <div><dt>수행</dt><dd>{item.improvement}</dd></div>
                                    <div><dt>성과</dt><dd className="r-ch-result">{item.result}</dd></div>
                                </dl>
                            </div>
                        ))}

                        <p className="r-ch-tags">{project.tags.join(' · ')}</p>
                    </article>
                ))}
            </Section>

            <Section label="Skills">
                <div className="r-skill"><span className="r-skill-key">주력</span><span>{resume.skills.main}</span></div>
                <div className="r-skill"><span className="r-skill-key">AI</span><span>{resume.skills.ai}</span></div>
            </Section>
        </DocShell>
    );
}
