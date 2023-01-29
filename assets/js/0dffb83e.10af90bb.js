"use strict";(self.webpackChunkguide_pycord_dev=self.webpackChunkguide_pycord_dev||[]).push([[75],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(r),m=o,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4629:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(7294),o=r(9960);const a=e=>{let{type:t,label:r,icon:a,link:l,isDisabled:i,onClick:c,children:s}=e;const p=e=>{const t=[];return e.split(" ").forEach((e=>{t.push("pyc-button--"+e)})),t.join(" ")},u=n.createElement("button",{className:"pyc-button"+(t?" "+p(t):""),"aria-label":r||(null==s?void 0:s.toString()),disabled:i,onClick:c},a&&n.createElement("i",{className:"pyc-button__icon","aria-hidden":"true"},a),s&&n.createElement("span",{className:"pyc-button__label"},s));return l?n.createElement(o.Z,{className:"pyc-button"+(t?" "+p(t):""),"aria-label":r||(null==s?void 0:s.toString()),href:l},a&&n.createElement("i",{className:"pyc-button__icon","aria-hidden":"true"},a),s&&n.createElement("span",{className:"pyc-button__label"},s)):u}},3208:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));r(4629);const a={title:"Roadmap",description:"Vertex Bump's road map for the future"},l=void 0,i={unversionedId:"roadmap",id:"roadmap",title:"Roadmap",description:"Vertex Bump's road map for the future",source:"@site/docs/roadmap.md",sourceDirName:".",slug:"/roadmap",permalink:"/docs/roadmap",draft:!1,editUrl:"https://github.com/SBLPBots/docs/tree/main/docs/roadmap.md",tags:[],version:"current",lastUpdatedBy:"Kyro3400",lastUpdatedAt:1675021724,formattedLastUpdatedAt:"Jan 29, 2023",frontMatter:{title:"Roadmap",description:"Vertex Bump's road map for the future"},sidebar:"defaultSidebar",previous:{title:"Premium",permalink:"/docs/premium"},next:{title:"Troubleshooting",permalink:"/docs/troubleshooting"}},c={},s=[],p={toc:s};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"roadmap-completed"},(0,o.kt)("div",{className:"title"},"Completed"),(0,o.kt)("li",null,"Fixed all problems"),(0,o.kt)("li",null,"Added back Captchas"),(0,o.kt)("li",null,"Switched to ",(0,o.kt)("code",null,"@Vertex Bump#0281")," prefix"),(0,o.kt)("li",null,"Fixed up voting cooldown timer for bumps (20 min)")),(0,o.kt)("br",null),(0,o.kt)("div",{className:"roadmap-planned"},(0,o.kt)("div",{className:"title"},"Planned"),(0,o.kt)("li",null,"Better Help embed"),(0,o.kt)("li",null,"Better way to block members"),(0,o.kt)("li",null,"Sending message when user ",(0,o.kt)("strong",null,"Boosts")," or ",(0,o.kt)("strong",null,"votes"))),(0,o.kt)("br",null),(0,o.kt)("div",{className:"roadmap-coming-soon"},(0,o.kt)("div",{className:"title"},"Coming Soon"),(0,o.kt)("li",null,"Slash Commands"),(0,o.kt)("li",null,"Autobump (Might not)"),(0,o.kt)("li",null,"Feedback/Suggestion command"),(0,o.kt)("li",null,"Make invite set to channel mentioned")))}u.isMDXComponent=!0}}]);