import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Coffee, GraduationCap, Compass, Smartphone, Monitor, ExternalLink, CheckCircle2 } from 'lucide-react';

export default function HeroPreviewComposition() {
  const [activeTab, setActiveTab] = useState('cafe');
  const [viewMode, setViewMode] = useState('desktop'); // desktop or mobile

  return (
    <div className="relative mx-auto max-w-5xl">
      {/* Main Browser Mockup Container */}
      <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-bg)] shadow-[var(--shadow-sm)] overflow-hidden">
        {/* Browser Top Window Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-900 px-4 py-2 text-slate-300 text-xs">
          {/* Window control dots */}
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block" />
            <span className="ml-2 font-sans text-xs text-slate-400 hidden sm:inline">
              webestly-concept-lab.dev
            </span>
          </div>

          {/* Industry Switcher Tabs with accessible touch targets */}
          <div className="flex items-center gap-1 bg-slate-800 p-1 rounded-[var(--radius-sm)] border border-slate-700">
            <button
              type="button"
              onClick={() => setActiveTab('cafe')}
              className={`flex items-center gap-2 px-3 py-1 rounded-[var(--radius-sm)] text-xs font-sans transition-colors ${
                activeTab === 'cafe'
                  ? 'bg-[var(--color-brand-orange)] text-[var(--color-brand-navy)] font-semibold'
                  : 'text-slate-300 hover:text-white font-medium'
              }`}
            >
              <Coffee className="w-4 h-4" />
              <span>Daily Roast</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('coaching')}
              className={`flex items-center gap-2 px-3 py-1 rounded-[var(--radius-sm)] text-xs font-sans transition-colors ${
                activeTab === 'coaching'
                  ? 'bg-[var(--color-brand-orange)] text-[var(--color-brand-navy)] font-semibold'
                  : 'text-slate-300 hover:text-white font-medium'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Summit Learning</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('interiors')}
              className={`flex items-center gap-2 px-3 py-1 rounded-[var(--radius-sm)] text-xs font-sans transition-colors ${
                activeTab === 'interiors'
                  ? 'bg-[var(--color-brand-orange)] text-[var(--color-brand-navy)] font-semibold'
                  : 'text-slate-300 hover:text-white font-medium'
              }`}
            >
              <Compass className="w-4 h-4" />
              <span>Forma Interiors</span>
            </button>
          </div>

          {/* Device viewport toggle with 44px min-touch size */}
          <div className="hidden md:flex items-center gap-1 text-slate-400">
            <button
              type="button"
              onClick={() => setViewMode('desktop')}
              className={`min-w-[44px] min-h-[44px] flex items-center justify-center rounded transition-colors ${
                viewMode === 'desktop' ? 'bg-slate-800 text-white' : 'hover:text-slate-200'
              }`}
              title="Desktop viewport"
              aria-label="Desktop preview mode"
            >
              <Monitor className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => setViewMode('mobile')}
              className={`min-w-[44px] min-h-[44px] flex items-center justify-center rounded transition-colors ${
                viewMode === 'mobile' ? 'bg-slate-800 text-white' : 'hover:text-slate-200'
              }`}
              title="Mobile viewport"
              aria-label="Mobile preview mode"
            >
              <Smartphone className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Viewport Content Area */}
        <div className={`p-4 sm:p-6 bg-[var(--color-surface)] min-h-[380px] transition-all duration-150 flex justify-center ${
          viewMode === 'mobile' ? 'max-w-md mx-auto my-4 border-x border-[var(--color-border)] rounded-[var(--radius-lg)] bg-[var(--color-bg)]' : ''
        }`}>
          {/* Concept A: Daily Roast Cafe */}
          {activeTab === 'cafe' && (
            <div className="w-full space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[var(--color-text)] text-white p-6 rounded-[var(--radius-lg)] border border-[var(--color-border)]">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs uppercase bg-white/10 text-white px-2 py-1 rounded-[var(--radius-sm)] font-sans">
                      Specialty Coffee &amp; Roastery
                    </span>
                    <span className="text-xs text-slate-300">&bull; Specialty Hospitality</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-sans font-medium mt-1 text-white">
                    Daily Roast Cafe
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mt-1">
                    Artisanal single-origin brews, sourdough toasts, and peaceful co-working corners.
                  </p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-xs px-3 py-1 rounded-[var(--radius-sm)] bg-[var(--color-success)]/20 text-[var(--color-success)] border border-[var(--color-success)]/30 flex items-center gap-2 font-medium">
                    <span className="w-2 h-2 rounded-full bg-[var(--color-success)]" />
                    Open Today 7:30 AM – 10:30 PM
                  </span>
                </div>
              </div>

              {/* Sample Menu Cards Preview */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="bg-[var(--color-bg)] p-4 rounded-[var(--radius-md)] border border-[var(--color-border)]">
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-medium text-[var(--color-text)]">Pour Over Coorg</span>
                    <span className="text-xs font-semibold text-[var(--color-primary)]">₹240</span>
                  </div>
                  <p className="text-xs text-[var(--color-muted)] mt-1">Single-origin dark roast with notes of cacao and orange peel.</p>
                  <span className="inline-block mt-2 text-xs bg-[var(--color-surface)] text-[var(--color-muted)] px-2 py-1 rounded-[var(--radius-sm)] border border-[var(--color-border)]">Hot / Iced</span>
                </div>

                <div className="bg-[var(--color-bg)] p-4 rounded-[var(--radius-md)] border border-[var(--color-border)]">
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-medium text-[var(--color-text)]">Sourdough Tartine</span>
                    <span className="text-xs font-semibold text-[var(--color-primary)]">₹340</span>
                  </div>
                  <p className="text-xs text-[var(--color-muted)] mt-1">Crushed avocado, cherry tomatoes, Danish feta, balsamic drizzle.</p>
                  <span className="inline-block mt-2 text-xs bg-[var(--color-surface)] text-[var(--color-muted)] px-2 py-1 rounded-[var(--radius-sm)] border border-[var(--color-border)]">Vegetarian</span>
                </div>

                <div className="bg-[var(--color-bg)] p-4 rounded-[var(--radius-md)] border border-[var(--color-border)]">
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-medium text-[var(--color-text)]">Butter Croissant</span>
                    <span className="text-xs font-semibold text-[var(--color-primary)]">₹220</span>
                  </div>
                  <p className="text-xs text-[var(--color-muted)] mt-1">Baked fresh at 7:00 AM daily. Flaky, 100% French butter layers.</p>
                  <span className="inline-block mt-2 text-xs bg-[var(--color-surface)] text-[var(--color-muted)] px-2 py-1 rounded-[var(--radius-sm)] border border-[var(--color-border)]">Fresh Batch</span>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs pt-1 text-[var(--color-muted)]">
                <span>Original WebEstly concept project</span>
                <Link
                  to="/portfolio/daily-roast"
                  className="inline-flex items-center gap-1 font-medium text-[var(--color-primary)] hover:underline"
                >
                  <span>Explore Daily Roast Case Study</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          )}

          {/* Concept B: Summit Learning Coaching */}
          {activeTab === 'coaching' && (
            <div className="w-full space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[var(--color-text)] text-white p-6 rounded-[var(--radius-lg)] border border-[var(--color-border)]">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs uppercase bg-white/10 text-white px-2 py-1 rounded-[var(--radius-sm)] font-sans">
                      Academic Coaching Institute
                    </span>
                    <span className="text-xs text-slate-300">&bull; Academic &amp; Hybrid Prep</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-sans font-medium mt-1 text-white">
                    Summit Learning Institute
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mt-1">
                    Structured foundation batches for JEE, NEET, and MHT-CET with verifiable course roadmaps.
                  </p>
                </div>
                <div className="shrink-0">
                  <span className="text-xs px-3 py-1 rounded-[var(--radius-sm)] bg-[var(--color-primary)]/20 text-blue-300 border border-[var(--color-primary)]/30 font-medium">
                    2026 Batch Inquiries Open
                  </span>
                </div>
              </div>

              {/* Course Catalog Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="bg-[var(--color-bg)] p-4 rounded-[var(--radius-md)] border border-[var(--color-border)]">
                  <span className="text-xs font-medium text-[var(--color-primary)] uppercase tracking-wide">Class XI - XII</span>
                  <div className="text-xs font-medium text-[var(--color-text)] mt-1">JEE &amp; MHT-CET Integrated</div>
                  <p className="text-xs text-[var(--color-muted)] mt-1">2-Year intensive classroom with weekly diagnostic tests.</p>
                  <div className="mt-2 text-xs text-[var(--color-muted)] font-normal flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-success)]" /> Morning &amp; Evening Batches
                  </div>
                </div>

                <div className="bg-[var(--color-bg)] p-4 rounded-[var(--radius-md)] border border-[var(--color-border)]">
                  <span className="text-xs font-medium text-[var(--color-primary)] uppercase tracking-wide">Pre-Medical</span>
                  <div className="text-xs font-medium text-[var(--color-text)] mt-1">Target NEET 1-Year Fastrack</div>
                  <p className="text-xs text-[var(--color-muted)] mt-1">Full NCERT line-by-line coverage and 80+ full mock tests.</p>
                  <div className="mt-2 text-xs text-[var(--color-muted)] font-normal flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-success)]" /> Weekend Doubt Clinics
                  </div>
                </div>

                <div className="bg-[var(--color-bg)] p-4 rounded-[var(--radius-md)] border border-[var(--color-border)]">
                  <span className="text-xs font-medium text-[var(--color-primary)] uppercase tracking-wide">Foundation IX-X</span>
                  <div className="text-xs font-medium text-[var(--color-text)] mt-1">Science &amp; Math Olympiad</div>
                  <p className="text-xs text-[var(--color-muted)] mt-1">Concept-first reasoning and advanced problem-solving tracks.</p>
                  <div className="mt-2 text-xs text-[var(--color-muted)] font-normal flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-success)]" /> Saturday Sessions
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs pt-1 text-[var(--color-muted)]">
                <span>Original WebEstly concept project</span>
                <Link
                  to="/portfolio/summit-learning"
                  className="inline-flex items-center gap-1 font-medium text-[var(--color-primary)] hover:underline"
                >
                  <span>Explore Summit Learning Case Study</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          )}

          {/* Concept C: Forma Interior Architecture */}
          {activeTab === 'interiors' && (
            <div className="w-full space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[var(--color-text)] text-white p-6 rounded-[var(--radius-lg)] border border-[var(--color-border)]">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs uppercase bg-white/10 text-white px-2 py-1 rounded-[var(--radius-sm)] font-sans">
                      Spatial Design Studio
                    </span>
                    <span className="text-xs text-slate-300">&bull; Spatial Architecture</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-sans font-medium mt-1 text-white">
                    Forma Interior Architecture
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mt-1">
                    Bespoke turnkey residences, warm minimalist penthouses, and architectural renovations.
                  </p>
                </div>
                <div className="shrink-0">
                  <span className="text-xs px-3 py-1 rounded-[var(--radius-sm)] bg-white/10 text-white border border-white/20 font-medium">
                    Consultations by Appointment
                  </span>
                </div>
              </div>

              {/* Architectural Project Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="bg-[var(--color-bg)] p-4 rounded-[var(--radius-md)] border border-[var(--color-border)]">
                  <div className="h-16 rounded-[var(--radius-sm)] bg-slate-900 p-2 relative overflow-hidden flex flex-col justify-between border border-slate-800">
                    <div className="flex items-center justify-between text-[10px] font-sans text-slate-400">
                      <span>PLAN A-101</span>
                      <span className="text-white">3,800 SQ.FT</span>
                    </div>
                    <svg viewBox="0 0 200 40" className="w-full h-7 stroke-[var(--color-muted)] fill-none text-slate-500">
                      <rect x="2" y="2" width="196" height="36" strokeWidth="1.5" stroke="var(--color-muted)" />
                      <line x1="70" y1="2" x2="70" y2="38" strokeWidth="1" strokeDasharray="3 2" />
                      <line x1="130" y1="2" x2="130" y2="38" strokeWidth="1" />
                    </svg>
                  </div>
                  <div className="text-xs font-medium text-[var(--color-text)] mt-2">The Minimalist Penthouse</div>
                  <p className="text-xs text-[var(--color-muted)] mt-1">Kalyani Nagar &bull; Warm Oak &amp; Travertine</p>
                </div>

                <div className="bg-[var(--color-bg)] p-4 rounded-[var(--radius-md)] border border-[var(--color-border)]">
                  <div className="h-16 rounded-[var(--radius-sm)] bg-slate-900 p-2 relative overflow-hidden flex flex-col justify-between border border-slate-800">
                    <div className="flex items-center justify-between text-[10px] font-sans text-slate-400">
                      <span>PLAN B-204</span>
                      <span className="text-white">5,200 SQ.FT</span>
                    </div>
                    <svg viewBox="0 0 200 40" className="w-full h-7 stroke-[var(--color-muted)] fill-none text-slate-500">
                      <rect x="2" y="2" width="196" height="36" strokeWidth="1.5" stroke="var(--color-muted)" />
                      <line x1="50" y1="2" x2="50" y2="38" strokeWidth="1" />
                      <line x1="110" y1="2" x2="110" y2="38" strokeWidth="1" strokeDasharray="3 2" />
                    </svg>
                  </div>
                  <div className="text-xs font-medium text-[var(--color-text)] mt-2">Monolith Villa Residence</div>
                  <p className="text-xs text-[var(--color-muted)] mt-1">Baner Hills &bull; Fluted Glass &amp; Marble</p>
                </div>

                <div className="bg-[var(--color-bg)] p-4 rounded-[var(--radius-md)] border border-[var(--color-border)]">
                  <div className="h-16 rounded-[var(--radius-sm)] bg-slate-900 p-2 relative overflow-hidden flex flex-col justify-between border border-slate-800">
                    <div className="flex items-center justify-between text-[10px] font-sans text-slate-400">
                      <span>PLAN C-012</span>
                      <span className="text-white">2,400 SQ.FT</span>
                    </div>
                    <svg viewBox="0 0 200 40" className="w-full h-7 stroke-[var(--color-muted)] fill-none text-slate-500">
                      <rect x="2" y="2" width="196" height="36" strokeWidth="1.5" stroke="var(--color-muted)" />
                      <circle cx="40" cy="20" r="10" strokeWidth="1" stroke="var(--color-muted)" />
                    </svg>
                  </div>
                  <div className="text-xs font-medium text-[var(--color-text)] mt-2">Atelier Studio Office</div>
                  <p className="text-xs text-[var(--color-muted)] mt-1">Viman Nagar &bull; Industrial Raw Concrete</p>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs pt-1 text-[var(--color-muted)]">
                <span>Original WebEstly concept project</span>
                <Link
                  to="/portfolio/forma-interiors"
                  className="inline-flex items-center gap-1 font-medium text-[var(--color-primary)] hover:underline"
                >
                  <span>Explore Forma Interiors Case Study</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Banner inside Mockup */}
        <div className="bg-[var(--color-surface)] px-4 py-2 border-t border-[var(--color-border)] text-xs text-[var(--color-muted)] flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[var(--color-primary)]" />
            <span className="font-medium text-[var(--color-text)]">Live Interactive Concept Demonstrations</span>
            <span className="hidden sm:inline text-[var(--color-muted)]">| Custom designs crafted for growing businesses</span>
          </div>
          <span className="text-xs text-[var(--color-muted)]">
            Click tabs above to switch previews
          </span>
        </div>
      </div>
    </div>
  );
}
