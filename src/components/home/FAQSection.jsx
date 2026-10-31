import SectionHeading from '../common/SectionHeading';
import Accordion from '../common/Accordion';
import { faqData } from '../../config/faqData';
import { HelpCircle } from 'lucide-react';
import Button from '../common/Button';

export default function FAQSection() {
  return (
    <section className="py-10 lg:py-16 bg-[var(--color-surface)] border-b border-[var(--color-border)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="Frequently Asked Questions"
          badgeVariant="orange"
          title="Common Questions, Direct Answers"
          subtitle="Everything you need to know about pricing, project ownership, timelines, domain hosting, and revisions before starting."
          centered={true}
        />

        <div className="mt-12">
          <Accordion items={faqData} allowMultiple={false} />
        </div>

        <div className="mt-8 p-6 rounded-[var(--radius-lg)] bg-[var(--color-bg)] border border-[var(--color-border)] shadow-[var(--shadow-sm)] max-w-2xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="w-12 h-12 rounded-[var(--radius-md)] bg-[var(--color-surface)] flex items-center justify-center shrink-0 text-[var(--color-primary)]">
            <HelpCircle className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-base text-[var(--color-text)]">
              Have a specific question not covered here?
            </h4>
            <p className="text-sm text-[var(--color-muted)] mt-1">
              We are happy to answer any questions about your specific project scope, domain setup, or timeline.
            </p>
          </div>
          <Button to="/contact" variant="secondary" size="md" className="shrink-0">
            Ask a Question
          </Button>
        </div>
      </div>
    </section>
  );
}
