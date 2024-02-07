"use strict";(self.webpackChunkdefang_docs=self.webpackChunkdefang_docs||[]).push([[3292],{4364:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var t=n(7624),s=n(2172);const i={title:"Deployment",description:"Defang will build your services in the cloud and manage the deployment process for you.",sidebar_position:250},r="Deployment",c={id:"concepts/deployments",title:"Deployment",description:"Defang will build your services in the cloud and manage the deployment process for you.",source:"@site/docs/concepts/deployments.md",sourceDirName:"concepts",slug:"/concepts/deployments",permalink:"/docs/concepts/deployments",draft:!1,unlisted:!1,editUrl:"https://github.com/defang-io/defang-docs/tree/main/docs/concepts/deployments.md",tags:[],version:"current",sidebarPosition:250,frontMatter:{title:"Deployment",description:"Defang will build your services in the cloud and manage the deployment process for you.",sidebar_position:250},sidebar:"docsSidebar",previous:{title:"Services",permalink:"/docs/concepts/services"},next:{title:"Resources",permalink:"/docs/concepts/resources"}},d={},a=[];function l(e){const o={a:"a",admonition:"admonition",code:"code",h1:"h1",p:"p",...(0,s.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h1,{id:"deployment",children:"Deployment"}),"\n",(0,t.jsxs)(o.p,{children:["When you deploy using Defang, whether it's with ",(0,t.jsx)(o.code,{children:"defang compose up"})," with a ",(0,t.jsx)(o.a,{href:"/docs/concepts/compose",children:"compose file"})," or using a ",(0,t.jsx)(o.a,{href:"/docs/concepts/pulumi",children:"Pulumi program"}),", Defang will build your services in the cloud and manage the deployment process for you. If you provide a Dockerfile and build context, Defang will upload the files found within the build context to the cloud (either yours in ",(0,t.jsx)(o.a,{href:"/docs/concepts/defang-byoc",children:"Defang BYOC"})," or ours in ",(0,t.jsx)(o.a,{href:"/docs/concepts/defang-playground",children:"Defang Playground"}),"), build the image, and store it in the cloud provider's container registry. Defang will also make sure to get your new service up and running before deprovisioning any old services so you don't have to worry about downtime."]}),"\n",(0,t.jsx)(o.admonition,{type:"info",children:(0,t.jsxs)(o.p,{children:["In ",(0,t.jsx)(o.a,{href:"/docs/concepts/defang-byoc",children:"Defang BYOC"}),", Defang will use your cloud provider account to build and store your images. In ",(0,t.jsx)(o.a,{href:"/docs/concepts/defang-playground",children:"Defang Playground"})," we will build and store your images for you."]})})]})}function u(e={}){const{wrapper:o}={...(0,s.M)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},2172:(e,o,n)=>{n.d(o,{I:()=>c,M:()=>r});var t=n(1504);const s={},i=t.createContext(s);function r(e){const o=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(i.Provider,{value:o},e.children)}}}]);