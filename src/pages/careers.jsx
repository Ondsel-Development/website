import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import MainWrapper from "@site/src/components/MainWrapper";
import { useColorMode } from "@docusaurus/theme-common";
import { useEffect } from "react";

function JobBoardWrapper() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout title="Careers" description={siteConfig.tagline}>
      <MainWrapper>
        <h1 className="text_6xl text_center">Careers</h1>
        <div class='row' style={{justifyContent: 'center', textAlign: 'center'}}>
        <div class='col col--8'>
          <p>
            Currently, we have no job openings.
          </p>
        </div>  
        </div>
        {/* <JobBoard /> */}
      </MainWrapper>
    </Layout>
  );
}

function JobBoard() {
  const { colorMode, setColorMode } = useColorMode();
  if (colorMode !== "light") {
    setColorMode("light");
  }
  useEffect(() => {
    Grnhse.Iframe.load();
  }, []);
  return <div id="grnhse_app"></div>;
}

export default JobBoardWrapper;
