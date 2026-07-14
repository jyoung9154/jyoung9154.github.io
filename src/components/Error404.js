import React from 'react';

import Image404 from 'assets/icons/oh_snap_404.jpg';

function Error404() {
    return (
        <section className="flex flex-col items-center justify-center text-center px-6 py-20 min-h-[70vh]">
            <img
                className="w-full max-w-sm rounded-2xl shadow-2xl mb-10"
                alt="페이지를 찾을 수 없음"
                src={Image404}
            />
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">페이지를 찾을 수 없습니다</h1>
            <p className="text-gray-400 max-w-md mb-10">
                요청하신 페이지를 찾을 수 없습니다. 아래 버튼을 눌러 홈으로 돌아가 주세요.
            </p>
            <a
                href="/"
                className="inline-block rounded-lg bg-sky-500 px-8 py-3 font-semibold text-white transition-colors hover:bg-sky-400"
            >
                홈으로 돌아가기
            </a>
        </section>
    );
}

export default Error404;
