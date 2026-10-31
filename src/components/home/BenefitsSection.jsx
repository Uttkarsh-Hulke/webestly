import { 
  ShieldCheck, 
  Layers, 
  MapPin, 
  Send, 
  Sparkles, 
  TrendingUp, 
  ArrowRight 
} from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';

export default function BenefitsSection() {
  const benefits = [
    {
      icon: ShieldCheck,
      title: "Build Credibility Online",
      description:
        "When potential customers discover your business through social media or recommendations, they look for your official website to verify legitimacy, credentials, and professionalism before reaching out.",
    },
    {
      icon: Layers,
      title: "Showcase Products & Services",
      description:
        "Clearly organize your offerings, specifications, treatment menus, course catalogs, or design specializations so visitors can understand exactly how you can help them.",
    },
    {
      icon: MapPin,
      title: "Make Contact Information Easy to Find",
      description:
        "Provide direct access to your phone number, WhatsApp inquiry link, operating hours, and location landmarks without forcing users to sift through unstructured social media posts.",
    },
    {
      icon: Send,
      title: "Help Customers Send Inquiries Effortlessly",
      description:
        "Clean, mobile-optimized inquiry forms allow prospective clients to submit their project details, preferred appointment times, or consultation requests at any hour of the day.",
    },
    {
      icon: Sparkles,
      title: "Present Your Work Professionally",
      description:
        "Display your completed work, interior projects, food photographs, or business case studies in a crisp, distraction-free environment tailored to your exact brand aesthetics.",
    },
    {
      icon: TrendingUp,
      title: "Establish a Foundation for Digital Growth",
      description:
        "A well-coded, mobile-friendly website gives you a permanent digital asset that you fully own. It serves as the bedrock for Google Business Profile links, online ads, and future digital automations.",
    },
  ];

  return (
    <section className="py-10 lg:py-16 bg-[var(--color-bg)] border-b border-[var(--color-border)]">
      <div className="max-w-[var(--layout-max-width)] mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="Why It Matters"
          badgeVariant="orange"
          title="Practical Benefits for Your Business"
          subtitle="A professional website is not just an online brochure—it is a dependable tool that helps local customers find you, verify your business, and take action."
          centered={true}
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {benefits.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div
                key={idx}
                className="group p-6 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] hover:bg-[var(--color-bg)] hover:border-[var(--color-primary)] transition-colors duration-150 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-[var(--radius-md)] bg-[var(--color-text)] text-white flex items-center justify-center group-hover:bg-[var(--color-primary)] transition-colors duration-150 mb-6">
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="font-semibold text-lg text-[var(--color-text)] mb-2">
                    {b.title}
                  </h3>

                  <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                    {b.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[var(--color-border)] flex items-center text-xs font-medium text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Realistic Expectations Banner */}
        <div className="mt-12 p-6 rounded-[var(--radius-lg)] bg-[var(--color-surface)] border border-[var(--color-border)] text-sm text-[var(--color-muted)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="leading-relaxed">
            <strong className="text-[var(--color-text)] font-semibold">Realistic digital perspective:</strong> While a great website creates credibility and makes inquiry frictionless, lasting business success relies on quality service and customer trust. We do not make exaggerated guarantees about overnight sales or search rankings.
          </p>
          <Button to="/services" variant="secondary" size="md" className="shrink-0">
            See All Services
          </Button>
        </div>
      </div>
    </section>
  );
}
