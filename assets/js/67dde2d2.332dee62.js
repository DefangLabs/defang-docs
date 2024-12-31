"use strict";(self.webpackChunkdefang_docs=self.webpackChunkdefang_docs||[]).push([[6433],{7952:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>t,toc:()=>d});var s=o(4848),i=o(8453);const a={sidebar_position:600,title:"Frequently Asked Questions",description:"Frequently asked questions about Defang."},r="Frequently Asked Questions (FAQ)",t={id:"faq/questions",title:"Frequently Asked Questions",description:"Frequently asked questions about Defang.",source:"@site/docs/faq/questions.md",sourceDirName:"faq",slug:"/faq/questions",permalink:"/docs/faq/questions",draft:!1,unlisted:!1,editUrl:"https://github.com/DefangLabs/defang-docs/tree/main/docs/faq/questions.md",tags:[],version:"current",sidebarPosition:600,frontMatter:{sidebar_position:600,title:"Frequently Asked Questions",description:"Frequently asked questions about Defang."},sidebar:"docsSidebar",previous:{title:"FAQ",permalink:"/docs/category/faq"},next:{title:"Common Error Messages",permalink:"/docs/faq/warnings-errors"}},l={},d=[{value:"Deployment and Infrastructure",id:"deployment-and-infrastructure",level:2},{value:"Which cloud/region is the app being deployed to?",id:"which-cloudregion-is-the-app-being-deployed-to",level:3},{value:"Can I bring my own AWS or other cloud account?",id:"can-i-bring-my-own-aws-or-other-cloud-account",level:3},{value:"On AWS, can I deploy to services such as EC2, EKS, or Lambda?",id:"on-aws-can-i-deploy-to-services-such-as-ec2-eks-or-lambda",level:3},{value:"Can I access AWS storage services such as S3 or database services such as RDS? How?",id:"can-i-access-aws-storage-services-such-as-s3-or-database-services-such-as-rds-how",level:3},{value:"Do you plan to support other clouds?",id:"do-you-plan-to-support-other-clouds",level:3},{value:"Deployment Process",id:"deployment-process",level:2},{value:"Can I run production apps with Defang?",id:"can-i-run-production-apps-with-defang",level:3},{value:"Does Defang support blue/green deployments?",id:"does-defang-support-bluegreen-deployments",level:3},{value:"Does Defang support rolling deployments?",id:"does-defang-support-rolling-deployments",level:3},{value:"Does Defang support auto-scaling?",id:"does-defang-support-auto-scaling",level:3},{value:"Can I cancel a deployment once it has started?",id:"can-i-cancel-a-deployment-once-it-has-started",level:3},{value:"Will deploying a new version of my app cause downtime?",id:"will-deploying-a-new-version-of-my-app-cause-downtime",level:3},{value:"Can I deploy multiple services at once?",id:"can-i-deploy-multiple-services-at-once",level:3},{value:"Can I deploy a service that depends on another service?",id:"can-i-deploy-a-service-that-depends-on-another-service",level:3},{value:"Feature Comparisons",id:"feature-comparisons",level:2},{value:"Is Defang a run-time platform?",id:"is-defang-a-run-time-platform",level:3},{value:"What is the difference between Defang and platforms such as Vercel, fly.io, and Railway?",id:"what-is-the-difference-between-defang-and-platforms-such-as-vercel-flyio-and-railway",level:3},{value:"What is the difference between Defang and tools such as SST?",id:"what-is-the-difference-between-defang-and-tools-such-as-sst",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"I&#39;m having trouble running the binary on my Mac. What should I do?",id:"im-having-trouble-running-the-binary-on-my-mac-what-should-i-do",level:3},{value:"I&#39;m getting a warning/error. What does it mean?",id:"im-getting-a-warningerror-what-does-it-mean",level:3}];function c(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"frequently-asked-questions-faq",children:"Frequently Asked Questions (FAQ)"}),"\n",(0,s.jsx)(n.h2,{id:"deployment-and-infrastructure",children:"Deployment and Infrastructure"}),"\n",(0,s.jsx)(n.h3,{id:"which-cloudregion-is-the-app-being-deployed-to",children:"Which cloud/region is the app being deployed to?"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["In the ",(0,s.jsx)(n.a,{href:"/docs/concepts/defang-playground",children:"Defang Playground"}),", the app is deployed to AWS ",(0,s.jsx)(n.code,{children:"us-west-2"}),". In the ",(0,s.jsx)(n.a,{href:"/docs/concepts/defang-byoc",children:"Defang BYOC"})," model, the region is determined by your Defang BYOC ",(0,s.jsx)(n.a,{href:"/docs/category/providers",children:"Provider"})," settings."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"can-i-bring-my-own-aws-or-other-cloud-account",children:"Can I bring my own AWS or other cloud account?"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Yes! Defang makes it easy to deploy your application to your own cloud account. Please check out the ",(0,s.jsx)(n.a,{href:"/docs/concepts/defang-byoc",children:"Defang BYOC"})," documentation for more information."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"on-aws-can-i-deploy-to-services-such-as-ec2-eks-or-lambda",children:"On AWS, can I deploy to services such as EC2, EKS, or Lambda?"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The current release includes support for containers only, deployed to ECS. We are still exploring how to support additional execution models such as VMs and functions-as-a-service. However, using our Pulumi provider, it is possible to combine Defang services with other native AWS resources."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"can-i-access-aws-storage-services-such-as-s3-or-database-services-such-as-rds-how",children:"Can I access AWS storage services such as S3 or database services such as RDS? How?"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Yes! You can access AWS services in the AWS Dashboard as you normally would when you are ",(0,s.jsx)(n.a,{href:"/docs/providers/aws",children:"deploying to your AWS account"})," using Defang. In fact, you can access whatever other resources exist in the cloud account you are using for ",(0,s.jsx)(n.a,{href:"/docs/concepts/defang-byoc",children:"Defang BYOC"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"do-you-plan-to-support-other-clouds",children:"Do you plan to support other clouds?"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["While we currently support ",(0,s.jsx)(n.a,{href:"/docs/providers/aws",children:"AWS"})," for production, ",(0,s.jsx)(n.a,{href:"/docs/providers/gcp",children:"GCP"})," and ",(0,s.jsx)(n.a,{href:"/docs/providers/digitalocean",children:"DigitalOcean"})," are in preview with ",(0,s.jsx)(n.a,{href:"/blog/2024-12-04-launch-week",children:"Defang V1"}),". We plan to support other clouds, such as ",(0,s.jsx)(n.a,{href:"/docs/providers/azure",children:"Azure"}),", in future releases."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"deployment-process",children:"Deployment Process"}),"\n",(0,s.jsx)(n.h3,{id:"can-i-run-production-apps-with-defang",children:"Can I run production apps with Defang?"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Yes! Defang makes it easy to deploy your app on production-ready infrastructure in your own cloud account. For example, you can deploy your app to AWS with ",(0,s.jsx)(n.code,{children:"defang compose up --provider=aws --mode=production"}),". Check out your preferred cloud provider on ",(0,s.jsx)(n.a,{href:"/docs/concepts/defang-byoc",children:"Defang BYOC"})," and see our ",(0,s.jsx)(n.a,{href:"/docs/concepts/deployment-modes",children:"Deployment Modes"})," documentation for more information."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"does-defang-support-bluegreen-deployments",children:"Does Defang support blue/green deployments?"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Defang does not currently support blue/green deployments, but it does support rolling updates with the ",(0,s.jsx)(n.code,{children:"--mode=production"})," flag. See the ",(0,s.jsx)(n.a,{href:"/docs/concepts/deployment-modes",children:"Deployment Modes"})," documentation for more information."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"does-defang-support-rolling-deployments",children:"Does Defang support rolling deployments?"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Yes! Defang supports rolling updates with the ",(0,s.jsx)(n.code,{children:"--mode=production"})," flag. See the ",(0,s.jsx)(n.a,{href:"/docs/concepts/deployment-modes",children:"Deployment Modes"})," documentation for more information."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"does-defang-support-auto-scaling",children:"Does Defang support auto-scaling?"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["No. Defang does not currently support auto-scaling. However, you can check out the ",(0,s.jsx)(n.a,{href:"/docs/tutorials/scaling-your-services",children:"Scaling Your Services"})," tutorial to see how you can scale your services manually with Defang."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"can-i-cancel-a-deployment-once-it-has-started",children:"Can I cancel a deployment once it has started?"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"No. Once a deployment has started, it cannot be canceled. However, you can always deploy a new version of your app which will replace the current deployment."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"will-deploying-a-new-version-of-my-app-cause-downtime",children:"Will deploying a new version of my app cause downtime?"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["If you have deployed your application with the ",(0,s.jsx)(n.code,{children:"--mode=production"})," flag, Defang will use the ",(0,s.jsx)(n.em,{children:"production"})," deployment mode. This mode will perform a rolling update to ensure zero downtime. If you use another deployment mode, you may experience downtime during the deployment, as Defang will not provision multiple replicas to save cost. See the ",(0,s.jsx)(n.a,{href:"/docs/concepts/deployment-modes",children:"Deployment Modes"})," documentation for more information."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"can-i-deploy-multiple-services-at-once",children:"Can I deploy multiple services at once?"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Yes! You can deploy multiple services at once by defining them in a single compose.yaml file. When you run ",(0,s.jsx)(n.code,{children:"defang compose up"}),", Defang will deploy all the services defined in the file at once."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"can-i-deploy-a-service-that-depends-on-another-service",children:"Can I deploy a service that depends on another service?"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Defang does not currently support service dependencies. All services will be deployed simultaneously. Defang will however run multiple healthchecks before marking a service as healthy and spinning down any previously deployed services when using the ",(0,s.jsx)(n.code,{children:"production"})," deployment mode. See the ",(0,s.jsx)(n.a,{href:"/docs/concepts/deployment-modes",children:"Deployment Modes"})," documentation for more information."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"feature-comparisons",children:"Feature Comparisons"}),"\n",(0,s.jsx)(n.h3,{id:"is-defang-a-run-time-platform",children:"Is Defang a run-time platform?"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["No. Defang is not a run-time platform. Instead, it lets you host and run your application on a ",(0,s.jsx)(n.a,{href:"/docs/category/providers",children:"cloud provider"})," of your choice. You can think of it as a tool that makes it way easier to deploy to that cloud provider. We do provide ",(0,s.jsx)(n.a,{href:"/docs/concepts/defang-playground",children:"Defang Playground"}),", but it is meant to be used as a testing environment only."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"what-is-the-difference-between-defang-and-platforms-such-as-vercel-flyio-and-railway",children:"What is the difference between Defang and platforms such as Vercel, fly.io, and Railway?"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Defang is a tool that helps you get your application deployed to a ",(0,s.jsx)(n.a,{href:"/docs/category/providers",children:"cloud provider"})," of your choice, and it is not a platform. Unlike platforms, Defang does not host your application. We do provide ",(0,s.jsx)(n.a,{href:"/docs/concepts/defang-playground",children:"Defang Playground"}),", but it is meant to be used as a testing environment only."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"what-is-the-difference-between-defang-and-tools-such-as-sst",children:"What is the difference between Defang and tools such as SST?"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Defang is cloud-agnostic and language-agnostic, meaning that it is designed to work with different ",(0,s.jsx)(n.a,{href:"/docs/category/providers",children:"cloud providers"}),", and programming languages. Since Defang is not tied to just one cloud or language, this allows for greater flexibility in a wide range of cases. Another difference is that Defang follows the ",(0,s.jsx)(n.a,{href:"https://docs.docker.com/compose/compose-file/",children:"Compose specification"}),", allowing it to work smoothly with various container platforms such as Docker."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,s.jsx)(n.h3,{id:"im-having-trouble-running-the-binary-on-my-mac-what-should-i-do",children:"I'm having trouble running the binary on my Mac. What should I do?"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["MacOS users will need to allow the binary to run due to security settings:","\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Attempt to run the binary. You'll see a security prompt preventing you from running it."}),"\n",(0,s.jsx)(n.li,{children:"Go to System Preferences > Privacy & Security > General."}),"\n",(0,s.jsx)(n.li,{children:"In the 'Allow applications downloaded from:' section, you should see a message about Defang being blocked. Click 'Open Anyway'."}),"\n",(0,s.jsx)(n.li,{children:'Alternatively, select the option "App Store and identified developers" to allow all applications from the App Store and identified developers to run.'}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"im-getting-a-warningerror-what-does-it-mean",children:"I'm getting a warning/error. What does it mean?"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Please see the ",(0,s.jsx)(n.a,{href:"/docs/faq/warnings-errors",children:"Common Error Messages"})," page."]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>r,x:()=>t});var s=o(6540);const i={},a=s.createContext(i);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);