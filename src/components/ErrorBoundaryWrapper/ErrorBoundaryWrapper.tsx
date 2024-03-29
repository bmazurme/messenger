import React from 'react';
import type { PropsWithChildren } from 'react';
import { ErrorBoundary, type FallbackProps } from 'react-error-boundary';
import { Link } from 'react-router-dom';

import Button from '../form-components/Button';

type ErrorBoundaryWrapperProps = PropsWithChildren<unknown>;

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div className="error-boundary">
      <h2 className="error-boundary__title">APP-ERROR</h2>
      <p className="error-boundary__message">{error.message}</p>
      <div className="error-boundary__block">
        Try to
        <Button className="button button_error" onClick={resetErrorBoundary} variant="outline">
          Reload app
        </Button>
        or
        <Button className="link link_home" onClick={resetErrorBoundary} variant="outline" as={Link} to="/">
          Go to homepage
        </Button>
      </div>
    </div>
  );
}

export default function ErrorBoundaryWrapper({
  children,
}: ErrorBoundaryWrapperProps) {
  return (
    <ErrorBoundary onReset={() => console.log('reset')} FallbackComponent={ErrorFallback}>
      {children}
    </ErrorBoundary>
  );
}
