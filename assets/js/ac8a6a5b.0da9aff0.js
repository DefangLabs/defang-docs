"use strict";(self.webpackChunkdefang_docs=self.webpackChunkdefang_docs||[]).push([[540],{28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var o=n(96540);const i={},r=o.createContext(i);function s(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:t},e.children)}},97804:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var o=n(74848),i=n(28453);const r={title:"Generate Project Outlines With AI",sidebar_position:50},s="Generate Project Outlines With AI",a={id:"tutorials/generate-new-code-using-ai",title:"Generate Project Outlines With AI",description:"This tutorial will show you how to use Defang's AI agent to generate a project outline, and then deploy that project to the cloud using Defang.",source:"@site/docs/tutorials/generate-new-code-using-ai.mdx",sourceDirName:"tutorials",slug:"/tutorials/generate-new-code-using-ai",permalink:"/docs/tutorials/generate-new-code-using-ai",draft:!1,unlisted:!1,editUrl:"https://github.com/DefangLabs/defang-docs/tree/main/docs/tutorials/generate-new-code-using-ai.mdx",tags:[],version:"current",sidebarPosition:50,frontMatter:{title:"Generate Project Outlines With AI",sidebar_position:50},sidebar:"docsSidebar",previous:{title:"Deploying your OpenAI application to AWS using Bedrock",permalink:"/docs/tutorials/deploying-openai-apps-aws-bedrock"},next:{title:"Deploy Existing Containers",permalink:"/docs/tutorials/deploy-container-using-the-cli"}},l={},c=[{value:"Step 1 - Use the <code>defang generate</code> command in the CLI",id:"step-1---use-the-defang-generate-command-in-the-cli",level:2},{value:"Step 2 - Review the Code",id:"step-2---review-the-code",level:2},{value:"Step 3 - Build and Deploy",id:"step-3---build-and-deploy",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"generate-project-outlines-with-ai",children:"Generate Project Outlines With AI"}),"\n",(0,o.jsxs)(t.p,{children:["This tutorial will show you how to use Defang's AI agent to ",(0,o.jsx)(t.a,{href:"/docs/concepts/generate",children:"generate"})," a project outline, and then deploy that project to the cloud using Defang."]}),"\n",(0,o.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/afglsBYieuc?si=GCvHhBu3H9ktMDHA",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:!0}),"\n",(0,o.jsxs)(t.h2,{id:"step-1---use-the-defang-generate-command-in-the-cli",children:["Step 1 - Use the ",(0,o.jsx)(t.code,{children:"defang generate"})," command in the CLI"]}),"\n",(0,o.jsxs)(t.p,{children:["Here you can describe what you would like the service to do and the ",(0,o.jsx)(t.a,{href:"/docs/getting-started#install-the-defang-cli",children:"CLI"})," will then ",(0,o.jsx)(t.a,{href:"/docs/concepts/generate",children:"generate"})," a project outline with all the files required to make it deployable with Defang."]}),"\n",(0,o.jsx)(t.p,{children:"In this tutorial, we'll use the following prompt to describe our service:"}),"\n",(0,o.jsxs)(t.p,{children:['"A basic service with 2 REST endpoints. The default endpoint will be for health check and should return a JSON object like this: ',(0,o.jsx)(t.code,{children:'{ "status": "OK" }'}),'. The /echo endpoint will echo back all request parameters in the response."']}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-text",children:'defang generate\n\n? Choose the language you\'d like to use:  [Use arrows to move, type to filter, ? for more help]\n> Nodejs\n  Golang\n  Python\n\n? Choose a sample service:\nGenerate with AI\n\n? Please describe the service you\'d like to build: [? for help] \nA basic service with 2 REST endpoints. The default endpoint will be for health check and should return a JSON object like this: { "status": "OK" }. The /echo endpoint will echo back all request parameters in the response.\n\n? What folder would you like to create the service in? [? for help] (service1)\nproject1\n'})}),"\n",(0,o.jsxs)(t.p,{children:["This will ",(0,o.jsx)(t.a,{href:"/docs/concepts/generate",children:"generate"})," the different files required to start your project based on your prompt and the language selected."]}),"\n",(0,o.jsx)(t.h2,{id:"step-2---review-the-code",children:"Step 2 - Review the Code"}),"\n",(0,o.jsx)(t.p,{children:"Change into the new project folder:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-shell",children:"cd project1\n"})}),"\n",(0,o.jsx)(t.p,{children:"You can open the files in a code editor to review or make changes as needed before deploying the service."}),"\n",(0,o.jsx)(t.h2,{id:"step-3---build-and-deploy",children:"Step 3 - Build and Deploy"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"defang compose up\n"})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}}}]);