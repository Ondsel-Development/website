import React from "react";

import styles from "./styles.module.css";

export default function DownloadList({ assets }) {
  console.log( 'Inside DownloadList' );
  console.log( '(DownloadList) assets: ' );
  console.log( typeof(assets) );
  console.log( assets );
  return (
    <>
      {/* <div className={styles.pricingCardList}> */}
      {/*   {plans.map((plan) => ( */}
      {/*     <PricingCard key={plan.slug} plan={plan} /> */}
      {/*   ))} */}
      {/* </div> */}
      <div>DL List</div>
      <div>
      </div>
    </>
  );
}
