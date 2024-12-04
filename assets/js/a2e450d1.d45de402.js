"use strict";(self.webpackChunkdefang_docs=self.webpackChunkdefang_docs||[]).push([[1463],{999:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=t(4848),r=t(8453);const i={title:"Deploy to AWS",description:"Defang allows you deploy to your own Amazon Web Services (AWS) account.",sidebar_position:11},s="Deploy to Amazon Web Services (AWS)",c={id:"tutorials/deploy-to-aws",title:"Deploy to AWS",description:"Defang allows you deploy to your own Amazon Web Services (AWS) account.",source:"@site/docs/tutorials/deploy-to-aws.mdx",sourceDirName:"tutorials",slug:"/tutorials/deploy-to-aws",permalink:"/docs/tutorials/deploy-to-aws",draft:!1,unlisted:!1,editUrl:"https://github.com/DefangLabs/defang-docs/tree/main/docs/tutorials/deploy-to-aws.mdx",tags:[],version:"current",sidebarPosition:11,frontMatter:{title:"Deploy to AWS",description:"Defang allows you deploy to your own Amazon Web Services (AWS) account.",sidebar_position:11},sidebar:"docsSidebar",previous:{title:"Deploy to Your Own Cloud",permalink:"/docs/tutorials/deploy-to-your-cloud"},next:{title:"Deploy to DigitalOcean",permalink:"/docs/tutorials/deploy-to-digitalocean"}},a={},l=[{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Step 1 - Navigate to your project directory",id:"step-1---navigate-to-your-project-directory",level:2},{value:"Step 2 - Authenticate Defang to use your AWS Account",id:"step-2---authenticate-defang-to-use-your-aws-account",level:2},{value:"Step 3 - Deploy",id:"step-3---deploy",level:2},{value:"Step 4 - Inspect your deployment",id:"step-4---inspect-your-deployment",level:2}];function d(e){const o={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h1,{id:"deploy-to-amazon-web-services-aws",children:"Deploy to Amazon Web Services (AWS)"}),"\n",(0,n.jsx)(o.p,{children:"This tutorial will show you how to deploy your services to your own AWS account using Defang."}),"\n",(0,n.jsx)(o.h2,{id:"pre-requisites",children:"Pre-requisites"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:(0,n.jsx)(o.a,{href:"https://docs.docker.com/get-started/docker-concepts/building-images/writing-a-dockerfile/",children:"A Dockerfile in your project"})}),"\n",(0,n.jsx)(o.li,{children:(0,n.jsxs)(o.a,{href:"https://docs.docker.com/compose/gettingstarted/",children:["A ",(0,n.jsx)(o.code,{children:"compose.yaml"})," file in your project"]})}),"\n",(0,n.jsx)(o.li,{children:(0,n.jsx)(o.a,{href:"/docs/concepts/authentication",children:"A Defang Account"})}),"\n",(0,n.jsx)(o.li,{children:(0,n.jsx)(o.a,{href:"/docs/getting-started#install-the-defang-cli",children:"The Defang CLI"})}),"\n",(0,n.jsx)(o.li,{children:(0,n.jsx)(o.a,{href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-authentication.html",children:"AWS Account Credentials"})}),"\n"]}),"\n",(0,n.jsx)(o.h2,{id:"step-1---navigate-to-your-project-directory",children:"Step 1 - Navigate to your project directory"}),"\n",(0,n.jsx)(o.p,{children:"Head to the folder where your project is located."}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-bash",children:"$ cd path/to/your/project\n"})}),"\n",(0,n.jsx)(o.h2,{id:"step-2---authenticate-defang-to-use-your-aws-account",children:"Step 2 - Authenticate Defang to use your AWS Account"}),"\n",(0,n.jsxs)(o.p,{children:["There are many ways to authenticate your ",(0,n.jsx)(o.a,{href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-authentication.html",children:"AWS account"}),".\nOnce you've done that, Defang will look for your AWS credentials in your shell environment and expect to find one of the following credential sets:"]}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:["the ",(0,n.jsx)(o.code,{children:"AWS_PROFILE"})," environment variable"]}),"\n",(0,n.jsxs)(o.li,{children:["or, the ",(0,n.jsx)(o.code,{children:"AWS_ACCESS_KEY_ID"})," and ",(0,n.jsx)(o.code,{children:"AWS_SECRET_ACCESS_KEY"})," environment variables"]}),"\n"]}),"\n",(0,n.jsx)(o.admonition,{type:"tip",children:(0,n.jsxs)(o.p,{children:["If you have the AWS CLI installed (which is not required in order to use the Defang CLI), you can verify that you've authenticated to AWS by running ",(0,n.jsx)(o.code,{children:"aws sts get-caller-identity"})," and see your account ID."]})}),"\n",(0,n.jsx)(o.h2,{id:"step-3---deploy",children:"Step 3 - Deploy"}),"\n",(0,n.jsxs)(o.p,{children:["Invoke the ",(0,n.jsx)(o.code,{children:"defang up"})," CLI command with the ",(0,n.jsx)(o.code,{children:"--provider=aws"})," flag or set the ",(0,n.jsx)(o.code,{children:"DEFANG_PROVIDER=aws"})," environment variable."]}),"\n",(0,n.jsx)(o.p,{children:"For example:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-bash",children:"$ defang up --provider=aws\n"})}),"\n",(0,n.jsx)(o.h2,{id:"step-4---inspect-your-deployment",children:"Step 4 - Inspect your deployment"}),"\n",(0,n.jsx)(o.p,{children:"Defang will provision resources in your AWS account and deploy your services. You can inspect the resources created in your AWS dashboard."}),"\n",(0,n.jsx)(o.hr,{}),"\n",(0,n.jsxs)(o.p,{children:["For a deeper discussion of the Defang AWS Architecture, including a list of the resources we provision in your account, see our ",(0,n.jsx)(o.a,{href:"/docs/providers/aws",children:"AWS Provider docs"}),"."]})]})}function u(e={}){const{wrapper:o}={...(0,r.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,o,t)=>{t.d(o,{R:()=>s,x:()=>c});var n=t(6540);const r={},i=n.createContext(r);function s(e){const o=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(i.Provider,{value:o},e.children)}}}]);