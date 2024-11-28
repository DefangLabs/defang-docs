"use strict";(self.webpackChunkdefang_docs=self.webpackChunkdefang_docs||[]).push([[4423],{6463:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var i=t(4848),o=t(8453);const s={title:"Deploy existing container",sidebar_position:200},a="Deploy an Existing Container Using the CLI",r={id:"tutorials/deploy-container-using-the-cli",title:"Deploy existing container",description:"This example is useful if you already have a Docker container built manually or through a CI/CD system and have that the resulting image is available in a public or private repository accessible by Defang.",source:"@site/docs/tutorials/deploy-container-using-the-cli.mdx",sourceDirName:"tutorials",slug:"/tutorials/deploy-container-using-the-cli",permalink:"/docs/tutorials/deploy-container-using-the-cli",draft:!1,unlisted:!1,editUrl:"https://github.com/DefangLabs/defang-docs/tree/main/docs/tutorials/deploy-container-using-the-cli.mdx",tags:[],version:"current",sidebarPosition:200,frontMatter:{title:"Deploy existing container",sidebar_position:200},sidebar:"docsSidebar",previous:{title:"Build and deploy code",permalink:"/docs/tutorials/deploy-code-compose"},next:{title:"Build and deploy using Pulumi",permalink:"/docs/tutorials/deploy-using-pulumi"}},l={},c=[];function d(e){const n={code:"code",h1:"h1",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"deploy-an-existing-container-using-the-cli",children:"Deploy an Existing Container Using the CLI"}),"\n",(0,i.jsx)(n.p,{children:"This example is useful if you already have a Docker container built manually or through a CI/CD system and have that the resulting image is available in a public or private repository accessible by Defang."}),"\n",(0,i.jsx)(n.h1,{id:"step-1---docker-compose",children:"Step 1 - Docker Compose"}),"\n",(0,i.jsx)(n.p,{children:"If you already have a Docker Compose file for your service(s) you can use it directly. Else you can create one like this:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"version: '3.9'\nservices:\n  service1:\n    # This is just an example, replace with the image you want\n    image: \"docker.io/nginx:latest\"\n    ports:\n      - mode: ingress\n        target: 3000\t\t\n"})}),"\n",(0,i.jsx)(n.h1,{id:"step-2---deploy",children:"Step 2 - Deploy"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"defang compose up\n"})})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var i=t(6540);const o={},s=i.createContext(o);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);