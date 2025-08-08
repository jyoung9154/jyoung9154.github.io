import React from 'react';

export default function Career() {
  return (
    <div className="career-container">
      <style>{`
        /* 웹폰트: PDF/브라우저에서 한글 깨짐 방지 */
        @font-face {
          font-family: 'Noto Sans KR';
          font-style: normal;
          font-weight: 400;
          src: local('Noto Sans KR Regular'),
               url('https://fonts.gstatic.com/s/notosanskr/v2/Pby6FmXiEBPT4ITbgNA5CgmOelzI.woff2') format('woff2');
        }
        :root{
          --bg: #0f1220;
          --card: #171a2b;
          --ink: #e8ecff;
          --muted:#aab2d5;
          --accent:#7aa2ff;
          --accent-2:#61d6a8;
          --border:#2a2f47;
          --chip:#232844;
          --chip-ink:#cfe1ff;
          --warn:#ffcc66;
        }
        @media (prefers-color-scheme: light){
          :root{
            --bg:#f7f8fc;
            --card:#ffffff;
            --ink:#1c2240;
            --muted:#5b6390;
            --accent:#3b6cff;
            --accent-2:#18a87a;
            --border:#e5e8f1;
            --chip:#eef2ff;
            --chip-ink:#2b3b92;
            --warn:#a36a00;
          }
        }

        .career-container{
          font-family: 'Noto Sans KR', system-ui, -apple-system, Segoe UI, Roboto, 'Helvetica Neue', Arial, 'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif;
          background: var(--bg);
          color: var(--ink);
          padding: 32px 20px 80px;
          display:flex;
          justify-content:center;
        }
        article{
          width: 100%;
          max-width: 980px;
        }
        .career-header{
          font-size: 28px;
          margin: 0 0 20px;
          letter-spacing: .2px;
          display:flex;
          align-items:center;
          gap:10px;
        }
        .career-header::after{
          content:'';
          flex:1;
          height:1px;
          background: linear-gradient(90deg,var(--accent),transparent);
          margin-left:12px;
          opacity:.6;
        }

        .section{
          background: var(--card);
          border:1px solid var(--border);
          border-radius: 14px;
          padding: 18px 20px;
          margin: 16px 0;
          box-shadow: 0 6px 16px rgba(0,0,0,.12);
        }

        .section-title{
          font-size: 18px;
          margin: 4px 0 12px;
          color: var(--accent);
          display:flex;
          align-items:center;
          gap:10px;
        }
        .section-title .dot{
          width:8px;height:8px;border-radius:50%;
          background: var(--accent-2);
          box-shadow:0 0 0 3px rgba(97,214,168,.15);
        }

        .block{
          background: rgba(0,0,0,.05);
          border:1px dashed var(--border);
          border-radius:10px;
          padding:12px 14px;
          margin:10px 0 2px;
        }

        .pre{
          white-space: pre-line;     /* 줄바꿈 유지 + 반응형 */
          font-size:14px;
          line-height:1.7;
          color: var(--ink);
          margin: 6px 0 2px;
        }

        .em{
          color: var(--accent);
          font-weight: 700;
        }
        .em2{
          color: var(--accent-2);
          font-weight: 700;
        }
        .muted{ color: var(--muted); }

        .chips{ display:flex; flex-wrap:wrap; gap:6px; margin:6px 0 0; }
        .chip{
          background: var(--chip);
          color: var(--chip-ink);
          border:1px solid var(--border);
          border-radius: 999px;
          padding: 4px 10px;
          font-size: 12px;
        }

        .kv{ display:grid; grid-template-columns: 120px 1fr; gap:6px 12px; margin: 6px 0 0; }
        .kv dt{ color: var(--muted); }
        .kv dd{ margin:0; }

        .timeline{
          position: relative;
          margin: 10px 0 0;
          padding-left: 16px;
        }
        .timeline::before{
          content:'';
          position:absolute; left:6px; top:0; bottom:0;
          width:2px; background: linear-gradient(var(--accent), transparent);
          opacity:.35;
        }
        .tl-item{
          position:relative; margin: 14px 0 14px 14px;
          padding-left: 8px;
        }
        .tl-item::before{
          content:'';
          position:absolute; left:-16px; top:6px;
          width:10px; height:10px; border-radius:50%;
          background: var(--accent); box-shadow: 0 0 0 4px rgba(122,162,255,.18);
        }
        .title-row{
          display:flex; align-items:center; gap:8px; flex-wrap:wrap;
          font-weight:700;
        }
        .badge{
          font-size:12px; color:var(--accent-2);
          border:1px solid var(--border); background: rgba(97,214,168,.08);
          padding:2px 8px; border-radius:999px;
        }
        .period{ font-size:12px; color:var(--muted); }

        .note{
          margin-top:6px;
          padding:10px 12px;
          background: rgba(255,204,102,.12);
          border:1px solid rgba(255,204,102,.35);
          border-radius:8px;
          color: var(--ink);
        }

        /* 소제목 라벨 */
        .sub-label{
          display:inline-block;
          font-size:12px;
          padding:2px 8px;
          margin:8px 0 6px;
          background: rgba(59,108,255,.14);
          color: var(--accent);
          border:1px solid var(--border);
          border-radius:999px;
        }

        /* 프린트/PDF 최적화 */
        @media print{
          .career-container{ background:#fff; }
          .section{ box-shadow:none; }
        }
      `}</style>

      <article>
        <h2 className="career-header">📜 경력기술서</h2>

        {/* 회사 정보 */}
        <section className="section">
          <h3 className="section-title"><span className="dot" />🏢 더존비즈온</h3>
          <pre className="pre">
솔루션사업본부 UC개발팀 전자결재 Unit <span class="muted">[2018.09 ~ 2022.06 (3년 10개월)]</span>
솔루션사업본부 UC개발팀 메일 Unit <span class="muted">[2024.06 ~ ]</span>
- 1977년 설립, 소프트웨어 개발업, 매출액 <span class="em">4,000억</span>, 사원 수 : <span class="em">1,792명</span>
          </pre>
        </section>

        {/* 주요 업무 */}
        <section className="section">
          <h3 className="section-title"><span className="dot" />🖊️ 주요 업무</h3>

          <div className="block">
            <div className="title-row"><span className="em">1. 전자결재 백엔드/프론트엔드 개발·유지보수</span></div>
            <div className="chips">
              <span className="chip">Java(Spring)</span>
              <span className="chip">Spring Boot</span>
              <span className="chip">JSP</span>
              <span className="chip">React</span>
              <span className="chip">MySQL</span>
              <span className="chip">Redis</span>
              <span className="chip">Git/SVN</span>
              <span className="chip">Docker</span>
              <span className="chip">Kubernetes</span>
            </div>
          </div>

          <div className="block">
            <div className="title-row"><span className="em">2. 전자결재 마이그레이션 개발·운영</span></div>
            <div className="chips">
              <span className="chip">Linux</span>
              <span className="chip">Spring Boot(JPA)</span>
              <span className="chip">React</span>
              <span className="chip">MySQL</span>
              <span className="chip">MSSQL</span>
              <span className="chip">Oracle</span>
              <span className="chip">Git</span>
            </div>
          </div>

          <div className="block">
            <div className="title-row"><span className="em">3. 그룹웨어 메일 개발·유지보수</span></div>
            <div className="chips">
              <span className="chip">Linux</span>
              <span className="chip">Spring Boot</span>
              <span className="chip">React</span>
              <span className="chip">MySQL</span>
              <span className="chip">Kubernetes</span>
              <span className="chip">MailEngine(SMTP/POP/IMAP)</span>
              <span className="chip">ElasticSearch</span>
              <span className="chip">Kafka</span>
              <span className="chip">Git</span>
            </div>
          </div>
        </section>

        {/* 핵심 역량 */}
        <section className="section">
          <h3 className="section-title"><span className="dot" />🔧 핵심 역량 및 특징</h3>
          <dl className="kv">
            <dt>역할</dt>
            <dd>[SaaS, 구축] 메일·전자결재 풀스택 개발·운영, 대규모 마이그레이션 자동화 주도</dd>
            <dt>강점</dt>
            <dd>핵심 기능 개발, 반복 업무 자동화, CS 선제 제거, 대규모 리팩토링, 운영 효율화</dd>
            <dt>핵심 기술</dt>
            <dd>Spring Boot, React, MySQL, Kafka, ElasticSearch, Kubernetes, MailEngine(SMTP/POP/IMAP)</dd>
            <dt>주요 성과</dt>
            <dd>기획~런칭 핵심 기능, 마이그레이션 <span className="em2">3일→2시간</span>, 자동화로 요청 <span className="em2">1/10</span>, 탈취 확인 <span className="em2">1/50</span>, 접수율 하락, 속도 최적화</dd>
          </dl>

          <span className="sub-label">1) 운영 효율화</span>
          <pre className="pre">
- 반복 CS 선제 식별 및 자동화(리드타임 단축, 야간/주말 호출 감소)
- 자가진단·자가처리(발송 진행, 반송 사유, 계정탈취 조회) 제공으로 1차 응대 부담 경감
- 인증서 등록/검증/만료 알림 일원화로 장애 리스크 사전 차단
          </pre>

          <span className="sub-label">2) 대규모 리팩토링</span>
          <pre className="pre">
