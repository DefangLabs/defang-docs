"use strict";(self.webpackChunkdefang_docs=self.webpackChunkdefang_docs||[]).push([[8070],{8614:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>a});var o=s(4848),i=s(8453);const r={sidebar_position:600,title:"FAQ",description:"Frequently asked questions about Defang."},t="FAQ",d={id:"faq",title:"FAQ",description:"Frequently asked questions about Defang.",source:"@site/docs/faq.md",sourceDirName:".",slug:"/faq",permalink:"/docs/faq",draft:!1,unlisted:!1,editUrl:"https://github.com/DefangLabs/defang-docs/tree/main/docs/faq.md",tags:[],version:"current",sidebarPosition:600,frontMatter:{sidebar_position:600,title:"FAQ",description:"Frequently asked questions about Defang."},sidebar:"docsSidebar",previous:{title:"Common Error Messages",permalink:"/docs/faq/warnings-errors"},next:{title:"Samples",permalink:"/docs/samples"}},l={},a=[{value:"Which cloud/region is the app being deployed to?",id:"which-cloudregion-is-the-app-being-deployed-to",level:3},{value:"Can I bring my own AWS or other cloud account?",id:"can-i-bring-my-own-aws-or-other-cloud-account",level:3},{value:"On AWS, can I deploy to services such as EC2, EKS, or Lambda?",id:"on-aws-can-i-deploy-to-services-such-as-ec2-eks-or-lambda",level:3},{value:"Can I access AWS storage services such as S3 or database services such as RDS? How?",id:"can-i-access-aws-storage-services-such-as-s3-or-database-services-such-as-rds-how",level:3},{value:"Can I run production apps with Defang?",id:"can-i-run-production-apps-with-defang",level:3},{value:"Does Defang support blue/green deployments?",id:"does-defang-support-bluegreen-deployments",level:3},{value:"Does Defang support rolling deployments?",id:"does-defang-support-rolling-deployments",level:3},{value:"Can I cancel a deployment once it has started?",id:"can-i-cancel-a-deployment-once-it-has-started",level:3},{value:"Will deploying a new version of my app cause downtime?",id:"will-deploying-a-new-version-of-my-app-cause-downtime",level:3},{value:"Can I deploy multiple services at once?",id:"can-i-deploy-multiple-services-at-once",level:3},{value:"Can I deploy a service that depends on another service?",id:"can-i-deploy-a-service-that-depends-on-another-service",level:3},{value:"Do you plan to support other clouds?",id:"do-you-plan-to-support-other-clouds",level:3},{value:"I&#39;m having trouble running the binary on my Mac. What should I do?",id:"im-having-trouble-running-the-binary-on-my-mac-what-should-i-do",level:3},{value:"Warnings",id:"warnings",level:2},{value:"&quot;The folder is not empty. Files may be overwritten.&quot;",id:"the-folder-is-not-empty-files-may-be-overwritten",level:3},{value:"&quot;environment variable not found&quot;",id:"environment-variable-not-found",level:3},{value:"&quot;Unsupported platform&quot;",id:"unsupported-platform",level:3},{value:"&quot;not logged in&quot;",id:"not-logged-in",level:3},{value:"&quot;No port mode was specified; assuming &#39;host&#39;&quot;",id:"no-port-mode-was-specified-assuming-host",level:3},{value:"&quot;Published ports are not supported in ingress mode; assuming &#39;host&#39;&quot;",id:"published-ports-are-not-supported-in-ingress-mode-assuming-host",level:3},{value:"&quot;TCP ingress is not supported; assuming HTTP&quot;",id:"tcp-ingress-is-not-supported-assuming-http",level:3},{value:"&quot;unsupported compose directive&quot;",id:"unsupported-compose-directive",level:3},{value:"&quot;no reservations specified; using limits as reservations&quot;",id:"no-reservations-specified-using-limits-as-reservations",level:3},{value:"&quot;ingress port without healthcheck defaults to GET / HTTP/1.1&quot;",id:"ingress-port-without-healthcheck-defaults-to-get--http11",level:3},{value:"&quot;missing memory reservation; specify deploy.resources.reservations.memory to avoid out-of-memory errors&quot;",id:"missing-memory-reservation-specify-deployresourcesreservationsmemory-to-avoid-out-of-memory-errors",level:3},{value:"&quot;The build context contains more than 10 files&quot;",id:"the-build-context-contains-more-than-10-files",level:3},{value:"&quot;AWS provider was selected, but AWS environment variables are not set&quot;",id:"aws-provider-was-selected-but-aws-environment-variables-are-not-set",level:3},{value:"&quot;Using Defang provider, but AWS environment variables were detected&quot;",id:"using-defang-provider-but-aws-environment-variables-were-detected",level:3},{value:"Errors",id:"errors",level:2},{value:"&quot;Stack:\u2026 is in UPDATE_COMPLETE_CLEANUP_IN_PROGRESS state and cannot be updated&quot;",id:"stack-is-in-update_complete_cleanup_in_progress-state-and-cannot-be-updated",level:3},{value:"&quot;invalid healthcheck: ingress ports require an HTTP healthcheck on <code>localhost</code>.",id:"invalid-healthcheck-ingress-ports-require-an-http-healthcheck-on-localhost",level:3},{value:"The build aborted with OutOfMemoryError: Container killed due to memory usage",id:"the-build-aborted-with-outofmemoryerror-container-killed-due-to-memory-usage",level:3}];function c(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"faq",children:"FAQ"}),"\n",(0,o.jsx)(n.h3,{id:"which-cloudregion-is-the-app-being-deployed-to",children:"Which cloud/region is the app being deployed to?"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["In the ",(0,o.jsx)(n.a,{href:"/docs/concepts/defang-playground",children:"Defang Playground"})," the app is deployed to AWS ",(0,o.jsx)(n.code,{children:"us-west-2"}),". In the ",(0,o.jsx)(n.a,{href:"/docs/concepts/defang-byoc",children:"Defang BYOC"})," model, the region is determined by your ",(0,o.jsx)(n.a,{href:"/docs/category/providers",children:"Defang BYOC Provider"})," settings."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"can-i-bring-my-own-aws-or-other-cloud-account",children:"Can I bring my own AWS or other cloud account?"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Yes! Defang makes it easy to deploy your application to your own cloud account. Please check out the ",(0,o.jsx)(n.a,{href:"/docs/concepts/defang-byoc",children:"Defang BYOC"})," documentation for more information."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"on-aws-can-i-deploy-to-services-such-as-ec2-eks-or-lambda",children:"On AWS, can I deploy to services such as EC2, EKS, or Lambda?"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"The current release includes support for containers only, deployed to ECS. We are still exploring how to support additional execution models such as VMs and functions-as-a-service. However, using our Pulumi provider, it is possible to combine Defang services with other native AWS resources."}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"can-i-access-aws-storage-services-such-as-s3-or-database-services-such-as-rds-how",children:"Can I access AWS storage services such as S3 or database services such as RDS? How?"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Yes, you can access AWS services in the AWS Dashboard as you normally would when you are ",(0,o.jsx)(n.a,{href:"./providers/aws",children:"deploying to your AWS account"})," using Defang. In fact, you can access whatever other resources exist in the cloud account you are using for ",(0,o.jsx)(n.a,{href:"/docs/concepts/defang-byoc",children:"Defang BYOC"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"can-i-run-production-apps-with-defang",children:"Can I run production apps with Defang?"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Yes! Defang makes it easy to deploy your app on production-ready infrastructure in your own cloud account. For example, you can deploy your app to AWS with ",(0,o.jsx)(n.code,{children:"defang up --provider=aws --mode=production"}),". Check out your preferred cloud provider on ",(0,o.jsx)(n.a,{href:"/docs/concepts/defang-byoc",children:"Defang BYOC"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"does-defang-support-bluegreen-deployments",children:"Does Defang support blue/green deployments?"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Defang does not currently support Blue/Green deploys, but it does support rolling updates with the ",(0,o.jsx)(n.code,{children:"production"})," deployment mode. ",(0,o.jsx)(n.code,{children:"defang up --mode=production"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"does-defang-support-rolling-deployments",children:"Does Defang support rolling deployments?"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Yes! Defang supports rolling updates with the ",(0,o.jsx)(n.code,{children:"production"})," deployment mode. ",(0,o.jsx)(n.code,{children:"defang up --mode=production"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"can-i-cancel-a-deployment-once-it-has-started",children:"Can I cancel a deployment once it has started?"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"No. Once a deployment has started, it cannot be canceled. However, you can always deploy a new version of your app which will replace the current deployment."}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"will-deploying-a-new-version-of-my-app-cause-downtime",children:"Will deploying a new version of my app cause downtime?"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["If you have deployed your application with the ",(0,o.jsx)(n.code,{children:"--mode=production"})," flag, Defang will use the ",(0,o.jsx)(n.em,{children:"production"})," deployment mode. This mode will provision your app with multiple replicas and will perform a rolling update to ensure zero downtime. If you use another deployment mode, you may experience downtime during the deployment, as Defang will not provision multiple replicas to save cost."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"can-i-deploy-multiple-services-at-once",children:"Can I deploy multiple services at once?"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Yes! You can deploy multiple services at once by defining them in a single compose.yaml file. When you run ",(0,o.jsx)(n.code,{children:"defang compose up"}),", Defang will deploy all the services defined in the file at once."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"can-i-deploy-a-service-that-depends-on-another-service",children:"Can I deploy a service that depends on another service?"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Defang does not currently support service dependencies. All services will be deployed simultaneously. Defang will however run multiple healthchecks before marking a service as healthy and spinning down any previously deployed services when using the ",(0,o.jsx)(n.code,{children:"production"})," deployment mode."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"do-you-plan-to-support-other-clouds",children:"Do you plan to support other clouds?"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["While we currently support ",(0,o.jsx)(n.a,{href:"./concepts/defang-byoc#aws",children:"AWS"})," for production and ",(0,o.jsx)(n.a,{href:"./concepts/defang-byoc#digitalocean",children:"DigitalOcean"})," in preview, we plan to support other clouds in future releases, such as ",(0,o.jsx)(n.a,{href:"/docs/providers/gcp",children:"GCP"})," and ",(0,o.jsx)(n.a,{href:"/docs/providers/azure",children:"Azure"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"im-having-trouble-running-the-binary-on-my-mac-what-should-i-do",children:"I'm having trouble running the binary on my Mac. What should I do?"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["MacOS users will need to allow the binary to run due to security settings:","\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Attempt to run the binary. You'll see a security prompt preventing you from running it."}),"\n",(0,o.jsx)(n.li,{children:"Go to System Preferences > Privacy & Security > General."}),"\n",(0,o.jsx)(n.li,{children:"In the 'Allow applications downloaded from:' section, you should see a message about Defang being blocked. Click 'Open Anyway'."}),"\n",(0,o.jsx)(n.li,{children:'Alternatively, select the option "App Store and identified developers" to allow all applications from the App Store and identified developers to run.'}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"warnings",children:"Warnings"}),"\n",(0,o.jsx)(n.h3,{id:"the-folder-is-not-empty-files-may-be-overwritten",children:'"The folder is not empty. Files may be overwritten."'}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["This message is displayed when you run ",(0,o.jsx)(n.code,{children:"defang generate"})," and the target folder is not empty. If you proceed, Defang will overwrite any existing files with the same name. If you want to keep the existing files, you should move them to a different folder before running ",(0,o.jsx)(n.code,{children:"defang generate"})," or pick a different target folder."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"environment-variable-not-found",children:'"environment variable not found"'}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["This message is displayed when you run ",(0,o.jsx)(n.code,{children:"defang compose up"})," and the Compose file references an environment variable that is not set. If you proceed, the environment variable will be empty in the container. If you want to set the environment variable, you should set it in the environment where you run ",(0,o.jsx)(n.code,{children:"defang compose up"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"unsupported-platform",children:'"Unsupported platform"'}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["This message is displayed when you run ",(0,o.jsx)(n.code,{children:"defang compose up"})," and the Compose file references a platform that is not supported by Defang."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"not-logged-in",children:'"not logged in"'}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["This message is displayed when you run ",(0,o.jsx)(n.code,{children:"defang compose config"})," but you are not logged in. The displayed configuration will be incomplete. If you want to see the complete configuration, you should log in first using ",(0,o.jsx)(n.code,{children:"defang login"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"no-port-mode-was-specified-assuming-host",children:"\"No port mode was specified; assuming 'host'\""}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["This message is displayed when you run ",(0,o.jsx)(n.code,{children:"defang compose up"})," and the Compose file declares a ",(0,o.jsx)(n.code,{children:"port"})," that does not specify a port ",(0,o.jsx)(n.code,{children:"mode"}),". By default, Defang will keep the port private. If you want to expose the port to the public internet, you should specify the ",(0,o.jsx)(n.code,{children:"mode"})," as ",(0,o.jsx)(n.code,{children:"ingress"}),":"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"services:\n  service1:\n    \u2026\n    ports:\n      - target: 80\n        mode: ingress\n"})}),"\n",(0,o.jsx)(n.h3,{id:"published-ports-are-not-supported-in-ingress-mode-assuming-host",children:"\"Published ports are not supported in ingress mode; assuming 'host'\""}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["This message is displayed when you run ",(0,o.jsx)(n.code,{children:"defang compose up"})," and the Compose file declares a ",(0,o.jsx)(n.code,{children:"port"})," with ",(0,o.jsx)(n.code,{children:"mode"})," set to ",(0,o.jsx)(n.code,{children:"ingress"})," and ",(0,o.jsx)(n.code,{children:"published"})," set to a port number. Defang does not support published ports in ingress mode. If you want to expose the port to the public internet, you should specify the ",(0,o.jsx)(n.code,{children:"mode"})," as ",(0,o.jsx)(n.code,{children:"ingress"})," and remove the ",(0,o.jsx)(n.code,{children:"published"})," setting."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"tcp-ingress-is-not-supported-assuming-http",children:'"TCP ingress is not supported; assuming HTTP"'}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["This message is displayed when you run ",(0,o.jsx)(n.code,{children:"defang compose up"})," and the Compose file declares a ",(0,o.jsx)(n.code,{children:"port"})," with ",(0,o.jsx)(n.code,{children:"mode"})," set to ",(0,o.jsx)(n.code,{children:"ingress"})," and ",(0,o.jsx)(n.code,{children:"protocol"})," set to ",(0,o.jsx)(n.code,{children:"tcp"}),". Defang does not support arbitrary TCP ingress and will assume the port is used for HTTP traffic. To silence the warning, remove the ",(0,o.jsx)(n.code,{children:"protocol"})," setting."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"unsupported-compose-directive",children:'"unsupported compose directive"'}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["This message is displayed when you run ",(0,o.jsx)(n.code,{children:"defang compose up"})," and the Compose file declares a directive that is not supported by Defang. The deployment will continue, but the unsupported directive will be ignored, which may cause unexpected behavior."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"no-reservations-specified-using-limits-as-reservations",children:'"no reservations specified; using limits as reservations"'}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["This message is displayed when you run ",(0,o.jsx)(n.code,{children:"defang compose up"})," and the Compose file declares a ",(0,o.jsx)(n.code,{children:"resource"})," with ",(0,o.jsx)(n.code,{children:"limits"})," but no ",(0,o.jsx)(n.code,{children:"reservations"}),". Defang will use the ",(0,o.jsx)(n.code,{children:"limits"})," as ",(0,o.jsx)(n.code,{children:"reservations"})," to ensure the container has enough resources. Specify ",(0,o.jsx)(n.code,{children:"reservations"})," if you want to silence the warning or reserve a different amount of resources:"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"services:\n  service1:\n    \u2026\n    deploy:\n      resources:\n        reservations:\n          cpus: 0.5\n          memory: 512MB\n"})}),"\n",(0,o.jsx)(n.h3,{id:"ingress-port-without-healthcheck-defaults-to-get--http11",children:'"ingress port without healthcheck defaults to GET / HTTP/1.1"'}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["This message is displayed when you run ",(0,o.jsx)(n.code,{children:"defang compose up"})," and the Compose file declares an ",(0,o.jsx)(n.code,{children:"ingress"})," with a ",(0,o.jsx)(n.code,{children:"port"})," but no ",(0,o.jsx)(n.code,{children:"healthcheck"}),". Defang will assume the default healthcheck of ",(0,o.jsx)(n.code,{children:"GET / HTTP/1.1"})," to ensure the port is healthy. Specify a ",(0,o.jsx)(n.code,{children:"healthcheck"})," if you want to silence the warning or use a different healthcheck:"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'services:\n  service1:\n    \u2026\n    deploy:\n      healthcheck:\n        test: ["CMD", "curl", "-f", "http://localhost:80/health"]\n'})}),"\n",(0,o.jsx)(n.h3,{id:"missing-memory-reservation-specify-deployresourcesreservationsmemory-to-avoid-out-of-memory-errors",children:'"missing memory reservation; specify deploy.resources.reservations.memory to avoid out-of-memory errors"'}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["This message is displayed when you run ",(0,o.jsx)(n.code,{children:"defang compose up"})," and the Compose file doesn't specify a ",(0,o.jsx)(n.code,{children:"memory"})," reservation. If available, Defang will use the ",(0,o.jsx)(n.code,{children:"memory"})," limit as the ",(0,o.jsx)(n.code,{children:"memory"})," reservation. Specify a ",(0,o.jsx)(n.code,{children:"memory"})," reservation if you want to silence the warning or reserve a different amount of memory:"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"services:\n  service1:\n    \u2026\n    deploy:\n      resources:\n        reservations:\n          memory: 512MB\n"})}),"\n",(0,o.jsx)(n.h3,{id:"the-build-context-contains-more-than-10-files",children:'"The build context contains more than 10 files"'}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["This message is displayed when you run ",(0,o.jsx)(n.code,{children:"defang compose up"})," and the Compose file declares a ",(0,o.jsx)(n.code,{children:"build"})," with a ",(0,o.jsx)(n.code,{children:"context"})," that contains more than 10 files. Ensure the context refers to the correct folder. Defang will use the ",(0,o.jsx)(n.code,{children:"context"})," as is, but you may experience slow build times. If you want to speed up the build, you should reduce the number of files in the ",(0,o.jsx)(n.code,{children:"context"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"aws-provider-was-selected-but-aws-environment-variables-are-not-set",children:'"AWS provider was selected, but AWS environment variables are not set"'}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["This message is displayed when you run ",(0,o.jsx)(n.code,{children:"defang compose up"})," with the ",(0,o.jsx)(n.code,{children:"--provider=aws"})," but none of the AWS environment variables were set. If you proceed, the deployment might fail, unless you have defined defined ",(0,o.jsx)(n.code,{children:"default"})," credentials in the AWS configuration files or are running on an AWS instance."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"using-defang-provider-but-aws-environment-variables-were-detected",children:'"Using Defang provider, but AWS environment variables were detected"'}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["This message is displayed when you run ",(0,o.jsx)(n.code,{children:"defang compose up"})," with the ",(0,o.jsx)(n.code,{children:"--provider=defang"})," but AWS environment variables were detected. The AWS environment variables will be ignored."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"errors",children:"Errors"}),"\n",(0,o.jsx)(n.h3,{id:"stack-is-in-update_complete_cleanup_in_progress-state-and-cannot-be-updated",children:'"Stack:\u2026 is in UPDATE_COMPLETE_CLEANUP_IN_PROGRESS state and cannot be updated"'}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["This happens if different version of the Defang CLI are used with the same AWS account. Each version one will try to update the CD stack to its version, back and forth. Make sure that all users have the same version of the CLI. Check the CLI version using ",(0,o.jsx)(n.code,{children:"defang version"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.h3,{id:"invalid-healthcheck-ingress-ports-require-an-http-healthcheck-on-localhost",children:['"invalid healthcheck: ingress ports require an HTTP healthcheck on ',(0,o.jsx)(n.code,{children:"localhost"}),"."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["This message is displayed when ",(0,o.jsx)(n.code,{children:"defang compose up"}),' tries to deploy a service with an "ingress" port, if the service does not have a ',(0,o.jsx)(n.code,{children:"healthcheck"})," which mentions ",(0,o.jsx)(n.code,{children:"localhost"}),". Defang routes a load balancer to your service's ingress ports, and the loadbalancer needs to be able to check the health of the service. To solve this issue, ask yourself these two questions:"]}),"\n"]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Should my service be public? It's common to declare your container's ports using the Compose file \"shorthand\" syntax (",(0,o.jsx)(n.code,{children:"1234:1234"}),"). This syntax can be understood as ",(0,o.jsx)(n.code,{children:"[HOST:]CONTAINER"}),". If your service is not intended to be public, you do not need to declare a HOST port. For example:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-diff",children:'   services:\n     my-service:\n       image: my-image\n       ports:\n-       - "1234:1234"\n+       - "1234"\n'})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Does my healthcheck include the string ",(0,o.jsx)(n.code,{children:"localhost"}),"? It is very common to define a healthcheck by using ",(0,o.jsx)(n.code,{children:"curl"})," or ",(0,o.jsx)(n.code,{children:"wget"})," to make a request to ",(0,o.jsx)(n.code,{children:"localhost"}),". So common, in fact, that Defang will look for the string ",(0,o.jsx)(n.code,{children:"localhost"})," in your healthcheck definition. For example, this healthcheck is valid:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:' healthcheck:\n   test: ["CMD", "curl", "-f", "http://localhost:1234/health"]\n'})}),"\n",(0,o.jsxs)(n.p,{children:["This healthcheck is not valid for ",(0,o.jsx)(n.code,{children:"ingress"})," ports:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:' healthcheck:\n   test: ["CMD", "./my-healthcheck"]\n'})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"the-build-aborted-with-outofmemoryerror-container-killed-due-to-memory-usage",children:"The build aborted with OutOfMemoryError: Container killed due to memory usage"}),"\n",(0,o.jsxs)(n.p,{children:["The image build might fail if the build process uses too much memory. The first thing to try is to limit the size of your project by excluding unnecessary files: the easiest way is to create a ",(0,o.jsx)(n.code,{children:".dockerignore"})," file that excludes irrelevatn files. Note that Defang will use a default ",(0,o.jsx)(n.code,{children:".dockerignore"})," file if you don't have one, but that default might not work for some projects and it's always better to make a ",(0,o.jsx)(n.code,{children:".dockerignore"})," file specific to your project."]}),"\n",(0,o.jsxs)(n.p,{children:["If that doesn't work, you can try to increase the memory available to the build process by adding a field ",(0,o.jsx)(n.code,{children:"shm_size"})," to the ",(0,o.jsx)(n.code,{children:"build"})," section in your ",(0,o.jsx)(n.code,{children:"compose.yaml"})," file:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"services:\n  service1:\n    build:\n      context: .\n      shm_size: 16g\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>d});var o=s(6540);const i={},r=o.createContext(i);function t(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);