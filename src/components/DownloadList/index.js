import React from "react";

import styles from "./styles.module.css";

{/* parse assets JSON by arch and ext */}
function parseDL( assets, arch, ext ){
  let res = assets.find( ({name}) => name.endsWith(`${arch}.${ext}`) );
  let res256 = assets.find( ({name}) => name.endsWith(`${arch}.${ext}-SHA256.txt`) );
  return { 'name': res.name, 
    'url': res.browser_download_url, 
    'hash': res256.browser_download_url,
    'arch': arch,
    'ext': ext };
}


export default function DownloadList({ assets }) {

  let linux = ['aarch64', 'x86_64'];
  linux = linux.map( (e) => { 
    return parseDL( assets, e, 'AppImage' );
  });

  let macos = ['arm64', 'x86_64'];
  macos = macos.map( (e) => {
    return parseDL( assets, e, 'dmg' );
  })

  let win = [parseDL( assets, 'x86_64', '7z' )];

  return (
    <>
      <div id='downloads'>

        <div id='dl-linux' className='download row'>
          <div className='col col--6' style={{textAlign: 'right'}}>
            <img src="/img/os_linux.svg" style={{width: '130px', filter: 'invert(1)'}}/>
          </div>
          <div className='col'>
            <div>
              {linux && linux.map( (e) => { 
                return (
                  <>
                    <div className='margin-bottom--sm'>
                      <a className='button button--primary button--lg '
                        href={e.url}>{e.arch} {e.ext}</a>
                      <small style={{display: 'block'}}>
                        <a className='' href={e.hash}>SHA256</a>
                      </small>
                    </div>
                  </>
                )
              })}
            </div>
          </div>
        </div>

      </div>

        {macos && macos.map( (e) => (<div>{e.name}</div>) )}
        {win && win.map( (e) => (<div>{e.name}</div>) )}
        {/* <hr/> */}
        {/* {assets && assets.map( (e, idx) => ( */}
        {/* <li key={e.id}><a href={e.browser_download_url}>{e.name}</a></li> */}
        {/* ) )} */}
    </>
  );
}
