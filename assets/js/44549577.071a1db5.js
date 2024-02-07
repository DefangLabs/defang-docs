"use strict";(self.webpackChunkdefang_docs=self.webpackChunkdefang_docs||[]).push([[8736],{5700:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>c,metadata:()=>r,toc:()=>d});var o=t(7624),s=t(2172);const c={title:"Services",description:"Defang allows you deploy services, defined as containers, to the cloud.",sidebar_position:200},i="Services",r={id:"concepts/services",title:"Services",description:"Defang allows you deploy services, defined as containers, to the cloud.",source:"@site/docs/concepts/services.md",sourceDirName:"concepts",slug:"/concepts/services",permalink:"/docs/concepts/services",draft:!1,unlisted:!1,editUrl:"https://github.com/defang-io/defang-docs/tree/main/docs/concepts/services.md",tags:[],version:"current",sidebarPosition:200,frontMatter:{title:"Services",description:"Defang allows you deploy services, defined as containers, to the cloud.",sidebar_position:200},sidebar:"docsSidebar",previous:{title:"Accounts",permalink:"/docs/concepts/accounts"},next:{title:"Deployment",permalink:"/docs/concepts/deployments"}},a={},d=[];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",p:"p",...(0,s.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"services",children:"Services"}),"\n",(0,o.jsxs)(n.p,{children:["At the moment, all services deployed with Defang are containerized. This means that you can use any container image from Docker Hub or any other container registry, including private registries. You can also use a local Dockerfile: when you run ",(0,o.jsx)(n.code,{children:"defang compose up"})," or run your ",(0,o.jsx)(n.a,{href:"/docs/concepts/pulumi",children:"Pulumi program"}),", Defang will package your application source and upload it to the cloud to run the build process."]}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsx)(n.p,{children:"While this is the current state of the Defang model, we plan to add support for other types of services in the future, including serverless functions."})})]})}function u(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},2172:(e,n,t)=>{t.d(n,{I:()=>r,M:()=>i});var o=t(1504);const s={},c=o.createContext(s);function i(e){const n=o.useContext(c);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(c.Provider,{value:n},e.children)}}}]);