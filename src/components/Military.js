import React, { useEffect, useRef } from 'react';

const MILITARY = {
    months: 51, // 2013.08 — 2017.11
    nodes: [
        { pos: 0, date: '2013.08', label: '입대', at: 0.02 },
        { pos: 12, date: '2013.11', label: '임관', at: 0.14 },
        { pos: 100, date: '2017.11', label: '중사 전역', at: 0.97 },
    ],
    mission: '특수임무 수행 · 2013.11 — 2017.10',
};

// Travel과 동일한 스크롤 스크럽 시네마틱 — 진행선이 곧 특수임무 수행 기간이다.
// 리렌더 비용을 피하려고 state 대신 DOM style/클래스를 직접 갱신한다.
export default function Military({ eyebrow = 'Military Service — HID' }) {
    const trackRef = useRef(null);
    const monthsRef = useRef(null);
    const pathRef = useRef(null);
    const missionRef = useRef(null);

    useEffect(() => {
        let target = 0;
        let progress = 0;
        let rafId;

        const readScroll = () => {
            const el = trackRef.current;
            if (!el) return;
            const rect = el.getBoundingClientRect();
            const max = el.offsetHeight - window.innerHeight;
            target = max > 0 ? Math.min(1, Math.max(0, -rect.top / max)) : 0;
        };

        const tick = () => {
            progress += (target - progress) * 0.1;
            const p = progress;
            if (monthsRef.current) {
                monthsRef.current.textContent = Math.round(MILITARY.months * p);
            }
            if (pathRef.current) {
                pathRef.current.style.setProperty('--p', (p * 100).toFixed(2));
                const nodes = pathRef.current.querySelectorAll('.mil-node');
                nodes.forEach((node, i) => {
                    node.classList.toggle('on', p >= MILITARY.nodes[i].at);
                });
            }
            if (missionRef.current) {
                missionRef.current.classList.toggle('on', p > 0.35);
            }
            rafId = requestAnimationFrame(tick);
        };

        readScroll();
        window.addEventListener('scroll', readScroll, { passive: true });
        window.addEventListener('resize', readScroll);
        rafId = requestAnimationFrame(tick);
        return () => {
            window.removeEventListener('scroll', readScroll);
            window.removeEventListener('resize', readScroll);
            cancelAnimationFrame(rafId);
        };
    }, []);

    return (
        <section className="travel-track" id="military" ref={trackRef}>
            <div className="travel-sticky">
                <p className="travel-eyebrow">{eyebrow}</p>
                <h2 className="travel-title">
                    4년 3개월, <em>정보사령부</em>
                </h2>
                <div className="travel-counters">
                    <div className="travel-counter">
                        <span className="travel-num" ref={monthsRef}>0</span>
                        <span className="travel-label">Months in Service</span>
                    </div>
                    <div className="travel-counter">
                        <span className="travel-num">중사</span>
                        <span className="travel-label">Discharged Rank</span>
                    </div>
                </div>
                <div className="mil-path" ref={pathRef}>
                    <span className="mil-line" />
                    <span className="mil-fill" />
                    <span className="mil-mission" ref={missionRef}>{MILITARY.mission}</span>
                    {MILITARY.nodes.map(node => (
                        <div key={node.date} className="mil-node" style={{ '--pos': node.pos }}>
                            <span className="mil-dot" />
                            <span className="mil-node-date">{node.date}</span>
                            <span className="mil-node-label">{node.label}</span>
                        </div>
                    ))}
                </div>
                <p className="travel-caption">
                    입대부터 전역까지, 특수임무를 수행하며 신속한 판단과 실행력,
                    그리고 보안 의식을 몸에 새겼습니다.
                </p>
            </div>
        </section>
    );
}
