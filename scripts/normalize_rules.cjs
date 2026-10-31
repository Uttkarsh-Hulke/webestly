const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) results = results.concat(walk(file));
    else if (/\.(jsx?)$/.test(file)) results.push(file);
  });
  return results;
}

const files = walk('src');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // 1. Button variant darkOutline -> secondary with custom classes
  content = content.replace(/variant=["']darkOutline["']/g, 'variant="secondary" className="bg-transparent text-white border-white/25 hover:bg-white/10 shadow-none"');

  // 2. Spacing scale normalization:
  // Disallowed: 0.5 (2px), 1.5 (6px), 2.5 (10px), 3.5 (14px), 5 (20px)
  content = content.replace(/\bgap-0\.5\b/g, 'gap-1');
  content = content.replace(/\bgap-1\.5\b/g, 'gap-2');
  content = content.replace(/\bgap-2\.5\b/g, 'gap-2');
  content = content.replace(/\bgap-3\.5\b/g, 'gap-3');
  content = content.replace(/\bgap-5\b/g, 'gap-4');

  content = content.replace(/\bpy-0\.5\b/g, 'py-1');
  content = content.replace(/\bpy-1\.5\b/g, 'py-1');
  content = content.replace(/\bpy-2\.5\b/g, 'py-2');
  content = content.replace(/\bpy-3\.5\b/g, 'py-4');
  content = content.replace(/\bpy-5\b/g, 'py-4');

  content = content.replace(/\bpx-0\.5\b/g, 'px-1');
  content = content.replace(/\bpx-1\.5\b/g, 'px-2');
  content = content.replace(/\bpx-2\.5\b/g, 'px-3');
  content = content.replace(/\bpx-3\.5\b/g, 'px-4');
  content = content.replace(/\bpx-5\b/g, 'px-4');

  content = content.replace(/\bp-0\.5\b/g, 'p-1');
  content = content.replace(/\bp-1\.5\b/g, 'p-2');
  content = content.replace(/\bp-2\.5\b/g, 'p-2');
  content = content.replace(/\bp-3\.5\b/g, 'p-3');
  content = content.replace(/\bp-5\b/g, 'p-6');

  content = content.replace(/\bmt-0\.5\b/g, 'mt-1');
  content = content.replace(/\bmt-1\.5\b/g, 'mt-1');
  content = content.replace(/\bmt-2\.5\b/g, 'mt-2');
  content = content.replace(/\bmt-3\.5\b/g, 'mt-3');
  content = content.replace(/\bmt-5\b/g, 'mt-4');
  content = content.replace(/\bscroll-mt-20\b/g, 'scroll-mt-16');

  content = content.replace(/\bmb-0\.5\b/g, 'mb-1');
  content = content.replace(/\bmb-1\.5\b/g, 'mb-1');
  content = content.replace(/\bmb-2\.5\b/g, 'mb-2');
  content = content.replace(/\bmb-3\.5\b/g, 'mb-3');
  content = content.replace(/\bmb-5\b/g, 'mb-4');

  content = content.replace(/\bmy-0\.5\b/g, 'my-1');
  content = content.replace(/\bmy-1\.5\b/g, 'my-2');
  content = content.replace(/\bmy-2\.5\b/g, 'my-2');

  content = content.replace(/\bmx-0\.5\b/g, 'mx-1');
  content = content.replace(/\bmx-1\.5\b/g, 'mx-2');
  content = content.replace(/\bmx-2\.5\b/g, 'mx-2');

  content = content.replace(/\bpt-0\.5\b/g, 'pt-1');
  content = content.replace(/\bpt-1\.5\b/g, 'pt-2');
  content = content.replace(/\bpt-2\.5\b/g, 'pt-2');
  content = content.replace(/\bpt-5\b/g, 'pt-4');

  content = content.replace(/\bpb-0\.5\b/g, 'pb-1');
  content = content.replace(/\bpb-1\.5\b/g, 'pb-2');
  content = content.replace(/\bpb-2\.5\b/g, 'pb-2');
  content = content.replace(/\bpb-5\b/g, 'pb-4');

  content = content.replace(/\bpl-5\b/g, 'pl-6');
  content = content.replace(/\bpr-5\b/g, 'pr-6');

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Cleaned: ${file}`);
  }
});
