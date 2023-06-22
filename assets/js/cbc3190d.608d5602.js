"use strict";(self.webpackChunkdefang_docs=self.webpackChunkdefang_docs||[]).push([[5488],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),u=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(r),m=n,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||a;return r?o.createElement(f,i(i({ref:t},p),{},{components:r})):o.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5418:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var o=r(7462),n=(r(7294),r(3905));const a={},i="Overview",l={unversionedId:"Overview",id:"Overview",title:"Overview",description:"What is the Defang Opinionated Platform (DOP)?",source:"@site/docs/Overview.md",sourceDirName:".",slug:"/Overview",permalink:"/docs/Overview",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Overview.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"**FAQ**",permalink:"/docs/FAQ"},next:{title:"my-home-doc",permalink:"/docs/"}},s={},u=[],p={toc:u},c="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"overview"},"Overview"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"What is the Defang Opinionated Platform (DOP)?")),(0,n.kt)("p",null,"The Defang Opinionated Platform (DOP) is a radically simpler way to build and deploy production-ready cloud apps. The DOP is a serverless platform that lets you quickly build your application in the language of your choice and deploy to the cloud with a single command. The DOP CLI includes an AI-assisted co-pilot that translates natural language commands to a starting point in code for your services that you can then refine. Once you merge the code to your Github repository, the DOP automatically builds your project and deploys it to the cloud, taking care of all the heavy lifting such as configuring the networking, auto-scaling, security, observability and all the other details that usually trip up the average cloud developer. "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"The Details")," "),(0,n.kt)("p",null,"The DOP provides a unified experience to develop, deploy, run, and observe your cloud applications. It supports the following features:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Types of applications - web applications, APIs, ML applications, ???"),(0,n.kt)("li",{parentName:"ul"},"Support for Node.js, Python, and Go"),(0,n.kt)("li",{parentName:"ul"},"AI-assisted co-pilot to go from natural language prompt to code skeleton"),(0,n.kt)("li",{parentName:"ul"},"Support for Docker containers, ???"),(0,n.kt)("li",{parentName:"ul"},"Support for Docker Compose"),(0,n.kt)("li",{parentName:"ul"},"APIs - support for REST?, gRPC?,???"),(0,n.kt)("li",{parentName:"ul"},"Support for CPUs and GPUs"),(0,n.kt)("li",{parentName:"ul"},"Ability to deploy to SPOT instances"),(0,n.kt)("li",{parentName:"ul"},"Pre-configured staging and production environments, with built-in networking, auto-scaling, security, and observability"),(0,n.kt)("li",{parentName:"ul"},"Automated build of your source directly from your Github repository to your staging or production environments"),(0,n.kt)("li",{parentName:"ul"},"Pulumi integration"),(0,n.kt)("li",{parentName:"ul"},"Storage - databases, object stores etc.?"),(0,n.kt)("li",{parentName:"ul"},"Queues - ?"),(0,n.kt)("li",{parentName:"ul"},"Observability via tail of logs?")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Can I access AWS storage services such as S3 or database services such as RDS ? How?")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Do you plan to support other clouds?")),(0,n.kt)("p",null,"While we currently deploy to AWS, the Defang model is designed to be inherently portable. We plan to support other clouds in future releases."))}d.isMDXComponent=!0}}]);