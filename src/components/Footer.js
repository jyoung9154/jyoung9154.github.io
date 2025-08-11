import React from 'react';
import { ReactComponent as GitHubIcon } from '../assets/icons/github.svg';
import { ReactComponent as MailIcon } from '../assets/icons/mail.svg';
import { ReactComponent as WhatsAppIcon } from '../assets/icons/whatsapp.svg';
import { ReactComponent as ResumeIcon } from '../assets/icons/resume.svg';

export default function Footer() {
  return (
    <footer className="flex items-center justify-center py-4">
      <div className="flex items-center gap-8 mt-12 mb-12">
        <a
          className="group relative block w-10 h-10 text-black transition-transform duration-150 hover:-translate-y-1"
          target="_blank"
          rel="noopener noreferrer"
          data-title="GitHub"
          href="https://github.com/jyoung9154"
        >
          <GitHubIcon className="w-10 h-10" aria-label="GitHub" />
          <span className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 whitespace-nowrap rounded bg-gray-800 px-2 py-1 text-xs text-white opacity-0 transition-opacity duration-150 group-hover:opacity-100">
            GitHub
          </span>
        </a>

        <a
          className="group relative block w-10 h-10 text-black transition-transform duration-150 hover:-translate-y-1"
          target="_blank"
          rel="noopener noreferrer"
          data-title="E-mail"
          href="mailto:jyoung_9154@naver.com"
        >
          <MailIcon className="w-10 h-10" viewBox="0 0 512 512" aria-label="E-mail" />
          <span className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 whitespace-nowrap rounded bg-gray-800 px-2 py-1 text-xs text-white opacity-0 transition-opacity duration-150 group-hover:opacity-100">
            E-mail
          </span>
        </a>

        <a
          className="group relative block w-10 h-10 text-black transition-transform duration-150 hover:-translate-y-1"
          target="_blank"
          rel="noopener noreferrer"
          data-title="KakaoTalk"
          href="https://open.kakao.com/o/seT0joLh"
        >
          <WhatsAppIcon className="w-10 h-10" viewBox="0 0 308 308" aria-label="WhatsApp" />
          <span className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 whitespace-nowrap rounded bg-gray-800 px-2 py-1 text-xs text-white opacity-0 transition-opacity duration-150 group-hover:opacity-100">
            KakaoTalk
          </span>
        </a>

        <a
          className="group relative block w-10 h-10 text-black transition-transform duration-150 hover:-translate-y-1"
          target="_blank"
          rel="noopener noreferrer"
          data-title="이력서"
          href="/assets/resume.pdf"
        >
          <ResumeIcon className="w-10 h-10" viewBox="0 0 512 512" aria-label="이력서" />
          <span className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 whitespace-nowrap rounded bg-gray-800 px-2 py-1 text-xs text-white opacity-0 transition-opacity duration-150 group-hover:opacity-100">
            이력서
          </span>
        </a>
      </div>
    </footer>
  );
}
