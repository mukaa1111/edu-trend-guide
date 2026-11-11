// 자료 파일 검사 + 알림에 쓸 요약 출력.
// 사용법:  node scripts/check.js          → 형식 검사 (문제 없으면 "ok 건수")
//          node scripts/check.js due 14   → 오늘부터 14일 안에 마감되는 것 목록
//          node scripts/check.js stale 180 → 수집한 지 180일 넘은 것 목록
const fs = require('fs'), vm = require('vm'), path = require('path');
const root = path.join(__dirname, '..');
const w = {};
vm.runInNewContext(fs.readFileSync(path.join(root, 'data/items.js'), 'utf8'), { window: w });
vm.runInNewContext(fs.readFileSync(path.join(root, 'data/guides.js'), 'utf8'), { window: w });
const items = w.ITEMS, D = /^\d{4}-\d{2}-\d{2}$/;
const ALLOW = {
  region: ['둔산', '대치', '목동', '과천', '잠실', '공통'],
  type: ['대회', '학원', '학습지', '경험', '로드맵', '트렌드'],
  season: ['봄학기', '여름방학', '가을학기', '겨울방학', '연중'],
  subject: ['수학', '영어', '국어', '과학', '사회', '예체능', '공통'],
  trust: ['높음', '보통', '확인 필요'],
};
const errs = [], ids = new Set();
items.forEach((x) => {
  if (!x.id || ids.has(x.id)) errs.push('id 중복/없음: ' + x.id);
  ids.add(x.id);
  if (!x.title || !x.summary) errs.push('제목/요약 없음: ' + x.id);
  Object.keys(ALLOW).forEach((k) => { if (!ALLOW[k].includes(x[k])) errs.push(k + ' 값 이상: ' + x.id + ' = ' + x[k]); });
  if (!Array.isArray(x.grades) || !x.grades.length) errs.push('grades 이상: ' + x.id);
  if (!D.test(x.collected || '')) errs.push('collected 이상: ' + x.id);
  if (x.deadline && !D.test(x.deadline)) errs.push('deadline 이상: ' + x.id);
  if (x.url && !/^https?:\/\//.test(x.url)) errs.push('url 이상: ' + x.id);
});
if (!w.GUIDES || !Array.isArray(w.MILESTONES)) errs.push('guides.js 이상');
if (errs.length) { console.error(errs.join('\n')); process.exit(1); }

// 한국 시간 기준 오늘
const today = new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Seoul' })); today.setHours(0, 0, 0, 0);
const days = (s) => { const p = s.split('-'); return Math.round((new Date(+p[0], +p[1] - 1, +p[2]) - today) / 86400000); };
const [cmd, nArg] = process.argv.slice(2), n = parseInt(nArg || '14', 10);
if (cmd === 'due') {
  items.filter((x) => x.deadline && days(x.deadline) >= 0 && days(x.deadline) <= n)
    .sort((a, b) => days(a.deadline) - days(b.deadline))
    .forEach((x) => console.log(`D-${days(x.deadline)}\t${x.deadline}\t${x.region}\t${x.title}`));
} else if (cmd === 'stale') {
  items.filter((x) => -days(x.collected) > n).forEach((x) => console.log(`${x.collected}\t${x.id}\t${x.title}`));
} else if (cmd === 'past') {
  items.filter((x) => x.deadline && days(x.deadline) < 0).forEach((x) => console.log(`${x.deadline}\t${x.id}\t${x.title}`));
} else {
  console.log('ok', items.length);
}
