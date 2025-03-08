import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { ReactComponent as WorkIcon } from '../assets/icons/work.svg';
import { ReactComponent as SchoolIcon } from '../assets/icons/school.svg';
import { ReactComponent as StarIcon } from '../assets/icons/star.svg';

export default function Timeline() {
    const typeWork = 'work';
    const typeEducation = 'education';
    // const typeProject = 'project';
    const timelineData = [
        {
            id: 0,
            date: '2024년 6월 - Present',
            title: '더존비즈온',
            subtitle: '그룹웨어 메일 개발 ',
            type: typeWork,
        },
        {
            id: 1,
            date: '2022년 9월 – 2024년 5월',
            title: '세계여행',
            subtitle:  '6대륙 41개국 155개 도시 - 호주, 인도네시아, 베트남, 라오스, 태국, 인도, 네팔, 두바이, 이집트, 요르단, 이탈리아, 모나코, 바티칸, 프랑스, 스위스, 그리스, 북마케도니아, 불가리아, 루마니아, 세르비아, 몬테네그로, 크로아티아, 헝가리, 슬로바키아, 오스트리아, 체코, 폴란드, 독일, 네터란드, 벨기에, 알바니아, 스페인, 미국, 과테말라, 멕시코, 에콰도르, 페루, 볼리비아, 아르헨티나, 브라질, 싱가포르',
            type: typeWork,
        },
        {
            id: 2,
            date: '2021년 10월',
            title: 'TOPCIT Lv.3 취득',
            subtitle: '정보통신기획평가원 주제 - 소프트웨어 개발 역량 수준 취득',
            type: typeEducation,
        },
        {
            id: 3,
            date: '2021년 6월',
            title: '정보처리기사 취득',
            subtitle: '국가 공인 자격증 취득',
            type: typeEducation,
        },
        {
            id: 4,
            date: '2019년 7월 - 2021년 8월',
            title: '평생교육진흥원',
            subtitle: '컴퓨터 공학과 졸업',
            type: typeEducation,
        },
        {
            id: 5,
            date: '2018년 9월 – 2022년 6월',
            title: '더존비즈온',
            subtitle: '그룹웨어 전자결재 개발',
            type: typeWork,
        },
        {
            id: 6,
            date: '2013년 8월 – 2017년 11월',
            title: '국군 정보사령부',
            subtitle: '특수요원',
            type: typeWork,
        },
        {
            id: 7,
            date: '2011년 3월 – 2013년 2월',
            title: '부산과학기술대학교',
            subtitle: '소프트웨어 공학과 졸업',
            type: typeEducation,
        },
        {
            id: 7,
            date: '2008년 3월 – 2011년 2월',
            title: '센텀고등학교',
            subtitle: '이공계열',
            type: typeEducation,
        },
    ];

    return (
        <div style={{ padding: '20px', background: 'linear-gradient(135deg, #ffffff, #fff8dc)', fontFamily: 'Poppins, sans-serif' }}>
            <VerticalTimeline animate>
                {timelineData.map(item => (
                    <VerticalTimelineElement
                        key={item.id}
                        className="vertical-timeline-element--work"
                        contentStyle={{ 
                            background: '#fff8dc', 
                            color: '#333', 
                            borderRadius: '10px', 
                            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', 
                            transition: 'transform 0.3s ease-in-out' 
                        }}
                        contentArrowStyle={{ borderRight: '7px solid #ffecb3' }}
                        date={<span style={{ fontSize: '18px', fontWeight: 600, color: '#ffb300' }}>{item.date}</span>}
                        iconStyle={{ 
                            background: item.type === typeWork ? 'linear-gradient(135deg, #ffcc80, #ffb300)' : 'linear-gradient(135deg, #80cbc4, #00897b)', 
                            color: '#fff', 
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'center', 
                            transition: 'transform 0.3s ease-in-out' 
                        }}
                        icon={item.type === typeWork ? <WorkIcon /> : <SchoolIcon />}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        <h3 style={{ fontWeight: 700, fontSize: '22px', color: '#333' }}>{item.title}</h3>
                        <h4 style={{ fontSize: '18px', color: '#666' }}>{item.subtitle}</h4>
                    </VerticalTimelineElement>
                ))}
                <VerticalTimelineElement
                    iconStyle={{ 
                        background: 'linear-gradient(135deg, #ffb300, #ff8e75)', 
                        color: '#fff', 
                        transition: 'transform 0.3s ease-in-out' 
                    }}
                    icon={<StarIcon />}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
            </VerticalTimeline>
        </div>
    );
}
