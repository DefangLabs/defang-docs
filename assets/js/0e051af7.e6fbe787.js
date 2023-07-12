"use strict";(self.webpackChunkdefang_docs=self.webpackChunkdefang_docs||[]).push([[331],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),g=o,f=u["".concat(s,".").concat(g)]||u[g]||p[g]||a;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},7500:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={},i="Generate new code using AI",l={unversionedId:"Tutorials/Generate new code using AI",id:"Tutorials/Generate new code using AI",title:"Generate new code using AI",description:"Defang supports generating new projects using integration with an AI model. Using this feature, you can describe what you would like the service to do and the CLI will then generate a project skeleton with all the files required to make it work.",source:"@site/docs/03-Tutorials/01-Generate new code using AI.mdx",sourceDirName:"03-Tutorials",slug:"/Tutorials/Generate new code using AI",permalink:"/docs/Tutorials/Generate new code using AI",draft:!1,editUrl:"https://github.com/defang-io/defang-docs/edit/master/docs/{{docPath}}/docs/03-Tutorials/01-Generate new code using AI.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/docs/Getting Started"},next:{title:"Deploy code using the CLI",permalink:"/docs/Tutorials/Deploy code using the CLI"}},s={},c=[{value:"Step 1 - Create a new folder for the project",id:"step-1---create-a-new-folder-for-the-project",level:2},{value:"Step 2 - Use the CLI generate command",id:"step-2---use-the-cli-generate-command",level:2},{value:"Step 3 - Review the Code",id:"step-3---review-the-code",level:2},{value:"Step 4 - Deploy",id:"step-4---deploy",level:2}],d={toc:c},u="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"generate-new-code-using-ai"},"Generate new code using AI"),(0,o.kt)("p",null,"Defang supports generating new projects using integration with an AI model. Using this feature, you can describe what you would like the service to do and the CLI will then generate a project skeleton with all the files required to make it work."),(0,o.kt)("h2",{id:"step-1---create-a-new-folder-for-the-project"},"Step 1 - Create a new folder for the project"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"mkdir service1\ncd service1\n")),(0,o.kt)("h2",{id:"step-2---use-the-cli-generate-command"},"Step 2 - Use the CLI generate command"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},'defang login\ndefang generate\n\n? Choose the language you\'d like to use:  [Use arrows to move, type to filter]\n> Nodejs\n  Golang\n  Python\n\n? Please describe the service you\'d like to build:\nA basic service with 2 REST endpoints. The default endpoint will be for health check and should return a JSON object like this: { "status": "OK" }. The /echo endpoint will echo back all request parameters in the response.\n')),(0,o.kt)("p",null,"This should generate different files in the current folder, based on the language selected."),(0,o.kt)("h2",{id:"step-3---review-the-code"},"Step 3 - Review the Code"),(0,o.kt)("p",null,"You can open the files in a code editor to review or make changes as needed before deploying the service."),(0,o.kt)("h2",{id:"step-4---deploy"},"Step 4 - Deploy"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"defang compose up --tail\n")))}p.isMDXComponent=!0}}]);