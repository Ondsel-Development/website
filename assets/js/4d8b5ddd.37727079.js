"use strict";(self.webpackChunkondsel=self.webpackChunkondsel||[]).push([[8718],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(r),m=a,h=p["".concat(l,".").concat(m)]||p[m]||g[m]||o;return r?n.createElement(h,s(s({ref:t},c),{},{components:r})):n.createElement(h,s({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},58128:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const o={slug:"hunt-uncaught-freecad-errors",title:"FreeCAD bug hunt has begun! Crush silly bugs. Win awesome swag",description:"It\u2019s time to mobilize the masses and focus on polishing FreeCAD so that it behaves like an actual v1.0 release.",authors:[{name:"Brad Collette",title:"Ondsel Core Team",url:"https://github.com/sliptonic",image_url:"https://avatars.githubusercontent.com/u/538057?v=4"},{name:"Aleksandr Prokudin",title:"Contributing Writer",url:"https://github.com/prokoudine",image_url:"https://avatars.githubusercontent.com/u/57467?v=4"}],tags:["ondsel","es","freecad","bugs"],image:"./titlecard.jpg",draft:!1},s=void 0,i={permalink:"/blog/hunt-uncaught-freecad-errors",source:"@site/blog/2024-06-04/hunt-uncaught-freecad-errors.mdx",title:"FreeCAD bug hunt has begun! Crush silly bugs. Win awesome swag",description:"It\u2019s time to mobilize the masses and focus on polishing FreeCAD so that it behaves like an actual v1.0 release.",date:"2024-06-04T00:00:00.000Z",formattedDate:"June 4, 2024",tags:[{label:"ondsel",permalink:"/blog/tags/ondsel"},{label:"es",permalink:"/blog/tags/es"},{label:"freecad",permalink:"/blog/tags/freecad"},{label:"bugs",permalink:"/blog/tags/bugs"}],readingTime:2.645,hasTruncateMarker:!0,authors:[{name:"Brad Collette",title:"Ondsel Core Team",url:"https://github.com/sliptonic",image_url:"https://avatars.githubusercontent.com/u/538057?v=4",imageURL:"https://avatars.githubusercontent.com/u/538057?v=4"},{name:"Aleksandr Prokudin",title:"Contributing Writer",url:"https://github.com/prokoudine",image_url:"https://avatars.githubusercontent.com/u/57467?v=4",imageURL:"https://avatars.githubusercontent.com/u/57467?v=4"}],frontMatter:{slug:"hunt-uncaught-freecad-errors",title:"FreeCAD bug hunt has begun! Crush silly bugs. Win awesome swag",description:"It\u2019s time to mobilize the masses and focus on polishing FreeCAD so that it behaves like an actual v1.0 release.",authors:[{name:"Brad Collette",title:"Ondsel Core Team",url:"https://github.com/sliptonic",image_url:"https://avatars.githubusercontent.com/u/538057?v=4",imageURL:"https://avatars.githubusercontent.com/u/538057?v=4"},{name:"Aleksandr Prokudin",title:"Contributing Writer",url:"https://github.com/prokoudine",image_url:"https://avatars.githubusercontent.com/u/57467?v=4",imageURL:"https://avatars.githubusercontent.com/u/57467?v=4"}],tags:["ondsel","es","freecad","bugs"],image:"./titlecard.jpg",draft:!1},prevItem:{title:"BOM generation should be a core feature, so let's do it",permalink:"/blog/introducing-bom-tool"},nextItem:{title:"FreeCAD's topological naming problem is (officially) history",permalink:"/blog/toponaming-problem-is-history"}},l={image:r(54465).Z,authorsImageUrls:[void 0,void 0]},u=[],c={toc:u};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"There\u2019s a valid question: how can FOSS CAD programs possibly compete with proprietary offerings? The answer is the community. Commercial CAD vendors need to pay for everything, but FreeCAD has an army of passionate volunteers and contributors. Grants for developers and Ondsel\u2019s involvement are rather recent happenings. Mostly, the community has been managing the project for over 20 years on a shoestring budget or no budget at all \u2014 that is rather impressive."),(0,a.kt)("p",null,"Ondsel ES and FreeCAD have been developing a kind of symbiotic relationship. We build on FreeCAD, so we rely on it being great, but FreeCAD also benefits from new features and improvements we are bringing. However the upstream project is also larger than any group of developers: literally, everyone can help improve it, including non-programmers."))}p.isMDXComponent=!0},54465:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/titlecard-97bf2db7fd0eb8c7f27454277fcf01f2.jpg"}}]);