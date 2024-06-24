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
                  to="/blog/ondsel-es-2024-2/"
                  style={{borderColor: 'white', fontWeight: 'normal'}}
                >What's New</Link>

              </div>
            </div>

            <div className='col col--6'>
              <YouTube v='LNd_elOE9Cg' style={{borderRadius: '1.5rem'}}/>
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

      {/* Section for PDM and Lens signup */}
      {/* ======================= */}

      <section className={clsx("hero hero--primary bg-grid-pattern", styles.heroBanner)} style={{color: 'black', filter: 'invert(1)'}}>
        <div className='container'>
          <div className='row' style={{padding: '5rem 0', filter: 'invert(1)'}}>

            <div className='col col--6' style={{filter: 'invert(0)'}}>
              <iframe className='shadow--md' style={{borderRadius: '1.5rem', border: 'solid 1px gray', minHeight: '300px'}} width="100%" height="100%" src="https://lens.ondsel.com/share/65e5746c725cff308d4de802" title="Ondsel"></iframe>
            </div>

            <div className='col col--6' style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
              <h3 className='text_hero_img margin-bottom--lg' style={{fontWeight: '400', fontSize: '3rem', textAlign: 'left'}}>
                Collaborate on product design
              </h3>
              <p style={{textAlign: 'left', lineHeight: '1.2'}}>
                 Manage development of complex projects with our cloud PDM system. Organize projects with workspaces,
                 invite contributors, use versions to iterate on design.
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

          </div>
        </div>
      </section>

      {/* Section for design */}
      {/* ======================= */}

      <section className={clsx("hero hero--primary bg-grid-pattern", styles.heroBanner)} style={{color: 'black', filter: 'invert(0)'}}>
        <div className='container'>
          <div className='row' style={{padding: '5rem 0', filter: 'invert(1)'}}>

            <div className='col col--6' style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
              <h3 className='text_hero_img margin-bottom--lg' style={{fontWeight: '400', fontSize: '3rem', textAlign: 'left'}}>
                Design products from scratch
              </h3>
              <p style={{textAlign: 'left', lineHeight: '1.2'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              {/* <div className={styles.buttons} style={{marginTop: '1rem', justifyContent: 'start', marginBottom: '2rem'}}> */}
              {/*   <Link */}
              {/*     className="button button--primary button--lg text_hero" */}
              {/*     to="https://lens.ondsel.com/signup" */}
              {/*   > */}
              {/*     Sign Up */}
              {/*   </Link> */}
              {/* </div> */}
            </div>

            <div className='col col--6' style={{filter: 'invert(1)'}}>
              <img src="/img/home-design.webp" title="Design products from scratch" />
            </div>

          </div>
        </div>
      </section>

      {/* Section for assemblies */}
      {/* ======================= */}

      <section className={clsx("hero hero--primary bg-grid-pattern", styles.heroBanner)} style={{color: 'black', filter: 'invert(1)'}}>
        <div className='container'>
          <div className='row' style={{padding: '5rem 0', filter: 'invert(1)'}}>

            <div className='col col--6' style={{filter: 'invert(0)'}}>
              <img src="/img/home-assembly.webp" title=" Create and test assemblies" />
            </div>

            <div className='col col--6' style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
              <h3 className='text_hero_img margin-bottom--lg' style={{fontWeight: '400', fontSize: '3rem', textAlign: 'left'}}>
                Create and test assemblies
              </h3>
              <p style={{textAlign: 'left', lineHeight: '1.2'}}>
                Build complex kinematic assemblies from multiple parts: link components, connect them with joints,
                test the motion by dragging parts, and create multiple exploded views.
              </p>
              {/* <div className={styles.buttons} style={{marginTop: '1rem', justifyContent: 'start', marginBottom: '2rem'}}> */}
              {/*   <Link */}
              {/*     className="button button--primary button--lg text_hero" */}
              {/*     to="https://lens.ondsel.com/signup" */}
              {/*   > */}
              {/*     Sign Up */}
              {/*   </Link> */}
              {/* </div> */}
            </div>

          </div>
        </div>
      </section>

      {/* Section for FEA */}
      {/* ======================= */}

      <section className={clsx("hero hero--primary bg-grid-pattern", styles.heroBanner)} style={{color: 'black', filter: 'invert(0)'}}>
        <div className='container'>
          <div className='row' style={{padding: '5rem 0', filter: 'invert(1)'}}>

            <div className='col col--6' style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
              <h3 className='text_hero_img margin-bottom--lg' style={{fontWeight: '400', fontSize: '3rem', textAlign: 'left'}}>
                Stress-test your models with with finite element analysis
              </h3>
              <p style={{textAlign: 'left', lineHeight: '1.2'}}>
                Solve complex structural engineering problems: find out if parts will fail
                due to overheating or structural integrity issues, withstand vibration, 
              </p>
              {/* <div className={styles.buttons} style={{marginTop: '1rem', justifyContent: 'start', marginBottom: '2rem'}}> */}
              {/*   <Link */}
              {/*     className="button button--primary button--lg text_hero" */}
              {/*     to="https://lens.ondsel.com/signup" */}
              {/*   > */}
              {/*     Sign Up */}
              {/*   </Link> */}
              {/* </div> */}
            </div>

            <div className='col col--6' style={{filter: 'invert(1)'}}>
              <img src="/img/home-fea.webp" title="Finite element analysis" />
            </div>

          </div>
        </div>
      </section>

      {/* Section for techdraw */}
      {/* ======================= */}

      <section className={clsx("hero hero--primary bg-grid-pattern", styles.heroBanner)} style={{color: 'black', filter: 'invert(1)'}}>
        <div className='container'>
          <div className='row' style={{padding: '5rem 0', filter: 'invert(1)'}}>

            <div className='col col--6' style={{filter: 'invert(0)'}}>
              <img src="/img/home-techdraw.webp" title="Generate industry-grade documentation" />
            </div>

            <div className='col col--6' style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
              <h3 className='text_hero_img margin-bottom--lg' style={{fontWeight: '400', fontSize: '3rem', textAlign: 'left'}}>
                Generate industry-grade documentation
              </h3>
              <p style={{textAlign: 'left', lineHeight: '1.2'}}>
                Create technical documentation for manufacturing, easily add dimensions and engineering tolerances.
                Create complex sections and detail views, add bills of materials.
              </p>
              {/* <div className={styles.buttons} style={{marginTop: '1rem', justifyContent: 'start', marginBottom: '2rem'}}> */}
              {/*   <Link */}
              {/*     className="button button--primary button--lg text_hero" */}
              {/*     to="https://lens.ondsel.com/signup" */}
              {/*   > */}
              {/*     Sign Up */}
              {/*   </Link> */}
              {/* </div> */}
            </div>

          </div>
        </div>
      </section>

      {/* Section for CAM/CNC */}
      {/* ======================= */}

      <section className={clsx("hero hero--primary bg-grid-pattern", styles.heroBanner)} style={{color: 'black', filter: 'invert(0)'}}>
        <div className='container'>
          <div className='row' style={{padding: '5rem 0', filter: 'invert(1)'}}>

            <div className='col col--6' style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
              <h3 className='text_hero_img margin-bottom--lg' style={{fontWeight: '400', fontSize: '3rem', textAlign: 'left'}}>
                Simulate machining and generate G-Code
              </h3>
              <p style={{textAlign: 'left', lineHeight: '1.2'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              {/* <div className={styles.buttons} style={{marginTop: '1rem', justifyContent: 'start', marginBottom: '2rem'}}> */}
              {/*   <Link */}
              {/*     className="button button--primary button--lg text_hero" */}
              {/*     to="https://lens.ondsel.com/signup" */}
              {/*   > */}
              {/*     Sign Up */}
              {/*   </Link> */}
              {/* </div> */}
            </div>

            <div className='col col--6' style={{filter: 'invert(1)'}}>
              <img src="/img/home-cam.webp" title="Simulate machining and generate G-Code" />
            </div>

          </div>
        </div>
      </section>

      {/* Section for customizable models */}
      {/* ======================= */}

      <section className={clsx("hero hero--primary bg-grid-pattern", styles.heroBanner)} style={{color: 'black', filter: 'invert(1)'}}>
        <div className='container'>
          <div className='row' style={{padding: '5rem 0', filter: 'invert(1)'}}>

            <div className='col col--6' style={{filter: 'invert(0)'}}>
              <iframe className='shadow--md' style={{borderRadius: '1.5rem', border: 'solid 1px gray', minHeight: '300px'}} width="100%" height="100%" src="https://lens.ondsel.com/share/65e5746c725cff308d4de802" title="Ondsel"></iframe>
            </div>

            <div className='col col--6' style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
              <h3 className='text_hero_img margin-bottom--lg' style={{fontWeight: '400', fontSize: '3rem', textAlign: 'left'}}>
                Publish customizable models online
              </h3>
              <p style={{textAlign: 'left', lineHeight: '1.2'}}>
                Use variable sets in Ondsel ES to create parametric models and publish them on Lens
                so that anybody could create their own variations and download them
                for 3D printing or manufacturing.
              </p>
              {/* <div className={styles.buttons} style={{marginTop: '1rem', justifyContent: 'start', marginBottom: '2rem'}}>  */}
              {/*   <Link */}
              {/*     className="button button--primary button--lg text_hero" */}
              {/*     to="https://lens.ondsel.com/signup" */}
              {/*   > */}
              {/*     Learn */}
              {/*   </Link> */}
              {/* </div> */}
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
