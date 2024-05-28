import React from 'react';
import { ReactComponent as GitHubIcon } from '../assets/icons/github.svg';
import { ReactComponent as MailIcon } from '../assets/icons/mail.svg';
import { ReactComponent as WhatsAppIcon } from '../assets/icons/whatsapp.svg';
import { ReactComponent as ResumeIcon } from '../assets/icons/resume.svg';

export default function Header() {
    return (
        <footer className="footer clearfix">
            <div className="footer-social-links">
                <a
                    className="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-title="GitHub"
                    href="https://github.com/jyoung9154"
                >
                    <GitHubIcon className="social-link-icon" aria-label="GitHub" />
                </a>
                <a
                    className="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-title="E-mail"
                    href="mailto:jyoung_9154@naver.com"
                >
                    <MailIcon
                        className="social-link-icon"
                        viewBox="0 0 512 512"
                        aria-label="E-mail"
                    />
                </a>
                <a
                    className="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-title="KakaoTalk"
                    href="http://qr.kakao.com/talk/Ce5_pAdT76JbejDu0v0.bv4XQJA-"
                >
                    <WhatsAppIcon
                        className="social-link-icon"
                        viewBox="0 0 308 308"
                        aria-label="WhatsApp"
                    />
                </a>

                <a
                    className="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-title="이력서"
                    href="/assets/resume.pdf"
                >
                    <ResumeIcon
                        className="social-link-icon"
                        viewBox="0 0 512 512"
                        aria-label="이력서"
                    />
                </a>
            </div>
        </footer>
    );
}
