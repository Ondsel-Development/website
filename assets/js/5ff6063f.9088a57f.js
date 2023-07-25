"use strict";(self.webpackChunkondsel=self.webpackChunkondsel||[]).push([[3637],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=o.createContext({}),h=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=h(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=h(a),p=n,m=u["".concat(l,".").concat(p)]||u[p]||d[p]||r;return a?o.createElement(m,s(s({ref:t},c),{},{components:a})):o.createElement(m,s({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,s=new Array(r);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:n,s[1]=i;for(var h=2;h<r;h++)s[h]=a[h];return o.createElement.apply(null,s)}return o.createElement.apply(null,a)}p.displayName="MDXCreateElement"},9380:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>h});var o=a(7462),n=(a(7294),a(3905));const r={slug:"default-assembly-workbench-6",title:"Exploring BodyBuilder, Manipulator, and Part-o-magic",authors:[{name:"Brad Collette",title:"Ondsel Core Team",url:"https://github.com/sliptonic",image_url:"https://avatars.githubusercontent.com/u/538057?v=4"},{name:"Alexandre Prokoudine",title:"Contributing Writer",url:"https://github.com/prokoudine",image_url:"https://avatars.githubusercontent.com/u/57467?v=4"}],tags:["freecad","development","assembly","bodybuilder","manipulator","part-o-magic"],image:"./titlecard.png",draft:!1},s=void 0,i={permalink:"/blog/default-assembly-workbench-6",source:"@site/blog/2023-04-02/assembly-6.md",title:"Exploring BodyBuilder, Manipulator, and Part-o-magic",description:"In the previous posts in this series we\u2019ve already discussed reasons to create a default assembly workbench and then explored existing options: Assembly 2, A2plus, Assembly 3, and Assembly 4.",date:"2023-04-02T00:00:00.000Z",formattedDate:"April 2, 2023",tags:[{label:"freecad",permalink:"/blog/tags/freecad"},{label:"development",permalink:"/blog/tags/development"},{label:"assembly",permalink:"/blog/tags/assembly"},{label:"bodybuilder",permalink:"/blog/tags/bodybuilder"},{label:"manipulator",permalink:"/blog/tags/manipulator"},{label:"part-o-magic",permalink:"/blog/tags/part-o-magic"}],readingTime:7.925,hasTruncateMarker:!1,authors:[{name:"Brad Collette",title:"Ondsel Core Team",url:"https://github.com/sliptonic",image_url:"https://avatars.githubusercontent.com/u/538057?v=4",imageURL:"https://avatars.githubusercontent.com/u/538057?v=4"},{name:"Alexandre Prokoudine",title:"Contributing Writer",url:"https://github.com/prokoudine",image_url:"https://avatars.githubusercontent.com/u/57467?v=4",imageURL:"https://avatars.githubusercontent.com/u/57467?v=4"}],frontMatter:{slug:"default-assembly-workbench-6",title:"Exploring BodyBuilder, Manipulator, and Part-o-magic",authors:[{name:"Brad Collette",title:"Ondsel Core Team",url:"https://github.com/sliptonic",image_url:"https://avatars.githubusercontent.com/u/538057?v=4",imageURL:"https://avatars.githubusercontent.com/u/538057?v=4"},{name:"Alexandre Prokoudine",title:"Contributing Writer",url:"https://github.com/prokoudine",image_url:"https://avatars.githubusercontent.com/u/57467?v=4",imageURL:"https://avatars.githubusercontent.com/u/57467?v=4"}],tags:["freecad","development","assembly","bodybuilder","manipulator","part-o-magic"],image:"./titlecard.png",draft:!1},prevItem:{title:"Assembly Workbench: What We Learned and What's Coming Next",permalink:"/blog/default-assembly-workbench-7"},nextItem:{title:"Exploring the Assembly 4 workbench",permalink:"/blog/default-assembly-workbench-5"}},l={image:a(3652).Z,authorsImageUrls:[void 0,void 0]},h=[{value:"BodyBuilder macro",id:"bodybuilder-macro",level:2},{value:"The Manipulator workbench",id:"the-manipulator-workbench",level:2},{value:"Part-o-magic workbench",id:"part-o-magic-workbench",level:2},{value:"Summary",id:"summary",level:2},{value:"Next Up",id:"next-up",level:2}],c={toc:h},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"In the previous posts in this series we\u2019ve already discussed reasons to create a ",(0,n.kt)("a",{parentName:"p",href:"https://ondsel.com/blog/default-assembly-workbench-1"},"default assembly workbench")," and then explored existing options: ",(0,n.kt)("a",{parentName:"p",href:"https://ondsel.com/blog/default-assembly-workbench-2"},"Assembly 2"),", ",(0,n.kt)("a",{parentName:"p",href:"https://ondsel.com/blog/default-assembly-workbench-3"},"A2plus"),", ",(0,n.kt)("a",{parentName:"p",href:"https://ondsel.com/blog/default-assembly-workbench-4"},"Assembly 3"),", and ",(0,n.kt)("a",{parentName:"p",href:"https://ondsel.com/blog/default-assembly-workbench-5"},"Assembly 4"),"."),(0,n.kt)("p",null,"There are several more tools that provide a subset of their features, and these tools regularly come up in discussions on creating assemblies: the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Freedman-CB1/BodyBuilder"},"BodyBuilder")," macro, the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/easyw/Manipulator"},"Manipulator")," workbench, and the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/DeepSOIC/Part-o-magic"},"Part-o-magic")," workbench. Since none of them can realistically serve as a foundation for a potential default assembly workbench, in this review, we\u2019ll focus on their interaction models to see what we can learn from them."),(0,n.kt)("p",null,"But before we do that, let\u2019s quickly discuss the topic of exploded assemblies \u2014 a representation of the assembly design where parts are roughly in the right position, but at a certain distance from each other. We considered looking at the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/JMG1/ExplodedAssembly"},"Exploded Assembly")," workbench in this post, because creating such a view is a very common use case. However, after a quick study we found the following."),(0,n.kt)("p",null,"First of all, it\u2019s done differently across available commercial CAD offerings. It\u2019s a part of the assembly toolset in Dassault Syst\xe8mes SolidWorks, Siemens NX, Ansys SpaceClaim, and BricsCAD Mechanical. It\u2019s an additional default tool in PTC Creo and Onshape. And it\u2019s part of the animation feature set in Autodesk Inventor, Autodesk Fusion 360, and T-FLEX CAD. So there\u2019s no one right way to do that."),(0,n.kt)("p",null,"In FreeCAD, there are at least two 3rd-party workbenches for animation that have tools for exploding an assembly, Exploded Assembly and ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/microelly2/Animation"},"Animation"),". Another workbench, ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Francisco-Rosa/FreeCAD-Movie"},"Movie"),", suggests using a ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Francisco-Rosa/ExplodedAssembly"},"fork")," of the Exploded Assembly workbench. And there are ",(0,n.kt)("a",{parentName:"p",href:"https://jirivalasek.github.io/Animate/"},"other workbenches")," that deal with animating moving parts."),(0,n.kt)("p",null,"On one hand, this indicates that the FreeCAD community is leaning towards seeing this as part of the animation feature set. On the other hand, there are perfectly sensible use cases like technical illustrations where you might want to place an isometric view of an exploded assembly onto a TechDraw page, and that\u2019s probably outside the animation workbench\u2019s jurisdiction. So it makes sense to revisit this topic later when we can give it our full attention."),(0,n.kt)("p",null,"And now let\u2019s get on with additional assembly-like tools."),(0,n.kt)("h2",{id:"bodybuilder-macro"},"BodyBuilder macro"),(0,n.kt)("p",null,"According to the macro developer, \u2018freedman\u2019, the ",(0,n.kt)("a",{parentName:"p",href:"https://forum.freecad.org/viewtopic.php?style=5&p=636992#"},"rationale")," behind this project is this:"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"I think many times new users and some of us need a model with just a few parts held together, we don't need the full assembler that does everything ","[...]",".")),(0,n.kt)("p",null,"Getting started with this tool can be a challenge.  There is no step-by-step tutorial. There\u2019s a ",(0,n.kt)("a",{parentName:"p",href:"https://forum.freecad.org/viewtopic.php?t=72997"},"forum thread")," with a couple of GIFs and a few test files, only. Here is how it works."),(0,n.kt)("p",null,"The general idea is that, while the BodyBuilder macro is ",(0,n.kt)("a",{parentName:"p",href:"https://wiki.freecad.org/Macros"},"running"),", you select an object in the viewport, then a sketch in the tree view. As soon as you do that, the object in the viewport gets centered at that sketch\u2019s origin."),(0,n.kt)("p",null,"But the points in sketches that you align objects to don\u2019t all sit at (0;0;0) exactly, typically they are all over the place. So what you do when you create a sketch is you start it at the origin and then you use the Position property in Attachment Offset to move the sketch in the three dimensions. Once you set it up, you can align a body to that sketch."),(0,n.kt)("p",null,"Doing that means that the body\u2019s Position (Placement) value changes to the point in space defined by the sketch's attachment offset."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"BodyBuilder macro running in FreeCAD",src:a(420).Z,width:"2560",height:"1440"})),(0,n.kt)("p",null,"You have several options for what to do next when you want to move that object."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"You can use the Positioning menu of the macro to set a relative offset that will increment the absolute values."),(0,n.kt)("li",{parentName:"ul"},"You can set its position in absolute values, and for that the Properties dock is fairly sufficient."),(0,n.kt)("li",{parentName:"ul"},"Or you can use the on-canvas Transform tool.")),(0,n.kt)("p",null,"The macro has a kind of a menu, but really, it\u2019s a different set of controls in generally the same space. The main menu allows looking at the reference sketch\u2019s origin (has to be selected), setting X-Ray mode to the selected body to look through it, and switching to positioning settings. The positioning menu has offset, rotation etc. controls for the attached body. And the binding menu is where you initiate the binding of a body to a sketch or delete an existing binding."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"BodyBuilder macro menu structure",src:a(2623).Z,width:"1364",height:"1146"})),(0,n.kt)("p",null,"Left to right: main menu, positioning menu, binding menu."),(0,n.kt)("p",null,"Once you get the hang of it, the macro works. It\u2019s three clicks away if you have the Macro toolbar present, or a few more, if you have to use the menu. Workflow-wise, the main problem is repositioning the sketch origin, which takes some extra work. The trick is to open the macro menu, go to Positioning, double-click the sketch to start editing it, then add a point where the offset should be, enable the \u201cReposition Sketch origin\u201d checkbox, then click on that newly added point. This will get you the desired attachment offset value."),(0,n.kt)("p",null,"So much like Assembly 4, BodyBuilder is built on top of existing core features, but it takes time to set everything up as compared to using constraints in Assembly 2/2+/3 workbenches."),(0,n.kt)("h2",{id:"the-manipulator-workbench"},"The Manipulator workbench"),(0,n.kt)("p",null,"This workbench focuses on moving and aligning objects and does not allow creating permanent attachments with fixed degrees of freedom. The three major groups of tools are ",(0,n.kt)("em",{parentName:"p"},"Mover")," tools, ",(0,n.kt)("em",{parentName:"p"},"Align")," tools, and ",(0,n.kt)("em",{parentName:"p"},"Measure")," tools. All three have floating palettes that can be docked."),(0,n.kt)("p",null,"The Mover toolset is how you move and rotate selected objects along the selected axis using numeric input. All changes are relative and affect the absolute position of the object: e.g. if your part is already shifted and rotated, further changes will increment existing displacement and rotation."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Mover tools in the Manipulator workbench",src:a(4210).Z,width:"2560",height:"1440"})),(0,n.kt)("p",null,"If it wasn\u2019t for the option to align the view to a selected face and then rotate around this custom axis, the entire set of Mover tools could be considered a duplication of the existing Placement functionality that allows to adjust absolute values with expressions."),(0,n.kt)("p",null,"The Align tools allow attaching objects by points, edges, centers, and planes to each other. The user has control over a number of options, such as:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"whether the bounding box or the center of mass of the reference object should be used;"),(0,n.kt)("li",{parentName:"ul"},"whether the alignment normal is inverted;"),(0,n.kt)("li",{parentName:"ul"},"which axis the object should be centered on (any combination is possible).")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Align tools in the Manipulator workbench",src:a(2492).Z,width:"2560",height:"1440"})),(0,n.kt)("p",null,"And then there\u2019s the Measure tool that can get the radius of an arc or a circle, the length of an edge, the angle between two edges, and more. It works pretty much the same way as in other software: you need to select the first and the second elements when measuring distances between two objects or an angle between two edges. A single click on an arc or a circle will get you the radius, and a single click on an edge will get you its length. The extra label is optional and can be disabled."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Measure tools in the Manipulator workbench",src:a(8737).Z,width:"2560",height:"1440"})),(0,n.kt)("p",null,"This Measure tool has been modified and repurposed for the Assembly 4 workbench, so if you see similarities between them, this is not a coincidence."),(0,n.kt)("p",null,"The part of the feature set that deals with transforming and aligning objects has documentation and 3rd party video tutorials. Work with datum objects (points, lines, planes, LCSs), however, is entirely undocumented."),(0,n.kt)("p",null,"In a nutshell, despite its basic feature set and a certain overreliance on icons, the Manipulator workbench is a handy toolbox for making quick alignments. Moreover, the tools it provides are accessible in other workbenches like Sketcher, Part, and PartDesign. All you need to do is docking the floating palettes for your convenience."),(0,n.kt)("h2",{id:"part-o-magic-workbench"},"Part-o-magic workbench"),(0,n.kt)("p",null,"The main point of this workbench is saner automatic management of the project hierarchy. PoM plugs into the core of FreeCAD and makes sure that all new objects are added to the active container no matter what workbench is currently used."),(0,n.kt)("p",null,"But there are other features like autohiding all parts and bodies other than the one you are currently editing until you are done. Or duplicating objects, transferring them from one container to another, locating dependencies etc. All that has its use when working on complex assemblies, particularly with the top-down approach to designing."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"The Part-o-magic workbench",src:a(1953).Z,width:"2560",height:"1440"})),(0,n.kt)("p",null,"As FreeCAD starts gaining some of the features that PoM provides, the workbench is likely to grow obsolete."),(0,n.kt)("h2",{id:"summary"},"Summary"),(0,n.kt)("p",null,"The main takeaway from exploring BodyBuilder and Manipulator is that there is a demand for making quick attachments of a small number of parts. So further work on a default assembly workbench should include research focusing on two things. First of all, it\u2019s useful to understand the exact reasons people try to avoid using full-blown assembly workbenches for such tasks. Given that the UX/UI of BodyBuilder and Manipulator are not particularly easier than those of all assembly workbenches we reviewed earlier, this has to do either with project hierarchy, or with using constraints and solvers, or both. Secondly, the future default assembly workbench should be designed in a way that would keep the workflow lightweight and straightforward for these \u201csimple\u201d use cases."),(0,n.kt)("p",null,"As for Part-o-magic, some of the tools, like the deep copy of containers, look like features that belong to upstream FreeCAD."),(0,n.kt)("h2",{id:"next-up"},"Next Up"),(0,n.kt)("p",null,"We are concluding the series. In the next post, we will summarize our findings, as well as the takeaways from the public discussion, and suggest a way forward."))}d.isMDXComponent=!0},2623:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/freecad-bodybuilder-menu-cc93e08e393c29a2e7fc350b717f86e0.webp"},420:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/freecad-bodybuilder-viewport-ddde0a9329c548178e535b3d747aaa6c.webp"},2492:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/freecad-manipulator-align-tools-d51ee7c3a4a5ecf1ad96bcfd47a20c94.webp"},8737:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/freecad-manipulator-measure-tools-51aba437884566156314a9e1e1c0b83e.webp"},4210:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/freecad-manipulator-mover-tools-3333fe850e825beb1ce472fc8d3729a2.webp"},1953:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/freecad-part-o-magic-workbench-fd504301412e20da0f9e82b04515eb4f.webp"},3652:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/titlecard-4cab46b747779382978a9af7e1922b16.png"}}]);