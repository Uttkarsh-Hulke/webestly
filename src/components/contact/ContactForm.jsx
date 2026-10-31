import { useState } from 'react';
import { 
  Send, 
  Check, 
  AlertCircle, 
  Mail, 
  Info,
  RefreshCw
} from 'lucide-react';
import Button from '../common/Button';
import Input from '../common/Input';
import { siteConfig } from '../../config/siteConfig';

const RATE_LIMIT_SECONDS = 30;

export default function ContactForm({ 
  preselectedPackage = '', 
  preselectedService = '', 
  preselectedInspiration = '',
  discussBudget = false 
}) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessName: '',
    serviceRequired: preselectedPackage || preselectedService || 'Business Website Development',
    approximateBudget: discussBudget ? 'Flexible / Open to discussion' : '₹10,000 - ₹20,000',
    budgetFlexibility: discussBudget ? 'Yes, open to discussion' : 'Not sure yet',
    projectDescription: preselectedInspiration 
      ? `Interested in a design concept similar to: ${preselectedInspiration}.\n\n` 
      : '',
  });

  // Honeypot spam prevention (invisible to humans)
  const [honeypot, setHoneypot] = useState('');

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle'); // 'idle' | 'success' | 'error' | 'fallback'
  const [errorMessage, setErrorMessage] = useState('');

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Please enter your name.';
    }

    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address (e.g. name@domain.com).';
    }

    if (!formData.projectDescription.trim()) {
      errs.projectDescription = 'Please describe what you need for your project.';
    } else if (formData.projectDescription.trim().length < 15) {
      errs.projectDescription = 'Please share a few more details (minimum 15 characters).';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  // Structured inquiry brief for emails or fallback
  const formattedBrief = `
PROJECT ENQUIRY: ${formData.businessName || 'New Project'}
--------------------------------------------------
Customer Name: ${formData.name}
Email Address: ${formData.email}
Business / Brand: ${formData.businessName || 'Not Specified'}
Service Required: ${formData.serviceRequired}
Approximate Budget: ${formData.approximateBudget}
Budget Flexible?: ${formData.budgetFlexibility}

Project Description & Requirements:
${formData.projectDescription}
--------------------------------------------------
Sent via WebEstly (https://webestly.com)
`.trim();

  const mailtoLink = `mailto:uttkarshhulke@gmail.com?subject=${encodeURIComponent(
    `[WebEstly Project Enquiry] from ${formData.name}${formData.businessName ? ` (${formData.businessName})` : ''}`
  )}&body=${encodeURIComponent(formattedBrief)}`;

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check honeypot for spam bots
    if (honeypot) {
      setSubmitStatus('success');
      return;
    }

    // Rate-limiting check
    const lastSubmitted = localStorage.getItem('webestly_last_inquiry_time');
    if (lastSubmitted && Date.now() - Number(lastSubmitted) < RATE_LIMIT_SECONDS * 1000) {
      const waitSec = Math.ceil((RATE_LIMIT_SECONDS * 1000 - (Date.now() - Number(lastSubmitted))) / 1000);
      setErrorMessage(`Please wait ${waitSec} seconds before sending another enquiry.`);
      return;
    }

    if (!validate()) {
      const firstError = document.querySelector('[aria-invalid="true"]');
      if (firstError) {
        firstError.focus();
      }
      return;
    }

    setSubmitting(true);
    setErrorMessage('');

    try {
      const payload = {
        enquiryId: `ENQ-${Date.now()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`,
        name: formData.name.trim(),
        customerName: formData.name.trim(),
        email: formData.email.trim(),
        businessName: formData.businessName.trim() || 'Not Provided',
        serviceRequired: formData.serviceRequired,
        approximateBudget: formData.approximateBudget,
        budget: formData.approximateBudget,
        budgetFlexibility: formData.budgetFlexibility,
        projectDescription: formData.projectDescription.trim(),
        status: 'New',
        honeypot: honeypot
      };

      // Connect to Cloudflare Pages Function proxy (/api/enquiries) or configured endpoint
      const endpoint = siteConfig.contact.apiEndpoint || '/api/enquiries';

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok && (data.status === 'success' || !data.status)) {
        localStorage.setItem('webestly_last_inquiry_time', String(Date.now()));
        setSubmitStatus('success');
      } else if (response.status === 503 || data.configured === false) {
        setSubmitStatus('fallback');
      } else {
        setSubmitStatus('error');
        setErrorMessage(data.message || 'Could not deliver your enquiry to the database right now. Please use direct email below.');
      }
    } catch (err) {
      setSubmitStatus('error');
      setErrorMessage('Network connection error when reaching the enquiry service. You can send directly via email below.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      businessName: '',
      serviceRequired: 'Business Website Development',
      approximateBudget: '₹10,000 - ₹20,000',
      budgetFlexibility: 'Not sure yet',
      projectDescription: '',
    });
    setErrors({});
    setSubmitStatus('idle');
    setErrorMessage('');
  };

  return (
    <div>
      {/* 1. Verified Success State (Only shown after actual backend confirmation) */}
      {submitStatus === 'success' ? (
        <div 
          role="status" 
          aria-live="polite"
          className="rounded-[var(--radius-lg)] bg-white border border-emerald-200 p-6 sm:p-8 space-y-4 animate-fadeIn"
        >
          <div className="w-12 h-12 rounded-[var(--radius-md)] bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <Check className="w-6 h-6" />
          </div>
          <h3 className="font-heading font-bold text-2xl text-[var(--color-brand-navy)]">
            Thanks! Your enquiry has been received. I&apos;ll get back to you soon.
          </h3>
          <p className="text-base text-[var(--color-brand-slate)] leading-relaxed font-normal max-w-lg">
            I review every project brief personally and will respond to <strong className="text-[var(--color-brand-navy)] font-semibold">{formData.email}</strong> with an itemized scope and initial roadmap.
          </p>
          <div className="pt-2">
            <Button
              type="button"
              onClick={handleReset}
              variant="secondary"
              size="md"
            >
              Send Another Enquiry
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          {/* Honeypot field for bot spam detection */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="website-url-check">Leave this empty</label>
            <input
              type="text"
              id="website-url-check"
              name="honeypot"
              tabIndex={-1}
              autoComplete="off"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
            />
          </div>

          {/* Fallback Notice when API endpoint is not yet configured in .env */}
          {submitStatus === 'fallback' && (
            <div className="p-4 rounded-[var(--radius-md)] bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-900 space-y-3">
              <div className="flex items-start gap-2">
                <Info className="w-4 h-4 text-amber-600 shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <p className="font-heading font-bold">Google Sheets Integration Not Yet Connected</p>
                  <p className="mt-1 leading-relaxed">
                    The backend endpoint (<code className="font-mono text-xs">APPS_SCRIPT_URL</code>) is not yet configured in Cloudflare environment secrets. To make sure your enquiry is received right now, click below to open your email client with your completed brief:
                  </p>
                </div>
              </div>

              <div className="pt-1 flex flex-col sm:flex-row gap-2">
                <Button
                  href={mailtoLink}
                  variant="primary"
                  size="sm"
                  icon={Mail}
                  className="w-full sm:w-auto justify-center"
                >
                  Send Brief via Email Client
                </Button>
                <Button
                  type="button"
                  onClick={() => setSubmitStatus('idle')}
                  variant="ghost"
                  size="sm"
                  className="w-full sm:w-auto justify-center"
                >
                  Edit Form Details
                </Button>
              </div>
            </div>
          )}

          {/* Submission Error Banner */}
          {submitStatus === 'error' && (
            <div className="p-4 rounded-[var(--radius-md)] bg-rose-50 border border-rose-200 text-xs sm:text-sm text-rose-800 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-1" aria-hidden="true" />
              <div className="space-y-2">
                <p className="font-semibold">{errorMessage}</p>
                <a
                  href={mailtoLink}
                  className="inline-flex items-center gap-1 font-bold text-rose-900 underline"
                >
                  Click here to send directly via email instead &rarr;
                </a>
              </div>
            </div>
          )}

          {/* Field 1: Your Name (Required) */}
          <div>
            <label htmlFor="name" className="block text-sm font-heading font-bold text-[var(--color-brand-navy)] mb-1">
              Your Name <span className="text-[var(--color-brand-orange)]">*</span>
            </label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. John Doe"
              error={Boolean(errors.name)}
              aria-required="true"
              aria-invalid={errors.name ? 'true' : 'false'}
            />
            {errors.name && (
              <p className="mt-1 text-xs text-[var(--color-danger)] font-medium">{errors.name}</p>
            )}
          </div>

          {/* Field 2: Email Address (Required) */}
          <div>
            <label htmlFor="email" className="block text-sm font-heading font-bold text-[var(--color-brand-navy)] mb-1">
              Email Address <span className="text-[var(--color-brand-orange)]">*</span>
            </label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="name@business.com"
              error={Boolean(errors.email)}
              aria-required="true"
              aria-invalid={errors.email ? 'true' : 'false'}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-[var(--color-danger)] font-medium">{errors.email}</p>
            )}
          </div>

          {/* Field 3: Business Name (Optional) */}
          <div>
            <label htmlFor="businessName" className="block text-sm font-heading font-bold text-[var(--color-brand-navy)] mb-1">
              Business Name <span className="text-xs font-normal text-[var(--color-brand-slate)]">(optional)</span>
            </label>
            <Input
              type="text"
              id="businessName"
              name="businessName"
              value={formData.businessName}
              onChange={handleChange}
              placeholder="e.g. Acme Studio or Roast &amp; Brew"
            />
          </div>

          {/* Field 4: Service Required (Required) */}
          <div>
            <label htmlFor="serviceRequired" className="block text-sm font-heading font-bold text-[var(--color-brand-navy)] mb-1">
              Service Required <span className="text-[var(--color-brand-orange)]">*</span>
            </label>
            <select
              id="serviceRequired"
              name="serviceRequired"
              value={formData.serviceRequired}
              onChange={handleChange}
              className="w-full h-10 px-3 text-sm font-sans font-normal bg-white text-[var(--color-brand-navy)] border border-[var(--color-border)] rounded-[var(--radius-md)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-orange)] focus:border-[var(--color-brand-orange)]"
            >
              <option value="Business Website Development">Business Website Development (Starter / 5-Page)</option>
              <option value="Landing Page Development">Landing Page Development (High Conversion)</option>
              <option value="E-commerce Website Development">E-commerce Website Development (Online Store)</option>
              <option value="Custom Web Applications">Custom Web Applications (Portals &amp; Dashboards)</option>
              <option value="Business Automation & Workflows">Business Automation &amp; Workflows</option>
              <option value="AI Integration">AI Integration (LLM &amp; Chatbot Assistants)</option>
              <option value="API Integration">API Integration (Third-Party Services)</option>
              <option value="Other / Custom Scope">Other / Custom Project Scope</option>
            </select>
          </div>

          {/* Two-Column Row: Approximate Budget & Budget Flexibility (Optional) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="approximateBudget" className="block text-sm font-heading font-bold text-[var(--color-brand-navy)] mb-1">
                Approximate Budget <span className="text-xs font-normal text-[var(--color-brand-slate)]">(optional)</span>
              </label>
              <select
                id="approximateBudget"
                name="approximateBudget"
                value={formData.approximateBudget}
                onChange={handleChange}
                className="w-full h-10 px-3 text-sm font-sans font-normal bg-white text-[var(--color-brand-navy)] border border-[var(--color-border)] rounded-[var(--radius-md)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-orange)] focus:border-[var(--color-brand-orange)]"
              >
                <option value="Flexible / Open to discussion">Flexible / Open to discussion</option>
                <option value="Under ₹10,000">Under ₹10,000</option>
                <option value="₹10,000 - ₹20,000">₹10,000 - ₹20,000</option>
                <option value="₹20,000 - ₹35,000">₹20,000 - ₹35,000</option>
                <option value="₹35,000+">₹35,000+</option>
              </select>
            </div>

            <div>
              <label htmlFor="budgetFlexibility" className="block text-sm font-heading font-bold text-[var(--color-brand-navy)] mb-1">
                Is your budget flexible? <span className="text-xs font-normal text-[var(--color-brand-slate)]">(optional)</span>
              </label>
              <select
                id="budgetFlexibility"
                name="budgetFlexibility"
                value={formData.budgetFlexibility}
                onChange={handleChange}
                className="w-full h-10 px-3 text-sm font-sans font-normal bg-white text-[var(--color-brand-navy)] border border-[var(--color-border)] rounded-[var(--radius-md)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-orange)] focus:border-[var(--color-brand-orange)]"
              >
                <option value="Yes, open to discussion">Yes, open to discussion</option>
                <option value="I have a fixed budget">I have a fixed budget</option>
                <option value="Not sure yet">Not sure yet</option>
              </select>
            </div>
          </div>

          {/* Field 7: Tell Me About Your Project (Required) */}
          <div>
            <label htmlFor="projectDescription" className="block text-sm font-heading font-bold text-[var(--color-brand-navy)] mb-1">
              Tell Me About Your Project <span className="text-[var(--color-brand-orange)]">*</span>
            </label>
            <textarea
              id="projectDescription"
              name="projectDescription"
              rows={4}
              value={formData.projectDescription}
              onChange={handleChange}
              placeholder="Describe what your business does, what you want this website or automation to achieve, and any specific features you need."
              aria-required="true"
              aria-invalid={errors.projectDescription ? 'true' : 'false'}
              className={`w-full p-3 text-sm font-sans font-normal bg-white text-[var(--color-brand-navy)] border rounded-[var(--radius-md)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-orange)] focus:border-[var(--color-brand-orange)] ${
                errors.projectDescription ? 'border-[var(--color-danger)]' : 'border-[var(--color-border)]'
              }`}
            />
            {errors.projectDescription && (
              <p className="mt-1 text-xs text-[var(--color-danger)] font-medium">{errors.projectDescription}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <Button
              type="submit"
              variant="primary"
              size="lg"
              disabled={submitting}
              className="w-full justify-center"
              icon={submitting ? RefreshCw : Send}
              iconPosition="right"
            >
              {submitting ? 'Submitting Enquiry...' : 'Send Project Enquiry →'}
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}
