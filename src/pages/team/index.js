import React from "react";

import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import MainWrapper from "@site/src/components/MainWrapper";

// import Pat from "./_pat-david.js"
import Brad from "./_brad-collette.js"
import JohnDupuy from "./_john-dupuy.js"
import AikSiong from "./_aik-siong-koh.js"
import Amritpal from "./_amritpal-singh.js"
import Pierre from "./_pierre-louis-boyer.js"
import Adrian from "./_adrian-insaurralde-avalos.js"
import Alexandre from "./_alexandre_prokoudine.js"
import Pieter from "./_pieter-hijma.js"


export default function Team() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

 return (
    <Layout title="Team" description={siteConfig.tagline}>
      <MainWrapper className="container">
        <h1 className="text_6xl text_center">Who We Are</h1>
          <section className="row">
            <Brad/>
            <JohnDupuy/>
            <AikSiong/>
            <Amritpal/>
            <Pierre/>
            <Adrian/>
            <Alexandre/>
            <Pieter/>
          </section>
      </MainWrapper>
    </Layout>
  );
}
