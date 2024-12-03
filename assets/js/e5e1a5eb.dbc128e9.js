"use strict";(self.webpackChunkdefang_docs=self.webpackChunkdefang_docs||[]).push([[8016],{7508:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var r=t(4848),n=t(8453);const i={title:"AWS",description:"Defang allows you to easily create and manage full, scalable applications with AWS.",sidebar_position:0},d="AWS",c={id:"providers/aws/aws",title:"AWS",description:"Defang allows you to easily create and manage full, scalable applications with AWS.",source:"@site/docs/providers/aws/aws.md",sourceDirName:"providers/aws",slug:"/providers/aws/",permalink:"/docs/providers/aws/",draft:!1,unlisted:!1,editUrl:"https://github.com/DefangLabs/defang-docs/tree/main/docs/providers/aws/aws.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"AWS",description:"Defang allows you to easily create and manage full, scalable applications with AWS.",sidebar_position:0},sidebar:"docsSidebar",previous:{title:"Playground",permalink:"/docs/providers/playground"},next:{title:"DigitalOcean",permalink:"/docs/providers/digitalocean/"}},a={},o=[{value:"Getting Started",id:"getting-started",level:2},{value:"Region",id:"region",level:2},{value:"Architecture",id:"architecture",level:2},{value:"Secrets",id:"secrets",level:3},{value:"Deployment",id:"deployment",level:3},{value:"Runtime",id:"runtime",level:3},{value:"Managed Storage",id:"managed-storage",level:2},{value:"Managed Postgres",id:"managed-postgres",level:3},{value:"Managed Redis",id:"managed-redis",level:3},{value:"Managed Resources",id:"managed-resources",level:3}];function l(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"aws",children:"AWS"}),"\n",(0,r.jsx)(s.p,{children:"Why should you use Defang with AWS? Defang allows you to easily create and manage full, scalable applications with AWS. Defang aims to make it easier to deploy your services to the cloud. Don't waste your time learning the ins and outs of AWS, deciding which of the 200+ services to use, and then writing the infrastructure code to deploy your services, and making sure they are properly secured. Defang does all of that for you."}),"\n",(0,r.jsx)(s.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,r.jsxs)(s.p,{children:["Getting started with the Defang BYOC AWS Provider is easy. The first step is to ",(0,r.jsx)(s.a,{href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html",children:"authenticate your shell"})," with AWS as an admin user. The authenticated user should be an IAM admin because Defang will need permission to create resources and IAM roles in your account."]}),"\n",(0,r.jsx)(s.admonition,{type:"tip",children:(0,r.jsxs)(s.p,{children:["If you have the AWS CLI installed, you should be able to successfully run ",(0,r.jsx)(s.code,{children:"aws sts get-caller-identity"})," and see your account ID."]})}),"\n",(0,r.jsxs)(s.p,{children:["Use the ",(0,r.jsx)(s.code,{children:"--provider=aws"})," flag to tell the Defang CLI to use the AWS Provider or set the ",(0,r.jsx)(s.code,{children:"DEFANG_PROVIDER"})," environment variable to ",(0,r.jsx)(s.code,{children:"aws"}),"."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"$ defang up --provider=aws\n# or\n$ export DEFANG_PROVIDER=aws\n"})}),"\n",(0,r.jsx)(s.admonition,{type:"warning",children:(0,r.jsxs)(s.p,{children:["Because Defang creates roles, you need to have the appropriate permissions to create roles in your cloud provider account, typically the ",(0,r.jsx)(s.code,{children:"AdministratorAccess"})," policy in AWS."]})}),"\n",(0,r.jsx)(s.admonition,{type:"tip",children:(0,r.jsxs)(s.p,{children:["The Defang CLI does not depend on the AWS CLI. It uses the ",(0,r.jsx)(s.a,{href:"https://aws.amazon.com/sdk-for-go/",children:"AWS SDK for Go"})," to interact with your AWS account. In most cases, if you can run the ",(0,r.jsx)(s.code,{children:"aws sts get-caller-identity"})," from the tip above, you should be good to go. However, due to a difference between the AWS CLI and the AWS SDK for Go, there is at least one case where they behave differently: if you are using ",(0,r.jsx)(s.code,{children:"aws sso login"})," and have clashing profiles in your ",(0,r.jsx)(s.code,{children:".aws/config"})," and ",(0,r.jsx)(s.code,{children:".aws/credentials"})," files, the AWS CLI will prioritize SSO profiles and caches over regular profiles, but the AWS SDK for Go will prioritize the credentials file, and it may fail."]})}),"\n",(0,r.jsx)(s.h2,{id:"region",children:"Region"}),"\n",(0,r.jsxs)(s.p,{children:["The Defang BYOC AWS Provider will use the region specified in the ",(0,r.jsx)(s.code,{children:"AWS_REGION"})," environment variable, or a profile in the ",(0,r.jsx)(s.code,{children:"~/.aws/config"})," file exactly as the AWS CLI would."]}),"\n",(0,r.jsx)(s.h2,{id:"architecture",children:"Architecture"}),"\n",(0,r.jsx)(s.p,{children:"Defang uses resources that are native to the cloud provider you are using. The following describes the current state of Defang's support for AWS, the specific resources that Defang uses, and the roadmap for future support."}),"\n",(0,r.jsx)(s.h3,{id:"secrets",children:"Secrets"}),"\n",(0,r.jsx)(s.p,{children:"Defang allows you to configure your services with sensitive config values. Sensitive values are stored in AWS Systems Manager Parameter Store, and are encrypted."}),"\n",(0,r.jsx)(s.h3,{id:"deployment",children:"Deployment"}),"\n",(0,r.jsx)(s.p,{children:"To deploy your services, the Defang CLI packages your code and uploads it to an S3 bucket in your account. The CLI then deploys an ECS task that uses Pulumi to build your container image and run your service."}),"\n",(0,r.jsx)(s.h3,{id:"runtime",children:"Runtime"}),"\n",(0,r.jsx)(s.p,{children:"The provider runs your workloads using ECS using Fargate. It provisions a VPC with public and private subnets, and deploys your services to the private subnets. It then provisions an Application Load Balancer (ALB) and routes traffic to your services."}),"\n",(0,r.jsx)(s.h2,{id:"managed-storage",children:"Managed Storage"}),"\n",(0,r.jsxs)(s.p,{children:["Defang can help you provision ",(0,r.jsx)(s.a,{href:"/docs/concepts/managed-storage/",children:"managed storage"})," services. The following managed storage services are supported on AWS:"]}),"\n",(0,r.jsx)(s.h3,{id:"managed-postgres",children:"Managed Postgres"}),"\n",(0,r.jsxs)(s.p,{children:["When using ",(0,r.jsx)(s.a,{href:"/docs/concepts/managed-storage/managed-postgres",children:"Managed Postgres"}),", the Defang CLI provisions an RDS Postgres instance in your account."]}),"\n",(0,r.jsx)(s.h3,{id:"managed-redis",children:"Managed Redis"}),"\n",(0,r.jsxs)(s.p,{children:["When using ",(0,r.jsx)(s.a,{href:"/docs/concepts/managed-storage/managed-redis",children:"Managed Redis"}),", the Defang CLI provisions an ElastiCache Redis cluster in your account."]}),"\n",(0,r.jsx)(s.h3,{id:"managed-resources",children:"Managed Resources"}),"\n",(0,r.jsx)(s.p,{children:"Defang will create and manage the following resources in your AWS account from its bootstrap CloudFormation template:"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Resource Type"}),(0,r.jsx)(s.th,{children:"Example Resource Name"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"s3/Bucket"}),(0,r.jsx)(s.td,{children:"defang-cd-bucket-cbpbzz8hzm7"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"ecs/ClusterCapacityProviderAssociations"}),(0,r.jsx)(s.td,{children:"defang-cd-Cluster-pqFhjwuklvm"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"ecs/Cluster"}),(0,r.jsx)(s.td,{children:"defang-cd-ClusterpJqFhjwuklvm"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"iam/Role"}),(0,r.jsx)(s.td,{children:"defang-cd-ExeutionRole-XE7RbQDfeEwx"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"ec2/InternetGateway"}),(0,r.jsx)(s.td,{children:"igw-05bd7adc92541ec3"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"ec2/VPCGatewayAttachment"}),(0,r.jsx)(s.td,{children:"IGW"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"logs/LogGroup"}),(0,r.jsx)(s.td,{children:"defang-cd-Logroup-6LSZet3tFnEy"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"ecr/PullThroughCacheRule"}),(0,r.jsx)(s.td,{children:"defang-cd-ecrpublic"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"ec2/Route"}),(0,r.jsx)(s.td,{children:"rtb-08f3f5afc9e6c8c8"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"ec2/RouteTable"}),(0,r.jsx)(s.td,{children:"rtb-08f3f5ffc9e6c8c8"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"ec2/VPCEndpoint"}),(0,r.jsx)(s.td,{children:"vpce-02175d8d4f47d0c9"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"ec2/SecurityGroup"}),(0,r.jsx)(s.td,{children:"sg-032b839c63e70e49"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"ec2/Subnet"}),(0,r.jsx)(s.td,{children:"subnet-086bead399ddc8a0"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"ec2/SubnetRouteTableAssociation"}),(0,r.jsx)(s.td,{children:"rtbassoc-02e200d45e7227fe"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"ecs/TaskDefinition"}),(0,r.jsxs)(s.td,{children:["arn:aws:ecsus-west-2:381492210770",":task-definition","/defang-cd-TaskDefinition-RXd5tf9TaN38:1"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"iam/Role"}),(0,r.jsx)(s.td,{children:"defang-cd-askRole-gsEeDPd6sPQY"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"ec2/VPC"}),(0,r.jsx)(s.td,{children:"vpc-0cbca64f13435695"})]})]})]}),"\n",(0,r.jsx)(s.p,{children:"Then, for each project you deploy, Defang will create and manage the following resources:"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Resource Type"}),(0,r.jsx)(s.th,{children:"Example Resource Name"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"ecr/Repository"}),(0,r.jsx)(s.td,{children:"project1/kaniko-build"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"ecr/LifecyclePolicy"}),(0,r.jsx)(s.td,{children:"project1/kaniko-build"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"acm/Certificate"}),(0,r.jsx)(s.td,{children:"*.project1.tenant1.defang.app"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"ecr/Repository"}),(0,r.jsx)(s.td,{children:"project1/kaniko-build/cache"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"ecr/LifecyclePolicy"}),(0,r.jsx)(s.td,{children:"project1/kaniko-build/cache"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"iam/InstanceProfile"}),(0,r.jsx)(s.td,{children:"ecs-agent-profile"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"iam/Role"}),(0,r.jsx)(s.td,{children:"ecs-task-execution-role"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"cloudwatch/EventRule"}),(0,r.jsx)(s.td,{children:"project1-ecs-lifecycle-rule"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"cloudwatch/EventTarget"}),(0,r.jsx)(s.td,{children:"project1-ecs-event-cw-target"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"route53/Record"}),(0,r.jsx)(s.td,{children:"validation-project1.tenant1.defang.app"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"acm/CertificateValidation"}),(0,r.jsx)(s.td,{children:"*.project1.tenant1.defang.appValidation"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"ec2/VpcDhcpOptionsAssociation"}),(0,r.jsx)(s.td,{children:"dhcp-options-association"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"cloudwatch/LogGroup"}),(0,r.jsx)(s.td,{children:"builds"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"iam/Role"}),(0,r.jsx)(s.td,{children:"kaniko-task-role"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"ecs/TaskDefinition"}),(0,r.jsx)(s.td,{children:"kanikoTaskDefArm64"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"ecs/TaskDefinition"}),(0,r.jsx)(s.td,{children:"kanikoTaskDefAmd64"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"s3/Bucket"}),(0,r.jsx)(s.td,{children:"defang-build"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"s3/BucketPublicAccessBlock"}),(0,r.jsx)(s.td,{children:"defang-build-block"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"ecs/Cluster"}),(0,r.jsx)(s.td,{children:"cluster"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"ecs/ClusterCapacityProviders"}),(0,r.jsx)(s.td,{children:"cluster-capacity-providers"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"ec2/SecurityGroup"}),(0,r.jsx)(s.td,{children:"project1_app-sg"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"ec2/SecurityGroup"}),(0,r.jsx)(s.td,{children:"bootstrap"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"ec2/VpcDhcpOptions"}),(0,r.jsx)(s.td,{children:"dhcp-options"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"cloudwatch/LogGroup"}),(0,r.jsx)(s.td,{children:"logs"})]})]})]})]})}function h(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,s,t)=>{t.d(s,{R:()=>d,x:()=>c});var r=t(6540);const n={},i=r.createContext(n);function d(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);