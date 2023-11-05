import React, { useState, useEffect } from "react";
import ReactDom from 'react-dom';
import Markdown from 'react-markdown';

import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import MainWrapper from "@site/src/components/MainWrapper";


export default function TOS() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTOS = async () => {

    try {
      fetch('https://lens-api.ondsel.com/agreements?category=privacy-policy')
        .then( (response) => {
          if( response.ok ) {
            return response.json();
          }
        })
        .then( (responseJSON) => {
          const mdContent = responseJSON.data[0].current;
          setData( mdContent );
          setLoading(false);
        });
    } catch (err) {
      setError( err.message );
    }
  }


  useEffect( () => {
    fetchTOS();
  }, [] );


  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <Layout title="Privacy Policy" description={siteConfig.tagline}>
      <MainWrapper className="container container--fluid margin-ver--lg row--align-center">
          <div className='col col--8'>
          <div className='margin-bottom--sm' style={{
            color: '#888888',
          }}>
            version: {data.version}<br/>
          </div>
          <Markdown>{data.markdownContent}</Markdown>;
          </div>
      </MainWrapper>
    </Layout>
  );
}
