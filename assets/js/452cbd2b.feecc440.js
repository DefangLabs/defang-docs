"use strict";(self.webpackChunkdefang_docs=self.webpackChunkdefang_docs||[]).push([[2072],{2588:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var o=t(7624),c=t(2172);const s={title:"Accounts",description:"How accounts are organized in Defang.",sidebar_position:100},r="Accounts",i={id:"concepts/accounts",title:"Accounts",description:"How accounts are organized in Defang.",source:"@site/docs/concepts/accounts.md",sourceDirName:"concepts",slug:"/concepts/accounts",permalink:"/docs/concepts/accounts",draft:!1,unlisted:!1,editUrl:"https://github.com/defang-io/defang-docs/tree/main/docs/concepts/accounts.md",tags:[],version:"current",sidebarPosition:100,frontMatter:{title:"Accounts",description:"How accounts are organized in Defang.",sidebar_position:100},sidebar:"docsSidebar",previous:{title:"Defang Hosted",permalink:"/docs/concepts/defang-hosted"},next:{title:"Services",permalink:"/docs/concepts/services"}},a={},u=[];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",p:"p",pre:"pre",...(0,c.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"accounts",children:"Accounts"}),"\n",(0,o.jsx)(n.p,{children:"At the moment, Defang only allows authentication through GitHub. This means that you will need to have a GitHub account to use the system, but it also means that your GitHub username will be used as your Defang username. Your Defang username is used to group all your services and to generate domains for your services with the following structure:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"<username>-<servicename>--<port>.prod1.defang.dev\n"})}),"\n",(0,o.jsx)(n.admonition,{type:"warning",children:(0,o.jsxs)(n.p,{children:["Keep in mind that your Defang account is separate from your ",(0,o.jsx)(n.a,{href:"/docs/concepts/defang-byoc",children:"cloud provider account"}),". You will need to authenticate with your cloud provider account separately to deploy services to your own cloud account."]})}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsx)(n.p,{children:"We plan to introduce a more robust system for managing accounts, permissions, service groups, etc. in the future."})})]})}function p(e={}){const{wrapper:n}={...(0,c.M)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},2172:(e,n,t)=>{t.d(n,{I:()=>i,M:()=>r});var o=t(1504);const c={},s=o.createContext(c);function r(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);