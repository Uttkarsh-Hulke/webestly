import React from 'react';
import { AlertCircle, RefreshCw, Home } from 'lucide-react';
import Button from './Button';

/**
 * Accessible Error Boundary component to catch rendering errors gracefully
 */
export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    if (typeof console !== 'undefined' && console.error) {
      console.error('WebEstly Caught UI Error:', error, errorInfo);
    }
  }

  handleReload = () => {
    if (typeof window !== 'undefined') {
      window.location.reload();
    }
  };

  render() {
    if (this.state.hasError) {
      return (
        <div 
          role="alert" 
          aria-live="assertive"
          className="min-h-[60vh] flex items-center justify-center p-6"
        >
          <div className="max-w-md w-full bg-[var(--color-bg)] rounded-[var(--radius-lg)] border border-[var(--color-border)] p-6 space-y-4 shadow-[var(--shadow-sm)]">
            <div className="w-12 h-12 rounded-[var(--radius-md)] bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-danger)] flex items-center justify-center">
              <AlertCircle className="w-6 h-6" />
            </div>
            <h2 className="font-semibold text-xl text-[var(--color-text)]">
              Something went wrong
            </h2>
            <p className="text-sm text-[var(--color-muted)] leading-relaxed">
              We encountered an unexpected display error while loading this section. You can refresh the view or navigate back to the homepage.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Button
                onClick={this.handleReload}
                variant="primary"
                size="md"
                icon={RefreshCw}
              >
                Reload Page
              </Button>
              <Button
                to="/"
                variant="secondary"
                size="md"
                icon={Home}
                iconPosition="left"
              >
                Return Home
              </Button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
