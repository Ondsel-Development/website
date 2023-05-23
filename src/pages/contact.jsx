import React from "react";

import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import MainWrapper from "@site/src/components/MainWrapper";
import ContactFormSection from "@site/src/components/ContactFormSection";

export default function Contact() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <Layout title="Contact" description={siteConfig.tagline}>
      <MainWrapper className="bg-grid-pattern px_8">
        <h1 className="text_6xl text_gray text_center">Join the waitlist</h1>
        <h2 className="text_2xl text_center text_gray">
          Sign up to be invited to the beta program
        </h2>

        <ContactFormSection />
      </MainWrapper>
    </Layout>
  );
}
