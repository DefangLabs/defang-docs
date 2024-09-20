"use strict";(self.webpackChunkdefang_docs=self.webpackChunkdefang_docs||[]).push([[3162],{861:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var t=o(4848),s=o(8453);const i={title:"Defang BYOC",description:"Defang allows you deploy services, defined as containers, to your own cloud accounts.",sidebar_position:50},a="Defang BYOC",r={id:"concepts/defang-byoc",title:"Defang BYOC",description:"Defang allows you deploy services, defined as containers, to your own cloud accounts.",source:"@site/docs/concepts/defang-byoc.md",sourceDirName:"concepts",slug:"/concepts/defang-byoc",permalink:"/docs/concepts/defang-byoc",draft:!1,unlisted:!1,editUrl:"https://github.com/DefangLabs/defang-docs/tree/main/docs/concepts/defang-byoc.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{title:"Defang BYOC",description:"Defang allows you deploy services, defined as containers, to your own cloud accounts.",sidebar_position:50},sidebar:"docsSidebar",previous:{title:"Defang Playground",permalink:"/docs/concepts/defang-playground"},next:{title:"Accounts",permalink:"/docs/concepts/accounts"}},c={},d=[{value:"AWS",id:"aws",level:2},{value:"DigitalOcean",id:"digitalocean",level:2},{value:"Azure",id:"azure",level:2},{value:"GCP",id:"gcp",level:2}];function l(e){const n={a:"a",admonition:"admonition",em:"em",h1:"h1",h2:"h2",p:"p",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"defang-byoc",children:"Defang BYOC"}),"\n",(0,t.jsxs)(n.p,{children:["Defang aims to make it easier to deploy your services to the cloud. Specifically, Defang's goal is to make it easier to deploy your workloads to your ",(0,t.jsx)(n.em,{children:"own"})," cloud accounts. We refer to this as bring-your-own-cloud (BYOC). We also provide Defang Playground, but it is only intended for non-production workloads so you can get a feel for how Defang works."]}),"\n",(0,t.jsxs)(n.p,{children:["Defang provisions and configures the necessary native managed services from your cloud provider to get your services up and running. For example, on AWS, Defang will configure an ",(0,t.jsx)(n.a,{href:"https://aws.amazon.com/elasticloadbalancing/application-load-balancer/",children:"ALB"}),", setup ",(0,t.jsx)(n.a,{href:"https://aws.amazon.com/ecr/",children:"ECR"}),", configure ",(0,t.jsx)(n.a,{href:"https://aws.amazon.com/cloudwatch/?nc2=type_a",children:"CloudWatch"}),", and run your service on ",(0,t.jsx)(n.a,{href:"https://aws.amazon.com/ecs/?nc2=type_a",children:"ECS"})," and more. The following lists the existing and planned support for cloud providers."]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"Defang does not install or run any Defang or third party services at runtime.\nDefang does run the Defang build service to build your container images, which terminates after every build."})}),"\n",(0,t.jsx)(n.h2,{id:"aws",children:"AWS"}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"The Public Beta of the v1 Defang BYOC AWS Provider is released as of Feb 1 2024."})}),"\n",(0,t.jsxs)(n.p,{children:["Please read the ",(0,t.jsx)(n.a,{href:"/docs/providers/aws",children:"AWS Provider"})," documentation for more details about how the AWS provider works and how to get started."]}),"\n",(0,t.jsx)(n.h2,{id:"digitalocean",children:"DigitalOcean"}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["The Private Beta of the Defang BYOC DigitalOcean Provider will be released in September 2024. Its development is tracked ",(0,t.jsx)(n.a,{href:"https://github.com/DefangLabs/defang/pull/594",children:"here"}),"."]})}),"\n",(0,t.jsx)(n.h2,{id:"azure",children:"Azure"}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["We will be working on Azure support in the future. If you are interested in Azure support, please vote on ",(0,t.jsx)(n.a,{href:"https://github.com/DefangLabs/defang/issues/57",children:"this issue"}),"."]})}),"\n",(0,t.jsx)(n.h2,{id:"gcp",children:"GCP"}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["We will be working on GCP support in the future. If you are interested in GCP support, please vote on ",(0,t.jsx)(n.a,{href:"https://github.com/DefangLabs/defang/issues/58",children:"this issue"}),"."]})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>a,x:()=>r});var t=o(6540);const s={},i=t.createContext(s);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);