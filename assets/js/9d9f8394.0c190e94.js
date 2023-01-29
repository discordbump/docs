"use strict";(self.webpackChunkguide_pycord_dev=self.webpackChunkguide_pycord_dev||[]).push([[360],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),k=a,c=m["".concat(i,".").concat(k)]||m[k]||d[k]||o;return n?r.createElement(c,s(s({ref:t},u),{},{components:n})):r.createElement(c,s({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9222:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={title:"Troubleshooting",description:"Having trouble with Server Manager?"},s=void 0,l={unversionedId:"troubleshooting",id:"troubleshooting",title:"Troubleshooting",description:"Having trouble with Server Manager?",source:"@site/docs/troubleshooting.md",sourceDirName:".",slug:"/troubleshooting",permalink:"/docs/troubleshooting",draft:!1,editUrl:"https://github.com/SBLPBots/docs/tree/main/docs/troubleshooting.md",tags:[],version:"current",lastUpdatedBy:"Kyro3400",lastUpdatedAt:1675021724,formattedLastUpdatedAt:"Jan 29, 2023",frontMatter:{title:"Troubleshooting",description:"Having trouble with Server Manager?"},sidebar:"defaultSidebar",previous:{title:"Roadmap",permalink:"/docs/roadmap"}},i={},p=[{value:"___ command is not working",id:"___-command-is-not-working",level:2},{value:"Missing Permissions",id:"missing-permissions",level:3},{value:"No Error/No Responce",id:"no-errorno-responce",level:2},{value:"Syntax Error",id:"syntax-error",level:2},{value:"Other",id:"other",level:2}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"___-command-is-not-working"},"___ command is not working"),(0,a.kt)("p",null,"If a command is not working you need to join ",(0,a.kt)("a",{parentName:"p",href:"../static/support.html"},"our support server")," and see if our dev has posted anything or DM the Support bot and let them know!"),(0,a.kt)("h3",{id:"missing-permissions"},"Missing Permissions"),(0,a.kt)("p",null,"This should be self explanatory as it's a very common error, the bot is missing permissions to execute a command. Most of our commands need you to use the prems that are already added when you add the bot. If a command doesn't work and is asking the bot for permissions it has then it is either the ",(0,a.kt)("inlineCode",{parentName:"p"},"@everyone")," role or it means that a permisson did not work! (Best case is that you should just add the ",(0,a.kt)("inlineCode",{parentName:"p"},"Server Admin")," permission)"),(0,a.kt)("p",null,"Also make sure that the ",(0,a.kt)("inlineCode",{parentName:"p"},"@everyone")," role or any other role has the following perms for your ",(0,a.kt)("strong",null,"Bump Channel"),":"),(0,a.kt)("details",{className:"customdetails"},(0,a.kt)("summary",null,"@everyone role"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Send Messages")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"View Channels/Read Messages")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Read Message History")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Use External Emojis")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Embed Links"))),(0,a.kt)("br",null),(0,a.kt)("details",{className:"customdetails"},(0,a.kt)("summary",null,"setinvite"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Create Instant Invites")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Send Messages")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"View Channels/Read Messages")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Read Message History")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Use External Emojis")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Embed Links"))),(0,a.kt)("br",null),(0,a.kt)("details",{className:"customdetails"},(0,a.kt)("summary",null,"setchannel"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Send Messages")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"View Channels/Read Messages")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Read Message History")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Use External Emojis")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Embed Links"))),(0,a.kt)("br",null),(0,a.kt)("details",{className:"customdetails"},(0,a.kt)("summary",null,"setdesc"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Send Messages")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"View Channels/Read Messages")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Read Message History")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Use External Emojis")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Embed Links"))),(0,a.kt)("br",null),(0,a.kt)("details",{className:"customdetails"},(0,a.kt)("summary",null,"bump"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Send Messages")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"View Channels/Read Messages")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Read Message History")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Use External Emojis")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Embed Links"))),(0,a.kt)("br",null),(0,a.kt)("details",{className:"customdetails"},(0,a.kt)("summary",null,"preview"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Send Messages")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"View Channels/Read Messages")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Read Message History")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Use External Emojis")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Embed Links"))),(0,a.kt)("br",null),(0,a.kt)("details",{className:"customdetails"},(0,a.kt)("summary",null,"setbanner"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"PREMIUM ONLY")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Send Messages")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"View Channels/Read Messages")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Read Message History")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Use External Emojis")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Embed Links"))),(0,a.kt)("br",null),(0,a.kt)("details",{className:"customdetails"},(0,a.kt)("summary",null,"setcolor"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"PREMIUM ONLY")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Send Messages")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"View Channels/Read Messages")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Read Message History")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Use External Emojis")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Embed Links"))),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"no-errorno-responce"},"No Error/No Responce"),(0,a.kt)("p",null,"Either this is a discord problem (We are being ratelimited),  high ping from our host, or one of our commands are having errors (Which is an error on our side in which you can't fix. Should you encounter this error, ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"../static/support.html"},"contact us in our support server")),"."),(0,a.kt)("h2",{id:"syntax-error"},"Syntax Error"),(0,a.kt)("p",null,"This means that you typed something wrong, If you are doing the command correctly, ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"../static/support.html"},"contact us in our support server")),"."),(0,a.kt)("h2",{id:"other"},"Other"),(0,a.kt)("p",null,"If you encounter any other error that's not listed here, please ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"../static/support.html"},"contact us in our support server"))," immediately so we can get out a fix."))}d.isMDXComponent=!0}}]);