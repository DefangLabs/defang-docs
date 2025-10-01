import { useLocation } from "@docusaurus/router";
import Layout from "@theme-original/Layout";
import React, { useEffect } from "react";

let searchTrackingTimeout;

export default function LayoutWrapper(props) {
  const location = useLocation();
  useEffect(() => {
    window?.analytics?.page();
  }, [location]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    const attachSearchHandler = () => {
      const search =
        window.document.getElementById("docsearch-input") ??
        window.document.getElementById("search_input_react");

      if (!search) {
        return undefined;
      }

      const handleChange = (event) => {
        if (searchTrackingTimeout) {
          clearTimeout(searchTrackingTimeout);
        }
        searchTrackingTimeout = setTimeout(() => {
          window?.analytics?.track("docsSearch", {
            searchQuery: event.target.value,
          });
        }, 1000);
      };

      search.addEventListener("change", handleChange);

      return () => {
        search.removeEventListener("change", handleChange);
        if (searchTrackingTimeout) {
          clearTimeout(searchTrackingTimeout);
        }
      };
    };

    let cleanupHandler = attachSearchHandler();

    if (cleanupHandler) {
      return cleanupHandler;
    }

    const observer = new MutationObserver(() => {
      if (!cleanupHandler) {
        cleanupHandler = attachSearchHandler();
      }
      if (cleanupHandler) {
        observer.disconnect();
      }
    });

    observer.observe(window.document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      cleanupHandler?.();
    };
  }, []);

  return (
    <>
      <Layout {...props} />
    </>
  );
}
