// 사이트 첫 화면을 상세 이력서로 둔다.
// CRA 빌드가 만든 build/index.html(React 앱 껍데기)을 resume-v3.html로 덮어쓴다.
// React 소스는 저장소에 그대로 두므로 이 파일만 되돌리면 원래대로 돌아온다.
const fs = require('fs');
const path = require('path');

const build = path.join(__dirname, '..', 'build');
const landing = path.join(build, 'resume-v3.html');
const index = path.join(build, 'index.html');

if (!fs.existsSync(landing)) {
    console.error('set-landing: build/resume-v3.html 이 없습니다. public/ 에 있는지 확인하세요.');
    process.exit(1);
}
fs.copyFileSync(landing, index);
console.log('set-landing: build/index.html <- resume-v3.html');
