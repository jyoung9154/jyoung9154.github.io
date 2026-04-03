import React, { useState } from 'react';

export default function Timeline() {
  const [showFullTravel, setShowFullTravel] = useState(false);

  const travelShort = '6대륙 41개국 155개 도시 — 호주, 인도네시아, 베트남, 인도, 네팔, 이집트, 요르단, 유럽 등';
  const travelFull = '6대륙 41개국 155개 도시 - 호주, 인도네시아, 베트남, 라오스, 태국, 인도, 네팔, 두바이, 이집트, 요르단, 이탈리아, 모나코, 바티칸, 프랑스, 스위스, 그리스, 북마케도니아, 불가리아, 루마니아, 세르비아, 몬테네그로, 크로아티아, 헝가리, 슬로바키아, 오스트리아, 체코, 폴란드, 네덜란드, 벨기에, 알바니아, 스페인, 미국, 과테말라, 멕시코, 에콰도르, 페루, 볼리비아, 아르헨티나, 브라질, 싱가포르';

  const timelineData = [
    {
      id: 0,
      date: '2024.07 - PRESENT',
      title: '더존비즈온 (DOUZONE)',
      subtitle: '그룹웨어 Amaranth 10 메일 및 AI 고도화 개발',
      type: 'work',
      color: '#0DA6F2',
      glow: 'rgba(13, 166, 242, 0.4)',
      icon: 'work'
    },
    {
      id: 1,
      date: '2022.09 - 2024.05',
      title: '세계 여행 (WORLD TRAVEL)',
      subtitle: showFullTravel ? travelFull : travelShort,
      type: 'travel',
      expandable: true,
      color: '#FFD700',
      glow: 'rgba(255, 215, 0, 0.3)',
      icon: 'public'
    },
    {
      id: 2,
      date: '2021.10',
      title: 'TOPCIT Lv.3 취득',
      subtitle: '소프트웨어 개발 역량 등급 (ICT 역량 지수 표준화 시험)',
      type: 'edu',
      color: '#94a3b8',
      glow: 'rgba(148, 163, 184, 0.3)',
      icon: 'verified'
    },
    {
      id: 3,
      date: '2021.06',
      title: '정보처리기사 취득',
      subtitle: '국가 공인 기술 자격증 보유',
      type: 'edu',
      color: '#94a3b8',
      glow: 'rgba(148, 163, 184, 0.3)',
      icon: 'school'
    },
    {
      id: 4,
      date: '2019.07 - 2021.08',
      title: '평생교육진흥원',
      subtitle: '컴퓨터공학과 졸업 (학사 학위 취득)',
      type: 'edu',
      color: '#94a3b8',
      glow: 'rgba(148, 163, 184, 0.3)',
      icon: 'auto_stories'
    },
    {
      id: 5,
      date: '2018.09 - 2022.06',
      title: '더존비즈온 (DOUZONE)',
      subtitle: '그룹웨어 전자결재 시스템 개발 및 마이그레이션 자동화',
      type: 'work',
      color: '#0DA6F2',
      glow: 'rgba(13, 166, 242, 0.4)',
      icon: 'history_edu'
    },
    {
      id: 6,
      date: '2013.08 - 2017.11',
      title: '국군 정보사령부 (HID)',
      subtitle: '특수작전요원 복무 - 강인한 정신력과 목표 지향적 태도 배양',
      type: 'work',
      color: '#0bb783',
      glow: 'rgba(11, 183, 131, 0.3)',
      icon: 'military_tech'
    },
    {
      id: 7,
      date: '2011.03 - 2013.02',
      title: '부산과학기술대학교',
      subtitle: '소프트웨어공학과 졸업',
      type: 'edu',
      color: '#94a3b8',
      glow: 'rgba(148, 163, 184, 0.3)',
      icon: 'school'
    },
    {
      id: 8,
      date: '2008.03 - 2011.02',
      title: '센텀고등학교',
      subtitle: '이공계열 졸업',
      type: 'edu',
      color: '#94a3b8',
      glow: 'rgba(148, 163, 184, 0.3)',
      icon: 'child_care'
    }
  ];

  return (
    <div className="career-premium-dark min-h-screen bg-[#05090C]">
      <main className="max-w-[1100px] mx-auto px-6 py-24">
        <section className="mb-20 text-left">
            <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-[2px] bg-[#0DA6F2]"></div>
                <span className="text-[10px] font-black uppercase tracking-[3px] text-[#0DA6F2]">Milestones</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tighter">성장과 도전의 기록</h2>
            <p className="text-slate-500 text-lg max-w-2xl leading-relaxed">
                소프트웨어 엔지니어로서의 성장과 문제 해결의 순간들을 담은 <br className="hidden md:block" />
                박재영의 커리어 타임라인입니다.
            </p>
        </section>

        <div className="timeline-container !max-w-full">
          <div className="cyber-path"></div>

          {timelineData.map((item, idx) => (
            <div
                key={item.id}
                className="milestone-item"
                style={{
                    '--node-color': item.color,
                    '--node-glow': item.glow
                }}
            >
              <div className="milestone-content">
                <div className="milestone-card group">
                  <span className="m-date">{item.date}</span>
                  <h3>{item.title}</h3>
                  <p>
                    {item.subtitle}
                    {item.expandable && (
                      <button
                        type="button"
                        className="ml-2 text-white/40 font-bold border-none bg-transparent cursor-pointer p-0 text-xs hover:text-white transition-colors"
                        onClick={() => setShowFullTravel((v) => !v)}
                      >
                       {showFullTravel ? '[닫기]' : '[전체보기]'}
                      </button>
                    )}
                  </p>
                </div>
              </div>

              <div className="milestone-node">
                <span className="material-symbols-outlined">{item.icon}</span>
              </div>
            </div>
          ))}

          {/* End Pulse Node */}
          <div className="milestone-item" style={{ marginBottom: 0 }}>
             <div className="milestone-node" style={{ left: '-40px', opacity: 0.5, '--node-color': '#0DA6F2', '--node-glow': 'rgba(13, 166, 242, 0.2)' }}>
                <span className="material-symbols-outlined">flag</span>
             </div>
          </div>
        </div>
      </main>
    </div>
  );
}
