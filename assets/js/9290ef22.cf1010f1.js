"use strict";(self.webpackChunkdefang_docs=self.webpackChunkdefang_docs||[]).push([[8088],{273:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>c,metadata:()=>i,toc:()=>d});var n=t(4848),r=t(8453);const c={title:"Deploy to GCP",description:"Defang allows you deploy to your own Google Cloud Platform (GCP) account.",sidebar_position:11},s="Deploy to Google Cloud Platform (GCP)",i={id:"tutorials/deploy-to-gcp",title:"Deploy to GCP",description:"Defang allows you deploy to your own Google Cloud Platform (GCP) account.",source:"@site/docs/tutorials/deploy-to-gcp.mdx",sourceDirName:"tutorials",slug:"/tutorials/deploy-to-gcp",permalink:"/docs/tutorials/deploy-to-gcp",draft:!1,unlisted:!1,editUrl:"https://github.com/DefangLabs/defang-docs/tree/main/docs/tutorials/deploy-to-gcp.mdx",tags:[],version:"current",sidebarPosition:11,frontMatter:{title:"Deploy to GCP",description:"Defang allows you deploy to your own Google Cloud Platform (GCP) account.",sidebar_position:11},sidebar:"docsSidebar",previous:{title:"Deploy to DigitalOcean",permalink:"/docs/tutorials/deploy-to-digitalocean"},next:{title:"Deploy to Playground",permalink:"/docs/tutorials/deploy-to-playground"}},l={},d=[{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Step 1 - Navigate to your project directory",id:"step-1---navigate-to-your-project-directory",level:2},{value:"Step 2 - Authenticate Defang to use your GCP Account",id:"step-2---authenticate-defang-to-use-your-gcp-account",level:2},{value:"Step 3 - Deploy",id:"step-3---deploy",level:2},{value:"Step 4 - Inspect your deployment",id:"step-4---inspect-your-deployment",level:2}];function a(e){const o={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h1,{id:"deploy-to-google-cloud-platform-gcp",children:"Deploy to Google Cloud Platform (GCP)"}),"\n",(0,n.jsx)(o.p,{children:"This tutorial will show you how to deploy your services to your own GCP project using Defang."}),"\n",(0,n.jsx)(o.h2,{id:"pre-requisites",children:"Pre-requisites"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:(0,n.jsx)(o.a,{href:"https://docs.docker.com/get-started/docker-concepts/building-images/writing-a-dockerfile/",children:"A Dockerfile in your project"})}),"\n",(0,n.jsx)(o.li,{children:(0,n.jsxs)(o.a,{href:"https://docs.docker.com/compose/gettingstarted/",children:["A ",(0,n.jsx)(o.code,{children:"compose.yaml"})," file in your project"]})}),"\n",(0,n.jsx)(o.li,{children:(0,n.jsx)(o.a,{href:"/docs/concepts/authentication",children:"A Defang Account"})}),"\n",(0,n.jsx)(o.li,{children:(0,n.jsx)(o.a,{href:"/docs/getting-started#install-the-defang-cli",children:"The Defang CLI"})}),"\n",(0,n.jsx)(o.li,{children:(0,n.jsx)(o.a,{href:"https://cloud.google.com/docs/authentication",children:"GCP Account Credentials"})}),"\n"]}),"\n",(0,n.jsx)(o.h2,{id:"step-1---navigate-to-your-project-directory",children:"Step 1 - Navigate to your project directory"}),"\n",(0,n.jsx)(o.p,{children:"Head to the folder where your project is located."}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-bash",children:"$ cd path/to/your/project\n"})}),"\n",(0,n.jsx)(o.h2,{id:"step-2---authenticate-defang-to-use-your-gcp-account",children:"Step 2 - Authenticate Defang to use your GCP Account"}),"\n",(0,n.jsxs)(o.p,{children:["After signing in to your GCP account, select an existing project or ",(0,n.jsx)(o.a,{href:"https://developers.google.com/workspace/guides/create-project",children:"create a new project"}),". Make sure ",(0,n.jsx)(o.a,{href:"https://cloud.google.com/billing/docs/how-to/modify-project",children:"billing is enabled"}),". Then, note down the project ID and set it as environment variable ",(0,n.jsx)(o.code,{children:"GCP_PROJECT_ID"}),"."]}),"\n",(0,n.jsx)(o.h2,{id:"step-3---deploy",children:"Step 3 - Deploy"}),"\n",(0,n.jsxs)(o.p,{children:["Invoke the ",(0,n.jsx)(o.code,{children:"defang up"})," CLI command with the ",(0,n.jsx)(o.code,{children:"--provider=gcp"})," flag or set the ",(0,n.jsx)(o.code,{children:"DEFANG_PROVIDER=gcp"})," environment variable."]}),"\n",(0,n.jsx)(o.p,{children:"For example:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-bash",children:"$ defang up --provider=gcp\n"})}),"\n",(0,n.jsx)(o.h2,{id:"step-4---inspect-your-deployment",children:"Step 4 - Inspect your deployment"}),"\n",(0,n.jsxs)(o.p,{children:["Defang will provision resources in your GCP account and deploy your services. You can inspect the resources created in your ",(0,n.jsx)(o.a,{href:"https://console.cloud.google.com/",children:"GCP Dashboard"}),"."]}),"\n",(0,n.jsx)(o.hr,{}),"\n",(0,n.jsxs)(o.p,{children:["For a deeper discussion of the Defang GCP Architecture, see our ",(0,n.jsx)(o.a,{href:"/docs/providers/gcp",children:"GCP docs"}),"."]})]})}function p(e={}){const{wrapper:o}={...(0,r.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},8453:(e,o,t)=>{t.d(o,{R:()=>s,x:()=>i});var n=t(6540);const r={},c=n.createContext(r);function s(e){const o=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(c.Provider,{value:o},e.children)}}}]);