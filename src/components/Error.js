import React from 'react';

import Image500 from 'assets/icons/oh_snap.jpg';

function Error() {
    return (
        <section className="flex flex-col items-center justify-center text-center px-6 py-20 min-h-[70vh]">
            <img
                className="w-full max-w-sm rounded-2xl shadow-2xl mb-10"
                alt="오류 안내"
                src={Image500}
            />
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">오류가 발생했습니다</h1>
            <p className="text-gray-400 max-w-md mb-10">
                기술적인 문제가 발생했습니다. 페이지를 새로고침하거나 아래 버튼을 눌러 돌아가 주세요.
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

export default Error;
