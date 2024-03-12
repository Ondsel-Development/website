import React, { useState, useEffect } from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import MainWrapper from "@site/src/components/MainWrapper";

import DownloadList from "@site/src/components/DownloadList";
import DownloadListPrerelease from "@site/src/components/DownloadListPrerelease";


function returnData( d, release ){

  let request;

  if (release === 'release'){
    request = d.filter( el => (el.draft === false && el.prerelease === false) )[0];
  }else if( release === 'prerelease' ){
    request = d.filter( el => (el.draft === false && el.prerelease === true) )[0];
  }

  return request

}


export default function Download() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  const [data, setData] = useState(null);
  const [prerelease, setPrerelease] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isBusy, setBusy] = useState(true);


  const fetchDownloads = async () => {
    try{
    // fetch("latest.json")
      // fetch('https://api.github.com/repos/Ondsel-Development/FreeCAD/releases/latest')
      fetch('https://api.github.com/repos/Ondsel-Development/FreeCAD/releases')
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
          // const tmpData = returnData( responseJSON, 'release' );
          
          // setData( responseJSON );
          setData( returnData( responseJSON, 'release' ));
          setPrerelease( returnData( responseJSON, 'prerelease' ));
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
      <MainWrapper className="bg-grid-pattern-light px_8">
        <div className='container'>
          <h1 className="text_6xl text_center">Download</h1>

          <div className='row' style={{justifyContent: 'center', textAlign: 'center'}}>
            <div className='col col--8'>
            <div>The latest version of Ondsel ES is: {isBusy ? '' : data.tag_name}</div>
            {/* <div>Released on {isBusy ? '' : new Date(data.published_at).toLocaleDateString() }</div> */}
            </div>
          </div>

          <div className='row margin-top--lg' style={{justifyContent: 'center'}}>
            <div className='col col--8'>
              {isBusy ? 'Loading' : <DownloadList assets={data.assets} /> }
            </div>
          </div>

          {/* Pre-Release downloads section */}
          <div className='row margin-vert--lg' style={{justifyContent: 'center', textAlign: 'center'}}>
            <div className='col col--8'>
              <h2 class='text_4xl'>Pre-releases</h2>
                <div className='unstable show'>
                  <p>The latest pre-release version of Ondsel ES was built on {isBusy ? '' : prerelease.created_at}</p>
                  <p>⚠️ This is intended for testing purposes only. Please don't use it for regular work. ⚠️ </p>

                  {isBusy ? 'Loading' : <DownloadListPrerelease assets={prerelease.assets} /> }

                  {/* <div class="dropdown dropdown--hoverable"> */}
                  {/*   <button class="button button--lg button--outline button--primary margin-horiz--sm margin-bottom--md" style={{color: 'white'}}> */}
                  {/*     <img src="/img/os_linux.svg" class="os_icon_src-components-DownloadList-styles-module margin-right--sm" style={{filter: 'invert(1)', display: 'inline', verticalAlign: 'inherit'}}/> */}
                  {/*     Linux <small style={{color: 'gray', fontWeight: '400'}}>[Pre-release]</small> */} 
                  {/*   </button> */}
                  {/*   <ul class="dropdown__menu"> */}
                  {/*     <li> */}
                  {/*       <a class="dropdown__link" href="#url">aarch.AppImage</a> */}
                  {/*     </li> */}
                  {/*     <li> */}
                  {/*       <a class="dropdown__link" href="#url">x86_64.AppImage</a> */}
                  {/*     </li> */}
                  {/*   </ul> */}
                  {/* </div> */}

                  {/* <div class="dropdown dropdown--hoverable"> */}
                  {/*   <button class="button button--lg button--outline button--primary margin-horiz--sm margin-bottom--md" style={{color: 'white'}}> */}
                  {/*   <img src="/img/os_mac.svg" class="os_icon_src-components-DownloadList-styles-module margin-right--sm" style={{filter: 'invert(1)', display: 'inline', verticalAlign: 'inherit'}}/> */}
                  {/*     macOS <small style={{color: 'gray', fontWeight: '400'}}>[Pre-release]</small> */}
                  {/*   </button> */}
                  {/*   <ul class="dropdown__menu"> */}
                  {/*     <li> */}
                  {/*       <a class="dropdown__link" href="#url">arm64.dmg</a> */}
                  {/*     </li> */}
                  {/*     <li> */}
                  {/*       <a class="dropdown__link" href="#url">x86_64.dmg</a> */}
                  {/*     </li> */}
                  {/*   </ul> */}
                  {/* </div> */}

                  {/* <div class="dropdown dropdown--hoverable"> */}
                  {/*   <button class="button button--lg button--outline button--primary margin-horiz--sm margin-horiz--md margin-bottom--md" style={{color: 'white'}}> */}
                  {/*   <img src="/img/os_mac.svg" class="os_icon_src-components-DownloadList-styles-module margin-right--sm" style={{filter: 'invert(1)', display: 'inline', verticalAlign: 'inherit'}}/> */}
                  {/*     Windows <small style={{color: 'gray', fontWeight: '400'}}>[Pre-release]</small> */}
                  {/*   </button> */}
                  {/*   <ul class="dropdown__menu"> */}
                  {/*     <li> */}
                  {/*       <a class="dropdown__link" href="#url">x86_64.7z</a> */}
                  {/*     </li> */}
                  {/*   </ul> */}
                  {/* </div> */}

                </div>

            </div>
          </div>

        </div>
      </MainWrapper>
    </Layout>
  );
}
