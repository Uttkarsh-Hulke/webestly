import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Accordion({ items = [], allowMultiple = false, className = "" }) {
  const [openIndexes, setOpenIndexes] = useState([0]); // Open first by default

  const toggleIndex = (index) => {
    if (allowMultiple) {
      setOpenIndexes((prev) =>
        prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
      );
    } else {
      setOpenIndexes((prev) => (prev.includes(index) ? [] : [index]));
    }
  };

  return (
    <div className={`space-y-3 ${className}`}>
      {items.map((item, index) => {
        const isOpen = openIndexes.includes(index);
        const buttonId = `faq-btn-${index}`;
        const panelId = `faq-panel-${index}`;

        return (
          <div
            key={index}
            className={`border rounded-[var(--radius-lg)] transition-colors duration-150 bg-[var(--color-bg)] overflow-hidden ${
              isOpen ? 'border-[var(--color-primary)]' : 'border-[var(--color-border)] hover:border-[var(--color-muted)]'
            }`}
          >
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggleIndex(index)}
                className="w-full flex items-center justify-between gap-4 p-6 text-left font-sans font-medium text-base text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--color-primary)]"
              >
                <span>{item.question}</span>
                <span
                  className={`shrink-0 w-6 h-6 rounded-[var(--radius-sm)] flex items-center justify-center transition-transform duration-150 ${
                    isOpen ? 'bg-[var(--color-surface)] text-[var(--color-primary)] rotate-180' : 'bg-[var(--color-surface)] text-[var(--color-muted)]'
                  }`}
                  aria-hidden="true"
                >
                  <ChevronDown className="w-4 h-4" />
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`px-6 pb-6 text-sm text-[var(--color-muted)] leading-relaxed border-t border-[var(--color-border)] pt-4 ${
                isOpen ? 'block' : 'hidden'
              }`}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
