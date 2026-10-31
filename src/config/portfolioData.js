export const portfolioData = [
  {
    id: "daily-roast",
    slug: "daily-roast",
    title: "Daily Roast Cafe & Roastery",
    category: "Hospitality & Dining",
    tagline: "Warm, welcoming, editorial cafe web experience with digital menu and table reservation inquiries.",
    badge: "Concept Project",
    isConcept: true,
    coverColor: "from-amber-900 to-amber-950",
    accentColor: "var(--concept-cafe-amber)",
    heroHighlight: "A taste-first online experience designed to turn neighborhood passersby into loyal regulars.",
    overview:
      "Daily Roast is an artisanal cafe concept designed for neighborhood coffee roasteries and casual eateries. The goal of this concept is to capture the cozy, aromatic atmosphere of a physical cafe while solving practical customer needs: checking current opening hours, exploring seasonal single-origin pour-overs and baked goods, finding directions, and requesting weekend table reservations.",
    intendedAudience:
      "Coffee enthusiasts, remote workers seeking cafe work desks, weekend brunch-goers, and neighborhood residents looking for artisanal coffee and fresh sourdough bakery treats.",
    designObjectives: [
      "Translate the warm, earthy tactile atmosphere of a specialty cafe into a responsive digital layout.",
      "Design an uncluttered, categorized digital food and beverage menu that is easy to scan on mobile screens.",
      "Prominently feature practical visit essentials: opening times, pet-friendly policy, parking notes, and map coordinates.",
      "Provide a low-friction table inquiry form that sends structured requests directly to staff without requiring app downloads.",
    ],
    features: [
      {
        name: "Interactive Digital Menu",
        desc: "Categorized layout (Artisanal Coffee, All-Day Breakfast, Bakery & Desserts) with dietary tags (Vegan, GF) and prices.",
      },
      {
        name: "Cafe Hours & Live Status Badge",
        desc: "Clear daily operating hours (7:30 AM - 10:30 PM) and weekend roast schedules.",
      },
      {
        name: "Location & Directions Preview",
        desc: "Illustrative map and landmark cues (Koregaon Park / FC Road style neighborhood hub).",
      },
      {
        name: "Table & Event Inquiries",
        desc: "Simple reservation inquiry form capturing party size, preferred time slot, and special requests.",
      },
      {
        name: "Visual Photo Gallery",
        desc: "Editorial layout showcasing latte art, bakery batches, and indoor wooden seating.",
      },
    ],
    designDecisions: [
      {
        decision: "Warm, Earthy Color Harmony",
        rationale: "Espresso tones, warm cream backgrounds, and amber accents evoke fresh coffee and warm pastries, avoiding cold clinical corporate aesthetics.",
      },
      {
        decision: "Mobile-First Menu Hierarchy",
        rationale: "Over 85% of cafe website visitors browse menus on their smartphones while on the go or seated at tables. We prioritized quick tap category pills and legible font sizes.",
      },
      {
        decision: "Transparent Concept Framing",
        rationale: "All reviews, addresses, and hours in this project are sample illustrative representations designed to display the layout template without misleading users.",
      },
    ],
    specs: {
      platform: "Custom Responsive Web Application",
      typography: "Editorial Serif Headlines + Clean Sans Body",
      palette: ["var(--concept-cafe-bg) (Espresso)", "var(--concept-cafe-amber) (Warm Amber)", "var(--concept-cafe-cream) (Oat Milk Cream)", "var(--concept-cafe-brown) (Roast Brown)"],
      deliverableType: "Concept Showcase Demo",
    },
    sampleMenu: [
      { item: "Single-Origin Pour Over (Coorg Estate)", price: "₹240", desc: "Notes of dark chocolate, orange zest, and toasted hazelnut.", tag: "House Favorite" },
      { item: "Iced Spanish Latte", price: "₹260", desc: "Espresso pulled over condensed milk and chilled whole milk.", tag: "Signature" },
      { item: "Sourdough Avocado Tartine", price: "₹340", desc: "Toasted country loaf, crushed Hass avocado, microgreens, feta crumbles.", tag: "Vegetarian" },
      { item: "Almond Frangipane Croissant", price: "₹220", desc: "Twice-baked butter croissant filled with velvety almond cream.", tag: "Fresh Daily" },
    ],
  },
  {
    id: "summit-learning",
    slug: "summit-learning",
    title: "Summit Learning Institute",
    category: "Education & Coaching",
    tagline: "Structured, professional coaching center website with syllabus downloads and admission inquiry flows.",
    badge: "Concept Project",
    isConcept: true,
    coverColor: "from-blue-900 to-slate-900",
    accentColor: "var(--color-primary)",
    heroHighlight: "A dependable, educational portal built to inform parents, guide students, and accelerate enrollment inquiries.",
    overview:
      "Summit Learning Institute is a comprehensive concept website designed for academic coaching centers, competitive exam academies (such as STEM foundations and competitive prep), and professional training institutes. The interface balances high credibility, structured syllabus disclosure, transparent batch schedules, and an accessible admission consultation channel.",
    intendedAudience:
      "High school students, competitive exam aspirants, and parents seeking structured academic support, faculty credentials, and dependable batch timings.",
    designObjectives: [
      "Deliver a calm, reassuring, and academically rigorous presentation free from aggressive hype or unverified claims.",
      "Organize course offerings, curriculum modules, and batch timings in an intuitive, tabbed layout.",
      "Provide immediate access to downloadable course brochures and curriculum roadmaps.",
      "Guide prospective students and parents through an organized, multi-step admission counseling inquiry.",
    ],
    features: [
      {
        name: "Structured Course Catalog",
        desc: "Classroom and hybrid programs broken down by grade, entrance exam stream, and duration.",
      },
      {
        name: "Faculty Profiles & Teaching Pedagogy",
        desc: "Illustrative educator profiles highlighting subject specializations, academic degrees, and teaching philosophy.",
      },
      {
        name: "Curriculum & Test Series Roadmap",
        desc: "Clear visual overview of monthly module pacing, revision bootcamps, and mock test schedules.",
      },
      {
        name: "Student Resource Center",
        desc: "Downloadable sample test papers, syllabus blueprints, and academic calendar previews.",
      },
      {
        name: "Admission Counseling Form",
        desc: "Structured inquiry capturing current academic grade, target exam, and preferred batch timing.",
      },
    ],
    designDecisions: [
      {
        decision: "Restrained Academic Blue & Clean Grid",
        rationale: "Deep educational navy paired with clean white cards conveys reliability, order, and scholarly focus rather than chaotic banner ads.",
      },
      {
        decision: "Zero Manufactured Rank Claims",
        rationale: "In adherence to ethical digital practices, the concept features realistic course roadmaps, faculty credentials, and study methodology rather than deceptive rank statistics.",
      },
      {
        decision: "Direct Syllabus Accessibility",
        rationale: "Parents and students prioritize knowing what will be taught and when. Key syllabus checkpoints are presented upfront without requiring forced login walls.",
      },
    ],
    specs: {
      platform: "Responsive Multi-Section Education Web App",
      typography: "Modern Structured Sans-Serif (Manrope + Inter)",
      palette: ["var(--color-text) (Deep Slate)", "var(--concept-edu-royal) (Academic Royal Blue)", "var(--color-surface) (Clean Light)", "var(--concept-edu-teal) (Teal Accent)"],
      deliverableType: "Concept Showcase Demo",
    },
    sampleCourses: [
      { code: "PCM-XI-XII", title: "Two-Year Foundation: JEE / MHT-CET", duration: "24 Months", batch: "June Batch (Morning & Evening)", status: "Inquiry Open" },
      { code: "PCB-NEET", title: "Target Medical Comprehensive Program", duration: "12 / 24 Months", batch: "Weekday Intensive", status: "Inquiry Open" },
      { code: "FOUND-IX-X", title: "High School Science & Math Olympiad", duration: "Academic Year", batch: "Weekend Batches", status: "Filling Fast" },
    ],
  },
  {
    id: "forma-interiors",
    slug: "forma-interiors",
    title: "Forma Interior Architecture",
    category: "Interior Design & Architecture",
    tagline: "Elegant, spacious, editorial portfolio for modern residential and commercial interior studios.",
    badge: "Concept Project",
    isConcept: true,
    coverColor: "from-stone-900 to-zinc-950",
    accentColor: "var(--concept-arch-stone)",
    heroHighlight: "A calm, gallery-first digital presence crafted to showcase spatial artistry and attract discerning interior clients.",
    overview:
      "Forma Interiors is an editorial concept website for contemporary interior architecture and luxury residential renovation studios. Built for studios operating in metropolitan urban hubs, this concept uses generous whitespace, curated project gallery cards, detailed material palettes, and a step-by-step design consultation workflow.",
    intendedAudience:
      "Homeowners planning new residential interiors or penthouse renovations, commercial office planners, and boutique hospitality owners seeking bespoke spatial design.",
    designObjectives: [
      "Strengthen the firm's brand reputation through generous negative space, refined typography, and balanced visual proportions.",
      "Showcase completed spatial projects through high-resolution gallery cards with floor dimensions, style themes, and material notes.",
      "Demystify the architectural process with an honest 4-stage workflow from concept to site handover.",
      "Incentivize qualified consultation bookings through a focused spatial inquiry form with budget range selection.",
    ],
    features: [
      {
        name: "Editorial Project Showcase",
        desc: "Filterable gallery of residential villas, penthouses, and minimal commercial spaces with layout breakdowns.",
      },
      {
        name: "Interactive Material & Texture Palette",
        desc: "Visual presentation of curated woods, Italian marbles, matte metals, and soft linen palettes.",
      },
      {
        name: "Transparent Design Process",
        desc: "Stage-by-stage guide: Spatial Brief, Schematic 3D Renders, Material Sourcing, and Turnkey Site Execution.",
      },
      {
        name: "Design Services Overview",
        desc: "Breakdowns of Full Turnkey Interiors, Architectural Remodeling, and Custom Furniture Fabrication.",
      },
      {
        name: "Consultation Request Gateway",
        desc: "Inquiry form collecting property type, carpet area, estimated timeline, and design aesthetic preferences.",
      },
    ],
    designDecisions: [
      {
        decision: "Minimalist Stone & Charcoal Color Story",
        rationale: "Neutral, architectural tones (warm stone, muted graphite, and warm brass) allow the interior design imagery and compositions to take center stage.",
      },
      {
        decision: "Spacious Editorial Layout",
        rationale: "Luxury interior clients judge spatial sensitivity through the layout itself. Generous padding, balanced columns, and clean borders reflect architectural discipline.",
      },
      {
        decision: "Transparent Scope Presentation",
        rationale: "Instead of generic claims, the site clearly explains what is included in architectural design versus turnkey execution.",
      },
    ],
    specs: {
      platform: "Editorial Portfolio & Lead Consultation Studio",
      typography: "Geometric Display Sans + Refined Body Sans",
      palette: ["var(--concept-arch-card) (Warm Charcoal)", "var(--concept-arch-stone) (Warm Stone)", "var(--concept-arch-linen) (Linen Gray)", "var(--concept-cafe-amber) (Muted Brass)"],
      deliverableType: "Concept Showcase Demo",
    },
    sampleProjects: [
      { name: "The Minimalist Penthouse", location: "Urban Heights", area: "3,800 sq.ft", style: "Warm Contemporary Japandi" },
      { name: "Monolith Villa Residence", location: "Hillside Enclave", area: "5,200 sq.ft", style: "Brutalist Warm Minimal" },
      { name: "Atelier Studio & Co-Work", location: "Downtown Quarter", area: "2,400 sq.ft", style: "Industrial Raw Concrete & Oak" },
    ],
  },
];