- 레거시 의존/상태/렌더링 병목 분석 → 개선안 도출
- 목표/지표/로드맵으로 경영진 설득, 단계적 리팩토링 실행
- 공통 UI/훅 표준화, 상태 최소화, 리스트 최적화로 재사용성·온보딩 향상
          </pre>

          <span className="sub-label">3) 풀스택 개발·운영</span>
          <pre className="pre">
- React(프론트) ~ Spring Boot(백엔드) ~ Kubernetes/Kafka/ElasticSearch(인프라) 전 영역
- 기획→개발→런칭→운영 전 단계 참여, 품질·안정성 균형
- 대량/개별 발송, 반송, 포워딩, S3 연동 등 메일 핵심 도메인 직접 설계·구현
          </pre>

          <span className="sub-label">4) 문제 해결 중심</span>
          <pre className="pre">
- 문제-원인-대안-성과 프레임으로 제안→실행
- TTI/요청건수/성공률/SLA 지표 기반 검증 및 개선 사이클
- 보안·컴플라이언스(탈취 탐지, 로그/권한 점검, 전자정부 프레임워크) 고려
          </pre>
        </section>

        {/* 프로젝트 */}
        <section className="section">
          <h3 className="section-title"><span className="dot" />🧑‍💻 주요 프로젝트</h3>

          {/* 프로젝트 1: 메일 모듈 */}
          <div className="tl-item">
            <div className="title-row">
              <span className="em">1. 그룹웨어 내 메일 모듈 개발 및 유지보수</span>
              <span className="badge">진행중</span>
              <span className="period">기간: 2024.07 ~ 재직중</span>
            </div>
            <pre className="pre">
