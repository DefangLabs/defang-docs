"use strict";(self.webpackChunkdefang_docs=self.webpackChunkdefang_docs||[]).push([[3704],{5868:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var t=n(7624),i=n(2172);const s={title:"Compose",description:"Defang allows you to use the compose.yaml specification to deploy your application to the cloud.",sidebar_position:150},c="Compose",r={id:"concepts/compose",title:"Compose",description:"Defang allows you to use the compose.yaml specification to deploy your application to the cloud.",source:"@site/docs/concepts/compose.md",sourceDirName:"concepts",slug:"/concepts/compose",permalink:"/docs/concepts/compose",draft:!1,unlisted:!1,editUrl:"https://github.com/DefangLabs/defang-docs/tree/main/docs/concepts/compose.md",tags:[],version:"current",sidebarPosition:150,frontMatter:{title:"Compose",description:"Defang allows you to use the compose.yaml specification to deploy your application to the cloud.",sidebar_position:150},sidebar:"docsSidebar",previous:{title:"Generate",permalink:"/docs/concepts/generate"},next:{title:"Pulumi",permalink:"/docs/concepts/pulumi"}},a={},d=[{value:"How it works",id:"how-it-works",level:2},{value:"Service Name Resolution",id:"service-name-resolution",level:2},{value:"Configuration",id:"configuration",level:2}];function l(e){const o={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h1,{id:"compose",children:"Compose"}),"\n",(0,t.jsxs)(o.p,{children:["You might be familiar with ",(0,t.jsx)(o.code,{children:"docker-compose.yml"})," files, now known as the ",(0,t.jsx)(o.a,{href:"https://docs.docker.com/compose/compose-file/",children:"Compose specification"})," and ",(0,t.jsx)(o.code,{children:"compose.yaml"})," files. It's a simple way to define and run multi-container Docker applications. Defang allows you to use ",(0,t.jsx)(o.code,{children:"compose.yaml"})," files to deploy your application to the cloud."]}),"\n",(0,t.jsx)(o.h2,{id:"how-it-works",children:"How it works"}),"\n",(0,t.jsxs)(o.p,{children:["You can define your ",(0,t.jsx)(o.a,{href:"/docs/concepts/services",children:"services"})," using a ",(0,t.jsx)(o.code,{children:"compose.yaml"})," file in the root of your project, or use the ",(0,t.jsxs)(o.a,{href:"/docs/tutorials/generate-new-code-using-ai",children:[(0,t.jsx)(o.code,{children:"defang generate"})," command"]})," to generate one (along with other resources). This file is used to define your application's services and how they run. You can edit this file to add more services or change the configuration of existing services."]}),"\n",(0,t.jsxs)(o.p,{children:["When you run ",(0,t.jsx)(o.code,{children:"defang up"}),", Defang will read your ",(0,t.jsx)(o.code,{children:"compose.yaml"})," file and ",(0,t.jsx)(o.a,{href:"/docs/concepts/deployments",children:"deploy"})," the services named in that file to the cloud."]}),"\n",(0,t.jsx)(o.h2,{id:"service-name-resolution",children:"Service Name Resolution"}),"\n",(0,t.jsxs)(o.p,{children:["One thing to keep in mind is that, at the time of this writing, Defang identifies services by the ",(0,t.jsx)(o.a,{href:"/docs/concepts/accounts",children:"user/account name"})," and the service name (as defined in the ",(0,t.jsx)(o.code,{children:"compose.yaml"})," file). This means that if you have multiple Defang projects with the same service name, they will conflict with each other. We plan to provide a more robust system for managing service names and protecting against conflicts in the future."]}),"\n",(0,t.jsx)(o.h2,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsxs)(o.p,{children:["If you have a service that depends on a secret like an api key, you can set that ",(0,t.jsx)(o.a,{href:"/docs/concepts/configuration",children:"secret"})," using the CLI:"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{children:"defang config set --name MY_API_KEY\n"})}),"\n",(0,t.jsxs)(o.p,{children:["and then connect it to the service by specifying it in the ",(0,t.jsx)(o.code,{children:"compose.yaml"}),":"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-yaml",children:"services:\n  my-service:\n    secrets:\n      - MY_API_KEY\n\nsecrets:\n  MY_API_KEY:\n    external: true\n"})}),"\n",(0,t.jsx)(o.admonition,{title:"Configuration & Secrets",type:"info",children:(0,t.jsxs)(o.p,{children:["Read more about configuration in the ",(0,t.jsx)(o.a,{href:"/docs/concepts/configuration",children:"configuration page"})," and about secrets in the ",(0,t.jsx)(o.a,{href:"/docs/concepts/configuration",children:"secrets page"}),"."]})})]})}function p(e={}){const{wrapper:o}={...(0,i.M)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},2172:(e,o,n)=>{n.d(o,{I:()=>r,M:()=>c});var t=n(1504);const i={},s=t.createContext(i);function c(e){const o=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function r(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),t.createElement(s.Provider,{value:o},e.children)}}}]);