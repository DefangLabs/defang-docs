"use strict";(self.webpackChunkdefang_docs=self.webpackChunkdefang_docs||[]).push([[4763],{6366:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var i=t(4848),n=t(8453);const o={title:"DigitalOcean",description:"Defang allows you to easily create and manage full, scalable applications with DigitalOcean.",sidebar_position:8},r="Digital Ocean",s={id:"providers/digitalocean/digitalocean",title:"DigitalOcean",description:"Defang allows you to easily create and manage full, scalable applications with DigitalOcean.",source:"@site/docs/providers/digitalocean/digitalocean.md",sourceDirName:"providers/digitalocean",slug:"/providers/digitalocean/",permalink:"/docs/providers/digitalocean/",draft:!1,unlisted:!1,editUrl:"https://github.com/DefangLabs/defang-docs/tree/main/docs/providers/digitalocean/digitalocean.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"DigitalOcean",description:"Defang allows you to easily create and manage full, scalable applications with DigitalOcean.",sidebar_position:8},sidebar:"docsSidebar",previous:{title:"AWS",permalink:"/docs/providers/aws/"},next:{title:"GCP",permalink:"/docs/providers/gcp"}},c={},l=[{value:"Getting Started",id:"getting-started",level:2},{value:"Region",id:"region",level:2},{value:"Architecture",id:"architecture",level:2},{value:"Deployment",id:"deployment",level:3},{value:"Runtime",id:"runtime",level:3},{value:"Secrets",id:"secrets",level:3},{value:"Future Improvements",id:"future-improvements",level:3}];function d(e){const a={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.h1,{id:"digital-ocean",children:"Digital Ocean"}),"\n",(0,i.jsx)(a.admonition,{type:"info",children:(0,i.jsx)(a.p,{children:"This feature is available for Public Preview as of October 2024. This page will be updated when it is GA."})}),"\n",(0,i.jsx)(a.p,{children:"Why should you use Defang with DigitalOcean? Defang allows you to easily create and manage full, scalable applications with DigitalOcean. Defang aims to make it easier to deploy your services to the cloud. DigitalOcean is one of the most popular cloud providers in the world and with Defang, you dont have to waste your time understanding the complexities and challenges of the DigitalOcean platform. Let Defang do it for you and spend more time working on whats important to you!"}),"\n",(0,i.jsx)(a.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,i.jsxs)(a.p,{children:["To get started with the Defang BYOC DigitalOcean Provider, first ",(0,i.jsx)(a.a,{href:"../getting-started#authenticate-with-defang",children:"install the latest version of the Defang CLI"}),". Next make sure you have signed up for a ",(0,i.jsx)(a.a,{href:"https://try.digitalocean.com/freetrialoffer/",children:"DigitalOcean account"}),"."]}),"\n",(0,i.jsxs)(a.p,{children:["After signing up for your account, be sure to setup your ",(0,i.jsx)(a.a,{href:"https://docs.digitalocean.com/reference/api/create-personal-access-token/",children:"personal access token"})," as well as your ",(0,i.jsx)(a.a,{href:"https://docs.digitalocean.com/products/spaces/how-to/manage-access/",children:"Spaces access key"}),".  Next, save these values as environment variables with the names ",(0,i.jsx)(a.code,{children:"DIGITALOCEAN_TOKEN"}),", ",(0,i.jsx)(a.code,{children:"SPACES_ACCESS_KEY_ID"}),", and ",(0,i.jsx)(a.code,{children:"SPACES_SECRET_ACCESS_KEY"}),"."]}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-bash",children:"export DIGITALOCEAN_TOKEN=<your-token>\nexport SPACES_ACCESS_KEY_ID=<your-key-id>\nexport SPACES_SECRET_ACCESS_KEY=<your-key>\n"})}),"\n",(0,i.jsxs)(a.p,{children:["The Defang CLI will automatically check if they are set before running. Once you are ready to go, add the ",(0,i.jsx)(a.code,{children:"--provider=digitalocean"})," to your command to tell the Defang CLI to use the DigitalOcean provider."]}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-bash",children:"$ defang up --provider=digitalocean\n# or\n$ export DEFANG_PROVIDER=digitalocean\n"})}),"\n",(0,i.jsx)(a.h2,{id:"region",children:"Region"}),"\n",(0,i.jsxs)(a.p,{children:["The Defang BYOC DigitalOcean Provider will use the region specified in the ",(0,i.jsx)(a.code,{children:"REGION"})," environment variable. For a list of regions available in DigitalOcean, see the ",(0,i.jsx)(a.a,{href:"https://docs.digitalocean.com/platform/regional-availability/#app-platform-availability",children:"region documentation"}),"."]}),"\n",(0,i.jsx)(a.h2,{id:"architecture",children:"Architecture"}),"\n",(0,i.jsx)(a.p,{children:"Defang uses resources that are native to the cloud provider you are using. The following describes the current state of Defang's support for DigitalOcean, the specific resources that Defang uses, and the roadmap for future support."}),"\n",(0,i.jsx)(a.h3,{id:"deployment",children:"Deployment"}),"\n",(0,i.jsxs)(a.p,{children:["To deploy your services, the Defang CLI packages your code and uploads it to a ",(0,i.jsx)(a.a,{href:"https://www.digitalocean.com/products/spaces",children:"Spaces Object Storage"})," bucket in your account. The CLI then deploys an App Platform App that uses Pulumi to build your container image and run your service."]}),"\n",(0,i.jsx)(a.h3,{id:"runtime",children:"Runtime"}),"\n",(0,i.jsxs)(a.p,{children:["The Provider runs your workloads using the ",(0,i.jsx)(a.a,{href:"https://docs.digitalocean.com/products/app-platform/",children:"DigitalOcean App Platform"}),"."]}),"\n",(0,i.jsx)(a.h3,{id:"secrets",children:"Secrets"}),"\n",(0,i.jsxs)(a.p,{children:["Defang allows you to configure your services with sensitive config values. Sensitive values are added and stored with ",(0,i.jsx)(a.a,{href:"https://docs.digitalocean.com/products/app-platform/how-to/use-environment-variables/",children:"encryption"})," in your app once it has been deployed."]}),"\n",(0,i.jsx)(a.h3,{id:"future-improvements",children:"Future Improvements"}),"\n",(0,i.jsx)(a.p,{children:"The following features are still in development for DigitalOcean:"}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsx)(a.li,{children:(0,i.jsx)(a.a,{href:"/docs/concepts/domains",children:"Custom Domains"})}),"\n",(0,i.jsx)(a.li,{children:(0,i.jsx)(a.a,{href:"/docs/concepts/managed-storage/managed-redis",children:"Managed Redis"})}),"\n",(0,i.jsx)(a.li,{children:(0,i.jsx)(a.a,{href:"/docs/concepts/managed-storage/managed-postgres",children:"Managed Postgres"})}),"\n"]}),"\n",(0,i.jsx)(a.p,{children:"Stayed tuned for future updates!"})]})}function h(e={}){const{wrapper:a}={...(0,n.R)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,a,t)=>{t.d(a,{R:()=>r,x:()=>s});var i=t(6540);const n={},o=i.createContext(n);function r(e){const a=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function s(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),i.createElement(o.Provider,{value:a},e.children)}}}]);