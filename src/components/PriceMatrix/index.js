import React from "react";
import clsx from "clsx";
import PendingIcon from "@site/src/components/Icons/PendingIcon";
import CheckIcon from "@site/src/components/Icons/CheckIcon";

import styles from "./styles.module.css";

const OPTIONS = {

  'Storage': {

    'Public models storage': { solo: 'Free, unlimited', peer: 'Free, unlimited', enterprise: 'Free, unlimited' },
    'Private models storage': { solo: 'No', peer: 'Up to 10 GB', enterprise: 'Unlimited' },
    'On-premise support': { solo: 'No', peer: 'No', enterprise: 'Coming' },

  },

  'Privacy': {

    'Public organizations': { solo: 'Yes', peer: 'Yes', enterprise: 'Yes' },
    'Public workspaces': { solo: 'Yes', peer: 'Yes', enterprise: 'Yes' },
    'Private organizations': { solo: 'No', peer: 'Yes', enterprise: 'Yes' },
    'Private workspaces': { solo: 'No', peer: 'Yes', enterprise: 'Yes' },
    'Control over downloadable formats': { solo: 'No', peer: 'Yes', enterprise: 'Yes' },
    'PIN protection': { solo: 'No', peer: 'Yes', enterprise: 'Yes' },
    'Direct sharing with user': { solo: 'No', peer: 'Yes', enterprise: 'Yes' },
    'External users (invites)': { solo: 'No', peer: 'No', enterprise: 'Yes' },

  },

  'Collaboration': {

    'Versions': { solo: 'Yes', peer: 'Yes', enterprise: 'Yes' },
    'Share links': { solo: 'Yes', peer: 'Yes', enterprise: 'Yes' },
    'Comments to models': { solo: 'No', peer: 'Yes', enterprise: 'Yes' },

  },

  'Documentation': {

    '2D drawings support in FCStd': { solo: 'No', peer: 'Coming', enterprise: 'Coming' },
    'BOM generation': { solo: 'No', peer: 'Coming', enterprise: 'Coming' },
    'Automatic assembly instructions': { solo: 'No', peer: 'Coming', enterprise: 'Coming' },

  },

  'File formats': {

    'FCStd': { solo: 'Yes', peer: 'Yes', enterprise: 'Yes' },
    'FCStd with linked parts': { solo: 'No', peer: 'Yes', enterprise: 'Yes' },
    'STEP': { solo: 'Yes', peer: 'Yes', enterprise: 'Yes' },
    'STL': { solo: 'Yes', peer: 'Yes', enterprise: 'Yes' },
    'OBJ': { solo: 'Yes', peer: 'Yes', enterprise: 'Yes' },

  },

};


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


function RenderPlan( {k, opts, plan} ){
  return (
    <>
      <h4>&nbsp;</h4>
      {Object.values( opts[k] ).map( (e) => {
        return (
          <>
            <p>{e[plan]}</p>
          </>
        )
      })}
    </>
  )
}


function RenderPlanDeux( {opts, plan} ){
  return (
    <>
      {Object.keys( opts ).map( (k) => { 
        return (
          <>
            <h4>&nbsp;</h4>

            {Object.values( opts[k] ).map( (e) => {
              return (
              <>
                <p>{e[plan] === 'No' ? '-' : e[plan]}</p>
              </>
              )
            }
            )}
          </>
        )
      })}
    </>
  )
}


export default function PriceMatrix() {
  let opts = OPTIONS;
  return (
    <>

      <div className={clsx('container shadow--tl', styles.container)}>
        <div className='row'>

          <div className='col col--3'>
            <div>
              <h3>&nbsp;</h3>
              <div>&nbsp;</div>
            </div>

            {Object.keys( opts ).map( (k) => ( 
              <RenderOpts k={k} opts={opts}/>
            ))}
          </div>

          <div className='col col--3'>
            <div>
              <h2>Solo</h2>
              <div>Free</div>
            </div>

            <RenderPlanDeux opts={opts} plan='solo' />

            {/* {Object.keys( opts ).map( (k) => ( */} 
            {/*   <RenderPlan k={k} opts={opts} plan='solo' /> */}
            {/* ))} */}
          </div>
          <div className='col col--3'>
            <div>
              <h2>Peer</h2>
              <div>$10 /month</div>
            </div>
            
            <RenderPlanDeux opts={opts} plan='peer' />

          </div>
          <div className='col col--3'>
            <div>
              <h2>Enterprise</h2>
              <div>$100 /user</div>
            </div>
            
            <RenderPlanDeux opts={opts} plan='enterprise' />

          </div>
        </div>

      </div>

    </>
  );
}
