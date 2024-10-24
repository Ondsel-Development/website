"use strict";(self.webpackChunkondsel=self.webpackChunkondsel||[]).push([[1319],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(r),d=o,g=p["".concat(l,".").concat(d)]||p[d]||h[d]||a;return r?n.createElement(g,i(i({ref:t},c),{},{components:r})):n.createElement(g,i({ref:t},c))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},41880:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var n=r(87462),o=(r(67294),r(3905));const a={slug:"floating-input-widgets",title:"FreeCAD sketcher getting a major upgrade with floating input widgets",description:"We are intorducing on-viewport tool widgets to create fully constrained sketches,as well as tool settings to set various properties and drafting behavior.",authors:[{name:"Brad Collette",title:"Ondsel Core Team",url:"https://github.com/sliptonic",image_url:"https://avatars.githubusercontent.com/u/538057?v=4"},{name:"Aleksandr Prokudin",title:"Contributing Writer",url:"https://github.com/prokoudine",image_url:"https://avatars.githubusercontent.com/u/57467?v=4"}],tags:["freecad","sketcher"],image:"./titlecard.png",draft:!1},i=void 0,s={permalink:"/blog/floating-input-widgets",source:"@site/blog/2023-10-30/floating-input-widgets.mdx",title:"FreeCAD sketcher getting a major upgrade with floating input widgets",description:"We are intorducing on-viewport tool widgets to create fully constrained sketches,as well as tool settings to set various properties and drafting behavior.",date:"2023-10-30T00:00:00.000Z",formattedDate:"October 30, 2023",tags:[{label:"freecad",permalink:"/blog/tags/freecad"},{label:"sketcher",permalink:"/blog/tags/sketcher"}],readingTime:3.34,hasTruncateMarker:!0,authors:[{name:"Brad Collette",title:"Ondsel Core Team",url:"https://github.com/sliptonic",image_url:"https://avatars.githubusercontent.com/u/538057?v=4",imageURL:"https://avatars.githubusercontent.com/u/538057?v=4"},{name:"Aleksandr Prokudin",title:"Contributing Writer",url:"https://github.com/prokoudine",image_url:"https://avatars.githubusercontent.com/u/57467?v=4",imageURL:"https://avatars.githubusercontent.com/u/57467?v=4"}],frontMatter:{slug:"floating-input-widgets",title:"FreeCAD sketcher getting a major upgrade with floating input widgets",description:"We are intorducing on-viewport tool widgets to create fully constrained sketches,as well as tool settings to set various properties and drafting behavior.",authors:[{name:"Brad Collette",title:"Ondsel Core Team",url:"https://github.com/sliptonic",image_url:"https://avatars.githubusercontent.com/u/538057?v=4",imageURL:"https://avatars.githubusercontent.com/u/538057?v=4"},{name:"Aleksandr Prokudin",title:"Contributing Writer",url:"https://github.com/prokoudine",image_url:"https://avatars.githubusercontent.com/u/57467?v=4",imageURL:"https://avatars.githubusercontent.com/u/57467?v=4"}],tags:["freecad","sketcher"],image:"./titlecard.png",draft:!1},prevItem:{title:"Ondsel added integrated assembly to the FreeCAD core finally solving the largest missing feature",permalink:"/blog/assembly-workbench-preview"},nextItem:{title:"Autodesk is teaching students hard life-lessons about vendor lock-in",permalink:"/blog/hard-lessons"}},l={image:r(84100).Z,authorsImageUrls:[void 0,void 0]},u=[{value:"Drafting fully constrained sketches",id:"drafting-fully-constrained-sketches",level:2},{value:"Tool settings",id:"tool-settings",level:2},{value:"Further work",id:"further-work",level:2}],c=(p="Youtube",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var p;const h={toc:u};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We\u2019ve already introduced some improvements to sketching with constraints before, when Pierre-Louis Boyer implemented ",(0,o.kt)("a",{parentName:"p",href:"https://ondsel.com/blog/ondsel-made-constraining-sketches-faster-and-easier"},"contextual constraints"),". But there are more usability gaps there, and we are targeting them one by one. There\u2019s another major change currently undergoing code review: on-viewport tool widgets to create fully constrained sketches and tool settings to set various properties and choose drafting behavior."),(0,o.kt)("h2",{id:"drafting-fully-constrained-sketches"},"Drafting fully constrained sketches"),(0,o.kt)("p",null,"Thanks to Ondsel\u2019s developer Pierre-Louis Boyer and FreeCAD maintainer Abdullah Tahiriyo, the Sketcher workbench is now getting UX/UI improvements that aim to improve drafting fully constrained sketches. Pierre-Louis shot a quick video for internal use that we are sharing with you."),(0,o.kt)(c,{v:"Z-rA2zX5mas",mdxType:"Youtube"}),(0,o.kt)("p",null,"Here is a quick explainer of what\u2019s coming in version 1.0 here."),(0,o.kt)("p",null,"The usual workflow for creating a sketch is drawing shapes, then constraining them. That takes quite a while, if you intend to fully constrain a shape. Let\u2019s say we draw just a line. To fully constrain it, we then have to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Select its start and constrain its distance to X and Y coordinate origins (for XY plane)"),(0,o.kt)("li",{parentName:"ul"},"Select the line and constrain its distance"),(0,o.kt)("li",{parentName:"ul"},"Add another constrain to define its angle to X (for XY plane)")),(0,o.kt)("p",null,"Of course, there are several more ways to fully constrain a line, but the general idea is the same: draw a line in roughly the right spot, then \u201cfix\u201d it."),(0,o.kt)("p",null,"If we are drawing more complex shapes (e.g. polygons), getting them fully constrained takes even more time and effort, though contextual constraints help with that somewhat. Can we speed it up? Yes, that\u2019s the point of this coming improvement."),(0,o.kt)("p",null,"Now when you select a shape-drawing tool and hover the viewport, FreeCAD will display numeric entry widgets right in the viewport. When you type in a new value and press the ",(0,o.kt)("strong",{parentName:"p"},"Tab")," key, FreeCAD applies a constraint, updates the shape in the viewport, and moves the focus to the next entry widget. This is how it works for a line:"),(0,o.kt)("video",{width:"100%",height:"100%",controls:!0},(0,o.kt)("source",{src:"/video/sketcher-fully-constrained-line.mp4",type:"video/mp4"}),"Your browser does not support the video tag."),(0,o.kt)("p",null,"Currently supported objects are points, lines, rectangles, circles, and polygons. It\u2019s possible to add support for more object types."),(0,o.kt)("h2",{id:"tool-settings"},"Tool settings"),(0,o.kt)("p",null,"The second user-visible part of the patch is introducing tool settings in the Tasks panel. This helps build more expressive tools."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Different ways to define a shape")," will now be easily accessible: e.g. a line can be defined by the position of two points or by a combination of the start point\u2019s coordinates, the length of the line, and the angle."),(0,o.kt)("p",null,"Another possibility is ",(0,o.kt)("strong",{parentName:"p"},"different shape styles"),". A rectangle with rounded corners can now be an option of the regular rectangle tool. Similarly, rectangles can have a frame around them with user-defined thickness."),(0,o.kt)("p",null,"Finally, you can use it to ",(0,o.kt)("strong",{parentName:"p"},"set an inherent property of a shape"),", such as the amount of sides in a polygon."),(0,o.kt)("video",{width:"100%",height:"100%",controls:!0},(0,o.kt)("source",{src:"/video/sketcher-tool-options-short.mp4",type:"video/mp4"}),"Your browser does not support the video tag."),(0,o.kt)("p",null,"The same can be applied to arcs and conics later on."),(0,o.kt)("h2",{id:"further-work"},"Further work"),(0,o.kt)("p",null,"This is still an early implementation undergoing review, so there will be both minor tweaks and new features further down the road. Here are some of the ideas we have:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Enabling expressions in the spinboxes"),(0,o.kt)("li",{parentName:"ul"},"Adding Rotate, Scale, Translate tools with on-viewport widgets"),(0,o.kt)("li",{parentName:"ul"},"Adding a Chamfer tool to Sketcher")),(0,o.kt)("p",null,"Another thing we are planning to do is make full constraining an optional feature for users who want to be able to decide how many degrees of freedom they need for each particular shape. This could be a global preference setting or a quick toggle in the toolbar when you need to mix both approaches in the same project."),(0,o.kt)("p",null,"We are looking forward to reading your feedback. Until the patch has been merged, the best place to provide it is the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/FreeCAD/FreeCAD/pull/11174"},"pull request"),"."))}d.isMDXComponent=!0},84100:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/titlecard-bdc0886692eb3660d7e2926c8d19eae5.png"}}]);