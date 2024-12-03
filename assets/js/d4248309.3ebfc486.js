"use strict";(self.webpackChunkdefang_docs=self.webpackChunkdefang_docs||[]).push([[5779],{6057:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var n=o(4848),r=o(8453);const i={title:"Deploy to Playground",description:"Deploy to the free Defang Playground.",sidebar_position:15},s="Deploy to Playground",d={id:"tutorials/deploy-to-playground",title:"Deploy to Playground",description:"Deploy to the free Defang Playground.",source:"@site/docs/tutorials/deploy-to-playground.mdx",sourceDirName:"tutorials",slug:"/tutorials/deploy-to-playground",permalink:"/docs/tutorials/deploy-to-playground",draft:!1,unlisted:!1,editUrl:"https://github.com/DefangLabs/defang-docs/tree/main/docs/tutorials/deploy-to-playground.mdx",tags:[],version:"current",sidebarPosition:15,frontMatter:{title:"Deploy to Playground",description:"Deploy to the free Defang Playground.",sidebar_position:15},sidebar:"docsSidebar",previous:{title:"Deploy to GCP",permalink:"/docs/tutorials/deploy-to-gcp"},next:{title:"Generate Project Outlines With AI",permalink:"/docs/tutorials/generate-new-code-using-ai"}},a={},l=[{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Step 1 - Navigate to your project directory",id:"step-1---navigate-to-your-project-directory",level:2},{value:"Step 2 - Deploy",id:"step-2---deploy",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"deploy-to-playground",children:"Deploy to Playground"}),"\n",(0,n.jsx)(t.p,{children:"This tutorial will show you how to deploy your project to the free Defang Playground."}),"\n",(0,n.jsx)(t.h2,{id:"pre-requisites",children:"Pre-requisites"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://docs.docker.com/get-started/docker-concepts/building-images/writing-a-dockerfile/",children:"A Dockerfile in your project"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsxs)(t.a,{href:"https://docs.docker.com/compose/gettingstarted/",children:["A ",(0,n.jsx)(t.code,{children:"compose.yaml"})," file in your project"]})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/docs/concepts/authentication",children:"A Defang Account"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/docs/getting-started#install-the-defang-cli",children:"The Defang CLI"})}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"step-1---navigate-to-your-project-directory",children:"Step 1 - Navigate to your project directory"}),"\n",(0,n.jsx)(t.p,{children:"Head to the folder where your project is located."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"$ cd path/to/your/project\n"})}),"\n",(0,n.jsx)(t.h2,{id:"step-2---deploy",children:"Step 2 - Deploy"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"$ defang up\n"})}),"\n",(0,n.jsx)(t.p,{children:"If you have not used Defang before, you'll be prompted to log in."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:" ! Please log in to continue.\nPlease visit http://127.0.0.1:49154 and log in. (Right click the URL or press ENTER to open browser)\n"})}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["To learn more about how authentication works in defang, check out the ",(0,n.jsx)(t.a,{href:"/docs/concepts/authentication",children:"authenticating page"}),"."]})}),"\n",(0,n.jsx)(t.p,{children:"When you do this, you should see something similar to the output below:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:" * Uploading build context for app\n * Deploying service app\n * Monitor your services' status in the defang portal\n   - https://portal.defang.dev/service/app\n * Tailing logs for deployment ID o59k89vk3qc8 ; press Ctrl+C to detach:\n * Press V to toggle verbose mode\n2024-09-19T10:50:53.572443-07:00 cd Update started for stack jordanstephens-prod1\n2024-09-19T10:51:05.536299-07:00 cd Update succeeded in 11.99769745s ; provisioning...\n2024-09-19T10:51:39.419693-07:00 app Server running at http://0.0.0.0:3000/\n * Service app is in state DEPLOYMENT_COMPLETED and will be available at:\n   - https://jordanstephens-app--3000.prod1.defang.dev\n * Done.\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Now we can go to ",(0,n.jsx)(t.a,{href:"https://portal.defang.dev/service/app",children:"https://portal.defang.dev/service/app"})," to see our service listed in the Defang portal."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"screenshot of the defang portal",src:o(8654).A+"",width:"1092",height:"919"})})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},8654:(e,t,o)=>{o.d(t,{A:()=>n});const n=o.p+"assets/images/getting-started-portal-c5794c5df1c86fb59cbdd1a3411c9001.png"},8453:(e,t,o)=>{o.d(t,{R:()=>s,x:()=>d});var n=o(6540);const r={},i=n.createContext(r);function s(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);