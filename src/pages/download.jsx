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
            <div>The lastest version is: {isBusy ? '' : data.tag_name}</div>
            {/* <div>Released on {isBusy ? '' : new Date(data.published_at).toLocaleDateString() }</div> */}
            </div>
          </div>

          <div className='row text_gray margin-top--lg' style={{justifyContent: 'center'}}>
            <div className='col col--8'>
              {isBusy ? 'Loading' : <DownloadList assets={data.assets} /> }
            </div>
          </div>

        </div>
      </MainWrapper>
    </Layout>
  );
}
