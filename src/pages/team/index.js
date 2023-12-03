import React from "react";

import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import MainWrapper from "@site/src/components/MainWrapper";

import Pat from "./_pat-david.mdx"
import Brad from "./_brad-collette.mdx"
import JohnDupuy from "./_john-dupuy.mdx"
import AikSiong from "./_aik-siong-koh.mdx"
import Amritpal from "./_amritpal-singh.mdx"
import Pierre from "./_pierre-louis-boyer.mdx"
import Adrian from "./_adrian-insaurralde-avalos.mdx"
import Alexandre from "./_alexandre_prokoudine.mdx"


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
          </section>
      </MainWrapper>
    </Layout>
  );
}
