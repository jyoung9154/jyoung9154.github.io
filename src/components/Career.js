import React, { memo } from 'react';

const Section = memo(function Section({ title, children }) {
  return (
    <section className="section">
      <h2 className="section-title">{title}</h2>
      <div>{children}</div>
    </section>
  );
});

const Bullet = memo(function Bullet({ children }) {
  return <li className="bullet">{children}</li>;
});

const ProjectPeriod = memo(function ProjectPeriod({ start, end }) {
  // start/end는 'YYYY.MM.DD' 또는 'YYYY.MM' 문자열로 전달
  return <div className="period">{start} ~ {end}</div>;
});

const TechStack = memo(function TechStack({ items }) {
  return <div className="tech">기술 스택: {items.join(', ')}</div>;
});

const ProjectItem = memo(function ProjectItem({ title, period, role, tech, details }) {
  return (
    <div className="project-item">
      <h4 className="project-title">{title}</h4>
      <ProjectPeriod start={period.start} end={period.end} />
      {tech && tech.length > 0 && <TechStack items={tech} />}
      {role && <div className="role">역할: {role}</div>}
      {details && details.length > 0 && (
        <ul className="bullets">
          {details.map((d, idx) => (
            <Bullet key={idx}>{d}</Bullet>
          ))}
        </ul>
      )}
    </div>
  );
});

