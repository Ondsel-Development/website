import React, { useState, useEffect } from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import MainWrapper from "@site/src/components/MainWrapper";


export default function Download() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const fetchDownloads = async () => {
    try{
      fetch('https://api.github.com/repos/Ondsel-Development/FreeCAD/releases/latest')
        .then( (response) => {
          if( response.ok ) {
            return response.json();
          }
        })
        .then( (responseJSON) => {
          console.log( responseJSON );
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
        <h1 className="text_6xl text_gray text_center">Download</h1>
        <h2 className="text_2xl text_center text_gray">
          Put your designs to work everywhere
        </h2>
      </MainWrapper>
    </Layout>
  );
}
