"use strict";(self.webpackChunkondsel=self.webpackChunkondsel||[]).push([[9403],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var a=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,s=function(e,t){if(null==e)return{};var r,a,s={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var c=a.createContext({}),i=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},p=function(e){var t=i(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,s=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=i(r),f=s,d=u["".concat(c,".").concat(f)]||u[f]||m[f]||o;return r?a.createElement(d,n(n({ref:t},p),{},{components:r})):a.createElement(d,n({ref:t},p))}));function d(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=r.length,n=new Array(o);n[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:s,n[1]=l;for(var i=2;i<o;i++)n[i]=r[i];return a.createElement.apply(null,n)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},10997:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var a=r(87462),s=(r(67294),r(3905));const o={slug:"ondsel-svg-postprocessor",title:"Streamlining laser cutter workflows with Ondsel postprocessor",description:"Laser cutters are a staple in maker spaces and are often the first exposure users have to CNC equipment. We developed a postprocessor to create SVG files for laser cutters",authors:[{name:"Brad Collette",title:"Ondsel Core Team",url:"https://github.com/sliptonic",image_url:"https://avatars.githubusercontent.com/u/538057?v=4"}],tags:["ondsel","es","cnc","cam","svg"],image:"./titlecard.jpg",draft:!1},n=void 0,l={permalink:"/blog/ondsel-svg-postprocessor",source:"@site/blog/2024-09-27/svg-postprocessor.mdx",title:"Streamlining laser cutter workflows with Ondsel postprocessor",description:"Laser cutters are a staple in maker spaces and are often the first exposure users have to CNC equipment. We developed a postprocessor to create SVG files for laser cutters",date:"2024-09-27T00:00:00.000Z",formattedDate:"September 27, 2024",tags:[{label:"ondsel",permalink:"/blog/tags/ondsel"},{label:"es",permalink:"/blog/tags/es"},{label:"cnc",permalink:"/blog/tags/cnc"},{label:"cam",permalink:"/blog/tags/cam"},{label:"svg",permalink:"/blog/tags/svg"}],readingTime:5.815,hasTruncateMarker:!0,authors:[{name:"Brad Collette",title:"Ondsel Core Team",url:"https://github.com/sliptonic",image_url:"https://avatars.githubusercontent.com/u/538057?v=4",imageURL:"https://avatars.githubusercontent.com/u/538057?v=4"}],frontMatter:{slug:"ondsel-svg-postprocessor",title:"Streamlining laser cutter workflows with Ondsel postprocessor",description:"Laser cutters are a staple in maker spaces and are often the first exposure users have to CNC equipment. We developed a postprocessor to create SVG files for laser cutters",authors:[{name:"Brad Collette",title:"Ondsel Core Team",url:"https://github.com/sliptonic",image_url:"https://avatars.githubusercontent.com/u/538057?v=4",imageURL:"https://avatars.githubusercontent.com/u/538057?v=4"}],tags:["ondsel","es","cnc","cam","svg"],image:"./titlecard.jpg",draft:!1},nextItem:{title:"Let\u2019s make GD&T support a core feature",permalink:"/blog/gd-and-t-as-core-feature"}},c={image:r(51527).Z,authorsImageUrls:[void 0]},i=[],p={toc:i};function u(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Laser cutters are a staple in maker spaces and are often the first exposure users have to CNC equipment. They are fast and accurate. They produce usable parts from inexpensive materials. They can cut and engrave and are intuitive to use. "),(0,s.kt)("p",null,"However, laser cutters typically have a different workflow compared to other CNC machines. Instead of G-code, the input for laser cutters is usually 2D geometry files such as SVG, DXF, or image files. The control software then automatically generates the G-code internally. This means that users need to prepare their SVG files before feeding them to laser cutters, and the procedure is different for every cutter."),(0,s.kt)("p",null,"To make things easier, we developed a post-processor for the CAM workbench that generates SVG files automatically. It helps streamline the workflow and cuts down the time it usually takes to go from design to product."))}u.isMDXComponent=!0},51527:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/titlecard-185b0f950b6bfb771be7d36c20581beb.jpg"}}]);