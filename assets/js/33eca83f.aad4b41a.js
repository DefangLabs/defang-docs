"use strict";(self.webpackChunkdefang_docs=self.webpackChunkdefang_docs||[]).push([[4236],{112:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var n=t(7624),a=t(2172);const r={slug:"2024-07-31-product-update",title:"July 2024 Defang Compose Update",tags:["Cloud","NoDevOps","BYOC","CLI","AI","Debugging","Defang Compose Update"],author:"Defang Team"},s=void 0,l={permalink:"/blog/2024-07-31-product-update",source:"@site/blog/2024-07-31-july-product-updates-2.md",title:"July 2024 Defang Compose Update",description:"Defang Compose Update",date:"2024-07-31T00:00:00.000Z",formattedDate:"July 31, 2024",tags:[{label:"Cloud",permalink:"/blog/tags/cloud"},{label:"NoDevOps",permalink:"/blog/tags/no-dev-ops"},{label:"BYOC",permalink:"/blog/tags/byoc"},{label:"CLI",permalink:"/blog/tags/cli"},{label:"AI",permalink:"/blog/tags/ai"},{label:"Debugging",permalink:"/blog/tags/debugging"},{label:"Defang Compose Update",permalink:"/blog/tags/defang-compose-update"}],readingTime:2.825,hasTruncateMarker:!1,authors:[{name:"Defang Team"}],frontMatter:{slug:"2024-07-31-product-update",title:"July 2024 Defang Compose Update",tags:["Cloud","NoDevOps","BYOC","CLI","AI","Debugging","Defang Compose Update"],author:"Defang Team"},unlisted:!1,prevItem:{title:"August 2024 Defang Compose Update",permalink:"/blog/2024-08-31-product-update"},nextItem:{title:"June 2024 Defang Compose Update",permalink:"/blog/july-2024-product-update"}},i={authorsImageUrls:[void 0]},d=[{value:"Townhall",id:"townhall",level:2}];function u(e){const o={a:"a",code:"code",h2:"h2",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,a.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.p,{children:(0,n.jsx)(o.img,{alt:"Defang Compose Update",src:t(7448).c+"",width:"1200",height:"630"})}),"\n",(0,n.jsx)(o.p,{children:"Hey folks! We can\u2019t believe a month has gone by already, time flies when you\u2019re having fun! We continued to make progress on our vision of providing a radically simpler way to Develop, Deploy, and Debug cloud applications. In July, we spent time on a couple of key areas:"}),"\n",(0,n.jsxs)(o.ol,{children:["\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsxs)(o.p,{children:["As our user-base grows, we wanted to make sure we\u2019re able to scale our ",(0,n.jsx)(o.a,{href:"https://docs.defang.io/docs/concepts/defang-playground",children:"Playground"})," environment to be able to handle the load. This involved being able to shard the workload across multiple ALBs and being able to dynamically move some workloads  across shards where possible. With these changes, we are now able handle a large number of concurrent users comfortably. The only noticeable change in behavior you would see is that Defang will now ask you to \u201c",(0,n.jsx)(o.code,{children:"compose down"}),"\u201d your previous project before you are able to deploy a new project on Playground."]}),"\n"]}),"\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsxs)(o.p,{children:["The major news this month was the introduction of our \u201c",(0,n.jsx)(o.code,{children:"debug"}),"\u201d functionality. The motivation for this feature was that while the Defang experience is amazing when everything goes smoothly, we saw users (including our own interns who are helping write all those ",(0,n.jsx)(o.a,{href:"https://docs.defang.io/docs/samples",children:"samples"}),") struggle when they hit an error. The underlying reason for the error could come from a variety of sources: an error in the developer\u2019s application (including in their Dockerfile or Compose file), an issue in the way Defang is processing the application, or an issue in the underlying cloud platform (currently, AWS). To the developer, it is often not obvious what the issue is or how to fix it. That got us thinking how we could make this debugging experience \u201cradically simpler\u201d and thus the idea for ",(0,n.jsx)(o.code,{children:"defang debug"})," was born."]}),"\n",(0,n.jsxs)(o.p,{children:["Now (with CLI v0.5.37 if your application encounters an error that leads to a failed deployment, a failed health-check, or a run-time error, Defang will automatically detect the issue. It will then offer to help you debug it by running the ",(0,n.jsx)(o.code,{children:"defang debug"}),"  command. If you choose to proceed, Defang will apply an LLM model to try to determine the precise cause of the error, with the context of your application source, logs, error code etc. And it will try to come up with one or more actionable insights on how to fix the error. For an example, see the case below:"]}),"\n",(0,n.jsxs)(o.p,{children:["Behind the scenes, Defang is having a conversation on your behalf with the LLM to narrow down to the cause of the error.  We would love for you to try the ",(0,n.jsx)(o.code,{children:"debug"})," feature and give us your feedback so we can improve it further. One future improvement already on our list is the ability to, with user consent, automatically apply a chosen fix and re-try. We are also looking for way to improve the range of failures we are able to diagnose successfully."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(o.h2,{id:"townhall",children:"Townhall"}),"\n",(0,n.jsx)(o.p,{children:"If you're excited about what's coming next and want to hear more about our vision for the future, join us for our Townhall on August 21st. We'll be sharing more about our roadmap and what we're working on next. We'll also be making sure to take time to answer any questions you have, hear your feedback, and learn more about what you want from Defang!"}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.strong,{children:(0,n.jsx)(o.a,{href:"https://lu.ma/rlj13eq5",children:"Register here"})})}),"\n",(0,n.jsx)(o.hr,{}),"\n",(0,n.jsx)(o.p,{children:"We\u2019re excited to keep improving Defang to make it the easiest way for you to Develop, Deploy, and Debug cloud application. Stay tuned for more updates next month."})]})}function c(e={}){const{wrapper:o}={...(0,a.M)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},7448:(e,o,t)=>{t.d(o,{c:()=>n});const n=t.p+"assets/images/defang-compose-update-2aab6b0201bf44543b055debddc43e40.webp"},2172:(e,o,t)=>{t.d(o,{I:()=>l,M:()=>s});var n=t(1504);const a={},r=n.createContext(a);function s(e){const o=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function l(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(r.Provider,{value:o},e.children)}}}]);