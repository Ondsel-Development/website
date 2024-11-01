"use strict";(self.webpackChunkondsel=self.webpackChunkondsel||[]).push([[2156],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),u=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(r),h=n,g=c["".concat(l,".").concat(h)]||c[h]||m[h]||o;return r?a.createElement(g,s(s({ref:t},p),{},{components:r})):a.createElement(g,s({ref:t},p))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:n,s[1]=i;for(var u=2;u<o;u++)s[u]=r[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},81847:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var a=r(87462),n=(r(67294),r(3905));const o={slug:"hunt-uncaught-freecad-errors",title:"FreeCAD bug hunt has begun! Crush silly bugs. Win awesome swag",description:"It\u2019s time to mobilize the masses and focus on polishing FreeCAD so that it behaves like an actual v1.0 release.",authors:[{name:"Brad Collette",title:"Ondsel Core Team",url:"https://github.com/sliptonic",image_url:"https://avatars.githubusercontent.com/u/538057?v=4"},{name:"Aleksandr Prokudin",title:"Contributing Writer",url:"https://github.com/prokoudine",image_url:"https://avatars.githubusercontent.com/u/57467?v=4"}],tags:["ondsel","es","freecad","bugs"],image:"./titlecard.jpg",draft:!1},s=void 0,i={permalink:"/blog/hunt-uncaught-freecad-errors",source:"@site/blog/2024-06-04/hunt-uncaught-freecad-errors.mdx",title:"FreeCAD bug hunt has begun! Crush silly bugs. Win awesome swag",description:"It\u2019s time to mobilize the masses and focus on polishing FreeCAD so that it behaves like an actual v1.0 release.",date:"2024-06-04T00:00:00.000Z",formattedDate:"June 4, 2024",tags:[{label:"ondsel",permalink:"/blog/tags/ondsel"},{label:"es",permalink:"/blog/tags/es"},{label:"freecad",permalink:"/blog/tags/freecad"},{label:"bugs",permalink:"/blog/tags/bugs"}],readingTime:2.645,hasTruncateMarker:!0,authors:[{name:"Brad Collette",title:"Ondsel Core Team",url:"https://github.com/sliptonic",image_url:"https://avatars.githubusercontent.com/u/538057?v=4",imageURL:"https://avatars.githubusercontent.com/u/538057?v=4"},{name:"Aleksandr Prokudin",title:"Contributing Writer",url:"https://github.com/prokoudine",image_url:"https://avatars.githubusercontent.com/u/57467?v=4",imageURL:"https://avatars.githubusercontent.com/u/57467?v=4"}],frontMatter:{slug:"hunt-uncaught-freecad-errors",title:"FreeCAD bug hunt has begun! Crush silly bugs. Win awesome swag",description:"It\u2019s time to mobilize the masses and focus on polishing FreeCAD so that it behaves like an actual v1.0 release.",authors:[{name:"Brad Collette",title:"Ondsel Core Team",url:"https://github.com/sliptonic",image_url:"https://avatars.githubusercontent.com/u/538057?v=4",imageURL:"https://avatars.githubusercontent.com/u/538057?v=4"},{name:"Aleksandr Prokudin",title:"Contributing Writer",url:"https://github.com/prokoudine",image_url:"https://avatars.githubusercontent.com/u/57467?v=4",imageURL:"https://avatars.githubusercontent.com/u/57467?v=4"}],tags:["ondsel","es","freecad","bugs"],image:"./titlecard.jpg",draft:!1},prevItem:{title:"BOM generation should be a core feature, so let's do it",permalink:"/blog/introducing-bom-tool"},nextItem:{title:"FreeCAD's topological naming problem is (officially) history",permalink:"/blog/toponaming-problem-is-history"}},l={image:r(54465).Z,authorsImageUrls:[void 0,void 0]},u=[],p={toc:u};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"There\u2019s a valid question: how can FOSS CAD programs possibly compete with proprietary offerings? The answer is the community. Commercial CAD vendors need to pay for everything, but FreeCAD has an army of passionate volunteers and contributors. Grants for developers and Ondsel\u2019s involvement are rather recent happenings. Mostly, the community has been managing the project for over 20 years on a shoestring budget or no budget at all \u2014 that is rather impressive."),(0,n.kt)("p",null,"Ondsel ES and FreeCAD have been developing a kind of symbiotic relationship. We build on FreeCAD, so we rely on it being great, but FreeCAD also benefits from new features and improvements we are bringing. However the upstream project is also larger than any group of developers: literally, everyone can help improve it, including non-programmers."),(0,n.kt)("p",null,"FreeCAD v1.0 is now right around the corner. It\u2019s coming with ",(0,n.kt)("a",{parentName:"p",href:"https://ondsel.com/blog/toponaming-problem-is-history/"},"toponaming issue mitigation"),", brand new ",(0,n.kt)("a",{parentName:"p",href:"https://ondsel.com/blog/assembly-workbench-preview/"},"integrated assembly workbench"),", vastly ",(0,n.kt)("a",{parentName:"p",href:"https://yorik.uncreated.net/blog/2024-007-freecad-news-21"},"improved BIM workflow")," for architects, and ",(0,n.kt)("a",{parentName:"p",href:"https://ondsel.com/blog/ondsel-es-2024-2/#further-sketcher-improvements"},"many UI/UX improvements")," in Sketcher and TechDraw. Now it\u2019s time to mobilize the masses and focus on polishing the program so that it behaves like an actual v1.0 release."),(0,n.kt)("p",null,"For contributors who are not developers, there are translations to update and documentation to write. But as users, there\u2019s something else you do to help the project and gain something else in return."),(0,n.kt)("p",null,"FreeCAD has a particular kind of bug still lurking that we want to clean up. The program is rather strict about what it expects users to do. And if a user does the \u201cwrong\u201d thing, quite often the program won\u2019t crash, but instead it will display a cryptic message in the Report View panel. For example, you can use zero in a sketch constraint, and you will see something like this:"),(0,n.kt)("video",{width:"100%",height:"100%",controls:!0},(0,n.kt)("source",{src:"/video/fc-1-0-bughunt-example.mp4",type:"video/mp4"}),"Your browser does not support the video tag."),(0,n.kt)("p",null,"We want to eliminate this behavior as much as possible. So here is our proposal. "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"If you are a developer, submit a report about this issue, provide a fix in a pull request, and we will send you a commemorative sticker for your laptop."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"If you are a user, submit a report about this issue to use, we will try to reproduce it, then fix it in Ondsel ES, submit the fix to the upstream project, and send you a commemorative sticker for your laptop.")))),(0,n.kt)("p",null,"Here are some of the methods to find those bugs:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Input unexpected values"),(0,n.kt)("li",{parentName:"ul"},"Enter a \u20180\u2019 where it wants a number"),(0,n.kt)("li",{parentName:"ul"},"Enter a letters where it wants a number"),(0,n.kt)("li",{parentName:"ul"},"Enter unicode or special characters"),(0,n.kt)("li",{parentName:"ul"},"Try random combinations of settings in task panels that take them"),(0,n.kt)("li",{parentName:"ul"},"Drag panels around"),(0,n.kt)("li",{parentName:"ul"},"Try other preference settings")),(0,n.kt)("p",null,"Just to clarify: we are not looking for feature requests or general bug reports. We are looking for very specific reports on uncaught errors that are displayed in the Report View panel, like on the screenshot above."),(0,n.kt)("p",null,"To reach us, you can use either ",(0,n.kt)("a",{parentName:"p",href:"https://discord.gg/7jmzezyyfP"},"Discord")," or the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Ondsel-Development/FreeCAD/issues"},"issue tracker"),", if Discord doesn\u2019t work for you. If you want a sticker, we\u2019ll ask for your address privately."),(0,n.kt)("p",null,"Let\u2019s make FreeCAD v1.0 even more fun to use together!"))}c.isMDXComponent=!0},54465:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/titlecard-97bf2db7fd0eb8c7f27454277fcf01f2.jpg"}}]);