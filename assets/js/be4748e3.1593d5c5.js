"use strict";(self.webpackChunkdefang_docs=self.webpackChunkdefang_docs||[]).push([[7307],{5208:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>a,contentTitle:()=>n,default:()=>h,frontMatter:()=>c,metadata:()=>t,toc:()=>l});var o=i(4848),r=i(8453);const c={sidebar_position:550,title:"Scaling Your Services",description:"How to scale services deployed with Defang"},n="Scaling Your Services",t={id:"tutorials/scaling-your-services",title:"Scaling Your Services",description:"How to scale services deployed with Defang",source:"@site/docs/tutorials/scaling-your-services.mdx",sourceDirName:"tutorials",slug:"/tutorials/scaling-your-services",permalink:"/docs/tutorials/scaling-your-services",draft:!1,unlisted:!1,editUrl:"https://github.com/DefangLabs/defang-docs/tree/main/docs/tutorials/scaling-your-services.mdx",tags:[],version:"current",sidebarPosition:550,frontMatter:{sidebar_position:550,title:"Scaling Your Services",description:"How to scale services deployed with Defang"},sidebar:"docsSidebar",previous:{title:"Updating Your Services",permalink:"/docs/tutorials/updating-your-services"},next:{title:"How to Use Your Own Domain",permalink:"/docs/tutorials/use-your-own-domain-name"}},a={},l=[{value:"Scaling Resource Reservations",id:"scaling-resource-reservations",level:2},{value:"Scaling with Replicas",id:"scaling-with-replicas",level:2}];function d(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.h1,{id:"scaling-your-services",children:"Scaling Your Services"}),"\n",(0,o.jsx)(s.p,{children:"This tutorial will show you how to scale your services with Defang."}),"\n",(0,o.jsx)(s.p,{children:"There are two primary ways to scale a service. The first way is to increase the resources allocated to a service. For example, giving a service more CPUs or memory. The second way is to deploy multiple instances of a service. This is called scaling with replicas. Defang makes it easy to do both."}),"\n",(0,o.jsxs)(s.p,{children:["The ",(0,o.jsx)(s.em,{children:"Compose Specification"}),", which is used by Defang, includes a ",(0,o.jsxs)(s.a,{href:"https://github.com/compose-spec/compose-spec/blob/main/deploy.md",children:[(0,o.jsx)(s.code,{children:"deploy"})," section"]})," which allows you to configure the deployment configuration for a service. This includes your service's resource requirements and the number of replicas of a service should be deployed."]}),"\n",(0,o.jsx)(s.h2,{id:"scaling-resource-reservations",children:"Scaling Resource Reservations"}),"\n",(0,o.jsxs)(s.p,{children:["In order to scale a service's resource reservations, you will need to update the ",(0,o.jsx)(s.code,{children:"deploy"})," section associated with your service in your application's ",(0,o.jsx)(s.code,{children:"compose.yaml"})," file."]}),"\n",(0,o.jsxs)(s.p,{children:["Use the ",(0,o.jsx)(s.a,{href:"https://github.com/compose-spec/compose-spec/blob/main/deploy.md#resources",children:(0,o.jsx)(s.code,{children:"resources"})})," section to specify the resource reservation requirements. These are the minimum resources which must be available for the platform to provision your service. You may end up with more resources than you requested, but you will never be allocated less."]}),"\n",(0,o.jsxs)(s.p,{children:["For example, if my app needs 2 CPUs and 512MB of memory, I would update the ",(0,o.jsx)(s.code,{children:"compose.yaml"})," file like this:"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-yaml",children:"services:\n  my_service:\n    image: my_app:latest\n    deploy:\n      resources:\n        reservations:\n          cpus: '2'\n          memory: '512M'\n"})}),"\n",(0,o.jsx)(s.p,{children:"The minimum resources which can be reserved:"}),"\n",(0,o.jsxs)(s.table,{children:[(0,o.jsx)(s.thead,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.th,{children:"Resource"}),(0,o.jsx)(s.th,{children:"Minimum"})]})}),(0,o.jsxs)(s.tbody,{children:[(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"CPUs"}),(0,o.jsx)(s.td,{children:"0.5"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"Memory"}),(0,o.jsx)(s.td,{children:"512M"})]})]})]}),"\n",(0,o.jsx)(s.admonition,{type:"info",children:(0,o.jsxs)(s.p,{children:["Note that the ",(0,o.jsx)(s.code,{children:"memory"})," field must be specified as a ",(0,o.jsx)(s.a,{href:"https://github.com/compose-spec/compose-spec/blob/main/11-extension.md#specifying-byte-values",children:'"byte value string"'})," using the ",(0,o.jsx)(s.code,{children:"{amount}{byte unit}"})," format. The supported units are ",(0,o.jsx)(s.code,{children:"b"})," (bytes), ",(0,o.jsx)(s.code,{children:"k"})," or ",(0,o.jsx)(s.code,{children:"kb"})," (kilobytes), ",(0,o.jsx)(s.code,{children:"m"})," or ",(0,o.jsx)(s.code,{children:"mb"})," (megabytes) and ",(0,o.jsx)(s.code,{children:"g"})," or ",(0,o.jsx)(s.code,{children:"gb"})," (gigabytes)."]})}),"\n",(0,o.jsx)(s.h2,{id:"scaling-with-replicas",children:"Scaling with Replicas"}),"\n",(0,o.jsxs)(s.p,{children:["In order to scale a service's replica count, you will need to update the ",(0,o.jsx)(s.code,{children:"deploy"})," section associated with your service in your application's ",(0,o.jsx)(s.code,{children:"compose.yaml"})," file."]}),"\n",(0,o.jsxs)(s.p,{children:["Use the ",(0,o.jsx)(s.a,{href:"https://github.com/compose-spec/compose-spec/blob/main/deploy.md#replicas",children:(0,o.jsx)(s.code,{children:"replicas"})})," section to specify the number of containers which should be running at any given time."]}),"\n",(0,o.jsxs)(s.p,{children:["For example, if I want to run 3 instances of my app, I would update the ",(0,o.jsx)(s.code,{children:"compose.yaml"})," file like this:"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-yaml",children:"services:\n  my_service:\n    image: my_app:latest\n    deploy:\n      replicas: 3\n"})})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,s,i)=>{i.d(s,{R:()=>n,x:()=>t});var o=i(6540);const r={},c=o.createContext(r);function n(e){const s=o.useContext(c);return o.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:n(e.components),o.createElement(c.Provider,{value:s},e.children)}}}]);