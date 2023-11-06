"use strict";(self.webpackChunkondsel=self.webpackChunkondsel||[]).push([[8739],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>c});var r=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function n(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=r.createContext({}),m=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,p=n(e,["components","mdxType","originalType","parentName"]),h=m(a),d=i,c=h["".concat(l,".").concat(d)]||h[d]||u[d]||s;return a?r.createElement(c,o(o({ref:t},p),{},{components:a})):r.createElement(c,o({ref:t},p))}));function c(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=a.length,o=new Array(s);o[0]=d;var n={};for(var l in t)hasOwnProperty.call(t,l)&&(n[l]=t[l]);n.originalType=e,n[h]="string"==typeof e?e:i,o[1]=n;for(var m=2;m<s;m++)o[m]=a[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1939:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>n,toc:()=>m});var r=a(7462),i=(a(7294),a(3905));const s={slug:"freecad-needs-a-better-materials-system",title:"FreeCAD Needs A Better Materials System",authors:[{name:"Alexandre Prokoudine",title:"Contributing Writer",url:"https://github.com/prokoudine",image_url:"https://avatars.githubusercontent.com/u/57467?v=4"},{name:"Dave Carter",title:"Contributing Writer",url:"https://github.com/davesrocketshop",Image_url:"https://avatars.githubusercontent.com/u/38090157?v=4"}],tags:["freecad","development"],image:"./titlecard.png",draft:!1},o=void 0,n={permalink:"/blog/freecad-needs-a-better-materials-system",source:"@site/blog/2023-06-09/materials.md",title:"FreeCAD Needs A Better Materials System",description:"FreeCAD has a basic implementation of a materials system. While it works in some use cases, we think it can be vastly improved to become a lot more useful. Let\u2019s discuss what\u2019s already available, what\u2019s missing, and what\u2019s a possible way forward with this. But first, why are we even discussing it?",date:"2023-06-09T00:00:00.000Z",formattedDate:"June 9, 2023",tags:[{label:"freecad",permalink:"/blog/tags/freecad"},{label:"development",permalink:"/blog/tags/development"}],readingTime:10.165,hasTruncateMarker:!1,authors:[{name:"Alexandre Prokoudine",title:"Contributing Writer",url:"https://github.com/prokoudine",image_url:"https://avatars.githubusercontent.com/u/57467?v=4",imageURL:"https://avatars.githubusercontent.com/u/57467?v=4"},{name:"Dave Carter",title:"Contributing Writer",url:"https://github.com/davesrocketshop",Image_url:"https://avatars.githubusercontent.com/u/38090157?v=4"}],frontMatter:{slug:"freecad-needs-a-better-materials-system",title:"FreeCAD Needs A Better Materials System",authors:[{name:"Alexandre Prokoudine",title:"Contributing Writer",url:"https://github.com/prokoudine",image_url:"https://avatars.githubusercontent.com/u/57467?v=4",imageURL:"https://avatars.githubusercontent.com/u/57467?v=4"},{name:"Dave Carter",title:"Contributing Writer",url:"https://github.com/davesrocketshop",Image_url:"https://avatars.githubusercontent.com/u/38090157?v=4"}],tags:["freecad","development"],image:"./titlecard.png",draft:!1},prevItem:{title:"Let\u2019s Build a Core System for Custom Data Elements in FreeCAD",permalink:"/blog/build-system-for-custom-data-elements"},nextItem:{title:"What does it mean that my GitHub project has 900 open issues?",permalink:"/blog/better-github-issues"}},l={image:a(2184).Z,authorsImageUrls:[void 0,void 0]},m=[{value:"Why A Good Materials System Is Important",id:"why-a-good-materials-system-is-important",level:2},{value:"So What\u2019s Wrong With What We Already Have?",id:"so-whats-wrong-with-what-we-already-have",level:2},{value:"Previous Attempt at Fixing The Materials System",id:"previous-attempt-at-fixing-the-materials-system",level:2},{value:"What The Updated Materials System Should Be Like",id:"what-the-updated-materials-system-should-be-like",level:2},{value:"The Way Forward",id:"the-way-forward",level:2},{value:"What\u2019s Ondsel\u2019s Interest In A Materials System",id:"whats-ondsels-interest-in-a-materials-system",level:2},{value:"What You Can Do",id:"what-you-can-do",level:2}],p={toc:m};function h(e){let{components:t,...s}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"FreeCAD has a basic implementation of a materials system. While it works in some use cases, we think it can be vastly improved to become a lot more useful. Let\u2019s discuss what\u2019s already available, what\u2019s missing, and what\u2019s a possible way forward with this. But first, why are we even discussing it?"),(0,i.kt)("p",null,"We are introducing a new co-author in this post. Dave Carter has been a FreeCAD user since v0.16 (primarily for rocketry and 3D printing). He worked over 40 years as a software developer in government, supply chain, and automotive industries. He is the main person behind the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/davesrocketshop/Rocket"},"Rocket")," workbench that helps design model and amateur rockets and components for them. Dave volunteered to lead the effort creating an updated materials system for FreeCAD and has been actively working towards that goal for the past several weeks."),(0,i.kt)("h2",{id:"why-a-good-materials-system-is-important"},"Why A Good Materials System Is Important"),(0,i.kt)("p",null,"Materials are a lot more than the color of solids in the viewport. As engineers, we need basic mechanical properties like density to calculate mass. We need advanced mechanical properties, as well as thermal and electrical properties to run various simulations (think finite element analysis). We need vendor-specific data to make an estimation of material cost. We also need materials to make commercial-grade rendering easy."),(0,i.kt)("p",null,"So a good materials system needs a database of materials with mechanical, thermal, electrical, architectural, and other properties. But it goes even further than that."),(0,i.kt)("p",null,"We know that materials behave differently depending on environment conditions. For example, we know that Young's modulus of metals decreases when temperature increases. So a materials system has to provide tools to build relationships between different material properties. Otherwise simulations won\u2019t provide usable results."),(0,i.kt)("p",null,"Is that all? Nope. A concrete wall will have a first coat and then a finish. A model rocket will have a primer paint on top of the body, and then a coat of spray paint on top of parts of the primer paint. So a good materials system has to be able to deal with compound materials / multi-materials."),(0,i.kt)("p",null,"It\u2019s also a great idea to have a more or less uniform UX/UI for working with materials in different scenarios. An architect by trade can be a tinkerer in their spare time, making Arduino-based devices, small home automation projects, and the like. They would appreciate not having to re-learn everything just because it\u2019s a different set of tools in the same CAD system they use."),(0,i.kt)("h2",{id:"so-whats-wrong-with-what-we-already-have"},"So What\u2019s Wrong With What We Already Have?"),(0,i.kt)("p",null,"Let\u2019s take a closer look at what\u2019s currently available in FreeCAD. A major part of the existing materials system is the Material Editor:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Existing materials editor",src:a(7139).Z,width:"1308",height:"1135"})),(0,i.kt)("p",null,"It relies on a small catalog of materials (slightly over 100) available throughout FreeCAD. For each material, it\u2019s possible to set properties in several categories:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Mechanical"),(0,i.kt)("li",{parentName:"ul"},"Thermal"),(0,i.kt)("li",{parentName:"ul"},"Electrical"),(0,i.kt)("li",{parentName:"ul"},"Architectural"),(0,i.kt)("li",{parentName:"ul"},"Rendering"),(0,i.kt)("li",{parentName:"ul"},"Vector Rendering (hatching)"),(0,i.kt)("li",{parentName:"ul"},"Cost (vendor-specific)"),(0,i.kt)("li",{parentName:"ul"},"User-defined")),(0,i.kt)("p",null,"Custom properties can be added to the user-defined category to accommodate for workflow specifics."),(0,i.kt)("p",null,"The existing materials system is currently used in FEM and Arch workbenches that are available by default, as well as in 3rd-party workbenches like ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.freecad.org/Rocket_Workbench"},"Rocket")," and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/FreeCAD/FreeCAD-render"},"Render"),"."),(0,i.kt)("p",null,"All this is a great start. But there are also various issues. Here are just some of the more obvious ones:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"It is impossible to set a different material to every face of a part. You can have a piece of metal or block of concrete with a coating on one side and nothing at all on the other one."),(0,i.kt)("li",{parentName:"ul"},"Multi-materials are only possible in the Arch workbench, but that is not enough. Any metallic or plastic solid and a paint job already make it ",(0,i.kt)("em",{parentName:"li"},"at least")," two materials."),(0,i.kt)("li",{parentName:"ul"},"It should be possible to override properties set in the material card in a more or less uniform way. Maybe a variation of a material has slightly different mechanical or thermal properties, or maybe a building materials supplier is setting a different cost on a per-project basis."),(0,i.kt)("li",{parentName:"ul"},"Material cards do not account for real-life behavior of materials, e.g. some physical properties may vary with temperature. A common use case is ",(0,i.kt)("a",{parentName:"li",href:"https://forum.freecad.org/viewtopic.php?p=461640&sid=cb795e11170e14ba824af3b437645500#p461640"},"describing different CTEs at different temperatures for FEM"),". Moreover, the existing system only allows for isotropic materials that behave consistently regardless of direction. Orthotropic materials, such as wood, have different characteristics depending on direction: against the grain is stronger than with the grain."),(0,i.kt)("li",{parentName:"ul"},"Texture mapping is separate from the material settings and only allows loading a texture file, with no positioning settings."),(0,i.kt)("li",{parentName:"ul"},"Material information is not accounted for when importing/exporting from/to some file formats."),(0,i.kt)("li",{parentName:"ul"},"There are no built-in functions to use the material data to make basic calculations such as weight, or cost."),(0,i.kt)("li",{parentName:"ul"},"There\u2019s no easy way to tell which part of an assembly doesn\u2019t have an assigned material."),(0,i.kt)("li",{parentName:"ul"},"The material editor has no UI for categories. It works as long as the list of materials is relatively small, but this will become a problem once the list is expanded.")),(0,i.kt)("p",null,"This is just scratching the surface."),(0,i.kt)("h2",{id:"previous-attempt-at-fixing-the-materials-system"},"Previous Attempt at Fixing The Materials System"),(0,i.kt)("p",null,"The topic of improving the existing materials system has been brought up before. Around 2016, a contributor named Eivind Kvedalen attempted to fix some of the issues, in particular: arbitrary properties, per-face materials, infrastructure for a material database. He made two commits in a public fork on GitHub, and continued the discussion. But eventually this initiative went into slumber. Right now, the fork needs further work to even compile."),(0,i.kt)("p",null,"As is usual in the FreeCAD ecosystem, people also attempted to come up with various workarounds. The 3rd-party ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/furti/FreeCAD-ArchTextures"},"Arch Textures")," workbench exists solely to work around the limitations of the built-in texture mapper. The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/andreasBihlmaier/FreeCAD"},"FCinfo")," macro helps make basic calculations based on mechanical properties."),(0,i.kt)("h2",{id:"what-the-updated-materials-system-should-be-like"},"What The Updated Materials System Should Be Like"),(0,i.kt)("p",null,"Having studied the subject, here\u2019s the gist of what we think the new system should be like."),(0,i.kt)("p",null,"FreeCAD needs a ",(0,i.kt)("strong",{parentName:"p"},"way to store materials data")," in the project. If you created an assembly and used materials with custom properties (even if it\u2019s just the material cost because you got a discount from your supplier), your team or contractors should be able to open that file and see assigned materials and related data."),(0,i.kt)("p",null,"There have to be ",(0,i.kt)("strong",{parentName:"p"},"per-face / per-solid materials and multi-materials"),". This shouldn\u2019t be an Arch-specific feature like it is now, it has to be available for all workbenches."),(0,i.kt)("p",null,"There needs to be a ",(0,i.kt)("strong",{parentName:"p"},"more uniform UX/UI for selecting material and overriding its properties")," one way or another. The set of properties may vary between workbenches, but UI for overriding should follow the same design pattern."),(0,i.kt)("p",null,"It would be an absolute must to have an easily",(0,i.kt)("strong",{parentName:"p"}," accessible calculation of basic part properties"),". Users should be able to easily see the weight of one part or an entire assembly."),(0,i.kt)("p",null,"We definitely see interest in having ",(0,i.kt)("strong",{parentName:"p"},"texture mapping and probably hatching")," as part of a material, with advanced settings. Advanced UV editing could be done by 3rd-party tools, but the basics of texture mapping should be there."),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"material editor has to be enhanced"),": materials should be pre-organized into categories, have tags, rendering preview etc. The list of materials should be searchable."),(0,i.kt)("p",null,"There\u2019s a strong requirement to be able to ",(0,i.kt)("strong",{parentName:"p"},"set relationships between properties for realistic simulations"),". There are multiple approaches to do that. We can do it with curves (like SolidWorks does) or by making multiple entries with an associated temperature range (or pressure, or whatever)."),(0,i.kt)("p",null,"It\u2019s generally a good idea to have ",(0,i.kt)("strong",{parentName:"p"},"easy access to up-to-date vendor data on materials")," where possible. There are many existing materials systems, ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Moult/IfcClassification"},"here")," are just some of those in the architecture department. We know that accessing up-to-date information won\u2019t be easy. When APIs even exist, they are typically not public or documented. And even there we\u2019d be extremely cautious, because setting cost implies responsibility, and FreeCAD needs to be very clear where that responsibility is."),(0,i.kt)("h2",{id:"the-way-forward"},"The Way Forward"),(0,i.kt)("p",null,"Because of how far-reaching the implications of the materials system are, we think bringing it to the state of the art needs to be a community project with all major stakeholders involved."),(0,i.kt)("p",null,"There\u2019s a small task force building around this project."),(0,i.kt)("p",null,"Ondsel made a start on analyzing what makes a materials system great, explored implementations in various other CAD programs (SolidWorks, Inventor, Onshape, Revit, Archicad), studied the existing implementation in FreeCAD, and put together an initial list of requirements."),(0,i.kt)("p",null,"Dave Carter, the developer behind the Rocket workbench, volunteered to lead the effort and already ",(0,i.kt)("a",{parentName:"p",href:"https://forum.freecad.org/viewtopic.php?style=4&p=685834#p685834"},"made good progress")," towards designing a better material editor and replacing the old material cards storage system with human-readable YAML files."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"New materials editor",src:a(1436).Z,width:"852",height:"747"})),(0,i.kt)("p",null,"The first stage of this project is just that: new materials editor UI, new file format for material cards, and over 600 categorized materials. It\u2019s a work in progress, you can see the updated material card UI on the screenshot above. "),(0,i.kt)("p",null,"The second stage will involve physical properties, relationships between those, and appearance settings."),(0,i.kt)("p",null,"After that, work has to be done on finalizing the UI, polishing icons, writing documentation etc."),(0,i.kt)("p",null,"There are also a number of considerations to be made, depending on feedback from users and developers. More on that below."),(0,i.kt)("p",null,"Once we collect more information, we will analyze it and submit a public proposal in FreeCAD\u2019s issue tracker for everyone to see and comment on. We\u2019ll then do our best to help all interested parties to complete this project. We discussed it with the FPA, and a grant is possible."),(0,i.kt)("h2",{id:"whats-ondsels-interest-in-a-materials-system"},"What\u2019s Ondsel\u2019s Interest In A Materials System"),(0,i.kt)("p",null,"There are multiple reasons for Ondsel to be involved with (and lead) this initiative."),(0,i.kt)("p",null,"Ondsel\u2019s platform is primarily FreeCAD users, so the better FreeCAD is, the more users it has, the more customers the company gets (and thus the more Ondsel can invest into improving FreeCAD further). So the company needs FreeCAD to be excellent in every aspect. A great materials system is part of that."),(0,i.kt)("p",null,"Ondsel is also considering implementation of some features like commercial-grade ray-tracing in the online service that will directly depend on a materials system."),(0,i.kt)("p",null,"Thus the company is interested in working with anyone willing to implement a better materials system and support them as much as we can. Dave made an impressive start on revamping the entire system, but he will need help."),(0,i.kt)("h2",{id:"what-you-can-do"},"What You Can Do"),(0,i.kt)("p",null,"There definitely are ways you can be part of this initiative."),(0,i.kt)("p",null,"If you are a user, we are interested to know more about your workflow specifics:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"How do you use materials in FreeCAD or elsewhere?"),(0,i.kt)("li",{parentName:"ul"},"What materials-dependent simulations do you run? What material properties do they rely on?"),(0,i.kt)("li",{parentName:"ul"},"What type of materials do you deal with on a daily basis? What\u2019s their variety? How often do you add custom materials?"),(0,i.kt)("li",{parentName:"ul"},"Are there specific material vendors you deal with? Do they make it easy to access materials data?"),(0,i.kt)("li",{parentName:"ul"},"Do you use the Appearance dialog to change the look of parts? How would replacing it with something actually based on materials\u2019 appearance settings affect your workflow? "),(0,i.kt)("li",{parentName:"ul"},"What file formats do you import/export that require materials support?"),(0,i.kt)("li",{parentName:"ul"},"What are your appearance/texturing requirements for materials?"),(0,i.kt)("li",{parentName:"ul"},"What are your sources of material physical properties?"),(0,i.kt)("li",{parentName:"ul"},"Would you be more comfortable with a purely offline materials database, an online materials database like ",(0,i.kt)("a",{parentName:"li",href:"https://materialsproject.org/"},"Materials Project"),", or a combination of both?")),(0,i.kt)("p",null,"If you are a workbench/macro developer, what specific requirements for a materials system does the materials team need to know about? If you are a developer with experience programming materials\u2019 look and feel, please contact Dave."),(0,i.kt)("p",null,"We\u2019d love to have you join the ",(0,i.kt)("a",{parentName:"p",href:"https://forum.freecad.org/viewtopic.php?style=4&t=78242"},"discussion"),". If you agree that better materials will help make FreeCAD great and don't have any feedback to offer, please consider ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.freecad.org/Donate"},"donating to the FPA")," so that more contributors get support for improving FreeCAD."),(0,i.kt)("p",null,"And last but not least, Dave Carter\u2019s initiative to take matters into his own hands is precisely the kind of practical approach to improving FreeCAD that we\u2019d love to see more of. If you are a user who shares this view, please consider donating to FreeCAD Project Association\u2019s ",(0,i.kt)("a",{parentName:"p",href:"https://fpa.freecad.org/programs/fpadf-announcement"},"developer fund"),", so that active contributors getting funding would become the norm."))}h.isMDXComponent=!0},7139:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/current-materials-editor-ef0301422381273b27ee5989224849cc.png"},1436:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/new-materials-editor-alpha-380ee9be228aa714739f575845c94782.png"},2184:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/titlecard-b87cffa156af0fd62d7287d6469ca5ba.png"}}]);