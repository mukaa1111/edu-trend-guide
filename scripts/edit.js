// 자료 파일(data/items.js)을 통째로 읽지 않고 한 건씩 고치는 도구.
// 자료가 한 줄에 한 건씩 들어 있다는 점을 이용해 그 줄만 바꿉니다 (묶음 주석은 그대로 남음).
//
//   node scripts/edit.js get <id>            → 그 항목을 JSON으로 출력
//   node scripts/edit.js find <단어> [단어…]  → 제목·요약에 단어가 모두 들어간 항목을 "id | 마감 | 제목"으로 출력
//   node scripts/edit.js upsert <파일.json>   → 파일 안의 항목(1건 또는 배열)을 추가하거나, 같은 id가 있으면 바꿈
//   node scripts/edit.js set <id> <파일.json> → 그 항목의 일부 필드만 바꿈 (값이 null이면 그 필드를 지움)
//   node scripts/edit.js delete <id> [id…]   → 삭제
//   node scripts/edit.js touch <YYYY-MM-DD>  → 맨 위 '마지막 갱신' 날짜를 바꿈
// 고친 뒤에는 꼭 `node scripts/check.js` 로 검사하세요.
const fs = require('fs'), vm = require('vm'), path = require('path');
const FILE = path.join(__dirname, '..', 'data', 'items.js');
const ORDER = ['id', 'name', 'title', 'summary', 'region', 'grades', 'season', 'timing', 'subject', 'type', 'url', 'source', 'collected', 'trust', 'deadline', 'note'];
const fmt = (x) => '  { ' + ORDER.filter((k) => x[k] !== undefined && x[k] !== null)
  .concat(Object.keys(x).filter((k) => !ORDER.includes(k) && x[k] !== null && x[k] !== undefined))
  .map((k) => k + ': ' + JSON.stringify(x[k])).join(', ') + ' }';

let lines = fs.readFileSync(FILE, 'utf8').split(/\r?\n/);
const load = () => { const w = {}; vm.runInNewContext(lines.join('\n'), { window: w }); return w.ITEMS; };
const lineOf = (id) => lines.findIndex((l) => l.trimStart().startsWith('{ id: ' + JSON.stringify(id) + ','));
const save = () => { load(); fs.writeFileSync(FILE, lines.join('\n')); };   // load()가 실패하면 저장하지 않음
const endIdx = () => { for (let i = lines.length - 1; i >= 0; i--) if (lines[i].trim() === '];') return i; throw new Error('끝 표시(];)를 찾지 못함'); };
const lastItemIdx = () => { for (let i = endIdx() - 1; i >= 0; i--) if (lines[i].trimStart().startsWith('{ id:')) return i; return -1; };
const setComma = (i, on) => { lines[i] = lines[i].replace(/,?\s*$/, on ? ',' : ''); };

const [cmd, ...args] = process.argv.slice(2);
if (cmd === 'get') {
  const it = load().find((x) => x.id === args[0]);
  if (!it) { console.error('없는 id: ' + args[0]); process.exit(1); }
  console.log(JSON.stringify(it, null, 2));
} else if (cmd === 'find') {
  const words = args.map((a) => a.toLowerCase());
  load().filter((x) => { const hay = (x.id + ' ' + x.title + ' ' + x.summary + ' ' + (x.note || '')).toLowerCase(); return words.every((w) => hay.includes(w)); })
    .forEach((x) => console.log(`${x.id} | ${x.deadline || '-'} | ${x.title}`));
} else if (cmd === 'upsert') {
  let list = JSON.parse(fs.readFileSync(args[0], 'utf8')); if (!Array.isArray(list)) list = [list];
  let added = 0, changed = 0;
  list.forEach((x) => {
    if (!x.id) throw new Error('id 없는 항목');
    const i = lineOf(x.id);
    if (i >= 0) { const comma = /,\s*$/.test(lines[i]); lines[i] = fmt(x) + (comma ? ',' : ''); changed++; }
    else { const li = lastItemIdx(); if (li >= 0) setComma(li, true); lines.splice(endIdx(), 0, fmt(x)); added++; }
  });
  // 마지막 항목 뒤 빈 줄 정리: 끝 표시 바로 앞에 빈 줄 하나
  save(); console.log(`추가 ${added}, 갱신 ${changed}`);
} else if (cmd === 'set') {
  const i = lineOf(args[0]); if (i < 0) { console.error('없는 id: ' + args[0]); process.exit(1); }
  const cur = load().find((x) => x.id === args[0]);
  const patch = JSON.parse(fs.readFileSync(args[1], 'utf8'));
  const next = Object.assign({}, cur, patch);
  const comma = /,\s*$/.test(lines[i]); lines[i] = fmt(next) + (comma ? ',' : '');
  save(); console.log('갱신 1: ' + args[0]);
} else if (cmd === 'delete') {
  let n = 0;
  args.forEach((id) => { const i = lineOf(id); if (i < 0) { console.error('없는 id(건너뜀): ' + id); return; } lines.splice(i, 1); n++; });
  const li = lastItemIdx(); if (li >= 0) setComma(li, false);
  save(); console.log('삭제 ' + n);
} else if (cmd === 'touch') {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(args[0] || '')) { console.error('날짜 형식: YYYY-MM-DD'); process.exit(1); }
  lines = lines.map((l) => l.startsWith('// 마지막 갱신:') ? '// 마지막 갱신: ' + args[0] + ' (자동 갱신)' : l.startsWith('window.LAST_UPDATED') ? 'window.LAST_UPDATED = "' + args[0] + '";' : l);
  save(); console.log('마지막 갱신 ' + args[0]);
} else {
  console.log('사용법: get <id> | find <단어…> | upsert <파일.json> | set <id> <파일.json> | delete <id…> | touch <날짜>');
}
