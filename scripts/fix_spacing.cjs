const fs = require('fs');
const path = require('path');

const targetFiles = [
  'src/components/contact/ContactForm.jsx',
  'src/components/home/HeroPreviewComposition.jsx',
  'src/components/home/HeroSection.jsx',
  'src/components/home/PricingPreview.jsx',
  'src/components/home/ServicesPreview.jsx',
  'src/components/layout/Footer.jsx',
  'src/components/layout/Header.jsx',
  'src/pages/AboutPage.jsx',
  'src/pages/ContactPage.jsx',
  'src/pages/NotFoundPage.jsx',
  'src/pages/PortfolioPage.jsx',
  'src/pages/PricingPage.jsx',
  'src/pages/PrivacyPolicyPage.jsx',
  'src/pages/ProjectDetailPage.jsx',
  'src/pages/TermsPage.jsx',
];

targetFiles.forEach(relPath => {
  const fullPath = path.resolve(relPath);
  if (!fs.existsSync(fullPath)) return;
  let content = fs.readFileSync(fullPath, 'utf8');

  // Exact safe replacements for non-scale spacing:
  content = content.replace(/\bgap-1\.5\b/g, 'gap-2');
  content = content.replace(/\bgap-2\.5\b/g, 'gap-2');
  content = content.replace(/\bpy-1\.5\b/g, 'py-1');
  content = content.replace(/\bpy-2\.5\b/g, 'py-2');
  content = content.replace(/\bpx-2\.5\b/g, 'px-3');
  content = content.replace(/\bpy-0\.5\b/g, 'py-1');
  content = content.replace(/\bpx-1\.5\b/g, 'px-2');
  content = content.replace(/\bpx-5\b/g, 'px-4');
  content = content.replace(/\bp-5\b/g, 'p-6');
  content = content.replace(/\bp-2\.5\b/g, 'p-2');
  content = content.replace(/\bpl-5\b/g, 'pl-6');
  content = content.replace(/\bmt-0\.5\b/g, 'mt-1');
  content = content.replace(/\bmb-0\.5\b/g, 'mb-1');
  content = content.replace(/\bmt-1\.5\b/g, 'mt-1');

  fs.writeFileSync(fullPath, content, 'utf8');
  console.log(`Normalized spacing in ${relPath}`);
});
