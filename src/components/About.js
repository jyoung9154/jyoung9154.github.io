import React, { useState } from 'react';


const Mark = ({ children, className = "" }) => (
    <span className={`px-1.5 py-0.5 rounded-md bg-indigo-50 text-rose-600 font-semibold ${className}`}>
        {children}
    </span>
);

export default function About() {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    
    return (
        <div className="max-w-7xl mx-auto p-8 bg-white min-h-screen">
            <div className="space-y-8">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">박재영</h1>
                    <blockquote className="border-l-4 border-blue-500 pl-4 italic text-lg text-gray-600 bg-gray-50 py-3 rounded-r-lg">
                        <p>💻 Full-stack Software Engineer | Java(Spring or Boot) + React</p>
                    </blockquote>
                </div>
                
                <div className="flex justify-center space-x-4 flex-wrap gap-2">
                    <a href="https://github.com/jyoung9154" className="hover:opacity-80 transition-opacity">
                        <img
                            src="https://img.shields.io/github/followers/jyoung9154?label=follow&style=social"
                            alt="GitHub: @jyoung9154"
                            className="h-8"
                        />
                    </a>
                    <a href="mailto:jyoung_9154@naver.com" className="hover:opacity-80 transition-opacity">
                        <img
                            src="https://img.shields.io/badge/jyoung_9154-@Naver-1EC800?logo=naver"
                            alt="Naver: @jyoung_9154"
                            className="h-8"
                        />
                    </a>
                    <img
                        src="https://img.shields.io/badge/luck9262-@Kakao-F7E600?logo=kakao"
                        alt="Kakao: @luck9262"
                        className="h-8"
                    />
                </div>

                <div className="space-y-4 text-2xl text-gray-700 leading-relaxed">
                    {/* <p className="text-lg font-semibold text-blue-600"></p>  */}
                    <p>Java, Spring, React.js 등 다양한 기술 스택 보유하고 있으며 <Mark>클린코드 작성에 중점</Mark>을 두고 있습니다.</p>
                    <p>또한, MySQL, MSSQL, Oracle DB와 같은 다양한 데이터베이스 환경에서의 작업 경험도 갖추고 있습니다. 그리고 리눅스 기반 시스템에서의 개발 및 배포 경험도 풍부하며, Docker, k8s를 활용한 컨테이너 기반의 개발 환경에도 능숙합니다. 이러한 기술 스택을 활용하여, 전자결재 시스템 개발뿐만 아니라, 메일 시스템 개발 등 다양한 프로젝트를 성공적으로 이끌었습니다.
                        개발자로서의 <Mark>저의 강점</Mark>은 고착화되어 있는 <Mark>아날로그 시스템을 자동화</Mark>하는 것을 좋아합니다. 단순한 코딩 능력을 넘어서, 프로젝트의 요구 사항을 정확히 이해하고, 이를 기반으로 효율적이고 신뢰할 수 있는 소프트웨어 솔루션을 설계하고 구현할 수 있는 능력에 있습니다. 
                        또한, 문제 해결 능력과 빠른 학습 능력을 바탕으로 새로운 기술 스택을 신속하게 습득하고 프로젝트에 적용하는 능력도 갖추고 있습니다.</p>
                    <p>주어진 기회에서 최선을 다해 회사의 성장에 기여하고, 함께 일하는 동료들과 협력하여 프로젝트를 성공적으로 완수하는 데 주력하겠습니다. 새로운 기술에 대한 열정과 배움에 대한 열린 마음을 가지고, 끊임없이 성장하는 개발자가 되겠습니다.</p>
                </div>

                <hr className="border-t-2 border-gray-200 my-8" />
                
                <a
                    href="/timeline"
                    className={`block text-center transition-all duration-300 ${isHovered ? 'transform scale-105' : ''}`}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    style={{
                        color: 'inherit',
                        textDecoration: 'none',
                        transition: 'none',
                    }}
                >
                    <h2 className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors">🖇️ 주요이력 🖇️</h2>
                </a>
                
                <div className="space-y-6">
                    <div className="flex flex-col md:flex-row gap-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border-l-4 border-blue-500 hover:shadow-md transition-shadow">
                        <div className="text-sm font-semibold text-blue-600 md:w-64 flex-shrink-0">2024.06 ~ [재직중]</div>
                        <div className="flex-1">
                            <span className="font-bold text-gray-800">더존비즈온 근무 [그룹웨어 메일 개발 담당]</span>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border-l-4 border-green-500 hover:shadow-md transition-shadow">
                        <div className="text-sm font-semibold text-green-600 md:w-64 flex-shrink-0">2022.09 ~ 2024.05 [1년 8개월]</div>
                        <div className="flex-1">
                            <span className="font-bold text-gray-800">세계여행 [6대륙 41개국]</span>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 p-4 bg-gradient-to-r from-purple-50 to-violet-50 rounded-lg border-l-4 border-purple-500 hover:shadow-md transition-shadow">
                        <div className="text-sm font-semibold text-purple-600 md:w-64 flex-shrink-0">2018.09 ~ 2022.06 [3년 10개월]</div>
                        <div className="flex-1">
                            <span className="font-bold text-gray-800">더존비즈온 근무 [그룹웨어 전자결재 개발 담당]</span>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg border-l-4 border-orange-500 hover:shadow-md transition-shadow">
                        <div className="text-sm font-semibold text-orange-600 md:w-64 flex-shrink-0">2013.08 ~ 2017.11 [4년 3개월]</div>
                        <div className="flex-1">
                            <span className="font-bold text-gray-800">국군 정보사령부 특수작전부대(HID) 근무</span>
                        </div>
                    </div>
                </div>
                
                <hr className="border-t-2 border-gray-200 my-8" />
                
                <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">⚡ 기술 스택 ⚡</h2>
                    <div className="overflow-x-auto shadow-lg rounded-lg">
                    <table className="about-skills-table">
                        <tr>
                            <th>분야</th>
                            <th>기술</th>
                        </tr>
                        <tr>
                            <td>FrontEnd</td>
                            <td>JavaScript, React</td>
                        </tr>
                        <tr>
                            <td>BackEnd</td>
                            <td>Java, Spring, Spring Boot, JPA, Kotlin </td>
                        </tr>
                        <tr>
                            <td>Databases</td>
                            <td>MySQL, Oracle, Microsoft SQL Server, Redis</td>
                        </tr>
                        <tr>
                            <td>DevOps</td>
                            <td>Docker, Nginx, Kubernetes</td>
                        </tr>
                        <tr>
                            <td>Web technologies</td>
                            <td>HTML, CSS, ES7+</td>
                        </tr>
                        <tr>
                            <td>Etc</td>
                            <td>AI, ElasticSearch, Kafka</td>
                        </tr>
                    </table>
                    </div>
                </div>
            </div>
        </div>
    );
}