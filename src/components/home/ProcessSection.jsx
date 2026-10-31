import ScrollReveal from '../common/ScrollReveal';

export default function ProcessSection() {
  const steps = [
    {
      num: "01",
      title: "Understand",
      description: "Clarify your business goals, target audience, and project requirements before writing any code.",
    },
    {
      num: "02",
      title: "Design",
      description: "Plan the structure, layout hierarchy, and responsive interface for a seamless user experience.",
    },
    {
      num: "03",
      title: "Develop",
      description: "Write clean, mobile-first frontend and backend code with modern standards and fast load times.",
    },
    {
      num: "04",
      title: "Deliver",
      description: "Test across devices, deploy to production hosting, and hand over 100% of the source code.",
    },
  ];

  return (
    <section className="py-12 lg:py-16 bg-white border-b border-[var(--color-border)]">
      <div className="max-w-[var(--layout-max-width)] mx-auto px-4 sm:px-6">
        <ScrollReveal className="max-w-2xl mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-heading font-bold tracking-tight text-[var(--color-brand-navy)] leading-tight">
            How Do I Work?
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[var(--color-brand-slate)] leading-relaxed font-normal">
            A straightforward four-step approach from initial idea to live launch.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <ScrollReveal
              key={step.num}
              delayMs={idx * 100}
              className="bg-[var(--color-brand-warm)] rounded-[var(--radius-lg)] border border-[var(--color-border)] p-6 flex flex-col justify-between hover:border-[var(--color-brand-orange)] transition-colors duration-150 shadow-[var(--shadow-sm)] group"
            >
              <div>
                <span className="font-heading font-extrabold text-2xl text-[var(--color-brand-orange)] block mb-3">
                  {step.num}
                </span>

                <h3 className="font-heading font-bold text-xl sm:text-[22px] text-[var(--color-brand-navy)] mb-2">
                  {step.title}
                </h3>

                <p className="text-base text-[var(--color-brand-slate)] leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