// 경력 데이터 분리 (컴포즈 가능한 구조)
const profile = {
  title: '경력기술서',
  summary: {
    role: '[SaaS, 구축] 그룹웨어 메일·전자결재 영역 풀스택 개발·운영, 대규모 데이터 마이그레이션 자동화 주도',
    strengths: [
      '모듈 핵심 기능 개발, 반복 업무 자동화, CS 이슈 선제 제거, 대규모 리팩토링 기획·실행, 운영 효율화',
    ],
    coreTech: [
      'Spring Boot', 'React', 'MySQL', 'Kafka', 'ElasticSearch', 'Kubernetes', 'MailEngine(SMTP/POP/IMAP)'
    ],
    achievements: [
      '초기 기획~런칭 핵심 기능 개발',
      '마이그레이션 3일→2시간 단축',
      '자동화로 요청 1/10 수준 감소',
      '탈취 확인 요청 1/50 수준 감소',
      '유지보수 접수율 하락',
      '주요 기능 속도 최적화',
    ],
  },
  competencies: [
    {
      title: '1) 운영 효율화 전문성',
      bullets: [
        '반복 CS 업무 선제 식별 및 자동화(요청·처리 리드타임 단축, 야간/주말 호출 감소)',
        '자가진단/자가처리 기능 제공(발송 진행 확인, 반송 사유 가시화, 계정탈취 조회)으로 1차 응대 부담 경감',
        '인증서 등록/검증/만료 알림 일원화로 장애 리스크 사전 차단 및 운영 표준화',
      ],
    },
    {
      title: '2) 대규모 시스템 리팩토링 경험',
      bullets: [
        '레거시 의존/상태/렌더링 병목 분석 및 개선안 도출',
        '목표/지표/로드맵 문서화로 경영진 설득, 단계적 리팩토링 실행',
        '공통 UI/훅 표준화, 상태 최소화, 리스트 최적화로 재사용성 및 온보딩 효율 상승',
      ],
    },
    {
      title: '3) 풀스택 개발 및 운영',
      bullets: [
        'React-프론트, Spring Boot-백엔드, Kubernetes/Kafka/ElasticSearch-인프라 전 영역 경험',
        '기획→개발→런칭→운영 전 단계 참여로 품질/안정성 균형',
        '대량/개별 발송, 반송, 포워딩, S3 연동 등 메일 도메인 핵심 기능 설계·구현',
      ],
    },
    {
      title: '4) 문제 해결 중심 사고',
      bullets: [
        '현업 불편을 능동 발굴→개발 건의→실행(문제-원인-대안-성과 프레임)',
        'TTI, 요청 건수, 성공률, SLA 등 데이터 기반 효과 검증 및 지속 개선',
        '보안·컴플라이언스(계정탈취 탐지, 로그·권한 점검, 전자정부 프레임워크) 고려로 안정성 강화',
      ],
    },
  ],
  projects: [
    {
      groupTitle: '1. 그룹웨어 내 메일 모듈 개발 및 유지보수',
      meta: {
        period: { start: '2024.07', end: '재직중' },
        tech: [
          'Spring Boot', 'React', 'MySQL', 'Kubernetes', 'ElasticSearch',
          'Kafka', 'MailEngine(SMTP/POP/IMAP)', 'Linux', 'Git'
        ],
        role: '기능 개발 및 리팩토링 주도, 운영 자동화로 CS/운영 비용 절감',
      },
      items: [
        {
          title: 'SSL 인증서 등록 기능 개발',
          period: { start: '2024.10.01', end: '2024.10.31' },
          details: [
            '배경: 인증서 갱신/적용 수동 처리로 반복·오류·지연 발생',
            '개선: 사용자 직접 등록, 검증/만료 알림 일원화, Kubernetes 업데이트 절차 정립',
            '성과: 요청 접수율 대폭 하락, 만료 장애 리스크 축소',
          ],
        },
        {
          title: '메일 탈취 조회 기능 개발',
          period: { start: '2024.11.01', end: '2024.11.30' },
          details: [
            '배경: 유지보수 접수 90% 이상이 해당 이슈, 로그 실시간 확인/전달로 병목',
            '개선: 사용자 자가 조회 화면, 의심계정 리스트 및 IP/지역/패턴 시각화',
            '성과: 탈취 확인 요청 대폭 감소, 1차 응대 자동화로 CS 리소스 절감',
          ],
        },
        {
          title: '메일 허용정책 설정 기능 개발',
          period: { start: '2024.12.01', end: '2024.12.31' },
          details: [
            '배경: 릴레이/스팸장비 연동 요청을 고객지원 접수 후 개발팀이 직접 등록',
            '개선: 관리자 UI 제공, 권한 검증 및 감사로그 연계로 셀프 프로비저닝',
            '성과: 고객지원팀이 직접 설정하여 고객지원/개발팀 편의성 극대화',
          ],
        },
        {
          title: '메일 내보내기 기능(법무 모듈) 개발',
          period: { start: '2025.01.02', end: '2025.01.24' },
          details: [
            '배경: 법무모듈-사건 연동 기능 요청',
            '개발: 특정 메일 내보내기, 법무모듈 전달, 메일 뷰어 API 제공',
            '성과: 법무 사건과 주고받은 메일을 한 페이지에서 조회',
          ],
        },
        {
          title: '메일 FrontEnd 전체 리팩토링',
          period: { start: '2025.01.01', end: '2025.06.30' },
          details: [
            '배경: 현행 React 소스 구조적 한계로 고도화/성능/유지보수 저하',
            '개선: 컴포넌트 모듈화, 상태 관리 단순화, 리스트 최적화(가상 스크롤/메모이제이션), 공통 UI/훅 표준화',
            '성과: 응답 속도 및 유지보수 효율 개선',
            '특이사항: 팀장/CTO 설득 및 승인 후 진행, 개선 범위: 메일 프론트 전체',
            '참고: 포트폴리오 파일 내 상세 사례 포함',
          ],
        },
        {
          title: '강원랜드 메일 망연계 시스템 개발',
          period: { start: '2025.02.03', end: '2025.02.28' },
          details: [
            '배경: 망분리 환경에서 안전한 메일 연계 및 수발신 통계 API 수요',
            '개선: 내부망-외부망 연계 API 및 수발신 통계 API 개발',
            '성과: 안정적 송수신 및 통계 기반 탈취/의심계정 경고로 CS 요소 차단',
          ],
        },
        {
          title: 'AWS S3 연동',
          period: { start: '2025.04.07', end: '2025.04.14' },
          details: [
            '배경: 더존 클라우드 외 AWS 고객사 수요 대응',
            '개선: 메일모듈 AWS S3 연동',
          ],
        },
        {
          title: '발송 진행 확인 기능',
          period: { start: '2025.04.24', end: '2025.05.08' },
          details: [
            '배경: 발송 상태 확인 문의 다수',
            '개선: 발송/성공/실패 단계 모니터링 화면 제공',
            '성과: 운영 가시성 확보, 문의 감소',
          ],
        },
        {
          title: '외부메일 반송 기능 고도화',
          period: { start: '2025.05.09', end: '2025.05.16' },
          details: [
            '배경: 아웃룩 발송 반송 사유 파악 어려움',
            '개선: 반송메일 추가로 발송자 확인성 제고',
            '성과: 문의 감소',
          ],
        },
        {
          title: '전자정부 프레임워크 적용',
          period: { start: '2025.06.02', end: '2025.07.02' },
          details: [
            '배경: 공공 고객사 수요 대응',
            '개선: 전자정부 프레임워크 적용 위한 Spring Boot 버전 변경 및 대응',
            '성과: 공공 레퍼런스 대응력 강화',
          ],
        },
        {
          title: '메일 BackEnd 속도 개선',
          period: { start: '2025.07.24', end: '2025.08.20' },
          details: [
            '배경: 클라우드형 고객사 초기 접속 10초+',
            '개선: 초기 기초데이터 세분화/분리, 백그라운드 싱크, 쿼리/인덱스 개선',
            '성과: 초기 접속/갱신 500ms 이내로 단축',
          ],
        },
      ],
    },
    {
      groupTitle: '2. 전자결재 데이터 마이그레이션',
      meta: {
        period: { start: '2018.12', end: '2022.06' },
        tech: ['Spring Boot(JPA)', 'MySQL', 'MSSQL', 'Oracle', 'React', 'Linux', 'Git'],
        role: '업세일 대응 대규모 고객사 데이터/파일 마이그레이션 자동화 도구 설계·구현·운영',
      },
      items: [
        {
          title: '마이그레이션 파이프라인 및 툴링',
          period: { start: '2018.12', end: '2022.06' },
          details: [
            '업세일에 따른 데이터/첨부/보정 툴 개발',
            '대상 정의, 스키마 매핑, 정합성 기준, 롤백 정책 수립',
            '스트리밍/배치, 체크포인팅, 실패 레코드 재처리, 검증 리포트 자동화',
            'SOP: 사전 점검→본 이관→사후 검증 자동 리포팅',
            '성과: 3일→2시간 단축, 업세일 속도↑, 약 500여 고객사 이관',
          ],
        },
      ],
    },
    {
      groupTitle: '3. Amaranth10(그룹웨어) 전자결재 개발 및 유지보수',
      meta: {
        period: { start: '2019.11', end: '2022.06' },
        tech: ['Spring Boot', 'React', 'MySQL', 'Java(Spring)', 'JSP', 'Redis', 'Git', 'SVN', 'Docker'],
        role: '초기 기획~런칭 핵심 기능 개발 및 이후 유지보수',
      },
      items: [
        {
          title: '사용자 화면단 개발',
          period: { start: '2019.11', end: '2022.06' },
          details: [
            '결재함: 미결, 수신참조, 상신, 예결, 전결, 후결, 보류, 반려, 기결, 시행, 수신, 회람',
            '문서함: 공문발송, 결재요청, 임시보관, 수신상신, 회람요청',
            '결재양식/결재작성 등 다수',
          ],
        },
        {
          title: '관리자 화면단 개발',
          period: { start: '2019.11', end: '2022.06' },
          details: [
            '문서채번, 대결자 설정, 결재 옵션, 결재양식 설정 등',
          ],
        },
        {
          title: '기타',
          period: { start: '2019.11', end: '2022.06' },
          details: [
            '결재패스워드 암호화 개선, 프로필 연동, 결재문서 PDF 미리보기 추가 등',
            '성과: 사용자 경험 확대, 옵션/기능 개선으로 고객 편의 제공, 판매 이후 200여건 유지보수',
            '특이사항: 프로젝트 초기~런칭까지 전 단계 참여',
          ],
        },
      ],
    },
    {
      groupTitle: '4. BizboxAlpha(그룹웨어) 전자결재 개발 및 유지보수',
      meta: {
        period: { start: '2018.09', end: '2021.03' },
        tech: ['Java(Spring)', 'MySQL', 'JSP', 'Redis', 'Git', 'SVN', 'Docker'],
        role: '전자결재 핵심 기능 고도화 및 대규모 유지보수',
      },
      items: [
        {
          title: '주요 기능 고도화 및 유지보수',
          period: { start: '2018.09', end: '2021.03' },
          details: [
            '전자결재 핵심 기능 고도화, 약 800여건 유지보수',
            '성과: 기능 고도화 및 유지보수로 사용자 편의 제공',
          ],
        },
      ],
    },
  ],
};

