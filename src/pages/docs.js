import React, { useEffect } from 'react';

function DocsPage() {
  useEffect(() => {
    // Redirect to the specific documentation page
    window.location.href = '/docs/Intro';
  }, []);

  // This component will only be rendered briefly before the redirect happens
  return (
    <div>
      <h1>Documentation</h1>
      <p>
        Redirecting to the documentation...
      </p>
    </div>
  );
}

export default DocsPage;

