"use strict";(self.webpackChunkdefang_docs=self.webpackChunkdefang_docs||[]).push([[396],{5232:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var i=t(7624),s=t(2172);const o={title:"Deploy a GPU-powered application",sidebar_position:500},r="Deploy a GPU-powered application with Defang",a={id:"tutorials/deploy-with-gpu",title:"Deploy a GPU-powered application",description:"This tutorial guides you to create and deploy a GPU-powered application on AWS using Defang and Mistral. We will walk you through the whole deployment process based on this Deploying Mistral with vLLM sample.",source:"@site/docs/tutorials/deploy-with-gpu.mdx",sourceDirName:"tutorials",slug:"/tutorials/deploy-with-gpu",permalink:"/docs/tutorials/deploy-with-gpu",draft:!1,unlisted:!1,editUrl:"https://github.com/DefangLabs/defang-docs/tree/main/docs/tutorials/deploy-with-gpu.mdx",tags:[],version:"current",sidebarPosition:500,frontMatter:{title:"Deploy a GPU-powered application",sidebar_position:500},sidebar:"docsSidebar",previous:{title:"Build and deploy using Pulumi",permalink:"/docs/tutorials/deploy-using-pulumi"},next:{title:"How to use your own domain",permalink:"/docs/tutorials/use-your-own-domain-name"}},l={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"AWS Account with GPU Access",id:"aws-account-with-gpu-access",level:3},{value:"HuggingFace Token",id:"huggingface-token",level:3},{value:"Step 1: Clone the sample project",id:"step-1-clone-the-sample-project",level:2},{value:"Step 2: Check your Defang BYOC settings",id:"step-2-check-your-defang-byoc-settings",level:2},{value:"Step 2: Prepare your Environment",id:"step-2-prepare-your-environment",level:2},{value:"Step 3: Explore the Compose File",id:"step-3-explore-the-compose-file",level:2},{value:"The Mistral Service",id:"the-mistral-service",level:3},{value:"The UI Service",id:"the-ui-service",level:3},{value:"Step 4: Deploy to Your Own AWS Account with Defang",id:"step-4-deploy-to-your-own-aws-account-with-defang",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"deploy-a-gpu-powered-application-with-defang",children:"Deploy a GPU-powered application with Defang"}),"\n",(0,i.jsxs)(n.p,{children:["This tutorial guides you to create and deploy a GPU-powered application on AWS using Defang and Mistral. We will walk you through the whole deployment process based on this ",(0,i.jsx)(n.a,{href:"https://github.com/DefangLabs/defang/tree/main/samples/other/vllm",children:"Deploying Mistral with vLLM"})," sample."]}),"\n",(0,i.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/kynFa2zU7hQ?si=qdV0xa6vkhMFJ6qv",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:!0}),"\n",(0,i.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsx)(n.h3,{id:"aws-account-with-gpu-access",children:"AWS Account with GPU Access"}),"\n",(0,i.jsxs)(n.p,{children:["For any of this to work, you'll need to have access to GPU instances in your AWS account. To do that you'll need to go to the \"",(0,i.jsx)(n.a,{href:"https://console.aws.amazon.com/servicequotas/home",children:"Service Quotas"}),'" console in your AWS account. From there you can request access to spot GPU instances. You\'ll need to request 8 or more because the value is per vCPU and the smallest GPU instance has 8 vCPUs. The instance types you\'re requesting are "All G and VT spot instances".']}),"\n",(0,i.jsx)(n.admonition,{title:"Timing",type:"warning",children:(0,i.jsx)(n.p,{children:"This process can take a few days for AWS to approve."})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Service Quotas console screenshot",src:t(884).c+"",width:"1820",height:"666"})}),"\n",(0,i.jsx)(n.h3,{id:"huggingface-token",children:"HuggingFace Token"}),"\n",(0,i.jsxs)(n.p,{children:["This sample requires a HugoingFace token to download the model. You can get a token by signing up at ",(0,i.jsx)(n.a,{href:"https://huggingface.co/join",children:"HuggingFace"})," and then going to ",(0,i.jsx)(n.a,{href:"https://huggingface.co/settings/tokens",children:"your settings"})," to get your token."]}),"\n",(0,i.jsx)(n.h2,{id:"step-1-clone-the-sample-project",children:"Step 1: Clone the sample project"}),"\n",(0,i.jsxs)(n.p,{children:["You'll need to clone ",(0,i.jsx)(n.a,{href:"https://github.com/DefangLabs/defang/tree/main/samples/other/vllm",children:"this sample"})," to go through this tutorial."]}),"\n",(0,i.jsxs)(n.h2,{id:"step-2-check-your-defang-byoc-settings",children:["Step 2: Check your ",(0,i.jsx)(n.a,{href:"/docs/concepts/defang-byoc",children:"Defang BYOC"})," settings"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Make sure you ",(0,i.jsx)(n.a,{href:"/docs/getting-started/installing",children:"install the latest version of the Defang CLI"})]}),"\n",(0,i.jsxs)(n.li,{children:["Then, make sure you have properly ",(0,i.jsx)(n.a,{href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html",children:"authenticated your AWS account"}),". The Defang CLI makes use of AWS environment variables like ",(0,i.jsx)(n.code,{children:"AWS_PROFILE"}),", ",(0,i.jsx)(n.code,{children:"AWS_REGION"}),", ",(0,i.jsx)(n.code,{children:"AWS_ACCESS_KEY_ID"}),", and ",(0,i.jsx)(n.code,{children:"AWS_SECRET_ACCESS_KEY"}),", so make sure the correct values are set for those."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"If you use the AWS CLI, you can verify that your are authenticated against AWS using the following command (note that the AWS CLI itself is not required to use the defang cli in BYOC mode):"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"aws sts get-caller-identity\n"})}),"\n",(0,i.jsx)(n.h2,{id:"step-2-prepare-your-environment",children:"Step 2: Prepare your Environment"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Log into your Defang account"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"defang login\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Set the HuggingFace token using the ",(0,i.jsx)(n.code,{children:"defang config"})," command"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"defang config set --name HF_TOKEN\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/concepts/configuration",children:"Configuration"})," stores your sensitive information such as API keys, passwords, and other credentials for you."]}),"\n",(0,i.jsx)(n.h2,{id:"step-3-explore-the-compose-file",children:"Step 3: Explore the Compose File"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"compose.yml"})," file is where you define your services and their configurations."]}),"\n",(0,i.jsx)(n.h3,{id:"the-mistral-service",children:"The Mistral Service"}),"\n",(0,i.jsx)(n.p,{children:"In there you'll see the configuration we're using to deploy the Mistral model. We've highlighted some of the key aspects."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'services:\n    mistral:\n        // highlight-next-line\n        image: ghcr.io/mistralai/mistral-src/vllm:latest\n        ports:\n            - mode: host\n            - target: 8000\n        // highlight-next-line\n        command: ["--host","0.0.0.0","--model","TheBloke/Mistral-7B-Instruct-v0.2-AWQ","--quantization","awq","--dtype","auto","--tensor-parallel-size","1","--gpu-memory-utilization",".95","--max-model-len","8000"]\n        deploy:\n            resources:\n                reservations:\n                    cpus: \'2.0\'\n                    memory: 8192M\n                    devices:\n                    // highlight-next-line\n                        - capabilities: ["gpu"]\n            healthcheck:\n                test: ["CMD","curl","http://localhost:8000/v1/models"]\n                interval: 5m\n                timeout: 30s\n                retries: 10\n            // highlight-start\n            environment:\n              - HF_TOKEN\n            // highlight-end\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Let's break it down."})}),"\n",(0,i.jsxs)(n.p,{children:["We start with the latest vLLM docker image provided by ",(0,i.jsx)(n.a,{href:"https://docs.mistral.ai/self-deployment/vllm/",children:"Mistral AI"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"mistral:\n    image: ghcr.io/mistralai/mistral-src/vllm:latest\n"})}),"\n",(0,i.jsx)(n.p,{children:"We specify that we require a GPU to run our application."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"deploy:\n    resources:\n        reservations:\n            cpus: '2.0'\n            memory: 8192M\n            devices:\n                - capabilities: [\"gpu\"]\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The Mistral model will be downloaded from HuggingFace. We need to have a HuggingFace Token to enable the installation, so we specify that we need to get the ",(0,i.jsx)(n.code,{children:"HF_TOKEN"})," configuration value from Defang."]}),"\n",(0,i.jsxs)(n.p,{children:["Specifying the ",(0,i.jsx)(n.code,{children:"HF_TOKEN"})," in the ",(0,i.jsx)(n.code,{children:"environment"})," section of the service in the ",(0,i.jsx)(n.code,{children:"compose.yml"})," file tells Defang to fetch the value from the encrypted configuration store."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"environment:\n    - HF_TOKEN\n"})}),"\n",(0,i.jsx)(n.h3,{id:"the-ui-service",children:"The UI Service"}),"\n",(0,i.jsx)(n.p,{children:"In this sample we also provide a simple UI to interact with the endpoint created by vLLM. The UI service is a Next.js application that runs on port 3000."}),"\n",(0,i.jsx)(n.admonition,{title:"Networking",type:"tip",children:(0,i.jsxs)(n.p,{children:["You can see here how Defang's ",(0,i.jsx)(n.a,{href:"/docs/concepts/networking",children:"networking"})," works. The ",(0,i.jsx)(n.code,{children:"mistral"})," service is available at ",(0,i.jsx)(n.code,{children:"http://mistral:8000"}),", exactly as it would be in a local ",(0,i.jsx)(n.code,{children:"docker-compose"})," environment."]})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'  ui:\n    restart: unless-stopped\n    build:\n      context: ui\n      dockerfile: Dockerfile\n    ports:\n      - mode: ingress\n        target: 3000\n    deploy:\n      resources:\n        reservations:\n          memory: 256M\n    healthcheck:\n      test: ["CMD","wget","--spider","http://localhost:3000"]\n      interval: 10s\n      timeout: 2s\n      retries: 10\n    environment:\n      // highlight-next-line\n      - OPENAI_BASE_URL=http://mistral:8000/v1/\n'})}),"\n",(0,i.jsx)(n.h2,{id:"step-4-deploy-to-your-own-aws-account-with-defang",children:"Step 4: Deploy to Your Own AWS Account with Defang"}),"\n",(0,i.jsx)(n.p,{children:"Run the following command to deploy your service:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"defang compose up\n"})})]})}function d(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},884:(e,n,t)=>{t.d(n,{c:()=>i});const i=t.p+"assets/images/quotas-13a080a743e5c657b732b08781925db5.png"},2172:(e,n,t)=>{t.d(n,{I:()=>a,M:()=>r});var i=t(1504);const s={},o=i.createContext(s);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);