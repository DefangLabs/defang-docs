"use strict";(self.webpackChunkdefang_docs=self.webpackChunkdefang_docs||[]).push([[7547],{1494:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=o(4848),t=o(8453);const a={title:"Playground",description:"The Defang Playground is a free tier that allows you to experiment with Defang.",sidebar_position:0},i=void 0,s={id:"providers/playground",title:"Playground",description:"The Defang Playground is a free tier that allows you to experiment with Defang.",source:"@site/docs/providers/playground.md",sourceDirName:"providers",slug:"/providers/playground",permalink:"/docs/providers/playground",draft:!1,unlisted:!1,editUrl:"https://github.com/DefangLabs/defang-docs/tree/main/docs/providers/playground.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Playground",description:"The Defang Playground is a free tier that allows you to experiment with Defang.",sidebar_position:0},sidebar:"docsSidebar",previous:{title:"Providers",permalink:"/docs/category/providers"},next:{title:"AWS",permalink:"/docs/providers/aws/"}},d={},c=[{value:"Overview",id:"overview",level:2},{value:"Managed services",id:"managed-services",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:'The Defang Playground is a free tier that allows you to experiment with Defang. The Playground is a shared environment that should not be used to run production workloads. The Playground is a great way to get started with Defang using "1-click deploy" or to experiment with the Defang CLI.'}),"\n",(0,r.jsx)(n.p,{children:"This page highlights architectural considerations when deploying to the Playground and any differences you might encounter when deploying to the Playground versus deploying to your own cloud account."}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["The Playground allows only 1 deployed project at a time. Use the CLI ",(0,r.jsx)(n.code,{children:"defang down"})," to tear down a project before deploying a new one."]})}),"\n",(0,r.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsxs)(n.p,{children:["Overall, the Defang Playground is very similar to deploying to your own cloud account. The Playground runs on a Defang-managed AWS account, so you can expect it to work similarly to deploying to ",(0,r.jsx)(n.a,{href:"/docs/providers/aws/",children:"AWS"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"managed-services",children:"Managed services"}),"\n",(0,r.jsxs)(n.p,{children:["In essence, the Playground does not support any ",(0,r.jsx)(n.a,{href:"../concepts/managed-storage",children:"managed storage"})," services, ie. ",(0,r.jsx)(n.code,{children:"x-defang-postgres"})," and ",(0,r.jsx)(n.code,{children:"x-defang-redis"})," are ignored when deploying to the Playground. You can however run both postgres and redis as regular container services for testing purposes."]})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>i,x:()=>s});var r=o(6540);const t={},a=r.createContext(t);function i(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);