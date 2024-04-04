"use strict";(self.webpackChunkondsel=self.webpackChunkondsel||[]).push([[7558],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>m});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=n.createContext({}),h=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},d=function(e){var t=h(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=h(o),p=a,m=c["".concat(l,".").concat(p)]||c[p]||u[p]||r;return o?n.createElement(m,i(i({ref:t},d),{},{components:o})):n.createElement(m,i({ref:t},d))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var h=2;h<r;h++)i[h]=o[h];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}p.displayName="MDXCreateElement"},19305:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>h});var n=o(87462),a=(o(67294),o(3905));const r={slug:"sheetmetal-strategy",title:"Addons like SheetMetal need to be planned and developed like the rest of FreeCAD",description:"The SheetMetal workbench is really important for users, so let's have a long-term strategy for it.",authors:[{name:"Alexandre Prokoudine",title:"Contributing Writer",url:"https://github.com/prokoudine",image_url:"https://avatars.githubusercontent.com/u/57467?v=4"},{name:"Joe Sardos",title:"Contributing Writer",url:"https://github.com/obelisk79"}],tags:["sheetmetal","ondsel es"],image:"./titlecard.png",draft:!1},i=void 0,s={permalink:"/blog/sheetmetal-strategy",source:"@site/blog/2024-04-04/sheetmetal.mdx",title:"Addons like SheetMetal need to be planned and developed like the rest of FreeCAD",description:"The SheetMetal workbench is really important for users, so let's have a long-term strategy for it.",date:"2024-04-04T00:00:00.000Z",formattedDate:"April 4, 2024",tags:[{label:"sheetmetal",permalink:"/blog/tags/sheetmetal"},{label:"ondsel es",permalink:"/blog/tags/ondsel-es"}],readingTime:8.37,hasTruncateMarker:!0,authors:[{name:"Alexandre Prokoudine",title:"Contributing Writer",url:"https://github.com/prokoudine",image_url:"https://avatars.githubusercontent.com/u/57467?v=4",imageURL:"https://avatars.githubusercontent.com/u/57467?v=4"},{name:"Joe Sardos",title:"Contributing Writer",url:"https://github.com/obelisk79"}],frontMatter:{slug:"sheetmetal-strategy",title:"Addons like SheetMetal need to be planned and developed like the rest of FreeCAD",description:"The SheetMetal workbench is really important for users, so let's have a long-term strategy for it.",authors:[{name:"Alexandre Prokoudine",title:"Contributing Writer",url:"https://github.com/prokoudine",image_url:"https://avatars.githubusercontent.com/u/57467?v=4",imageURL:"https://avatars.githubusercontent.com/u/57467?v=4"},{name:"Joe Sardos",title:"Contributing Writer",url:"https://github.com/obelisk79"}],tags:["sheetmetal","ondsel es"],image:"./titlecard.png",draft:!1},nextItem:{title:"Autodesk\u2019s way of handling the IFC standard is helping nobody",permalink:"/blog/native-ifc"}},l={image:o(70576).Z,authorsImageUrls:[void 0,void 0]},h=[{value:"Technical review",id:"technical-review",level:2},{value:"UI/UX that is consistent with FreeCAD norms",id:"uiux-that-is-consistent-with-freecad-norms",level:3},{value:"Parametric unfold object",id:"parametric-unfold-object",level:3},{value:"Better unfolder",id:"better-unfolder",level:3},{value:"Cleaner, refactored code",id:"cleaner-refactored-code",level:3},{value:"Unit tests",id:"unit-tests",level:3},{value:"Translation support via Crowdin",id:"translation-support-via-crowdin",level:3},{value:"Design review",id:"design-review",level:2},{value:"Strategy",id:"strategy",level:2},{value:"What\u2019s next",id:"whats-next",level:2}],d={toc:h};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"One of the conclusions in the ",(0,a.kt)("a",{parentName:"p",href:"https://ondsel.com/blog/freecad-user-survey-results-part-2/"},"user survey series")," is that the SheetMetal workbench is really important for users. 9,2% respondents rely on this addon to do their job, it\u2019s also the third most popular choice for what to pay money for by professionals and the fourth most popular choice overall, after UI/UX, TNP, and Assembly WB."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"SheetMetal Wb in Ondsel ES",src:o(4767).Z,width:"2560",height:"1440"})),(0,a.kt)("p",null,"The sheet metal functionality is commonly included in proprietary CAD products \u2014 Solidworks, NX, Onshape, and Fusion 360 to name just a few. Users expect that this workbench should look and work as an integral part of FreeCAD \u2014 if not actually be shipped by default."),(0,a.kt)("p",null,"Ondsel strives to make the out-of-box user experience as good as possible and also to meet the most common needs of commercial users. For us, having Sheetmetal installed by default is an obvious choice. We can\u2019t force this workbench on the upstream project, but we can help improve it to the point where it\u2019s consistent with the rest of the program and performs even better than today. We can encourage some long-term thinking about this great workbench and start contributing to it the way we contribute to the core project. So we started with a technical review of SheetMetal and then asked the FreeCAD design working group to do the UX review."),(0,a.kt)("p",null,"Let\u2019s talk about what a long-term strategy might involve and what the technical and the UX reviews looked like and what their outcome is."),(0,a.kt)("p",null,"This post is made in collaboration with Joe Sardos (Obelisk), one of the participants in the\ndesign working group and author of the excellent OpenDark theme used in Ondsel ES."),(0,a.kt)("h2",{id:"technical-review"},"Technical review"),(0,a.kt)("p",null,"Brad Collette, Ondsel\u2019s CTO, did the first technical review of the SheetMetal WB during the summer of 2023. He ended up ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/shaise/FreeCAD_SheetMetal/pull/280"},"refactoring")," some of the code to separate UI from logic and make the workbench scriptable."),(0,a.kt)("p",null,"A more thorough look revealed some of the things we still need to change to make SheetMetal feel like core functionality."),(0,a.kt)("h3",{id:"uiux-that-is-consistent-with-freecad-norms"},"UI/UX that is consistent with FreeCAD norms"),(0,a.kt)("p",null,"Many of the functions that a user can initiate in the workbench result in objects in the tree. For example the user can select a face of a solid and \u2018make a wall\u2019. This immediately modifies the shape in the 3D window and adds a \u2018Bend\u2019 object to the tree. The user can select the Bend object and adjust many properties of it. To be more consistent with the overall program\u2019s workflow, creating a wall should open a task panel that allows the user to set the properties directly. Double-clicking the Bend object should re-open the task panel and allow the user to change settings. "),(0,a.kt)("h3",{id:"parametric-unfold-object"},"Parametric unfold object"),(0,a.kt)("p",null,"An important feature in the workbench is the ability to select a shape and \u2018unfold\u2019 it to create a flattened representation that can be cut from sheet stock. However, the unfold object isn\u2019t parametrically linked to the original shape. So if the original shape changes \u2014 perhaps because the user adjusted an important dimension \u2014 the unfolded version has to be deleted and manually recreated. That\u2019s why the unfold object needs to become parametric by design."),(0,a.kt)("h3",{id:"better-unfolder"},"Better unfolder"),(0,a.kt)("p",null,"The logic for converting a folded shape into an unfolded representation is complex and computationally expensive. It\u2019s currently implemented in Python. Re-implementing this logic in C++ would provide substantial performance improvements. However, workbenches implemented as addons can\u2019t have C++ logic, so this change would mean that at least some parts of the workbench, such as the unfolder, need to become part of the FreeCAD."),(0,a.kt)("h3",{id:"cleaner-refactored-code"},"Cleaner, refactored code"),(0,a.kt)("p",null,"In general, the SheetMetal workbench is well written and the code is well organized. There are some areas where refactoring would be beneficial, especially to allow sheet metal functions to be used in scripts or headless operation."),(0,a.kt)("h3",{id:"unit-tests"},"Unit tests"),(0,a.kt)("p",null,"Like in much of FreeCAD, unit tests don\u2019t exist in SheetMetal. Implementing these would make it easier for contributors to add new features without breaking core logic."),(0,a.kt)("h3",{id:"translation-support-via-crowdin"},"Translation support via Crowdin"),(0,a.kt)("p",null,"Some parts of the workbench source have already been written to support internationalization and translation. The workbench has gotten some well-deserved love from translators. A thorough review of the UI and source code with an eye towards translation is needed."),(0,a.kt)("p",null,"With the UI/UX  in mind, we approached the design working group in February this year to ask them for a full review of the workbench. Over to Joe Sardos."),(0,a.kt)("h2",{id:"design-review"},"Design review"),(0,a.kt)("p",null,"First we, the design working group, studied sheet metal production basics (some of the design group members had some professional experience in this area) and terminology. This resulted in a review of function naming, with some suggested changes in order to support clarity and better differentiation between functions."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"screenshot",src:o(95487).Z,width:"1310",height:"513"})),(0,a.kt)("p",null,"The second part of the design review process was to understand what the current workflow was. In a nutshell, we used the workbench extensively ourselves and watched YouTube videos of other users interacting with the workbench. We looked for things that were particularly deficient/inefficient. The main takeaway was that everything was manipulated from the property panel. While concise, it was not particularly well-organized or efficient."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"screenshot",src:o(22951).Z,width:"2560",height:"1440"})),(0,a.kt)("p",null,"The next aspect was approaching if/how the workflow or modeling process could be improved or streamlined. One example here is our recommendation for a new container which is effectively a Part Design Body container with added properties related to sheet metal materials. Once those settings are defined at the very start of the modeling process, this absolves the user from needing to manipulate this at any time later."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"screenshot",src:o(71627).Z,width:"1163",height:"1034"})),(0,a.kt)("p",null,"The recommendation for a container does not mean the container will be required, the intent is not to restrict existing workbench combinations, but encourage a specific approach."),(0,a.kt)("p",null,"After establishing some important fundamentals about sheet metal design and a proposed workflow, we evaluated each function and what its intended purpose was. We also looked into reports that users of Sheet Metal have to jump over to Part Design for some common functions (the reports were also supported by some of the YouTube videos we watched and forum threads we reviewed). This led us to a full reorganization of the toolbars and recommended improvements to the toolbutton icons."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"screenshot",src:o(58112).Z,width:"1520",height:"1409"})),(0,a.kt)("p",null,"At this point, we had an interesting debate to determine some best practices for task panel layout, use of widget types, and visual/behavioral consistency. For example, we needed to figure out whether we should recommend static width of panels, how to manage single vs dual column layouts. Among other considerations \u2014 accounting for language translations with much longer words than what is found in English (we heard you, Polish speakers!)."),(0,a.kt)("p",null,"After this, we developed mockups of panels and discussed them in the open on FreeCAD's Discord server. We debated pros and cons, and eventually patterns and norms began to develop. These will eventually translate into the ",(0,a.kt)("a",{parentName:"p",href:"https://freecad.github.io/DevelopersHandbook/designguide/"},"Design Guide")," section of the handbook to establish standard guidelines for how task panels should be constructed."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"screenshot",src:o(69641).Z,width:"2560",height:"1440"})),(0,a.kt)("p",null,"I expect that this is just the beginning though, and these guidelines will continue to evolve and improve as we review/develop more task panels in the future. Particularly paying attention to user feedback on the new tasks. Understandably in its current state, the new guidelines would most likely not account for the needs of all existing functions throughout the entirety of FreeCAD. "),(0,a.kt)("h2",{id:"strategy"},"Strategy"),(0,a.kt)("p",null,"Thanks to Joe for the insight on how the design working group operates! Back to Ondsel now."),(0,a.kt)("p",null,"The strategy here is two-fold. First off, we intend to improve SheetMetal and integrate it into Ondsel ES. This will have to happen in multiple stages."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Stage 1: Revamp the UI/UX, move the translation to Crowdin.")," This is where we are right now. The design working group has already started contributing to the SheetMetal WB. In particular, maxwxyz has already submitted ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/shaise/FreeCAD_SheetMetal/pull/313"},"updated icons")," for the workbench to follow the new design guideline, and this change will be part of the next SheetMetal WB release. Both the toolbar reorganization, functions renaming, and switch to using the Task panel will happen here as well."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Stage 2: Hook up the new materials system.")," The existing implementation of materials in the workbench is not very efficient. On top of that, it would be great to be able to use different types of materials (think parametric cardboard designs)."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Stage 3: Rewrite the unfolder in C++ and get it included in FreeCAD core.")," This is one of the major takeaways of the technical review. As of today, unfolding is rather slow and would benefit from being written in a more performant programming language such as C++."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Stage 4: Rewrite the SheetMetal WB to use the core unfolder.")," Once the unfolder has been rewritten and moved to FreeCAD, we can go on and rewrite the workbench to use it."),(0,a.kt)("p",null,"While we are going to make SheetMetal part of the core Ondsel ES experience, we think upstream FreeCAD should consider the same thing. We also want this project to serve as an example of how core upstream developers, commercial development, the design working group, and addon developers can work together to achieve a common goal. "),(0,a.kt)("p",null,"We know from the user survey that addons are an important part of meeting user needs. We know from personal experience that addon developers are building great functionality but don\u2019t always have the skills or resources to fully develop it for production use. We believe that the larger community should regularly evaluate how addons are being used.  Work to identify functionality that has a broad appeal and then work to make the addon feel like part of the core experience both in functionality and in how it is maintained.  "),(0,a.kt)("h2",{id:"whats-next"},"What\u2019s next"),(0,a.kt)("p",null,"The design working group isn\u2019t huge, so there\u2019s enough work for everybody to improve FreeCAD and addons. If you feel like you have great expertise in UI/UX to lend, please join the ",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/8UTs35WE"},"Discord server")," and chat to people in the #design-working-group room. If you want to contribute to improving the SheetMetal workbench\u2019s source code, you can already pick some tasks in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/shaise/FreeCAD_SheetMetal/issues"},"issue tracker"),"."))}c.isMDXComponent=!0},71627:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/sheetmetal-container-eae0b1fec9ddee59b8f423129b47ead7.webp"},58112:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/sheetmetal-icons-1fa645e328b91cadfd54f7e0d3a318f0.webp"},4767:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/sheetmetal-intro-screenshot-afc39c08721b35027e2cef3fe1359d57.webp"},22951:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/sheetmetal-properties-d8a15e527014a8e0dc5d5b151c9b1c09.webp"},69641:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/sheetmetal-task-panel-0609ad1f569a2782f774f41144b78589.webp"},95487:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/sheetmetal-terminology-e9ddcbee1627f805d3a4c328454f8423.webp"},70576:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/titlecard-ed449c239e97e3a3ff0ffb842fb0f10f.png"}}]);