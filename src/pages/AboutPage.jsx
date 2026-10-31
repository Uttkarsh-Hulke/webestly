import { 
  ShieldCheck, 
  Smartphone, 
  ArrowRight,
  Handshake,
  KeyRound,
  Eye,
  Check,
  X,
  Zap
} from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';
import Breadcrumbs from '../components/common/Breadcrumbs';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import WebEstlyLogo from '../components/branding/WebEstlyLogo';
import ScrollReveal from '../components/common/ScrollReveal';
import { siteConfig } from '../config/siteConfig';
import { getBreadcrumbSchema } from '../config/schemaData';

export default function AboutPage() {
  usePageMeta(
    "About Uttkarsh Hulke & WebEstly | MERN Stack Developer & Automation",
    "Meet Uttkarsh Hulke, founder of WebEstly. B.E. Artificial Intelligence & Data Science student and freelance MERN stack developer, AI integration & business automation specialist.",
    {
      path: "/about",
      schema: getBreadcrumbSchema([{ label: "About", path: "/about" }])
    }
  );

  const coreValues = [
    {
      icon: Handshake,
      title: "Direct Founder Collaboration",
      description:
        "When you work with WebEstly, you work directly with Uttkarsh Hulke. No account managers, no junior handoffs, and no miscommunication.",
    },
    {
      icon: Eye,
      title: "Transparent Scope & Fixed Quotes",
      description:
        "Before writing code, we define an itemized scope of pages, features, and revision rounds. What we agree on is what is delivered — no hidden fees or surprise retainers.",
    },
    {
      icon: Smartphone,
      title: "Mobile-First Quality",
      description:
        "Over 80% of local searches happen on mobile devices. Every layout is engineered to load in under 2 seconds on cellular networks and navigate smoothly on phones.",
    },
    {
      icon: KeyRound,
      title: "100% Client Code Ownership",
      description:
        "When your website is launched and paid for, you receive complete ownership of all source code files, graphic assets, and domain DNS settings. You are never locked into proprietary platforms.",
    },
    {
      icon: ShieldCheck,
      title: "Honest Representation",
      description:
        "I do not manufacture fake team photos or pretend concept work is commissioned client projects. Design quality and clean code speak for themselves.",
    },
    {
      icon: Zap,
      title: "Real Business Value",
      description:
        "Understanding practical business realities — from customer acquisition to workflow automation — ensures web solutions designed for actual operational growth.",
    },
  ];

  const whatYouGet = [
    "Clean, semantic HTML5, CSS3, and modern React frontend code",
    "100% responsive layouts tested across mobile, tablet, and desktop",
    "On-page SEO fundamentals (title tags, meta descriptions, Open Graph, sitemap.xml)",
    "Custom inquiry forms with validation and WhatsApp direct chat buttons",
    "Deployment to high-speed cloud hosting (Vercel, Netlify, Cloudflare)",
    "Complete source code repository handover with documentation"
  ];

  const whatYouOwn = [
    "100% ownership of your custom source code files",
    "All graphic assets, vector badges, and visual layouts produced for your site",
    "Direct ownership of your domain name (.com, .in) in your own registrar account",
    "Direct ownership of your web hosting account and DNS configurations",
    "Complete freedom to modify, host anywhere, or hire any developer in the future"
  ];

  const whatIsNotIncluded = [
    "Third-party recurring subscription fees (domain registration, paid hosting tiers, paid API usage)",
    "Compulsory monthly maintenance contracts (all post-launch updates are on-demand)",
    "Unplanned scope additions outside the signed quotation (available via clear add-on estimates)"
  ];

  return (
    <div className="py-12 lg:py-16 bg-white">
      <div className="max-w-[var(--layout-max-width)] mx-auto px-4 sm:px-6">
        <Breadcrumbs items={[{ label: "About" }]} />

        {/* Hero Banner */}
        <ScrollReveal className="max-w-3xl mb-12">
          <p className="text-xs font-heading font-bold uppercase tracking-wider text-[var(--color-brand-dark-orange)] mb-2">
            About the Founder
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-[50px] font-heading font-extrabold tracking-tight text-[var(--color-brand-navy)] leading-tight">
            Websites Built for Practical Results, Not Agency Fluff.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[var(--color-brand-slate)] leading-relaxed font-normal">
            {siteConfig.founder.bio}
          </p>
        </ScrollReveal>

        {/* Narrative Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
          <ScrollReveal className="space-y-4 text-base leading-relaxed text-[var(--color-brand-slate)]">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-[var(--color-brand-navy)]">
              Freelance Web Development &amp; Automation
            </h2>
            <p>
              I started WebEstly on a simple observation: many businesses either settle for broken, outdated websites or face bloated agency retainers with unpredictable timelines and confusing jargon.
            </p>
            <p>
              I believe a website should be clean, fast, mobile-friendly, and cost-effective. Whether you run a neighborhood business, an educational institute, an architecture studio, or a specialized consultancy, your website should work for your business every single day.
            </p>
            <p>
              I do not inflate credentials with fake team sizes or corporate buzzwords. As a founder-led freelance practice, I take pride in hands-on craftsmanship, direct communication, and delivering clean code that clients genuinely own.
            </p>
          </ScrollReveal>

          {/* Visual Brand Identity Card */}
          <ScrollReveal delayMs={150} className="rounded-[var(--radius-lg)] bg-[var(--color-surface)] border border-[var(--color-border)] p-6 sm:p-8 flex flex-col items-center justify-center relative overflow-hidden shadow-[var(--shadow-sm)]">
            <div className="relative z-10 w-full">
              <div className="flex justify-center">
                <WebEstlyLogo size="lg" />
              </div>

              <div className="mt-6 pt-6 border-t border-[var(--color-border)] text-left space-y-3">
                <div className="flex items-center justify-between text-xs py-1 border-b border-[var(--color-border)]">
                  <span className="text-[var(--color-brand-slate)] font-mono uppercase">Founder</span>
                  <span className="font-semibold text-[var(--color-brand-navy)]">Uttkarsh Hulke</span>
                </div>
                <div className="flex items-center justify-between text-xs py-1 border-b border-[var(--color-border)]">
                  <span className="text-[var(--color-brand-slate)] font-mono uppercase">Role</span>
                  <span className="font-semibold text-[var(--color-brand-navy)]">MERN Stack &amp; Automation</span>
                </div>
                <div className="flex items-center justify-between text-xs py-1 border-b border-[var(--color-border)]">
                  <span className="text-[var(--color-brand-slate)] font-mono uppercase">Background</span>
                  <span className="font-semibold text-[var(--color-brand-navy)]">B.E. AI &amp; Data Science</span>
                </div>
                <div className="flex items-center justify-between text-xs py-1">
                  <span className="text-[var(--color-brand-slate)] font-mono uppercase">Starting Rates</span>
                  <span className="font-semibold text-[var(--color-brand-dark-orange)]">₹7,999 (Transparent Scope)</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Working Principles Section */}
        <ScrollReveal className="mb-16 bg-[var(--color-surface)] rounded-[var(--radius-lg)] border border-[var(--color-border)] p-6 sm:p-8 shadow-[var(--shadow-sm)]">
          <div className="max-w-3xl mb-8">
            <p className="text-xs font-heading font-bold uppercase tracking-wider text-[var(--color-brand-dark-orange)] mb-2">
              Working Principles
            </p>
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-[var(--color-brand-navy)]">
              How I Work &amp; What You Own
            </h2>
            <p className="mt-2 text-sm text-[var(--color-brand-slate)] leading-relaxed">
              I operate with complete transparency. Here is exactly what is delivered, what belongs to you, and what is excluded.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Column 1: What You Get */}
            <div className="p-6 rounded-[var(--radius-lg)] bg-white border border-[var(--color-border)] flex flex-col justify-between shadow-xs">
              <div>
                <h3 className="font-heading font-bold text-base text-[var(--color-brand-navy)] mb-3 flex items-center gap-2">
                  <Check className="w-5 h-5 text-emerald-600" aria-hidden="true" />
                  What You Get
                </h3>
                <ul className="space-y-2 text-xs text-[var(--color-brand-navy)]">
                  {whatYouGet.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1 shrink-0" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Column 2: What You Own */}
            <div className="p-6 rounded-[var(--radius-lg)] bg-white border border-[var(--color-border)] flex flex-col justify-between shadow-xs">
              <div>
                <h3 className="font-heading font-bold text-base text-[var(--color-brand-navy)] mb-3 flex items-center gap-2">
                  <KeyRound className="w-5 h-5 text-[var(--color-brand-orange)]" aria-hidden="true" />
                  What You Own (100%)
                </h3>
                <ul className="space-y-2 text-xs text-[var(--color-brand-navy)]">
                  {whatYouOwn.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-orange)] mt-1 shrink-0" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Column 3: What Is Not Included */}
            <div className="p-6 rounded-[var(--radius-lg)] bg-white border border-[var(--color-border)] flex flex-col justify-between shadow-xs">
              <div>
                <h3 className="font-heading font-bold text-base text-[var(--color-brand-slate)] mb-3 flex items-center gap-2">
                  <X className="w-5 h-5 text-[var(--color-brand-slate)]" aria-hidden="true" />
                  What Is Excluded
                </h3>
                <ul className="space-y-2 text-xs text-[var(--color-brand-slate)]">
                  {whatIsNotIncluded.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-slate)] mt-1 shrink-0" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Values Grid */}
        <div className="mb-16">
          <ScrollReveal>
            <SectionHeading
              badge="Values & Standards"
              badgeVariant="orange"
              title="My Commitments on Every Project"
              subtitle="The practical standards I uphold for every client website and digital solution."
              centered={true}
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {coreValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <ScrollReveal
                  key={idx}
                  delayMs={idx * 80}
                  className="rounded-[var(--radius-lg)] bg-[var(--color-surface)] border border-[var(--color-border)] p-6 shadow-[var(--shadow-sm)] flex flex-col justify-between hover:border-[var(--color-brand-orange)] transition-colors duration-150"
                >
                  <div>
                    <div className="w-12 h-12 rounded-[var(--radius-md)] bg-white text-[var(--color-brand-orange)] border border-[var(--color-border)] flex items-center justify-center mb-4 shadow-xs">
                      <Icon className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <h3 className="font-heading font-bold text-lg text-[var(--color-brand-navy)] mb-2">
                      {val.title}
                    </h3>
                    <p className="text-sm text-[var(--color-brand-slate)] leading-relaxed font-normal">
                      {val.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <ScrollReveal className="p-6 sm:p-8 rounded-[var(--radius-lg)] bg-[var(--color-brand-navy)] text-white max-w-3xl mx-auto shadow-md">
          <h2 className="text-2xl font-heading font-extrabold text-white">
            Ready to Build a Website That Works?
          </h2>
          <p className="mt-2 text-sm text-slate-300 max-w-xl leading-relaxed font-normal">
            Let&apos;s discuss what your business does and what you need your website to achieve.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Button to="/contact" variant="primary" size="md" icon={ArrowRight}>
              Discuss Your Project
            </Button>
            <Button to="/services" variant="secondary" className="bg-transparent text-white border-white/25 hover:bg-white/10 shadow-none" size="md">
              View All Packages
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
