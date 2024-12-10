"use strict";(self.webpackChunkdefang_docs=self.webpackChunkdefang_docs||[]).push([[2550],{9493:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var o=n(4848),i=n(8453);const s={title:"Debug",description:"Defang uses AI to help you debug your cloud applications.",sidebar_position:650},r="Debug",a={id:"concepts/debug",title:"Debug",description:"Defang uses AI to help you debug your cloud applications.",source:"@site/docs/concepts/debug.md",sourceDirName:"concepts",slug:"/concepts/debug",permalink:"/docs/concepts/debug",draft:!1,unlisted:!1,editUrl:"https://github.com/DefangLabs/defang-docs/tree/main/docs/concepts/debug.md",tags:[],version:"current",sidebarPosition:650,frontMatter:{title:"Debug",description:"Defang uses AI to help you debug your cloud applications.",sidebar_position:650},sidebar:"docsSidebar",previous:{title:"Observability",permalink:"/docs/concepts/observability"},next:{title:"Portal",permalink:"/docs/concepts/portal"}},c={},l=[{value:"How it works",id:"how-it-works",level:2}];function d(e){const t={admonition:"admonition",h1:"h1",h2:"h2",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"debug",children:"Debug"}),"\n",(0,o.jsx)(t.p,{children:"Defang includes an AI-driven tool to help you debug your cloud applications. The AI agent will use your service logs as well as the files in your project to help you identify and resolve issues."}),"\n",(0,o.jsx)(t.admonition,{type:"warning",children:(0,o.jsx)(t.p,{children:"The AI debugging agent is currently in preview and is currently limited in its capabilities. We plan to expand the capabilities of the AI agent in the future."})}),"\n",(0,o.jsx)(t.h2,{id:"how-it-works",children:"How it works"}),"\n",(0,o.jsxs)(t.p,{children:["When you deploy a project with Defang, the CLI will wait for all services' statuses to switch to healthy. If any service fails to deploy, the AI debugger will kick in. It will analyze the logs and files in your project to identify the issue and provide you with a suggested fix. ",(0,o.jsx)(t.strong,{children:"The AI debugger will not change your files."})]}),"\n",(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsx)(t.p,{children:"The AI debugger only kicks in when any service in a project fails to deploy. This could be because of a build failure, healthchecks failing, or a variety of other issues. At the moment, we do not offer any way to trigger the AI debugger manually."})})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var o=n(6540);const i={},s=o.createContext(i);function r(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);