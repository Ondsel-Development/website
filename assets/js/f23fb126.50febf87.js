"use strict";(self.webpackChunkondsel=self.webpackChunkondsel||[]).push([[7742],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),u=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},h=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),c=u(a),p=n,m=c["".concat(i,".").concat(p)]||c[p]||d[p]||o;return a?r.createElement(m,s(s({ref:t},h),{},{components:a})):r.createElement(m,s({ref:t},h))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[c]="string"==typeof e?e:n,s[1]=l;for(var u=2;u<o;u++)s[u]=a[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},4357:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=a(7462),n=(a(7294),a(3905));const o={slug:"freecad-unpredictable-release-schedule-hurts-users-and-developers",title:"FreeCAD's unpredictable release schedule hurts users and developers",authors:[{name:"Brad Collette",title:"Ondsel Core Team",url:"https://github.com/sliptonic",image_url:"https://avatars.githubusercontent.com/u/538057?v=4"},{name:"Alexandre Prokoudine",title:"Contributing Writer",url:"https://github.com/prokoudine",image_url:"https://avatars.githubusercontent.com/u/57467?v=4"}],tags:["freecad","development"],image:"./titlecard.png",draft:!1},s=void 0,l={permalink:"/blog/freecad-unpredictable-release-schedule-hurts-users-and-developers",source:"@site/blog/2023-05-18/releaseschedule.md",title:"FreeCAD's unpredictable release schedule hurts users and developers",description:"There's a problem with running development FreeCAD builds for actual work and it's going to get uglier soon. Here's the deal.",date:"2023-05-18T00:00:00.000Z",formattedDate:"May 18, 2023",tags:[{label:"freecad",permalink:"/blog/tags/freecad"},{label:"development",permalink:"/blog/tags/development"}],readingTime:6.29,hasTruncateMarker:!1,authors:[{name:"Brad Collette",title:"Ondsel Core Team",url:"https://github.com/sliptonic",image_url:"https://avatars.githubusercontent.com/u/538057?v=4",imageURL:"https://avatars.githubusercontent.com/u/538057?v=4"},{name:"Alexandre Prokoudine",title:"Contributing Writer",url:"https://github.com/prokoudine",image_url:"https://avatars.githubusercontent.com/u/57467?v=4",imageURL:"https://avatars.githubusercontent.com/u/57467?v=4"}],frontMatter:{slug:"freecad-unpredictable-release-schedule-hurts-users-and-developers",title:"FreeCAD's unpredictable release schedule hurts users and developers",authors:[{name:"Brad Collette",title:"Ondsel Core Team",url:"https://github.com/sliptonic",image_url:"https://avatars.githubusercontent.com/u/538057?v=4",imageURL:"https://avatars.githubusercontent.com/u/538057?v=4"},{name:"Alexandre Prokoudine",title:"Contributing Writer",url:"https://github.com/prokoudine",image_url:"https://avatars.githubusercontent.com/u/57467?v=4",imageURL:"https://avatars.githubusercontent.com/u/57467?v=4"}],tags:["freecad","development"],image:"./titlecard.png",draft:!1},prevItem:{title:"What does it mean that my GitHub project has 900 open issues?",permalink:"/blog/better-github-issues"},nextItem:{title:"FreeCAD\u2019s Approach to Software Development Needs to Change",permalink:"/blog/freecad-approach-to-software-development-needs-to-change"}},i={image:a(7989).Z,authorsImageUrls:[void 0,void 0]},u=[{value:"What&#39;s Wrong With The Dev Builds?",id:"whats-wrong-with-the-dev-builds",level:2},{value:"Time-Based Schedule",id:"time-based-schedule",level:2},{value:"Feature Backports",id:"feature-backports",level:2},{value:"What&#39;s Next",id:"whats-next",level:2}],h={toc:u};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"There's a problem with running development FreeCAD builds for actual work and it's going to get uglier soon. Here's the deal."),(0,n.kt)("h2",{id:"whats-wrong-with-the-dev-builds"},"What's Wrong With The Dev Builds?"),(0,n.kt)("p",null,"What users want from FreeCAD is a stable, reliable platform that is trustworthy for doing their work. What they also want are various new features and quality-of-life improvements."),(0,n.kt)("p",null,"But FreeCAD has a relatively long and unpredictable release cycle \u2014 ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/FreeCAD#Release_history"},"typically over a year")," between major releases, and no one can put a date on a release in advance. This irregular release schedule has historical reasons (\u201cit\u2019s ready when it\u2019s ready\u201d), but also because over the last several years, contributors did a tremendous amount of work that wasn\u2019t split into smaller chunks. And thus there were large gaps between releases when the team ported FreeCAD from Python2 to Python 3, and then from Qt4 to Qt5."),(0,n.kt)("p",null,"With the current effort to resolve topological naming, FreeCAD development is moving toward a more incremental approach. Large changes are merged incrementally rather than waiting until the whole thing is done. This should accelerate the pace of development and reduce the time between releases. It also implies that the development branch will experience more instability than it has in the past.\nThere\u2019s an obvious conflict between the need for stability and the desire for new features. You can get an increasingly reliable platform by sticking with point releases. Or you can get the latest and greatest by using development builds at the risk of experiencing more glitches or even losing your work due to a crash."),(0,n.kt)("p",null,"We encourage everyone doing \u201creal work\u201d to use a stable build and avoid the risk, but for people who accept the risk and run dev builds, things are likely to get even worse soon. Once the project releases version 0.21, the next batch of topo-naming issue fixes will start landing to the main development branch. Because of what these fixes do, FreeCAD is expected to ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/FreeCAD/FreeCAD/issues/8432#issuecomment-1452672655"},"take a performance hit")," until optimizations follow at a later stage of development.  Bottom line: the development build is going to get slower for a while."),(0,n.kt)("p",null,"In our opinion, this is the perfect time for FreeCAD, as a project, to revisit its release policy."),(0,n.kt)("h2",{id:"time-based-schedule"},"Time-Based Schedule"),(0,n.kt)("p",null,"The first part of our proposal is for the FreeCAD project to have more frequent and predictable releases. Effectively \u2014 a time-based release schedule. This is common for projects with some kind of financial backing for the core team of developers, like ",(0,n.kt)("a",{parentName:"p",href:"https://code.blender.org/2021/10/blender-3-x-roadmap/"},"Blender"),". But it also works for large projects that receive little-to-no funding on a regular basis, like ",(0,n.kt)("a",{parentName:"p",href:"https://kdenlive.org/"},"Kdenlive")," (3 releases a year, following the KDE\u2019s release cycle) and ",(0,n.kt)("a",{parentName:"p",href:"https://www.darktable.org/"},"darktable")," (2 releases a year since 2020)."),(0,n.kt)("p",null,"How often should FreeCAD be released? So far, the project has been struggling to do annual releases on time. So shooting for 2 releases a year and working from there seems like a good initial goal. There are existing release policies like ",(0,n.kt)("a",{parentName:"p",href:"https://www.openstack.org/software/roadmap/"},"the one at OpenStack")," that ",(0,n.kt)("a",{parentName:"p",href:"https://www.researchgate.net/publication/316357251_Release_Early_Release_Often_and_Release_on_Time_An_Empirical_Case_Study_of_Release_Management"},"have been studied")," and could be learned from."),(0,n.kt)("p",null,"Let's say we all agree on bi-annual releases. What does it really mean?"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"We remove the element of uncertainty for users and developers alike.")," Users can plan their upgrades and only use a dev build when they need to test a fix. Contributors can plan ahead and don't need to jeopardize their non-FreeCAD commitments."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Much shorter development cycle.")," This means more focused releases and less urge to include incomplete work, because the next window for merging will open very soon. This also means a much less exhausting period of work for testers and translators."),(0,n.kt)("p",null,"Especially in the latter case, contributors are typically expected to either follow development closely and update translations all the time or work like madmen during the strings freeze period because there's just so much work to do. Volunteered work should really be more manageable."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"More frequent point releases.")," Once the release schedule is set, users will start counting on point releases happening regularly too (see below on another reason for that)."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"More focus on building infrastructure and automation.")," A time-based release schedule is going to require a more rigorous release process and a higher level of automation. Only a very small part of the C++ code is covered by unit tests at the moment, this really needs to change. And there is always, ",(0,n.kt)("em",{parentName:"p"},"always")," more work to be done on Conda builds. All that means more DevOps work."),(0,n.kt)("h2",{id:"feature-backports"},"Feature Backports"),(0,n.kt)("p",null,"The FreeCAD team already backports bug fixes and security patches from the master branch to the release branch. But we could be doing more. We could be backporting some features and improvements to point releases too. Projects like ",(0,n.kt)("a",{parentName:"p",href:"https://www.gimp.org/news/2019/01/02/gimp-and-gegl-in-2018/#version-210-release-and-point-releases"},"GIMP")," and Scribus have been doing this for years now because they have release cycles even longer than those of FreeCAD. For them, it helps keeping users engaged, but it still means that larger, much desired changes take a very long time to show up in a stable release, and that\u2019s the part we would rather avoid."),(0,n.kt)("p",null,"This wouldn't render major releases pointless (pun intended). We are thinking primarily of changes that are typically safe and not too time-consuming to backport. If a new feature, however small, comes with an architectural change (API change, file format change etc.), it\u2019s a no-go. But quick UX fixes and other quality-of-life improvements are often possible."),(0,n.kt)("p",null,"One way to simplify the process of making this decision is to add a checkbox to the pull request template: \u201cBackportable patch\u201d. The maintainer who does the merge then would see that the PR is supposed to be backportable, check the patch against the backporting criteria, and attempt to cherry-pick the commit(s). Naturally, this implies that the developer who submitted a patch explored how far their change goes and understands whether the fix or the feature can easily be ported to the release branch."),(0,n.kt)("p",null,"The net outcome is that users would have even less reasons to keep using development builds and risk their work."),(0,n.kt)("h2",{id:"whats-next"},"What's Next"),(0,n.kt)("p",null,"So what are the actionable things for contributors to do?\nFirst of all, we need to make the release process more regular.  Documenting the major and point release processes in the Developer Handbook should be a priority.  The current 0.20.3 and 0.21 releases are an excellent opportunity to do this.  "),(0,n.kt)("p",null,"More conversation is needed about an appropriate release cadence.  Releases that are too frequent will distract from developing new features. Infrequent releases, as we have seen, will push users to the development builds. The goal should be to strike a proper balance between them and increase the value of the stable release with frequent maintenance releases. "),(0,n.kt)("p",null,"Our suggestion is to make major releases twice a year and point releases depending on the amount and severity of bugs we fix. As long as fixes come in small batches and aren\u2019t fixing anything really bad, we can release them on a monthly basis. A fix for a severe bug like data loss would definitely call for an immediate release."),(0,n.kt)("p",null,"We also need to define a general timeframe within each release cycle: when we open the main development branch for new features, when we do a feature freeze, when we do a strings freeze, etc."),(0,n.kt)("p",null,"Beyond that, we will also need to revisit our patch inclusion policy to match a much shorter release cycle. This policy would also have to be updated for feature/improvement backports, which means we need criteria of what constitutes an easily portable change."),(0,n.kt)("p",null,"To discuss all these things, we created a ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/orgs/Ondsel-Development/discussions/4"},"discussion topic")," on GitHub and invite you to provide your input."))}c.isMDXComponent=!0},7989:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/titlecard-a46e1216bbe647b07953ef21f41ec4b9.png"}}]);