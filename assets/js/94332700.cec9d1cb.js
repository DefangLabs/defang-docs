"use strict";(self.webpackChunkdefang_docs=self.webpackChunkdefang_docs||[]).push([[7507],{9021:(e,i,o)=>{o.r(i),o.d(i,{assets:()=>a,contentTitle:()=>t,default:()=>g,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var n=o(4848),s=o(8453);const r={sidebar_position:400,title:"Monitoring Your Services",description:"How to monitor services deployed with Defang"},t="Monitoring Your Services",l={id:"tutorials/monitoring-your-services",title:"Monitoring Your Services",description:"How to monitor services deployed with Defang",source:"@site/docs/tutorials/monitoring-your-services.md",sourceDirName:"tutorials",slug:"/tutorials/monitoring-your-services",permalink:"/docs/tutorials/monitoring-your-services",draft:!1,unlisted:!1,editUrl:"https://github.com/DefangLabs/defang-docs/tree/main/docs/tutorials/monitoring-your-services.md",tags:[],version:"current",sidebarPosition:400,frontMatter:{sidebar_position:400,title:"Monitoring Your Services",description:"How to monitor services deployed with Defang"},sidebar:"docsSidebar",previous:{title:"Deploy Using Pulumi",permalink:"/docs/tutorials/deploy-using-pulumi"},next:{title:"Deploy a GPU-Powered Application",permalink:"/docs/tutorials/deploy-with-gpu"}},a={},c=[{value:"Status",id:"status",level:2},{value:"Logs",id:"logs",level:2},{value:"Tailing Live Logs For All Services",id:"tailing-live-logs-for-all-services",level:3},{value:"Tailing Logs Since a Specific Time",id:"tailing-logs-since-a-specific-time",level:3},{value:"Tailing Logs For a Service",id:"tailing-logs-for-a-service",level:3},{value:"Build Time Logs",id:"build-time-logs",level:3}];function d(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"monitoring-your-services",children:"Monitoring Your Services"}),"\n",(0,n.jsx)(i.p,{children:"This tutorial will show you how to monitor your service status and logs in Defang."}),"\n",(0,n.jsx)(i.h2,{id:"status",children:"Status"}),"\n",(0,n.jsxs)(i.p,{children:["When deploying to Playground, you can monitor your service status from the ",(0,n.jsx)(i.a,{href:"https://portal.defang.dev",children:"Defang Portal"}),"."]}),"\n",(0,n.jsx)(i.p,{children:"When deploying to your own cloud, the primary way to monitor your services is through your cloud provider's dashboard. However, Defang does provide some tools for monitoring your service logs."}),"\n",(0,n.jsx)(i.h2,{id:"logs",children:"Logs"}),"\n",(0,n.jsxs)(i.p,{children:["When deploying to Playground, your service's logs may be viewed in the ",(0,n.jsx)(i.a,{href:"https://portal.defang.dev",children:"Defang Portal"}),"."]}),"\n",(0,n.jsxs)(i.p,{children:["By default when deploying, including to your own cloud, all output (stdout and stderr) from your app is logged and accessible via the ",(0,n.jsx)(i.a,{href:"/docs/getting-started#install-the-defang-cli",children:"Defang CLI"}),". You can view these logs in real-time or for a time in the past. You can view logs for all your services, one service, or even one specific deployment of a service."]}),"\n",(0,n.jsx)(i.h3,{id:"tailing-live-logs-for-all-services",children:"Tailing Live Logs For All Services"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-bash",children:"$ defang tail\n"})}),"\n",(0,n.jsx)(i.h3,{id:"tailing-logs-since-a-specific-time",children:"Tailing Logs Since a Specific Time"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-bash",children:"$ defang tail --since 1h\n"})}),"\n",(0,n.jsx)(i.h3,{id:"tailing-logs-for-a-service",children:"Tailing Logs For a Service"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-bash",children:"$ defang tail --name service-name\n"})}),"\n",(0,n.jsx)(i.h3,{id:"build-time-logs",children:"Build Time Logs"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-bash",children:"$ defang logs --type=build\n"})}),"\n",(0,n.jsxs)(i.p,{children:["All of the above flags can be combined to get the exact logs you need. See the CLI reference for ",(0,n.jsx)(i.a,{href:"/docs/cli/defang_tail",children:(0,n.jsx)(i.code,{children:"defang tail"})})," for more information."]}),"\n",(0,n.jsx)(i.admonition,{type:"info",children:(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["To learn more about observability in Defang, check out the ",(0,n.jsx)(i.a,{href:"/docs/concepts/observability",children:"Observability page"}),"."]}),"\n",(0,n.jsx)(i.li,{children:"Note that the Defang Portal only displays services deployed to Defang Playground."}),"\n"]})})]})}function g(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,i,o)=>{o.d(i,{R:()=>t,x:()=>l});var n=o(6540);const s={},r=n.createContext(s);function t(e){const i=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),n.createElement(r.Provider,{value:i},e.children)}}}]);