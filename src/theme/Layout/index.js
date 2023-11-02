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
    const search = window.document.getElementById("search_input_react");
    search.onchange = (e) => {
      if (searchTrackingTimeout) {
        clearTimeout(searchTrackingTimeout);
      }
      searchTrackingTimeout = setTimeout(() => {
        window?.analytics?.track("docsSearch", {
          searchQuery: e.target.value,
        });
      }, 1000);
    }
  }, []);

  return (
    <>
      <Layout {...props} />
    </>
  );
}
