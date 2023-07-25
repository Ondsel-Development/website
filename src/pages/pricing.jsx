import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import MainWrapper from "@site/src/components/MainWrapper";
import PricingCardList from "@site/src/components/PricingCardList";

const PRICING_PLANS = [
  {
    name: "Community",
    slug: "plan-anonymous",
    price: "$0",
    bgColor: "#5E332A",
    cta: "notify",
    features: [
      { id: "pfeature-core-freecad",
        title: "Full FreeCAD Application",
        status: "completed",
      },
      {
        id: "pfeature-local-workspaces",
        title: "Local Workspaces",
        status: "completed",
      },
      {
        id: "pfeature-lens",
        title: "Ondsel Lens Addon",
        status: "completed",
      },
      {
        id: "pfeature-50-models",
        title: "50 models (public)",
        status: "completed",
      },
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
        id: "pfeature-250-models",
        title: "250 models",
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
        id: "pfeature-multiple-workspaces",
        title: "multiple shareable workspaces",
        status: "pending",
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
        id: "pfeature-org-workspaces",
        title: "Organizational Workspaces",
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