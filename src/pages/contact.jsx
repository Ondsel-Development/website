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

            <h2>Chat</h2>
            <p>
            To chat with Ondsel developers and community members publicly, please join the <a href='https://discord.gg/7jmzezyyfP'>Discord server</a>.
            </p>

            <h2>Social</h2>
            <p>
              You can follow us on <a href='https://twitter.com/ondsel'>X (Twitter)</a> and <a href='https://www.facebook.com/ondsel'>Facebook</a>.
            </p>

            <h2>Private Requests</h2>
            <p>
            For private requests, please email us at <a href='mailto:info@ondsel.com'>info@ondsel.com</a>.
            </p>

            <h2>Physical Address</h2>
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
