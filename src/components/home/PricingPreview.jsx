import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import Badge from '../common/Badge';
import { pricingPackages } from '../../config/pricingData';

export default function PricingPreview() {
  return (
    <section className="py-10 lg:py-16 bg-[var(--color-bg)] border-b border-[var(--color-border)]">
      <div className="max-w-[var(--layout-max-width)] mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="Clear Investment"
          badgeVariant="orange"
          title="Starting Packages &amp; Transparent Rates"
          subtitle="Honest pricing designed for growing businesses. Every package includes responsive design, on-page SEO basics, and reliable handover."
          centered={true}
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingPackages.map((pkg) => {
            return (
              <div
                key={pkg.id}
                className={`rounded-[var(--radius-lg)] border p-6 flex flex-col justify-between transition-colors duration-150 ${
                  pkg.popular
                    ? 'border-2 border-[var(--color-primary)] bg-[var(--color-surface)] shadow-[var(--shadow-sm)] relative'
                    : 'border-[var(--color-border)] bg-[var(--color-bg)] shadow-[var(--shadow-sm)] hover:border-[var(--color-primary)]'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-[var(--color-primary)] text-white text-[11px] font-medium uppercase tracking-wider px-3 py-1 rounded-[var(--radius-sm)] shadow-[var(--shadow-sm)]">
                      Most Popular
                    </span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-lg text-[var(--color-text)]">
                      {pkg.name}
                    </h3>
                    <Badge variant={pkg.popular ? "primary" : "secondary"} size="sm">
                      {pkg.badge}
                    </Badge>
                  </div>

                  <p className="text-sm text-[var(--color-muted)] min-h-[36px] mb-4">
                    {pkg.description}
                  </p>

                  <div className="pb-4 mb-4 border-b border-[var(--color-border)]">
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl sm:text-3xl font-semibold text-[var(--color-text)]">
                        {pkg.price}
                      </span>
                      <span className="text-xs text-[var(--color-muted)]">starting</span>
                    </div>
                    <span className="text-xs text-[var(--color-primary)] font-medium block mt-1">
                      {pkg.includedPages}
                    </span>
                  </div>

                  <ul className="space-y-2 text-xs text-[var(--color-text)] mb-6">
                    {pkg.features.slice(0, 5).map((f, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[var(--color-success)] shrink-0 mt-1" />
                        <span className={f.included ? 'text-[var(--color-text)]' : 'text-[var(--color-muted)] line-through'}>
                          {f.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <Button
                    to={`/contact?package=${pkg.id}`}
                    variant={pkg.popular ? "primary" : "secondary"}
                    size="sm"
                    className="w-full text-xs py-2 justify-center"
                  >
                    Request Quotation
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Required Notice */}
        <div className="mt-8 p-4 rounded-[var(--radius-md)] bg-[var(--color-surface)] border border-[var(--color-border)] text-xs text-[var(--color-muted)] max-w-3xl mx-auto">
          <p>
            <strong className="text-[var(--color-text)] font-semibold">Notice:</strong> Prices are starting estimates. Your final quotation depends on your requirements, content, integrations, and agreed project scope. No compulsory ongoing monthly retainer is required.
          </p>
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            to="/pricing"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] group"
          >
            <span>Compare all package features, delivery timelines &amp; third-party cost guide</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
