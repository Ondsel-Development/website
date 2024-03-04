"use strict";(self.webpackChunkondsel=self.webpackChunkondsel||[]).push([[8313],{4216:(e,t,a)=>{a.d(t,{Z:()=>s});var l=a(7294),n=a(6010);const r="mainWrapper_IvOH";function s(e){let{className:t="",children:a}=e;return l.createElement("main",{className:(0,n.Z)(t,r)},a)}},6114:(e,t,a)=>{a.r(t),a.d(t,{default:()=>E});var l=a(7294),n=a(1774),r=a(2263),s=a(4216),o=a(6010);const c={os_icon_wrapper:"os_icon_wrapper_WycO",os_icon:"os_icon_oEbt",os_icon_row:"os_icon_row_DJOV",os_button_wrapper:"os_button_wrapper_HyWN"};function m(e,t,a){let l=e.find((e=>{let{name:l}=e;return l.endsWith(`${t}.${a}`)})),n=e.find((e=>{let{name:l}=e;return l.endsWith(`${t}.${a}-SHA256.txt`)}));return{name:l.name,url:l.browser_download_url,hash:n.browser_download_url,arch:t,ext:a}}function i(e){let{assets:t}=e;const[a,n]=(0,l.useState)(!0),[r,s]=(0,l.useState)(!1),[i,d]=(0,l.useState)(!1),[u,g]=(0,l.useState)(!1);let E=["aarch64","x86_64"];E=E.map((e=>m(t,e,"AppImage")));let _=["arm64","x86_64"];_=_.map((e=>m(t,e,"dmg")));let p=[m(t,"x86_64","7z")];function h(e){if(void 0===e&&(e=!0),g(!1),d(!1),s(!1),e)g(!0),d(!0),s(!0);else{let e=getOS();e.includes("windows")?g(!0):e.includes("macos")?d(!0):e.includes("linux")?s(!0):h()}}return(0,l.useEffect)((()=>{h(!0)}),[]),l.createElement(l.Fragment,null,l.createElement("div",{id:"downloads"},l.createElement("div",{id:"dl-linux",className:(0,o.Z)("download row margin-bottom--lg",r?"":"hidden",c.download)},l.createElement("div",{className:"col col--6 margin-bottom--md "+c.os_icon_row},l.createElement("div",{className:c.os_icon_wrapper},l.createElement("img",{src:"/img/os_linux.svg",className:c.os_icon}))),l.createElement("div",{className:"col "+c.os_button_wrapper},l.createElement("div",null,E&&E.map((e=>l.createElement("div",{className:"margin-bottom--sm",key:e.name},l.createElement("a",{className:"button button--primary button--lg ",href:e.url},e.arch," .",e.ext),l.createElement("small",{style:{display:"block"}},l.createElement("a",{className:"",href:e.hash},"SHA256")))))))),l.createElement("div",{id:"dl-macos",className:(0,o.Z)("download row margin-bottom--lg",i?"":"hidden",c.download)},l.createElement("div",{className:"col col--6  margin-bottom--md "+c.os_icon_row},l.createElement("div",{className:c.os_icon_wrapper},l.createElement("img",{src:"/img/os_mac.svg",className:c.os_icon}))),l.createElement("div",{className:"col "+c.os_button_wrapper},l.createElement("div",null,_&&_.map((e=>l.createElement("div",{className:"margin-bottom--sm",key:e.name},l.createElement("a",{className:"button button--primary button--lg ",href:e.url},e.arch," .",e.ext),l.createElement("small",{style:{display:"block"}},l.createElement("a",{className:"",href:e.hash},"SHA256")))))))),l.createElement("div",{id:"dl-windows",className:(0,o.Z)("download row margin-bottom--lg",u?"":"hidden",c.download)},l.createElement("div",{className:"col col--6  margin-bottom--md "+c.os_icon_row},l.createElement("div",{className:c.os_icon_wrapper},l.createElement("img",{src:"/img/os_windows.svg",className:c.os_icon}))),l.createElement("div",{className:"col "+c.os_button_wrapper},l.createElement("div",null,p&&p.map((e=>l.createElement("div",{className:"margin-bottom--sm",key:e.name},l.createElement("a",{className:"button button--primary button--lg ",href:e.url},e.arch," .",e.ext),l.createElement("small",{style:{display:"block"}},l.createElement("a",{className:"",href:e.hash},"SHA256")))))))),l.createElement("div",{className:"row margin-bottom--lg hidden"},l.createElement("div",{className:"col",style:{textAlign:"center"}},l.createElement("button",{className:"button button--secondary",onClick:()=>{n(!a),h(!!a)}},a?"Show":"Hide"," more downloads")))))}function d(e,t,a){let l=e.find((e=>{let{name:l}=e;return l.endsWith(`${t}.${a}`)})),n=e.find((e=>{let{name:l}=e;return l.endsWith(`${t}.${a}-SHA256.txt`)}));return{name:l.name,url:l.browser_download_url,hash:n.browser_download_url,arch:t,ext:a}}function u(e){let{assets:t}=e;const[a,n]=(0,l.useState)(!0),[r,s]=(0,l.useState)(!1),[o,c]=(0,l.useState)(!1),[m,i]=(0,l.useState)(!1);let u=["aarch64","x86_64"];u=u.map((e=>d(t,e,"AppImage")));let g=["arm64","x86_64"];g=g.map((e=>d(t,e,"dmg")));let E=[d(t,"x86_64","7z")];function _(e){if(void 0===e&&(e=!0),i(!1),c(!1),s(!1),e)i(!0),c(!0),s(!0);else{let e=getOS();e.includes("windows")?i(!0):e.includes("macos")?c(!0):e.includes("linux")?s(!0):_()}}return(0,l.useEffect)((()=>{_(!0)}),[]),l.createElement(l.Fragment,null,l.createElement("div",{class:"dropdown dropdown--hoverable"},l.createElement("button",{class:"button button--lg button--outline button--primary margin-horiz--sm margin-bottom--md",style:{color:"white"}},l.createElement("img",{src:"/img/os_linux.svg",class:"os_icon_src-components-DownloadList-styles-module margin-right--sm",style:{filter:"invert(1)",display:"inline",verticalAlign:"inherit"}}),"Linux ",l.createElement("small",{style:{color:"gray",fontWeight:"400"}},"[Pre-release]")),l.createElement("ul",{class:"dropdown__menu"},u&&u.map((e=>l.createElement("li",null,l.createElement("div",{class:"dropdown__link"},l.createElement("a",{href:e.url},e.arch,".",e.ext)," ",l.createElement("small",null,"(",l.createElement("a",{href:e.hash},"SHA256"),")"))))))),l.createElement("div",{class:"dropdown dropdown--hoverable"},l.createElement("button",{class:"button button--lg button--outline button--primary margin-horiz--sm margin-bottom--md",style:{color:"white"}},l.createElement("img",{src:"/img/os_mac.svg",class:"os_icon_src-components-DownloadList-styles-module margin-right--sm",style:{filter:"invert(1)",display:"inline",verticalAlign:"inherit"}}),"macOS ",l.createElement("small",{style:{color:"gray",fontWeight:"400"}},"[Pre-release]")),l.createElement("ul",{class:"dropdown__menu"},g&&g.map((e=>l.createElement("li",null,l.createElement("div",{class:"dropdown__link"},l.createElement("a",{href:e.url},e.arch,".",e.ext)," ",l.createElement("small",null,"(",l.createElement("a",{href:e.hash},"SHA256"),")"))))))),l.createElement("div",{class:"dropdown dropdown--hoverable"},l.createElement("button",{class:"button button--lg button--outline button--primary margin-horiz--sm margin-horiz--md margin-bottom--md",style:{color:"white"}},l.createElement("img",{src:"/img/os_mac.svg",class:"os_icon_src-components-DownloadList-styles-module margin-right--sm",style:{filter:"invert(1)",display:"inline",verticalAlign:"inherit"}}),"Windows ",l.createElement("small",{style:{color:"gray",fontWeight:"400"}},"[Pre-release]")),l.createElement("ul",{class:"dropdown__menu"},E&&E.map((e=>l.createElement("li",null,l.createElement("div",{class:"dropdown__link"},l.createElement("a",{href:e.url},e.arch,".",e.ext)," ",l.createElement("small",null,"(",l.createElement("a",{href:e.hash},"SHA256"),")"))))))))}function g(e,t){let a;return"release"===t?a=e.filter((e=>!1===e.draft&&!1===e.prerelease))[0]:"prerelease"===t&&(a=e.filter((e=>!1===e.draft&&!0===e.prerelease))[0]),a}function E(){const e=(0,r.Z)(),{siteConfig:t={}}=e,[a,o]=(0,l.useState)(null),[c,m]=(0,l.useState)(null),[d,E]=(0,l.useState)(!0),[_,p]=(0,l.useState)(null),[h,w]=(0,l.useState)(!0);return(0,l.useEffect)((()=>{(async()=>{try{fetch("https://api.github.com/repos/Ondsel-Development/FreeCAD/releases").then((e=>{if(e.ok)return e.json()})).then((e=>{o(g(e,"release")),m(g(e,"prerelease")),w(!1)}))}catch(e){console.log(e.message),p(e.message)}})(),console.log("Getting OS: "+getOS())}),[]),l.createElement(n.Z,{title:"Download",description:t.tagline},l.createElement(s.Z,{className:"bg-grid-pattern px_8"},l.createElement("div",{className:"container"},l.createElement("h1",{className:"text_6xl text_gray text_center"},"Download"),l.createElement("div",{className:"row text_gray",style:{justifyContent:"center",textAlign:"center"}},l.createElement("div",{className:"col col--8"},l.createElement("div",null,"The latest version of Ondsel ES is: ",h?"":a.tag_name))),l.createElement("div",{className:"row text_gray margin-top--lg",style:{justifyContent:"center"}},l.createElement("div",{className:"col col--8"},h?"Loading":l.createElement(i,{assets:a.assets}))),l.createElement("div",{className:"row text_gray margin-vert--lg",style:{justifyContent:"center",textAlign:"center"}},l.createElement("div",{className:"col col--8"},l.createElement("h2",{class:"text_4xl"},"Pre-releases"),l.createElement("div",{className:"unstable show"},l.createElement("p",null,"The latest pre-release version of Ondsel ES was built on ",h?"":c.created_at),l.createElement("p",null,"\u26a0\ufe0f This is intended for testing purposes only. Please don't use it for regular work. \u26a0\ufe0f "),h?"Loading":l.createElement(u,{assets:c.assets})))))))}}}]);