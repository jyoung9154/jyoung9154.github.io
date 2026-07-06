import React from 'react';
import { SiGithub } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";
import { RiMessage3Line } from "react-icons/ri";
import { HiOutlineDocumentText } from "react-icons/hi2";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-16 bg-[#101C22]">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center gap-3">
            <div className="size-6 bg-[#0DA6F2] rounded flex items-center justify-center text-white">
              <span className="material-symbols-outlined text-base">terminal</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-white">Portfolio</span>
          </div>
          <p className="text-slate-500 text-sm">© 2026 Park JaeYoung.</p>
          <p className="footer-ai-note">이 사이트는 Claude(AI)와 함께 만들었습니다</p>
        </div>
        <div className="flex gap-10">
          <a
            href="https://github.com/jyoung9154"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-[#0DA6F2] transition-all hover:scale-110"
            title="GitHub"
          >
            <SiGithub size={24} />
          </a>
          <a
            href="mailto:jyoung_9154@naver.com"
            className="text-slate-400 hover:text-[#0DA6F2] transition-all hover:scale-110"
            title="E-mail"
          >
            <HiOutlineMail size={26} />
          </a>
          <a
            href="https://open.kakao.com/o/seT0joLh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-[#0DA6F2] transition-all hover:scale-110"
            title="KakaoTalk"
          >
            <RiMessage3Line size={26} />
          </a>
          <a
            href="/assets/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-[#0DA6F2] transition-all hover:scale-110"
            title="Resume"
          >
            <HiOutlineDocumentText size={26} />
          </a>
        </div>
      </div>
    </footer>
  );
}
