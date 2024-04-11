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

        <div id='test' className={styles.buttons}>
          <Link
            className="button rounded_none button--secondary button--lg text_hero"
            to="https://lens.ondsel.com/signup/"
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

            <div className='col col--6' style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
              <p className='text_hero_img' style={{textAlign: 'left', lineHeight: '1.2'}}>
                Collaborate with open-source engineering tools
              </p>
              <div className={styles.buttons} style={{marginTop: '1rem', justifyContent: 'start', marginBottom: '2rem'}}>

                <Link
                  className="button button--secondary button--lg text_hero"
                  to="https://lens.ondsel.com/download-and-explore"
                  style={{ backgroundColor: '#e6421b', color: 'white' }}
                >
                  Download
                </Link>

                <Link
                  className="button button--primary button--lg text_hero margin-left--md"
                  to="/blog/introducing-ondsel-es/"
                  style={{borderColor: 'white', fontWeight: 'normal'}}
                >What's New</Link>

              </div>
            </div>

            <div className='col col--6'>
              <YouTube v='x2F1A0MYhMk' style={{borderRadius: '1.5rem'}}/>
            </div>

          </div>
        </div>
    </header>
  );
}

function BlogSection({ title, url, data }) {
  console.log( data );
  return (
    <section className='hero hero--primary bg-grid-pattern'>
      <div className='container'>
        <div className='row' style={{justifyContent: ''}}>
          <div className='col'>

            <h3 className='text_hero_img margin-bottom--lg' style={{fontWeight: '400', fontSize: '3rem'}}>
              <Link className="text_gray font_bold text-3xl" to={'/blog'}>
              Blog
              </Link>
            </h3>

            <div>
              {data.slice(0, 5).map((item, index) => (
                <Link
                  key={index}
                  to={`/blog/${item.content.frontMatter.slug}`}
                  className="text_gray"
                  style={{fontSize: '2rem'}}
                >
                  <p
                    className='margin-bottom--lg'
                    style={{lineHeight: '1.2'}}>{item.content.frontMatter.title}</p>
                </Link>
              ))}
            </div>

          </div>
        </div>
    </div>
    </section>
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


      {/* Section for lens signup */}
      {/* ======================= */}
      <section className={clsx("hero hero--primary bg-grid-pattern", styles.heroBanner)} style={{color: 'black', filter: 'invert(1)'}}>
        <div className='container'>
          <div className='row' style={{padding: '5rem 0', filter: 'invert(1)'}}>

            <div className='col col--6' style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
              <p className='text_hero_img' style={{textAlign: 'left', lineHeight: '1.2'}}>
                Access and visualize your 3D CAD models anywhere
              </p>
              <div className={styles.buttons} style={{marginTop: '1rem', justifyContent: 'start', marginBottom: '2rem'}}>
                <Link
                  className="button button--primary button--lg text_hero"
                  to="https://lens.ondsel.com/signup"
                >
                  Sign Up
                </Link>
              </div>
            </div>

            <div className='col col--6'>
              <iframe className='shadow--md' style={{borderRadius: '1.5rem', border: 'solid 1px gray', minHeight: '300px'}} width="100%" height="100%" src="https://lens.ondsel.com/share/65af04b361821ca0c25d2afc" title="Ondsel"></iframe>
            </div>

          </div>
        </div>
      </section>


      <BlogSection data={recentPosts} />


      {/* <main> */}
        {/* <HomePageFeatures /> */}
        {/* <TwoColumnInfo data={recentPosts} /> */}
      {/* </main> */}
    </Layout>
  );
}
