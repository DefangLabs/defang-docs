"use strict";(self.webpackChunkdefang_docs=self.webpackChunkdefang_docs||[]).push([[2281],{3375:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var t=n(4848),s=n(8453);const i={title:"How to use your own domain",sidebar_position:600},r="How to Use Your Own Domain",a={id:"tutorials/use-your-own-domain-name",title:"How to use your own domain",description:"In our latest version of Defang BYOC (Bring Your Own Cloud), you can now use your own domain name. (Currently, this new feature is not applicable to Defang Playground)",source:"@site/docs/tutorials/use-your-own-domain-name.mdx",sourceDirName:"tutorials",slug:"/tutorials/use-your-own-domain-name",permalink:"/docs/tutorials/use-your-own-domain-name",draft:!1,unlisted:!1,editUrl:"https://github.com/DefangLabs/defang-docs/tree/main/docs/tutorials/use-your-own-domain-name.mdx",tags:[],version:"current",sidebarPosition:600,frontMatter:{title:"How to use your own domain",sidebar_position:600},sidebar:"docsSidebar",previous:{title:"Deploy a GPU-powered application",permalink:"/docs/tutorials/deploy-with-gpu"},next:{title:"Using Codespaces and Gitpod",permalink:"/docs/tutorials/using-codespaces-gitpod"}},d={},c=[{value:"Step 1 : Check your Defang BYOC settings",id:"step-1--check-your-defang-byoc-settings",level:2},{value:"Step 2: Setup a Hosted Zone in AWS Route 53",id:"step-2-setup-a-hosted-zone-in-aws-route-53",level:2},{value:"Step 3: Configure your DNS settings in your domain registrar",id:"step-3-configure-your-dns-settings-in-your-domain-registrar",level:2},{value:"Step 4: Set up Your Compose File",id:"step-4-set-up-your-compose-file",level:2},{value:"Step 5: Deploy",id:"step-5-deploy",level:2}];function l(e){const o={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h1,{id:"how-to-use-your-own-domain",children:"How to Use Your Own Domain"}),"\n",(0,t.jsxs)(o.p,{children:["In our latest version of ",(0,t.jsx)(o.a,{href:"https://docs.defang.io/docs/concepts/defang-byoc",children:"Defang BYOC"})," (Bring Your Own Cloud), you can now use your own domain name. (Currently, this new feature is not applicable to ",(0,t.jsx)(o.a,{href:"https://docs.defang.io/docs/concepts/defang-playground",children:"Defang Playground"}),")"]}),"\n",(0,t.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/n4RlMpsdTbs?si=_Ru6tobSbi9LT4Q1",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:!0}),"\n",(0,t.jsxs)(o.h2,{id:"step-1--check-your-defang-byoc-settings",children:["Step 1 : Check your ",(0,t.jsx)(o.a,{href:"/docs/concepts/defang-byoc",children:"Defang BYOC"})," settings"]}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:["Make sure you ",(0,t.jsx)(o.a,{href:"/docs/getting-started/installing",children:"install the latest version of the Defang CLI"})]}),"\n",(0,t.jsxs)(o.li,{children:["Then, make sure you have properly ",(0,t.jsx)(o.a,{href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html",children:"authenticated your AWS account"}),". The Defang CLI makes use of AWS environment variables like ",(0,t.jsx)(o.code,{children:"AWS_PROFILE"}),", ",(0,t.jsx)(o.code,{children:"AWS_REGION"}),", ",(0,t.jsx)(o.code,{children:"AWS_ACCESS_KEY_ID"}),", and ",(0,t.jsx)(o.code,{children:"AWS_SECRET_ACCESS_KEY"}),", so make sure the correct values are set for those."]}),"\n"]}),"\n",(0,t.jsx)(o.p,{children:"If you use the AWS CLI, you can verify that your are authenticated against AWS using the following command (note that the AWS CLI itself is not required to use the defang cli in BYOC mode):"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-bash",children:"aws sts get-caller-identity\n"})}),"\n",(0,t.jsx)(o.h2,{id:"step-2-setup-a-hosted-zone-in-aws-route-53",children:"Step 2: Setup a Hosted Zone in AWS Route 53"}),"\n",(0,t.jsx)(o.admonition,{type:"info",children:(0,t.jsx)(o.p,{children:(0,t.jsx)(o.strong,{children:"If you purchased your domain with AWS, you can skip this step."})})}),"\n",(0,t.jsxs)(o.p,{children:["For Defang to be able to manage your domain, you need to create a ",(0,t.jsx)(o.a,{href:"https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/CreatingHostedZone.html",children:"public hosted zone"})," in AWS Route 53. It should list four AWS nameservers and should look like this:"]}),"\n",(0,t.jsx)("img",{src:"/img/domains-tutorial/zone.png",alt:"Hosted Zone UI Screenshot",style:{maxWidth:650}}),"\n",(0,t.jsx)(o.h2,{id:"step-3-configure-your-dns-settings-in-your-domain-registrar",children:"Step 3: Configure your DNS settings in your domain registrar"}),"\n",(0,t.jsx)(o.admonition,{type:"info",children:(0,t.jsx)(o.p,{children:(0,t.jsx)(o.strong,{children:"If you purchased your domain with AWS, you can skip this step."})})}),"\n",(0,t.jsx)(o.p,{children:"You'll need to create NS records in your domain registrar that point to the AWS Route 53 name servers which we got in the previous step. For example, in CloudFlare, the NS records would look like this:"}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.img,{alt:"CloudFlare NS Records Screenshot",src:n(6776).A+"",width:"2164",height:"810"})}),"\n",(0,t.jsx)(o.h2,{id:"step-4-set-up-your-compose-file",children:"Step 4: Set up Your Compose File"}),"\n",(0,t.jsx)(o.p,{children:"In your compose file, specify the domain name you want to use, for example"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-yaml",children:"services:\n    web:\n        domainname: nextjs.defang.chewydemos.com\n        build:\n            context: ./web\n            dockerfile: Dockerfile\n        ports:\n            target: 3000\n            mode: ingress\n"})}),"\n",(0,t.jsx)(o.h2,{id:"step-5-deploy",children:"Step 5: Deploy"}),"\n",(0,t.jsx)(o.p,{children:"Run the following command to deploy your service:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-bash",children:"defang compose up\n"})}),"\n",(0,t.jsx)(o.p,{children:"This will deploy your service and set up the necessary DNS records in Route 53 as seen in the screenshot below as well as provision SSL certificates. You can now access your service at the domain you specified in your compose file."}),"\n",(0,t.jsx)("img",{src:"/img/domains-tutorial/route53-records.png",alt:"Route 53 DNS Records Screenshot"})]})}function u(e={}){const{wrapper:o}={...(0,s.R)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},6776:(e,o,n)=>{n.d(o,{A:()=>t});const t=n.p+"assets/images/ns-records-d8cfc8522633bc4832735629eafe443d.png"},8453:(e,o,n)=>{n.d(o,{R:()=>r,x:()=>a});var t=n(6540);const s={},i=t.createContext(s);function r(e){const o=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(i.Provider,{value:o},e.children)}}}]);