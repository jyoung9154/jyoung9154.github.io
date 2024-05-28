import React from 'react';

export default function Career() {
    return (
        <div className="career-container">
            <article>
                <h2 className="career-header">📜 경력기술서</h2>
                <pre className="career-text" style={{ backgroundColor: 'inherit', fontSize: '13px', border: 'none' }}>
                <h3>🏢 더존비즈온</h3>
                솔루션사업본부 UC개발팀 [2018.09 ~ 2022.06 (3년 10개월)] <br/>
                - 1977년 설립, 매출액 3,500억, 사원 수 : 1764명<br/>
                <br/>
                <h3>🖊️ 주요 업무</h3>
                <b style={{ fontSize: '16px' }}>1.그룹웨어 전자결재 백엔드, 프론트엔드 개발 및 유지보수</b><br/>
                - 기술 스택 : Java(Spring), Spring Boot, JSP, React, MySQL, Redis, Git, SVN, Docker<br/>
                <b style={{ fontSize: '16px' }}>2.그룹웨어 전자결재 마이그레이션 개발 및 진행</b><br/>
                -기술 스택: Linux, Spring Boot(JPA), React, MySQL, MSSQL, Oracle DB, Git<br/>
                <br/>
                <h3>🧑‍💻 진행 프로젝트</h3>
                <b style={{ fontSize: '16px' }}>1. 전자결재 데이터 마이그레이션</b><br/>
                (1) 개발 기간 : 2018.12 ~ 2022.06 (3년 7개월)<br/>
                (2) 개발 인원 : 1명<br/>
                (3) 주요 개발 내역 : <br/>
                - 더존비즈온의 그룹웨어 제품군 업세일에 따른 마이그레이션 진행 <br/>
                - 데이터 이관, 첨부파일 이관 및 데이터 보정 등 전자결재 전반적인 데이터 및 파일 마이그레이션 툴 개발 <br/>
                (4) 개발 및 유지보수 기여도 : 100%<br/>
                (5) 성과 : 수동으로 진행하였던 마이그레이션을 툴 개발로 인해 마이그레이션 소요시간 대폭 단축 (소요시간 3일 ➡️ 2시간) 및 고객사 업세일 진행속도 증가에 따른 그룹웨어 매출액 증가<br/>
                - 약 500여 고객사 마이그레이션 진행<br/>
                </pre>
                <pre className="career-text" style={{ backgroundColor: 'inherit', fontSize: '13px', border: 'none' }}>
                <b style={{ fontSize: '16px' }}>2. Amaranth10(그룹웨어) 전자결재 개발 및 유지보수 </b><br/>
                (1) 개발 기간 : 2019.11 ~ 2022.06 (2년 7개월)<br/>
                (2) 개발 인원 : 3명<br/>
                (3) 주요 개발 내역 :  <br/>
                - 사용자 화면단 개발 내역<br/>
                    - 결재함 (미결, 수신참조, 상신, 예결, 전결, 후결, 보류, 반려, 기결, 시행, 수신, 회람) 개발 <br/>
                    - 문서함 (공문발송, 결재요청, 임시보관, 수신상신, 회람요청) 개발 <br/>
                    - 결재양식, 결재작성 외 다수 개발<br/>
                - 관리자 화면단 개발 내역<br/>
                    - 문서채번 기능, 대결자 설정 기능, 결재 옵션, 결재양식 설정 외 다수 개발 <br/>
                - 그 외 개발 내역<br/>
                    - 결재패스워드 암호화 방식 개선, 프로필 연동 기능, 결재문서 내 PDF 미리보기 기능 추가 외 다수 개발 <br/>
                (4) 개발 및 유지보수 기여도 : 35%<br/>
                (5) 성과 : 신규 프로그램 개발로 사용자 경험 확대 및 다양한 옵션과 기능 개선 및 추가로 고객 편의 제공 및 제품 판매 이후 200여건 유지보수 진행 <br/>
                </pre>
                <pre className="career-text" style={{ backgroundColor: 'inherit', fontSize: '13px', border: 'none' }}>
                <b style={{ fontSize: '16px' }}>3. BizboxAlpha(그룹웨어) 전자결재 개발 및 유지보수</b><br/>
                (1) 개발 기간 : 2018.09 ~ 2021.03 (2년 6개월)<br/>
                (2) 개발 인원 : 4명<br/>
                (3) 주요 개발 내역 :  전자결재 내 주요 기능 고도화 및 약 800여건 유지보수 진행<br/>
                (4) 개발 및 유지보수 기여도 : 20%<br/>
                (5) 성과 : 기능 고도화 및 유지보수를 진행함으로써 사용자 편의 제공<br/>
                </pre>
                
            </article>
        </div>
    );
}
