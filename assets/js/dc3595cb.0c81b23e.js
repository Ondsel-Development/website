"use strict";(self.webpackChunkondsel=self.webpackChunkondsel||[]).push([[7640],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),h=p(r),c=n,m=h["".concat(l,".").concat(c)]||h[c]||d[c]||o;return r?a.createElement(m,s(s({ref:t},u),{},{components:r})):a.createElement(m,s({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[h]="string"==typeof e?e:n,s[1]=i;for(var p=2;p<o;p++)s[p]=r[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},148:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const o={slug:"ondsel-100-days",title:"Ondsel at 100...days",authors:[{name:"Brad Collette",title:"Ondsel Core Team",url:"https://github.com/sliptonic",image_url:"https://avatars.githubusercontent.com/u/538057?v=4"}],tags:["ondsel"],image:"./titlecard.png",draft:!1},s=void 0,i={permalink:"/blog/ondsel-100-days",source:"@site/blog/2023-04-14/ondsel-100.md",title:"Ondsel at 100...days",description:"100 days",date:"2023-04-14T00:00:00.000Z",formattedDate:"April 14, 2023",tags:[{label:"ondsel",permalink:"/blog/tags/ondsel"}],readingTime:2.67,hasTruncateMarker:!1,authors:[{name:"Brad Collette",title:"Ondsel Core Team",url:"https://github.com/sliptonic",image_url:"https://avatars.githubusercontent.com/u/538057?v=4",imageURL:"https://avatars.githubusercontent.com/u/538057?v=4"}],frontMatter:{slug:"ondsel-100-days",title:"Ondsel at 100...days",authors:[{name:"Brad Collette",title:"Ondsel Core Team",url:"https://github.com/sliptonic",image_url:"https://avatars.githubusercontent.com/u/538057?v=4",imageURL:"https://avatars.githubusercontent.com/u/538057?v=4"}],tags:["ondsel"],image:"./titlecard.png",draft:!1},nextItem:{title:"Assembly Workbench: What We Learned and What's Coming Next",permalink:"/blog/default-assembly-workbench-7"}},l={image:r(7193).Z,authorsImageUrls:[void 0]},p=[{value:"100 days",id:"100-days",level:2}],u={toc:p};function h(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"100-days"},"100 days"),(0,n.kt)("p",null,"It\u2019s hard to believe that it\u2019s been just over three months since Ondsel started operations.  One hundred days, in fact.  I thought it would be fun to take a moment and consider what we\u2019ve been able to accomplish in that time."),(0,n.kt)("p",null,"First, we built a team.  Besides myself, Ondsel now has five people working on the future of FreeCAD.  We were able to recruit, interview, hire, equip, and onboard five exceptionally talented people who hit the ground running and started contributing to FreeCAD."),(0,n.kt)("p",null,"We attended FOSDEM in Brussels in February where we got to meet with ",(0,n.kt)("a",{parentName:"p",href:"https://fpa.freecad.org/"},"project leaders"),".  We heard from many users who both love FreeCAD but are frustrated with the lack of progress on some big problems.  We learned a ton and we were able to build consensus on a path forward."),(0,n.kt)("p",null,"From that, we laid out a plan for finally resolving the topo-naming problem.  One of our people, ",(0,n.kt)("a",{parentName:"p",href:"https://twitter.com/JohnDupuyCOMO"},"@JohnDupuyCOMO")," refined ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/FreeCAD/FreeCAD/issues/8432"},"the plan")," to incorporate ",(0,n.kt)("a",{parentName:"p",href:"https://twitter.com/RealThunder12"},"RealThunder"),"\u2019s algorithm, and the developer community not only accepted it but started working with blazing speed to accomplish it.  The first phase was completed in only a couple of weeks.  Now we\u2019ve started phase two."),(0,n.kt)("p",null,"We started building the Ondsel brand.  We got a logo designed, put up a ",(0,n.kt)("a",{parentName:"p",href:"https://ondsel.com/"},"website"),", and established accounts on ",(0,n.kt)("a",{parentName:"p",href:"https://twitter.com/ondsel"},"Twitter"),", ",(0,n.kt)("a",{parentName:"p",href:"https://www.facebook.com/ondsel"},"Facebook"),", ",(0,n.kt)("a",{parentName:"p",href:"https://www.linkedin.com/company/ondsel/"},"LinkedIn"),", and other platforms.  We\u2019ve taken our Twitter following from zero to almost two hundred followers."),(0,n.kt)("p",null,"We built relationships with some outstanding creators including ",(0,n.kt)("a",{parentName:"p",href:"https://twitter.com/Basement_Office"},"Rebecca Dodd")," and ",(0,n.kt)("a",{parentName:"p",href:"https://twitter.com/lgworld"},"Alexandre Prokoudine")," who are helping to create our blog content and communicate our vision.  "),(0,n.kt)("p",null,"We worked with ",(0,n.kt)("a",{parentName:"p",href:"https://reedydesigns.com/"},"Reedy Designs")," and to reskin the website in just over a week."),(0,n.kt)("p",null,"We initiated the ",(0,n.kt)("a",{parentName:"p",href:"https://fpa.freecad.org/handbook/"},"FPA Handbook")," and contributed content to it."),(0,n.kt)("p",null,"We initiated the new",(0,n.kt)("a",{parentName:"p",href:"https://freecad.github.io/DevelopersHandbook/"}," Developer\u2019s Handbook")," and are continuing to add new content to it as well."),(0,n.kt)("p",null,"We started our own ",(0,n.kt)("a",{parentName:"p",href:"https://ondsel.com/docs/handbook"},"handbook")," which will be an indispensable part of our company culture."),(0,n.kt)("p",null,"We published more than a dozen blog posts including a seven-part series on Assembly."),(0,n.kt)("p",null,"Our Assembly series started a ",(0,n.kt)("a",{parentName:"p",href:"https://forum.freecad.org/viewtopic.php?t=76799"},"community-wide discussion")," about an integrated assembly workbench \u2014 a much-needed core capability of FreeCAD.  The discussion has had more than fifteen thousand views and hundreds of comments.  We got some great insights that helped us shape the vision for this feature."),(0,n.kt)("p",null,"Another of our developers ",(0,n.kt)("a",{parentName:"p",href:"https://twitter.com/ajinkyapdahale"},"@ajinkyadahale")," ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/FreeCAD/FreeCAD/pull/8530"},"completed")," our contract to ",(0,n.kt)("a",{parentName:"p",href:"https://forum.freecad.org/viewtopic.php?t=75950"},"improve spline construction")," in sketdcher for the ",(0,n.kt)("a",{parentName:"p",href:"https://floss.social/@opentoolchain"},"Open Tool Chain Foundation"),"."),(0,n.kt)("p",null,"Yet another of our developers ",(0,n.kt)("a",{parentName:"p",href:"https://twitter.com/amrit3701"},"@amrit3701")," has been building the infrastructure to support our eventual product \u2014 a subject you will hear much more about in the coming months."),(0,n.kt)("p",null,"We got eight pull requests merged into the FreeCAD master branch, including PRs for topo-naming and many quality-of-life improvements by ",(0,n.kt)("a",{parentName:"p",href:"https://twitter.com/pierrelouisboy"},"@pierrelouisboy"),": ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/FreeCAD/FreeCAD/pull/9173"},"9173"),", ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/FreeCAD/FreeCAD/pull/9172"},"9172"),", ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/FreeCAD/FreeCAD/pull/9143"},"9143"),", ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/FreeCAD/FreeCAD/pull/9117"},"9117"),", ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/FreeCAD/FreeCAD/pull/9080"},"9080"),", ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/FreeCAD/FreeCAD/pull/9026"},"9026"),", ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/FreeCAD/FreeCAD/pull/9010"},"9010"),", ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/FreeCAD/FreeCAD/pull/8990"},"8990"),"."),(0,n.kt)("p",null,"We did all that in one-hundred days and I\u2019m sure I\u2019m missing many more things we did along the way."),(0,n.kt)("p",null,"I\u2019m incredibly grateful, humbled, proud and excited.  I\u2019m grateful for the support of our investors ",(0,n.kt)("a",{parentName:"p",href:"https://twitter.com/OpenCoreVenture"},"Open Core Ventures")," and ",(0,n.kt)("a",{parentName:"p",href:"https://twitter.com/sytses"},"Sid Sijbrandij"),".  I\u2019m humbled by the support of the ",(0,n.kt)("a",{parentName:"p",href:"https://twitter.com/freecadnews"},"FreeCAD community "),"and leadership.  I\u2019m proud of the stellar work of our people and partners.  "),(0,n.kt)("p",null,"I hope you follow us because I\u2019m excited to see what we can do when we REALLY get rolling!"))}h.isMDXComponent=!0},7193:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/titlecard-b3ec42aea1e279302a096a83bfed28bb.png"}}]);