"use strict";(self.webpackChunkondsel=self.webpackChunkondsel||[]).push([[4502],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>m});var o=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=o.createContext({}),d=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),p=d(a),u=n,m=p["".concat(l,".").concat(u)]||p[u]||c[u]||r;return a?o.createElement(m,i(i({ref:t},h),{},{components:a})):o.createElement(m,i({ref:t},h))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:n,i[1]=s;for(var d=2;d<r;d++)i[d]=a[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}u.displayName="MDXCreateElement"},56863:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var o=a(87462),n=(a(67294),a(3905));const r={slug:"libre-space-foundation-mbd-solver",title:"Simulating multi-body dynamics in zero gravity with Ondsel Solver",description:"A while ago we collaborated with Libre Space Foundation on a fun little project that required simulating multi-body dynamics in zero gravity.",authors:[{name:"Aleksandr Prokudin",title:"Contributing Writer",url:"https://github.com/prokoudine",image_url:"https://avatars.githubusercontent.com/u/57467?v=4"}],tags:["ondsel","mbd","simulations","solver"],image:"./titlecard.jpg",draft:!1},i=void 0,s={permalink:"/blog/libre-space-foundation-mbd-solver",source:"@site/blog/2024-10-02/lsf-feature.mdx",title:"Simulating multi-body dynamics in zero gravity with Ondsel Solver",description:"A while ago we collaborated with Libre Space Foundation on a fun little project that required simulating multi-body dynamics in zero gravity.",date:"2024-10-02T00:00:00.000Z",formattedDate:"October 2, 2024",tags:[{label:"ondsel",permalink:"/blog/tags/ondsel"},{label:"mbd",permalink:"/blog/tags/mbd"},{label:"simulations",permalink:"/blog/tags/simulations"},{label:"solver",permalink:"/blog/tags/solver"}],readingTime:5.365,hasTruncateMarker:!0,authors:[{name:"Aleksandr Prokudin",title:"Contributing Writer",url:"https://github.com/prokoudine",image_url:"https://avatars.githubusercontent.com/u/57467?v=4",imageURL:"https://avatars.githubusercontent.com/u/57467?v=4"}],frontMatter:{slug:"libre-space-foundation-mbd-solver",title:"Simulating multi-body dynamics in zero gravity with Ondsel Solver",description:"A while ago we collaborated with Libre Space Foundation on a fun little project that required simulating multi-body dynamics in zero gravity.",authors:[{name:"Aleksandr Prokudin",title:"Contributing Writer",url:"https://github.com/prokoudine",image_url:"https://avatars.githubusercontent.com/u/57467?v=4",imageURL:"https://avatars.githubusercontent.com/u/57467?v=4"}],tags:["ondsel","mbd","simulations","solver"],image:"./titlecard.jpg",draft:!1},prevItem:{title:"New in the Ondsel Lens addon: revamped UI, search, and more",permalink:"/blog/new-in-lens-addon-ui-search"},nextItem:{title:"Streamlining laser cutter workflows with Ondsel postprocessor",permalink:"/blog/ondsel-svg-postprocessor"}},l={image:a(86671).Z,authorsImageUrls:[void 0]},d=[{value:"What is Libre Space Foundation",id:"what-is-libre-space-foundation",level:2},{value:"The challenge",id:"the-challenge",level:2},{value:"The team",id:"the-team",level:2},{value:"What we did",id:"what-we-did",level:2},{value:"When to expect the mission",id:"when-to-expect-the-mission",level:2},{value:"What we have learned",id:"what-we-have-learned",level:2}],h=(p="Youtube",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)});var p;const c={toc:d};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"A while ago we collaborated with Libre Space Foundation on a fun little project that required simulating multi-body dynamics (MBD) in zero gravity. This helped us improve the MBD-capable solver that we\u2019ve been developing behind the scenes for a while. Here is the story."),(0,n.kt)("h2",{id:"what-is-libre-space-foundation"},"What is Libre Space Foundation"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://libre.space/"},"Libre Space Foundation")," (LSF) was established in 2015. Their mission \u2014 to advance open-source technologies in the space industry. The foundation focuses on developing and promoting open-source hardware and software solutions for satellite missions and space exploration."),(0,n.kt)("p",null,"LSF works on a range of projects, including satellite communications, ground station networks, and educational initiatives that aim to democratize access to space. Their efforts include projects like SatNOGS, an open-source global network of satellite ground stations, and UPSat, the first open-source satellite launched into space ini 2017."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Upsat launch",src:a(50322).Z,width:"1366",height:"768"})),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"UPSat is the left one in the satellites group. Image: NASA")),(0,n.kt)("p",null,"LSF mainly works on projects with the European Space Agency, one of their missions is set to launch from the SaxaVord spaceport in Scotland."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"SaxaVord launchpad",src:a(6739).Z,width:"1280",height:"720"})),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"SaxaVord launchpad. Image: SaxaVord")),(0,n.kt)("p",null,"The team have been ",(0,n.kt)("a",{parentName:"p",href:"https://forum.freecad.org/viewtopic.php?t=22922"},"long-time users")," of FreeCAD. All the models are ",(0,n.kt)("a",{parentName:"p",href:"https://gitlab.com/librespacefoundation"},"publicly available")," on Gitlab."),(0,n.kt)("h2",{id:"the-challenge"},"The challenge"),(0,n.kt)("p",null,"One of the projects by the LSF is PICOBUS, a ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/PocketQube"},"pocketqube")," satellite deployer. It has already seen real action in 2022 when it deployed 6 cubesats during the ",(0,n.kt)("a",{parentName:"p",href:"https://everydayastronaut.com/flta002-to-the-black-alpha/"},"first successful flight")," of Firefly\u2019s ",(0,n.kt)("a",{parentName:"p",href:"https://fireflyspace.com/alpha/"},"Alpha")," rocket."),(0,n.kt)(h,{v:"jprpUmrIjTs",mdxType:"Youtube"}),(0,n.kt)("p",null,"PICOBUS has the following parts:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The rail that CubeSats slide into."),(0,n.kt)("li",{parentName:"ul"},"The pusher that slides in the rail and holds the one end of the constant force spring."),(0,n.kt)("li",{parentName:"ul"},"Surrounding plates that hold pocketqubes in place."),(0,n.kt)("li",{parentName:"ul"},"The rocket mounting flange that attaches the deployer to the rocket."),(0,n.kt)("li",{parentName:"ul"},"The door that has the deployment mechanism, thermal knives, and electronics.")),(0,n.kt)("p",null,"Here is the entire model on Lens:"),(0,n.kt)("iframe",{width:"560",height:"315",src:"https://lens.ondsel.com/share/66f0a17144d4d1e0926a8c5a",title:"PICOBUS assembly for simulation"}),(0,n.kt)("p",null,"So how does the deployment in space happen? The door is held shut by a spring-loaded pin, and that pin is held in place by a string. When signal is received from the rocket, two thermal knives are heated, and the string is cut. Once they are cut, the pin is pulled out, and the door is allowed to rotate. With the door open, the constant-force spring pushes CubeSats out, and they exit the deployer."),(0,n.kt)(h,{v:"bov6562iv1s",mdxType:"Youtube"}),(0,n.kt)("p",null,"In fact, this FOSDEM 2024 talk discussed all this in great many detail:"),(0,n.kt)(h,{v:"ZOUvQp9r-P8",mdxType:"Youtube"}),(0,n.kt)("p",null,"Here comes the interesting part. To better understand what happens when the satellites leave the deployer, the LSF team needed to know three things:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Dimensions of the exit cone")," that satellites form when they are pushed outside."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Exit velocity")," of the satellites when they leave the deployer."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Satellite tumbling")," upon exit, as the satellites are pushed from the bottom plate and have a tumbling momentum.")),(0,n.kt)("p",null,"The challenge here was that calculations needed to involve multi-body dynamics simulation as cubesats hit the rail, the surrounding plates, the door, and each other as they exit the deployer."),(0,n.kt)("h2",{id:"the-team"},"The team"),(0,n.kt)("p",null,"On the LSF side, we worked with two core contributors to the project \u2014 Thanos Patsas and Manthos Papamatthaiou. On the Ondsel side, Dr. Aik-Siong Koh, principal developer of Ondsel Solver, did the majority of the consulting and the development of our own private solver with multi-body dynamics capabilities."),(0,n.kt)("p",null,"We also hired Jose Gabriel Egas Ortu\xf1o to do the actual simulation and improve the new version of his ",(0,n.kt)("a",{parentName:"p",href:"https://gitlab.com/josegegas/freecad-mbdyn-dynamics-workbench"},"multi-body dynamics workbench")," that originally relied on ",(0,n.kt)("a",{parentName:"p",href:"https://www.mbdyn.org/"},"MBDyn"),"."),(0,n.kt)("h2",{id:"what-we-did"},"What we did"),(0,n.kt)("p",null,"As Jose\u2019s workbench originally used MBDyn, we needed to update OndselMbD (our own solver, currently private) to read MBDyn input files and generate its output files so that it could be an MBDyn replacement in certain scenarios. A major challenge here was MBDyn not having the concept of Marker objects which are required by OndselMbD \u2014  an equivalent to local coordinate systems, that has methods to help with MBD calculations."),(0,n.kt)("p",null,"The Libre Space Foundation team provided us STEP models for almost all the parts involved. To make the assembly complete, Jose modeled a few more parts. The pusher was modeled using a constant-force spring which imposes an acceleration to the satellites once the door opens and deployment takes place. To open the door, a pre-loaded torsion spring was modeled which, once released, applied a torque to the door\u2019s hinge, opening it. "),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Overall assembly",src:a(36510).Z,width:"2560",height:"1440"})),(0,n.kt)("p",null,"Then Jose modeled the contacts between the pusher, CubeSats, and the door. These contacts were modeled using a mass-spring-damper contact model, in which a spring-damper system is added between the parts that make contact together, and the spring and damping constants are adjusted to mimic the behavior of the real contact."),(0,n.kt)("p",null,"Here is the simulation video:"),(0,n.kt)("video",{width:"100%",height:"100%",controls:!0},(0,n.kt)("source",{src:"/video/2024/lsf-feature/cubesats-deployment-simulation.mp4",type:"video/mp4"}),"Your browser does not support the video tag."),(0,n.kt)("h2",{id:"when-to-expect-the-mission"},"When to expect the mission"),(0,n.kt)("p",null,"The Libre Space Foundation team is currently waiting for the launch date \u2014 some time next year. This is going to be part of the maiden flight of the ",(0,n.kt)("a",{parentName:"p",href:"https://www.rfa.space/rfa-one/"},"RFA ONE")," rocket made by the Rocket Factory Augsburg."),(0,n.kt)("p",null,"You can follow the project on ",(0,n.kt)("a",{parentName:"p",href:"https://www.facebook.com/librespacefoundation"},"Facebook"),", ",(0,n.kt)("a",{parentName:"p",href:"https://x.com/LibreSpace_Fnd"},"X/Twitter"),", and ",(0,n.kt)("a",{parentName:"p",href:"https://www.linkedin.com/company/libre-space/"},"LinkedIn"),"."),(0,n.kt)("h2",{id:"what-we-have-learned"},"What we have learned"),(0,n.kt)("p",null,"On a technical level, we discovered a few things in MBDyn that are missing or need to be improved. In particular, the engine doesn't have the concept of markers \u2014 coordinate system objects on parts. You could apply forces and torques on them, use them to form joints and prescribed motions, take measurements between them and read their positions, velocities and accelerations. This is being discussed. We are also developing some prerequisites for markers in the core of Ondsel ES and FreeCAD."),(0,n.kt)("p",null,"On a purely emotional level, it\u2019s overwhelming to see someone using free and open-source software to design something that gets to fly into space and then do the job it was designed to do. The Libre Space Foundation made that a reality, several times already."),(0,n.kt)("p",null,"This collaboration and research around that also made us realize how much underappreciated the entire field of multi-body dynamics is. The industry-grade tools are expensive and very hard to master, but the results are extremely desirable. Unlocking MBD for more people is worth doing, but this means the tools have to be democratized \u2014 not just in price, but also in UX/UI. And there are some serious compromises to achieve here to make this work for both professionals and beginners."))}u.isMDXComponent=!0},36510:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/overall-assembly-ab4de9d23d6d309a8a9cadd586e55b47.webp"},6739:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/saxavord-launchpad-7693c7be39f0ef0da02dcc48ca271863.webp"},86671:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/titlecard-3381b62fecba75fb761955eb66fcb0a3.jpg"},50322:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/upsat-49ad8740013c47b71d835d2286046a73.webp"}}]);