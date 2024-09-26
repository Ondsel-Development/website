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
      <MainWrapper className="container">
        <h1 className="text_6xl text_center">Contact Us</h1>
        {/* <h2 className="text_2xl text_center text_gray"> */}
        {/*   Sign up to be invited to the beta program */}
        {/* </h2> */}
        {/* <ContactFormSection /> */}

        <div class='row' style={{justifyContent: 'center', textAlign: 'left'}}>
          <div class='col col--8'>

            <h2>Business inquiries</h2>

            <p>
              If you have questions about using Ondsel ES and Lens in a professional
              environment, need assistance, or just want to provide feedback and tell
              us how we could improve our products and services for your industry and
              your business, please email
              us: <a href='mailto:info@ondsel.com'>info@ondsel.com</a>.
            </p>

            <p>
              For regular user support, please join our <a href="https://discord.gg/7jmzezyyfP">Discord server</a>.
            </p>

            <h2>Address</h2>
            <address>
              Ondsel, Inc.<br/>
              548 Market St.<br/>
              PMB 38682,<br/>
              San Francisco, California 94104
            </address>

          </div>
        </div>
        
      </MainWrapper>
    </Layout>
  );
}
