"use strict";(self.webpackChunkdefang_docs=self.webpackChunkdefang_docs||[]).push([[8016],{7508:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=s(4848),t=s(8453);const i={title:"AWS",description:"Defang allows you to easily create and manage full, scalable applications with AWS.",sidebar_position:0},r="AWS",o={id:"providers/aws/aws",title:"AWS",description:"Defang allows you to easily create and manage full, scalable applications with AWS.",source:"@site/docs/providers/aws/aws.md",sourceDirName:"providers/aws",slug:"/providers/aws/",permalink:"/docs/providers/aws/",draft:!1,unlisted:!1,editUrl:"https://github.com/DefangLabs/defang-docs/tree/main/docs/providers/aws/aws.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"AWS",description:"Defang allows you to easily create and manage full, scalable applications with AWS.",sidebar_position:0},sidebar:"docsSidebar",previous:{title:"Playground",permalink:"/docs/providers/playground"},next:{title:"Digital Ocean",permalink:"/docs/providers/digital-ocean/"}},d={},c=[{value:"Getting Started",id:"getting-started",level:2},{value:"Region",id:"region",level:2},{value:"Architecture",id:"architecture",level:2},{value:"Secrets",id:"secrets",level:3},{value:"Deployment",id:"deployment",level:3},{value:"Runtime",id:"runtime",level:3},{value:"Managed Storage",id:"managed-storage",level:2},{value:"Managed Postgres",id:"managed-postgres",level:3},{value:"Managed Redis",id:"managed-redis",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"aws",children:"AWS"}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsx)(n.p,{children:"Public Beta of the v1 Defang BYOC AWS Provider is released as of Feb 1 2024."})}),"\n",(0,a.jsx)(n.p,{children:"Why should you use Defang with AWS? Defang allows you to easily create and manage full, scalable applications with AWS. Defang aims to make it easier to deploy your services to the cloud. Don't waste your time learning the ins and outs of AWS, deciding which of the 200+ services to use, and then writing the infrastructure code to deploy your services, and making sure they are properly secured. Defang does all of that for you."}),"\n",(0,a.jsx)(n.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,a.jsxs)(n.p,{children:["Getting started with the Defang BYOC AWS Provider is easy. Make sure you have properly ",(0,a.jsx)(n.a,{href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html",children:"authenticated your AWS account"}),"."]}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["If you have the aws CLI installed, you should be able to successfully run ",(0,a.jsx)(n.code,{children:"aws sts get-caller-identity"})," and see your account ID."]})}),"\n",(0,a.jsxs)(n.p,{children:["Use the ",(0,a.jsx)(n.code,{children:"--provider=aws"})," flag to tell the Defang CLI to use the AWS Provider or set the ",(0,a.jsx)(n.code,{children:"DEFANG_PROVIDER"})," environment variable to ",(0,a.jsx)(n.code,{children:"aws"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"$ defang up --provider=aws\n# or\n$ export DEFANG_PROVIDER=aws\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"warning",children:(0,a.jsxs)(n.p,{children:["The Defang CLI does not depend on the AWS CLI. It uses the ",(0,a.jsx)(n.a,{href:"https://aws.amazon.com/sdk-for-go/",children:"AWS SDK for Go"})," to interact with your AWS account. In most cases, if you can run the ",(0,a.jsx)(n.code,{children:"aws sts get-caller-identity"})," from the tip above, you should be good to go. However, due to a difference between the AWS CLI and the AWS SDK for Go, there is at least one case where they behave differently: if you are using ",(0,a.jsx)(n.code,{children:"aws sso login"})," and have clashing profiles in your ",(0,a.jsx)(n.code,{children:".aws/config"})," and ",(0,a.jsx)(n.code,{children:".aws/credentials"})," files, the AWS CLI will prioritize SSO profiles and caches over regular profiles, but the AWS SDK for Go will prioritize the credentials file, and it may fail."]})}),"\n",(0,a.jsx)(n.h2,{id:"region",children:"Region"}),"\n",(0,a.jsxs)(n.p,{children:["The Defang BYOC AWS Provider will use the region specified in the ",(0,a.jsx)(n.code,{children:"AWS_REGION"})," environment variable, or a profile in the ",(0,a.jsx)(n.code,{children:"~/.aws/config"})," file exactly as the AWS CLI would."]}),"\n",(0,a.jsx)(n.h2,{id:"architecture",children:"Architecture"}),"\n",(0,a.jsx)(n.p,{children:"Defang uses resources that are native to the cloud provider you are using. The following describes the current state of Defang's support for AWS, the specific resources that Defang uses, and the roadmap for future support."}),"\n",(0,a.jsx)(n.h3,{id:"secrets",children:"Secrets"}),"\n",(0,a.jsx)(n.p,{children:"Defang allows you to configure your services with sensitive config values. Sensitive values are stored in AWS Systems Manager Parameter Store, and are encrypted."}),"\n",(0,a.jsx)(n.h3,{id:"deployment",children:"Deployment"}),"\n",(0,a.jsx)(n.p,{children:"To deploy your services, the Defang CLI packages your code and uploads it to an S3 bucket in your account. The CLI then deploys an ECS task that uses Pulumi to build your container image and run your service."}),"\n",(0,a.jsx)(n.h3,{id:"runtime",children:"Runtime"}),"\n",(0,a.jsx)(n.p,{children:"The provider runs your workloads using ECS using Fargate. It provisions a VPC with public and private subnets, and deploys your services to the private subnets. It then provisions an Application Load Balancer (ALB) and routes traffic to your services."}),"\n",(0,a.jsx)(n.h2,{id:"managed-storage",children:"Managed Storage"}),"\n",(0,a.jsxs)(n.p,{children:["Defang can help you provision ",(0,a.jsx)(n.a,{href:"/docs/concepts/managed-storage/",children:"managed storage"})," services. The following managed storage services are supported on AWS:"]}),"\n",(0,a.jsx)(n.h3,{id:"managed-postgres",children:"Managed Postgres"}),"\n",(0,a.jsxs)(n.p,{children:["When using ",(0,a.jsx)(n.a,{href:"/docs/concepts/managed-storage/managed-postgres",children:"Managed Postgres"}),", the Defang CLI provisions an RDS Postgres instance in your account."]}),"\n",(0,a.jsx)(n.h3,{id:"managed-redis",children:"Managed Redis"}),"\n",(0,a.jsxs)(n.p,{children:["When using ",(0,a.jsx)(n.a,{href:"/docs/concepts/managed-storage/managed-redis",children:"Managed Redis"}),", the Defang CLI provisions an ElastiCache Redis cluster in your account."]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>o});var a=s(6540);const t={},i=a.createContext(t);function r(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);