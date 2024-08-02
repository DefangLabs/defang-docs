"use strict";(self.webpackChunkdefang_docs=self.webpackChunkdefang_docs||[]).push([[2160],{4656:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var t=n(7624),o=n(2172);const s={slug:"june-2024-product-update",title:"May 2024 Product Update",tags:["Cloud","NoDevOps","BYOC","Playground","Load Testing","ACME","Managed Redis","Kaniko","Postgres","ECS"],author:"Defang Team"},i=void 0,r={permalink:"/blog/june-2024-product-update",source:"@site/blog/2024-06-01-june-product-updates.md",title:"May 2024 Product Update",description:"Hey folks! We\u2019re back with another exciting update about Defang. Our team has been working hard to bring you new features and improvements so you can get deploying faster. Here\u2019s a rundown of what we\u2019ve been up to this month:",date:"2024-06-01T00:00:00.000Z",formattedDate:"June 1, 2024",tags:[{label:"Cloud",permalink:"/blog/tags/cloud"},{label:"NoDevOps",permalink:"/blog/tags/no-dev-ops"},{label:"BYOC",permalink:"/blog/tags/byoc"},{label:"Playground",permalink:"/blog/tags/playground"},{label:"Load Testing",permalink:"/blog/tags/load-testing"},{label:"ACME",permalink:"/blog/tags/acme"},{label:"Managed Redis",permalink:"/blog/tags/managed-redis"},{label:"Kaniko",permalink:"/blog/tags/kaniko"},{label:"Postgres",permalink:"/blog/tags/postgres"},{label:"ECS",permalink:"/blog/tags/ecs"}],readingTime:3.175,hasTruncateMarker:!1,authors:[{name:"Defang Team"}],frontMatter:{slug:"june-2024-product-update",title:"May 2024 Product Update",tags:["Cloud","NoDevOps","BYOC","Playground","Load Testing","ACME","Managed Redis","Kaniko","Postgres","ECS"],author:"Defang Team"},unlisted:!1,prevItem:{title:"June 2024 Product Update",permalink:"/blog/july-2024-product-update"},nextItem:{title:"April 2024 Product Update",permalink:"/blog/may-2024-product-update"}},l={authorsImageUrls:[void 0]},d=[{value:"Samples, samples, samples!",id:"samples-samples-samples",level:2},{value:"Start from a sample in seconds",id:"start-from-a-sample-in-seconds",level:3},{value:"Sample templates",id:"sample-templates",level:3},{value:"ACME for BYOD",id:"acme-for-byod",level:2},{value:"Warnings for Stateful Services",id:"warnings-for-stateful-services",level:2},{value:"Managed Redis!",id:"managed-redis",level:2},{value:"Load Testing",id:"load-testing",level:2},{value:"Upgraded Kaniko",id:"upgraded-kaniko",level:2},{value:"Upcoming Features",id:"upcoming-features",level:2},{value:"Managed Postgres",id:"managed-postgres",level:3},{value:"BYOC ECS Lifecycle Events",id:"byoc-ecs-lifecycle-events",level:3}];function u(e){const a={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",p:"p",...(0,o.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.p,{children:"Hey folks! We\u2019re back with another exciting update about Defang. Our team has been working hard to bring you new features and improvements so you can get deploying faster. Here\u2019s a rundown of what we\u2019ve been up to this month:"}),"\n",(0,t.jsx)(a.h2,{id:"samples-samples-samples",children:"Samples, samples, samples!"}),"\n",(0,t.jsxs)(a.p,{children:["We've been cranking out samples like there's no tomorrow. We've published samples to get you up and running with FastAPI, Elysia, Angular, React, Svelte, Sveltekit, Sails.js, Phoenix, and more. You can filter through them on the ",(0,t.jsx)(a.a,{href:"https://defang.io/#deploy",children:"Defang homepage"}),". Check out our video about all the ",(0,t.jsx)(a.a,{href:"https://www.youtube.com/watch?v=8wIU_af-sX8",children:"new samples and functionality"}),"."]}),"\n",(0,t.jsx)(a.h3,{id:"start-from-a-sample-in-seconds",children:"Start from a sample in seconds"}),"\n",(0,t.jsxs)(a.p,{children:["With all this work we've been putting into samples, we realized it would be pretty awesome if you could clone a sample faster. So we updated the CLI. Now, if you run ",(0,t.jsx)(a.code,{children:"defang generate"})," you'll be able to filter through the samples and choose one. You can also filter through the samples on the ",(0,t.jsx)(a.a,{href:"https://defang.io/#deploy",children:"Defang homepage"})," and clone any of them with a simple command like ",(0,t.jsx)(a.code,{children:"defang new sveltekit"}),"."]}),"\n",(0,t.jsx)(a.h3,{id:"sample-templates",children:"Sample templates"}),"\n",(0,t.jsxs)(a.p,{children:["If you look through our ",(0,t.jsx)(a.a,{href:"https://github.com/DefangLabs",children:"GitHub organization"}),", you'll start seeing loads of repos with the structure ",(0,t.jsx)(a.code,{children:"sample-<sample_name>-template"}),". If you open them, you can create a new repo by clicking this button:"]}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{src:"https://github.com/DefangLabs/defang-docs/assets/910895/97d33d90-43b9-499a-b139-e114b701adcb",alt:"screenshot of github UI pointing towards template button"})}),"\n",(0,t.jsx)(a.p,{children:"Not only will that create a new repo based on the sample in your account, but if you've used Defang before (and accepted the Terms and Conditions) it will automatically deploy it to the playground so you can start playing with Defang immediately."}),"\n",(0,t.jsx)(a.h2,{id:"acme-for-byod",children:"ACME for BYOD"}),"\n",(0,t.jsx)(a.p,{children:"We\u2019re excited to announce that ACME support is now available for Bring Your Own Domain (BYOD) in both Bring Your Own Cloud (BYOC) and Playground. This means you can easily add Let's Encrypt certificates to your custom domains, regardless of where your DNS is hosted. Defang will handle the certificate generation and automatic renewal for you. Nice and easy."}),"\n",(0,t.jsx)(a.h2,{id:"warnings-for-stateful-services",children:"Warnings for Stateful Services"}),"\n",(0,t.jsxs)(a.p,{children:["To help you avoid potential pitfalls, we\u2019ve added warnings against deploying stateful services with Defang, since you shouldn't actually be deploying anything stateful with Defang. For example, we'll warn you if you try to deploy services with images like ",(0,t.jsx)(a.code,{children:"postgres:<version>"}),", ",(0,t.jsx)(a.code,{children:"redis:<version>"}),", ",(0,t.jsx)(a.code,{children:"minio:<version>"}),", etc."]}),"\n",(0,t.jsx)(a.p,{children:"In the near future we will be offering ways to run some stateful services using cloud providers' managed offerings. For example Redis, Postgres, and S3. Speaking of which..."}),"\n",(0,t.jsx)(a.h2,{id:"managed-redis",children:"Managed Redis!"}),"\n",(0,t.jsxs)(a.p,{children:["Redis is such a versatile tool that can help with so many different use cases. So we've introduced Managed Redis! You can now specify the Redis image in your ",(0,t.jsx)(a.code,{children:"compose.yaml"})," file and indicate that you want it managed by your cloud provider using ",(0,t.jsx)(a.code,{children:"x-defang-redis: true"})," in your service definition."]}),"\n",(0,t.jsx)(a.h2,{id:"load-testing",children:"Load Testing"}),"\n",(0,t.jsx)(a.p,{children:"To make sure Defang is ready for loads of new users, we've been doing a lot of load testing. This is going to help us identify and address potential bottlenecks so we can make sure that Defang scales efficiently and handles all you new users smoothly."}),"\n",(0,t.jsx)(a.h2,{id:"upgraded-kaniko",children:"Upgraded Kaniko"}),"\n",(0,t.jsx)(a.p,{children:"We\u2019ve upgraded our Kaniko integration to version 1.23.0 to improve your container build experience. The new version comes with several bug fixes that enhance stability and performance. This means faster and more reliable builds for your applications."}),"\n",(0,t.jsx)(a.h2,{id:"upcoming-features",children:"Upcoming Features"}),"\n",(0,t.jsx)(a.p,{children:"We\u2019re not stopping here! Here\u2019s a sneak peek at what\u2019s coming soon:"}),"\n",(0,t.jsx)(a.h3,{id:"managed-postgres",children:"Managed Postgres"}),"\n",(0,t.jsx)(a.p,{children:"Building on the momentum of Managed Redis, we\u2019re introducing Managed Postgres. Soon you\u2019ll be able to easily integrate a managed Postgres database into your deployment!"}),"\n",(0,t.jsx)(a.h3,{id:"byoc-ecs-lifecycle-events",children:"BYOC ECS Lifecycle Events"}),"\n",(0,t.jsx)(a.p,{children:"Defang runs your services with ECS, and we're working on making it clearer what's happening under the hood."}),"\n",(0,t.jsx)(a.hr,{}),"\n",(0,t.jsx)(a.p,{children:"Stay tuned for more updates and improvements. As always, we appreciate your feedback and are committed to making Defang the easiest way to deploy your applications to the cloud. Go deploy something awesome! \ud83d\ude80"})]})}function c(e={}){const{wrapper:a}={...(0,o.M)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},2172:(e,a,n)=>{n.d(a,{I:()=>r,M:()=>i});var t=n(1504);const o={},s=t.createContext(o);function i(e){const a=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(s.Provider,{value:a},e.children)}}}]);