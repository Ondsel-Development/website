import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import TwoColumnInfo from '@site/src/components/TwoColumnInfo';

import styles from './index.module.css';

import '@site/src/fonts/Rubik-VariableFont_wght.ttf';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary backimg', styles.heroBanner)}>
      <div className="container">
        <div className='flex hero_layout text_left'> 
          <div className='text_hero_img'>
            <p className="hero__subtitle c_grey text_hero_img">{siteConfig.tagline}</p>
            <p className='colorful_layout'>everywhere.</p>
          </div>
          <img src="/img/ondsel_model.png" alt="Ondsel Logo" />   
        </div>

        <div className='text_center text_hero m70'>
          <p>Ondsel is an open-core company built around the awesome FreeCAD Project.</p>
        </div>
        
        <div className={styles.buttons}>
          <Link
            className="button radius_none button--secondary button--lg text_hero"
            to="/about">
           About Ondsel...
          </Link>
        </div> 
        
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Put your designs to work...everywhere ..  ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <TwoColumnInfo />
      </main>
    </Layout>
  );
}

