const fs = require('fs');
const path = require('path');

// Read environment or fallback
const siteUrl = (process.env.VITE_SITE_URL || "https://webestly.com").trim().replace(/\/$/, "");
const distDir = path.resolve(process.cwd(), 'dist');

if (!fs.existsSync(distDir)) {
  console.error('dist directory does not exist. Run vite build first.');
  process.exit(1);
}

const templatePath = path.join(distDir, 'index.html');
const templateHtml = fs.readFileSync(templatePath, 'utf-8');

// Route configurations
const routes = [
  {
    path: '/',
    outPath: path.join(distDir, 'index.html'),
    title: 'WebEstly by Uttkarsh Hulke | MERN Stack, AI Integration & Automation',
    description: 'WebEstly by Uttkarsh Hulke - MERN Stack Developer | AI Integration & Automation. I build modern websites, web applications and AI-powered automation solutions for businesses.',
    heading: 'Hi, I\'m Uttkarsh Hulke.',
    subheading: 'MERN Stack Developer | AI Integration & Automation. I build modern websites, web applications and AI-powered automation solutions for businesses.',
    changefreq: 'weekly',
    priority: '1.0',
    noIndex: false,
    schema: {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "WebEstly by Uttkarsh Hulke",
      "url": siteUrl,
      "logo": `${siteUrl}/webestly_logo.svg`,
      "image": `${siteUrl}/og-image.png`,
      "description": "WebEstly by Uttkarsh Hulke - MERN Stack Developer | AI Integration & Automation.",
      "priceRange": "₹7,999 - ₹24,999+",
      "areaServed": [
        { "@type": "Country", "name": "India" }
      ]
    }
  },
  {
    path: '/services',
    outPath: path.join(distDir, 'services', 'index.html'),
    title: 'Services & Pricing | WebEstly by Uttkarsh Hulke',
    description: 'Professional web development, AI integration, and workflow automation services by Uttkarsh Hulke. Transparent starting rates and direct founder collaboration.',
    heading: 'Web Development & AI Automation',
    subheading: 'Direct developer collaboration with transparent starting rates, clean code ownership, and practical solutions engineered for your business operations.',
    changefreq: 'weekly',
    priority: '0.9',
    noIndex: false
  },
  {
    path: '/portfolio',
    outPath: path.join(distDir, 'portfolio', 'index.html'),
    title: 'My Work | WebEstly by Uttkarsh Hulke',
    description: 'Portfolio and web development projects by Uttkarsh Hulke. Accepting new client projects for business websites, landing pages, and web applications.',
    heading: 'Client Projects in Development',
    subheading: 'I do not showcase fictional client work or fabricated testimonials. Genuine client websites and case studies will be published here upon delivery.',
    changefreq: 'weekly',
    priority: '0.8',
    noIndex: false
  },
  {
    path: '/portfolio/daily-roast',
    outPath: path.join(distDir, 'portfolio', 'daily-roast', 'index.html'),
    title: 'Daily Roast Cafe & Roastery Concept | WebEstly',
    description: 'Daily Roast Cafe & Roastery concept case study. Mobile-first digital menu and reservation flow designed for specialty hospitality venues.',
    heading: 'Daily Roast Cafe & Roastery',
    subheading: 'Concept website case study featuring mobile digital menus, bean origins, and table reservations for specialty cafes.',
    changefreq: 'monthly',
    priority: '0.7',
    noIndex: false
  },
  {
    path: '/portfolio/summit-learning',
    outPath: path.join(distDir, 'portfolio', 'summit-learning', 'index.html'),
    title: 'Summit Learning Institute Concept | WebEstly',
    description: 'Summit Learning Institute concept case study. Academic syllabus roadmap, test series visualizer, and admission counselor lead workflows for academic coaching academies.',
    heading: 'Summit Learning Institute',
    subheading: 'Concept website case study featuring batch roadmaps, interactive syllabus downloads, and parent inquiry workflows.',
    changefreq: 'monthly',
    priority: '0.7',
    noIndex: false
  },
  {
    path: '/portfolio/forma-interiors',
    outPath: path.join(distDir, 'portfolio', 'forma-interiors', 'index.html'),
    title: 'Forma Interior Architecture Concept | WebEstly',
    description: 'Forma Interior Architecture concept case study. High-resolution spatial portfolio, architectural drafting wireframes, and design brief forms.',
    heading: 'Forma Interior Architecture',
    subheading: 'Concept website case study featuring spatial floor plan wireframes, materiality swatches, and residential project showcases.',
    changefreq: 'monthly',
    priority: '0.7',
    noIndex: false
  },
  {
    path: '/pricing',
    outPath: path.join(distDir, 'pricing', 'index.html'),
    title: 'Website Packages & Pricing | WebEstly by Uttkarsh Hulke',
    description: 'Clear, transparent starting website development packages in INR (₹) by Uttkarsh Hulke. Starting from ₹7,999 with 100% code ownership.',
    heading: 'Clear Website Packages for Growing Businesses',
    subheading: 'Every package includes complete source code ownership, mobile responsiveness, fast cellular speeds, and zero mandatory monthly hosting lock-ins.',
    changefreq: 'weekly',
    priority: '0.9',
    noIndex: false
  },
  {
    path: '/about',
    outPath: path.join(distDir, 'about', 'index.html'),
    title: 'About Uttkarsh Hulke & WebEstly | MERN Stack Developer & Automation',
    description: 'Meet Uttkarsh Hulke, founder of WebEstly. B.E. Artificial Intelligence & Data Science student and freelance MERN stack developer, AI integration & business automation specialist.',
    heading: 'Websites Built for Practical Results, Not Agency Fluff',
    subheading: 'An independent website studio helping businesses build an authentic, mobile-first online presence.',
    changefreq: 'monthly',
    priority: '0.7',
    noIndex: false
  },
  {
    path: '/contact',
    outPath: path.join(distDir, 'contact', 'index.html'),
    title: 'Contact & Project Inquiry | WebEstly by Uttkarsh Hulke',
    description: 'Get in touch with Uttkarsh Hulke for an honest project quotation. Direct developer communication, itemized scope breakdown, and fast turnarounds.',
    heading: 'Let\'s Talk About Your Project.',
    subheading: 'Tell me what you need. I\'ll review your requirements and get back to you.',
    changefreq: 'monthly',
    priority: '0.9',
    noIndex: false
  },
  {
    path: '/privacy',
    outPath: path.join(distDir, 'privacy', 'index.html'),
    title: 'Privacy Policy | WebEstly',
    description: 'Privacy Policy for WebEstly. Clear, transparent explanation of how project inquiries and client contact details are handled.',
    heading: 'Privacy Policy',
    subheading: 'Information handling practices and data protection commitments for WebEstly client inquiries.',
    changefreq: 'yearly',
    priority: '0.3',
    noIndex: false
  },
  {
    path: '/terms',
    outPath: path.join(distDir, 'terms', 'index.html'),
    title: 'Terms of Service | WebEstly',
    description: 'Terms of Service and project engagement terms for WebEstly. Transparent scope guidelines, client ownership, and milestones.',
    heading: 'Terms of Service',
    subheading: 'Project engagement guidelines, code ownership terms, and transparent milestone standards.',
    changefreq: 'yearly',
    priority: '0.3',
    noIndex: false
  },
  {
    path: '/404',
    outPath: path.join(distDir, '404.html'),
    title: 'Page Not Found (404) | WebEstly',
    description: 'The requested page could not be found on WebEstly. Return to our homepage or explore our services and pricing packages.',
    heading: 'Page Not Found (404)',
    subheading: 'The link you followed may be outdated or the URL might have been typed incorrectly.',
    changefreq: 'never',
    priority: '0.0',
    noIndex: true
  }
];

