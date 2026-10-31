import { Shield, AlertCircle } from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';
import Breadcrumbs from '../components/common/Breadcrumbs';
import { siteConfig } from '../config/siteConfig';

export default function PrivacyPolicyPage() {
  usePageMeta(
    "Privacy Policy",
    "Privacy Policy for WebEstly. Clear, transparent explanation of how project inquiries and client contact details are handled."
  );

  return (
    <div className="py-10 lg:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <Breadcrumbs items={[{ label: "Privacy Policy", path: "/privacy" }]} />

        <div className="mt-6 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[var(--radius-sm)] bg-[var(--color-surface)] text-[var(--color-text)] border border-[var(--color-border)] text-xs font-medium">
            <Shield className="w-4 h-4 text-[var(--color-primary)]" />
            <span>Data Protection &amp; Confidentiality</span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-[var(--color-text)] leading-tight">
            Privacy Policy
          </h1>
          <p className="text-sm text-[var(--color-muted)]">
            Last updated: October 2026 &bull; WebEstly
          </p>
        </div>

        {/* Advisory Notice */}
        <div className="mt-8 p-4 rounded-[var(--radius-md)] bg-[var(--color-surface)] border border-[var(--color-border)] text-xs text-[var(--color-muted)] flex items-start gap-3">
          <AlertCircle className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-1" />
          <p className="leading-relaxed">
            <strong className="text-[var(--color-text)] font-semibold">Advisory Note:</strong> This privacy policy outlines the standard operating practices of WebEstly regarding customer inquiry handling and website project scoping. Before formal commercial launch, have this policy reviewed by an Indian legal professional to ensure alignment with any specific operational requirements.
          </p>
        </div>

        <div className="mt-8 space-y-8 text-sm text-[var(--color-muted)] leading-relaxed">
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="font-semibold text-lg text-[var(--color-text)] flex items-center gap-2">
              <span className="text-[var(--color-primary)]">1.</span> Information We Collect
            </h2>
            <p>
              When you submit a project inquiry through the WebEstly website, we collect only the necessary information required to understand your business requirements and provide an itemized scope quotation:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm text-[var(--color-muted)]">
              <li><strong className="text-[var(--color-text)] font-medium">Contact Identification:</strong> Your full name, email address, and telephone/WhatsApp number.</li>
              <li><strong className="text-[var(--color-text)] font-medium">Business Information:</strong> Your enterprise name, industry category (e.g. cafe, coaching, salon, interior design), and location.</li>
              <li><strong className="text-[var(--color-text)] font-medium">Project Scope:</strong> Desired service type, approximate budget range, target launch timeframe, and project goals.</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="font-semibold text-lg text-[var(--color-text)] flex items-center gap-2">
              <span className="text-[var(--color-primary)]">2.</span> How Your Information is Used
            </h2>
            <p>
              Information submitted to WebEstly is used strictly for legitimate project consultation purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm text-[var(--color-muted)]">
              <li>Evaluating your website project requirements and preparing an itemized quotation.</li>
              <li>Communicating with you via email, telephone, or WhatsApp regarding your project brief.</li>
              <li>Drafting contractual deliverables, milestones, and project timelines upon mutual agreement.</li>
            </ul>
            <p className="font-medium text-[var(--color-text)]">
              We do not sell, rent, trade, or share your contact details or project briefs with third-party marketers or advertisers.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="font-semibold text-lg text-[var(--color-text)] flex items-center gap-2">
              <span className="text-[var(--color-primary)]">3.</span> Third-Party Services and Hosting
            </h2>
            <p>
              Depending on the services you choose for your website, your website may connect to third-party providers (such as domain registrars, cloud hosting networks, Formspree, or WhatsApp Business). WebEstly does not control the privacy practices of independent third-party platforms, which operate under their own terms of service and privacy policies.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="font-semibold text-lg text-[var(--color-text)] flex items-center gap-2">
              <span className="text-[var(--color-primary)]">4.</span> Data Retention &amp; Security
            </h2>
            <p>
              We maintain reasonable technical and organizational precautions to protect your project information. Your inquiry data is retained only for the duration necessary to conclude your project consultation and maintain active client records.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="font-semibold text-lg text-[var(--color-text)] flex items-center gap-2">
              <span className="text-[var(--color-primary)]">5.</span> Contacting WebEstly About Privacy
            </h2>
            <p>
              If you have any questions or requests regarding your data, please contact us through our website contact form or email our studio at{' '}
              {siteConfig.contact.hasEmail ? (
                <a href={`mailto:${siteConfig.contact.email}`} className="text-[var(--color-primary)] font-medium hover:underline">
                  {siteConfig.contact.email}
                </a>
              ) : (
                <span className="text-[var(--color-text)] font-medium">our official inquiries channel</span>
              )}.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
