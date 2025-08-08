import React from 'react';

export default function Career() {
    return (
        <div className="career-container min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">경력기술서 [2025.08.08 TailWind CSS로 리모델링 진행중 입니다~]</h1>

                    {/* 회사 정보 - 요청한 원문을 보존하여 반영 */}
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6 rounded-xl">
                        <h2 className="text-2xl font-bold mb-2">더존비즈온</h2>
                        <p className="text-blue-100 mb-2">솔루션사업본부 UC개발팀</p>
                        <div className="flex flex-wrap gap-4 text-sm">
                            <span>전자결재 Unit [2018.09 ~ 2022.06 (3년 10개월)]</span>
                            <span>메일 Unit [2024.07 ~ ]</span>
                        </div>
                        <p className="text-blue-100 mt-2 text-sm">- 1977년 설립, 소프트웨어 개발업, 매출액 4,000억, 사원 수 : 1792명</p>
                    </div>
                </div>

                {/* 주요 업무 - 원문 그대로 */}
                <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                        <span className="w-1 h-8 bg-gradient-to-b from-blue-500 to-indigo-600 mr-3 rounded">
                        주요 업무
                        </span>
                    </h2>

                    <div className="space-y-6 text-sm text-gray-700">
                        <div className="p-5 rounded-xl border border-gray-200 bg-gray-50">
                            <p className="font-semibold text-gray-900 mb-2">1.그룹웨어 전자결재 백엔드, 프론트엔드 개발 및 유지보수</p>
                            <p>- 기술 스택 : Java(Spring), Spring Boot, JSP, React, MySQL, Redis, Git, SVN, Docker, k8s</p>
                        </div>

                        <div className="p-5 rounded-xl border border-gray-200 bg-gray-50">
                            <p className="font-semibold text-gray-900 mb-2">2.그룹웨어 전자결재 마이그레이션 개발 및 운영 담당</p>
                            <p>- 기술 스택: Linux, Spring Boot(JPA), React, MySQL, MSSQL, Oracle DB, Git</p>
                        </div>

                        <div className="p-5 rounded-xl border border-gray-200 bg-gray-50">
                            <p className="font-semibold text-gray-900 mb-2">3.그룹웨어 메일 개발 및 유지보수</p>
                            <p>- 기술 스택: Linux, Spring Boot, React, MySQL, Git, k8s, MailEngine(SMTP, POP, IMAP), ElasticSearch, Kafka</p>
                        </div>
                    </div>
                </div>

                {/* 핵심 역량 및 특징 - 원문 그대로 */}
                <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                        <span className="w-1 h-8 bg-gradient-to-b from-indigo-500 to-purple-600 mr-3 rounded">
                        핵심 역량 및 특징
                    </h2>

                    <div className="space-y-2 text-gray-800 text-sm">
                        <p>• 역할: [SaaS, 구축] 그룹웨어 메일·전자결재 영역 풀스택 개발·운영, 대규모 데이터 마이그레이션 자동화 주도</p>
                        <p>• 강점: 모듈 핵심 기능 개발, 반복 업무 자동화, CS 이슈 선제 제거, 대규모 리팩토링 기획·실행, 운영 효율화</p>
                        <p>• 핵심 기술: Spring Boot, React, MySQL, Kafka, ElasticSearch, Kubernetes, MailEngine(SMTP/POP/IMAP)</p>
                        <p>• 주요 성과: 초기 기획~런칭 핵심 기능 개발, 마이그레이션 3일→2시간 단축, 자동화로 요청 1/10 수준 감소, 탈취 확인 요청 1/50 수준 감소, 유지보수 접수율 하락, 주요 기능 속도 최적화</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mt-6">
                        <div className="p-5 border border-blue-200 rounded-xl bg-blue-50/40">
                            <h3 className="font-bold text-blue-700 mb-3">1) 운영 효율화 전문성</h3>
                            <ul className="text-sm text-gray-700 space-y-2">
                                <li>• 반복적인 CS 업무를 선제적으로 식별하고 자동화 도구로 해소(요청·처리 리드타임 단축, 야간/주말 호출 감소).</li>
                                <li>• 사용자 자가진단·자가처리 기능(발송 진행 확인, 반송 사유 가시화, 계정탈취 조회 등) 제공으로 1차 응대 부담 경감.</li>
                                <li>• 인증서 등록/검증/만료 알림 일원화로 장애 리스크 사전 차단 및 운영 표준화.</li>
                            </ul>
                        </div>

                        <div className="p-5 border border-green-200 rounded-xl bg-green-50/40">
                            <h3 className="font-bold text-green-700 mb-3">2) 대규모 시스템 리팩토링 경험</h3>
                            <ul className="text-sm text-gray-700 space-y-2">
                                <li>• 복잡한 레거시 코드 구조를 체계적으로 분석(의존·상태·렌더링 병목)하고 개선안 도출.</li>
                                <li>• 목표/지표/로드맵을 문서화하여 경영진을 설득, 단계적 리팩토링을 실행해 성능·유지보수성 동시 개선.</li>
                                <li>• 공통 UI/훅 표준화, 상태 최소화, 리스트 최적화 등으로 재사용성 및 온보딩 효율 상승.</li>
                            </ul>
                        </div>

                        <div className="p-5 border border-purple-200 rounded-xl bg-purple-50/40">
                            <h3 className="font-bold text-purple-700 mb-3">3) 풀스택 개발 및 운영</h3>
                            <ul className="text-sm text-gray-700 space-y-2">
                                <li>• 프론트엔드(React)부터 백엔드(Spring Boot), 인프라(Kubernetes, Kafka, ElasticSearch)까지 전 영역 경험.</li>
                                <li>• 초기 기획→개발→런칭→운영 전 단계 참여로 기능 품질과 운영 안정성 균형 확보.</li>
                                <li>• 대량/개별 발송, 반송, 포워딩, S3 연동 등 메일 핵심 도메인 기능을 직접 설계·구현.</li>
                            </ul>
                        </div>

                        <div className="p-5 border border-orange-200 rounded-xl bg-orange-50/40">
                            <h3 className="font-bold text-orange-700 mb-3">4) 문제 해결 중심 사고</h3>
                            <ul className="text-sm text-gray-700 space-y-2">
                                <li>• 현업 불편을 능동적으로 발굴해 개발 건의 및 실행으로 전환(“문제-원인-대안-성과” 일관 프레임).</li>
                                <li>• 데이터 기반 성과 측정(TTI, 요청 건수, 성공률, SLA)을 통해 효과 검증 및 지속 개선 사이클 운영.</li>
                                <li>• 보안·컴플라이언스(계정탈취 탐지, 로그·권한 점검, 전자정부 프레임워크 적용)까지 고려한 안정성 강화.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* 주요 프로젝트 - 원문 그대로 */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                        <span className="w-1 h-8 bg-gradient-to-b from-green-500 to-emerald-600 mr-3 rounded">
                        주요 프로젝트
                    </h2>

                    {/* 1. 메일 모듈 */}
                    <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow mb-8">
                        <div className="flex flex-wrap items-center gap-4 mb-2">
                            <h3 className="text-xl font-bold text-gray-800">1. 그룹웨어 내 메일 모듈 개발 및 유지보수</h3>
                        </div>
                        <div className="text-sm text-gray-700 space-y-1 mb-4">
                            <p>기간: 2024.07 ~ 재직중</p>
                            <p>기술 스택: Spring Boot, React, MySQL, Kubernetes, ElasticSearch, Kafka, MailEngine(SMTP/POP/IMAP), Linux, Git</p>
                            <p>역할: 기능 개발 및 리팩토링 주도, 운영 자동화로 CS/운영 비용 절감</p>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <p className="font-semibold text-gray-900">주요 개발 내역</p>
                            </div>

                            {/* 각 항목 */}
                            <div className="rounded-lg bg-gray-50 p-4">
                                <p className="font-medium text-gray-800">2024.10.01 ~ 2024.10.31 | SSL 인증서 등록 기능 개발</p>
                                <ul className="mt-2 text-sm text-gray-700 space-y-1">
                                    <li>* 배경: 인증서 갱신/적용을 터미널에서 수동으로 처리하며 반복 및 오류·지연 발생</li>
                                    <li>* 개선: 사용자가 직접 인증서 등록, 검증·만료 알림 일원화, 인증서 적용을 위한 Kubernetes 업데이트 절차 정립</li>
                                    <li>* 성과: 인증서 등록 요청 접수율 대폭 하락 및 만료로 인한 장애 리스크 축소</li>
                                </ul>
                            </div>

                            <div className="rounded-lg bg-gray-50 p-4">
                                <p className="font-medium text-gray-800">2024.11.01 ~ 2024.11.30 | 메일 탈취 조회 기능 개발</p>
                                <ul className="mt-2 text-sm text-gray-700 space-y-1">
                                    <li>* 배경: 메일 유지보수 접수의 90% 이상을 차지, 로그 실시간 확인·전달에 개발 및 운영 병목 발생</li>
                                    <li>* 개선: 사용자 자가 조회 화면 제공, 탈취 의심계정 리스트·주요 지표(IP/지역/패턴) 시각화</li>
                                    <li>* 성과: 탈취 확인 요청 건수 대폭 감소, 1차 응대 자동화로 CS 리소스 대폭 감소</li>
                                </ul>
                            </div>

                            <div className="rounded-lg bg-gray-50 p-4">
                                <p className="font-medium text-gray-800">2024.12.01 ~ 2024.12.31 | 메일 허용정책 설정 기능 개발</p>
                                <ul className="mt-2 text-sm text-gray-700 space-y-1">
                                    <li>* 배경: 릴레이설정 및 스팸장비 연동 요청을 고객지원 센터 접수 후 개발팀이 직접 등록하는 비효율 존재</li>
                                    <li>* 개선: 관리자 UI 제공, 권한 검증 및 감사로그 연계로 셀프 프로비저닝 구현</li>
                                    <li>* 성과: 관리자 페이지에서 고객지원팀이 직접 설정함으로서 고객지원 및 개발팀 편의성 극대화</li>
                                </ul>
                            </div>

                            <div className="rounded-lg bg-gray-50 p-4">
                                <p className="font-medium text-gray-800">2025.01.02 ~ 2025.01.24 | 메일 내보내기 기능(법무 모듈) 개발</p>
                                <ul className="mt-2 text-sm text-gray-700 space-y-1">
                                    <li>* 배경: 법무적 내용으로 주고 받은 메일을 법무모듈 - 사건 연동 기능 개발 요청</li>
                                    <li>* 개발: 특정 메일 내보내기 기능을 개발하여 법무모듈에 전달 후 메일 뷰어 API 제공</li>
                                    <li>* 성과: 법무 사건과 주고받은 메일을 하나의 페이지에서 조회</li>
                                </ul>
                            </div>

                            <div className="rounded-lg bg-gray-50 p-4">
                                <p className="font-medium text-gray-800">2025.01.01 ~ 2025.06.30 | 메일 FrontEnd 전체 리팩토링</p>
                                <ul className="mt-2 text-sm text-gray-700 space-y-1">
                                    <li>* 배경: 현행 프론트(React)소스가 유지보수하기 매우 불편한 구조로 되어 있어 기능고도화 및 성능 저하, 유지보수 부담 가중</li>
                                    <li>* 개선: 컴포넌트 모듈화, 상태 관리 단순화, 리스트 렌더링 최적화(가상 스크롤/메모이제이션), 공통 UI/훅 표준화 설계 및 개발</li>
                                    <li>* 성과: 프론트 속도 최적화 및 유지보수 효율 증대, 화면 응답 속도 개선</li>
                                    <li>* 특이사항: 메일 모듈 팀장 및 CTO에게 리팩토링 필요성과 프론트 아키텍처 설계 및 코드 리뷰를 통해 승인 후 진행</li>
                                    <li className="pl-4">* 개선 범위 : 메일 프론트 전체</li>
                                    <li>* 참고: 포트폴리오 파일 내 상세 사례 포함</li>
                                </ul>
                            </div>

                            <div className="rounded-lg bg-gray-50 p-4">
                                <p className="font-medium text-gray-800">2025.02.03 ~ 2025.02.28 | 강원랜드 메일 망연계 시스템 개발</p>
                                <ul className="mt-2 text-sm text-gray-700 space-y-1">
                                    <li>* 배경: 망분리 환경에서 안전한 메일 연계 및 메일 수발신 통계 API 요청</li>
                                    <li>* 개선: 망분리 환경의 내부망과 외부망 연계 API 개발 및 메일 수발신 통계 API 개발</li>
                                    <li>* 성과: 망분리 환경에서의 안정적인 송수신과 통계 데이터를 통한 메일 탈취 및 의심계정 경고하여 CS적요소 차단</li>
                                </ul>
                            </div>

                            <div className="rounded-lg bg-gray-50 p-4">
                                <p className="font-medium text-gray-800">2025.04.07 ~ 2025.04.14 | AWS S3 연동</p>
                                <ul className="mt-2 text-sm text-gray-700 space-y-1">
                                    <li>* 배경: 더존 클라우드가 아닌 AWS 요청 고객사 수요 대응</li>
                                    <li>* 개선: 메일모듈 AWS S3 연동 대응</li>
                                </ul>
                            </div>

                            <div className="rounded-lg bg-gray-50 p-4">
                                <p className="font-medium text-gray-800">2025.04.24 ~ 2025.05.08 | 발송 진행 확인 기능</p>
                                <ul className="mt-2 text-sm text-gray-700 space-y-1">
                                    <li>* 배경: 메일 발송 상태 확인 요청 문의가 많아 개발 진행</li>
                                    <li>* 개선: 메일 발송/성공/실패 단계 모니터링 화면 제공</li>
                                    <li>* 성과: 운영 가시성 확보, 문의 감소</li>
                                </ul>
                            </div>

                            <div className="rounded-lg bg-gray-50 p-4">
                                <p className="font-medium text-gray-800">2025.05.09 ~ 2025.05.16 | 외부메일 반송 기능 고도화</p>
                                <ul className="mt-2 text-sm text-gray-700 space-y-1">
                                    <li>* 배경: 아웃룩에서 발송한 메일 반송 사유 파악 어려움</li>
                                    <li>* 개선: 아웃룩에서 메일 발송 후 반송 시 반송메일을 추가</li>
                                    <li>* 성과: 발송자가 반송되었는지 확인이 가능하여 문의 감소</li>
                                </ul>
                            </div>

                            <div className="rounded-lg bg-gray-50 p-4">
                                <p className="font-medium text-gray-800">2025.06.02 ~ 2025.07.02 | 전자정부 프레임워크 적용</p>
                                <ul className="mt-2 text-sm text-gray-700 space-y-1">
                                    <li>* 배경: 공공 환경 고객사 수요 맞춤 개발 진행</li>
                                    <li>* 개선: 전자정부 프레임워크 적용을 위한 SpringBoot 버전 변경 및 대응</li>
                                    <li>* 성과: 공공 레퍼런스 대응력 강화</li>
                                </ul>
                            </div>

                            <div className="rounded-lg bg-gray-50 p-4">
                                <p className="font-medium text-gray-800">2025.07.24 ~ 2025.08.20 | 메일 BackEnd 속도 개선</p>
                                <ul className="mt-2 text-sm text-gray-700 space-y-1">
                                    <li>* 배경: 클라우드형 고객사 메일 초기 접속시 10초이상 소요되어 최적화 진행</li>
                                    <li>* 개선: 초기 접속시 필수 기초데이터 영역 세분화 및 데이터 분리 및 백그라운드 싱크 및 쿼리·인덱스 개선</li>
                                    <li>* 성과: 메일 초기 접속 및 갱신시 500ms 이내로 단축</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* 2. 전자결재 데이터 마이그레이션 */}
                    <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow mb-8">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">2. 전자결재 데이터 마이그레이션</h3>
                        <div className="text-sm text-gray-700 space-y-1 mb-4">
                            <p>기간: 2018.12 ~ 2022.06 (3년 7개월)</p>
                            <p>개발 인원: 1명</p>
                            <p>기술 스택: Spring Boot(JPA), MySQL, MSSQL, Oracle, React, Linux, Git</p>
                            <p>역할: 업세일 대응을 위한 대규모 고객사 데이터/파일 마이그레이션 자동화 도구 설계·구현·운영</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="rounded-lg bg-gray-50 p-4">
                                <p className="font-semibold text-gray-900 mb-2">주요 개발 내역</p>
                                <ul className="text-sm text-gray-700 space-y-1">
                                    <li>* 더존비즈온의 그룹웨어 제품군 업세일에 따른 마이그레이션 진행</li>
                                    <li>* 데이터 이관, 첨부파일 이관 및 데이터 보정 등 전자결재 전반적인 데이터 및 파일 마이그레이션 툴 개발</li>
                                    <li>* 마이그레이션 파이프라인 정립: 이관 대상 정의, 스키마 매핑, 정합성 기준, 롤백 정책 수립</li>
                                    <li>* 대용량 처리: 스트리밍/배치 처리, 체크포인팅, 실패 레코드 재처리, 검증 리포트 자동화</li>
                                    <li>* 표준 운영 절차(SOP): 사전 점검→본 이관→사후 검증 전 단계 자동 리포팅 문서화</li>
                                </ul>
                            </div>
                            <div className="rounded-lg bg-gray-50 p-4">
                                <p className="font-semibold text-gray-900 mb-2">성과</p>
                                <ul className="text-sm text-gray-700 space-y-1">
                                    <li>* 소요시간 단축: 수동으로 진행하였던 마이그레이션을 툴 개발로 인해 마이그레이션 소요시간 대폭 단축 (3일 → 2시간)</li>
                                    <li>* 매출 기여: 고객사 업세일 진행속도 증가에 따른 그룹웨어 매출액 증가</li>
                                    <li>* 처리 규모: 약 500여 고객사 마이그레이션 진행</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* 3. Amaranth10 */}
                    <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow mb-8">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">3. Amaranth10(그룹웨어) 전자결재 개발 및 유지보수</h3>
                        <div className="text-sm text-gray-700 space-y-1 mb-4">
                            <p>기간: 2019.11 ~ 2022.06 (2년 7개월)</p>
                            <p>기술 스택: Spring Boot, React, MySQL, Java(Spring), JSP, Redis, Git, SVN, Docker</p>
                            <p>역할: 초기 기획 단계부터 런칭까지 핵심 기능 개발 및 이후 유지보수 담당</p>
                        </div>

                        <div className="rounded-lg bg-gray-50 p-4">
                            <p className="font-semibold text-gray-900 mb-2">주요 개발 내역</p>
                            <div className="text-sm text-gray-700 space-y-1">
                                <p>(1) 사용자 화면단 개발</p>
                                <ul className="pl-4 list-disc">
                                    <li>결재함: 미결, 수신참조, 상신, 예결, 전결, 후결, 보류, 반려, 기결, 시행, 수신, 회람 개발</li>
                                    <li>문서함: 공문발송, 결재요청, 임시보관, 수신상신, 회람요청 개발</li>
                                    <li>결재양식, 결재작성 외 다수 개발</li>
                                </ul>
                                <p className="mt-2">(2) 관리자 화면단 개발</p>
                                <ul className="pl-4 list-disc">
                                    <li>문서채번 기능, 대결자 설정 기능, 결재 옵션, 결재양식 설정 외 다수 개발</li>
                                </ul>
                                <p className="mt-2">(3) 그 외 개발 내역</p>
                                <ul className="pl-4 list-disc">
                                    <li>결재패스워드 암호화 방식 개선, 프로필 연동 기능, 결재문서 내 PDF 미리보기 기능 추가 외 다수 개발</li>
                                </ul>
                                <p className="mt-3">성과</p>
                                <ul className="pl-4 list-disc">
                                    <li>신규 프로그램 개발로 사용자 경험 확대 및 다양한 옵션과 기능 개선 및 추가로 고객 편의 제공</li>
                                    <li>제품 판매 이후 200여건 유지보수 진행</li>
                                    <li>특이사항: 프로젝트 초기부터 런칭까지 참여</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* 4. BizboxAlpha */}
                    <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">4. BizboxAlpha(그룹웨어) 전자결재 개발 및 유지보수</h3>
                        <div className="text-sm text-gray-700 space-y-1 mb-4">
                            <p>기간: 2018.09 ~ 2021.03 (2년 6개월)</p>
                            <p>기술 스택: Java(Spring), MySQL, JSP, Redis, Git, SVN, Docker</p>
                            <p>역할: 전자결재 핵심 기능 고도화 및 대규모 유지보수 수행</p>
                        </div>

                        <div className="rounded-lg bg-gray-50 p-4">
                            <p className="font-semibold text-gray-900 mb-2">주요 개발 내역</p>
                            <ul className="text-sm text-gray-700 space-y-1 pl-4 list-disc">
                                <li>전자결재 내 주요 기능 고도화 및 약 800여건 유지보수 진행</li>
                            </ul>
                            <p className="font-semibold text-gray-900 mt-3 mb-2">성과</p>
                            <ul className="text-sm text-gray-700 space-y-1 pl-4 list-disc">
                                <li>기능 고도화 및 유지보수를 진행함으로써 사용자 편의 제공</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
