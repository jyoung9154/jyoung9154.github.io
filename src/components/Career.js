import React from 'react';

export default function Career() {
    return (
        <div className="career-container min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">경력기술서</h1>
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6 rounded-xl">
                        <h2 className="text-2xl font-bold mb-2">더존비즈온</h2>
                        <p className="text-blue-100 mb-2">솔루션사업본부 UC개발팀</p>
                        <div className="flex flex-wrap gap-4 text-sm">
                            <span>전자결재 Unit [2018.09 ~ 2022.06]</span>
                            <span>메일 Unit [2024.06 ~ 현재]</span>
                        </div>
                        <p className="text-blue-100 mt-2 text-sm">1977년 설립 | 매출액 4,000억 | 사원 수 1,792명</p>
                    </div>
                </div>

                {/* 핵심 역량 */}
                <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                        <span className="w-1 h-8 bg-gradient-to-b from-blue-500 to-indigo-600 mr-3 rounded"></span>
                        핵심 역량 및 특징
                    </h2>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div className="space-y-4">
                            <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
                                <h3 className="font-semibold text-gray-800 mb-2">역할</h3>
                                <p className="text-gray-600 text-sm">그룹웨어 메일·전자결재 영역 풀스택 개발·운영, 대규모 데이터 마이그레이션 자동화 주도</p>
                            </div>
                            <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg">
                                <h3 className="font-semibold text-gray-800 mb-2">강점</h3>
                                <p className="text-gray-600 text-sm">모듈 핵심 기능 개발, 반복 업무 자동화, CS 이슈 선제 제거, 대규모 리팩토링 기획·실행</p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
                                <h3 className="font-semibold text-gray-800 mb-2">핵심 기술</h3>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {['Spring Boot', 'React', 'MySQL', 'Kafka', 'ElasticSearch', 'Kubernetes'].map(tech => (
                                        <span key={tech} className="px-3 py-1 bg-white text-purple-700 rounded-full text-xs font-medium shadow-sm">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="p-4 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg">
                                <h3 className="font-semibold text-gray-800 mb-2">주요 성과</h3>
                                <p className="text-gray-600 text-sm">마이그레이션 3일→2시간 단축, 요청 1/10 수준 감소, 탈취 확인 요청 1/50 수준 감소</p>
                            </div>
                        </div>
                    </div>

                    {/* 전문성 영역 */}
                    <div className="grid lg:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <div className="p-5 border border-blue-200 rounded-xl hover:shadow-md transition-shadow">
                                <h3 className="font-bold text-blue-700 mb-3">1. 운영 효율화 전문성</h3>
                                <ul className="text-sm text-gray-600 space-y-2">
                                    <li>• 반복적인 CS 업무 선제 식별 및 자동화</li>
                                    <li>• 사용자 자가진단·처리 기능 제공</li>
                                    <li>• 인증서 등록/검증/만료 알림 일원화</li>
                                </ul>
                            </div>
                            <div className="p-5 border border-green-200 rounded-xl hover:shadow-md transition-shadow">
                                <h3 className="font-bold text-green-700 mb-3">2. 대규모 시스템 리팩토링</h3>
                                <ul className="text-sm text-gray-600 space-y-2">
                                    <li>• 복잡한 레거시 코드 구조 체계적 분석</li>
                                    <li>• 목표/지표/로드맵 문서화로 단계적 실행</li>
                                    <li>• 공통 UI/훅 표준화 및 성능 최적화</li>
                                </ul>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="p-5 border border-purple-200 rounded-xl hover:shadow-md transition-shadow">
                                <h3 className="font-bold text-purple-700 mb-3">3. 풀스택 개발 및 운영</h3>
                                <ul className="text-sm text-gray-600 space-y-2">
                                    <li>• React부터 Spring Boot, 인프라까지 전 영역</li>
                                    <li>• 기획→개발→런칭→운영 전 단계 참여</li>
                                    <li>• 메일 핵심 도메인 기능 설계·구현</li>
                                </ul>
                            </div>
                            <div className="p-5 border border-orange-200 rounded-xl hover:shadow-md transition-shadow">
                                <h3 className="font-bold text-orange-700 mb-3">4. 문제 해결 중심 사고</h3>
                                <ul className="text-sm text-gray-600 space-y-2">
                                    <li>• 현업 불편 능동 발굴 및 개발 전환</li>
                                    <li>• 데이터 기반 성과 측정 및 지속 개선</li>
                                    <li>• 보안·컴플라이언스 고려한 안정성 강화</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 주요 프로젝트 */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                        <span className="w-1 h-8 bg-gradient-to-b from-green-500 to-emerald-600 mr-3 rounded"></span>
                        주요 프로젝트
                    </h2>

                    <div className="space-y-8">
                        {/* 프로젝트 1 - 메일 모듈 */}
                        <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                            <div className="flex flex-wrap items-center gap-4 mb-4">
                                <h3 className="text-xl font-bold text-gray-800">그룹웨어 내 메일 모듈 개발 및 유지보수</h3>
                                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                                    2024.07 ~ 현재
                                </span>
                            </div>
                            
                            <div className="flex flex-wrap gap-2 mb-4">
                                {['Spring Boot', 'React', 'MySQL', 'Kubernetes', 'ElasticSearch', 'Kafka', 'MailEngine'].map(tech => (
                                    <span key={tech} className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                <div className="p-4 bg-gray-50 rounded-lg">
                                    <h4 className="font-semibold text-sm mb-2 text-blue-700">SSL 인증서 등록 기능</h4>
                                    <p className="text-xs text-gray-600">사용자 직접 등록, 만료 알림 일원화로 장애 리스크 축소</p>
                                </div>
                                <div className="p-4 bg-gray-50 rounded-lg">
                                    <h4 className="font-semibold text-sm mb-2 text-blue-700">메일 탈취 조회 기능</h4>
                                    <p className="text-xs text-gray-600">자가 조회 화면 제공으로 확인 요청 1/50 수준 감소</p>
                                </div>
                                <div className="p-4 bg-gray-50 rounded-lg">
                                    <h4 className="font-semibold text-sm mb-2 text-blue-700">Frontend 전체 리팩토링</h4>
                                    <p className="text-xs text-gray-600">컴포넌트 모듈화, 상태관리 단순화, 성능 최적화</p>
                                </div>
                                <div className="p-4 bg-gray-50 rounded-lg">
                                    <h4 className="font-semibold text-sm mb-2 text-blue-700">망연계 시스템 개발</h4>
                                    <p className="text-xs text-gray-600">망분리 환경 안전한 메일 연계 및 통계 API</p>
                                </div>
                                <div className="p-4 bg-gray-50 rounded-lg">
                                    <h4 className="font-semibold text-sm mb-2 text-blue-700">AWS S3 연동</h4>
                                    <p className="text-xs text-gray-600">클라우드 환경 고객사 수요 대응</p>
                                </div>
                                <div className="p-4 bg-gray-50 rounded-lg">
                                    <h4 className="font-semibold text-sm mb-2 text-blue-700">Backend 속도 개선</h4>
                                    <p className="text-xs text-gray-600">10초 → 500ms 이내로 초기 접속 속도 단축</p>
                                </div>
                            </div>
                        </div>

                        {/* 프로젝트 2 - 마이그레이션 */}
                        <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                            <div className="flex flex-wrap items-center gap-4 mb-4">
                                <h3 className="text-xl font-bold text-gray-800">전자결재 데이터 마이그레이션</h3>
                                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                                    2018.12 ~ 2022.06
                                </span>
                            </div>
                            
                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="p-4 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg">
                                    <h4 className="font-bold text-purple-700 mb-2">개발 내용</h4>
                                    <ul className="text-sm text-gray-600 space-y-1">
                                        <li>• 데이터/파일 마이그레이션 툴</li>
                                        <li>• 파이프라인 정립 및 자동화</li>
                                        <li>• 표준 운영 절차 수립</li>
                                    </ul>
                                </div>
                                <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg">
                                    <h4 className="font-bold text-green-700 mb-2">주요 성과</h4>
                                    <ul className="text-sm text-gray-600 space-y-1">
                                        <li>• <strong>3일 → 2시간</strong> 단축</li>
                                        <li>• 약 500여 고객사 처리</li>
                                        <li>• 매출 기여도 향상</li>
                                    </ul>
                                </div>
                                <div className="p-4 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-lg">
                                    <h4 className="font-bold text-orange-700 mb-2">기술 스택</h4>
                                    <div className="flex flex-wrap gap-1">
                                        {['Spring Boot', 'MySQL', 'Oracle', 'React'].map(tech => (
                                            <span key={tech} className="px-2 py-1 bg-white text-orange-700 rounded text-xs">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 프로젝트 3 & 4 */}
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                                <h3 className="text-lg font-bold text-gray-800 mb-2">Amaranth10 전자결재</h3>
                                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm mb-4">
                                    2019.11 ~ 2022.06
                                </span>
                                <p className="text-sm text-gray-600 mb-3">초기 기획부터 런칭까지 핵심 기능 개발</p>
                                <ul className="text-xs text-gray-600 space-y-1">
                                    <li>• 결재함, 문서함 전체 개발</li>
                                    <li>• 관리자 화면 및 설정 기능</li>
                                    <li>• 200여건 유지보수 완료</li>
                                </ul>
                            </div>
                            
                            <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                                <h3 className="text-lg font-bold text-gray-800 mb-2">BizboxAlpha 전자결재</h3>
                                <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm mb-4">
                                    2018.09 ~ 2021.03
                                </span>
                                <p className="text-sm text-gray-600 mb-3">핵심 기능 고도화 및 대규모 유지보수</p>
                                <ul className="text-xs text-gray-600 space-y-1">
                                    <li>• 전자결재 주요 기능 고도화</li>
                                    <li>• 800여건 유지보수 진행</li>
                                    <li>• 사용자 편의성 개선</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
