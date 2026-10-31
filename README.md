# WebEstly — Websites That Work for Your Business

A complete, modern, responsive website for **WebEstly**, a website development and digital solutions studio serving local businesses in Pune, Maharashtra, India.

Built with **React**, **Vite**, **Tailwind CSS**, and **Lucide React**.

---

## 1. Project Overview

WebEstly is positioned as a practical, trustworthy digital solutions studio helping local Pune businesses establish an authentic online presence. 

Key attributes of this implementation:
- **Brand Identity Source of Truth:** Built directly around the supplied `webestly_logo.svg` using the exact geometric 'W' mark and brand colors (#10243A navy, #FF6500 orange, #FFB000 gold).
- **100% Original Implementation:** Independent component architecture, unique layout structures, original editorial copy, and zero repurposed code from generic agency templates.
- **Honest Positioning:** Transparently presented as an emerging studio. No fabricated statistics, fake employee biographies, false awards, or fictitious client claims.
- **Demonstration Concept Projects:** Three fully articulated concept projects designed for key local Pune sectors (Cafe/Roastery, Coaching Institute, and Interior Architecture Studio), clearly labeled as concept projects.
- **Honest Contact & Inquiries:** Client-side validation with an honest dispatch workflow (verified prefilled email draft, WhatsApp dispatch link, clipboard copy, and instructions to connect a backend API).

---

## 2. Technology Stack

- **Framework:** React 18
- **Build Tool / Bundler:** Vite 6
- **Routing:** React Router DOM (v6)
- **Styling:** Tailwind CSS (v3.4) with custom WebEstly brand color extensions
- **Icons:** Lucide React
- **Typography:** Manrope (Headings) and Inter (Body) via Google Fonts

---

## 3. Brand Colors & Design System

| Token | Hex | Role |
| :--- | :--- | :--- |
| **Primary Navy** | `#10243A` | Brand mark, headings, navigation, primary text |
| **Primary Orange** | `#FF6500` | Rising mark stroke, primary buttons, highlights |
| **Accent Gold** | `#FFB000` | Mark facet accent, restrained decorative badges |
| **Light Background** | `#F7F8FA` | Section backgrounds, card containers |
| **White** | `#FFFFFF` | Core canvas, card backgrounds |
| **Muted Text** | `#64748B` | Subheadings, secondary copy, captions |
| **Borders** | `#E2E8F0` | Dividers, card borders, form outlines |

---

## 4. Routes and Pages

| Route | Page | Description |
| :--- | :--- | :--- |
| `/` | **Home** | Hero with interactive concept previewer, benefits, 4-service overview, concept highlights, process, pricing preview, FAQ accordion, CTA |
| `/services` | **Services** | Detailed deliverables for Business Websites, Landing Pages, E-commerce, Custom Apps, and Business Automation |
| `/portfolio` | **Portfolio** | Filterable showcase of original concept projects |
| `/portfolio/daily-roast` | **Daily Roast** | Fictional artisanal cafe concept with interactive digital menu, opening hours, and table inquiry flow |
| `/portfolio/summit-learning` | **Summit Learning** | Fictional academic coaching academy with structured course syllabus and admission inquiry flow |
| `/portfolio/forma-interiors` | **Forma Interiors** | Fictional luxury interior design studio with project gallery, material palettes, and consultation booking |
| `/about` | **About** | Studio approach, core principles, local Pune focus, engineering standards, and ownership guarantee |
| `/pricing` | **Pricing** | Starting packages (₹7,999 to ₹24,999), comprehensive comparison table, and third-party infrastructure cost guide |
| `/contact` | **Contact** | 9-field project inquiry form with validation, URL param preselection, and honest fallback dispatch |
| `*` | **404 Page** | Branded error page with recovery navigation links |

---

## 5. Local Development & Setup

### Prerequisites
- Node.js (v18+ or v20+ recommended; verified on Node v22.18)
- npm (v9+ or v10+)

### Installation
Clone or navigate to the workspace directory and install dependencies:
```bash
npm install
```

### Start Development Server
```bash
npm run dev
```
The local server will start at `http://localhost:5173/`.

### Run Production Build
```bash
npm run build
```
Creates an optimized production bundle in the `dist/` directory.

### Preview Production Build
```bash
npm run preview
```
Serves the `dist/` folder locally at `http://localhost:4173/`.

---

## 6. Contact Details & Integration Configuration

All contact details and third-party endpoints are centrally controlled in:
[`src/config/siteConfig.js`](src/config/siteConfig.js)

### Current Placeholder Details:
- **Email:** `contact@webestly.example.com`
- **Phone:** `+91 (Pending Owner Setup)`
- **WhatsApp:** `+91 (Pending Owner Setup)`
- **Location:** Pune, Maharashtra, India

### How to Activate WhatsApp Business Integration:
1. Open `src/config/contact.js`.
2. Update the two variables:
   ```javascript
   export const WHATSAPP_NUMBER = "919XXXXXXXXX"; // Your real WhatsApp Business number (country code + number without '+' or spaces)
   export const WHATSAPP_ENABLED = true;
   ```
3. Save the file and rebuild (`npm run build`).
4. The floating WhatsApp button automatically becomes active in the bottom-right corner of all pages with pre-filled greeting messaging.

### How to Update General Studio Details:
1. Open `src/config/siteConfig.js`.
2. Update `siteConfig.contact`:
   ```javascript
   contact: {
     isConfigured: true,
     email: "hello@webestly.com", // Your real email
     phoneDisplay: "+91 (Your Official Studio Number)",
     officeLocation: "Pune, Maharashtra, India",
     workingHours: "Monday - Saturday: 10:00 AM - 7:00 PM IST",
     apiEndpoint: null, // Or your Formspree/EmailJS endpoint
   }
   ```

### Connecting a Backend Form Service:
The contact form is pre-wired to support an API endpoint. You can either:
- Set `VITE_CONTACT_API_ENDPOINT` in a `.env` file, or
- Assign the endpoint URL directly to `siteConfig.contact.apiEndpoint`.

Supported endpoints include:
- **Formspree:** `https://formspree.io/f/your_form_id`
- **EmailJS / Webhook:** Any standard JSON POST endpoint.

If no endpoint is specified, the form automatically falls back to an honest client-side workflow (generating an email draft with all fields prefilled or copying the brief to the clipboard).

---

## 7. Deployment Instructions

### Deploying to Vercel
1. Install Vercel CLI (`npm i -g vercel`) or push the code to a GitHub repository.
2. Import the project into [Vercel](https://vercel.com).
3. Framework Preset: **Vite**
4. Root Directory: `./`
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Click **Deploy**.

For single-page application routing on Vercel, ensure a `vercel.json` rewrite is present:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

### Deploying to Netlify
1. Connect repository to [Netlify](https://netlify.com).
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Add a `public/_redirects` file with `/* /index.html 200` to support direct deep-linking.

### Deploying to Cloudflare Pages
1. Create a project in Cloudflare Pages.
2. Build preset: **Vite**
3. Build command: `npm run build`
4. Output directory: `dist`

---

## 8. Remaining Integrations & Next Steps

When ready for full commercial launch:
1. **Domain Registration:** Point your registered domain (e.g. `webestly.com` or `webestly.in`) DNS records (`CNAME` or `A` records) to your hosting provider.
2. **Business Channels:** Replace the placeholder email and phone number in `src/config/siteConfig.js`.
3. **Form Backend:** Configure a Formspree or EmailJS endpoint if you prefer automated inbox notifications over the mailto fallback.
4. **Google Business Profile:** Add the live website link to your Google Business Profile in Pune for local map visibility.
