# jyoung9154.github.io

박재영(Park JaeYoung) 개인 이력서·포트폴리오 사이트. React(CRA) 기반 SPA, 다크 테마, GitHub Pages 배포.

**Live**: https://jyoung9154.github.io

## 페이지

| 경로 | 내용 |
| --- | --- |
| `/` | 홈 (프로필 히어로) |
| `/about` | 소개 · 기술 스택 · 자격증 · 경력 여정 |
| `/timeline` | 학력 · 경력 타임라인 |
| `/career` | 경력기술서 · 프로젝트 상세 · GitHub 프로젝트 |

## 스택

React 17 · react-router-dom v5 · Tailwind CSS v3 + SCSS(CSS 변수 테마) · GitHub API(프로젝트 섹션)

## 개발

```bash
npm install
npm start        # http://localhost:3000
npm run build    # 프로덕션 빌드 → build/
npm run lint     # ESLint
```

## 배포

`develop` 브랜치에 push하면 GitHub Actions(`.github/workflows/deploy.yml`)가 빌드 후 `gh-pages` 브랜치로 배포한다. 수동 배포는 `npm run deploy`.
