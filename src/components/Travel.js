import React, { useRef } from 'react';
import useScrollScrub, { toggleSequential } from '../hooks/useScrollScrub';

const TRAVEL = {
    continents: ['아시아', '오세아니아', '중동·아프리카', '유럽', '북아메리카', '남아메리카'],
    countries: 41,
    cities: 155,
    months: 21,
};

// 스크롤 진행률로 카운터·대륙 칩을 구동하는 시네마틱 섹션.
// 리렌더 비용을 피하려고 state 대신 DOM textContent/클래스를 직접 갱신한다.
export default function Travel({ eyebrow = 'World Trip' }) {
    const trackRef = useRef(null);
    const countriesRef = useRef(null);
    const citiesRef = useRef(null);
    const monthsRef = useRef(null);
    const continentsRef = useRef(null);

    useScrollScrub(trackRef, p => {
        if (countriesRef.current) {
            countriesRef.current.textContent = Math.round(TRAVEL.countries * p);
            citiesRef.current.textContent = Math.round(TRAVEL.cities * p);
            monthsRef.current.textContent = Math.round(TRAVEL.months * p);
        }
        if (continentsRef.current) toggleSequential(continentsRef.current, p);
    });

    return (
        <section className="travel-track" id="travel" ref={trackRef}>
            <div className="travel-sticky">
                <p className="travel-eyebrow">{eyebrow}</p>
                <h2 className="travel-title">
                    1년 8개월, <em>지구 한 바퀴</em>
                </h2>
                <div className="travel-counters">
                    <div className="travel-counter">
                        <span className="travel-num" ref={countriesRef}>0</span>
                        <span className="travel-label">Countries</span>
                    </div>
                    <div className="travel-counter">
                        <span className="travel-num" ref={citiesRef}>0</span>
                        <span className="travel-label">Cities</span>
                    </div>
                    <div className="travel-counter">
                        <span className="travel-num" ref={monthsRef}>0</span>
                        <span className="travel-label">Months</span>
                    </div>
                </div>
                <ul className="travel-continents" ref={continentsRef}>
                    {TRAVEL.continents.map(c => (
                        <li key={c}>{c}</li>
                    ))}
                </ul>
                <p className="travel-caption">
                    퇴사 후 배낭 하나로 6대륙을 돌았습니다. 낯선 문제를 만나고, 계획을 다시 세우고,
                    끝까지 완주하는 법을 배웠습니다.
                </p>
            </div>
        </section>
    );
}
