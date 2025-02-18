import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
    
    // Report to analytics
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', 'error', {
        event_category: 'Error Boundary',
        event_label: error.message,
        value: 1,
        error_info: errorInfo.componentStack
      });
    }
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-black">
          <div className="max-w-2xl mx-auto px-4 py-8 text-center">
            <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#6F00FF] via-[#00F3FF] to-[#39FF14] bg-clip-text text-transparent">
              Something went wrong
            </h1>
            <p className="text-[#00F3FF] mb-8">
              We apologize for the inconvenience. Please try refreshing the page or contact support if the problem persists.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 rounded-md bg-[#6F00FF]/20 text-[#6F00FF] border border-[#6F00FF] hover:bg-[#6F00FF]/30 transition-all duration-300"
            >
              Refresh Page
            </button>
          </div>

          {/* Schema markup for error page */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Error Page - 12Stone Designs",
              "description": "Something went wrong. Please try refreshing the page or contact support.",
              "publisher": {
                "@type": "Organization",
                "name": "12Stone Designs"
              }
            })}
          </script>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
