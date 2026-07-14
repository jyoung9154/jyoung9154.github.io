import { useEffect } from 'react';

// track 요소 기준 스크롤 진행률(0~1)에 lerp 관성을 붙여 매 프레임 onProgress로 전달한다.
// Travel/Military/Chapter 시네마틱 섹션이 공유하는 스크럽 엔진.
export default function useScrollScrub(trackRef, onProgress) {
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
            onProgress(progress);
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
    }, [trackRef, onProgress]);
}

// 자식 요소들을 진행률에 따라 순차 점등(.on)한다 — 칩 리스트 공용.
export function toggleSequential(container, p) {
    const items = container.children;
    for (let i = 0; i < items.length; i += 1) {
        items[i].classList.toggle('on', p * items.length > i + 0.5);
    }
}
