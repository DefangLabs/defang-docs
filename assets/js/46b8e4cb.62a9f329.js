"use strict";(self.webpackChunkdefang_docs=self.webpackChunkdefang_docs||[]).push([[9599],{753:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var o=n(4848),i=n(8453);const r={title:"Simplifying Deployment of AI Apps to the Cloud using Docker and Model Context Protocol",tags:["Cloud","NoDevOps","BYOC","GCP","DigitalOcean","AWS","CLI","AI","MCP","Model Context Protocol","Chatbot","Docker"],author:"Defang Team"},a=void 0,s={permalink:"/blog/2025/02/18/model-context-protocol",source:"@site/blog/2025-02-18-model-context-protocol.md",title:"Simplifying Deployment of AI Apps to the Cloud using Docker and Model Context Protocol",description:"mcp",date:"2025-02-18T00:00:00.000Z",formattedDate:"February 18, 2025",tags:[{label:"Cloud",permalink:"/blog/tags/cloud"},{label:"NoDevOps",permalink:"/blog/tags/no-dev-ops"},{label:"BYOC",permalink:"/blog/tags/byoc"},{label:"GCP",permalink:"/blog/tags/gcp"},{label:"DigitalOcean",permalink:"/blog/tags/digital-ocean"},{label:"AWS",permalink:"/blog/tags/aws"},{label:"CLI",permalink:"/blog/tags/cli"},{label:"AI",permalink:"/blog/tags/ai"},{label:"MCP",permalink:"/blog/tags/mcp"},{label:"Model Context Protocol",permalink:"/blog/tags/model-context-protocol"},{label:"Chatbot",permalink:"/blog/tags/chatbot"},{label:"Docker",permalink:"/blog/tags/docker"}],readingTime:6.54,hasTruncateMarker:!1,authors:[{name:"Defang Team"}],frontMatter:{title:"Simplifying Deployment of AI Apps to the Cloud using Docker and Model Context Protocol",tags:["Cloud","NoDevOps","BYOC","GCP","DigitalOcean","AWS","CLI","AI","MCP","Model Context Protocol","Chatbot","Docker"],author:"Defang Team"},unlisted:!1,nextItem:{title:"January 2025 Defang Compose Update",permalink:"/blog/2025/02/07/january-product-updates"}},c={authorsImageUrls:[void 0]},l=[{value:"Sample Model Context Protocol Time Chatbot Application",id:"sample-model-context-protocol-time-chatbot-application",level:2},{value:"General Overview",id:"general-overview",level:3},{value:"Architecture",id:"architecture",level:3},{value:"Setting Up Dockerfiles",id:"setting-up-dockerfiles",level:3},{value:"Compose File",id:"compose-file",level:3},{value:"Testing and Running on Local Machine",id:"testing-and-running-on-local-machine",level:3},{value:"Deploying to the Cloud",id:"deploying-to-the-cloud",level:3}];function h(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"mcp",src:n(4960).A+"",width:"2108",height:"1196"})}),"\n",(0,o.jsxs)(t.p,{children:["Anthropic recently unveiled the\xa0",(0,o.jsx)(t.a,{href:"https://www.anthropic.com/news/model-context-protocol",children:"Model Context Protocol"}),"\xa0(MCP), \u201ca new standard for connecting AI assistants to the systems where data lives\u201d. However, as Docker ",(0,o.jsx)(t.a,{href:"https://www.docker.com/blog/the-model-context-protocol-simplifying-building-ai-apps-with-anthropic-claude-desktop-and-docker/",children:"pointed out"}),", \u201cpackaging and distributing MCP Servers is very challenging due to complex environment setups across multiple architectures and operating systems\u201d. Docker ",(0,o.jsx)(t.a,{href:"https://www.docker.com/blog/the-model-context-protocol-simplifying-building-ai-apps-with-anthropic-claude-desktop-and-docker/",children:"helps to solve this problem"})," by enabling developers to \u201cencapsulate their development environment into containers, ensuring consistency across all team members\u2019 machines and deployments.\u201d The Docker work includes a list of ",(0,o.jsx)(t.a,{href:"https://github.com/modelcontextprotocol/servers",children:"reference MCP Servers"})," packaged up as containers, which you can deploy locally and test your AI application."]}),"\n",(0,o.jsxs)(t.p,{children:["However, to put such containerized AI applications into production, you need to be able to not only test locally, but also easily deploy the application to the cloud. This is what Defang enables. In this blog and the accompanying ",(0,o.jsx)(t.a,{href:"https://github.com/DefangLabs/samples/tree/main/samples/mcp",children:"sample"}),", we show how to build a sample AI application using one of the reference MCP Servers, run and test it locally using Docker, and when ready, to easily deploy it to the cloud of your choice (AWS, GCP, or DigitalOcean) using Defang."]}),"\n",(0,o.jsx)(t.h2,{id:"sample-model-context-protocol-time-chatbot-application",children:"Sample Model Context Protocol Time Chatbot Application"}),"\n",(0,o.jsxs)(t.p,{children:["Using ",(0,o.jsxs)(t.a,{href:"https://hub.docker.com/r/mcp/time",children:["Docker\u2019s ",(0,o.jsx)(t.code,{children:"mcp/time"})," image"]})," and Anthropic Claude, we made a ",(0,o.jsx)(t.a,{href:"https://github.com/DefangLabs/samples/tree/main/samples/mcp",children:"chatbot application"})," that can access time-based resources directly on the user\u2019s local machine and answer time-based questions."]}),"\n",(0,o.jsx)(t.p,{children:"The application is containerized using Docker, enabling a convenient and easy way to get it running locally. We will later demonstrate how we deployed it to the cloud using Defang."}),"\n",(0,o.jsx)(t.p,{children:"Let\u2019s go over the structure of the application in a local environment."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"mcp_before",src:n(7956).A+"",width:"1344",height:"892"})}),"\n",(0,o.jsx)(t.h3,{id:"general-overview",children:"General Overview"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["There are two containerized services, Service 1 and Service 2, that sit on the local machine.","\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Service 1 contains a custom-built web server that interacts with an MCP Client."}),"\n",(0,o.jsx)(t.li,{children:"Service 2 contains an MCP Server from Docker as a base image for the container, and a custom-built MCP Client we created for interacting with the MCP Server."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.li,{children:"We have a browser on our local machine, which interacts with the web server in Service 1."}),"\n",(0,o.jsx)(t.li,{children:"The MCP Server in Service 2 is able to access tools from either a cloud or on our local machine. This configuration is included as a part of the Docker MCP image."}),"\n",(0,o.jsx)(t.li,{children:"The MCP Client in Service 2 interacts with the Anthropic API and the web server."}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"architecture",children:"Architecture"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Service 1: Web Server"})}),"\n",(0,o.jsx)(t.p,{children:"Service 1 contains a web server and the UI for a chat application (not shown in the diagram), written in Next.js. The chat UI updates based on user-entered queries and chatbot responses. A POST request is sent to Service 1 every time a user enters a query from the browser. In the web server, a Next.js server action function is used to forward the user queries to the endpoint URL of Service 2 to be processed by the MCP Client."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Service 2: MCP Service Configuration"})}),"\n",(0,o.jsxs)(t.p,{children:["The original Docker ",(0,o.jsx)(t.code,{children:"mcp/time"})," image is not designed with the intent of being deployed to the cloud - it is created for a seamless experience with Claude Desktop. To achieve cloud deployment, an HTTP layer is needed in front of the MCP Server. To address this, we've bundled an MCP Client together with the Server into one container. The MCP Client provides the HTTP interface and communicates with the MCP Server via standard input/output (",(0,o.jsx)(t.a,{href:"https://modelcontextprotocol.io/docs/concepts/transports#standard-input-output-stdio",children:"stdio"}),")."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"MCP Client"})}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.a,{href:"https://modelcontextprotocol.io/quickstart/client",children:"MCP Client"})," is written in Python, and runs in a ",(0,o.jsx)(t.a,{href:"https://docs.python.org/3/library/venv.html",children:"virtual environment"})," (",(0,o.jsx)(t.code,{children:"/app/.venv/bin"}),") to accommodate specific package dependencies. The MCP Client is instantiated in a ",(0,o.jsx)(t.a,{href:"https://quart.palletsprojects.com/en/latest/index.html",children:"Quart"})," app, where it connects to the MCP Server and handles POST requests from the web server in Service 1. Additionally, the MCP Client connects to the Anthropic API to request LLM responses."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"MCP Server and Tools (from the Docker Image)"})}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.a,{href:"https://github.com/modelcontextprotocol/servers/tree/main/src/time",children:"MCP Server"})," enables access to tools from an external source, whether it be from a cloud or from the local machine. This configuration is included as a part of the ",(0,o.jsx)(t.a,{href:"https://hub.docker.com/r/mcp/time",children:"Docker MCP image"}),". The tools can be accessed indirectly by the MCP Client through the MCP Server. The Docker image is used as a base image for Service 2, and the MCP Client is built in the same container as the MCP Server. Note that the MCP Server also runs in a virtual environment (",(0,o.jsx)(t.code,{children:"/app/.venv/bin"}),")."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Anthropic API"})}),"\n",(0,o.jsxs)(t.p,{children:["The MCP Client connects to the ",(0,o.jsx)(t.a,{href:"https://docs.anthropic.com/en/api/getting-started",children:"Anthropic API"})," to request responses from a Claude model. Two requests are sent to Claude for each query. The first request will send the query contents and a list of tools available, and let Claude respond with a selection of the tools needed to craft a response. The MCP Client will then call the tools indirectly through the MCP Server. Once the tool results come back to the Client, a second request is sent to Claude with the query contents and tool results to craft the final response."]}),"\n",(0,o.jsx)(t.h3,{id:"setting-up-dockerfiles",children:"Setting Up Dockerfiles"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsxs)(t.strong,{children:["Service 1: Web Server - ",(0,o.jsx)(t.a,{href:"https://github.com/DefangLabs/samples/blob/main/samples/mcp/service-1/Dockerfile",children:"Dockerfile"})]})}),"\n",(0,o.jsxs)(t.p,{children:["The base image for Service 1 is the ",(0,o.jsx)(t.code,{children:"node:bookworm-slim"})," image. We construct the image by copying the server code and setting an entry point command to start the web server."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsxs)(t.strong,{children:["Service 2: MCP Service Configuration - ",(0,o.jsx)(t.a,{href:"https://github.com/DefangLabs/samples/blob/main/samples/mcp/service-2/Dockerfile",children:"Dockerfile"})]})}),"\n",(0,o.jsxs)(t.p,{children:["The base image for Service 2 is the Docker ",(0,o.jsx)(t.code,{children:"mcp/time"})," image. Since both the MCP Client and Server run in a virtual environment, we activate a ",(0,o.jsx)(t.code,{children:"venv"})," command in the Dockerfile for Service 2 and create a ",(0,o.jsx)(t.code,{children:"run.sh"})," shell script that runs the file containing the MCP Client and Server connection code. We then add the shell script as an entry point command for the container."]}),"\n",(0,o.jsx)(t.h3,{id:"compose-file",children:"Compose File"}),"\n",(0,o.jsxs)(t.p,{children:["To define Services 1 and 2 as Docker containers, we\u2019ve written a ",(0,o.jsx)(t.code,{children:"compose.yaml"})," file in the root directory, as shown below."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-yaml",children:'services:\n  service-1: # Web Server and UI\n    build:\n      context: ./service-1\n      dockerfile: Dockerfile\n    ports:\n      - target: 3000\n        published: 3000\n        mode: ingress\n    deploy:\n      resources:\n        reservations:\n          memory: 256M\n    environment:\n      - MCP_SERVICE_URL=http://service-2:8000\n    healthcheck:\n      test: ["CMD", "curl", "-f", "http://localhost:3000/"]\n\n  service-2: # MCP Service (MCP Client and Server)\n    build:\n      context: ./service-2\n      dockerfile: Dockerfile\n    ports:\n      - target: 8000\n        published: 8000\n        mode: host\n    environment:\n      - ANTHROPIC_API_KEY\n'})}),"\n",(0,o.jsx)(t.h3,{id:"testing-and-running-on-local-machine",children:"Testing and Running on Local Machine"}),"\n",(0,o.jsxs)(t.p,{children:["Now that we\u2019ve defined our application in Docker containers using a ",(0,o.jsx)(t.code,{children:"compose.yaml"})," file, we can test and run it on our local machine by running the command:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"docker compose up --build\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Once the application is started up, it can be easily tested in a local environment. However, to make it easily accessible to others online, we should deploy it to the cloud. Fortunately, deploying the application is a straightforward process using Defang, particularly since the application is ",(0,o.jsx)(t.a,{href:"https://docs.defang.io/docs/concepts/compose",children:"Compose-compatible"}),"."]}),"\n",(0,o.jsx)(t.h3,{id:"deploying-to-the-cloud",children:"Deploying to the Cloud"}),"\n",(0,o.jsx)(t.p,{children:"Let\u2019s go over the structure of the application after cloud deployment."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"mcp_after",src:n(5763).A+"",width:"1336",height:"862"})}),"\n",(0,o.jsx)(t.p,{children:"Here we can see what changes if we deploy to the cloud:"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"Service 1 and Service 2 are now deployed to the cloud, not on the local machine anymore."}),"\n",(0,o.jsx)(t.li,{children:"The only part on the local machine is the browser."}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["Using the same ",(0,o.jsx)(t.code,{children:"compose.yaml"})," file as shown earlier, we can deploy the containers to the cloud with the ",(0,o.jsx)(t.a,{href:"https://docs.defang.io/docs/getting-started",children:"Defang CLI"}),". Once we\u2019ve authenticated and logged in, we can ",(0,o.jsx)(t.a,{href:"https://docs.defang.io/docs/tutorials/deploy-to-your-cloud",children:"choose a cloud provider (i.e. AWS, GCP, or DigitalOcean)"})," and use our own cloud account for deployment. Then, we can set a configuration variable for the Anthropic API key:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"defang config set ANTHROPIC_API=<your-api-key-value>\n"})}),"\n",(0,o.jsx)(t.p,{children:"Then, we can run the command:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"defang compose up\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Now, the ",(0,o.jsx)(t.a,{href:"https://github.com/DefangLabs/samples/tree/main/samples/mcp",children:"MCP time chatbot application"})," will be up and running in the cloud. This means that anyone can access the application online and try it for themselves!"]}),"\n",(0,o.jsx)(t.p,{children:"For our case, anyone can use the chatbot to ask for the exact time or convert time zones from their machine, regardless of where they are located."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"mcp_time_chatbot",src:n(1154).A+"",width:"1222",height:"1186"})}),"\n",(0,o.jsxs)(t.p,{children:["Most importantly, this chatbot application can be adapted to use any of the other Docker reference\xa0",(0,o.jsx)(t.a,{href:"https://hub.docker.com/u/mcp",children:"MCP Server images"}),", not just the ",(0,o.jsx)(t.code,{children:"mcp/time"})," server."]}),"\n",(0,o.jsx)(t.p,{children:"Have fun building and deploying MCP-based containerized applications to the cloud with Defang!"})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},4960:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/mcp-7b7325a04c3e33149a75dc1affd92abf.png"},5763:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/mcp_after-3233f0296dd50dd5b523c3a39569123f.png"},7956:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/mcp_before-ae9a65fa97e1469553af7094f887db1f.png"},1154:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/mcp_time_chatbot-56df160c7dd5f73a4ddf8852cb09d0e8.png"},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>s});var o=n(6540);const i={},r=o.createContext(i);function a(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);