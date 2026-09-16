// 회사 경력 상세 데이터 — Career 페이지(02 섹션)와 /career-history 경력기술서가 공유한다.
// 각 항목은 배경(문제) → 수행(개선) → 성과 구조.
// 2026-09: GitLab 커밋과 diff로 직접 확인한 것만 적는다. 재 본 적 없는 수치(처리시간·사용자 수·감소율)는 넣지 않는다.
// 흐름도와 근거는 /portfolio-v3.html, 정적 이력서는 /resume-v3.html.

const careerProjects = [
    {
        id: 'jira-ai',
        dateLabel: '2026.04 — 현재 · 사내 단독 개발 · 고도화 진행 중',
        title: 'JIRA-AI — 이슈 자동 분석·업무 자동화 AI 시스템',
        org: '더존비즈온 (DOUZONE) · 주 개발자',
        icon: 'support_agent',
        accent: true,
        intro:
            '“쌓여 있는 방대한 Jira 데이터가 있는데, 왜 같은 문의에 매번 사람이 답하는가” — 이 의문에서 시작했습니다. ' +
            '문의 이슈가 등록되면 사내 지식과 GitLab 소스, 비슷한 이슈를 대조해 근거가 붙은 1차 답변을 달고, ' +
            '메일 도메인 구축처럼 반복되는 요청은 담당자 승인만 받아 처리합니다. ' +
            '기획부터 설계, 개발까지 제가 했고, 코드는 AI 코딩 도구와 함께 썼습니다. 그 사실은 커밋에 공동 저자로 남겨 두었습니다.',
        items: [
            {
                title: 'LangGraph4j 15노드 조건부 워크플로',
                date: '아키텍처 · 2026.04 —',
                background: '이슈 유형·난이도가 제각각이라 단일 LLM 호출로는 근거 수집 깊이와 검수 여부를 통제할 수 없는 문제',
                improvement: '3노드 루프에서 출발해 수집·검수 서브그래프와 설정 기반 MCP 호출을 더해 15노드로 확장. 유사 이슈 조회는 LLM 자율 선택 시 누락이 발생해 항상 실행되는 결정적 단계로 분리',
                result: '근거 부족 시 재수집, 검수 FAIL 시 재합성, 근거 부족 반려 시 코드 보고 단계로 1회 재하강. 정확도 개선폭은 미측정',
            },
            {
                title: 'GitLab 소스 → RAG 코드 인덱스 자동 생성',
                date: '핵심 기능 · 2026.07 — 08',
                background: '소스 전문을 프롬프트에 투입할 수 없고, LLM이 존재하지 않는 파일 경로를 생성하는 문제',
                improvement: '허용 확장자만 선별하고 build·dist·test 경로 제외, 후보 500개 중 30개 선택. LLM이 고른 경로는 원본 후보 목록으로 재검증. 지식 문서와 코드 인덱스를 별도 축으로 분리하고 레거시 경로는 폴백 유지',
                result: '존재하지 않는 경로가 답변에 섞이는 경로를 구조적으로 차단. Milvus는 서버 구성에 실패해 제거, 현재는 파일 기반 RAG',
            },
            {
                title: '담당자 지식의 승인 대기 격리 · DLT 지연 재접수',
                date: '품질·안정성 · 2026.07',
                background: '미검증 지식이 다음 답변의 근거가 되어 오답이 고착되는 순환. 수십 초 소요 분석의 1·2·4초 즉시 재시도는 동일 원인으로 재실패해 비용만 증가',
                improvement: '`!지식저장` 답변을 `_pending` 폴더에 격리해 관리자 승인 이동 후에만 검색 반영. 실패 분석은 Kafka DLT에 보존 후 60분 뒤 retryCount를 증가시켜 재접수',
                result: '미검증 지식의 검색 노출 차단과 실패 유실 방지. 재발행 후 커밋 전 장애 시 중복 가능해 exactly-once로 표기하지 않음',
            },
            {
                title: '인증·SSO·테넌트 경계',
                date: '보안 · 2026.07 — 09',
                background: 'API가 permit-all 상태. 대시보드에서 Axios 요청과 SSE가 동시 401을 받아 회전형 refresh token을 이중 소비해 한쪽이 무효화되는 경쟁 조건',
                improvement: 'JWT 필터와 ADMIN/OPERATOR/VIEWER 경로 규칙 도입, 토큰 갱신을 공유 Promise single-flight로 통합. A10 SSO는 Redis 1회용 nonce와 cookie state 상수 시간 비교를 경유하고, 사용자 키를 (group_seq, login_id) 복합 unique로 전환',
                result: '무토큰 401, VIEWER의 ADMIN 경로 403, OPERATOR 실행 200을 테스트로 고정. 운영 SSO 로그인 성공 여부는 본 커밋 범위 밖',
            },
            {
                title: '메일 도메인 구축 자동화 — 사람 승인 + 외부 상태 재검증',
                date: '업무 자동화 · 2026.08',
                background: '구축 요청이 반복 유입되며 수작업 누락 발생. 반면 외부 시스템 쓰기 작업의 무조건 자동화는 위험',
                improvement: '접수·승인 대기·예약·사전 점검·등록과 완료·취소·수동검토·실패 상태 설계. webhook actor를 신뢰하지 않고 Jira 재조회로 실제 담당자를 확인하고 예약 시점 이슈 변경도 재검증. 보상 삭제 실패는 사람 검토로 이관',
                result: '접수부터 등록·보상까지 단일 커밋(90개 파일)으로 관통. 등록 성공률·처리량은 미측정',
            },
            {
                title: 'AI 패치의 정적 검증 게이트 (source-fix)',
                date: '별도 lineage · 2026.07',
                background: '코드 결함으로 판정된 이슈는 분석만으로 종결 불가. 단 LLM 생성 패치의 직접 적용은 위험',
                improvement: '패치 원문 일치, 괄호 균형, 신규 식별자 출현 여부를 순수 함수로 검사. GitLab branch·commit·MR connector가 404와 실제 장애를 구분하도록 수정하고 재기동 복구와 Redis job lock 추가',
                result: '실패의 묵살 방지. parser가 아닌 휴리스틱이라 컴파일 성공·의미 보존은 미보장',
            },
        ],
        tags: ['LangGraph4j', 'Spring Boot 3', 'Java 17', 'Spring AI', 'Azure OpenAI', 'MariaDB · Flyway', 'Kafka', 'Redis', 'React 18', 'TypeScript', 'MCP'],
        link: '/portfolio-v3.html#jira-ai',
        linkLabel: '구조도 · 15노드 그래프 · 승인 상태도 보기',
    },
    {
        id: 'issueflow',
        dateLabel: '2026.09 — 현재 · 로컬 개발 단계',
        title: 'IssueFlow — 범용 워크플로 엔진',
        org: '더존비즈온 (DOUZONE)',
        icon: 'account_tree',
        accent: true,
        intro:
            'JIRA-AI를 만들면서 도구나 시나리오가 늘 때마다 코드를 더 쓰는 게 싫어졌습니다. ' +
            '노드 그래프를 정의하면 Jira 조회, 조건 분기, MCP 도구가 조합돼 실행되고, 승인과 예약과 비밀은 엔진이 챙기는 것을 목표로 만들고 있습니다. 아직 제 로컬에만 있습니다.',
        items: [
            {
                title: '첫 실행 가능한 세로 슬라이스',
                date: '2026.09',
                background: '엔진·API·저장소·화면을 개별 완성 후 통합하면 연결 지점 결함이 뒤늦게 노출되는 문제',
                improvement: 'API에서 저장된 워크플로를 로드해 엔진 실행, Jira 조회·파싱·분기 후 PostgreSQL 기록까지 단일 슬라이스로 관통. 본문이 짧으면 추측 답변 대신 정보 요청 경로로 분기',
                result: 'Jira 이슈 1건이 워크플로를 완주하고 상태·실패 노드·토큰·노드별 건수 기록. 운영 로그 확인은 미수행',
            },
            {
                title: '서버가 도구를 선언하는 동적 MCP 노드',
                date: '2026.09',
                background: '도구별 노드 구현 방식은 MCP 서버 증가에 비례해 코드가 늘어나는 구조',
                improvement: 'initialize·tools/list·tools/call과 JSON/SSE 응답을 처리하는 클라이언트를 구현하고, 서버 선언 목록을 읽는 `mcp.tool` 노드 하나로 통일. readOnlyHint 미제공 시 쓰기로 간주해 기본 dry-run, 실제 실행은 원장 경유',
                result: 'dry-run, read-only 즉시 실행, 원장 경유, JSON 타입 복원, 실패 포트 분기를 테스트로 고정. 외부 서버 상호운용 검증은 미수행',
            },
            {
                title: '엔진 예산 상한 · 비밀 · 승인',
                date: '2026.09',
                background: 'AI 노드 폭주, 비밀의 JSON 평문 잔존, 링크 미리보기만으로 승인 확정되는 경로 차단 필요',
                improvement: 'step·시간·AI 호출·token·cost 상한과 대기 후 재개·retry 도입. 비밀은 AES-GCM 저장 후 credential id만 참조. 승인은 서명 POST와 DB claim으로만 확정. 근거 문서가 없는 AI 답변은 hold',
                result: '재검수 과정에서 설정 API 필드 불일치, 토큰 평문 저장, 근거 없이 100점 통과되는 결함을 발견해 수정. 예산은 노드 경계 검사라 최대 N-1회 초과 가능',
            },
        ],
        tags: ['Java 17', 'Spring Boot', 'PostgreSQL · Flyway', 'MCP', 'React 18', '@xyflow/react'],
        link: '/portfolio-v3.html#issueflow',
        linkLabel: '엔진 구조 · MCP 노드 시퀀스 보기',
    },
    {
        id: 'mail',
        dateLabel: '2024.07 — 2026.08 · Amaranth 10 · Bizbox Alpha',
        title: '그룹웨어 메일 솔루션 — 백엔드·엔진·프런트',
        org: '더존비즈온 (DOUZONE) · 메일팀',
        icon: 'smart_toy',
        accent: true,
        intro:
            '메일은 게이트웨이(mail)·업무 서버(mailbox)·SMTP/IMAP/POP3 엔진(mailengine) 3계층이며 프런트는 React 마이크로프런트입니다. ' +
            '발송 결과가 안 보이고, 계정 탈취를 늦게 알고, 오래된 메일 정리와 인증서 교체가 수작업이던 문제를 하나씩 손봤습니다. AI와 MCP는 새 시스템을 세우지 않고 이 흐름 위에 얹었습니다.',
        items: [
            {
                title: '전자정부 프레임워크 적용과 계층 분리',
                date: '2024.08 — 2024.11 · 2025.06',
                background: '공공 고객사 요구로 전자정부 프레임워크 적용 필요. 컨트롤러에 세션 검사·파라미터 처리·업무 호출·오류 매핑이 혼재',
                improvement: 'Spring Boot 2.4 → 2.7 상향과 프레임워크 라이브러리 적용. 컨트롤러 업무 로직을 서비스 인터페이스·구현체로 분리(18개 파일). 2025.06 Gradle 8.10, JDK 17 전환',
                result: '기존 API를 유지한 채 계층 경계만 재수립. 이동 규모가 커서 전 API 동작 동일성은 본 커밋만으로 단정 불가',
            },
            {
                title: 'SSL 인증서 등록 자동화와 복구',
                date: '2024.09 — 2025.06',
                background: '인증서 갱신/적용을 터미널에서 수동으로 처리하며 반복적인 지연 및 다운타임 리스크 존재',
                improvement: '관리자 화면 JKS 업로드 시 비밀번호·유효기간 검증. 엔진 기동 시 mailbox에서 인증서를 수신해 백업 후 SMTP·IMAP·POP3에 적용. keystore 손상 시 DB 데이터로 재구성해 기동. 레거시는 Admin → Mailbox multipart 전달로 XML 설정 갱신',
                result: '인증서 파일의 서버별 수동 복사 제거. CS 감소 건수는 미측정',
            },
            {
                title: '메일 허용정책 설정 기능',
                date: '2024.12 · Bizbox Alpha',
                background: '릴레이 설정 및 스팸 장비 연동 시 개발팀 직접 DB 등록에 따른 병목 발생',
                improvement: '송신 릴레이·수신 허용 IP·스팸 장비 설정을 관리자 화면에서 조회·저장. XML 갱신과 전용 로그 기록, 프로세스 기동은 권한 있는 Mailbox로 이관',
                result: '고객지원팀이 개발팀 경유 없이 직접 설정. endpoint 내부 인증과 XML 파서 하드닝은 잔여 과제',
            },
            {
                title: '메일 탈취 의심 조회',
                date: '2024.10 · 2025.07 · 2026.03',
                background: '로그 실시간 확인에 대한 수동 대응 리소스 과다. 평소와 다른 대량 발송 계정의 조기 식별 필요',
                improvement: '레거시는 발송 로그 파일 크기로 후보 추출. Amaranth 10은 90일 기준선·최근 14일 최대·당일 발송량을 SQL 윈도 함수로 계산해 규칙 해당 계정 조회. 이후 Outlook 1,000건 초과 발송 차단 추가',
                result: '관리자가 서버 로그 접속 없이 화면에서 의심 계정과 기간 확인. 확인 요청 감소폭은 미측정이며 차단이 아닌 조회 기능',
            },
            {
                title: '메일 통계 API · S3 오브젝트 스토리지 · 업무 모듈 연계',
                date: '2025.01 — 2025.05',
                background: '조직 단위 통계 진입점 부재. 더존 클라우드가 아닌 오브젝트 스토리지를 사용하는 고객사 존재',
                improvement: 'groupSeq 검증 후 mailbox 통계 API로 위임하는 게이트웨이 구현. S3 스토리지 오브젝트 설정·Endpoint 연동과 상담·법무 모듈 메일 반출 연계 API 개발',
                result: '관리 화면에서 조직 단위 통계 조회. S3 호환 스토리지 환경에서도 메일 동작',
            },
            {
                title: '발송 진행 확인 — Kafka 발송결과 추적',
                date: '2025.05 · 2025.11',
                background: '메일 발송 상태 확인 요청 문의가 많아 개발 진행',
                improvement: 'mailSendResult 토픽 신설과 컨슈머의 결과 적재. 목록 조회 시 UID 일괄 조회로 상태 결합, 프런트 상세에 배지와 발송·승인·실제 발송 시간 표시',
                result: '보낸메일함에서 발송 상태 확인 가능. 결과 미수신 시 UNKNOWN 표기',
            },
            {
                title: '메일 BackEnd 속도 개선 — 카운트 경량 조회와 초기화 흐름 분리',
                date: '2025.09',
                background: '클라우드형 고객사 메일 초기 접속이 느려 최적화 진행',
                improvement: '메일함 카운트 갱신 시마다 전체 메일함 객체를 생성하던 경로를 Redis JSON 부분 조회로 전환. 프런트는 메뉴·부가정보·카운트 API를 분리하고 환경설정을 props로 전달',
                result: '카운트 갱신 시 객체 생성 제거. 벤치마크 부재로 수치를 제외하고 구조 변경만 기재',
            },
            {
                title: '메일 MCP·AI 게이트웨이',
                date: '2025.10 — 2026.02',
                background: '그룹웨어 LLM 도입에 따른 모듈별 AI 인터페이스 표준화 필요. 에이전트가 사용자 메일에 접근할 인증된 통로 부재',
                improvement: '`mcp/{apiCode}` 단일 진입점 구성. 세션 검증 후 사용자 문맥을 주입하고 파라미터를 평탄화해 mailbox로 위임. mailbox에 검색·상세·부재기간·연관메일 API를 구현하고 A10.ONE 도구 발견용 메타데이터 응답 제공',
                result: '에이전트가 로그인 사용자 문맥으로만 메일 조회. 도구 추가 시 apiCode만 증가',
            },
            {
                title: 'AI 내부유출 검증과 발송 승인 연결',
                date: '2025.12',
                background: '외부 발송 메일의 개인정보·민감정보 포함 여부를 발송 전 점검하고 승인 정책에 연결 필요',
                improvement: '본문·URL 수집과 첨부의 Tika 추출 후 ONE AI 판정. 승인 필요 시 `x-approval-ai` 헤더를 부여하고, mailbox가 해당 헤더로 승인메일을 판정해 승인자 알림에 분석 결과 노출. 프런트는 검증 팝업과 SSE 진행 표시 담당',
                result: '프런트 → 게이트웨이 → AI → mailbox 승인까지 3개 저장소를 관통하는 흐름 확보. 모델 정확도는 미측정',
            },
            {
                title: '대량 메일 삭제 잡과 검색 정합성 · ES 마이그레이션 OOM 방어',
                date: '2025.11 — 2025.12',
                background: '오래된 메일 일괄 삭제 시 운영 부하 발생. DB 삭제분이 캐시·검색에 잔존하는 문제 병존',
                improvement: '삭제 플래그와 실제 삭제를 별도 잡으로 분리. 도메인당 단일 실행, UID 배치 조회 후 트랜잭션 단위 갱신, deadlock·lock wait 발생 시 최대 3회 재시도. 완료 후 Redis와 Elasticsearch 7/8·OpenSearch 2 인덱스 정리',
                result: '운영자가 진행 상태를 확인하며 중단 가능. 잡 상태가 메모리에 있어 재시작 시 소실되는 점은 잔여 과제',
            },
            {
                title: '운영 안정성 — 자동응답 루프 억제 · K8s 라우팅 · 동시 복호화 격리',
                date: '2025.10 — 2026.06',
                background: '부재응답과 자동전달 메일의 무한 왕복, 조직별 서비스 경로 분기, 다중 스레드의 Cipher 공유로 인한 복호화 손상 문제',
                improvement: '자동응답에 RFC 3834 `Auto-Submitted` 헤더와 Exchange 호환 헤더 부여. groupSeq 기반 K8s 서비스 라우팅을 공통 HTTP·다운로드·ECM 경로에 적용하고 전역 Cipher를 ThreadLocal로 격리',
                result: '표준 헤더를 준수하는 서버 간 자동응답 왕복 중단, 스레드별 독립 복호화 확보',
            },
            {
                title: '메일 FrontEnd — 목록·본문 분리 · 대기발송 · 자동분류 · Webpack 5',
                date: '2025.03 — 2026.08',
                background: '레거시 구조로 인한 유지보수 가중, 렌더링 성능 저하로 인한 사용자 불편. 보낸 메일을 되돌릴 수 없고, 빌드는 CRA에 묶여 있었습니다.',
                improvement: '목록·본문·빈 상태의 컴포넌트 분리. AI 정리 결과 화면, 주소 기반 자동분류 규칙, MIME 헤더 기반 반송 판별, 발송 후 0~60초 취소 큐 개발과 react-scripts 제거 후 Webpack 5 직접 빌드 전환',
                result: '발송 직후 취소 가능, 발송 실패·반송의 화면 노출. 대기발송 큐는 브라우저 메모리 기반이라 창 종료 시 보장 없음',
            },
        ],
        tags: ['Spring Boot', '전자정부 프레임워크', 'MyBatis · MariaDB', 'Kafka', 'Redis', 'Elasticsearch 7/8 · OpenSearch 2', 'SMTP · IMAP · POP3', 'Tika', 'Kubernetes', 'S3', 'React 16', 'Webpack 5'],
        link: '/portfolio-v3.html#mail',
        linkLabel: '3계층 구조도 · 발송결과 · 삭제 잡 · AI 검증 흐름 보기',
    },
    {
        id: 'approval',
        dateLabel: '2018.09 — 2022.06 · 커밋 확인 2019.11 — 2022.06',
        title: '전자결재/메일 솔루션 개발 및 대규모 데이터 마이그레이션',
        org: '더존비즈온 (DOUZONE) · 전자결재팀',
        icon: 'database',
        accent: false,
        intro:
            'Amaranth 10 전자결재의 결재 처리, 권한, 양식, 문서함 기능을 백엔드와 React 화면 양쪽에서 만들었습니다. ' +
            '옛 제품(BizboxAlpha·Suite)에서 새 제품으로 결재 문서를 옮기는 이관 도구도 이때 만들었습니다.',
        items: [
            {
                title: '데이터 마이그레이션 자동화 툴 개발',
                date: '2021.04 — 2022.06',
                background: '수동 마이그레이션으로 인한 막대한 시간 소요 및 휴먼 에러 발생 리스크. 중간 실패 시 전체 재실행 필요',
                improvement: 'JPA 복합 키 매핑과 그룹별 목적지 DB를 선택하는 RoutingDataSource 적용. 테이블 단위 페이지 분할 이관과 SSE 진행 상황 전달, 본문의 별도 단계 분리, 시작 페이지 지정 기반 중단 지점 재개',
                result: '중단 후 지정 페이지부터 재개 가능. 이전 이력서의 "3일 → 2시간", "500여 개사"는 측정 자료를 확인하지 못해 제외',
            },
            {
                title: 'Amaranth 10 전자결재 시스템 구축',
                date: '2019.11 — 2022.06',
                background: '차세대 그룹웨어 출시를 위한 핵심 도메인(결재/문서함)의 신규 설계 및 개발 필요',
                improvement: '문서 열람 권한 API 구현과 공통 그리드의 첨부·댓글 진입 전 호출 연결. 결재선 상태(반려·보류·거부) 표시, 결재 취소 시 직전 결재자 보정, 재기안 후결 제외(MariaDB·Oracle), 접수 승인·반려 API, 자주 쓰는 양식, Role·인수인계 관리 API, 공통 Excel 내보내기, 문서함 필터 개발',
                result: '결재 처리·권한·양식·문서함이 백엔드와 화면 양쪽에서 연결됨. 저장소 4곳에 본인 커밋 1,259건 확인',
            },
            {
                title: 'BizboxAlpha 유지보수 및 고도화',
                date: '2018.09 — 2021.03',
                background: '대규모 고객사가 사용하는 레거시 시스템의 안정적 운영 및 기능 확장 요구',
                improvement: '주요 결재 로직 유지보수 및 단계적 고도화 참여',
                result: '해당 기간 커밋이 현재 GitLab에 부재해 건수·성과 미기재',
            },
        ],
        tags: ['Java', 'Spring MVC · Spring Boot', 'MyBatis', 'JPA', 'MariaDB · Oracle', 'React', 'WebFlux SSE'],
        link: '/portfolio-v3.html#eap',
        linkLabel: '열람 권한 시퀀스 · 이관 흐름도 보기',
    },
];

export default careerProjects;
