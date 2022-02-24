export { PageWrapper };

import React from "react";
import { PageContextProvider } from "./usePageContext";

function PageWrapper({ pageContext, children }) {
  const PageShell = pageContext.exportsPageShell || Passthrough;
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <PageShell>{children}</PageShell>
      </PageContextProvider>
    </React.StrictMode>
  );
}

function Passthrough({ children }) {
  return <>{children}</>;
}
