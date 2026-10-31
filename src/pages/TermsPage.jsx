import { FileCheck, AlertCircle } from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';
import Breadcrumbs from '../components/common/Breadcrumbs';

export default function TermsPage() {
  usePageMeta(
    "Terms of Service",
    "Terms of Service and project engagement terms for WebEstly. Transparent scope guidelines, client ownership, and milestones."
  );

  return (
    <div className="py-10 lg:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <Breadcrumbs items={[{ label: "Terms of Service", path: "/terms" }]} />

        <div className="mt-6 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[var(--radius-sm)] bg-[var(--color-surface)] text-[var(--color-text)] border border-[var(--color-border)] text-xs font-medium">
            <FileCheck className="w-4 h-4 text-[var(--color-primary)]" />
            <span>Project Engagement Guidelines</span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-[var(--color-text)] leading-tight">
            Terms of Service
          </h1>
          <p className="text-sm text-[var(--color-muted)]">
            Last updated: October 2026 &bull; WebEstly
          </p>
        </div>

        {/* Legal Review Advisory */}
        <div className="mt-8 p-4 rounded-[var(--radius-md)] bg-[var(--color-surface)] border border-[var(--color-border)] text-xs text-[var(--color-muted)] flex items-start gap-3">
          <AlertCircle className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-1" />
          <p className="leading-relaxed">
            <strong className="text-[var(--color-text)] font-semibold">Advisory Note:</strong> These terms summarize WebEstly's transparent operating terms and project agreements. Have these terms reviewed and customized by an Indian legal practitioner to tailor them to your formal contract signing process.
          </p>
        </div>

        <div className="mt-8 space-y-8 text-sm text-[var(--color-muted)] leading-relaxed">
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="font-semibold text-lg text-[var(--color-text)] flex items-center gap-2">
              <span className="text-[var(--color-primary)]">1.</span> Scope &amp; Estimates
            </h2>
            <p>
              Package prices listed on the WebEstly website reflect proposed starting estimates for standard deliverables. Every client engagement begins with a detailed scoping phase where requirements, page counts, interactive components, and integrations are documented in a written project quotation.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="font-semibold text-lg text-[var(--color-text)] flex items-center gap-2">
              <span className="text-[var(--color-primary)]">2.</span> Milestone Payments &amp; Deliveries
            </h2>
            <p>
              Project milestones are structured in clear phases (such as initial deposit, design/wireframe sign-off, build completion, and final handover). Work commences upon receipt of the mutually agreed project initiation payment.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="font-semibold text-lg text-[var(--color-text)] flex items-center gap-2">
              <span className="text-[var(--color-primary)]">3.</span> Code &amp; Asset Ownership
            </h2>
            <p>
              Upon receipt of full final settlement for completed project milestones, the client receives 100% full ownership of the website frontend source code, custom design assets, and content developed for the project. WebEstly does not lock clients into compulsory ongoing hosting retainers.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="font-semibold text-lg text-[var(--color-text)] flex items-center gap-2">
              <span className="text-[var(--color-primary)]">4.</span> Third-Party Expenses
            </h2>
            <p>
              Ongoing operational services—including custom domain registration (.com, .in), cloud hosting (Vercel, Netlify, VPS), SMS/WhatsApp Business API gateways, and payment processors—are billed directly by their respective providers to the client. WebEstly provides complete setup guidance without marking up third-party fees.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="font-semibold text-lg text-[var(--color-text)] flex items-center gap-2">
              <span className="text-[var(--color-primary)]">5.</span> Governing Law
            </h2>
            <p>
              Any agreements or disputes arising out of project engagements with WebEstly shall be governed by and construed in accordance with applicable laws.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
