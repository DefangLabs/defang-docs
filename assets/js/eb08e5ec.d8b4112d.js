"use strict";(self.webpackChunkdefang_docs=self.webpackChunkdefang_docs||[]).push([[3768],{7460:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var s=n(7624),i=n(2172);const o={sidebar_position:500,title:"Update Services",description:"Update services with Defang."},r="Update Services",a={id:"getting-started/update",title:"Update Services",description:"Update services with Defang.",source:"@site/docs/getting-started/update.md",sourceDirName:"getting-started",slug:"/getting-started/update",permalink:"/docs/getting-started/update",draft:!1,unlisted:!1,editUrl:"https://github.com/defang-io/defang-docs/tree/main/docs/getting-started/update.md",tags:[],version:"current",sidebarPosition:500,frontMatter:{sidebar_position:500,title:"Update Services",description:"Update services with Defang."},sidebar:"docsSidebar",previous:{title:"Monitor Services",permalink:"/docs/getting-started/monitor"},next:{title:"Use Cases",permalink:"/docs/use-cases/"}},d={},c=[];function p(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",p:"p",...(0,i.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"update-services",children:"Update Services"}),"\n",(0,s.jsxs)(t.p,{children:["To update your app (for example, updating the base image of your container, or making changes to your code) you can run the ",(0,s.jsx)(t.code,{children:"defang compose up"})," command and it will build and deploy a new version with zero downtime. Your current version of the service will keep running and handling traffic while the new version is being built and deployed. Only after the new version passes the health checks and accepts traffic will the older version be stopped."]}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsxs)(t.p,{children:["If you are using ",(0,s.jsx)(t.a,{href:"/docs/concepts/compose",children:"compose files"})," to define your services, you can add/remove services, make changes to code, etc. When you run ",(0,s.jsx)(t.code,{children:"defang compose up"}),", the update will be diffed against the current state and any necessary changes will be applied to make the current state match the desired state."]})})]})}function u(e={}){const{wrapper:t}={...(0,i.M)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},2172:(e,t,n)=>{n.d(t,{I:()=>a,M:()=>r});var s=n(1504);const i={},o=s.createContext(i);function r(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);