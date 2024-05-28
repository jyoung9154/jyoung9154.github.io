import React, { useState } from 'react';

export default function About() {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    
    return (
        <div className="about-wrapper">
            <div>
                <h1>{' 박재영 '}</h1>
                <blockquote>
                    <p>💻 Full-stack Software Engineer | Java(Spring or Boot) + React</p>
                </blockquote>
                <p className="about-links-container">
                    <a href="https://github.com/jyoung9154">
                        <img
                            src="https://img.shields.io/github/followers/jyoung9154?label=follow&style=social"
                            alt="GitHub: @jyoung9154"
                        />
                    </a>
                    <a href="mailto:jyoung_9154@naver.com">
                        <img
                            src="https://img.shields.io/badge/jyoung_9154-@Naver-1EC800?logo=naver"
                            alt="Naver: @jyoung_9154"
                        />
                    </a>
                        <img
                            src="https://img.shields.io/badge/luck9262-@Kakao-F7E600?logo=kakao"
                            alt="Kakao: @luck9262"
                        />
                </p>

                
                <p>웹개발 경력 4년</p> 
                <p>Java, Spring, React.js 등 다양한 기술 스택 보유하고 있으며 클린코드 작성에 중점을 두고 있습
                    니다. 꾸준한 문제해결 능력으로 업무에 성실히 임할 자신 있습니다.</p>
                <p>주어진 기회에서 최선을 다해 회사의 성장에 기여하고, 함께 일하는 동료들과 협력하여 프로젝트를 성공적으로 완수하는 데 주력하겠습니다. 새로운 기술에 대한
                열정과 배움에 대한 열린 마음을 가지고, 끊임없이 성장하는 개발자가 되겠습니다.</p>
                <hr className="about-separator" />
                <a
                    href="/timeline"
                    className={`${isHovered ? 'hover' : ''}`}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    style={{
                        color: 'inherit',
                        textDecoration: 'none',
                        transition: 'none',
                    }}
                    >
                    <h2>🖇️ 주요이력 🖇️</h2>
                </a>
                
                <div className="timeline-container">
                    <div className="timeline-item">
                        <div className="timeline-date">2022.09 ~ 2024.05 [1년 8개월]</div>
                        <div className="timeline-content">
                        <span><b>세계여행 [6대륙 41개국]</b></span>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-date">2018.09 ~ 2022.06 [3년 10개월]</div>
                        <div className="timeline-content">
                        <span><b>더존비즈온 근무[그룹웨어 전자결재 담당]</b></span>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-date">2013.08 ~ 2017.11 [4년 3개월]</div>
                        <div className="timeline-content">
                        <span><b>국군 정보사령부 특수작전부대(HID) 근무</b></span>
                        </div>
                    </div>
                </div>
                <hr className="about-separator" />
                <h2>⚡ 기술 스택 ⚡</h2>
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
                        <td>Java, Spring, Spring Boot, JPA </td>
                    </tr>
                    <tr>
                        <td>Databases</td>
                        <td>MySQL, Oracle, Microsoft SQL Server, Redis</td>
                    </tr>
                    <tr>
                        <td>DevOps</td>
                        <td>Docker, Nginx</td>
                    </tr>
                    <tr>
                        <td>Web technologies</td>
                        <td>HTML5, CSS3, ES7+</td>
                    </tr>
                </table>
            </div>
        </div>
    );
}

