import { usePageMeta } from '../hooks/usePageMeta';
import HeroSection from '../components/home/HeroSection';
import WorkspaceImageSection from '../components/home/WorkspaceImageSection';
import ServicesPreview from '../components/home/ServicesPreview';
import AboutSection from '../components/home/AboutSection';
import SkillsSection from '../components/home/SkillsSection';
import ProcessSection from '../components/home/ProcessSection';
import CTASection from '../components/home/CTASection';
import { getLocalBusinessSchema } from '../config/schemaData';

export default function HomePage() {
  const homeSchema = {
    "@context": "https://schema.org",
    "@graph": [
      getLocalBusinessSchema()
    ]
  };

  usePageMeta(
    "WebEstly | Websites That Work for Your Business",
    "WebEstly by Uttkarsh Hulke - MERN Stack Developer | AI Integration & Automation. I build modern websites, web applications and AI-powered automation solutions for businesses.",
    { path: "/", schema: homeSchema }
  );

  return (
    <div className="animate-fadeIn">
      {/* 1. Personal introduction & WebEstly Brand (50/50 Horizontal Stack Hero) */}
      <HeroSection />

      {/* 2. New high-quality coding workspace background image section */}
      <WorkspaceImageSection />

      {/* 3. Services (What I Build with Learn More interaction) */}
      <ServicesPreview />

      {/* 4. About Me */}
      <AboutSection />

      {/* 5. Technologies */}
      <SkillsSection />

      {/* 6. My Process */}
      <ProcessSection />

      {/* 7. Final CTA */}
      <CTASection />
    </div>
  );
}
