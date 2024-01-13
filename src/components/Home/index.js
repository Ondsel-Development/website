import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomePageFeatures from "@site/src/components/HomePageFeatures";
import TwoColumnInfo from "@site/src/components/TwoColumnInfo";
import YouTube from "@site/src/components/YouTube";

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
            Collaborate on your 3D CAD designs with open-source tools.
          </p>
        </div>

        <div className={styles.buttons}>
          <Link
            className="button rounded_none button--secondary button--lg text_hero"
            to="/download"
          >
            Download
          </Link>
        </div>
      </div>
    </header>
  );
}

function NewHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
      <header className={clsx("hero hero--primary bg-grid-pattern", styles.heroBanner)}>
        <div className='container'>
          <div className='row' style={{padding: '5rem 0'}}>

            <div className='col col-6' style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
              <p className='text_hero_img' style={{textAlign: 'left', lineHeight: '1.2'}}>
                Collaborate with open-source engineering tools
              </p>
              <div className={styles.buttons} style={{marginTop: '1rem', justifyContent: 'start'}}>
                <Link
                  className="button button--secondary button--lg text_hero"
                  to="/download"
                >
                  Download
                </Link>
              </div>
            </div>

            <div className='col col-6'>
              <YouTube v='MI2JMm__bkM' style={{borderRadius: '1.5rem'}}/>
            </div>

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
      {/* <HomePageHeader /> */}
      <NewHeader/>

      <section className={clsx("hero hero--primary ", styles.heroBanner)} style={{background: 'white', color: 'black'}}>
        <div className='container'>
          <div className='row' style={{padding: '5rem 0'}}>

            <div className='col col-6' style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
              <p className='text_hero_img' style={{textAlign: 'left', lineHeight: '1.2'}}>
                Access and visualize your 3D CAD models anywhere
              </p>
              <div className={styles.buttons} style={{marginTop: '1rem', justifyContent: 'start'}}>
                <Link
                  className="button button--primary button--lg text_hero"
                  to="/download"
                >
                  Sign Up
                </Link>
              </div>
            </div>

            <div className='col col-6'>
              <img src='/img/ondsel-access.png' className='shadow--md' style={{borderRadius: '1.5rem', border: 'solid 1px gray'}}/>
            </div>

          </div>
        </div>
      </section>

      <main>
        {/* <HomePageFeatures /> */}
        <TwoColumnInfo data={recentPosts} />
      </main>
    </Layout>
  );
}
