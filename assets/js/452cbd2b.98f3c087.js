"use strict";(self.webpackChunkdefang_docs=self.webpackChunkdefang_docs||[]).push([[821],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),l=u(n),f=o,m=l["".concat(s,".").concat(f)]||l[f]||d[f]||c;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,a=new Array(c);a[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[l]="string"==typeof e?e:o,a[1]=i;for(var u=2;u<c;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4312:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>c,metadata:()=>i,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const c={title:"Accounts",description:"How accounts are organized in Defang.",sidebar_position:100},a="Accounts",i={unversionedId:"concepts/accounts",id:"concepts/accounts",title:"Accounts",description:"How accounts are organized in Defang.",source:"@site/docs/concepts/accounts.md",sourceDirName:"concepts",slug:"/concepts/accounts",permalink:"/docs/concepts/accounts",draft:!1,editUrl:"https://github.com/defang-io/defang-docs/tree/main/docs/concepts/accounts.md",tags:[],version:"current",sidebarPosition:100,frontMatter:{title:"Accounts",description:"How accounts are organized in Defang.",sidebar_position:100},sidebar:"tutorialSidebar",previous:{title:"Cloud Providers",permalink:"/docs/concepts/cloud-providers"},next:{title:"Services",permalink:"/docs/concepts/services"}},s={},u=[],p={toc:u},l="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(l,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"accounts"},"Accounts"),(0,o.kt)("p",null,"At the moment, Defang only allows authentication through GitHub. This means that you will need to have a GitHub account to use the system, but it also means that your GitHub username will be used as your Defang username. Your Defang username is used to group all your services and to generate domains for your services with the following structure:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<username>-<servicename>--<port>.prod1.defang.dev\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"We plan to introduce a more robust system for managing accounts, permissions, service groups, etc. in the future.")))}d.isMDXComponent=!0}}]);