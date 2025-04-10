"use strict";(self.webpackChunkdefang_docs=self.webpackChunkdefang_docs||[]).push([[5314],{5380:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var a=t(4848),s=t(8453);const i={slug:"deploying-defang-with-defang-part-2",title:"Deploying Defang with Defang: Part 2",author:"Defang Team",tags:["defang-with-defang","deployment","defang-website"]},o=void 0,r={permalink:"/blog/deploying-defang-with-defang-part-2",source:"@site/blog/2025-03-26-deploying-defang-with-defang-part-2.md",title:"Deploying Defang with Defang: Part 2",description:"Defang Compose Update",date:"2025-03-26T00:00:00.000Z",formattedDate:"March 26, 2025",tags:[{label:"defang-with-defang",permalink:"/blog/tags/defang-with-defang"},{label:"deployment",permalink:"/blog/tags/deployment"},{label:"defang-website",permalink:"/blog/tags/defang-website"}],readingTime:3.565,hasTruncateMarker:!1,authors:[{name:"Defang Team"}],frontMatter:{slug:"deploying-defang-with-defang-part-2",title:"Deploying Defang with Defang: Part 2",author:"Defang Team",tags:["defang-with-defang","deployment","defang-website"]},unlisted:!1,prevItem:{title:"Deploying a Django App with Real-time Moderation Using Defang",permalink:"/blog/2025/04/10/easiest-way-to-deploy-django"},nextItem:{title:"February 2025 Defang Compose Update",permalink:"/blog/2025/03/15/feb-product-updates"}},d={authorsImageUrls:[void 0]},l=[{value:"From S3 + CloudFront to Dynamic, Containerized Deployments",id:"from-s3--cloudfront-to-dynamic-containerized-deployments",level:2},{value:"Deploying with Defang (and Why It Was Easy)",id:"deploying-with-defang-and-why-it-was-easy",level:2},{value:"Real-World Lessons That Are Shaping Defang",id:"real-world-lessons-that-are-shaping-defang",level:2},{value:"1. Static Assets Still Need CDNs",id:"1-static-assets-still-need-cdns",level:3},{value:"2. Next.js Env Vars Can Be Tricky in Containers",id:"2-nextjs-env-vars-can-be-tricky-in-containers",level:3},{value:"3. Redirects and Rewrites",id:"3-redirects-and-rewrites",level:3},{value:"The Takeaway",id:"the-takeaway",level:2}];function h(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Defang Compose Update",src:t(841).A+"",width:"1200",height:"630"})}),"\n",(0,a.jsx)(n.p,{children:"When we refreshed the Defang brand, we knew our website needed more than just a fresh coat of paint. It needed to become a more dynamic part of our stack. We needed some parts to be more flexible, some parts to be more interactive, and better aligned with how modern apps are organized and deployed. And what better way to take it there than to deploy it with Defang itself?"}),"\n",(0,a.jsx)(n.p,{children:"This is part of our ongoing \"Defang on Defang\" series, where we show how we're using our own tool to deploy all the services that power Defang. In this post, we're diving into how we turned our own website into a project to better understand how Defang can be used to deploy a dynamic Next.js apps and how we can improve the experience for developers."}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"from-s3--cloudfront-to-dynamic-containerized-deployments",children:"From S3 + CloudFront to Dynamic, Containerized Deployments"}),"\n",(0,a.jsxs)(n.p,{children:["Our original site was a Next.js app using ",(0,a.jsx)(n.a,{href:"https://nextjs.org/docs/pages/building-your-application/deploying/static-exports",children:"static exports"})," deployed via S3 and fronted by CloudFront. That setup worked for a while\u2014it was fast and simple. But with our brand refresh, we added pages and components where it made sense to use (and test for other developers) some Next.js features that we couldn't use with the static export:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://nextjs.org/docs/app/building-your-application/rendering/server-components",children:"React Server Components"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations",children:"Server Actions"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://nextjs.org/docs/app/building-your-application/data-fetching/incremental-static-regeneration",children:"ISR"})}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"That meant static hosting wouldn't cut it. So we decided to run the site as an app in a container."}),"\n",(0,a.jsxs)(n.p,{children:["That being said, our learnings from the previous setup ",(0,a.jsx)(n.em,{children:"are"})," being used to develop the capabilities of Defang. We're using the experience to make sure that Defang can handle the deployment of static sites as well as dynamic ones. We'll keep you updated when that's ready."]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"deploying-with-defang-and-why-it-was-easy",children:"Deploying with Defang (and Why It Was Easy)"}),"\n",(0,a.jsx)(n.p,{children:"We already deploy our other services with Defang using Compose files. In fact, the static website actually already used a Dockerfile and Compose file to manage the build process. So we just had to make some minor changes to the Compose file to take into account new environment variables for features we're adding and make a few small changes to the Dockerfile to handle the new build process."}),"\n",(0,a.jsx)(n.p,{children:"Some things we had to change:"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsxs)(n.strong,{children:["Adding ",(0,a.jsx)(n.a,{href:"https://docs.defang.io/docs/concepts/compose#ports",children:"ports"})," to the Compose file"]}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"    ports:\n      - mode: ingress\n        target: 3000\n        published: 3000\n"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsxs)(n.strong,{children:["Adding ",(0,a.jsx)(n.a,{href:"https://docs.defang.io/docs/concepts/domains",children:"domain"})," info the Composer file"]}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"    domainname: defang.io\n    networks:\n      public:\n        aliases:\n          - www.defang.io\n"})}),"\n",(0,a.jsx)(n.p,{children:"One other hiccup was that we used to do www to non-www redirects using S3. There are a few ways to switch that up, but for the time being we decided to use Next.js middleware."}),"\n",(0,a.jsxs)(n.p,{children:["Pretty soon after that, the site was up and running in an AWS account\u2014with TLS, DNS, and both the ",(0,a.jsx)(n.code,{children:"www"})," and root domains automatically configured. Pretty straightfoward!"]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"real-world-lessons-that-are-shaping-defang",children:"Real-World Lessons That Are Shaping Defang"}),"\n",(0,a.jsx)(n.p,{children:"Deploying the website wasn't just a checkbox\u2014it helped surface real-world pain points and ideas for improvement."}),"\n",(0,a.jsx)(n.h3,{id:"1-static-assets-still-need-cdns",children:"1. Static Assets Still Need CDNs"}),"\n",(0,a.jsxs)(n.p,{children:["Even though the site is dynamic now, we still want assets like ",(0,a.jsx)(n.code,{children:"/_next/static"})," to load quickly from a CDN. This made it clear that CDN support\u2014like CloudFront integration\u2014should be easier to configure in Defang. That\u2019s now on our roadmap. That's also going to be useful for other frameworks that use similar asset paths, like Django."]}),"\n",(0,a.jsx)(n.h3,{id:"2-nextjs-env-vars-can-be-tricky-in-containers",children:"2. Next.js Env Vars Can Be Tricky in Containers"}),"\n",(0,a.jsx)(n.p,{children:"Next.js splits env vars between build-time and runtime, and the rules aren\u2019t always obvious. Some need to be passed as build args, and others as runtime envs. That made us think harder about how Defang could help clarify or streamline this for developers\u2014even if we can\u2019t change that aspect of Next.js itself."}),"\n",(0,a.jsx)(n.h3,{id:"3-redirects-and-rewrites",children:"3. Redirects and Rewrites"}),"\n",(0,a.jsx)(n.p,{children:"We had to add a middleware to handle www to non-www redirects. This is a common need, so we're keeping an eye on how we can make this easier to deal with in Defang projects."}),"\n",(0,a.jsx)(n.p,{children:"These are the kinds of things we only notice by using Defang on real-world projects."}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"the-takeaway",children:"The Takeaway"}),"\n",(0,a.jsx)(n.p,{children:"Our site now runs like the rest of our infrastructure:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Fully containerized"}),"\n",(0,a.jsx)(n.li,{children:"Deployed to our own AWS account"}),"\n",(0,a.jsx)(n.li,{children:"Managed with a Compose file"}),"\n",(0,a.jsx)(n.li,{children:"Deployed with Defang"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Stay tuned for the next post in the series\u2014because this is just one piece of the puzzle."})]})}function c(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},841:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/header-50b8256d1e395ff0da154ec647adfe05.png"},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>r});var a=t(6540);const s={},i=a.createContext(s);function o(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);