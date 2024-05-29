import React from 'react';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { ReactComponent as WorkIcon } from '../assets/icons/work.svg';
import { ReactComponent as SchoolIcon } from '../assets/icons/school.svg';
import { ReactComponent as StarIcon } from '../assets/icons/star.svg';

export default function Home() {
    const typeSchool = 'school';
    const typeWork = 'work';
    const timelineData = [
        {
            id: 0,
            date: '2024년 6월 - Present',
            title: '개발자 취업 준비',
            type: typeSchool,
        },
        {
            id: 1,
            date: '2022년 9월 – 2024년 5월',
            title: '세계여행',
            subtitle:  '6대륙 41개국 - 호주, 인도네시아, 베트남, 라오스, 태국, 인도, 네팔, 두바이, 이집트, 요르단, 이탈리아, 모나코, 바티칸, 프랑스, 스위스, 그리스, 북마케도니아, 불가리아, 루마니아, 세르비아, 몬테네그로, 크로아티아, 헝가리, 슬로바키아, 오스트리아, 체코, 폴란드, 독일, 네터란드, 벨기에, 알바니아, 스페인, 미국, 과테말라, 멕시코, 에콰도르, 페루, 볼리비아, 아르헨티나, 브라질, 싱가포르',
            type: typeWork,
        },
        {
            id: 2,
            date: '2018년 9월 – 2022년 6월',
            title: '더존비즈온',
            subtitle: <pre style={{ backgroundColor: 'inherit', fontSize: '16px', border: 'none' }}>그룹웨어 전자결재 개발 <br/>
            1. Amaranth10(그룹웨어) 전자결재 개발 및 유지보수 <br/>
            2. BizboxAlpha(그룹웨어) 전자결재 개발 및 유지보수 <br/>
            3. 그룹웨어 전자결재 마이그레이션 개발 및 진행</pre>,
            type: typeWork,
        },
        {
            id: 3,
            date: '2013년 8월 – 2017년 11월  ',
            title: '국군 정보사령부',
            subtitle: `특수요원`,
            type: typeWork,
        },
       
    ];

    return (
        <VerticalTimeline
            className="vertical-timeline-container"
            animate={false}
            lineColor="#000"
        >
            {timelineData.map(item => (
                    <VerticalTimelineElement
                        id={item.id}
                        key={item.id}
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#aaa', color: '#000' }}
                        contentArrowStyle={{ borderRight: '7px solid #aaa' }}
                        date={item.date}
                        iconStyle={{ background: '#aaa', border: '#000' }}
                        icon={item.type === typeWork ? <WorkIcon /> : <SchoolIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">{item.title}</h3>
                        <h4 className="vertical-timeline-element-subtitle">{item.subtitle}</h4>
                    </VerticalTimelineElement>
                ))}
            <VerticalTimelineElement
                id="vertical-timeline-icon-star"
                iconStyle={{ background: '#aaa', border: '#000' }}
                icon={<StarIcon />}
            />
        </VerticalTimeline>
    );
}
