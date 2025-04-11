"use strict";(self.webpackChunkdefang_docs=self.webpackChunkdefang_docs||[]).push([[8084],{28453:(e,n,o)=>{o.d(n,{R:()=>r,x:()=>s});var t=o(96540);const a={},i=t.createContext(a);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(i.Provider,{value:n},e.children)}},69926:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var t=o(74848),a=o(28453);const i={sidebar_position:100,title:"What is Defang?",description:"What is Defang?"},r="What is Defang?",s={id:"intro/what-is-defang",title:"What is Defang?",description:"What is Defang?",source:"@site/docs/intro/what-is-defang.mdx",sourceDirName:"intro",slug:"/intro/what-is-defang",permalink:"/docs/intro/what-is-defang",draft:!1,unlisted:!1,editUrl:"https://github.com/DefangLabs/defang-docs/tree/main/docs/intro/what-is-defang.mdx",tags:[],version:"current",sidebarPosition:100,frontMatter:{sidebar_position:100,title:"What is Defang?",description:"What is Defang?"},sidebar:"docsSidebar",previous:{title:"Overview",permalink:"/docs/intro/"},next:{title:"Features",permalink:"/docs/intro/features"}},l={},d=[{value:"Develop Anything, Deploy Anywhere.",id:"develop-anything-deploy-anywhere",level:2},{value:"Get Started Quickly",id:"get-started-quickly",level:3},{value:"Deploy with a Single Command",id:"deploy-with-a-single-command",level:3},{value:"Debug",id:"debug",level:3}];function c(e){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"what-is-defang",children:"What is Defang?"}),"\n",(0,t.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/afglsBYieuc?si=iKgUX4ejz7AixxqQ",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:!0,style:{marginBottom:"2rem"}}),"\n",(0,t.jsx)(n.h2,{id:"develop-anything-deploy-anywhere",children:"Develop Anything, Deploy Anywhere."}),"\n",(0,t.jsx)(n.p,{children:"Defang lets you take your app from Docker Compose to a secure and scalable deployment on your favorite cloud in minutes."}),"\n",(0,t.jsx)(n.p,{children:"Any App, Any Stack, Any Cloud."}),"\n",(0,t.jsx)(n.h3,{id:"get-started-quickly",children:"Get Started Quickly"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.a,{href:"/docs/getting-started#install-the-defang-cli.md",children:"Defang CLI (command line interface)"})," includes an AI agent that translates natural language prompts to ",(0,t.jsx)(n.a,{href:"/docs/tutorials/generate-new-code-using-ai",children:"generate an outline"})," for your project that you can then refine. Or choose from our ",(0,t.jsx)(n.a,{href:"https://defang.io/samples/",children:"library of over 50 samples"})," covering all major frameworks and technologies."]}),"\n",(0,t.jsx)(n.h3,{id:"deploy-with-a-single-command",children:"Deploy with a Single Command"}),"\n",(0,t.jsx)(n.p,{children:"Defang can automatically build and deploy your project with a single command."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["If you\u2019re new to Defang, you can try deploying to ",(0,t.jsx)(n.a,{href:"/docs/concepts/defang-playground",children:"Defang Playground"}),", a hosted environment to learn to use Defang with non-production workloads."]}),"\n",(0,t.jsxs)(n.li,{children:["Once you\u2019re ready, you can ",(0,t.jsx)(n.a,{href:"/docs/tutorials/deploy-to-your-cloud",children:"deploy"})," a project to your own cloud account - we call this ",(0,t.jsx)(n.a,{href:"/docs/concepts/defang-byoc",children:"Defang BYOC (Bring-your-Own-Cloud)"}),". We offer support for the following cloud providers:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/tutorials/deploy-to-aws",children:"Amazon Web Services (AWS)"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/tutorials/deploy-to-digitalocean",children:"DigitalOcean"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/tutorials/deploy-to-gcp",children:"Google Cloud Platform (GCP)"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["To support stateful workloads, we've got managed storage options such as ",(0,t.jsx)(n.a,{href:"/docs/concepts/managed-storage/managed-postgres",children:"Managed Postgres"})," and ",(0,t.jsx)(n.a,{href:"/docs/concepts/managed-storage/managed-redis",children:"Managed Redis"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["If you want, you can also ",(0,t.jsx)(n.a,{href:"/docs/tutorials/use-your-own-domain-name",children:"bring your own domain name"})," for your deployment."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Defang takes care of all the heavy lifting such as configuring networking, security, ",(0,t.jsx)(n.a,{href:"/docs/concepts/observability",children:"observability"})," and all the other details that usually slow down the average cloud developer.\nIt also allows you to easily ",(0,t.jsx)(n.a,{href:"/docs/concepts/deployments#deploying-updates",children:"publish updates"})," to your deployed application with zero downtime."]}),"\n",(0,t.jsx)(n.h3,{id:"debug",children:"Debug"}),"\n",(0,t.jsxs)(n.p,{children:["Once you've deployed, you can use our AI agent to help ",(0,t.jsx)(n.a,{href:"/docs/concepts/debug",children:"debug"})," your cloud applications, using your service logs and project files to help you identify and resolve issues."]})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}}}]);