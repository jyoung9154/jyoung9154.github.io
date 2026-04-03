import React from 'react';

import Image404 from 'assets/icons/oh_snap_404.jpg';

function Error404() {
    return (
        <section className="lost-container">
            <div className="link">
                <img className="selfie" alt="" src={Image404} />
            </div>
            <h1>페이지를 찾을 수 없습니다</h1>
            <p className="not-found-description">
                요청하신 페이지를 찾을 수 없습니다. 아래 버튼을 눌러 홈으로 돌아가 주세요.
            </p>
            <a href="/" className="link-button">
                홈으로 돌아가기
            </a>
        </section>
    );
}

export default Error404;
