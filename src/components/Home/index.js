import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomePageFeatures from "@site/src/components/HomePageFeatures";
import TwoColumnInfo from "@site/src/components/TwoColumnInfo";

import styles from "./index.module.css";

import "@site/src/fonts/Rubik-VariableFont_wght.ttf";

function HomePageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header
      className={clsx("hero hero--primary bg-grid-pattern", styles.heroBanner)}
    >
      <div className="container">
        <div className="flex hero_layout text_left">
          <div className="text_hero_img">
            <p className="hero__subtitle text_gray text_hero_img font_bold">
              {siteConfig.tagline}
            </p>
            <p className="colorful_layout font_bold">everywhere.</p>
          </div>
          <img src="/img/ondsel_model.png" alt="Ondsel Logo" />
        </div>

        <div className="text_center text_hero m_70">
          <p>
            Access and visualize your FreeCAD models anywhere with our storage and collaboration tool.
          </p>
        </div>

        <div className={styles.buttons}>
          <Link
            className="button rounded_none button--secondary button--lg text_hero"
            to="/about"
          >
            About Ondsel...
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home({ recentPosts }) {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`Put your designs to work ... everywhere ... ${siteConfig.title}`}
      description={siteConfig.tagline}
    >
      <HomePageHeader />
      <main>
        <HomePageFeatures />
        <TwoColumnInfo data={recentPosts} />
      </main>
    </Layout>
  );
}
