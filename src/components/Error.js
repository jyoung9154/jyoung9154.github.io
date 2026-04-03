import React from 'react';

import Image500 from 'assets/icons/oh_snap.jpg';

function Error() {
    return (
        <section className="lost-container">
            <div className="link">
                <img className="selfie" alt="" src={Image500} />
            </div>
            <h1>오류가 발생했습니다</h1>
            <p className="not-found-description">
                기술적인 문제가 발생했습니다. 페이지를 새로고침하거나 아래 버튼을 눌러 돌아가 주세요.
            </p>
            <a href="/" className="link-button">
                홈으로 돌아가기
            </a>
        </section>
    );
}

export default Error;
