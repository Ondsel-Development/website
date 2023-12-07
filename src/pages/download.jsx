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
            console.log( 'response.ok' );
            return response.json();
          }else{
            console.log('response not ok');
          }
        })
        .then( (responseJSON) => {
          console.log( 'responsejSON: ' );
          console.log( responseJSON );
          console.log('responseJSON.assets:');
          setData( responseJSON.assets );
          setBusy(false);
        });
    } catch (err) {
      console.log( err.message );
      setError( err.message );
    }
  }


  useEffect( () => {
    fetchDownloads();
  }, [] );


  return (
    <Layout title="Download" description={siteConfig.tagline}>
      <MainWrapper className="bg-grid-pattern px_8">
        <div class='container'>
          <h1 className="text_6xl text_gray text_center">Download</h1>
          <h2 className="text_2xl text_center text_gray">
          Put your designs to work everywhere
          </h2>
          <div class='row text_gray'>

            <div class='col col--6'>
              <div class="dropdown dropdown--hoverable">
                <button class="button button--lg button--primary">Download</button>
                <ul class="dropdown__menu">
                  <li>
                    <a class="dropdown__link" href="#url">Home</a>
                  </li>
                  <li>
                    <a class="dropdown__link" href="#url">Profile</a>
                  </li>
                  <li>
                    <a class="dropdown__link" href="#url">Settings</a>
                  </li>
                  <li>
                    <a class="dropdown__link" href="#url">Help</a>
                  </li>
                  <li>
                    <a class="dropdown__link" href="#url">Logout</a>
                  </li>
                </ul>
              </div>

              {isBusy ? 'Loading' : <DownloadList assets={data} /> }
            </div>

            <div class='col col--6'>
              <div>The lastest version is: {isBusy ? '' : data[0].id }</div>
            </div>

          {/* {isBusy ? 'Loading' : data.map( (e) => (e.name) ) } */}

          </div>
        </div>
      </MainWrapper>
    </Layout>
  );
}
