"use strict";(self.webpackChunkdefang_docs=self.webpackChunkdefang_docs||[]).push([[8802],{2201:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>s,metadata:()=>d,toc:()=>r});var i=n(4848),o=n(8453);const s={title:"Using Codespaces and Gitpod",sidebar_position:700},a="Defang With Codespaces and GitPod",d={id:"tutorials/using-codespaces-gitpod",title:"Using Codespaces and Gitpod",description:"This tutorial will guide you to set up Defang in both Codespaces and Gitpod.",source:"@site/docs/tutorials/using-codespaces-gitpod.md",sourceDirName:"tutorials",slug:"/tutorials/using-codespaces-gitpod",permalink:"/docs/tutorials/using-codespaces-gitpod",draft:!1,unlisted:!1,editUrl:"https://github.com/DefangLabs/defang-docs/tree/main/docs/tutorials/using-codespaces-gitpod.md",tags:[],version:"current",sidebarPosition:700,frontMatter:{title:"Using Codespaces and Gitpod",sidebar_position:700},sidebar:"docsSidebar",previous:{title:"How to use your own domain",permalink:"/docs/tutorials/use-your-own-domain-name"},next:{title:"Providers",permalink:"/docs/category/providers"}},c={},r=[{value:"Getting Started with Github Codespaces and Defang",id:"getting-started-with-github-codespaces-and-defang",level:2},{value:"Step 1 - Clone the Defang Codespace Project",id:"step-1---clone-the-defang-codespace-project",level:3},{value:"Step 2 - Create a Codespace",id:"step-2---create-a-codespace",level:3},{value:"Step 3 - Open in VS Code Desktop",id:"step-3---open-in-vs-code-desktop",level:3},{value:"Step 4 - Run Defang Login",id:"step-4---run-defang-login",level:3},{value:"Step 5 - Verify Running Services",id:"step-5---verify-running-services",level:3},{value:"Getting Started with GitPod Workspace with Defang",id:"getting-started-with-gitpod-workspace-with-defang",level:2},{value:"Step 1 - Clone the Defang GitPod Workspace Project",id:"step-1---clone-the-defang-gitpod-workspace-project",level:3},{value:"Step 2 - Initialize GitPod Workspace",id:"step-2---initialize-gitpod-workspace",level:3},{value:"Step 3 - Lauch VS Code from GitPod",id:"step-3---lauch-vs-code-from-gitpod",level:3},{value:"Step 4 - Run Defang Login",id:"step-4---run-defang-login-1",level:3},{value:"Step 5 - Verify Running Services",id:"step-5---verify-running-services-1",level:3}];function p(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"defang-with-codespaces-and-gitpod",children:"Defang With Codespaces and GitPod"}),"\n",(0,i.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/71pmCfLdxTg?si=Q9YIESYEUNTBFBIy",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:!0}),"\n",(0,i.jsx)(t.p,{children:"This tutorial will guide you to set up Defang in both Codespaces and Gitpod."}),"\n",(0,i.jsx)(t.h2,{id:"getting-started-with-github-codespaces-and-defang",children:"Getting Started with Github Codespaces and Defang"}),"\n",(0,i.jsx)(t.h3,{id:"step-1---clone-the-defang-codespace-project",children:"Step 1 - Clone the Defang Codespace Project"}),"\n",(0,i.jsxs)(t.p,{children:["Start by cloning the ",(0,i.jsx)(t.a,{href:"https://github.com/DefangLabs/github-codespace",children:"Defang Github-Codespace"})," repo and pushing it to your own account. This repository is configured with a Codespace that has Defang pre-installed."]}),"\n",(0,i.jsx)(t.h3,{id:"step-2---create-a-codespace",children:"Step 2 - Create a Codespace"}),"\n",(0,i.jsx)(t.p,{children:"Once you've pushed to your own GitHub repo, you'll be able to create a Codespace by clicking the Code button, selecting the Codespaces tab, and clicking the + icon. This will set up a development environment with Defang already installed, which might take a few minutes."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Create Codespace button screenshot",src:n(3788).A+"",width:"1874",height:"554"})}),"\n",(0,i.jsx)(t.h3,{id:"step-3---open-in-vs-code-desktop",children:"Step 3 - Open in VS Code Desktop"}),"\n",(0,i.jsxs)(t.p,{children:["For the ",(0,i.jsx)(t.code,{children:"defang login"})," command to work correctly, you must open the Codespace in VS Code desktop. This is required because the login process is designed to run on localhost."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Open in vs code desktop button screenshot",src:n(214).A+"",width:"1452",height:"746"})}),"\n",(0,i.jsx)(t.h3,{id:"step-4---run-defang-login",children:"Step 4 - Run Defang Login"}),"\n",(0,i.jsx)(t.p,{children:"Within a VS Code desktop terminal, execute the following command."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"defang login\n"})}),"\n",(0,i.jsx)(t.p,{children:'Although it may initially refuse to connect on your localhost, going back will show a "successfully logged in" message, confirming that you\'re logged into Defang.'}),"\n",(0,i.jsx)(t.h3,{id:"step-5---verify-running-services",children:"Step 5 - Verify Running Services"}),"\n",(0,i.jsxs)(t.p,{children:["Now that you're logged in, you can use Defang commands. You can test that everything is working properly by running ",(0,i.jsx)(t.code,{children:"defang ls"})," to list your running services."]}),"\n",(0,i.jsx)(t.h2,{id:"getting-started-with-gitpod-workspace-with-defang",children:"Getting Started with GitPod Workspace with Defang"}),"\n",(0,i.jsx)(t.h3,{id:"step-1---clone-the-defang-gitpod-workspace-project",children:"Step 1 - Clone the Defang GitPod Workspace Project"}),"\n",(0,i.jsxs)(t.p,{children:["Start by cloning the ",(0,i.jsx)(t.a,{href:"https://github.com/DefangLabs/gitpod-workspace",children:"Defang Gitpod-Workspace"})," repo and pushing it to your own GitHub, GitLab, or BitBucket account. This repository includes a Workspace configuration that pre-installs Defang."]}),"\n",(0,i.jsx)(t.h3,{id:"step-2---initialize-gitpod-workspace",children:"Step 2 - Initialize GitPod Workspace"}),"\n",(0,i.jsxs)(t.p,{children:["Navigate ",(0,i.jsx)(t.code,{children:"https://gitpod.io/#<your-repo-url>"})," to create your new workspace.\nIn the repository, we have a yaml file indicating that we are using a pre-built dockerfile which installs Defang CLI for you."]}),"\n",(0,i.jsx)(t.h3,{id:"step-3---lauch-vs-code-from-gitpod",children:"Step 3 - Lauch VS Code from GitPod"}),"\n",(0,i.jsx)(t.p,{children:"Open VS Code from GitPod, you will likely need to have the GitPod VS Code extension installed."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Open in vs code desktop button screenshot",src:n(8582).A+"",width:"1556",height:"990"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Screenshot of GitPod extension",src:n(5667).A+"",width:"1038",height:"440"})}),"\n",(0,i.jsx)(t.h3,{id:"step-4---run-defang-login-1",children:"Step 4 - Run Defang Login"}),"\n",(0,i.jsx)(t.p,{children:"Within a VS Code desktop terminal, execute the following command."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"defang login\n"})}),"\n",(0,i.jsx)(t.h3,{id:"step-5---verify-running-services-1",children:"Step 5 - Verify Running Services"}),"\n",(0,i.jsxs)(t.p,{children:["Now that you're logged in, you can use Defang commands. You can test that everything is working properly by running ",(0,i.jsx)(t.code,{children:"defang ls"})," to list your running services."]})]})}function l(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},214:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/desktop-caf2e82ee585ace578eef6321fad5e51.png"},8582:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/gitpod-desktop-2c6da7cf3c9064a4a251991a35a9781c.png"},5667:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/gitpod-ext-475fe93caca1bb21bfe4b00c12f2fc16.png"},3788:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/new-codespace-7ab9c25d2ea9920a60984170105f159d.png"},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>d});var i=n(6540);const o={},s=i.createContext(o);function a(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);