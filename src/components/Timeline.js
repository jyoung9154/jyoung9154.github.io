import React, { useMemo, useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { ReactComponent as WorkIcon } from '../assets/icons/work.svg';
import { ReactComponent as SchoolIcon } from '../assets/icons/school.svg';
import { ReactComponent as StarIcon } from '../assets/icons/star.svg';
import '../styles/timeline.css';

export default function Timeline() {
  const TYPE = useMemo(() => ({ WORK: 'work', EDU: 'education' }), []);

  const [showFullTravel, setShowFullTravel] = useState(false);

  const travelShort =
    '6대륙 41개국 155개 도시 — 호주, 인도네시아, 베트남, 라오스, 태국, 인도, 네팔, 두바이, 이집트, 요르단, 이탈리아, 프랑스, 스위스, 그리스, 독일, 스페인 등';
  const travelFull =
    '6대륙 41개국 155개 도시 - 호주, 인도네시아, 베트남, 라오스, 태국, 인도, 네팔, 두바이, 이집트, 요르단, 이탈리아, 모나코, 바티칸, 프랑스, 스위스, 그리스, 북마케도니아, 불가리아, 루마니아, 세르비아, 몬테네그로, 크로아티아, 헝가리, 슬로바키아, 오스트리아, 체코, 폴란드, 네덜란드, 벨기에, 알바니아, 스페인, 미국, 과테말라, 멕시코, 에콰도르, 페루, 볼리비아, 아르헨티나, 브라질, 싱가포르';

  const timelineData = [
    {
      id: 0,
      date: '2024년 6월 - Present',
      title: '더존비즈온',
      subtitle: '그룹웨어 메일 개발',
      type: TYPE.WORK,
    },
    {
      id: 1,
      date: '2022년 9월 - 2024년 5월',
      title: '세계여행',
      subtitle: showFullTravel ? travelFull : travelShort,
      type: TYPE.WORK,
      expandable: true,
    },
    {
      id: 2,
      date: '2021년 10월',
      title: 'TOPCIT Lv.3 취득',
      subtitle: '정보통신기획평가원 주관 - 소프트웨어 개발 역량 등급',
      type: TYPE.EDU,
    },
    {
      id: 3,
      date: '2021년 6월',
      title: '정보처리기사 취득',
      subtitle: '국가 공인 자격증 취득',
      type: TYPE.EDU,
    },
    {
      id: 4,
      date: '2019년 7월 - 2021년 8월',
      title: '평생교육진흥원',
      subtitle: '컴퓨터공학과 졸업',
      type: TYPE.EDU,
    },
    {
      id: 5,
      date: '2018년 9월 - 2022년 6월',
      title: '더존비즈온',
      subtitle: '그룹웨어 전자결재 개발',
      type: TYPE.WORK,
    },
    {
      id: 6,
      date: '2013년 8월 - 2017년 11월',
      title: '국군 정보사령부',
      subtitle: '특수요원',
      type: TYPE.WORK,
    },
    {
      id: 7,
      date: '2011년 3월 - 2013년 2월',
      title: '부산과학기술대학교',
      subtitle: '소프트웨어공학과 졸업',
      type: TYPE.EDU,
    },
    {
      id: 8,
      date: '2008년 3월 - 2011년 2월',
      title: '센텀고등학교',
      subtitle: '이공계열',
      type: TYPE.EDU,
    },
  ];

  const stylesByType = (type) =>
    type === TYPE.WORK
      ? {
          className: 'vertical-timeline-element--work',
          contentClass: 'vt-content vt-work',
          arrowClass: 'vt-arrow vt-work',
          iconClass: 'vt-icon vt-work',
        }
      : {
          className: 'vertical-timeline-element--education',
          contentClass: 'vt-content vt-edu',
          arrowClass: 'vt-arrow vt-edu',
          iconClass: 'vt-icon vt-edu',
        };

  return (
    <div className="timeline-wrapper">
      <VerticalTimeline animate={true} lineColor="#e5e7eb">
        {timelineData.map((item) => {
          const s = stylesByType(item.type);
          return (
            <VerticalTimelineElement
              key={item.id}
              className={s.className}
              contentClassName={s.contentClass}
              contentArrowStyle={{}} // CSS 클래스로 제어
              date={item.date}
              dateClassName="vt-date"
              iconClassName={s.iconClass}
              icon={item.type === TYPE.WORK ? <WorkIcon /> : <SchoolIcon />}
            >
              <h3 className="vt-title">{item.title}</h3>
              <h4 className="vt-subtitle">
                {item.subtitle}
                {item.expandable && (
                  <button
                    type="button"
                    className="vt-more"
                    onClick={() => setShowFullTravel((v) => !v)}
                    aria-expanded={showFullTravel}
                    aria-label={showFullTravel ? '여행 상세 접기' : '여행 상세 펼치기'}
                  >
                    {showFullTravel ? ' 접기' : ' 더보기'}
                  </button>
                )}
              </h4>
            </VerticalTimelineElement>
          );
        })}

        <VerticalTimelineElement
          iconClassName="vt-icon vt-end"
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  );
}
