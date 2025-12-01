import React from 'react';
import {
  SiSpring, SiReact, SiMysql, SiDocker, SiKubernetes, SiRedis, SiApachekafka, 
  SiElasticsearch, SiLinux, SiGit, SiOracle, SiMicrosoftsqlserver, SiJupyter, 
  SiApacheairflow, SiPostgresql, SiMongodb, SiNginx, SiJenkins
} from 'react-icons/si';
import { MdOutlineSmartToy, MdStorage, MdSecurity, MdEmail } from 'react-icons/md';

const techStacks = [
  { name: 'AI/ML', icon: MdOutlineSmartToy, className: 'text-purple-600', bg: 'bg-purple-100', text: 'text-purple-700' },
  { name: 'Spring Boot', icon: SiSpring, className: 'text-green-500', bg: 'bg-green-100', text: 'text-green-700' },
  { name: 'React', icon: SiReact, className: 'text-sky-500', bg: 'bg-sky-100', text: 'text-sky-700' },
  { name: 'MySQL', icon: SiMysql, className: 'text-blue-500', bg: 'bg-blue-100', text: 'text-blue-700' },
  { name: 'Oracle', icon: SiOracle, className: 'text-orange-500', bg: 'bg-orange-100', text: 'text-orange-700' },
  { name: 'MSSQL', icon: SiMicrosoftsqlserver, className: 'text-gray-700', bg: 'bg-gray-100', text: 'text-gray-800' },
  { name: 'Docker', icon: SiDocker, className: 'text-sky-600', bg: 'bg-sky-100', text: 'text-sky-700' },
  { name: 'Kubernetes', icon: SiKubernetes, className: 'text-blue-600', bg: 'bg-blue-100', text: 'text-blue-700' },
  { name: 'Redis', icon: SiRedis, className: 'text-red-500', bg: 'bg-red-100', text: 'text-red-700' },
  { name: 'Kafka', icon: SiApachekafka, className: 'text-gray-800', bg: 'bg-gray-100', text: 'text-gray-800' },
  { name: 'ElasticSearch', icon: SiElasticsearch, className: 'text-yellow-500', bg: 'bg-yellow-100', text: 'text-yellow-700' },
  { name: 'Linux', icon: SiLinux, className: 'text-black', bg: 'bg-gray-200', text: 'text-gray-800' },
  { name: 'Git', icon: SiGit, className: 'text-orange-500', bg: 'bg-orange-100', text: 'text-orange-700' },
  { name: 'Mail Engine', icon: MdEmail, className: 'text-indigo-600', bg: 'bg-indigo-100', text: 'text-indigo-700' },
  { name: 'AWS S3', icon: MdStorage, className: 'text-yellow-600', bg: 'bg-yellow-100', text: 'text-yellow-800' },
  { name: 'Spring AI MCP', icon: MdOutlineSmartToy, className: 'text-violet-600', bg: 'bg-violet-100', text: 'text-violet-700' },
  { name: 'JPA/MyBatis', icon: SiSpring, className: 'text-emerald-600', bg: 'bg-emerald-100', text: 'text-emerald-700' }
];

