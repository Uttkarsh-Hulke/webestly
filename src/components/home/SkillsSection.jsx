import ScrollReveal from '../common/ScrollReveal';

export default function SkillsSection() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Tailwind CSS",
      ],
    },
    {
      category: "Backend",
      skills: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "REST APIs",
      ],
    },
    {
      category: "AI & GenAI",
      skills: [
        "Gemini API",
        "LLM API integration",
        "AI-powered application development",
        "Prompt engineering",
      ],
    },
    {
      category: "Automation & Integration",
      skills: [
        "Workflow automation",
        "API-based automation",
        "Business process automation",
        "Third-party service integration",
      ],
    },
  ];

  return (
    <section className="py-12 lg:py-16 bg-[var(--color-brand-warm)] border-b border-[var(--color-border)]">
      <div className="max-w-[var(--layout-max-width)] mx-auto px-4 sm:px-6">
        <ScrollReveal className="max-w-2xl mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-heading font-bold text-[var(--color-brand-navy)] tracking-tight leading-tight">
            What Technologies Do I Use?
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[var(--color-brand-slate)] leading-relaxed font-normal">
            A practical development toolkit across modern frontend, backend systems, generative AI, and business automation.
          </p>
        </ScrollReveal>

        {/* 4 Clean Categories in a natural typographic layout (no decorative boxes) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((group, idx) => (
            <ScrollReveal
              key={group.category}
              delayMs={idx * 80}
              className="space-y-4"
            >
              <div className="pb-3 border-b border-[var(--color-border)]">
                <h3 className="font-heading font-bold text-xl sm:text-[22px] text-[var(--color-brand-navy)]">
                  {group.category}
                </h3>
              </div>

              <ul className="space-y-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-start gap-2 text-sm sm:text-base text-[var(--color-brand-slate)] font-medium hover:text-[var(--color-brand-navy)] transition-colors"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-orange)] mt-2 shrink-0 select-none"
                      aria-hidden="true"
                    />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
