"use strict";(self.webpackChunkdefang_docs=self.webpackChunkdefang_docs||[]).push([[2281],{3375:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var s=n(4848),t=n(8453);const i={title:"How to Use Your Own Domain",sidebar_position:600},r="How to Use Your Own Domain With AWS",a={id:"tutorials/use-your-own-domain-name",title:"How to Use Your Own Domain",description:"This tutorial will show you how to set up and use your own domain when deploying to AWS using Defang.",source:"@site/docs/tutorials/use-your-own-domain-name.mdx",sourceDirName:"tutorials",slug:"/tutorials/use-your-own-domain-name",permalink:"/docs/tutorials/use-your-own-domain-name",draft:!1,unlisted:!1,editUrl:"https://github.com/DefangLabs/defang-docs/tree/main/docs/tutorials/use-your-own-domain-name.mdx",tags:[],version:"current",sidebarPosition:600,frontMatter:{title:"How to Use Your Own Domain",sidebar_position:600},sidebar:"docsSidebar",previous:{title:"Scaling Your Services",permalink:"/docs/tutorials/scaling-your-services"},next:{title:"Using Codespaces and Gitpod",permalink:"/docs/tutorials/using-codespaces-gitpod"}},d={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Step 1 - Set up a Hosted Zone in AWS Route 53",id:"step-1---set-up-a-hosted-zone-in-aws-route-53",level:2},{value:"Step 2 - Configure your DNS settings in your domain registrar",id:"step-2---configure-your-dns-settings-in-your-domain-registrar",level:2},{value:"Step 3 - Set up Your Compose File",id:"step-3---set-up-your-compose-file",level:2},{value:"Step 4 - Deploy",id:"step-4---deploy",level:2}];function l(e){const o={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.h1,{id:"how-to-use-your-own-domain-with-aws",children:"How to Use Your Own Domain With AWS"}),"\n",(0,s.jsx)(o.p,{children:"This tutorial will show you how to set up and use your own domain when deploying to AWS using Defang."}),"\n",(0,s.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/n4RlMpsdTbs?si=_Ru6tobSbi9LT4Q1",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:!0}),"\n",(0,s.jsx)(o.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:(0,s.jsx)(o.a,{href:"/docs/concepts/authentication",children:"A Defang Account"})}),"\n",(0,s.jsx)(o.li,{children:(0,s.jsx)(o.a,{href:"/docs/getting-started#install-the-defang-cli",children:"The Defang CLI"})}),"\n",(0,s.jsx)(o.li,{children:(0,s.jsx)(o.a,{href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-authentication.html",children:"AWS Account Credentials"})}),"\n"]}),"\n",(0,s.jsx)(o.h2,{id:"step-1---set-up-a-hosted-zone-in-aws-route-53",children:"Step 1 - Set up a Hosted Zone in AWS Route 53"}),"\n",(0,s.jsx)(o.admonition,{type:"info",children:(0,s.jsx)(o.p,{children:(0,s.jsx)(o.strong,{children:"If you purchased your domain with AWS, you can skip this step."})})}),"\n",(0,s.jsxs)(o.p,{children:["For Defang to be able to manage your domain, you need to create a ",(0,s.jsx)(o.a,{href:"https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/CreatingHostedZone.html",children:"public hosted zone"})," in AWS Route 53. It should list four AWS nameservers and should look like this:"]}),"\n",(0,s.jsx)("img",{src:"/img/domains-tutorial/zone.png",alt:"Hosted Zone UI Screenshot",style:{maxWidth:650}}),"\n",(0,s.jsx)(o.h2,{id:"step-2---configure-your-dns-settings-in-your-domain-registrar",children:"Step 2 - Configure your DNS settings in your domain registrar"}),"\n",(0,s.jsx)(o.admonition,{type:"info",children:(0,s.jsx)(o.p,{children:(0,s.jsx)(o.strong,{children:"If you purchased your domain with AWS, you can skip this step."})})}),"\n",(0,s.jsx)(o.p,{children:"You'll need to create NS records in your domain registrar that point to the AWS Route 53 name servers which we got in the previous step. For example, in CloudFlare, the NS records would look like this:"}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.img,{alt:"CloudFlare NS Records Screenshot",src:n(6776).A+"",width:"2164",height:"810"})}),"\n",(0,s.jsx)(o.h2,{id:"step-3---set-up-your-compose-file",children:"Step 3 - Set up Your Compose File"}),"\n",(0,s.jsx)(o.p,{children:"In your Compose file, specify the domain name you want to use, for example:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-yaml",children:"services:\n    web:\n        domainname: nextjs.defang.chewydemos.com\n        build:\n            context: ./web\n            dockerfile: Dockerfile\n        ports:\n            target: 3000\n            mode: ingress\n"})}),"\n",(0,s.jsx)(o.h2,{id:"step-4---deploy",children:"Step 4 - Deploy"}),"\n",(0,s.jsx)(o.p,{children:"Run the following command to deploy your service:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-bash",children:"defang compose up\n"})}),"\n",(0,s.jsx)(o.p,{children:"This will deploy your service and set up the necessary DNS records in Route 53 as seen in the screenshot below as well as provision SSL certificates. You can now access your service at the domain you specified in your Compose file."}),"\n",(0,s.jsx)("img",{src:"/img/domains-tutorial/route53-records.png",alt:"Route 53 DNS Records Screenshot"}),"\n",(0,s.jsx)(o.hr,{}),"\n",(0,s.jsxs)(o.p,{children:["For a deeper discussion of how to use a custom domain with Defang, see our ",(0,s.jsx)(o.a,{href:"/docs/concepts/domains",children:"Domain"})," concept docs."]})]})}function u(e={}){const{wrapper:o}={...(0,t.R)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},6776:(e,o,n)=>{n.d(o,{A:()=>s});const s=n.p+"assets/images/ns-records-d8cfc8522633bc4832735629eafe443d.png"},8453:(e,o,n)=>{n.d(o,{R:()=>r,x:()=>a});var s=n(6540);const t={},i=s.createContext(t);function r(e){const o=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(i.Provider,{value:o},e.children)}}}]);