// 단일 프로젝트 그룹 렌더러
const ProjectGroup = memo(function ProjectGroup({ group }) {
  const { groupTitle, meta, items } = group;
  return (
    <div className="project-group">
      <h3 className="group-title">{groupTitle}</h3>
      <ProjectPeriod start={meta.period.start} end={meta.period.end} />
      {meta.tech && meta.tech.length > 0 && <TechStack items={meta.tech} />}
      {meta.role && <div className="role">역할: {meta.role}</div>}
      <div className="group-items">
        {items.map((item, idx) => (
          <ProjectItem key={idx} {...item} />
        ))}
      </div>
    </div>
  );
});

export default function Career() {
  const { title, summary, competencies, projects } = profile;

  return (
    <main className="career">
      <h1 className="title">{title}</h1>

      <Section title="핵심 역량 및 특징">
        <div className="kv">
          <div className="kv-row"><span className="kv-key">역할</span><span className="kv-val">{summary.role}</span></div>
          <div className="kv-row"><span className="kv-key">강점</span><span className="kv-val">{summary.strengths.join(', ')}</span></div>
          <div className="kv-row"><span className="kv-key">핵심 기술</span><span className="kv-val">{summary.coreTech.join(', ')}</span></div>
          <div className="kv-row"><span className="kv-key">주요 성과</span><span className="kv-val">{summary.achievements.join(', ')}</span></div>
        </div>
      </Section>

      <Section title="전문성">
        {competencies.map((c, idx) => (
          <div className="competency" key={idx}>
            <h3 className="competency-title">{c.title}</h3>
            <ul className="bullets">
              {c.bullets.map((b, i) => <Bullet key={i}>{b}</Bullet>)}
            </ul>
          </div>
        ))}
      </Section>

      <Section title="주요 프로젝트">
        {projects.map((group, idx) => (
          <ProjectGroup key={idx} group={group} />
        ))}
      </Section>
    </main>
  );
}