기술 스택: Spring Boot, React, MySQL, Kubernetes, ElasticSearch, Kafka, MailEngine(SMTP/POP/IMAP), Linux, Git
역할: 기능 개발 및 리팩토링 주도, 운영 자동화로 CS/운영 비용 절감
            </pre>

            <div className="timeline">
              <div className="tl-item">
                <div className="title-row">2024.10.01 ~ 2024.10.31 | SSL 인증서 등록 기능<span className="badge">운영 표준화</span></div>
                <pre className="pre">배경: 수동 갱신/적용으로 오류·지연 → 사용자 자가 등록, 검증/만료 알림 일원화, K8s 업데이트 절차 정립
성과: 접수율 대폭 하락, 만료 장애 리스크 축소</pre>
              </div>

              <div className="tl-item">
                <div className="title-row">2024.11.01 ~ 2024.11.30 | 메일 탈취 조회<span className="badge">CS 자동화</span></div>
                <pre className="pre">배경: 유지보수 90% 차지 → 자가 조회 화면, 의심계정/IP/지역/패턴 시각화
성과: 확인 요청 대폭 감소, 1차 응대 자동화</pre>
              </div>

              <div className="tl-item">
                <div className="title-row">2024.12.01 ~ 2024.12.31 | 허용정책 설정<span className="badge">셀프 프로비저닝</span></div>
                <pre className="pre">배경: 개발팀 직접 등록 비효율 → 관리자 UI+권한 검증+감사로그 연계
성과: 고객지원팀 자가 처리로 운영 효율↑</pre>
              </div>

              <div className="tl-item">
                <div className="title-row">2025.01.02 ~ 2025.01.24 | 법무 연계 메일 내보내기</div>
                <pre className="pre">특정 메일 내보내기 → 법무모듈 전달, 메일 뷰어 API 제공
성과: 사건-메일 단일 화면 조회</pre>
              </div>

              <div className="tl-item">
                <div className="title-row">2025.01.01 ~ 2025.06.30 | FE 전체 리팩토링<span className="badge">성능/유지보수</span></div>
                <pre className="pre">컴포넌트 모듈화, 상태 단순화, 리스트 최적화(가상 스크롤/메모), 공통 UI/훅 표준화
특이사항: 팀장/CTO 승인 하 진행
성과: 응답속도·유지보수성 대폭 개선</pre>
              </div>

              <div className="tl-item">
                <div className="title-row">2025.02.03 ~ 2025.02.28 | 강원랜드 망연계</div>
                <pre className="pre">내부/외부망 연계 API, 수발신 통계 API
성과: 안정 송수신, 통계 기반 탈취/의심 계정 경고</pre>
              </div>

              <div className="tl-item">
                <div className="title-row">2025.04.07 ~ 2025.04.14 | AWS S3 연동</div>
                <pre className="pre">더존 클라우드 외 AWS 수요 대응 → 저장소 연동</pre>
              </div>

              <div className="tl-item">
                <div className="title-row">2025.04.24 ~ 2025.05.08 | 발송 진행 확인</div>
                <pre className="pre">발송/성공/실패 단계 모니터링 화면
