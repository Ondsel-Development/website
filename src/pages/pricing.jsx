import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import MainWrapper from "@site/src/components/MainWrapper";
import styles from "./pricing.styles.module.css"
import clsx from "clsx";

import PricingCardList from "@site/src/components/PricingCardList";

const PRICING_PLANS = [
  {
    name: "Solo",
    slug: "plan-anonymous",
    price: "$0",
    bgColor: "#5E332A",
    cta: "download-now",
    features: [
      { id: "pfeature-core-freecad",
        title: "Full Design Suite",
        status: "completed",
      },
      {
        id: "pfeature-50-models",
        title: "50 models (public)",
        status: "completed",
      },
      {
        id: "pfeature-versions",
        title: "Version History",
        status: "completed",
      },
    ],
  },
    {
    name: "Peer",
    slug: "plan-premium",
    price: "$10 / Month **",
    bgColor: "#3A1F19",
    cta: "get-started",
    features: [
      {
        id: "peverything",
        title: "Everything in Solo",
        status: "completed",
      },
      {
        id: "pfeature-250-models",
        title: "250 private and customizable models",
        status: "completed",
      },
      {
        id: "pfeature-control-download-formats",
        title: "Control what the viewer can download",
        status: "completed",
      },
      {
        id: "pfeature-multiple-workspaces",
        title: "multiple workspaces",
        status: "pending",
      },
    ],
  },
  {
    name: "Enterprise",
    slug: "plan-enterprise",
    price: "Contact Us",
    bgColor: "#241310",
    cta: "contact-us",
    features: [
      {
        id: "peverything-in-peer",
        title: "Everything in Peer",
        status: "completed",
      },
      {
        id: "pfeature-org-workspaces",
        title: "Organization Workspaces",
        status: "pending",
      },
      {
        id: "pfeature-unlimited-private-models",
        title: "Unlimited private models",
        status: "pending",
      },
      {
        id: "pfeature-shareable-workspaces",
        title: "Shareable Workspaces",
        status: "pending",
      },
      {
        id: "pfeature-custom-python-scripts",
        title: "Ability to run custom python scripts",
        status: "pending",
      },
    ],
  },
];

export default function Pricing() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <Layout title="Pricing" description={siteConfig.tagline}>
      <MainWrapper className="bg-grid-pattern px_8">
        <h1 className="text_6xl text_gray text_center">Pricing</h1>
        <h2 className="text_2xl text_center text_gray">
          Put your designs to work everywhere
        </h2>
        <PricingCardList plans={PRICING_PLANS} />

        <div className={clsx("container margin-top--xl margin-bottom--xl", styles.faq)}>
          <div className='row text_gray' style={{justifyContent: 'center', textAlign: 'center'}}>
            <div className='col col--6'>

            <h3 className='text_2xl' style={{borderBottom: 'solid 1px gray', display: 'inline-block'}}>Frequently Asked Questions</h3>

            <details>
            <summary mdxType="summary">What file formats are supported by Ondsel Lens?</summary>
              <p>
                Presently, you can upload FCStd and OBJ files to Ondsel Lens. You can export FCStd, STEP, OBJ, STL. If you are interested in support for more file formats, please <a href='https://ondsel.com/contact/'>contact us</a>.
              </p>
            </details>

            <details>
            <summary mdxType="summary">Are Ondsel ES files 100% compatible with FreeCAD?</summary>
              <p>
                Yes. You can freely open projects created with Ondsel ES in vanilla FreeCAD and vice versa. However, please note that some features used in Ondsel ES might be temporarily or permanently absent from vanilla FreeCAD builds.
              </p>
            </details>

            <details>
            <summary mdxType="summary">What is your policy for submitting your changes back to FreeCAD?</summary>
              <p>
                We collaborate with the FreeCAD community on multiple projects we lead, such as the toponaming issue mitigation, integrated assembly workbench, and UX/UI improvements. These changes are submitted as pull requests once we consider them complete after passing internal and public testing.
              </p>

              <p>
                As an open-core company we are under obligation to keep pre-existing open-source code publicly available. However, as per conditions of <a href='https://www.gnu.org/licenses/old-licenses/lgpl-2.1.en.html'>LGPL2.1</a>, Ondsel has the right to keep some or all added-value changes as part of the Ondsel ES distribution only.
              </p>
            </details>

            <details>
            <summary mdxType="summary">Can I make a project private and visible only to my team and me?</summary>
              <p>Yes, all files created in a shared workspace of an organization are automatically private unless specifically set otherwise.</p>
            </details>

            <details>
            <summary mdxType="summary">Do you have discounts for open hardware projects?</summary>
              <p>Yes, please <a href='mailto:info@ondsel.com'>contact us</a>.</p>
            </details>

            </div>
          </div>
        </div>
      </MainWrapper>
    </Layout>
  );
}
