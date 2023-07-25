"use strict";(self.webpackChunkondsel=self.webpackChunkondsel||[]).push([[7716],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var s=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,s,r=function(e,t){if(null==e)return{};var a,s,r={},o=Object.keys(e);for(s=0;s<o.length;s++)a=o[s],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)a=o[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=s.createContext({}),h=function(e){var t=s.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},p=function(e){var t=h(e.components);return s.createElement(i.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},c=s.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=h(a),c=r,d=m["".concat(i,".").concat(c)]||m[c]||u[c]||o;return a?s.createElement(d,n(n({ref:t},p),{},{components:a})):s.createElement(d,n({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,n=new Array(o);n[0]=c;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[m]="string"==typeof e?e:r,n[1]=l;for(var h=2;h<o;h++)n[h]=a[h];return s.createElement.apply(null,n)}return s.createElement.apply(null,a)}c.displayName="MDXCreateElement"},8312:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>n,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>h});var s=a(7462),r=(a(7294),a(3905));const o={slug:"default-assembly-workbench-5",title:"Exploring the Assembly 4 workbench",authors:[{name:"Brad Collette",title:"Ondsel Core Team",url:"https://github.com/sliptonic",image_url:"https://avatars.githubusercontent.com/u/538057?v=4"},{name:"Alexandre Prokoudine",title:"Contributing Writer",url:"https://github.com/prokoudine",image_url:"https://avatars.githubusercontent.com/u/57467?v=4"}],tags:["freecad","development","assembly","assembly4"],image:"./titlecard.png",draft:!1},n=void 0,l={permalink:"/blog/default-assembly-workbench-5",source:"@site/blog/2023-03-28/assembly-5.md",title:"Exploring the Assembly 4 workbench",description:"In the previous posts in this series, we talked about the need for a default assembly workbench in FreeCAD and reviewed Assembly 2, A2plus, and Assembly 3. Let\u2019s talk about Assembly 4.",date:"2023-03-28T00:00:00.000Z",formattedDate:"March 28, 2023",tags:[{label:"freecad",permalink:"/blog/tags/freecad"},{label:"development",permalink:"/blog/tags/development"},{label:"assembly",permalink:"/blog/tags/assembly"},{label:"assembly4",permalink:"/blog/tags/assembly-4"}],readingTime:6.435,hasTruncateMarker:!1,authors:[{name:"Brad Collette",title:"Ondsel Core Team",url:"https://github.com/sliptonic",image_url:"https://avatars.githubusercontent.com/u/538057?v=4",imageURL:"https://avatars.githubusercontent.com/u/538057?v=4"},{name:"Alexandre Prokoudine",title:"Contributing Writer",url:"https://github.com/prokoudine",image_url:"https://avatars.githubusercontent.com/u/57467?v=4",imageURL:"https://avatars.githubusercontent.com/u/57467?v=4"}],frontMatter:{slug:"default-assembly-workbench-5",title:"Exploring the Assembly 4 workbench",authors:[{name:"Brad Collette",title:"Ondsel Core Team",url:"https://github.com/sliptonic",image_url:"https://avatars.githubusercontent.com/u/538057?v=4",imageURL:"https://avatars.githubusercontent.com/u/538057?v=4"},{name:"Alexandre Prokoudine",title:"Contributing Writer",url:"https://github.com/prokoudine",image_url:"https://avatars.githubusercontent.com/u/57467?v=4",imageURL:"https://avatars.githubusercontent.com/u/57467?v=4"}],tags:["freecad","development","assembly","assembly4"],image:"./titlecard.png",draft:!1},prevItem:{title:"Exploring BodyBuilder, Manipulator, and Part-o-magic",permalink:"/blog/default-assembly-workbench-6"},nextItem:{title:"Exploring the Assembly 3 workbench",permalink:"/blog/default-assembly-workbench-4"}},i={image:a(1096).Z,authorsImageUrls:[void 0,void 0]},h=[{value:"History",id:"history",level:2},{value:"Workflow and ease of use",id:"workflow-and-ease-of-use",level:2},{value:"Features",id:"features",level:2},{value:"Consistency",id:"consistency",level:2},{value:"Stability",id:"stability",level:2},{value:"Performance",id:"performance",level:2},{value:"Development Status",id:"development-status",level:2},{value:"Summary",id:"summary",level:2},{value:"Next up",id:"next-up",level:2}],p={toc:h},m="wrapper";function u(e){let{components:t,...o}=e;return(0,r.kt)(m,(0,s.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In the previous posts in this series, we talked about the need for a ",(0,r.kt)("a",{parentName:"p",href:"https://ondsel.com/blog/default-assembly-workbench-1"},"default assembly workbench")," in FreeCAD and reviewed ",(0,r.kt)("a",{parentName:"p",href:"https://ondsel.com/blog/default-assembly-workbench-2"},"Assembly 2"),", ",(0,r.kt)("a",{parentName:"p",href:"https://ondsel.com/blog/default-assembly-workbench-3"},"A2plus"),", and ",(0,r.kt)("a",{parentName:"p",href:"https://ondsel.com/blog/default-assembly-workbench-4"},"Assembly 3"),". Let\u2019s talk about Assembly 4."),(0,r.kt)("h2",{id:"history"},"History"),(0,r.kt)("p",null,"The project was started by Zolko in 2019 after some experiments with building assemblies without solvers. Zolko came to the community with extensive knowledge of other CAD programs such as Pro/E, Catia, and T-Flex, but he was very (and probably needlessly) humble about his programming skills."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Assembly 4 commits",src:a(2712).Z,width:"1760",height:"557"})),(0,r.kt)("p",null,"Just like with other assembly workbenches, much of the development has been affected by the user community, and a number of features have been contributed by other developers. So far, A4 is the only assembly workbench where the development pace is about the same as it was when the project started, and Zolko isn\u2019t done yet."),(0,r.kt)("h2",{id:"workflow-and-ease-of-use"},"Workflow and ease of use"),(0,r.kt)("p",null,"Assembly 4 relies on several core principles."),(0,r.kt)("p",null,"First off, it is built around the ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.freecad.org/App_Link"},"App:Link API")," that we already mentioned in previous posts in the series. In a nutshell, rather than creating a full copy of a part, FreeCAD will reference it. This makes models cleaner, and you always work with up-to-date geometry. The workbench also has the concept of a variant link which allows referencing the same object multiple times and using different parameters for each of the linked instances."),(0,r.kt)("p",null,"Secondly, rather than aligning characteristics of two parts (e.g. vertex to vertex), the workbench maps one local coordinate system (LCS) to another. Each body in a part can have multiple local coordinate systems. For example, the part on the screenshot below has 5 of them:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Multiple LCSs in a part",src:a(8949).Z,width:"2560",height:"1440"})),(0,r.kt)("p",null,"When an LCS is originally created, it is attached to a very specific feature of a part. However, if the geometry of that part changes, the LCS stays where it was. Which makes it unaffected by the dreaded toponaming issue (now being finally taken care of in upstream FreeCAD). The kind of a feature an LCS is attached to defines what attachment options are available."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Picking features to attach an LCS to",src:a(5272).Z,width:"1840",height:"1205"})),(0,r.kt)("p",null,"Then when a new part is inserted into an assembly, the user specifies the parent part (which part to attach to), the source LCS (from the newly inserted part), and the target LCS (from the parent part):"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Mapping LCSs in Assembly 4",src:a(8311).Z,width:"1584",height:"886"})),(0,r.kt)("p",null,"Once both LCSs are aligned, all six degrees of freedom are fixed, and thus parts stay attached no matter what. It is, however, possible to \u201crelease\u201d a DOF by using the attachment offset property and expressions."),(0,r.kt)("p",null,"We\u2019ve seen multiple testimonials that the approach to assembling a model through LCS proves to be more predictable and robust. "),(0,r.kt)("p",null,"On the flip side, the process of setting all LCSs is rather tedious, and attaching one part to another means you have to make more clicks than what you typically get with regular constraints."),(0,r.kt)("p",null,"Finally, Assembly 4 supports both ",(0,r.kt)("a",{parentName:"p",href:"https://caeuniversity.com/bottom-up-and-top-down-approach/"},"top-down and bottom-up")," design models. We do need to point out though that with the bottom-up approach, it is impossible to insert a part from an external file without opening it as a document."),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("p",null,"Because of how the workflow is implemented, Assembly 4 doesn\u2019t have rows and rows of buttons to go through when you need to align one part with another. A large part of the feature set is about managing your assembly: creating new bodies and groups, inserting parts (there\u2019s also a simple integration with the Fasteners workbench), mapping LCSs to each other etc. Apart from LCS, A4 allows creating more datum types: plane, axis, and point. Internally, those are all PartDesign objects."),(0,r.kt)("p",null,"A4 comes with its own tools for creating mirrored, linear, and circular arrays, as well as a measure tool:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Measure tool",src:a(2288).Z,width:"2560",height:"1440"})),(0,r.kt)("p",null,"For animation, Assembly 4 uses variables and ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.freecad.org/Expressions"},"expressions"),". For example, if you need to rotate a part, what you do is create a new variable and set it e.g. to 0, then use that variable in the ",(0,r.kt)("em",{parentName:"p"},"Angle")," placement property of your part, then open the animation dialog, select the variable to animate, set min and max values to feed into the variable, as well as the increment value, and run the animation.  "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Animation in Assembly 4",src:a(719).Z,width:"2560",height:"1440"})),(0,r.kt)("p",null,"Theo Janssen\u2019s ",(0,r.kt)("a",{parentName:"p",href:"https://www.strandbeest.com/"},"strandbeest"),", ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Zolko-123/FreeCAD_Examples/tree/master/Asm4_Tutorial4"},"model by Zolko")," (CC0-1.0 license) "),(0,r.kt)("p",null,"The implementation is somewhat technical, but it works. The downside of all this is that due to the incomplete multithreading support in FreeCAD you can\u2019t really stop the animation until the current cycle is over. Unfortunately, while animation does the trick in some cases, collision detection would still be really useful."),(0,r.kt)("p",null,"Despite the initial idea to not use a solver that got the entire Assembly 4 adventure going, Zolko did end up creating a solver to recompute all the links and placements in an assembly. In fact, as user \u2018aapo\u2019 ",(0,r.kt)("a",{parentName:"p",href:"https://forum.freecad.org/viewtopic.php?p=670464#p670464"},"explained in a recent discussion"),", A4 has ",(0,r.kt)("em",{parentName:"p"},"multiple")," solvers and can use custom external ones. Even more, there\u2019s a branch called ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Zolko-123/FreeCAD_Assembly4/compare/master...solver"},"\u2018solver\u2019")," waiting to be completed and merged. It brings the A2plus solver to Assembly 4."),(0,r.kt)("p",null,"The workbench has good if somewhat scattered documentation. There are ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Zolko-123/FreeCAD_Assembly4/blob/master/INSTRUCTIONS.md"},"instructions")," for new users that explain features, basic concepts, and workflow. There are also ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Zolko-123/FreeCAD_Examples"},"several tutorials")," written by the principal developer in a dedicated GitHub repository. And some of the user documentation is in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Zolko-123/FreeCAD_Assembly4/tree/master/Examples"},"Examples")," folder of the main GitHub repository."),(0,r.kt)("h2",{id:"consistency"},"Consistency"),(0,r.kt)("p",null,"Assembly 4 does nearly everything in dialogs in the Combo View, which is a fairly standard practice. No surprises there."),(0,r.kt)("p",null,"The workbench can work with parts created by other assemblies, although in our testing it seems like a good idea creating local coordinate systems in those parts prior to inserting them for simplicity\u2019s sake."),(0,r.kt)("p",null,"There have been ",(0,r.kt)("a",{parentName:"p",href:"https://forum.freecad.org/viewtopic.php?style=10&t=40363"},"a number of problems")," getting A4 to work well with the TechDraw workbench. Most of them reportedly have been fixed."),(0,r.kt)("h2",{id:"stability"},"Stability"),(0,r.kt)("p",null,"From the Issues section on GitHub and the forum it appears that Assembly 4 is very stable. Users mostly have problems with the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Zolko-123/FreeCAD_Assembly4/blob/master/Examples/ConfigBOM/README.md"},"Bill of Materials")," feature (there have been ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Zolko-123/FreeCAD_Assembly4/pull/403"},"recent fixes")," to address some of the issues). In our limited testing, A4 crashed a few times \u2014 mostly, when editing datum objects. The number of actual bug reports (rather than feature requests) on GitHub is very low (just 1 as of March 27). However, a number of bugs are known and reported to the forum."),(0,r.kt)("h2",{id:"performance"},"Performance"),(0,r.kt)("p",null,"We found some complaints about A4 being slow with complex assemblies. One workaround that appears to improve the situation is disabling the preselection highlight (Edit > Preferences > Display > Colors)."),(0,r.kt)("h2",{id:"development-status"},"Development Status"),(0,r.kt)("p",null,"Assembly 4 is an active project with a growing share of new contributors. There have been multiple tagged releases, and the latest internal version update was in February 2023.\nCollectively, the community around Assembly 4 keeps the number of pull requests to an absolute minimum (just 3 open out of 245 ever submitted, as of March 27). Zolko responds to most of the bug reports within a day or two, although fixing some of the bugs may take longer than that."),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"Assembly 4 relies on local coordinate systems to attach parts to each other. The workbench is fairly robust, there are very few severe issues reported by users. However, the LCS approach \u2014 as implemented in A4 \u2014 is low-level and implies a somewhat tiresome process of setting everything up."),(0,r.kt)("p",null,"The project has a small active team of contributors who keep the amount of unresolved issues and unmerged patches as low as possible. We also found the user community to be really enthusiastic and passionate about the project."),(0,r.kt)("h2",{id:"next-up"},"Next up"),(0,r.kt)("p",null,"In the next installment, we\u2019ll take a slight detour and explore several assembly-like solutions: the Manipulator and Part-o-Magic workbenches, as well as the BodyBuilder macro."))}u.isMDXComponent=!0},719:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/freecad-assembly-4-animation-b5757dd5ee22b5359e5f2b0c9551739e.png"},2712:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/freecad-assembly-4-commits-03bf4b69f69316fe72612d0958b6db0d.png"},8311:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/freecad-assembly-4-mapping-lcs-33e202f441562b00ea16e8c3b7dbbf17.png"},2288:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/freecad-assembly-4-measure-tool-a465016615cbcb387ba57a1decfebecb.png"},8949:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/freecad-assembly-4-multiple-lcs-12ec72cd93b2bf559c95885d3e675868.png"},5272:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/freecad-assembly-4-picking-features-for-lcs-7e5f1da6734e29ce645cf0dbed702135.png"},1096:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/titlecard-6b8e5b7358868063ae18e9c9724b7ab1.png"}}]);