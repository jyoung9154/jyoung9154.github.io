import React, { useRef } from 'react';
import useScrollScrub, { toggleSequential } from '../hooks/useScrollScrub';

// Travel/Military와 동일한 스크롤 스크럽 시네마틱의 범용 버전 — 데이터만 바꿔 챕터로 재사용한다.
// counters: {to, suffix?, label} = 스크롤로 차오르는 수치, {text, label} = 고정 텍스트.
export default function Chapter({ id, eyebrow, title, counters, chips, caption }) {
    const trackRef = useRef(null);
    const countersRef = useRef(null);
    const chipsRef = useRef(null);

    useScrollScrub(trackRef, p => {
        if (countersRef.current) {
            const nums = countersRef.current.querySelectorAll('[data-to]');
            for (let i = 0; i < nums.length; i += 1) {
                nums[i].textContent = Math.round(Number(nums[i].dataset.to) * p) + (nums[i].dataset.suffix || '');
            }
        }
        if (chipsRef.current) toggleSequential(chipsRef.current, p);
    });

    return (
        <section className="travel-track" id={id} ref={trackRef}>
            <div className="travel-sticky">
                <p className="travel-eyebrow">{eyebrow}</p>
                <h2 className="travel-title">{title}</h2>
                <div className="travel-counters" ref={countersRef}>
                    {counters.map(c => (
                        <div className="travel-counter" key={c.label}>
                            {c.to != null
                                ? <span className="travel-num" data-to={c.to} data-suffix={c.suffix || ''}>0</span>
                                : <span className="travel-num">{c.text}</span>}
                            <span className="travel-label">{c.label}</span>
                        </div>
                    ))}
                </div>
                <ul className="travel-continents" ref={chipsRef}>
                    {chips.map(c => (
                        <li key={c}>{c}</li>
                    ))}
                </ul>
                <p className="travel-caption">{caption}</p>
            </div>
        </section>
    );
}
