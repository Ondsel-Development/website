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
    showAllDownloads(true); {/* Set False to hide other, non-detected OS */}
  }, [] );

  return (
    <>
      <div class="dropdown dropdown--hoverable">
        <button class="button button--lg button--outline button--primary margin-horiz--sm margin-bottom--md" style={{backgroundColor: 'white',}}>
          <img src="/img/os_linux.svg" class="os_icon_src-components-DownloadList-styles-module margin-right--sm" style={{filter: 'invert(0)', display: 'inline', verticalAlign: 'inherit'}}/>
          Linux <small style={{color: 'gray', fontWeight: '400'}}>[Pre-release]</small> 
        </button>
        <ul class="dropdown__menu">
          {linux && linux.map( (e) => {
              return (
                <li>
                  <div class="dropdown__link">
                    <a href={e.url}>{e.arch}.{e.ext}</a> <small>(<a href={e.hash}>SHA256</a>)</small>
                  </div>
                </li>
                  )
          })}
        </ul>
      </div>

      <div class="dropdown dropdown--hoverable">
        <button class="button button--lg button--outline button--primary margin-horiz--sm margin-bottom--md" style={{backgroundColor: 'white'}}>
          <img src="/img/os_mac.svg" class="os_icon_src-components-DownloadList-styles-module margin-right--sm" style={{filter: 'invert(0)', display: 'inline', verticalAlign: 'inherit'}}/>
          macOS <small style={{color: 'gray', fontWeight: '400'}}>[Pre-release]</small>
        </button>
        <ul class="dropdown__menu">
          {macos && macos.map( (e) => {
              return (
                <li>
                  <div class="dropdown__link">
                    <a href={e.url}>{e.arch}.{e.ext}</a> <small>(<a href={e.hash}>SHA256</a>)</small>
                  </div>
                </li>
                  )
          })}
        </ul>
      </div>

      <div class="dropdown dropdown--hoverable">
        <button class="button button--lg button--outline button--primary margin-horiz--sm margin-horiz--md margin-bottom--md" style={{backgroundColor: 'white'}}>
          <img src="/img/os_windows.svg" class="os_icon_src-components-DownloadList-styles-module margin-right--sm" style={{filter: 'invert(0)', display: 'inline', verticalAlign: 'inherit'}}/>
          Windows <small style={{color: 'gray', fontWeight: '400'}}>[Pre-release]</small>
        </button>
        <ul class="dropdown__menu">
          {win && win.map( (e) => {
              return (
                <li>
                  <div class="dropdown__link">
                    <a href={e.url}>{e.arch}.{e.ext}</a> <small>(<a href={e.hash}>SHA256</a>)</small>
                  </div>
                </li>
                  )
          })}
        </ul>
      </div>

    </>
  );
}
