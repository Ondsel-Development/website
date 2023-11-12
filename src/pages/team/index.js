import React from "react";

import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import MainWrapper from "@site/src/components/MainWrapper";

import Pat from "./_pat-david.mdx"


export default function Team() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

 return (
    <Layout title="Team" description={siteConfig.tagline}>
      <MainWrapper className="container">
        <h1 className="text_6xl text_center">Who We Are</h1>
          <section className="col">
            <Pat/>
            <Pat/>
          </section>
      </MainWrapper>
    </Layout>
  );
}
