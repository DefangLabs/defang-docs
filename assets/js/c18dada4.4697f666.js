"use strict";(self.webpackChunkdefang_docs=self.webpackChunkdefang_docs||[]).push([[4423],{6463:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var t=i(4848),o=i(8453);const s={title:"Deploy Existing Containers",sidebar_position:200},r="Deploy Existing Containers",a={id:"tutorials/deploy-container-using-the-cli",title:"Deploy Existing Containers",description:"This tutorial will show you how to deploy an existing container/multi-container application using Defang.",source:"@site/docs/tutorials/deploy-container-using-the-cli.mdx",sourceDirName:"tutorials",slug:"/tutorials/deploy-container-using-the-cli",permalink:"/docs/tutorials/deploy-container-using-the-cli",draft:!1,unlisted:!1,editUrl:"https://github.com/DefangLabs/defang-docs/tree/main/docs/tutorials/deploy-container-using-the-cli.mdx",tags:[],version:"current",sidebarPosition:200,frontMatter:{title:"Deploy Existing Containers",sidebar_position:200},sidebar:"docsSidebar",previous:{title:"Generate Project Outlines With AI",permalink:"/docs/tutorials/generate-new-code-using-ai"},next:{title:"Deploy Using Pulumi",permalink:"/docs/tutorials/deploy-using-pulumi"}},l={},c=[{value:"Step 1 - Make a Docker Compose file",id:"step-1---make-a-docker-compose-file",level:2},{value:"Step 2 - Deploy",id:"step-2---deploy",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"deploy-existing-containers",children:"Deploy Existing Containers"}),"\n",(0,t.jsx)(n.p,{children:"This tutorial will show you how to deploy an existing container/multi-container application using Defang."}),"\n",(0,t.jsx)(n.p,{children:"This is rather useful if you already have a Docker container built manually, or through a CI/CD system (where the resulting image is available in a public or private repository accessible by Defang), but it is not required in order to follow along."}),"\n",(0,t.jsx)(n.h2,{id:"step-1---make-a-docker-compose-file",children:"Step 1 - Make a Docker Compose file"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["If you are unfamiliar with Docker Compose files, check out the ",(0,t.jsx)(n.a,{href:"/docs/concepts/compose",children:"Compose"})," page."]})}),"\n",(0,t.jsxs)(n.p,{children:["Create a ",(0,t.jsx)(n.code,{children:"compose.yaml"})," file to define the ",(0,t.jsx)(n.a,{href:"/docs/concepts/services",children:"service(s)"})," in your application."]}),"\n",(0,t.jsx)(n.p,{children:"If you already have a Docker Compose file to define your service(s), you can use it directly and skip this step."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"version: '3.9'\nservices:\n  web:\n    image: nginx:latest\n    ports:\n      - mode: ingress\n        target: 3000\t\t\n  app:\n    build:\n      context: .\n      dockerfile: Dockerfile\n    ports:\n      - mode: ingress\n        target: 4000\t\n  redis:\n    image: redis:6.2\n    restart: unless-stopped\n    ports:\n      - mode: host\n        target: 6379\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The example above shows a multi-container application with 3 services, ",(0,t.jsx)(n.code,{children:"web"}),", ",(0,t.jsx)(n.code,{children:"app"}),", ",(0,t.jsx)(n.code,{children:"redis"}),".\nIf you wanted to deploy only one container, say ",(0,t.jsx)(n.code,{children:"app"}),", then the example would remain the same, except without the ",(0,t.jsx)(n.code,{children:"web"})," and ",(0,t.jsx)(n.code,{children:"redis"})," services."]}),"\n",(0,t.jsx)(n.h2,{id:"step-2---deploy",children:"Step 2 - Deploy"}),"\n",(0,t.jsxs)(n.p,{children:["Run the following command in the ",(0,t.jsx)(n.a,{href:"/docs/getting-started#install-the-defang-cli",children:"Defang CLI"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"defang compose up\n"})})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>a});var t=i(6540);const o={},s=t.createContext(o);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);