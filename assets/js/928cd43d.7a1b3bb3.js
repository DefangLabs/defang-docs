"use strict";(self.webpackChunkdefang_docs=self.webpackChunkdefang_docs||[]).push([[1144],{8396:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var n=o(4848),i=o(8453);const r={title:"Deploy to DigitalOcean",description:"Defang allows you deploy to your own DigitalOcean account.",sidebar_position:11},c="Deploy to DigitalOcean",a={id:"tutorials/deploy-to-digitalocean",title:"Deploy to DigitalOcean",description:"Defang allows you deploy to your own DigitalOcean account.",source:"@site/docs/tutorials/deploy-to-digitalocean.mdx",sourceDirName:"tutorials",slug:"/tutorials/deploy-to-digitalocean",permalink:"/docs/tutorials/deploy-to-digitalocean",draft:!1,unlisted:!1,editUrl:"https://github.com/DefangLabs/defang-docs/tree/main/docs/tutorials/deploy-to-digitalocean.mdx",tags:[],version:"current",sidebarPosition:11,frontMatter:{title:"Deploy to DigitalOcean",description:"Defang allows you deploy to your own DigitalOcean account.",sidebar_position:11},sidebar:"docsSidebar",previous:{title:"Deploy to AWS",permalink:"/docs/tutorials/deploy-to-aws"},next:{title:"Deploy to GCP",permalink:"/docs/tutorials/deploy-to-gcp"}},s={},l=[{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Step 1 - Navigate to your project directory",id:"step-1---navigate-to-your-project-directory",level:2},{value:"Step 2 - Authenticate Defang to use your DigitalOcean Account",id:"step-2---authenticate-defang-to-use-your-digitalocean-account",level:2},{value:"Step 3 - Deploy",id:"step-3---deploy",level:2},{value:"Step 4 - Inspect your deployment",id:"step-4---inspect-your-deployment",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"deploy-to-digitalocean",children:"Deploy to DigitalOcean"}),"\n",(0,n.jsx)(t.p,{children:"This tutorial will show you how to deploy your services to your own DigitalOcean account using Defang."}),"\n",(0,n.jsx)(t.h2,{id:"pre-requisites",children:"Pre-requisites"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://docs.docker.com/get-started/docker-concepts/building-images/writing-a-dockerfile/",children:"A Dockerfile in your project"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsxs)(t.a,{href:"https://docs.docker.com/compose/gettingstarted/",children:["A ",(0,n.jsx)(t.code,{children:"compose.yaml"})," file in your project"]})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/docs/concepts/authentication",children:"A Defang Account"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/docs/getting-started#install-the-defang-cli",children:"The Defang CLI"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/docs/providers/digitalocean#getting-started",children:"DigitalOcean Account Credentials"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/docs/providers/digitalocean#getting-started",children:"DigitalOcean Spaces Access Keys"})}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"step-1---navigate-to-your-project-directory",children:"Step 1 - Navigate to your project directory"}),"\n",(0,n.jsx)(t.p,{children:"Head to the folder where your project is located."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"$ cd path/to/your/project\n"})}),"\n",(0,n.jsx)(t.h2,{id:"step-2---authenticate-defang-to-use-your-digitalocean-account",children:"Step 2 - Authenticate Defang to use your DigitalOcean Account"}),"\n",(0,n.jsx)(t.p,{children:"Defang will look for your DigitalOcean credentials in your shell environment and expect to find the following credentials:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["the ",(0,n.jsx)(t.code,{children:"DIGITALOCEAN_TOKEN"})," environment variable"]}),"\n",(0,n.jsxs)(t.li,{children:["and, the ",(0,n.jsx)(t.code,{children:"SPACES_ACCESS_KEY_ID"})," and ",(0,n.jsx)(t.code,{children:"SPACES_SECRET_ACCESS_KEY"})," environment variables"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"step-3---deploy",children:"Step 3 - Deploy"}),"\n",(0,n.jsxs)(t.p,{children:["Invoke the ",(0,n.jsx)(t.code,{children:"defang compose up"})," CLI command with the ",(0,n.jsx)(t.code,{children:"--provider=do"})," flag or set the ",(0,n.jsx)(t.code,{children:"DEFANG_PROVIDER=do"})," environment variable."]}),"\n",(0,n.jsx)(t.p,{children:"For example:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"$ defang compose up --provider=do\n"})}),"\n",(0,n.jsx)(t.h2,{id:"step-4---inspect-your-deployment",children:"Step 4 - Inspect your deployment"}),"\n",(0,n.jsx)(t.p,{children:"Defang will provision resources in your DigitalOcean account and deploy your services. You can inspect the resources created in your DigitalOcean Dashboard."}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsxs)(t.p,{children:["For a deeper discussion of the Defang DigitalOcean Architecture, see our ",(0,n.jsx)(t.a,{href:"/docs/providers/digitalocean",children:"DigitalOcean Provider docs"}),"."]})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,t,o)=>{o.d(t,{R:()=>c,x:()=>a});var n=o(6540);const i={},r=n.createContext(i);function c(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);