성과: 운영 가시성 확보, 문의 감소</pre>
              </div>

              <div className="tl-item">
                <div className="title-row">2025.05.09 ~ 2025.05.16 | 외부메일 반송 고도화</div>
                <pre className="pre">반송메일 추가로 발송자 확인성 강화 → 문의 감소</pre>
              </div>

              <div className="tl-item">
                <div className="title-row">2025.06.02 ~ 2025.07.02 | 전자정부 프레임워크 적용</div>
                <pre className="pre">공공 대응 위한 Spring Boot 버전 변경
성과: 공공 레퍼런스 대응력 강화</pre>
              </div>

              <div className="tl-item">
                <div className="title-row">2025.07.24 ~ 2025.08.20 | 메일 BackEnd 속도 개선<span className="badge">500ms</span></div>
                <pre className="pre">초기 기초데이터 분리, 백그라운드 싱크, 쿼리/인덱스 개선
성과: 초기 접속/갱신 500ms 이내</pre>
              </div>
            </div>

            <div className="note">하이라이트: 자동화·자가처리로 CS 요청을 줄이고(탈취 확인 1/50), FE/BE 최적화로 체감 성능을 개선했습니다.</div>
          </div>

          {/* 프로젝트 2: 마이그레이션 */}
          <div className="tl-item">
            <div className="title-row">
              <span className="em">2. 전자결재 데이터 마이그레이션</span>
              <span className="period">기간: 2018.12 ~ 2022.06</span>
              <span className="badge">기여도 100%</span>
            </div>
            <pre className="pre">
기술 스택: Spring Boot(JPA), MySQL, MSSQL, Oracle, React, Linux, Git
역할: 업세일 대응 대규모 고객사 데이터/파일 마이그레이션 자동화 도구 설계·구현·운영

주요 내역
- 업세일 수요에 따른 전자결재 데이터·첨부·보정 툴 개발
- 파이프라인: 대상 정의, 스키마 매핑, 정합성 기준, 롤백 정책
- 대용량 처리: 스트리밍/배치, 체크포인팅, 실패 재처리, 검증 리포트 자동화
- SOP: 사전 점검 → 본 이관 → 사후 검증 자동 리포팅

성과
- 소요시간 <span class="em2">3일 → 2시간</span> 단축
- 업세일 속도 향상으로 매출 증대 기여
- 처리 규모: 약 <span class="em">500여</span> 고객사
            </pre>
          </div>

          {/* 프로젝트 3: Amaranth10 */}
          <div className="tl-item">
            <div className="title-row">
              <span className="em">3. Amaranth10 전자결재 개발 및 유지보수</span>
              <span className="period">기간: 2019.11 ~ 2022.06</span>
              <span className="badge">기여도 35%</span>
            </div>
            <pre className="pre">
기술 스택: Spring Boot, React, MySQL, Java(Spring), JSP, Redis, Git, SVN, Docker
역할: 초기 기획~런칭 핵심 기능 개발 및 이후 유지보수

주요 내역
(1) 사용자 화면
- 결재함: 미결/수신참조/상신/예결/전결/후결/보류/반려/기결/시행/수신/회람
- 문서함: 공문발송/결재요청/임시보관/수신상신/회람요청
- 결재양식, 결재작성

(2) 관리자 화면
- 문서채번, 대결자 설정, 결재 옵션, 결재양식 설정

(3) 기타
- 결재패스워드 암호화 개선, 프로필 연동, PDF 미리보기

성과
- 신규 프로그램·옵션 확대로 사용자 경험 향상
- 제품 판매 이후 유지보수 약 200건
- 초기~런칭 전 단계 참여
            </pre>
          </div>

          {/* 프로젝트 4: BizboxAlpha */}
          <div className="tl-item">
            <div className="title-row">
              <span className="em">4. BizboxAlpha 전자결재 개발 및 유지보수</span>
              <span className="period">기간: 2018.09 ~ 2021.03</span>
              <span className="badge">기여도 30%</span>
            </div>
            <pre className="pre">
기술 스택: Java(Spring), MySQL, JSP, Redis, Git, SVN, Docker
역할: 전자결재 핵심 기능 고도화 및 대규모 유지보수

주요 내역
- 전자결재 핵심 기능 고도화 및 유지보수 약 800건 수행

성과
- 기능 고도화와 안정적 운영으로 사용자 편의 제공
            </pre>
          </div>
        </section>
      </article>
    </div>
  );
}
