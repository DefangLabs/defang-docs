"use strict";(self.webpackChunkdefang_docs=self.webpackChunkdefang_docs||[]).push([[392],{4101:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var t=n(4848),i=n(8453);const r={title:"GCP",description:"Defang will allow you to easily create and manage full, scalable applications with GCP.",sidebar_position:3e3},s="Google Cloud Platform (GCP)",l={id:"providers/gcp",title:"GCP",description:"Defang will allow you to easily create and manage full, scalable applications with GCP.",source:"@site/docs/providers/gcp.md",sourceDirName:"providers",slug:"/providers/gcp",permalink:"/docs/providers/gcp",draft:!1,unlisted:!1,editUrl:"https://github.com/DefangLabs/defang-docs/tree/main/docs/providers/gcp.md",tags:[],version:"current",sidebarPosition:3e3,frontMatter:{title:"GCP",description:"Defang will allow you to easily create and manage full, scalable applications with GCP.",sidebar_position:3e3},sidebar:"docsSidebar",previous:{title:"DigitalOcean",permalink:"/docs/providers/digitalocean/"},next:{title:"Azure",permalink:"/docs/providers/azure"}},a={},c=[{value:"Getting Started",id:"getting-started",level:2},{value:"Location",id:"location",level:2},{value:"Architecture",id:"architecture",level:2},{value:"Deployment",id:"deployment",level:3},{value:"Runtime",id:"runtime",level:3},{value:"Secrets",id:"secrets",level:3},{value:"Future Improvements",id:"future-improvements",level:3}];function d(e){const o={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h1,{id:"google-cloud-platform-gcp",children:"Google Cloud Platform (GCP)"}),"\n",(0,t.jsx)(o.admonition,{type:"info",children:(0,t.jsx)(o.p,{children:"The Defang GCP provider is available for Public Preview as of December 2024."})}),"\n",(0,t.jsx)(o.p,{children:"Defang enables you to effortlessly develop and deploy full, scalable applications with GCP. It is designed to simplify deploying your services to the cloud. As one of the leading cloud providers globally, GCP offers powerful tools and resources, and with Defang, you can bypass the complexities of the GCP platform. Let Defang handle the heavy lifting so you can focus on what matters most to you!"}),"\n",(0,t.jsx)(o.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,t.jsxs)(o.p,{children:["After signing in to your GCP account, select an existing project or ",(0,t.jsx)(o.a,{href:"https://developers.google.com/workspace/guides/create-project",children:"create a new project"}),", make sure ",(0,t.jsx)(o.a,{href:"https://cloud.google.com/billing/docs/how-to/modify-project",children:"billing is enabled"}),", and note down the project ID and set it as environment variable ",(0,t.jsx)(o.code,{children:"GCP_PROJECT_ID"}),"."]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-bash",children:"export GCP_PROJECT_ID=<your-project-id>\n"})}),"\n",(0,t.jsxs)(o.p,{children:["Next step is to ",(0,t.jsx)(o.a,{href:"https://cloud.google.com/docs/authentication",children:"authenticate your local environment with GCP"}),". Our preferred method is to setup ",(0,t.jsx)(o.a,{href:"https://cloud.google.com/docs/authentication/provide-credentials-adc",children:"Application Default Credentials"})," with the Google Cloud CLI. Once the ",(0,t.jsx)(o.a,{href:"https://cloud.google.com/sdk/docs/install",children:"Google Cloud CLI is installed"}),", run the following command to authenticate:"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-bash",children:"gcloud init\ngcloud auth application-default login\n"})}),"\n",(0,t.jsxs)(o.p,{children:["The Defang CLI will automatically check if ",(0,t.jsx)(o.code,{children:"GCP_PROJECT_ID"})," environment variable is set and correctly authenticated with GCP before running. Once you are ready to go, add the ",(0,t.jsx)(o.code,{children:"--provider=gcp"})," to your command to tell the Defang CLI to use the GCP provider."]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-bash",children:"$ defang up --provider=gcp\n# or\n$ DEFANG_PROVIDER=gcp defang up\n"})}),"\n",(0,t.jsx)(o.h2,{id:"location",children:"Location"}),"\n",(0,t.jsxs)(o.p,{children:["The Defang BYOC GCP Provider will use the location specified in the ",(0,t.jsx)(o.code,{children:"GCP_LOCATION"})," environment variable. For a list of locations available in GCP, see the ",(0,t.jsx)(o.a,{href:"https://cloud.google.com/about/locations",children:"location documentation"}),". If the ",(0,t.jsx)(o.code,{children:"GCP_LOCATION"})," environment variable is not set, the default location ",(0,t.jsx)(o.code,{children:"us-central1"})," (Iowa) will be used."]}),"\n",(0,t.jsx)(o.h2,{id:"architecture",children:"Architecture"}),"\n",(0,t.jsx)(o.p,{children:"Defang uses GCP cloud run to build, deploy, and run your services. The following describes the current state of Defang's support for GCP, the specific resources that Defang uses, and the roadmap for future support."}),"\n",(0,t.jsx)(o.h3,{id:"deployment",children:"Deployment"}),"\n",(0,t.jsxs)(o.p,{children:["To deploy your services, the Defang CLI sets up some basic resources needed, including enabling required APIs in the project, creating service accounts used to build and deploy your service with the required permissions, and creating a ",(0,t.jsx)(o.a,{href:"https://cloud.google.com/storage",children:"Google Cloud Storage"})," bucket where the Defang CLI uploads your source code to. The CLI then deploys a GCP Cloud Run Job that uses Pulumi to build your container image and run your services."]}),"\n",(0,t.jsx)(o.h3,{id:"runtime",children:"Runtime"}),"\n",(0,t.jsxs)(o.p,{children:["The Provider builds and deploys your services using ",(0,t.jsx)(o.a,{href:"https://cloud.google.com/run",children:"Google Cloud Run"})," jobs, and runs your workloads using the ",(0,t.jsx)(o.a,{href:"https://cloud.google.com/run",children:"Google Cloud Run"})," service."]}),"\n",(0,t.jsx)(o.h3,{id:"secrets",children:"Secrets"}),"\n",(0,t.jsx)(o.p,{children:"The GCP provider does not currently support storing sensitive config values."}),"\n",(0,t.jsx)(o.h3,{id:"future-improvements",children:"Future Improvements"}),"\n",(0,t.jsx)(o.p,{children:"The following features are in active development for GCP:"}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/concepts/configuration",children:"Configuration and management of secrets"})}),"\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/concepts/networking",children:"Networking and Load Balancing"})}),"\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/concepts/domains",children:"Custom Domains"})}),"\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/concepts/managed-storage/managed-redis",children:"Managed Redis"})}),"\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"/docs/concepts/managed-storage/managed-postgres",children:"Managed Postgres"})}),"\n"]}),"\n",(0,t.jsx)(o.p,{children:"Stayed tuned for future updates!"})]})}function u(e={}){const{wrapper:o}={...(0,i.R)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,o,n)=>{n.d(o,{R:()=>s,x:()=>l});var t=n(6540);const i={},r=t.createContext(i);function s(e){const o=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function l(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(r.Provider,{value:o},e.children)}}}]);