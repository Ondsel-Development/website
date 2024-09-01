import React from "react";
import clsx from "clsx";
import PendingIcon from "@site/src/components/Icons/PendingIcon";
import CheckIcon from "@site/src/components/Icons/CheckIcon";

import styles from "./styles.module.css";

function RenderOpts({ k, opts }) {
  return (
    <>
      <h4>{k}</h4>
      {Object.keys( opts[k] ).map( (e) => {
        return (
          <>
            <p>{e}</p>
          </>
        )
      } )}
    </>
  )
}

export default function PriceMatrix({ opts }) {
  return (
    <>

      <h2>Price Matrix</h2>
      <h3>-- {Object.keys( opts )[0]}</h3>

      <div className={clsx('container', styles.container)}>
        <div className='row'>

          <div className='col col--3'>
            <h3>&nbsp;</h3>
            {Object.keys( opts ).map( (k) => ( 
              <RenderOpts k={k} opts={opts}/>
            ))}
          </div>

          <div className='col col--3'>
            <h3>Solo</h3>
            <div className='row'>
              <div className='col col--10'>
              This is a test
              </div>
              <div className='col col--2'>
              +
              </div>
            </div>
          </div>
          <div className='col col--3'>
            <h3>Peer</h3>
            <div className='row'>
              <div className='col col--10'>
              This is a test
              </div>
              <div className='col col--2'>
              +
              </div>
            </div>
          </div>
          <div className='col col--3'>
            <h3>Enterprise</h3>
            <div className='row'>
              <div className='col col--10'>
              This is a test
              </div>
              <div className='col col--2'>
              +
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* <div className={styles.pricingCardList}> */}
      {/*   {plans.map((plan) => ( */}
      {/*     <PricingCard key={plan.slug} plan={plan} /> */}
      {/*   ))} */}
      {/* </div> */}
      {/* <div className="flex flex_row items_center justify_center w_full"> */}
      {/* <span className="text_2xl ml_2">** Billed Annually</span> */}
      {/* </div> */}
      {/* <div className="flex flex_row items_center justify_center w_full"> */}
      {/* <CheckIcon /> */}
      {/* <span className="text_2xl ml_2">Completed Feature</span> */}
      {/* </div> */}
      {/* <div className="flex flex_row items_center justify_center w_full"> */}
      {/* <PendingIcon /> */}
      {/* <span className="text_2xl ml_2">Planned Feature</span> */}
      {/* </div> */}
    </>
  );
}
