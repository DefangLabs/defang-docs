"use strict";(self.webpackChunkdefang_docs=self.webpackChunkdefang_docs||[]).push([[5367],{735:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>g,frontMatter:()=>d,metadata:()=>o,toc:()=>c});var a=s(4848),t=s(8453);const d={title:"Managed Redis",description:"Defang can help you provision managed Redis instances.",sidebar_position:2e3},r="Managed Redis",o={id:"concepts/managed-storage/managed-redis",title:"Managed Redis",description:"Defang can help you provision managed Redis instances.",source:"@site/docs/concepts/managed-storage/managed-redis.md",sourceDirName:"concepts/managed-storage",slug:"/concepts/managed-storage/managed-redis",permalink:"/docs/concepts/managed-storage/managed-redis",draft:!1,unlisted:!1,editUrl:"https://github.com/DefangLabs/defang-docs/tree/main/docs/concepts/managed-storage/managed-redis.md",tags:[],version:"current",sidebarPosition:2e3,frontMatter:{title:"Managed Redis",description:"Defang can help you provision managed Redis instances.",sidebar_position:2e3},sidebar:"docsSidebar",previous:{title:"Managed Postgres",permalink:"/docs/concepts/managed-storage/managed-postgres"},next:{title:"Managed Object Storage",permalink:"/docs/concepts/managed-storage/managed-object-storage"}},i={},c=[{value:"Current Support",id:"current-support",level:2},{value:"How to use Managed Redis",id:"how-to-use-managed-redis",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"managed-redis",children:"Managed Redis"}),"\n",(0,a.jsx)(n.p,{children:"Redis is an in-memory data structure store widely used for caching, real-time analytics, and session management due to its high performance, low latency, and support for various data types. Defang can help you provision a managed Redis instance."}),"\n",(0,a.jsx)(n.h2,{id:"current-support",children:"Current Support"}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Provider"}),(0,a.jsx)(n.th,{children:"Managed Redis"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.a,{href:"/docs/providers/playground#managed-redis",children:"Playground"})}),(0,a.jsx)(n.td,{children:"\u274c"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.a,{href:"/docs/providers/aws/#managed-redis",children:"AWS"})}),(0,a.jsx)(n.td,{children:"\u2705"})]})]})]}),"\n",(0,a.jsx)(n.h2,{id:"how-to-use-managed-redis",children:"How to use Managed Redis"}),"\n",(0,a.jsxs)(n.p,{children:["To use managed Redis, in your ",(0,a.jsx)(n.code,{children:"compose.yaml"})," file, use the ",(0,a.jsx)(n.code,{children:"x-defang-redis"})," extension to define your Redis service. Adding the extension will tell Defang to provision a managed instance, rather than running Redis as a service. Defang will use the image tag to determine the version to provision from your cloud provider. Here's an example:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"cache:\n  image: redis:6.2\n  x-defang-redis: true\n  restart: unless-stopped\n  ports:\n    - mode: host\n      target: 6379\n"})})]})}function g(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>o});var a=s(6540);const t={},d=a.createContext(t);function r(e){const n=a.useContext(d);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),a.createElement(d.Provider,{value:n},e.children)}}}]);