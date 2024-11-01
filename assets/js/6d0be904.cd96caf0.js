"use strict";(self.webpackChunkondsel=self.webpackChunkondsel||[]).push([[6526],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var o=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=o.createContext({}),d=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=d(a),h=n,u=c["".concat(s,".").concat(h)]||c[h]||m[h]||r;return a?o.createElement(u,l(l({ref:t},p),{},{components:a})):o.createElement(u,l({ref:t},p))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:n,l[1]=i;for(var d=2;d<r;d++)l[d]=a[d];return o.createElement.apply(null,l)}return o.createElement.apply(null,a)}h.displayName="MDXCreateElement"},97:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var o=a(87462),n=(a(67294),a(3905));const r={slug:"exploded-views-in-assembly-workbench",title:"Exploded Views:  New tool enhances TechDraw and Assembly workbenches",authors:[{name:"Aleksandr Prokudin",title:"Contributing Writer",url:"https://github.com/prokoudine",image_url:"https://avatars.githubusercontent.com/u/57467?v=4"}],tags:["freecad","assembly","explosion"],image:"./titlecard.png",draft:!1},l=void 0,i={permalink:"/blog/exploded-views-in-assembly-workbench",source:"@site/blog/2024-05-01/explosion.mdx",title:"Exploded Views:  New tool enhances TechDraw and Assembly workbenches",description:"Now that the basic assembly workflow is mostly complete and operational in Ondsel ES, we are beginning to add new tools. One of the features coming in the next release are exploded views.",date:"2024-05-01T00:00:00.000Z",formattedDate:"May 1, 2024",tags:[{label:"freecad",permalink:"/blog/tags/freecad"},{label:"assembly",permalink:"/blog/tags/assembly"},{label:"explosion",permalink:"/blog/tags/explosion"}],readingTime:2.84,hasTruncateMarker:!0,authors:[{name:"Aleksandr Prokudin",title:"Contributing Writer",url:"https://github.com/prokoudine",image_url:"https://avatars.githubusercontent.com/u/57467?v=4",imageURL:"https://avatars.githubusercontent.com/u/57467?v=4"}],frontMatter:{slug:"exploded-views-in-assembly-workbench",title:"Exploded Views:  New tool enhances TechDraw and Assembly workbenches",authors:[{name:"Aleksandr Prokudin",title:"Contributing Writer",url:"https://github.com/prokoudine",image_url:"https://avatars.githubusercontent.com/u/57467?v=4",imageURL:"https://avatars.githubusercontent.com/u/57467?v=4"}],tags:["freecad","assembly","explosion"],image:"./titlecard.png",draft:!1},prevItem:{title:"Ondsel ES 2024.2 released: more assembly tools and UX/UI polish",permalink:"/blog/ondsel-es-2024-2"},nextItem:{title:"CATIA suffers from the same problems that Ondsel / FreeCAD are solving. And it's expensive",permalink:"/blog/catia-suffers-from-the-same-problems"}},s={image:a(67587).Z,authorsImageUrls:[void 0]},d=[{value:"Creating exploded views manually",id:"creating-exploded-views-manually",level:2},{value:"Exploding radially",id:"exploding-radially",level:2},{value:"Generating technical documentation",id:"generating-technical-documentation",level:2},{value:"What\u2019s next?",id:"whats-next",level:2}],p={toc:d};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Now that the basic assembly workflow is mostly complete and operational in Ondsel ES, we are beginning to add new tools. One of the features coming in the next release are exploded views."),(0,n.kt)("p",null,"Proprietary software vendors typically ship exploded views as part of either the assembly feature set (e.g. SolidWorks) or the animation environment (e.g. Fusion 360). Either way, you typically get controllable transitions from one explosion step to another."),(0,n.kt)("p",null,"For Ondsel ES 2024.2, we are aiming for a minimum viable product: a tool that creates exploded views and a possibility to place an exploded view on a TechDraw page."),(0,n.kt)("h2",{id:"creating-exploded-views-manually"},"Creating exploded views manually"),(0,n.kt)("p",null,"Open an assembly project, double-click the assembly object in the tree, and select the \u2018Create Exploded View\u2019 tool in the toolbar or press ",(0,n.kt)("strong",{parentName:"p"},"V"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Original view of the assembly",src:a(88021).Z,width:"1265",height:"657"})),(0,n.kt)("p",null,"Select a part or several parts in the assembly and use the transform gizmo to move them away from the rest of the assembly. You can move it along one axis or all three, if you like:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Move a part",src:a(97894).Z,width:"2560",height:"1440"})),(0,n.kt)("p",null,"You also have control over the position of the transform gizmo: once a part is selected, the Task panel displays an \u2018Align dragger\u2019 drop-down menu with three options: aligning to the center of a part, to its origin, or to arbitrary geometry that you can select:"),(0,n.kt)("video",{width:"100%",height:"100%",controls:!0},(0,n.kt)("source",{src:"/video/integrated-assembly-explosion-align-dragger.mp4",type:"video/mp4"}),"Your browser does not support the video tag."),(0,n.kt)("p",null,"Once you move a part, the tool will render a trace for each movement as a dashed line:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Moved part with a trace",src:a(46843).Z,width:"2560",height:"1440"})),(0,n.kt)("p",null,"You can also create multiple exploded views, e.g. first you take screw out of an enclosure, then you move the cover:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Second exploded view",src:a(28877).Z,width:"2560",height:"1440"})),(0,n.kt)("h2",{id:"exploding-radially"},"Exploding radially"),(0,n.kt)("p",null,"Depending on the model and use case, you might want to simply move all parts away from each other as if an explosion happened in the middle of an assembly, and the shock wave moved parts in different directions."),(0,n.kt)("p",null,"To do that, you can use an experimental tool for radial explosion. Simply initiate a new exploded view and click the \u2018Explode radially\u2019 button on the task panel. This will select all parts in the assembly and display a transform gizmo in the 3D view. Dragging it by any of the three axes will \u201cexplode\u201d the model radially."),(0,n.kt)("video",{width:"100%",height:"100%",controls:!0},(0,n.kt)("source",{src:"/video/integrated-assembly-radial-explosion.mp4",type:"video/mp4"}),"Your browser does not support the video tag."),(0,n.kt)("p",null,"Please note that for now, we are using a simple implementation where the radial explosion is calculated from the assembly\u2019s 3D bounding box. This is not set in stone."),(0,n.kt)("h2",{id:"generating-technical-documentation"},"Generating technical documentation"),(0,n.kt)("p",null,"Placing an exploded view on a TechDraw page works just as expected: you simply switch to the TechDraw workbench, add a page, select the exploded view object in the tree, and click \u2018Insert View\u2019:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Exploded view on a TD page",src:a(93213).Z,width:"2560",height:"1440"})),(0,n.kt)("h2",{id:"whats-next"},"What\u2019s next?"),(0,n.kt)("p",null,"Of course, we have lots of ideas on how to improve the Exploded View tool further. We could be creating radial explosions from the center of mass or from the fixed part. We could be adding a simple animation system based on keyframes. So this is one of the cases where we rely on user feedback."),(0,n.kt)("p",null,"We are shipping the minimal implementation in the next stable release of Ondsel ES for wider testing. We\u2019ll adjust development plans for exploded views based on the feedback we receive from you."))}c.isMDXComponent=!0},88021:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/create-exploded-view-4ca394e93866ae1335263c16c73ab370.webp"},97894:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/drag-parts-out-3225a37750470fde516d8e34d1c8425a.webp"},93213:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/exploded-view-on-td-page-11f34c059cb8e33d13a016787d6d9946.webp"},46843:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/movement-trace-lines-4e0e1ab5ea727c7b6a7953f6fabd3e11.webp"},28877:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/second-exploded-view-6b33c49049b85a9217f0cee0b5b8e8ad.webp"},67587:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/titlecard-f23a5e113ab67a7787f23216e2f3b944.png"}}]);