import React, { useState, useEffect } from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import MainWrapper from "@site/src/components/MainWrapper";

import DownloadList from "@site/src/components/DownloadList";

export default function Download() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isBusy, setBusy] = useState(true);


  const fetchDownloads = async () => {
    try{
    fetch("latest.json")
      fetch('https://api.github.com/repos/Ondsel-Development/FreeCAD/releases/latest')
        .then( (response) => {
          if( response.ok ) {
            // console.log( 'response.ok' );
            return response.json();
          }else{
            // console.log('response not ok');
          }
        })
        .then( (responseJSON) => {
          // console.log( 'responsejSON: ' );
          // console.log( responseJSON );
          // console.log('responseJSON.assets:');
          setData( responseJSON );
          setBusy(false);
        });
    } catch (err) {
      console.log( err.message );
      setError( err.message );
    }
  }


  useEffect( () => {
    fetchDownloads();
    console.log("Getting OS: "+ getOS() );
  }, [] );


  return (
    <Layout title="Download" description={siteConfig.tagline}>
      <MainWrapper className="bg-grid-pattern px_8">
        <div className='container'>
          <h1 className="text_6xl text_gray text_center">Download</h1>

          <div className='row text_gray' style={{justifyContent: 'center', textAlign: 'center'}}>
            <div className='col col--8'>
            <div>The latest version of Ondsel ES is: {isBusy ? '' : data.tag_name}</div>
            {/* <div>Released on {isBusy ? '' : new Date(data.published_at).toLocaleDateString() }</div> */}
            </div>
          </div>

          <div className='row text_gray margin-top--lg' style={{justifyContent: 'center'}}>
            <div className='col col--8'>
              {isBusy ? 'Loading' : <DownloadList assets={data.assets} /> }
            </div>
          </div>

          <div className='row text_gray margin-vert--lg' style={{justifyContent: 'center', textAlign: 'center'}}>
            <div className='col col--8'>
              <h2>Unstable Releases</h2>
                <div className='unstable show'>
                  <p>The unstable version of Ondsel is: XXX.XXX</p>
                  <p>This is a blurb about what the unstable release is and that it shouldn't be used for normal production work.  Include the necessary caveats.</p>

                  <div class="dropdown dropdown--hoverable">
                    <button class="button button--lg button--outline button--primary" style={{color: 'white'}}>
                    <img src="/img/os_linux.svg" class="os_icon_src-components-DownloadList-styles-module margin-right--sm" style={{filter: 'invert(1)', display: 'inline', verticalAlign: 'inherit'}}/>
                      Linux Unstable
                    </button>
                    <ul class="dropdown__menu">
                      <li>
                        <a class="dropdown__link" href="#url">aarch.AppImage</a>
                      </li>
                      <li>
                        <a class="dropdown__link" href="#url">x86_64.AppImage</a>
                      </li>
                    </ul>
                  </div>

                  <div class="dropdown dropdown--hoverable">
                    <button class="button button--lg button--outline button--primary margin-horiz--md" style={{color: 'white'}}>
                    <img src="/img/os_mac.svg" class="os_icon_src-components-DownloadList-styles-module margin-right--sm" style={{filter: 'invert(1)', display: 'inline', verticalAlign: 'inherit'}}/>
                      macOS Unstable
                    </button>
                    <ul class="dropdown__menu">
                      <li>
                        <a class="dropdown__link" href="#url">arm64.dmg</a>
                      </li>
                      <li>
                        <a class="dropdown__link" href="#url">x86_64.dmg</a>
                      </li>
                    </ul>
                  </div>

                  <div class="dropdown dropdown--hoverable">
                    <button class="button button--lg button--outline button--primary margin-horiz--md" style={{color: 'white'}}>
                    <img src="/img/os_mac.svg" class="os_icon_src-components-DownloadList-styles-module margin-right--sm" style={{filter: 'invert(1)', display: 'inline', verticalAlign: 'inherit'}}/>
                      Windows Unstable
                    </button>
                    <ul class="dropdown__menu">
                      <li>
                        <a class="dropdown__link" href="#url">x86_64.7z</a>
                      </li>
                    </ul>
                  </div>

                </div>

            </div>
          </div>

        </div>
      </MainWrapper>
    </Layout>
  );
}
