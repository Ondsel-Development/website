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
    img: "/img/bg-pricing-card-1.png",
    cta: "signup",
    features: [
      {
        id: "pfeature-upload-visualize",
        title: "Upload and visualize",
        status: "completed",
      },
      {
        id: "pfeature-reader-controllable-param",
        title: "Reader controllable parameters",
        status: "completed",
      },
      {
        id: "pfeature-download-formats",
        title: "Download in different formats",
        status: "completed",
      },
      {
        id: "pfeature-disappear-after-24h",
        title: "Disappear after 24 hours.",
        status: "completed",
      },
      {
        id: "pfeature-model-other-sources",
        title: "Models from other sources",
        status: "completed",
      },
      {
        id: "pfeature-upload-webpage",
        title: "Upload from webpage",
        status: "pending",
      },
    ],
  },
  {
    name: "Free",
    slug: "plan-free",
    description: "(authenticated)",
    price: "$0",
    img: "/img/bg-pricing-card-2.png",
    cta: "signup",
    features: [
      {
        id: "pfeature-5-models",
        title: "5 models",
        status: "completed",
      },
      {
        id: "pfeature-public-view",
        title: "Publicly viewable",
        status: "completed",
      },
      {
        id: "pfeature-ray-trace",
        title: "Ray trace image generation",
        status: "completed",
      },
      {
        id: "pfeature-path-setupbook",
        title: "Path Setupbook",
        status: "completed",
      },
      {
        id: "pfeature-techdraw-pages",
        title: "Techdraw pages",
        status: "completed",
      },
      {
        id: "pfeature-upload-webpage-workbench",
        title: "Upload from webpage or workbench",
        status: "completed",
      },
      {
        id: "pfeature-model-catalog",
        title: "Model catalog",
        status: "completed",
      },
    ],
  },
  {
    name: "Premium",
    slug: "plan-premium",
    price: "$10 Month",
    img: "/img/bg-pricing-card-3.png",
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
        status: "pending",
      },
      {
        id: "pfeature-control-download-formats",
        title: "Control download formats",
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
    img: "/img/bg-pricing-card-4.png",
    cta: "contact-us",
    features: [
      {
        id: "pfeature-dedicated-server",
        title: "Dedicated server",
        status: "completed",
      },
      {
        id: "pfeature-unlimited-private-models",
        title: "Unlimited private models",
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
      <MainWrapper className="bg-grid-pattern">
        <h1 className="text_8xl text_gray text_center">Pricing</h1>
        <h2 className="text_5xl text_center text_gray">
          Put your designs to work everywhere
        </h2>
        <PricingCardList plans={PRICING_PLANS} />
      </MainWrapper>
    </Layout>
  );
}
