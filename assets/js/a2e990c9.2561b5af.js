"use strict";(self.webpackChunkondsel=self.webpackChunkondsel||[]).push([[5154],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,g=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return r?n.createElement(g,i(i({ref:t},u),{},{components:r})):n.createElement(g,i({ref:t},u))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},71762:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={slug:"assembly-workbench-preview",title:"Ondsel added integrated assembly to the FreeCAD core finally solving the largest missing feature",description:"The basics of an integrated assembly workbench in FreeCAD are now functional and will soon be ready for wider testing.",authors:[{name:"Brad Collette",title:"Ondsel Core Team",url:"https://github.com/sliptonic",image_url:"https://avatars.githubusercontent.com/u/538057?v=4"},{name:"Aleksandr Prokudin",title:"Contributing Writer",url:"https://github.com/prokoudine",image_url:"https://avatars.githubusercontent.com/u/57467?v=4"}],tags:["freecad","assembly"],image:"./titlecard.png",draft:!1},i=void 0,s={permalink:"/blog/assembly-workbench-preview",source:"@site/blog/2023-11-06/assembly-wb-preview.mdx",title:"Ondsel added integrated assembly to the FreeCAD core finally solving the largest missing feature",description:"The basics of an integrated assembly workbench in FreeCAD are now functional and will soon be ready for wider testing.",date:"2023-11-06T00:00:00.000Z",formattedDate:"November 6, 2023",tags:[{label:"freecad",permalink:"/blog/tags/freecad"},{label:"assembly",permalink:"/blog/tags/assembly"}],readingTime:8.28,hasTruncateMarker:!0,authors:[{name:"Brad Collette",title:"Ondsel Core Team",url:"https://github.com/sliptonic",image_url:"https://avatars.githubusercontent.com/u/538057?v=4",imageURL:"https://avatars.githubusercontent.com/u/538057?v=4"},{name:"Aleksandr Prokudin",title:"Contributing Writer",url:"https://github.com/prokoudine",image_url:"https://avatars.githubusercontent.com/u/57467?v=4",imageURL:"https://avatars.githubusercontent.com/u/57467?v=4"}],frontMatter:{slug:"assembly-workbench-preview",title:"Ondsel added integrated assembly to the FreeCAD core finally solving the largest missing feature",description:"The basics of an integrated assembly workbench in FreeCAD are now functional and will soon be ready for wider testing.",authors:[{name:"Brad Collette",title:"Ondsel Core Team",url:"https://github.com/sliptonic",image_url:"https://avatars.githubusercontent.com/u/538057?v=4",imageURL:"https://avatars.githubusercontent.com/u/538057?v=4"},{name:"Aleksandr Prokudin",title:"Contributing Writer",url:"https://github.com/prokoudine",image_url:"https://avatars.githubusercontent.com/u/57467?v=4",imageURL:"https://avatars.githubusercontent.com/u/57467?v=4"}],tags:["freecad","assembly"],image:"./titlecard.png",draft:!1},prevItem:{title:"Open Source UX/UI is notoriously bad. How FreeCAD is breaking the curse",permalink:"/blog/freecad-breaking-open-source-ux-curse"},nextItem:{title:"FreeCAD sketcher getting a major upgrade with floating input widgets",permalink:"/blog/floating-input-widgets"}},l={image:r(14463).Z,authorsImageUrls:[void 0,void 0]},c=[],u={toc:c};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The basics of an integrated assembly workbench in FreeCAD are now functional and will be ready for wider testing once ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/FreeCAD/FreeCAD/pull/10764"},"another pull request")," is merged. This means you can play with it now in the development version of FreeCAD and when version 1.0 is out, you will be able to create or link parts, create joints between them, and solve the assembly \u2014 in just a few clicks, out of the box, without installing any add-ons."))}m.isMDXComponent=!0},14463:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/titlecard-d7c0a82cc10e737c4570c34d3f8c4475.png"}}]);