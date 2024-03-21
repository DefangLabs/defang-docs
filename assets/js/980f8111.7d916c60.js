"use strict";(self.webpackChunkdefang_docs=self.webpackChunkdefang_docs||[]).push([[1516],{5884:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var t=i(7624),o=i(2172);const l={title:"Build and deploy using Pulumi",sidebar_position:400},r="Deploy using Pulumi",s={id:"tutorials/deploy-using-pulumi",title:"Build and deploy using Pulumi",description:"Installing Dependencies",source:"@site/docs/tutorials/deploy-using-pulumi.mdx",sourceDirName:"tutorials",slug:"/tutorials/deploy-using-pulumi",permalink:"/docs/tutorials/deploy-using-pulumi",draft:!1,unlisted:!1,editUrl:"https://github.com/defang-io/defang-docs/tree/main/docs/tutorials/deploy-using-pulumi.mdx",tags:[],version:"current",sidebarPosition:400,frontMatter:{title:"Build and deploy using Pulumi",sidebar_position:400},sidebar:"docsSidebar",previous:{title:"Deploy pre-built container",permalink:"/docs/tutorials/deploy-container-using-the-cli"},next:{title:"CLI Docs",permalink:"/docs/category/cli-docs"}},a={},d=[{value:"Installing Dependencies",id:"installing-dependencies",level:2},{value:"Project Directory Setup",id:"project-directory-setup",level:2},{value:"Initialize the Project",id:"initialize-the-project",level:2},{value:"Install the Defang Provider",id:"install-the-defang-provider",level:2},{value:"Write the Pulumi Code",id:"write-the-pulumi-code",level:2},{value:"Deploy to Defang",id:"deploy-to-defang",level:2},{value:"Monitor the Deployment",id:"monitor-the-deployment",level:2},{value:"Logging Into Minio",id:"logging-into-minio",level:2},{value:"Clean Up",id:"clean-up",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"deploy-using-pulumi",children:"Deploy using Pulumi"}),"\n",(0,t.jsx)(n.h2,{id:"installing-dependencies",children:"Installing Dependencies"}),"\n",(0,t.jsxs)(n.p,{children:["Make sure to install the ",(0,t.jsx)(n.a,{href:"https://www.pulumi.com/docs/install/",children:"Pulumi CLI"})," and the ",(0,t.jsx)(n.a,{href:"/docs/getting-started/installing",children:"Defang CLI"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Make sure you are logged into the ",(0,t.jsx)(n.a,{href:"/docs/getting-started/authenticating",children:"Defang CLI"}),". Don't worry about the Pulumi CLI for now."]}),"\n",(0,t.jsx)(n.h2,{id:"project-directory-setup",children:"Project Directory Setup"}),"\n",(0,t.jsx)(n.p,{children:"Create a new directory for your project and navigate to it."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"mkdir project && cd project\n"})}),"\n",(0,t.jsx)(n.p,{children:"If you're familiar with Pulumi and/or are already logged in with the Pulumi CLI, you can skip the next step."}),"\n",(0,t.jsx)(n.p,{children:'If you are new to pulumi and/or don\'t have an account, you can "login" to the filesystem by running the following command:'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"pulumi login file://./\n"})}),"\n",(0,t.jsx)(n.p,{children:"This will make the Pulumi CLI store the state of your infrastructure in the current directory."}),"\n",(0,t.jsx)(n.h2,{id:"initialize-the-project",children:"Initialize the Project"}),"\n",(0,t.jsx)(n.p,{children:"Run the following command to set your encryption passphrase for this terminal session:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'export PULUMI_CONFIG_PASSPHRASE="super-secure-passphrase"\n'})}),"\n",(0,t.jsx)(n.p,{children:"Now let's initialize the Pulumi project:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"pulumi new typescript -y --force\n"})}),"\n",(0,t.jsxs)(n.p,{children:["This will create a new Pulumi project in the current directory and will create a Pulumi stack called ",(0,t.jsx)(n.code,{children:"dev"})," by default. We use the ",(0,t.jsx)(n.code,{children:"--force"})," flag because the directory isn't empty (we created a folder when we logged in with the Pulumi CLI)."]}),"\n",(0,t.jsxs)(n.p,{children:["Run the following command to add to the ",(0,t.jsx)(n.code,{children:".gitignore"})," file:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'echo ".pulumi" >> .gitignore\n'})}),"\n",(0,t.jsx)(n.h2,{id:"install-the-defang-provider",children:"Install the Defang Provider"}),"\n",(0,t.jsx)(n.p,{children:"Run the following command to install the Defang provider:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm install @defang-io/pulumi-defang\n"})}),"\n",(0,t.jsx)(n.h2,{id:"write-the-pulumi-code",children:"Write the Pulumi Code"}),"\n",(0,t.jsxs)(n.p,{children:["Your ",(0,t.jsx)(n.code,{children:"index.ts"})," file should look like this:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import * as defang from '@defang-io/pulumi-defang/lib';\n\nexport const service = new defang.DefangService('minio', {\n    name: 'minio',\n    image: 'quay.io/minio/minio',\n    // starts the server with the console address set to :9001\n    command: ['server', '--console-address', ':9001', '/data'],\n    // Set the root username\n    environment: {\n        MINIO_ROOT_USER: 'minio',\n    },\n    secrets: [\n        // Set the root password as a secret which will be encrypted at rest\n        {\n            source: 'MINIO_ROOT_PASSWORD',\n            value: 'minio123',\n        },\n    ],\n    // Run a healthcheck every 30 seconds\n    healthcheck: {\n        test: ['CMD', 'curl', 'http://localhost:9000/minio/health/live'],\n        interval: 30,\n        timeout: 5,\n        retries: 3,\n    },\n    // Expose the server on port 9000 and the console on port 9001\n    ports: [\n        {\n            target: 9000,\n            protocol: 'http',\n            mode: 'ingress',\n        },\n        {\n            target: 9001,\n            protocol: 'http',\n            mode: 'ingress',\n        },\n    ],\n});\n"})}),"\n",(0,t.jsx)(n.h2,{id:"deploy-to-defang",children:"Deploy to Defang"}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsxs)(n.p,{children:["At the time of writing, the Defang Pulumi Provider only works with ",(0,t.jsx)(n.a,{href:"/docs/concepts/defang-playground",children:"Defang Playground"}),". We are working on ",(0,t.jsx)(n.a,{href:"/docs/concepts/defang-byoc",children:"BYOC"})," support."]})}),"\n",(0,t.jsx)(n.p,{children:"Run the following command to deploy your service:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"pulumi up --stack=dev\n"})}),"\n",(0,t.jsx)(n.h2,{id:"monitor-the-deployment",children:"Monitor the Deployment"}),"\n",(0,t.jsx)(n.p,{children:"You can monitor the deployment by running the following command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"defang tail --name minio\n"})}),"\n",(0,t.jsx)(n.h2,{id:"logging-into-minio",children:"Logging Into Minio"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.a,{href:"/docs/concepts/defang-playground",children:"Defang Playground"})," will give you a domain, which you can obtain by running the following command:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"defang ls | grep 'minio.*9001'\n"})}),"\n",(0,t.jsxs)(n.p,{children:["If you navigate to the domain in your browser, you will be prompted to log in. Use the username ",(0,t.jsx)(n.code,{children:"minio"})," and the password ",(0,t.jsx)(n.code,{children:"minio123"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"clean-up",children:"Clean Up"}),"\n",(0,t.jsx)(n.p,{children:"To clean up the deployment, run the following command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"pulumi destroy --stack=dev\n"})})]})}function u(e={}){const{wrapper:n}={...(0,o.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},2172:(e,n,i)=>{i.d(n,{I:()=>s,M:()=>r});var t=i(1504);const o={},l=t.createContext(o);function r(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);