import React from 'react';

type MyProps = {
  addToast;
};

class ErrorBoundary extends React.Component<MyProps> {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    this.props.addToast(
      `error: ${JSON.stringify(error)} - errorInfo: ${JSON.stringify(errorInfo.componentStack)}`,
      { appearance: 'error' },
    );
  }

  render() {
    return this.props.children;
  }
}

export default ErrorBoundary;
