import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  ArrowRight, 
  Coffee, 
  GraduationCap, 
  Compass, 
  Clock, 
  CheckCircle2, 
  Calendar, 
  Users, 
  Layers, 
  ShieldAlert, 
  Send 
} from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';
import Breadcrumbs from '../components/common/Breadcrumbs';
import Badge from '../components/common/Badge';
import Button from '../components/common/Button';
import { portfolioData } from '../config/portfolioData';
import { getBreadcrumbSchema } from '../config/schemaData';

export default function ProjectDetailPage() {
  const { slug } = useParams();

  const projectIndex = portfolioData.findIndex((p) => p.slug === slug);
  const project = portfolioData[projectIndex];

  // If project not found, redirect to portfolio
  if (!project) {
    return <Navigate to="/portfolio" replace />;
  }

  // Calculate next and prev project links
  const prevProject = portfolioData[(projectIndex - 1 + portfolioData.length) % portfolioData.length];
  const nextProject = portfolioData[(projectIndex + 1) % portfolioData.length];

  usePageMeta(
    `${project.title} - Concept Case Study`,
    `${project.title} - ${project.tagline} Original website design concept by WebEstly.`,
    { 
      path: `/portfolio/${slug}`,
      schema: getBreadcrumbSchema([
        { label: "Portfolio", path: "/portfolio" },
        { label: project.title, path: `/portfolio/${slug}` }
      ])
    }
  );

  const getProjectIcon = (id) => {
    switch (id) {
      case 'daily-roast':
        return Coffee;
      case 'summit-learning':
        return GraduationCap;
      case 'forma-interiors':
        return Compass;
      default:
        return Layers;
    }
  };

  const Icon = getProjectIcon(project.id);

  return (
    <div className="py-10 lg:py-16">
      <div className="max-w-[var(--layout-max-width)] mx-auto px-4 sm:px-6">
        <Breadcrumbs
          items={[
            { label: "Portfolio", to: "/portfolio" },
            { label: project.title },
          ]}
        />

        {/* Top Header Banner */}
        <div className="relative rounded-[var(--radius-lg)] overflow-hidden mb-12 border border-[var(--color-border)] bg-[var(--color-text)] text-white p-6 sm:p-10 lg:p-12">
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="w-10 h-10 rounded-[var(--radius-md)] bg-white/10 flex items-center justify-center text-white">
                <Icon className="w-5 h-5 text-white" />
              </span>
              <Badge variant="orange" size="sm">
                Concept Demonstration Project
              </Badge>
              <span className="text-xs font-mono uppercase tracking-wider text-[var(--color-brand-gold)] font-medium">
                {project.category}
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-semibold tracking-tight text-white leading-tight">
              {project.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              {project.heroHighlight}
            </p>
          </div>
        </div>

        {/* Transparency Alert Box */}
        <div className="mb-12 p-4 sm:p-6 rounded-[var(--radius-lg)] bg-[var(--color-surface)] border border-[var(--color-border)] text-sm text-[var(--color-muted)] flex items-start gap-3">
          <ShieldAlert className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-1" />
          <p>
            <strong className="font-semibold text-[var(--color-text)]">Concept Notice:</strong> This project is an original demonstration case study created by WebEstly to showcase design aesthetics, mobile navigation patterns, and user flow. All addresses, menu items, course descriptions, and project names are sample illustrative representations.
          </p>
        </div>

        {/* Main Grid: Overview & Specs */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {/* Main Details (Col 1 & 2) */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <section className="bg-[var(--color-bg)] rounded-[var(--radius-lg)] border border-[var(--color-border)] p-6 shadow-[var(--shadow-sm)]">
              <h2 className="font-semibold text-lg text-[var(--color-text)] mb-3">
                Project Overview
              </h2>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                {project.overview}
              </p>
            </section>

            {/* Intended Audience */}
            <section className="bg-[var(--color-bg)] rounded-[var(--radius-lg)] border border-[var(--color-border)] p-6 shadow-[var(--shadow-sm)]">
              <h2 className="font-semibold text-lg text-[var(--color-text)] mb-3">
                Intended Audience
              </h2>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                {project.intendedAudience}
              </p>
            </section>

            {/* Design Objectives */}
            <section className="bg-[var(--color-bg)] rounded-[var(--radius-lg)] border border-[var(--color-border)] p-6 shadow-[var(--shadow-sm)]">
              <h2 className="font-semibold text-lg text-[var(--color-text)] mb-4">
                Core Design Objectives
              </h2>
              <ul className="space-y-3">
                {project.designObjectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[var(--color-text)]">
                    <CheckCircle2 className="w-4 h-4 text-[var(--color-success)] shrink-0 mt-1" />
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Main Features */}
            <section className="bg-[var(--color-bg)] rounded-[var(--radius-lg)] border border-[var(--color-border)] p-6 shadow-[var(--shadow-sm)]">
              <h2 className="font-semibold text-lg text-[var(--color-text)] mb-4">
                Implemented Features
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.features.map((feat, i) => (
                  <div key={i} className="p-4 rounded-[var(--radius-md)] bg-[var(--color-surface)] border border-[var(--color-border)]">
                    <h3 className="font-semibold text-sm text-[var(--color-text)] mb-1">
                      {feat.name}
                    </h3>
                    <p className="text-xs text-[var(--color-muted)] leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar Specs & Design Tokens (Col 3) */}
          <div className="space-y-6">
            <div className="bg-[var(--color-bg)] rounded-[var(--radius-lg)] border border-[var(--color-border)] p-6 space-y-4 shadow-[var(--shadow-sm)]">
              <h3 className="font-semibold text-base text-[var(--color-text)] pb-3 border-b border-[var(--color-border)]">
                Design System Specs
              </h3>

              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-muted)] block mb-1">
                  Typography Direction
                </span>
                <p className="text-xs font-medium text-[var(--color-text)]">
                  {project.specs.typography}
                </p>
              </div>

              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-muted)] block mb-2">
                  Curated Color Palette
                </span>
                <div className="space-y-2">
                  {project.specs.palette.map((color, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-[var(--color-text)]">
                      <span
                        className="w-4 h-4 rounded-full border border-[var(--color-border)] shrink-0"
                        style={{ backgroundColor: color.split(' ')[0] }}
                      />
                      <span>{color}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-[var(--color-border)]">
                <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-muted)] block mb-1">
                  Deliverable Format
                </span>
                <p className="text-xs font-medium text-[var(--color-text)]">
                  {project.specs.deliverableType}
                </p>
              </div>

              <div className="pt-2">
                <Button
                  to={`/contact?inspiration=${encodeURIComponent(project.title)}`}
                  variant="primary"
                  size="md"
                  className="w-full justify-center text-xs"
                >
                  Request a Site Like This
                </Button>
              </div>
            </div>

            {/* Practical takeaway */}
            <div className="rounded-[var(--radius-lg)] bg-[var(--color-surface)] border border-[var(--color-border)] p-6 space-y-3">
              <h4 className="font-semibold text-sm text-[var(--color-text)]">
                Looking for something similar?
              </h4>
              <p className="text-xs text-[var(--color-muted)] leading-relaxed">
                We can adapt this structural layout, menu system, or portfolio approach to match your business branding and color palette.
              </p>
              <Link
                to="/pricing"
                className="inline-flex items-center gap-2 text-xs text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] font-medium"
              >
                <span>Check starting packages</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Visual Presentation Showcase for each concept */}
        <section className="mb-12">
          <div className="bg-[var(--color-bg)] rounded-[var(--radius-lg)] border border-[var(--color-border)] p-6 sm:p-8 shadow-[var(--shadow-sm)]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[var(--color-border)] mb-8">
              <div>
                <Badge variant="orange" size="sm" className="mb-1">
                  Interactive Showcase
                </Badge>
                <h2 className="font-semibold text-xl text-[var(--color-text)]">
                  Visual Presentation &amp; Sample Interface
                </h2>
              </div>
              <span className="text-xs text-[var(--color-muted)] font-mono">
                Component Preview
              </span>
            </div>

            {/* Concept A: Daily Roast Showcase */}
            {project.id === 'daily-roast' && (
              <div className="space-y-6">
                {/* Visual Header */}
                <div className="bg-[var(--color-surface)] text-[var(--color-text)] p-6 rounded-[var(--radius-md)] border border-[var(--color-border)]">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                      <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] font-mono font-medium">
                        Artisanal Specialty Coffee &bull; Hospitality Concept
                      </div>
                      <h3 className="text-xl sm:text-2xl font-semibold text-[var(--color-text)] mt-1">
                        Daily Roast Cafe &amp; Roastery
                      </h3>
                      <p className="text-xs text-[var(--color-muted)] mt-1">
                        Sample menu representation &bull; Fresh single-origin brews &amp; sourdough bakery
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-xs bg-[var(--color-bg)] px-3 py-1 rounded-[var(--radius-sm)] border border-[var(--color-border)] text-[var(--color-text)]">
                      <Clock className="w-4 h-4 text-[var(--color-primary)]" />
                      <span>Hours: 7:30 AM – 10:30 PM (Daily)</span>
                    </div>
                  </div>

                  {/* Sample Menu Showcase */}
                  <div className="mt-6 pt-6 border-t border-[var(--color-border)]">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text)] mb-4">
                      Featured Menu Items (Interactive Demo):
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {project.sampleMenu.map((m, i) => (
                        <div key={i} className="p-4 rounded-[var(--radius-sm)] bg-[var(--color-bg)] border border-[var(--color-border)] flex justify-between items-start gap-4">
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-semibold text-sm text-[var(--color-text)]">{m.item}</span>
                              <span className="text-[10px] bg-[var(--color-surface)] text-[var(--color-muted)] border border-[var(--color-border)] px-2 py-1 rounded-[var(--radius-sm)]">
                                {m.tag}
                              </span>
                            </div>
                            <p className="text-xs text-[var(--color-muted)] mt-1 leading-relaxed">{m.desc}</p>
                          </div>
                          <span className="font-mono font-medium text-sm text-[var(--color-text)] shrink-0">{m.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Sample Table Reservation Form CTA */}
                  <div className="mt-6 p-4 rounded-[var(--radius-sm)] bg-[var(--color-bg)] border border-[var(--color-border)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-[var(--color-primary)] shrink-0" />
                      <div>
                        <div className="text-xs font-semibold text-[var(--color-text)]">Table Reservation Inquiry Flow</div>
                        <div className="text-xs text-[var(--color-muted)]">Visitors can book tables for weekend brunches without downloading an app.</div>
                      </div>
                    </div>
                    <Button variant="secondary" size="sm" className="shrink-0">
                      Test Booking Flow
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {/* Concept B: Summit Learning Showcase */}
            {project.id === 'summit-learning' && (
              <div className="space-y-6">
                <div className="bg-[var(--color-surface)] text-[var(--color-text)] p-6 rounded-[var(--radius-md)] border border-[var(--color-border)]">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                      <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] font-mono font-medium">
                        Academic Coaching Institute &bull; Education Concept
                      </div>
                      <h3 className="text-xl sm:text-2xl font-semibold text-[var(--color-text)] mt-1">
                        Summit Learning Institute
                      </h3>
                      <p className="text-xs text-[var(--color-muted)] mt-1">
                        Sample course structure &bull; Transparent batch syllabus &amp; admission counseling
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-xs bg-[var(--color-bg)] px-3 py-1 rounded-[var(--radius-sm)] border border-[var(--color-border)] text-[var(--color-text)]">
                      <Users className="w-4 h-4 text-[var(--color-primary)]" />
                      <span>Classroom &amp; Hybrid Batches</span>
                    </div>
                  </div>

                  {/* Courses Table */}
                  <div className="mt-6 pt-6 border-t border-[var(--color-border)]">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text)] mb-4">
                      Academic Programs (Sample Curriculum Grid):
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {project.sampleCourses.map((c, i) => (
                        <div key={i} className="p-4 rounded-[var(--radius-sm)] bg-[var(--color-bg)] border border-[var(--color-border)] flex flex-col justify-between">
                          <div>
                            <span className="text-[10px] font-mono font-medium text-[var(--color-primary)] uppercase">{c.code}</span>
                            <h4 className="font-semibold text-sm text-[var(--color-text)] mt-1">{c.title}</h4>
                            <p className="text-xs text-[var(--color-muted)] mt-2">Duration: {c.duration}</p>
                            <p className="text-xs text-[var(--color-muted)]">Timings: {c.batch}</p>
                          </div>
                          <span className="mt-4 text-[11px] font-medium text-[var(--color-success)] bg-[var(--color-surface)] border border-[var(--color-border)] px-2 py-1 rounded-[var(--radius-sm)] inline-block text-center">
                            {c.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Admission CTA */}
                  <div className="mt-6 p-4 rounded-[var(--radius-sm)] bg-[var(--color-bg)] border border-[var(--color-border)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <div className="text-xs font-semibold text-[var(--color-text)]">Ethical Education Presentation</div>
                      <div className="text-xs text-[var(--color-muted)]">No manufactured rank claims or unverified percentages. Clear pedagogical roadmaps.</div>
                    </div>
                    <Button variant="secondary" size="sm" className="shrink-0">
                      Admission Counseling Flow
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {/* Concept C: Forma Interiors Showcase */}
            {project.id === 'forma-interiors' && (
              <div className="space-y-6">
                <div className="bg-[var(--color-surface)] text-[var(--color-text)] p-6 rounded-[var(--radius-md)] border border-[var(--color-border)]">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                      <div className="text-xs uppercase tracking-wider text-[var(--color-muted)] font-mono font-medium">
                        Spatial Architecture &amp; Interiors &bull; Studio Concept
                      </div>
                      <h3 className="text-xl sm:text-2xl font-semibold text-[var(--color-text)] mt-1">
                        Forma Interior Architecture
                      </h3>
                      <p className="text-xs text-[var(--color-muted)] mt-1">
                        Sample residential &amp; commercial portfolio &bull; Turnkey execution &amp; spatial brief
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-xs bg-[var(--color-bg)] px-3 py-1 rounded-[var(--radius-sm)] border border-[var(--color-border)] text-[var(--color-text)]">
                      <Layers className="w-4 h-4 text-[var(--color-muted)]" />
                      <span>Curated Spatial Design &amp; Architecture</span>
                    </div>
                  </div>

                  {/* Portfolio Grid */}
                  <div className="mt-6 pt-6 border-t border-[var(--color-border)]">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text)] mb-4">
                      Completed Spatial Concepts:
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {project.sampleProjects.map((p, i) => (
                        <div key={i} className="p-4 rounded-[var(--radius-sm)] bg-[var(--color-bg)] border border-[var(--color-border)]">
                          <div className="h-24 rounded-[var(--radius-sm)] bg-[var(--color-surface)] p-2 relative overflow-hidden flex flex-col justify-between border border-[var(--color-border)]">
                            <div className="flex items-center justify-between text-[10px] font-mono text-[var(--color-muted)]">
                              <span>BLUEPRINT &bull; {p.area}</span>
                              <span className="text-[var(--color-brand-gold)]">SCALE: 1:50</span>
                            </div>
                            <svg viewBox="0 0 200 45" className="w-full h-12 stroke-[var(--color-muted)] fill-none">
                              <rect x="2" y="2" width="196" height="41" strokeWidth="1.5" stroke="var(--color-border)" />
                              <line x1="60" y1="2" x2="60" y2="43" strokeWidth="1" strokeDasharray="3 2" />
                              <line x1="130" y1="2" x2="130" y2="43" strokeWidth="1" />
                              <rect x="140" y="8" width="45" height="26" strokeWidth="1" stroke="var(--color-primary)" />
                              <circle cx="30" cy="22" r="10" strokeWidth="1" stroke="var(--color-muted)" />
                              <text x="68" y="16" fill="var(--color-muted)" fontSize="7" fontFamily="sans-serif">SPATIAL ZONE</text>
                            </svg>
                          </div>
                          <h4 className="font-semibold text-sm text-[var(--color-text)] mt-3">{p.name}</h4>
                          <p className="text-xs text-[var(--color-muted)] mt-1">{p.location}</p>
                          <span className="text-xs text-[var(--color-primary)] font-medium block mt-1">{p.style}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Consultation Request Flow */}
                  <div className="mt-6 p-4 rounded-[var(--radius-sm)] bg-[var(--color-bg)] border border-[var(--color-border)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <div className="text-xs font-semibold text-[var(--color-text)]">Spacious Editorial Layout</div>
                      <div className="text-xs text-[var(--color-muted)]">Generous whitespace, tactile material swatches, and clear consultation booking.</div>
                    </div>
                    <Button variant="secondary" size="sm" className="shrink-0">
                      Consultation Booking Flow
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Design Decisions Section */}
        <section className="mb-12 bg-[var(--color-bg)] rounded-[var(--radius-lg)] border border-[var(--color-border)] p-6 sm:p-8 shadow-[var(--shadow-sm)]">
          <h2 className="font-semibold text-xl text-[var(--color-text)] mb-6">
            Key Design Decisions &amp; Engineering Rationales
          </h2>
          <div className="space-y-4">
            {project.designDecisions.map((dec, i) => (
              <div key={i} className="p-4 rounded-[var(--radius-md)] bg-[var(--color-surface)] border border-[var(--color-border)]">
                <h3 className="font-semibold text-sm text-[var(--color-text)] mb-1 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[var(--color-primary)]" />
                  {dec.decision}
                </h3>
                <p className="text-xs text-[var(--color-muted)] leading-relaxed pl-4">
                  {dec.rationale}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Project Navigation (Prev / Next) */}
        <div className="py-4 border-t border-b border-[var(--color-border)] flex flex-col sm:flex-row items-center justify-between gap-4 mb-12">
          <Link
            to={`/portfolio/${prevProject.slug}`}
            className="flex items-center gap-2 text-sm font-medium text-[var(--color-text)] hover:text-[var(--color-primary)] group min-h-[40px]"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Previous: {prevProject.title}</span>
          </Link>

          <Link
            to="/portfolio"
            className="text-xs font-medium text-[var(--color-muted)] hover:text-[var(--color-text)] underline underline-offset-4 min-h-[40px] flex items-center"
          >
            Back to All Concept Projects
          </Link>

          <Link
            to={`/portfolio/${nextProject.slug}`}
            className="flex items-center gap-2 text-sm font-medium text-[var(--color-text)] hover:text-[var(--color-primary)] group min-h-[40px]"
          >
            <span>Next: {nextProject.title}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Call to action for similar website */}
        <div className="p-6 sm:p-8 rounded-[var(--radius-lg)] bg-[var(--color-surface)] border border-[var(--color-border)] max-w-3xl mx-auto">
          <Badge variant="orange" size="sm" className="mb-3">
            Start Your Project
          </Badge>
          <h2 className="text-2xl font-semibold text-[var(--color-text)]">
            Want a website with this level of quality?
          </h2>
          <p className="mt-3 text-sm text-[var(--color-muted)] max-w-xl leading-relaxed">
            We can design and build a website customized for your specific business. Tell us your goals, and we'll prepare a transparent quotation.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Button
              to={`/contact?inspiration=${encodeURIComponent(project.title)}`}
              variant="primary"
              size="md"
              icon={Send}
            >
              Request a Site Like This
            </Button>
            <Button
              to="/pricing"
              variant="secondary"
              size="md"
            >
              Explore Pricing
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