console.log(`Starting build-time prerendering for ${routes.length} routes...`);

for (const route of routes) {
  const canonicalUrl = `${siteUrl}${route.path === '/' ? '' : route.path}`;

  let html = templateHtml;

  // Replace Title
  html = html.replace(/<title>.*?<\/title>/i, `<title>${route.title}</title>`);

  // Replace Meta Description
  html = html.replace(
    /<meta\s+name="description"\s+content=".*?"\s*\/?>/i,
    `<meta name="description" content="${route.description}" />`
  );

  // Replace Open Graph Tags
  html = html.replace(
    /<meta\s+property="og:title"\s+content=".*?"\s*\/?>/i,
    `<meta property="og:title" content="${route.title}" />`
  );
  html = html.replace(
    /<meta\s+property="og:description"\s+content=".*?"\s*\/?>/i,
    `<meta property="og:description" content="${route.description}" />`
  );

  // Ensure Canonical link
  if (html.includes('rel="canonical"')) {
    html = html.replace(/<link\s+rel="canonical"\s+href=".*?"\s*\/?>/i, `<link rel="canonical" href="${canonicalUrl}" />`);
  } else {
    html = html.replace('</head>', `    <link rel="canonical" href="${canonicalUrl}" />\n  </head>`);
  }

  // Ensure Robots meta
  const robotsTag = route.noIndex 
    ? '<meta name="robots" content="noindex, nofollow" />' 
    : '<meta name="robots" content="index, follow, max-image-preview:large" />';

  if (html.includes('name="robots"')) {
    html = html.replace(/<meta\s+name="robots"\s+content=".*?"\s*\/?>/i, robotsTag);
  } else {
    html = html.replace('</head>', `    ${robotsTag}\n  </head>`);
  }

  // Inject JSON-LD Schema if provided
  if (route.schema) {
    const jsonLdTag = `    <script type="application/ld+json">\n${JSON.stringify(route.schema, null, 2)}\n    </script>\n  </head>`;
    html = html.replace('</head>', jsonLdTag);
  }

  // Inject initial semantic HTML into <div id="root"></div> for crawlers
  const semanticContent = `
    <header class="py-4 border-b border-[var(--color-border)] bg-[var(--color-bg)]">
      <div class="max-w-[1200px] mx-auto px-4 sm:px-6 flex items-center justify-between">
        <a href="/" aria-label="WebEstly Home"><img src="/webestly_logo_transparent.svg" alt="WebEstly" width="1200" height="420" style="height:36px;width:auto;" /></a>
        <nav class="flex items-center gap-4">
          <a href="/services" class="text-sm font-medium text-[var(--color-text)]">Services</a>
          <a href="/portfolio" class="text-sm font-medium text-[var(--color-text)]">My Work</a>
          <a href="/contact" class="text-sm font-medium text-[var(--color-text)]">Contact</a>
        </nav>
      </div>
    </header>
    <main id="main" class="py-10 lg:py-16">
      <div class="max-w-[1200px] mx-auto px-4 sm:px-6">
        <h1 class="text-3xl font-semibold text-[var(--color-text)] mb-4">${route.heading}</h1>
        <p class="text-base text-[var(--color-muted)] leading-relaxed mb-8 max-w-2xl">${route.subheading}</p>
        <div class="pt-4">
          <a href="/contact" class="inline-block px-4 py-2 rounded-[var(--radius-md)] bg-[var(--color-brand-orange)] text-[var(--color-brand-navy)] text-sm font-medium font-bold">Contact Me</a>
        </div>
      </div>
    </main>
    <footer class="py-12 bg-[var(--color-brand-navy)] text-slate-400 text-xs border-t border-slate-800">
      <div class="max-w-[1200px] mx-auto px-4 sm:px-6">
        <p>&copy; ${new Date().getFullYear()} WebEstly by Uttkarsh Hulke. Websites That Work for Your Business.</p>
      </div>
    </footer>
  `.trim();

  html = html.replace('<div id="root"></div>', `<div id="root">${semanticContent}</div>`);

  // Ensure output directory exists
  const parentDir = path.dirname(route.outPath);
  if (!fs.existsSync(parentDir)) {
    fs.mkdirSync(parentDir, { recursive: true });
  }

  fs.writeFileSync(route.outPath, html, 'utf-8');
  console.log(`✓ Prerendered: ${route.path} -> ${path.relative(distDir, route.outPath)}`);
}

// Generate dynamic sitemap.xml using VITE_SITE_URL
const indexableRoutes = routes.filter(r => !r.noIndex);
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${indexableRoutes.map(r => `  <url>
    <loc>${siteUrl}${r.path === '/' ? '/' : r.path}</loc>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`).join('\n')}
</urlset>
`;

fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemapXml.trim(), 'utf-8');
console.log(`✓ Generated sitemap.xml with ${indexableRoutes.length} indexable routes.`);

// Generate dynamic robots.txt using VITE_SITE_URL
const robotsTxt = `# WebEstly - Websites That Work for Your Business
User-agent: *
Allow: /
Disallow: /404

Sitemap: ${siteUrl}/sitemap.xml
`;

fs.writeFileSync(path.join(distDir, 'robots.txt'), robotsTxt.trim(), 'utf-8');
console.log(`✓ Generated robots.txt referencing ${siteUrl}/sitemap.xml.`);
console.log('Build-time prerendering complete.');
