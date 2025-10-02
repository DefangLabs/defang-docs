import { useLocation } from "@docusaurus/router";
import Layout from "@theme-original/Layout";
import React, { useEffect } from "react";

const debounce = (fn, delay) => {
  let timeoutId;
  const debounced = (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
  debounced.cancel = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }
  };
  return debounced;
};

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

      const trackSearch = debounce((value) => {
        window?.analytics?.track("docsSearch", {
          searchQuery: value,
        });
      }, 1000);

      const handleChange = (event) => {
        trackSearch(event.target.value);
      };

      search.addEventListener("change", handleChange);

      return () => {
        search.removeEventListener("change", handleChange);
        trackSearch.cancel();
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

