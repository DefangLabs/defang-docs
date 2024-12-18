"use strict";(self.webpackChunkdefang_docs=self.webpackChunkdefang_docs||[]).push([[1530],{162:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var s=t(4848),o=t(8453);const i={title:"Deployment Modes",description:"Defang provides three deployment modes which allow you to balance cost and resiliency.",sidebar_position:501},d="Deployment Modes",r={id:"concepts/deployment-modes",title:"Deployment Modes",description:"Defang provides three deployment modes which allow you to balance cost and resiliency.",source:"@site/docs/concepts/deployment-modes.md",sourceDirName:"concepts",slug:"/concepts/deployment-modes",permalink:"/docs/concepts/deployment-modes",draft:!1,unlisted:!1,editUrl:"https://github.com/DefangLabs/defang-docs/tree/main/docs/concepts/deployment-modes.md",tags:[],version:"current",sidebarPosition:501,frontMatter:{title:"Deployment Modes",description:"Defang provides three deployment modes which allow you to balance cost and resiliency.",sidebar_position:501},sidebar:"docsSidebar",previous:{title:"Deployment",permalink:"/docs/concepts/deployments"},next:{title:"Observability",permalink:"/docs/concepts/observability"}},l={},c=[{value:"Deployment Mode Comparison",id:"deployment-mode-comparison",level:2}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"deployment-modes",children:"Deployment Modes"}),"\n",(0,s.jsx)(n.p,{children:"Defang provides three deployment modes: development, staging, and production. These modes allow you to balance cost and resiliency according to your needs."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Development"}),": This mode is used for development and testing purposes. It typically involves less stringent resource allocations and may include debugging tools and verbose logging to aid in development."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Staging"}),": This mode serves as a pre-production environment where applications are tested in conditions that closely mimic production. It helps in identifying issues that might not be apparent in the development environment."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Production"}),": This mode is used for live deployments. It involves optimized configurations for performance, security, and reliability. Resource allocations are typically higher, and debugging tools are minimized to ensure stability."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"deployment-mode-comparison",children:"Deployment Mode Comparison"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Feature"}),(0,s.jsx)(n.th,{children:"Development"}),(0,s.jsx)(n.th,{children:"Staging"}),(0,s.jsx)(n.th,{children:"Production"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Build Resources"}),(0,s.jsx)(n.td,{children:"Builds will be run with 2x vCPUs"}),(0,s.jsx)(n.td,{children:"Builds will be run with 2x vCPUs"}),(0,s.jsx)(n.td,{children:"Builds will be run with 4x vCPUs"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Compute"}),(0,s.jsx)(n.td,{children:"Using spot instances"}),(0,s.jsx)(n.td,{children:"(like development)"}),(0,s.jsx)(n.td,{children:"On-demand instances"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Databases"}),(0,s.jsx)(n.td,{children:"Defang will provision resources optimized for burstable memory"}),(0,s.jsx)(n.td,{children:"(like production)"}),(0,s.jsx)(n.td,{children:"Defang will provision resources optimized for production"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Deployment"}),(0,s.jsx)(n.td,{children:"Previous deployments will be spun down before new deployments are spun up."}),(0,s.jsx)(n.td,{children:"(like production)"}),(0,s.jsxs)(n.td,{children:["Rolling updates will be used to deploy new versions. Defang will gradually replace services while maintaining at least ",(0,s.jsx)(n.a,{href:"/docs/tutorials/scaling-your-services",children:"the original number of replicas"}),"."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Logging"}),(0,s.jsx)(n.td,{children:"Logs retained for 1 day to save costs."}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"Logs retained for 30 days for compliance."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Networking"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"(like production)"}),(0,s.jsx)(n.td,{children:"Defang will provision a NAT gateway."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Load Balancing"}),(0,s.jsxs)(n.td,{children:["HTTP redirect to HTTPS using ",(0,s.jsx)(n.code,{children:"302 Found"})]}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:'Termindation Protection will be enabled; logs are retained on "down"'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"DNS"}),(0,s.jsx)(n.td,{children:"Defang will provision shorter TTLs; zones will be forcefully destroyed"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"Defang will provision longer TTLs; records can be overwritten for ZDT"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Managed storage"}),(0,s.jsx)(n.td,{children:"Operations that cause downtime are allowed"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:'Encryption at rest; Final snapshot created on "down"'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Logs"}),(0,s.jsx)(n.td,{children:"1 day retention"}),(0,s.jsx)(n.td,{children:"7 days retention"}),(0,s.jsx)(n.td,{children:"30 days retention"})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>r});var s=t(6540);const o={},i=s.createContext(o);function d(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);