function TechBadges({ items }) {
  return (
    <div className="flex flex-wrap gap-2 mt-2">
      {items.map(n => {
        const tech = techStacks.find(t => t.name === n);
        if (!tech) return null;
        return (
          <span key={tech.name} className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition ${tech.bg} ${tech.text}`}>
            <tech.icon className="w-4 h-4" />
            {tech.name}
          </span>
        );
      })}
    </div>
  );
}

const badges = {
  header: ['Spring Boot', 'React', 'MySQL', 'Redis', 'Git', 'Docker', 'Kubernetes', 'Spring AI MCP'],
  task1: ['Spring Boot', 'React', 'MySQL', 'Redis', 'Git', 'Docker', 'Kubernetes'],
  task2: ['Linux', 'Spring Boot', 'JPA', 'React', 'MySQL', 'MSSQL', 'Oracle', 'Git'],
  task3: ['Linux', 'Spring Boot', 'React', 'MySQL', 'Kubernetes', 'Mail Engine', 'ElasticSearch', 'Kafka'],
  mailModule: ['Spring Boot', 'React', 'MySQL', 'Kubernetes', 'ElasticSearch', 'Kafka', 'Linux', 'Git', 'Mail Engine'],
  migration: ['Spring Boot', 'JPA', 'MySQL', 'MSSQL', 'Oracle', 'React', 'Linux', 'Git'],
  aiMcp: ['Spring AI MCP', 'LLM', 'Kafka', 'ElasticSearch']
};

const Mark = ({ children, className = '' }) => (
  <span className={`px-1.5 py-0.5 rounded-md bg-indigo-50 text-rose-600 font-semibold ${className}`}>
    {children}
  </span>
);

const MarkProject = ({ children }) => (
  <span className="px-1.5 py-0.5 rounded-md bg-slate-700 text-white font-semibold">
    {children}
  </span>
);

const MarkLink = ({ children }) => (
  <span className="px-1.5 py-0.5 rounded-md bg-blue-100 text-blue-800 font-semibold">
    {children}
  </span>
);

export default function Career() {
  return (
    <div className="career-container min-h-screen bg-gradient-to-br from-slate-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <Header />
        </div>

        {/* 1. Unit Test CSAT 90% 달성 */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="w-1 h-8 bg-gradient-to-b from-blue-500 to-indigo-600 mr-3 rounded"></span>
            Unit 테스트 CSAT <Mark>90%</Mark>
          </h2>
          <div className="space-y-6 text-base text-gray-700">
            <div className="p-5 rounded-xl border border-gray-200 bg-gray-50">
              <p className="font-bold text-gray-900 mb-2">
                1. <Mark>CSAT 90%</Mark>, <Mark>20% 향상</Mark>
              </p>
              <p>- Java/Spring, Spring Boot, <Mark>JSP</Mark>, React, MySQL, Redis, Git, SVN, Docker, k8s</p>
              <TechBadges items={badges.task1} />
            </div>

            <div className="p-5 rounded-xl border border-gray-200 bg-gray-50">
              <p className="font-semibold text-gray-900 mb-2">
                2. <Mark>ROI 3배</Mark>, <Mark>Prod 오류 70% 감소
              </p>
              <p>- Linux, Spring Boot+JPA, React, MySQL, MSSQL, Oracle DB, Git</p>
              <TechBadges items={badges.task2} />
            </div>

            <div className="p-5 rounded-xl border border-gray-200 bg-gray-50">
              <p className="font-semibold text-gray-900 mb-2">
                3. <Mark>Mail Engine 안정화</Mark>, <Mark>99.9% 가용성
              </p>
              <p>- Linux, Spring Boot, React, MySQL, Git, k8s, <Mark>MailEngine(SMTP, POP, IMAP)</mark>, ElasticSearch, Kafka</p>
              <TechBadges items={badges.task3} />
            </div>
          </div>
        </div>

        {/* 2. Mail SaaS 플랫폼 개발 */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="w-1 h-8 bg-gradient-to-b from-indigo-500 to-purple-600 mr-3 rounded"></span>
            Mail SaaS 플랫폼
          </h2>
          <div className="space-y-4 text-gray-800 text-base">
            <p>
              <Mark>SaaS</Mark>, <Mark>500명 동시 접속</Mark>, <Mark>CSAT 90%</Mark>, <Mark>ElasticSearch 450ms→45ms</Mark>,
              <Mark>SSL 0건</Mark>, <Mark>UI 개선 1위
            </p>
            <p>Spring Boot, React, MySQL, Kafka, ElasticSearch, Kubernetes, <Mark>MailEngine(SMTP/POP/IMAP)</Mark></p>
            <p><Mark>3.2s→0.8s</Mark>, <Mark>75% 감소</Mark>, <Mark>2.4MB→1.1MB</Mark>, <Mark>54% 감소</Mark></p>
          </div>
          <TechBadges items={badges.mailModule} />
          
          {/* 성과 지표 차트 섹션 */}
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="p-5 border border-blue-200 rounded-xl bg-blue-50/40">
              <h3 className="font-bold text-blue-700 mb-3">1. CSAT 지표</h3>
              <ul className="text-base text-blue-700 space-y-2">
                <li><font className="font-medium">CSAT <Mark>90%</Mark> → <Mark>CS 500명</Mark></font></li>
                <li>ElasticSearch <Mark>450ms → 45ms</Mark>, <Mark>90% 향상</Mark></li>
                <li>SSL 이슈 <Mark>10건 → 0건</Mark>, <Mark>UI 만족도 1위</Mark></li>
              </ul>
            </div>

            <div className="p-5 border border-green-200 rounded-xl bg-green-50/40">
              <h3 className="font-bold text-green-700 mb-3">2. 성능 최적화</h3>
              <ul className="text-base text-gray-700 space-y-2">
                <li><Mark>초기 로딩 3.2s → 0.8s</Mark>, <Mark>75% 향상</Mark></li>
                <li>Bundle 크기 <Mark>2.4MB → 1.1MB</Mark>, <Mark>54% 감소</Mark></li>
                <li>CTO 선정 <Mark>Top 3 프로젝트</Mark></li>
              </ul>
            </div>

            <div className="p-5 border border-purple-200 rounded-xl bg-purple-50/40">
              <h3 className="font-bold text-purple-700 mb-3">3. 인프라 안정성</h3>
              <ul className="text-base text-gray-700 space-y-2">
                <li>React → Spring Boot API, Kubernetes, Kafka, ElasticSearch <Mark>End-to-End</Mark></li>
                <li><Mark>3-tier Kafka 1,000 msg/sec</Mark>, API→ElasticSearch <Mark>200ms</Mark></li>
                <li>Kubernetes <Mark>StatefulSet + PVC 99.9%</Mark></li>
              </ul>
            </div>

            <div className="p-5 border border-orange-200 rounded-xl bg-orange-50/40">
              <h3 className="font-bold text-orange-700 mb-3">4. AI 성능</h3>
              <ul className="text-base text-gray-700 space-y-2">
                <li><Mark>AI 응답 60% → 40% 향상</Mark>, <Mark>LLM Tool 통합</Mark></li>
                <li><Mark>TTI(Time to Interactive) 500ms → 200ms</Mark></li>
                <li>AI 처리량 <Mark>10,000 → 50,000 msg/sec</Mark></li>
              </ul>
            </div>
          </div>
        </div>

        {/* 3. 상세 프로젝트 타임라인 */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="w-1 h-8 bg-gradient-to-b from-green-500 to-emerald-600 mr-3 rounded"></span>
            프로젝트 타임라인 (2024-2025)
          </h2>

          <div className="space-y-6">
            {/* SSL 인증서 자동화 */}
            <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow mb-8">
              <div className="flex flex-wrap items-center gap-4 mb-2">
                <h3 className="text-xl font-bold text-gray-800">
                  1-1. <MarkProject>SSL 인증서 자동화</MarkProject>
                </h3>
                <div>
                  <span className="ml-2 align-baseline text-sm text-gray-500">2024.10.01 - 2024.10.31</span>
                </div>
              </div>
              <div className="text-base text-gray-700 space-y-1 mb-4">
                <p>SSL 만료 D-30/D-7 자동 알림, <Mark>React PEM/CRT/KEY UI</Mark></p>
                <p><Mark>Spring Boot X.509 검증</Mark>, Kubernetes Secret + Ingress 자동 리로드</p>
              </div>
              <TechBadges items={['React', 'Spring Boot', 'Kubernetes']} />
              <div className="mt-4"><Mark>결과: SSL 이슈 10건 → 0건, CS 만족도 100%</Mark></div>
            </div>

            {/* IP 차단 및 CSAT 향상 */}
            <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow mb-8">
              <div className="flex flex-wrap items-center gap-4 mb-2">
                <h3 className="text-xl font-bold text-gray-800">
                  1-2. <MarkProject>IP 차단 및 CSAT 90% 달성</MarkProject>
                </h3>
                <div><span className="ml-2 align-baseline text-sm text-gray-500">2024.11.01 - 2024.11.30</span></div>
              </div>
              <p className="text-base text-gray-700 mb-4">
                <Mark>CSAT 90% 불만 Top3</Mark>: 스팸 IP 30%, 불법 접속 450건
              </p>
              <ul className="mt-2 text-base text-gray-700 space-y-1">
                <li><font className="font-medium"><Mark>ElasticSearch 쿼리</Mark>로 IP/국가 분석</font></li>
                <li>React <Mark>Google Maps API + Recharts</Mark> 시각화</li>
                <li><Mark>2FA 강제</Mark>, 결과: <Mark>CSAT 225 → 500</Mark></li>
              </ul>
            </div>

            {/* 릴레이 정책 UI 개선 */}
            <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow mb-8">
              <div className="flex flex-wrap items-center gap-4 mb-2">
                <h3 className="text-xl font-bold text-gray-800">
                  1-3. <MarkProject>릴레이 정책 UI 개선</MarkProject>
                </h3>
                <div><span className="ml-2 align-baseline text-sm text-gray-500">2024.12.01 - 2024.12.31</span></div>
              </div>
              <ul className="mt-2 text-base text-gray-700 space-y-1">
                <li><font className="font-medium"><Mark>React IP 화이트리스트 UI</Mark></font></li>
                <li><Mark>Spring Security @PreAuthorize</Mark> 권한 관리</li>
                <li><Mark>CIDR IP 범위</Mark> 지원, MailEngine Kafka 연동</li>
              </ul>
              <div className="mt-4"><Mark>결과: 정책 변경 오류 80% → 0%</Mark></div>
            </div>

            {/* Mail Export API */}
            <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow mb-8">
              <div className="flex flex-wrap items-center gap-4 mb-2">
                <h3 className="text-xl font-bold text-gray-800">
                  1-4. <MarkProject>Mail Export API</MarkProject>
                </h3>
                <div><span className="ml-2 align-baseline text-sm text-gray-500">2025.01.02 - 2025.01.24</span></div>
              </div>
              <ul className="mt-2 text-base text-gray-700 space-y-1">
                <li><Mark>POST /api/mail/export</Mark> → 비동기 exportId 발급</li>
                <li><Mark>GET /api/mail/viewer/{exportId}</Mark> → iframe 뷰어</li>
              </ul>
              <div className="mt-4"><Mark>결과: 법무팀 2건 → 10건 처리, 만족도 100%</Mark></div>
            </div>

            {/* FrontEnd 성능 최적화 */}
            <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow mb-8 bg-gradient-to-r from-emerald-50 to-green-50">
              <div className="flex flex-wrap items-center gap-4 mb-2">
                <h3 className="text-xl font-bold text-gray-800">
                  1-5. <MarkProject>FrontEnd 성능 최적화</MarkProject>
                </h3>
                <div><span className="ml-2 align-baseline text-sm text-gray-500">2025.01.01 - 2025.06.30</span></div>
              </div>
              <p className="text-base text-gray-700 mb-4">
                CTO 주관 <Mark>6개 팀 3.2s → 목표 0.8s</Mark>, <Mark>75% → 2.4MB → 1.1MB</Mark>
              </p>
              <ul className="text-base text-gray-700 space-y-1 pl-4">
                <li><Mark>React.lazy + Suspense</Mark> 점진적 로딩</li>
                <li><Mark>Tree Shaking + Code Splitting</Mark></li>
                <li><MarkLink><a href="/assets/Mail1.pdf" target="_blank" rel="noopener" aria-label="PDF 다운로드">성과 리포트 PDF</a></MarkLink></li>
              </ul>
            </div>

            {/* 99.9% 안정성 확보 */}
            <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow mb-8">
              <div className="flex flex-wrap items-center gap-4 mb-2">
                <h3 className="text-xl font-bold text-gray-800">
                  1-6. <MarkProject>99.9% 안정성</MarkProject>
                </h3>
                <div><span className="ml-2 align-baseline text-sm text-gray-500">2025.02.03 - 2025.02.28</span></div>
              </div>
              <p className="text-base text-gray-700 mb-4">API → Kafka → ElasticSearch → React <Mark>End-to-End 99.9%</Mark></p>
            </div>

            {/* AWS S3 통합 */}
            <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow mb-8 bg-gradient-to-r from-yellow-50 to-orange-50">
              <div className="flex flex-wrap items-center gap-4 mb-2">
                <h3 className="text-xl font-bold text-gray-800">
                  1-7. <MarkProject>AWS S3 통합</MarkProject>
                </h3>
                <div><span className="ml-2 align-baseline text-sm text-gray-500">2025.04.07 - 2025.04.14</span></div>
              </div>
              <ul className="mt-2 text-base text-gray-700 space-y-1">
                <li><Mark>AWS SDK for Java S3Client</Mark> 동적 설정</li>
                <li><Mark>StorageService 인터페이스</Mark> → Duzon/S3 추상화</li>
              </ul>
            </div>

            {/* AI MCP 개발 */}
            <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow mb-8 bg-gradient-to-r from-purple-50 to-violet-50">
              <div className="flex flex-wrap items-center gap-4 mb-2">
                <h3 className="text-xl font-bold text-gray-800">
                  1-12. <MarkProject>AI MCP</MarkProject>
                </h3>
                <div><span className="ml-2 align-baseline text-sm text-gray-500">2025.09.01 - 2025.09.19</span></div>
              </div>
              <ul className="mt-2 text-base text-gray-700 space-y-1">
                <li><Mark>OneAI LLM + Spring AI MCP</Mark> 툴 통합</li>
                <li><Mark>AI 응답률 60% → 40%</Mark> 성능 개선</li>
              </ul>
              <TechBadges items={badges.aiMcp} />
            </div>
          </div>
        </div>

        {/* 4. 과거 프로젝트 */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* 데이터베이스 마이그레이션 */}
          <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              2. <MarkProject>데이터베이스 마이그레이션</MarkProject>
            </h3>
            <div className="text-base text-gray-700 space-y-1 mb-4">
              <p>2018.12 - 2022.06 | <Mark>3→2차원 500GB</Mark></p>
              <p><Mark>10GB → 500GB</Mark>, <Mark>Zero Downtime</Mark>, NPS <Mark>45 → 72</Mark></p>
            </div>
            <ul className="text-base text-gray-700 space-y-1 pl-4 list-disc">
              <li><Mark>ETL 파이프라인</Mark>: Extract(1K/sec) → Transform → Load(10K/sec)</li>
              <li>MySQL/MSSQL/Oracle <Mark>3종 Adapter</Mark>, MD5 검증</li>
              <li><Mark>WebSocket 실시간 진행률</Mark>, 자동 롤백</li>
            </ul>
          </div>

          {/* Amaranth10 */}
          <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              3. <MarkProject>Amaranth10</MarkProject>
            </h3>
            <div className="text-base text-gray-700 space-y-1 mb-4">
              <p>2019.11 - 2022.06 | <Mark>Phase 4 완료</Mark></p>
              <p><Mark>ROI 3.2배</Mark>, PDF/BCrypt 암호화</p>
            </div>
            <TechBadges items={['Spring Boot', 'React', 'MySQL', 'Docker', 'Redis']} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <>
      <div className="text-center mb-12">
        <h1 className="text-5xl font-black bg-gradient-to-r from-gray-800 via-gray-900 to-black bg-clip-text text-transparent mb-6">
          풀스택 개발자
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Spring AI MCP, Kubernetes, Kafka 기반 <Mark>Mail SaaS</Mark> 개발 7년차
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6 rounded-xl">
          <h2 className="text-2xl font-bold mb-2">Unit 2024.07 ~</h2>
          <p className="text-blue-100 mb-2">Spring AI, Spring Boot, React, MySQL, Kubernetes, ElasticSearch, Kafka, MailEngine, Linux, Git</p>
          <div className="flex flex-wrap gap-4 text-base">
            <span className="font-semibold">CSAT <Mark>90%</Mark></span>
            <span className="font-semibold">AI 60% → 40%</span>
          </div>
          <TechBadges items={badges.header} />
        </div>

        <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white p-6 rounded-xl">
          <h2 className="text-2xl font-bold mb-2">Unit 2018.09 - 2022.06</h2>
          <p className="text-emerald-100 mb-2">1977명, 1,755건, 500GB 데이터베이스 마이그레이션</p>
          <div className="flex flex-wrap gap-4 text-base">
            <span>Amaranth10</span>
            <span>BizboxAlpha</span>
          </div>
          <p className="text-emerald-100 mt-2 text-base">Zero Downtime ETL, NPS 45→72</p>
        </div>
      </div>
    </>
  );
}
