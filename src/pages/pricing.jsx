import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import MainWrapper from "@site/src/components/MainWrapper";
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
      </MainWrapper>
    </Layout>
  );
}
