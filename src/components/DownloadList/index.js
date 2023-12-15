import React, { useState, useEffect } from "react";
import clsx from "clsx";

import styles from "./styles.module.css";

{/* parse assets JSON by arch and ext */}
function parseDL( assets, arch, ext ){
  let res = assets.find( ({name}) => name.endsWith(`${arch}.${ext}`) );
  let res256 = assets.find( ({name}) => name.endsWith(`${arch}.${ext}-SHA256.txt`) );
  return { 
    'name': res.name, 
    'url': res.browser_download_url, 
    'hash': res256.browser_download_url,
    'arch': arch,
    'ext': ext 
  }
}


export default function DownloadList({ assets }) {

  const [show, setShow] = useState(true);
  const [showLinux, setShowLinux] = useState(false);
  const [showMacos, setShowMacos] = useState(false);
  const [showWin, setShowWin] = useState(false);

  let linux = ['aarch64', 'x86_64'];
  linux = linux.map( (e) => { 
    return parseDL( assets, e, 'AppImage' );
  });

  let macos = ['arm64', 'x86_64'];
  macos = macos.map( (e) => {
    return parseDL( assets, e, 'dmg' );
  })

  let win = [parseDL( assets, 'x86_64', '7z' )];


  function showAllDownloads( all = true ){
      setShowWin(false);
      setShowMacos(false);
      setShowLinux(false);
    if(all){
      setShowWin(true);
      setShowMacos(true);
      setShowLinux(true);
    }else{
      let os = getOS();
      if( os.includes('windows') ){
        setShowWin(true);
      }else if ( os.includes('macos') ){
        setShowMacos(true);
      }else if ( os.includes('linux') ){
        setShowLinux(true);
      }else{
        showAllDownloads();
      }
    }
  }


  useEffect( () => {
    showAllDownloads(false);
  }, [] );

  return (
    <>
      {/* {show ? <h1>Testing Button</h1> : null } */}
      {/* <button onClick={ () => {setShow(!show); showAllDownloads(true);} }>Show/Hide</button> */}

      <div id='downloads'>

        <div id='dl-linux' className={clsx('download row margin-bottom--lg', showLinux ? '':'hidden', styles.download)}>
          <div className={'col col--6 margin-bottom--md '+ styles.os_icon_row}>
            <div className={styles.os_icon_wrapper}>
              <img src="/img/os_linux.svg" className={styles.os_icon}/>
            </div>
          </div>
          <div className={'col '+ styles.os_button_wrapper}>
            <div>
              {linux && linux.map( (e) => { 
                return (
                  <div className='margin-bottom--sm' key={e.name}>
                    <a className='button button--primary button--lg '
                      href={e.url}>{e.arch} .{e.ext}</a>
                    <small style={{display: 'block'}}>
                      <a className='' href={e.hash}>SHA256</a>
                    </small>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <div id='dl-macos' className={clsx('download row margin-bottom--lg', showMacos ? '':'hidden', styles.download)}>
          <div className={'col col--6  margin-bottom--md '+ styles.os_icon_row}>
            <div className={styles.os_icon_wrapper}>
              <img src="/img/os_mac.svg" className={styles.os_icon}/>
            </div>
          </div>
          <div className={'col '+ styles.os_button_wrapper}>
            <div>
              {macos && macos.map( (e) => { 
                return (
                  <div className='margin-bottom--sm' key={e.name}>
                    <a className='button button--primary button--lg '
                      href={e.url}>{e.arch} .{e.ext}</a>
                    <small style={{display: 'block'}}>
                      <a className='' href={e.hash}>SHA256</a>
                    </small>
                  </div>
                )
              })}
            </div>
          </div>
        </div>


        <div id='dl-windows' className={clsx('download row margin-bottom--lg', showWin ? '':'hidden', styles.download)}>
          <div className={'col col--6  margin-bottom--md '+ styles.os_icon_row}>
            <div className={styles.os_icon_wrapper}>
              <img src="/img/os_windows.svg" className={styles.os_icon}/>
            </div>
          </div>
          <div className={'col '+ styles.os_button_wrapper}>
            <div>
              {win && win.map( (e) => { 
                return (
                  <div className='margin-bottom--sm' key={e.name}>
                    <a className='button button--primary button--lg '
                      href={e.url}>{e.arch} .{e.ext}</a>
                    <small style={{display: 'block'}}>
                      <a className='' href={e.hash}>SHA256</a>
                    </small>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <div className='row margin-bottom--lg'>
          <div className='col' style={{textAlign: 'center'}}>
            <button className='button button--secondary' onClick={ () => {setShow(!show); {show ? showAllDownloads(true): showAllDownloads(false)}} }>{show ? 'Show':'Hide'} more downloads</button> 
          </div>
        </div>

      </div>

        {/* {macos && macos.map( (e) => (<div>{e.name}</div>) )} */}
        {/* {win && win.map( (e) => (<div>{e.name}</div>) )} */}
        {/* <hr/> */}
        {/* {assets && assets.map( (e, idx) => ( */}
        {/* <li key={e.id}><a href={e.browser_download_url}>{e.name}</a></li> */}
        {/* ) )} */}
    </>
  );
}
