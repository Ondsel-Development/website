"use strict";(self.webpackChunkondsel=self.webpackChunkondsel||[]).push([[3985],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=d(n),h=o,m=c["".concat(l,".").concat(h)]||c[h]||p[h]||r;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7642:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var a=n(87462),o=(n(67294),n(3905));const r={slug:"goodbye",title:"We are shutting down Ondsel",description:"After operating for almost two years, Ondsel has made the difficult decision to cease operations and close down.",authors:[{name:"Brad Collette",title:"Ondsel Core Team",url:"https://github.com/sliptonic",image_url:"https://avatars.githubusercontent.com/u/538057?v=4"}],tags:["ondsel","es","lens"],image:"./titlecard.jpg",draft:!1},i=void 0,s={permalink:"/blog/goodbye",source:"@site/blog/2024-10-30/shutdown.md",title:"We are shutting down Ondsel",description:"After operating for almost two years, Ondsel has made the difficult decision to cease operations and close down.",date:"2024-10-30T00:00:00.000Z",formattedDate:"October 30, 2024",tags:[{label:"ondsel",permalink:"/blog/tags/ondsel"},{label:"es",permalink:"/blog/tags/es"},{label:"lens",permalink:"/blog/tags/lens"}],readingTime:4.015,hasTruncateMarker:!0,authors:[{name:"Brad Collette",title:"Ondsel Core Team",url:"https://github.com/sliptonic",image_url:"https://avatars.githubusercontent.com/u/538057?v=4",imageURL:"https://avatars.githubusercontent.com/u/538057?v=4"}],frontMatter:{slug:"goodbye",title:"We are shutting down Ondsel",description:"After operating for almost two years, Ondsel has made the difficult decision to cease operations and close down.",authors:[{name:"Brad Collette",title:"Ondsel Core Team",url:"https://github.com/sliptonic",image_url:"https://avatars.githubusercontent.com/u/538057?v=4",imageURL:"https://avatars.githubusercontent.com/u/538057?v=4"}],tags:["ondsel","es","lens"],image:"./titlecard.jpg",draft:!1},nextItem:{title:"Introducing reloadable STEP files in Ondsel ES",permalink:"/blog/reloadable-step-files"}},l={image:n(17537).Z,authorsImageUrls:[void 0]},d=[{value:"Why Ondsel is closing down",id:"why-ondsel-is-closing-down",level:2},{value:"Things we are proud of",id:"things-we-are-proud-of",level:2},{value:"A better FreeCAD application",id:"a-better-freecad-application",level:3},{value:"Lens as a service for connected CAD",id:"lens-as-a-service-for-connected-cad",level:3},{value:"Our relationship with the FreeCAD community",id:"our-relationship-with-the-freecad-community",level:3},{value:"What happens to Ondsel ES",id:"what-happens-to-ondsel-es",level:2},{value:"What happens to the user base",id:"what-happens-to-the-user-base",level:2}],u={toc:d};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"After operating for almost two years, Ondsel has made the difficult decision to cease operations and close down. We are incredibly thankful for the support we\u2019ve received from the FreeCAD community and the larger engineering CAD communities."),(0,o.kt)("h2",{id:"why-ondsel-is-closing-down"},"Why Ondsel is closing down"),(0,o.kt)("p",null,"From the beginning, we knew competing with commercial CAD would be tough. Closed-source CAD is taught in schools and is deeply entrenched in established industry use. We knew that to be successful, we would have to find a way to provide real value and coexist in environments where other tools are already used."),(0,o.kt)("p",null,"While seeking a scalable and repeatable business model, we conducted numerous surveys and interviewed nearly a hundred mechanical engineers, service engineers, tinkerers, inventors, workshop owners, and other users. While we found support among independent and hobbyist users who genuinely wanted us to succeed, we failed to find commercial adoption to justify a venture-capitalized startup. Ultimately, we could not find a product-market fit and ran out of runway to continue the search."),(0,o.kt)("h2",{id:"things-we-are-proud-of"},"Things we are proud of"),(0,o.kt)("p",null,"While we have failed to build a sustainable commercial business around FreeCAD, we have accomplished many things."),(0,o.kt)("h3",{id:"a-better-freecad-application"},"A better FreeCAD application"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"We contributed a new integrated assembly workbench that was sorely missing in the program and a 3D constraints solver on which the workbench relies."),(0,o.kt)("li",{parentName:"ul"},"We also contributed significant improvements to the usability of Sketcher and TechDraw."),(0,o.kt)("li",{parentName:"ul"},"We introduced VarSets \u2014 a brand-new custom properties system."),(0,o.kt)("li",{parentName:"ul"},"We introduced new features to TechDraw and CAM workbenches."),(0,o.kt)("li",{parentName:"ul"},"Beyond FreeCAD itself, we contributed to third-party addons like SheetMetal.")),(0,o.kt)("h3",{id:"lens-as-a-service-for-connected-cad"},"Lens as a service for connected CAD"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"We demonstrated what a connected CAD experience could look like with open source at its core."),(0,o.kt)("li",{parentName:"ul"},"We built a service that enabled teams to organize iterated development of hardware products."),(0,o.kt)("li",{parentName:"ul"},"We built a simple way to share your models publicly or privately, including PIN protection for share links."),(0,o.kt)("li",{parentName:"ul"},"We made it possible to publish parametric models online that you can modify and download.")),(0,o.kt)("p",null,"Between our May release (2024.2) and today alone, 145 pull requests by the Ondsel team have been merged into the upstream codebase, making FreeCAD 1.0 a more featureful and polished release than we all hoped it would be."),(0,o.kt)("h3",{id:"our-relationship-with-the-freecad-community"},"Our relationship with the FreeCAD community"),(0,o.kt)("p",null,"Having a commercial partner working on FreeCAD also meant that the project had to adapt. Our presence and cooperation affected how the FreeCAD project operates. Our blog brought attention to missing features and helped the project establish priorities. Working with the core maintainers, we improved the contribution process, sped up the merge process, and helped form the Design Working Group and the new CAD Advisory Group. These are significant advances that will benefit the community for a long time.  "),(0,o.kt)("p",null,"Most of all, we showed that a commercial partner can be an asset to the project. We hope many more entrepreneurs will build around FreeCAD in the spirit of cooperation to establish a robust ecosystem that benefits the world and is profitable. "),(0,o.kt)("h2",{id:"what-happens-to-ondsel-es"},"What happens to Ondsel ES"),(0,o.kt)("p",null,"OES was designed to be our flavor of FreeCAD with more pleasing UX/UI, frequent releases, and added value."),(0,o.kt)("p",null,"Part of the better UX/UI was our improvements to Sketcher and TechDraw\u2014all users of FreeCAD 1.0 will enjoy those. We owe much of the praise for the UI to Joe Sardos, who designed OpenTheme. We didn\u2019t fund that project, but we pushed it on our users, and they loved it. So we think Joe did a spectacular job, and we cannot thank him enough for that. "),(0,o.kt)("p",null,"The added value we shipped as part of OES is all available as free and open-source code, and most of it will be part of FreeCAD."),(0,o.kt)("p",null,"As such, there is no point in releasing v2024.3. However, we are not abandoning the FreeCAD community. Brad will continue hacking in the CAM workbench, Pierre will likely continue working on Assembly and Sketcher, and Pieter will keep working on varsets and variant parts thanks to grants issued by the FreeCAD Project Association. All future contributions to FreeCAD by our former team members will now go directly to the upstream project."),(0,o.kt)("p",null,"We have yet to submit a few improvements to FreeCAD, namely the reloadable objects feature, which we strongly believe should be a core feature. We will submit this as a PR to upstream."),(0,o.kt)("h2",{id:"what-happens-to-the-user-base"},"What happens to the user base"),(0,o.kt)("p",null,"We will notify customers and users of the shutdown. The server will continue running for a reasonable period to give users time to download their data. If you have any projects on Lens that you haven\u2019t backed up anywhere else, please download them as soon as possible."),(0,o.kt)("p",null,"Paying customers will be reimbursed for any remaining time on their subscription."),(0,o.kt)("p",null,"For questions or comments please email us at ",(0,o.kt)("a",{parentName:"p",href:"mailto:support@ondsel.com"},"support@ondsel.com"),"."))}c.isMDXComponent=!0},17537:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/titlecard-d0cc63d5b0e8e544cf341f960bd6af7e.jpg"}}]);