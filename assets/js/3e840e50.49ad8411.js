"use strict";(self.webpackChunkondsel=self.webpackChunkondsel||[]).push([[129],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=l(n),g=r,u=p["".concat(c,".").concat(g)]||p[g]||d[g]||i;return n?a.createElement(u,o(o({ref:t},m),{},{components:n})):a.createElement(u,o({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=g;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},6680:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const i={id:"manage-admin-access",title:"Managing Admin Access",description:"How to manage admin access in your organization in Ondsel Lens",tags:["organizations","admin"],sidebar_position:5},o=void 0,s={unversionedId:"account-team/organizations/manage-admin-access/manage-admin-access",id:"account-team/organizations/manage-admin-access/manage-admin-access",title:"Managing Admin Access",description:"How to manage admin access in your organization in Ondsel Lens",source:"@site/docs/account-team/organizations/manage-admin-access/index.md",sourceDirName:"account-team/organizations/manage-admin-access",slug:"/account-team/organizations/manage-admin-access/",permalink:"/docs/account-team/organizations/manage-admin-access/",draft:!1,tags:[{label:"organizations",permalink:"/docs/tags/organizations"},{label:"admin",permalink:"/docs/tags/admin"}],version:"current",sidebarPosition:5,frontMatter:{id:"manage-admin-access",title:"Managing Admin Access",description:"How to manage admin access in your organization in Ondsel Lens",tags:["organizations","admin"],sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Managing Users",permalink:"/docs/account-team/organizations/manage-users/"},next:{title:"Deleting Organizations",permalink:"/docs/account-team/organizations/delete-org/"}},c={},l=[{value:"Promoting users to admins",id:"promoting-users-to-admins",level:2},{value:"Revoking admin priveleges",id:"revoking-admin-priveleges",level:2}],m={toc:l};function p(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"promoting-users-to-admins"},"Promoting users to admins"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"To promote a user to an administrator, navigate to the ",(0,r.kt)("strong",{parentName:"li"},"Organization Settings")," page.")),(0,r.kt)("p",null,"Then, switch to the ",(0,r.kt)("strong",{parentName:"p"},"Users")," tab and locate the user you wish to promote."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Snapshot",src:n(52645).Z,width:"2560",height:"1440"})," "),(0,r.kt)("hr",null),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Click the ",(0,r.kt)("strong",{parentName:"li"},"Edit")," icon located to the right of the user's name.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Snapshot",src:n(22405).Z,width:"2560",height:"1440"})," "),(0,r.kt)("hr",null),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"After that, click the ",(0,r.kt)("strong",{parentName:"li"},"Make Admin")," button.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Snapshot",src:n(81003).Z,width:"2560",height:"1440"})," "),(0,r.kt)("p",null,"The user's status will update immediately."),(0,r.kt)("h2",{id:"revoking-admin-priveleges"},"Revoking admin priveleges"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"To revoke admin access, navigate to the ",(0,r.kt)("strong",{parentName:"li"},"Organization Settings")," page.")),(0,r.kt)("p",null,"Then, switch to the ",(0,r.kt)("strong",{parentName:"p"},"Users")," tab and locate the user whose admin priveleges you want to revoke."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Snapshot",src:n(52645).Z,width:"2560",height:"1440"})," "),(0,r.kt)("hr",null),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Click the ",(0,r.kt)("strong",{parentName:"li"},"Edit")," icon located to the right of the user's name.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Snapshot",src:n(22405).Z,width:"2560",height:"1440"})," "),(0,r.kt)("hr",null),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Then, click the ",(0,r.kt)("strong",{parentName:"li"},"Revoke Admin Access")," button.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Snapshot",src:n(47524).Z,width:"2560",height:"1440"})," "),(0,r.kt)("p",null,"The user's status will update immediately."))}p.isMDXComponent=!0},52645:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/promote-01-5bc078d8e895e738c7f1e3230cbdf791.gif"},22405:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/promote-02-514404061c740d5ce89d562633d7963a.gif"},81003:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/promote-03-996bd633b2c02e9731e1a2b867dff5db.gif"},47524:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/revoke-03-1f9b3b0e8f8880c2f9b61f28b16a99d1.gif"}}]);