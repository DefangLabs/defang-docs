"use strict";(self.webpackChunkdefang_docs=self.webpackChunkdefang_docs||[]).push([[9833],{7969:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>g});var o=t(4848),n=t(8453),s=t(7512);const r={slug:"2024-09-30-product-update",title:"September 2024 Defang Compose Update",tags:["Cloud","NoDevOps","BYOC","Postgres","DigitalOcean","CLI","AI","Debugging","Defang Compose Update"],author:"Defang Team"},i=void 0,l={permalink:"/blog/2024-09-30-product-update",source:"@site/blog/2024-09-30-september-product-updates.md",title:"September 2024 Defang Compose Update",description:"Defang Compose Update",date:"2024-09-30T00:00:00.000Z",formattedDate:"September 30, 2024",tags:[{label:"Cloud",permalink:"/blog/tags/cloud"},{label:"NoDevOps",permalink:"/blog/tags/no-dev-ops"},{label:"BYOC",permalink:"/blog/tags/byoc"},{label:"Postgres",permalink:"/blog/tags/postgres"},{label:"DigitalOcean",permalink:"/blog/tags/digital-ocean"},{label:"CLI",permalink:"/blog/tags/cli"},{label:"AI",permalink:"/blog/tags/ai"},{label:"Debugging",permalink:"/blog/tags/debugging"},{label:"Defang Compose Update",permalink:"/blog/tags/defang-compose-update"}],readingTime:2.985,hasTruncateMarker:!1,authors:[{name:"Defang Team"}],frontMatter:{slug:"2024-09-30-product-update",title:"September 2024 Defang Compose Update",tags:["Cloud","NoDevOps","BYOC","Postgres","DigitalOcean","CLI","AI","Debugging","Defang Compose Update"],author:"Defang Team"},unlisted:!1,prevItem:{title:"Hard Lessons From Hardware",permalink:"/blog/hard-lessons-from-hardware"},nextItem:{title:"August 2024 Defang Compose Update",permalink:"/blog/2024-08-31-product-update"}},d={authorsImageUrls:[void 0]},g=[{value:"September Events",id:"september-events",level:2},{value:"Google for Startups Accelerator Canada",id:"google-for-startups-accelerator-canada",level:2},{value:"Defang Coffee Chat",id:"defang-coffee-chat",level:2}];function c(e){const a={a:"a",code:"code",h2:"h2",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.p,{children:(0,o.jsx)(a.img,{alt:"Defang Compose Update",src:t(2056).A+"",width:"1200",height:"630"})}),"\n",(0,o.jsx)(a.p,{children:"Hi everyone - you can feel the weather getting cooler, but things are heating up at Defang! Sep was another amazing month, with new features, new users, and new partners. Here is a quick summary:"}),"\n",(0,o.jsxs)(a.ol,{children:["\n",(0,o.jsxs)(a.li,{children:[(0,o.jsx)(a.strong,{children:"Bring-Your-Own-Cloud (BYOC) DigitalOcean in Preview!"})," From the very beginning, it has been part of Defang\u2019s vision to not only provide a simpler way to develop, deploy, and debug your cloud applications, but to be able to do so in a portable way. As developers, we all value the flexibility of knowing our application can be deployed to our chosen cloud, even if that choice changes over time. Today, we take a big step in providing that choice with the Preview of BYOC with DigitalOcean! This literally means the same application can be deployed to the Defang Playground, AWS, or DigitalOcean with no changes! Take a look at the ",(0,o.jsx)(a.a,{href:"https://docs.defang.io/docs/providers/digitalocean",children:"docs"}),", give it a try and share your feedback on our ",(0,o.jsx)(a.a,{href:"http://s.defang.io/discord",children:"Discord"}),"."]}),"\n",(0,o.jsxs)(a.li,{children:[(0,o.jsx)(a.strong,{children:"Managed Postgres"}),": Postgres is one of the fundamental building blocks of many applications, and users wanted us to provide a way to add that to their application in a declarative way. So that\u2019s exactly what we have done. You can now specify the Postgres image in your ",(0,o.jsx)(a.code,{children:"compose.yaml"}),"\xa0file and indicate that you want it managed by your cloud provider using\xa0",(0,o.jsx)(a.code,{children:"x-defang-postgres: true"}),"\xa0in your service definition. Defang will automatically provision the appropriate managed Postgres in the target cloud (e.g. RDS on AWS) and do all the heavy lifting to configure and hook things up correctly. Check out the docs ",(0,o.jsx)(a.a,{href:"https://docs.defang.io/docs/concepts/managed-storage/managed-postgres",children:"here"}),", give it a try and let us know what you think."]}),"\n",(0,o.jsxs)(a.li,{children:["We continue to improve the ",(0,o.jsx)(a.strong,{children:"quality and performance"})," of existing features:","\n",(0,o.jsxs)(a.ol,{children:["\n",(0,o.jsx)(a.li,{children:"We\u2019ve made several improvements to our AI-assistant to increase the robustness of our Develop and Debug modules. For example, we updated generation to comply with latest Compose spec. We also addressed the top issues we saw people facing when deploying, such as out-of-memory errors when building containers."}),"\n",(0,o.jsx)(a.li,{children:"To cope with our growing user-base, we have made several scaling improvements to our Playground and Portal environments."}),"\n",(0,o.jsx)(a.li,{children:"We also made several updates to our documentation and samples to keep up with the changes and enhancements in the Defang product."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(a.hr,{}),"\n",(0,o.jsx)(a.p,{children:(0,o.jsx)(a.img,{alt:"Workshop",src:t(1830).A+"",width:"1200",height:"800"})}),"\n",(0,o.jsx)(a.h2,{id:"september-events",children:"September Events"}),"\n",(0,o.jsxs)(a.p,{children:["In Sep, the Defang team participated in a number of events including HacktheNorth, LangaraHacks, MLH Global Hack Week and other MLH hackathons. It\u2019s great to see Defang being put to use by these hackers to build their amazing projects. And we get useful insights from these events that help us improve the product. We will continue to do more of these events in the future - watch our ",(0,o.jsx)(a.a,{href:"https://www.linkedin.com/company/defanglabs",children:"LinkedIn"})," page for announcements."]}),"\n",(0,o.jsx)(a.hr,{}),"\n",(0,o.jsx)(a.h2,{id:"google-for-startups-accelerator-canada",children:"Google for Startups Accelerator Canada"}),"\n",(0,o.jsxs)(a.p,{children:["Also in Sep, Defang was included in the ",(0,o.jsx)(a.a,{href:"https://www.linkedin.com/posts/irankarimian_ai-startups-dominate-latest-google-for-startups-activity-7241805161411551232-thky?utm_source=share&utm_medium=member_desktop",children:"Google for Startups Accelerator Canada."})," This is a great recognition of the value Defang is providing to cloud developers. Through our collaboration with Google, we hope to add GCP as another target cloud for Defang in the coming months - stay tuned!"]}),"\n",(0,o.jsx)(a.hr,{}),"\n",(0,o.jsx)("img",{src:"/img/september-update/coffee-chat.png",alt:"TownHall",style:{width:300}}),"\n",(0,o.jsx)(a.h2,{id:"defang-coffee-chat",children:"Defang Coffee Chat"}),"\n",(0,o.jsx)(a.p,{children:"Mark your calendars! If you\u2019re eager to learn more about what\u2019s coming next, join us for our Defang Coffee Chat on Oct 23rd. We\u2019ll be sharing our future roadmap, answering your questions, and gathering your feedback."}),"\n",(0,o.jsx)(s.A,{href:"https://lu.ma/hlnq84xq",variant:"contained",size:"large",target:"_blank",children:(0,o.jsx)(a.p,{children:"Register here!"})}),"\n",(0,o.jsx)(a.hr,{}),"\n",(0,o.jsx)(a.p,{children:"As always, we appreciate your feedback and are committed to making Defang the easiest way to develop, deploy, and debug your cloud applications. Go build something awesome! \ud83d\ude80"})]})}function p(e={}){const{wrapper:a}={...(0,n.R)(),...e.components};return a?(0,o.jsx)(a,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},2056:(e,a,t)=>{t.d(a,{A:()=>o});const o=t.p+"assets/images/defang-compose-update-2aab6b0201bf44543b055debddc43e40.webp"},1830:(e,a,t)=>{t.d(a,{A:()=>o});const o=t.p+"assets/images/workshop-578470772b73b8a68c78fb83760c52f0.jpg"}}]);