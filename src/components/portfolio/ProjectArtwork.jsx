
/**
 * Rich, authentic vector illustrations for the three concept projects.
 * Replaces plain gradient boxes with meaningful, high-craft SVG compositions.
 */
export default function ProjectArtwork({ projectId, className = "w-full h-full" }) {
  if (projectId === 'daily-roast') {
    return (
      <svg
        role="img"
        viewBox="0 0 400 180"
        className={className}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Daily Roast Cafe vector illustration"
      >
        <rect width="400" height="180" fill="var(--concept-cafe-bg)" />
        {/* Subtle grid background */}
        <path d="M0 45 H400 M0 90 H400 M0 135 H400 M100 0 V180 M200 0 V180 M300 0 V180" stroke="var(--concept-cafe-dark)" strokeWidth="0.8" opacity="0.4" />
        
        {/* Coffee Dripper & Cup Artwork */}
        <g transform="translate(240, 30)">
          {/* Dripper Cone */}
          <polygon points="60,20 120,20 100,70 80,70" fill="var(--concept-cafe-brown)" stroke="var(--concept-cafe-amber)" strokeWidth="1.5" />
          <line x1="50" y1="20" x2="130" y2="20" stroke="var(--concept-cafe-amber)" strokeWidth="2" strokeLinecap="round" />
          {/* Dripping coffee droplets */}
          <circle cx="90" cy="78" r="2.5" fill="var(--concept-cafe-gold)" />
          <circle cx="90" cy="88" r="2" fill="var(--concept-cafe-gold)" />
          {/* Ceramic Cup */}
          <path d="M70 95 H110 V125 C110 135 100 142 90 142 C80 142 70 135 70 125 Z" fill="var(--concept-cafe-cream)" stroke="var(--concept-cafe-amber)" strokeWidth="1.5" />
          <path d="M110 105 C118 105 124 112 124 120 C124 128 118 132 110 132" stroke="var(--concept-cafe-amber)" strokeWidth="1.5" fill="none" />
          <ellipse cx="90" cy="98" rx="16" ry="4" fill="var(--concept-cafe-roast)" />
          {/* Rising Steam */}
          <path d="M85 85 Q82 75 88 65 Q92 55 86 45" stroke="var(--concept-cafe-steam)" strokeWidth="1.2" strokeLinecap="round" strokeDasharray="3 2" opacity="0.7" />
          <path d="M95 85 Q98 75 92 65 Q88 55 94 45" stroke="var(--concept-cafe-steam)" strokeWidth="1.2" strokeLinecap="round" strokeDasharray="3 2" opacity="0.7" />
        </g>

        {/* Editorial Text & Price Cards */}
        <g transform="translate(30, 45)">
          <rect x="0" y="0" width="160" height="32" rx="6" fill="var(--concept-cafe-panel)" stroke="var(--concept-cafe-brown)" strokeWidth="1" />
          <text x="12" y="16" fill="var(--concept-cafe-steam)" fontSize="9" fontFamily="monospace" fontWeight="600">POUR-OVER COORG</text>
          <text x="12" y="26" fill="var(--concept-cafe-amber)" fontSize="8" fontFamily="sans-serif">Single-Origin Roast &bull; ₹240</text>
          
          <rect x="0" y="42" width="160" height="32" rx="6" fill="var(--concept-cafe-panel)" stroke="var(--concept-cafe-brown)" strokeWidth="1" />
          <text x="12" y="58" fill="var(--concept-cafe-steam)" fontSize="9" fontFamily="monospace" fontWeight="600">SOURDOUGH TARTINE</text>
          <text x="12" y="68" fill="var(--concept-cafe-amber)" fontSize="8" fontFamily="sans-serif">Crushed Avocado &bull; ₹340</text>
          
          <rect x="0" y="84" width="160" height="22" rx="4" fill="var(--concept-cafe-brown)" opacity="0.5" />
          <text x="8" y="99" fill="var(--concept-cafe-cream)" fontSize="8" fontFamily="monospace">STATUS: 7:30 AM - 10:30 PM</text>
        </g>
      </svg>
    );
  }

  if (projectId === 'summit-learning') {
    return (
      <svg
        role="img"
        viewBox="0 0 400 180"
        className={className}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Summit Learning Institute curriculum vector illustration"
      >
        <rect width="400" height="180" fill="var(--concept-edu-bg)" />
        {/* Subtle grid background */}
        <path d="M0 45 H400 M0 90 H400 M0 135 H400 M100 0 V180 M200 0 V180 M300 0 V180" stroke="var(--concept-edu-grid)" strokeWidth="0.8" opacity="0.5" />

        {/* Academic Course Roadmap Architecture */}
        <g transform="translate(30, 35)">
          {/* Header Badge */}
          <rect x="0" y="0" width="190" height="26" rx="6" fill="var(--color-text)" stroke="var(--concept-edu-royal)" strokeWidth="1.2" />
          <circle cx="14" cy="13" r="4" fill="var(--color-primary)" />
          <text x="24" y="16" fill="var(--concept-edu-light)" fontSize="9" fontFamily="monospace" fontWeight="700">JEE / NEET BATCH SCHEDULE</text>

          {/* Module Timeline Bars */}
          <g transform="translate(0, 38)">
            <rect x="0" y="0" width="95" height="42" rx="6" fill="var(--concept-edu-grid)" stroke="var(--concept-edu-border)" strokeWidth="1" />
            <text x="8" y="16" fill="var(--concept-edu-sky)" fontSize="8" fontFamily="monospace">MODULE 01: MECHANICS</text>
            <text x="8" y="28" fill="var(--concept-edu-muted)" fontSize="7" fontFamily="sans-serif">40 Lecture Hours</text>
            <rect x="8" y="32" width="60" height="3" rx="1.5" fill="var(--color-primary)" />

            <rect x="105" y="0" width="95" height="42" rx="6" fill="var(--concept-edu-grid)" stroke="var(--concept-edu-border)" strokeWidth="1" />
            <text x="113" y="16" fill="var(--concept-edu-mint)" fontSize="8" fontFamily="monospace">MODULE 02: ORGANIC</text>
            <text x="113" y="28" fill="var(--concept-edu-muted)" fontSize="7" fontFamily="sans-serif">Line-by-Line NCERT</text>
            <rect x="113" y="32" width="70" height="3" rx="1.5" fill="var(--concept-edu-emerald)" />
          </g>

          <g transform="translate(0, 90)">
            <rect x="0" y="0" width="200" height="20" rx="4" fill="var(--concept-edu-navy)" stroke="var(--color-primary-hover)" strokeWidth="0.8" />
            <text x="10" y="14" fill="var(--concept-edu-ice)" fontSize="8" fontFamily="sans-serif">✓ 80+ All-India Diagnostic Mock Test Series</text>
          </g>
        </g>

        {/* Diagnostic Chart Visual on Right */}
        <g transform="translate(260, 35)">
          <rect x="0" y="0" width="115" height="110" rx="8" fill="var(--color-text)" stroke="var(--concept-edu-darkblue)" strokeWidth="1.2" />
          <text x="10" y="18" fill="var(--concept-edu-light)" fontSize="8" fontFamily="monospace">TEST ROADMAP</text>
          {/* Step columns */}
          <rect x="15" y="65" width="16" height="35" rx="3" fill="var(--concept-edu-royal)" />
          <rect x="38" y="50" width="16" height="50" rx="3" fill="var(--color-primary)" />
          <rect x="61" y="35" width="16" height="65" rx="3" fill="var(--concept-edu-blue)" />
          <rect x="84" y="25" width="16" height="75" rx="3" fill="var(--concept-edu-sky)" />
          <line x1="10" y1="100" x2="105" y2="100" stroke="var(--concept-edu-border)" strokeWidth="1" />
        </g>
      </svg>
    );
  }

  // Default to Forma Interiors
  return (
    <svg
      role="img"
      viewBox="0 0 400 180"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Forma Interior Architecture blueprint vector illustration"
    >
      <rect width="400" height="180" fill="var(--concept-arch-bg)" />
      {/* Precision architectural drafting grid */}
      <path d="M0 30 H400 M0 60 H400 M0 90 H400 M0 120 H400 M0 150 H400 M50 0 V180 M100 0 V180 M150 0 V180 M200 0 V180 M250 0 V180 M300 0 V180 M350 0 V180" stroke="var(--concept-arch-grid)" strokeWidth="0.7" />

      {/* Blueprint Architectural Floor Plan */}
      <g transform="translate(25, 25)">
        {/* Exterior Main Perimeter */}
        <rect x="0" y="0" width="220" height="130" stroke="var(--concept-arch-stone)" strokeWidth="2" fill="var(--concept-arch-card)" />
        
        {/* Living Zone */}
        <line x1="80" y1="0" x2="80" y2="130" stroke="var(--concept-arch-wall)" strokeWidth="1.5" />
        <rect x="90" y="15" width="60" height="35" stroke="var(--concept-arch-line)" strokeWidth="1" strokeDasharray="3 2" />
        <text x="96" y="35" fill="var(--concept-arch-light)" fontSize="8" fontFamily="monospace">LIVING ROOM</text>
        <text x="96" y="44" fill="var(--concept-arch-stone)" fontSize="7" fontFamily="monospace">34' × 22'</text>

        {/* Terrace Zone */}
        <line x1="160" y1="0" x2="160" y2="130" stroke="var(--concept-arch-wall)" strokeWidth="1.5" />
        <text x="168" y="70" fill="var(--concept-cafe-amber)" fontSize="8" fontFamily="monospace">OAK DECK</text>
        <circle cx="190" cy="95" r="14" stroke="var(--concept-cafe-amber)" strokeWidth="1" strokeDasharray="2 2" />

        {/* Master Suite Zone */}
        <line x1="0" y1="65" x2="80" y2="65" stroke="var(--concept-arch-wall)" strokeWidth="1.5" />
        <text x="12" y="40" fill="var(--concept-arch-light)" fontSize="8" fontFamily="monospace">MASTER SUITE</text>
        <text x="12" y="100" fill="var(--concept-arch-line)" fontSize="8" fontFamily="monospace">DRESSING</text>
      </g>

      {/* Material & Dimension Palette on Right */}
      <g transform="translate(265, 30)">
        <rect x="0" y="0" width="110" height="24" rx="4" fill="var(--concept-arch-dark)" stroke="var(--concept-arch-border)" strokeWidth="1" />
        <text x="10" y="15" fill="var(--concept-arch-white)" fontSize="8" fontFamily="monospace">SCALE: 1:50 METRIC</text>

        {/* Material Swatches */}
        <g transform="translate(0, 35)">
          <rect x="0" y="0" width="22" height="22" rx="3" fill="var(--concept-cafe-brown)" stroke="var(--concept-cafe-dark)" />
          <text x="28" y="14" fill="var(--concept-arch-light)" fontSize="8" fontFamily="sans-serif">Natural Oak</text>

          <rect x="0" y="28" width="22" height="22" rx="3" fill="var(--concept-arch-light)" stroke="var(--concept-arch-line)" />
          <text x="28" y="42" fill="var(--concept-arch-light)" fontSize="8" fontFamily="sans-serif">Travertine</text>

          <rect x="0" y="56" width="22" height="22" rx="3" fill="var(--concept-arch-wall)" stroke="var(--concept-arch-dark)" />
          <text x="28" y="70" fill="var(--concept-arch-light)" fontSize="8" fontFamily="sans-serif">Raw Concrete</text>
        </g>
      </g>
    </svg>
  );
}
