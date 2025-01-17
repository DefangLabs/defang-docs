"use strict";(self.webpackChunkdefang_docs=self.webpackChunkdefang_docs||[]).push([[3165],{3020:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>r,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var n=o(4848),i=o(8453);const s={title:"Using 1-Click Deploy",sidebar_position:300,description:"Use 1-Click Deploy to easily deploy a sample to the Defang Playground."},a="Using 1-Click Deploy",l={id:"tutorials/using-one-click-deploy",title:"Using 1-Click Deploy",description:"Use 1-Click Deploy to easily deploy a sample to the Defang Playground.",source:"@site/docs/tutorials/using-one-click-deploy.md",sourceDirName:"tutorials",slug:"/tutorials/using-one-click-deploy",permalink:"/docs/tutorials/using-one-click-deploy",draft:!1,unlisted:!1,editUrl:"https://github.com/DefangLabs/defang-docs/tree/main/docs/tutorials/using-one-click-deploy.md",tags:[],version:"current",sidebarPosition:300,frontMatter:{title:"Using 1-Click Deploy",sidebar_position:300,description:"Use 1-Click Deploy to easily deploy a sample to the Defang Playground."},sidebar:"docsSidebar",previous:{title:"Deploy Existing Containers",permalink:"/docs/tutorials/deploy-container-using-the-cli"},next:{title:"Configure Environment Variables",permalink:"/docs/tutorials/configure-environment-variables"}},r={},c=[{value:"Step 1 - Choose a Sample",id:"step-1---choose-a-sample",level:2},{value:"Step 2 - Allow Permissions",id:"step-2---allow-permissions",level:2},{value:"Step 3 - Wait for Deployment to Complete",id:"step-3---wait-for-deployment-to-complete",level:2},{value:"Configuration in 1-Click Deploy",id:"configuration-in-1-click-deploy",level:3}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"using-1-click-deploy",children:"Using 1-Click Deploy"}),"\n",(0,n.jsx)(t.p,{children:"This tutorial will show you how to use Defang 1-Click Deploy to deploy a sample to the Defang Playground."}),"\n",(0,n.jsxs)(t.p,{children:["The 1-Click Deploy button is the easiest way for new users to deploy a sample project to the ",(0,n.jsx)(t.a,{href:"/docs/concepts/defang-playground",children:"Defang Playground"}),". No CLI installation is required."]}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["To access the full range of features provided by Defang, we recommend using the ",(0,n.jsx)(t.a,{href:"/docs/getting-started",children:"Defang CLI"}),"."]})}),"\n",(0,n.jsx)(t.h2,{id:"step-1---choose-a-sample",children:"Step 1 - Choose a Sample"}),"\n",(0,n.jsxs)(t.p,{children:["Head to our ",(0,n.jsx)(t.a,{href:"https://defang.io/#samples",children:"list of samples"}),' and click a sample you want to deploy. Then, click on the button that says "1-Click Deploy".']}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"one-click-deploy-button",src:o(7426).A+"",width:"432",height:"172"})}),"\n",(0,n.jsxs)(t.admonition,{type:"info",children:[(0,n.jsxs)(t.p,{children:['Alternatively, you can find the "1-Click Deploy" button located in the ',(0,n.jsx)(t.code,{children:"README.md"})," file of each sample's GitHub repository."]}),(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"deploy-with-defang-button",src:o(7961).A+"",width:"502",height:"286"})})]}),"\n",(0,n.jsx)(t.h2,{id:"step-2---allow-permissions",children:"Step 2 - Allow Permissions"}),"\n",(0,n.jsx)(t.p,{children:'After you\'ve clicked, you will be prompted to use GitHub to log in. Once you see a "Create a new repository" page appear, allow the sample repository to get cloned into your GitHub account. You can do this by clicking the green "Create repository" button at the bottom.'}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"create-repository",src:o(9201).A+"",width:"815",height:"451"})}),"\n",(0,n.jsx)(t.h2,{id:"step-3---wait-for-deployment-to-complete",children:"Step 3 - Wait for Deployment to Complete"}),"\n",(0,n.jsx)(t.p,{children:'A Github Action workflow will automatically start running to install Defang and deploy the sample to the Defang Playground. You can see this by going into the "Actions" tab in your GitHub repository.'}),"\n",(0,n.jsxs)(t.p,{children:["You can view the status of your deployment in the ",(0,n.jsx)(t.a,{href:"https://portal.defang.dev/",children:"Defang Portal"}),", or by downloading the ",(0,n.jsx)(t.a,{href:"/docs/getting-started",children:"Defang CLI"}),"."]}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsx)(t.p,{children:"If you decide to make a commit later to a repository created from 1-Click Deploy, then the project will automatically get deployed again to Defang Playground."})}),"\n",(0,n.jsx)(t.p,{children:"When it is completed, you can view your deployed app using the deployment link generated by Defang, which should appear similar to the format below:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"https://<username>-<service-name>--<port>.defang.dev\n"})}),"\n",(0,n.jsx)(t.h3,{id:"configuration-in-1-click-deploy",children:"Configuration in 1-Click Deploy"}),"\n",(0,n.jsxs)(t.p,{children:["If the sample you chose requires setting configuration, such as API keys, you can set sensitive config values as secrets in your GitHub repository and the GitHub Action can automatically handle those values for you. ",(0,n.jsx)(t.a,{href:"https://github.com/DefangLabs/defang-github-action?tab=readme-ov-file#managing-config-values",children:"Learn how to manage config values with the Defang Github Action"}),"."]})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},9201:(e,t,o)=>{o.d(t,{A:()=>n});const n=o.p+"assets/images/create-repository-15dd6d47d6cb85a489b6417a9caa95ba.png"},7961:(e,t,o)=>{o.d(t,{A:()=>n});const n=o.p+"assets/images/deploy-with-defang-button-cbc987039f20b0e30be9e997a1f2ab02.png"},7426:(e,t,o)=>{o.d(t,{A:()=>n});const n=o.p+"assets/images/one-click-deploy-button-86a50d4f2f4e3a6172a7c8bebeb38f89.png"},8453:(e,t,o)=>{o.d(t,{R:()=>a,x:()=>l});var n=o(6540);const i={},s=n.createContext(i);function a(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);