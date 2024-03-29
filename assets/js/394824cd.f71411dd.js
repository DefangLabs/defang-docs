"use strict";(self.webpackChunkdefang_docs=self.webpackChunkdefang_docs||[]).push([[7020],{400:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=s(7624),o=s(2172);const a={slug:"slackbot-sample",title:"Deploy a Go-powered slackbot with Defang",tags:["Cloud","NoDevOps","BYOC","AWS ECS","defang compose up","Slack API"],author:"Rapha\xebl Titsworth-Morin"},l=void 0,i={permalink:"/blog/slackbot-sample",source:"@site/blog/2024-03-28-slackbot-sample.md",title:"Deploy a Go-powered slackbot with Defang",description:"Hey folks! Today, I'm going to share one of our code samples that will show you how to deploy a simple Slack bot. If you're looking to connect a cloud service to Slack to publish status updates, or something else like that, this should help you get started. We'll walk through a step-by-step process of writing a Go program using the github.com/slack-go/slack library to interact with the Slack API and easily deploy it using Defang.",date:"2024-03-28T00:00:00.000Z",formattedDate:"March 28, 2024",tags:[{label:"Cloud",permalink:"/blog/tags/cloud"},{label:"NoDevOps",permalink:"/blog/tags/no-dev-ops"},{label:"BYOC",permalink:"/blog/tags/byoc"},{label:"AWS ECS",permalink:"/blog/tags/aws-ecs"},{label:"defang compose up",permalink:"/blog/tags/defang-compose-up"},{label:"Slack API",permalink:"/blog/tags/slack-api"}],readingTime:2.55,hasTruncateMarker:!1,authors:[{name:"Rapha\xebl Titsworth-Morin"}],frontMatter:{slug:"slackbot-sample",title:"Deploy a Go-powered slackbot with Defang",tags:["Cloud","NoDevOps","BYOC","AWS ECS","defang compose up","Slack API"],author:"Rapha\xebl Titsworth-Morin"},unlisted:!1,nextItem:{title:"Add Defang to your developer environments instantly",permalink:"/blog/dev-environments"}},r={authorsImageUrls:[void 0]},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Deployment Steps",id:"deployment-steps",level:2},{value:"Usage",id:"usage",level:2},{value:"Takeaways",id:"takeaways",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["Hey folks! Today, I'm going to share one of our code samples that will show you how to deploy a simple Slack bot. If you're looking to connect a cloud service to Slack to publish status updates, or something else like that, this should help you get started. We'll walk through a step-by-step process of writing a Go program using the ",(0,n.jsx)(t.a,{href:"github.com/slack-go/slack",children:"github.com/slack-go/slack"})," library to interact with the Slack API and easily deploy it using Defang."]}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["This guide is based off the sample code ",(0,n.jsx)(t.a,{href:"https://github.com/defang-io/defang/tree/main/samples/golang/slackbot",children:"over here"}),". You'll want to use that as a starting point."]})}),"\n",(0,n.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,n.jsx)(t.p,{children:"Before we dive into the details, let's make sure you have everything you need to get started:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Install Defang CLI:"})," Simplify your deployment process by installing the Defang CLI tool. Follow the instructions ",(0,n.jsx)(t.a,{href:"https://docs.defang.io/docs/getting-started/installing",children:"here"})," to get it up and running quickly."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Slack API Token:"})," Create a Slack App at ",(0,n.jsx)(t.a,{href:"https://api.slack.com/apps",children:"https://api.slack.com/apps"}),", granting it the necessary permissions, including the\xa0bot ",(0,n.jsx)(t.code,{children:"chat:write"}),"\xa0scope.\n",(0,n.jsx)(t.img,{alt:"screenshot of the slack admin UI showing the bot scopes",src:s(888).c+"",width:"1420",height:"588"})]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Install the app in your workspace:"}),' You\'ll need to install the app in your workspace for it to work. Click the "Install to Workspace" button in the Slack admin UI to do this. Mine says "Reinstall" because I\'ve already installed it.\n',(0,n.jsx)(t.img,{alt:"screenshot of the slack admin UI showing the install button",src:s(3133).c+"",width:"1432",height:"1222"})]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Copy the Bot User OAuth Access Token:"})," This token will authenticate your Slackbot with the Slack API.\n",(0,n.jsx)(t.img,{alt:"screenshot of the slack admin UI showing the auth token field",src:s(7668).c+"",width:"1934",height:"1428"})]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Invite the Bot to a Channel:"})," To enable your Slackbot, invite it to the desired channel using the\xa0",(0,n.jsx)(t.code,{children:"@<botname>"}),"\xa0command. In the screenshot below, my bot's name actually starts with the word invite, but if your bot is called ",(0,n.jsx)(t.code,{children:"mycoolbot"})," you would invite it with ",(0,n.jsx)(t.code,{children:"@mycoolbot"}),". This ensures your Slackbot has the required permissions to interact with the channel.\n",(0,n.jsx)(t.img,{alt:"screenshot of the slack chat UI showing me inviting my bot",src:s(4296).c+"",width:"1500",height:"324"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"deployment-steps",children:"Deployment Steps"}),"\n",(0,n.jsx)(t.p,{children:"Now that we have everything set up, let's dive into the deployment process. Follow these steps to deploy your Slackbot effortlessly:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Set Up Secrets:"})," Prioritize security by configuring environment variables as secrets. Use the Defang CLI's\xa0",(0,n.jsx)(t.code,{children:"defang secret set"}),"\xa0command to set the\xa0",(0,n.jsx)(t.code,{children:"SLACK_TOKEN"}),"\xa0and ",(0,n.jsx)(t.code,{children:"SLACK_CHANNEL_ID"}),"\xa0secrets.\nReplace\xa0",(0,n.jsx)(t.code,{children:"your_slack_token"}),"\xa0and\xa0",(0,n.jsx)(t.code,{children:"your_slack_channel_id"}),"\xa0with the respective values:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"defang secret set --name SLACK_TOKEN --value your_slack_token\ndefang secret set --name SLACK_CHANNEL_ID --value your_slack_channel_id\n"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Deploy the Slackbot:"}),"  Use the Defang CLI's\xa0",(0,n.jsx)(t.code,{children:"defang compose up"}),"\xa0command to deploy."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(t.p,{children:["With your Slackbot up and running, let's explore how to make the most of it. Simply send a POST request to the\xa0",(0,n.jsx)(t.code,{children:"/"}),"\xa0endpoint with a JSON body containing the message you want to post to the Slack channel. Popular tools like cURL or Postman can help you send the request:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"curl 'https://raphaeltm-bot--8080.prod1.defang.dev/' \\\n  -H 'content-type: application/json' \\\n  --data-raw $'{\"message\":\"This is your bot speaking. We\\'ll be landing in 10 minutes. Please fasten your seatbelts.\"}'\n"})}),"\n",(0,n.jsx)(t.h2,{id:"takeaways",children:"Takeaways"}),"\n",(0,n.jsx)(t.p,{children:"Congratulations! You've successfully deployed a Slackbot using Defang. If you deployed this as an internal service, you could use it to send status updates, alerts, or other important messages to your team. The possibilities are endless!"})]})}function d(e={}){const{wrapper:t}={...(0,o.M)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},3133:(e,t,s)=>{s.d(t,{c:()=>n});const n=s.p+"assets/images/install-app-8fa3aa70b101a64027fae596b2d5b1ad.png"},4296:(e,t,s)=>{s.d(t,{c:()=>n});const n=s.p+"assets/images/invite-271133abfdc52e93f571993808286ea2.png"},888:(e,t,s)=>{s.d(t,{c:()=>n});const n=s.p+"assets/images/scopes-fb7d3e9b342204a7ff3e831b79b684c6.png"},7668:(e,t,s)=>{s.d(t,{c:()=>n});const n=s.p+"assets/images/token-d9b368f00c44bfb3705fe299988a344e.png"},2172:(e,t,s)=>{s.d(t,{I:()=>i,M:()=>l});var n=s(1504);const o={},a=n.createContext(o);function l(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);