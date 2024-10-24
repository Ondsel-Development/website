"use strict";(self.webpackChunkondsel=self.webpackChunkondsel||[]).push([[298],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>b});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,b=m["".concat(i,".").concat(d)]||m[d]||p[d]||o;return r?n.createElement(b,l(l({ref:t},c),{},{components:r})):n.createElement(b,l({ref:t},c))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[m]="string"==typeof e?e:a,l[1]=s;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},36789:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const o={slug:"introducing-bom-tool",title:"BOM generation should be a core feature, so let's do it",description:"Ondsel recently implemented a bill of materials tool as part of the integrated assembly workbench.",authors:[{name:"Brad Collette",title:"Ondsel Core Team",url:"https://github.com/sliptonic",image_url:"https://avatars.githubusercontent.com/u/538057?v=4"},{name:"Aleksandr Prokudin",title:"Contributing Writer",url:"https://github.com/prokoudine",image_url:"https://avatars.githubusercontent.com/u/57467?v=4"}],tags:["ondsel es","freecad","bom","assembly"],image:"./titlecard.jpg",draft:!1},l=void 0,s={permalink:"/blog/introducing-bom-tool",source:"@site/blog/2024-07-03/bom-tool.md",title:"BOM generation should be a core feature, so let's do it",description:"Ondsel recently implemented a bill of materials tool as part of the integrated assembly workbench.",date:"2024-07-03T00:00:00.000Z",formattedDate:"July 3, 2024",tags:[{label:"ondsel es",permalink:"/blog/tags/ondsel-es"},{label:"freecad",permalink:"/blog/tags/freecad"},{label:"bom",permalink:"/blog/tags/bom"},{label:"assembly",permalink:"/blog/tags/assembly"}],readingTime:6.83,hasTruncateMarker:!0,authors:[{name:"Brad Collette",title:"Ondsel Core Team",url:"https://github.com/sliptonic",image_url:"https://avatars.githubusercontent.com/u/538057?v=4",imageURL:"https://avatars.githubusercontent.com/u/538057?v=4"},{name:"Aleksandr Prokudin",title:"Contributing Writer",url:"https://github.com/prokoudine",image_url:"https://avatars.githubusercontent.com/u/57467?v=4",imageURL:"https://avatars.githubusercontent.com/u/57467?v=4"}],frontMatter:{slug:"introducing-bom-tool",title:"BOM generation should be a core feature, so let's do it",description:"Ondsel recently implemented a bill of materials tool as part of the integrated assembly workbench.",authors:[{name:"Brad Collette",title:"Ondsel Core Team",url:"https://github.com/sliptonic",image_url:"https://avatars.githubusercontent.com/u/538057?v=4",imageURL:"https://avatars.githubusercontent.com/u/538057?v=4"},{name:"Aleksandr Prokudin",title:"Contributing Writer",url:"https://github.com/prokoudine",image_url:"https://avatars.githubusercontent.com/u/57467?v=4",imageURL:"https://avatars.githubusercontent.com/u/57467?v=4"}],tags:["ondsel es","freecad","bom","assembly"],image:"./titlecard.jpg",draft:!1},prevItem:{title:"Ondsel 2024.2.2 released",permalink:"/blog/ondsel-es-2024-2-2-released"},nextItem:{title:"FreeCAD bug hunt has begun! Crush silly bugs. Win awesome swag",permalink:"/blog/hunt-uncaught-freecad-errors"}},i={image:r(52080).Z,authorsImageUrls:[void 0,void 0]},u=[],c={toc:u};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Back when we did the ",(0,a.kt)("a",{parentName:"p",href:"https://ondsel.com/blog/freecad-user-survey-results-part-1/"},"user survey"),", the generation of bills of materials (BOM) was the next important thing after the ability to create assemblies. People don\u2019t even need collision detection as much as they need their BOMs. Based on this data, Pierre-Louis Boyer (Ondsel) recently added a Bill of Materials tool to the Assembly workbench for the upcoming Ondsel ES v2024.3 and FreeCAD v1.0. It is already available in weekly builds of Ondsel ES and the upstream project."))}m.isMDXComponent=!0},52080:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/titlecard-18bbd3afb48e010fe443cf687c65da71.jpg"}}]);