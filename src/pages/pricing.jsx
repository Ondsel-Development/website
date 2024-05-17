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
        title: "Full 3D CAD design suite for the desktop, works offline",
        status: "completed",
      },
      {
        id: "pfeature-1gb-disk-space",
        title: "Upload up to 1GB to the online vault, open models only",
        status: "completed",
      },
      {
        id: "pfeature-versions",
        title: "Version history",
        status: "completed",
      },
      {
        id: "pfeature-multiple-workspaces",
        title: "Multiple open workspaces",
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
        id: "pfeature-10gb-disk-space",
        title: "Upload up to 10GB to the online vault, 100 compute minutes",
        status: "completed",
      },
      {
        id: "pfeature-open-organizations",
        title: "Open organizations for team management",
        status: "completed",
      },
      {
        id: "pfeature-public-workspaces",
        title: "Private workspaces and models for personal work",
        status: "completed",
      },
      {
        id: "pfeature-control-download-formats",
        title: "Control what viewers can download from the vault",
        status: "completed",
      },
    ],
  },
  {
    name: "Enterprise",
    slug: "plan-enterprise",
    price: "$200 + $10 / User / Month **",
    bgColor: "#241310",
    cta: "contact-us",
    features: [
      {
        id: "peverything-in-peer",
        title: "Everything in Peer",
        status: "completed",
      },
      {
        id: "pfeature-unlimited-private-models",
        title: "Upload up to 50GB to the online vault, 500 compute minutes",
        status: "completed",
      },
      {
        id: "pfeature-open-organizations",
        title: "Private and open organizations for team management",
        status: "completed",
      },
      {
        id: "pfeature-org-workspaces",
        title: "Organization workspaces",
        status: "completed",
      },
      {
        id: "pfeature-outside-collaborators",
        title: "Outside collaborators",
        status: "pending",
      },
      {
        id: "pfeature-custom-python-scripts",
        title: "Ability to run custom Python scripts",
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
      <MainWrapper className="bg-grid-pattern-light px_8">
        <h1 className="text_6xl text_center">Pricing</h1>
        <h2 className="text_2xl text_center ">
          Put your designs to work everywhere
        </h2>
        <PricingCardList plans={PRICING_PLANS} />

        <div className={clsx("container margin-top--xl margin-bottom--xl", styles.faq)}>
          <div className='row ' style={{justifyContent: 'center', textAlign: 'center'}}>
            <div className='col col--6'>

            <h3 className='text_2xl' style={{borderBottom: 'solid 1px gray', display: 'inline-block'}}>Frequently Asked Questions</h3>

            <details>
            <summary mdxType="summary">Who is behind Ondsel Inc. and what is their relation to FreeCAD?</summary>
              <p>
                Ondsel Inc. was founded by Brad Collette, a long-time contributor
                to FreeCAD, author of several books on FreeCAD, and maintainer of the
                Path (CAM) workbench. The company also employs several other coding
                and non-coding contributors to FreeCAD and its ecosystem.
              </p>
            </details>

            <details>
            <summary mdxType="summary">What is the difference between FreeCAD and Ondsel ES?</summary>
              <p>
                Ondsel Engineering Suite (ES) provides collaboration features, new tools and workflow improvements, as well as user experience polish currently unavailable in vanilla FreeCAD.
              </p>
              <p>
                The collaboration part is <a href="https://lens.ondsel.com/signup">Ondsel Lens</a>, an online vaulting service for 3D CAD projects. You can store files privately and create share links when you need to make them publicly visible. It is integrated into the modified version of FreeCAD using an <a href="https://github.com/Ondsel-Development/Ondsel-Lens">open-source addon</a>. This feature is optional, you can use Ondsel ES offline.
              </p>
              <p>
                Ondsel ES also provides early access to the new integrated assembly workbench scheduled to be included in FreeCAD 1.0. Additionally, Ondsel ES ships with various Sketcher improvements: easier dimensioning, simplified constraining, tool settings, and new transformation tools.
              </p>
            </details>

            <details>
            <summary mdxType="summary">What license is Ondsel ES available under?</summary>
              <p>
                LGPLv2.1, same as regular FreeCAD. This means Ondsel (or anybody else) cannot close pre-existing parts of FreeCAD code, but allows adding extra features that could depend on someone else's proprietary code.
              </p>
            </details>

            <details>
            <summary mdxType="summary">Can I use Ondsel ES for commercial projects?</summary>
              <p>
                Yes. As Ondsel ES is available under the terms of LGPLv2.1, you are free to use it for any purpose.
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
            <summary mdxType="summary">Are Ondsel ES files 100% compatible with FreeCAD?</summary>
              <p>
                Yes. You can freely open projects created with Ondsel ES in vanilla FreeCAD and vice versa. However, please note that some features used in Ondsel ES might be temporarily or permanently absent from regular FreeCAD builds.
              </p>
            </details>

            <details>
            <summary mdxType="summary">What file formats are supported by Ondsel Lens?</summary>
              <p>
                Presently, you can upload FCStd and OBJ files to Ondsel Lens. You can export FCStd, STEP, OBJ, STL. If you are interested in support for more file formats, please <a href='https://ondsel.com/contact/'>contact us</a>.
              </p>
            </details>

            {/* 
            <details>
            <summary mdxType="summary">Can I make a project private and visible only to my team and me?</summary>
              <p>Yes, all files created in a workspace of an organization are automatically private unless specifically set otherwise.</p>
            </details>
            */}

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
