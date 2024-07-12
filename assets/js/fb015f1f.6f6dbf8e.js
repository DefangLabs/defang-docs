"use strict";(self.webpackChunkdefang_docs=self.webpackChunkdefang_docs||[]).push([[3208],{2773:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=n(7624),s=n(2172);const o={slug:"july-2024-product-update",title:"July 2024 Product Update",tags:["Cloud","NoDevOps","BYOC","Windows","Managed Redis","CLI"],author:"Defang Team"},i=void 0,l={permalink:"/blog/july-2024-product-update",source:"@site/blog/2024-07-01-july-product-updates.md",title:"July 2024 Product Update",description:"Hey folks! We've got another batch of updates to share with you about what the Defang team has been working on over the past month. We're committed to improving your deployment experience, so let's take a look at what's new.",date:"2024-07-01T00:00:00.000Z",formattedDate:"July 1, 2024",tags:[{label:"Cloud",permalink:"/blog/tags/cloud"},{label:"NoDevOps",permalink:"/blog/tags/no-dev-ops"},{label:"BYOC",permalink:"/blog/tags/byoc"},{label:"Windows",permalink:"/blog/tags/windows"},{label:"Managed Redis",permalink:"/blog/tags/managed-redis"},{label:"CLI",permalink:"/blog/tags/cli"}],readingTime:2.46,hasTruncateMarker:!1,authors:[{name:"Defang Team"}],frontMatter:{slug:"july-2024-product-update",title:"July 2024 Product Update",tags:["Cloud","NoDevOps","BYOC","Windows","Managed Redis","CLI"],author:"Defang Team"},unlisted:!1,nextItem:{title:"June 2024 Product Update",permalink:"/blog/june-2024-product-update"}},r={authorsImageUrls:[void 0]},d=[{value:"Windows Experience Improvements",id:"windows-experience-improvements",level:2},{value:"One-click Deploy",id:"one-click-deploy",level:2},{value:"Managed Redis Updates",id:"managed-redis-updates",level:2},{value:"Updated Samples",id:"updated-samples",level:2},{value:"CLI Updates",id:"cli-updates",level:2},{value:"Other Updates",id:"other-updates",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",hr:"hr",img:"img",li:"li",p:"p",ul:"ul",...(0,s.M)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"Hey folks! We've got another batch of updates to share with you about what the Defang team has been working on over the past month. We're committed to improving your deployment experience, so let's take a look at what's new."}),"\n",(0,a.jsx)(t.h2,{id:"windows-experience-improvements",children:"Windows Experience Improvements"}),"\n",(0,a.jsx)(t.p,{children:"For our Windows users out there, we've made some changes to make your Defang experience even smoother:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["You can now install Defang using ",(0,a.jsx)(t.code,{children:"winget"}),", the Windows Package Manager, for a streamlined setup"]}),"\n",(0,a.jsx)(t.li,{children:"We've introduced a signed binary for added security and peace of mind"}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"Deploying your apps from Windows just got a little bit nicer."}),"\n",(0,a.jsx)(t.h2,{id:"one-click-deploy",children:"One-click Deploy"}),"\n",(0,a.jsx)(t.p,{children:"We've added a new feature that will make it even easier to get started with Defang. We've created a flow where each sample provides a button that allows you to immediately deploy a template with a GitHub action which will automatically deploy the sample to the Defang Playground. That means you can easily make changes by committing them to your brand new repo, and everything automatically updates in the Playground. It's a great way to get started with Defang and start experimenting with your own projects."}),"\n",(0,a.jsxs)(t.p,{children:["Try it now ",(0,a.jsx)(t.a,{href:"https://portal.defang.dev/sample",children:"from our portal"}),"!"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"screenshot of 1-click deploy UI in portal",src:n(7896).c+"",width:"1200",height:"744"})}),"\n",(0,a.jsx)(t.h2,{id:"managed-redis-updates",children:"Managed Redis Updates"}),"\n",(0,a.jsxs)(t.p,{children:["We first introduced this last month, but we've since rolled it out to everyone. We also added a sample that showcases the power of managed Redis: ",(0,a.jsx)(t.a,{href:"https://github.com/DefangSamples/sample-bullmq-bullboard-redis-template",children:"BullMQ with Redis"}),". It demonstrates how you can use BullMQ and BullBoard with a managed Redis instance to create a powerful job queue system so you can easily build robust, scalable applications in AWS with Defang."]}),"\n",(0,a.jsx)(t.h2,{id:"updated-samples",children:"Updated Samples"}),"\n",(0,a.jsx)(t.p,{children:"We've updated our sample projects to showcase how to use them with Defang, including:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://github.com/DefangSamples/sample-csharp-dotnet-template",children:"ASP.NET Core"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://github.com/DefangSamples/sample-feathersjs-template",children:"Feathers.js"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://github.com/DefangSamples/sample-langchain-template",children:"Flask & LangChain"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://github.com/DefangSamples/sample-bullmq-bullboard-redis-template",children:"BullMQ with Redis"})}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"Check them out if you're looking for some inspiration or a starting point for your own projects."}),"\n",(0,a.jsx)(t.h2,{id:"cli-updates",children:"CLI Updates"}),"\n",(0,a.jsx)(t.p,{children:"We're always looking for ways to enhance the CLI experience. Here's what's new:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"npx defang"})," automatically checks to always have the latest version of the CLI"]}),"\n",(0,a.jsxs)(t.li,{children:["The output during ",(0,a.jsx)(t.code,{children:"defang compose up"})," has been streamlined to focus on the most important information"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"defang tail"})," now supports listening to specific services, making it easier to troubleshoot issues"]}),"\n",(0,a.jsx)(t.li,{children:"We've improved hints and error messages to better guide you when something goes wrong"}),"\n",(0,a.jsx)(t.li,{children:"The CLI now has improved color support for light theme terminals, making it easier on the eyes"}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"It's the small refinements that can make a big difference in your workflow."}),"\n",(0,a.jsx)(t.h2,{id:"other-updates",children:"Other Updates"}),"\n",(0,a.jsx)(t.p,{children:"Here are a few more things that didn't quite fit with the rest:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Visibility into ECS deployment events in BYOC tail logs"}),"\n",(0,a.jsx)(t.li,{children:"Improvements to ACME certificate generation"}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"Keep an eye out for these updates in the near future."}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.p,{children:"As always, we'd love your help shaping the future of Defang, so let us know what you'd like to see next. Happy deploying! \ud83d\ude80"})]})}function c(e={}){const{wrapper:t}={...(0,s.M)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},7896:(e,t,n)=>{n.d(t,{c:()=>a});const a=n.p+"assets/images/1-click-deploy-59a918debb5a9dcbcecd2c7b4dd3c26d.png"},2172:(e,t,n)=>{n.d(t,{I:()=>l,M:()=>i});var a=n(1504);const s={},o=a.createContext(s);function i(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);