import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import MainWrapper from "@site/src/components/MainWrapper";
import PricingCardList from "@site/src/components/PricingCardList";

const PRICING_PLANS = [
  {
    name: "Anonymous",
    slug: "plan-anonymous",
    price: "$0",
    bgColor: "#5E332A",
    cta: "notify",
    features: [
      {
        id: "pfeature-local-workspaces",
        title: "Local Workspaces",
        status: "completed",
      },
      {
        id: "pfeature-upload-visualize",
        title: "Explore public models",
        status: "completed",
      },
      {
        id: "pfeature-download",
        title: "Download in original format",
        status: "completed",
      },
      // {
      //   id: "pfeature-disappear-after-24h",
      //   title: "Disappear after 24 hours.",
      //   status: "completed",
      // },
      {
        id: "pfeature-lens",
        title: "Ondsel Lens (Online viewer for 3D models)",
        status: "pending",
      },
      // {
      //   id: "pfeature-upload-webpage",
      //   title: "Upload from webpage",
      //   status: "completed",
      // },
    ],
  },
  {
    name: "Authenticated",
    slug: "plan-authenitcated",
    price: "$0",
    bgColor: "#4F2A22",
    cta: "signup",
    features: [
      {
        id: "pfeature-5-models",
        title: "5 models (public)",
        status: "completed",
      },
      // {
      //   id: "pfeature-public-view",
      //   title: "Publicly viewable",
      //   status: "completed",
      // },
      {
        id: "pfeature-reader-controllable-param",
        title: "Customize Model in Browser",
        status: "completed",
      },
      {
        id: "pfeature-upload-webpage-workbench",
        title: "Upload from webpage or workbench",
        status: "completed",
      },
      {
        id: "pfeature-download-formats",
        title: "Download in alternate formats",
        status: "completed",
      },
      {
        id: "pfeature-ray-trace",
        title: "Ray traced image rendering",
        status: "pending",
      },
      // {
      //   id: "pfeature-path-setupbook",
      //   title: "Path Setupbook",
      //   status: "completed",
      // },
      {
        id: "pfeature-techdraw-pages",
        title: "Techdraw pages",
        status: "pending",
      },
      // {
      //   id: "pfeature-model-catalog",
      //   title: "Model catalog",
      //   status: "completed",
      // },
    ],
  },
  {
    name: "Premium",
    slug: "plan-premium",
    price: "$10 / Month",
    bgColor: "#3A1F19",
    cta: "buy-now",
    features: [
      {
        id: "pfeature-50-models",
        title: "50 models",
        status: "completed",
      },
      {
        id: "pfeature-private-models",
        title: "Private models",
        status: "completed",
      },
      {
        id: "pfeature-customizable-models",
        title: "Customizable models",
        status: "completed",
      },
      {
        id: "pfeature-control-download-formats",
        title: "Control download formats",
        status: "completed",
      },
      {
        id: "pfeature-versions",
        title: "Version History",
        status: "pending",
      },
      {
        id: "pfeature-model-annotation",
        title: "Model annotation",
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
        id: "pfeature-dedicated-server",
        title: "Dedicated server",
        status: "pending",
      },
      {
        id: "pfeature-unlimited-private-models",
        title: "Unlimited private models",
        status: "pending",
      },
      {
        id: "pfeature-multiple-workspaces",
        title: "Shared Workspaces",
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
      </MainWrapper>
    </Layout>
  );
}
