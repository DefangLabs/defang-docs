"use strict";(self.webpackChunkdefang_docs=self.webpackChunkdefang_docs||[]).push([[830],{28453:(e,o,n)=>{n.d(o,{R:()=>r,x:()=>i});var c=n(96540);const s={},t=c.createContext(s);function r(e){const o=c.useContext(t);return c.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),c.createElement(t.Provider,{value:o},e.children)}},39882:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>a,contentTitle:()=>r,default:()=>l,frontMatter:()=>t,metadata:()=>i,toc:()=>d});var c=n(74848),s=n(28453);const t={title:"Projects",description:"A _project_ refers to a cohesive collection of services which are defined and managed using a `compose.yml` file.",sidebar_position:200},r="Projects",i={id:"concepts/projects",title:"Projects",description:"A _project_ refers to a cohesive collection of services which are defined and managed using a `compose.yml` file.",source:"@site/docs/concepts/projects.md",sourceDirName:"concepts",slug:"/concepts/projects",permalink:"/docs/concepts/projects",draft:!1,unlisted:!1,editUrl:"https://github.com/DefangLabs/defang-docs/tree/main/docs/concepts/projects.md",tags:[],version:"current",sidebarPosition:200,frontMatter:{title:"Projects",description:"A _project_ refers to a cohesive collection of services which are defined and managed using a `compose.yml` file.",sidebar_position:200},sidebar:"docsSidebar",previous:{title:"Authentication",permalink:"/docs/concepts/authentication"},next:{title:"Services",permalink:"/docs/concepts/services"}},a={},d=[{value:"Project Names",id:"project-names",level:2}];function p(e){const o={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(o.h1,{id:"projects",children:"Projects"}),"\n",(0,c.jsxs)(o.p,{children:["A ",(0,c.jsx)(o.em,{children:"project"})," refers to a cohesive collection of services which are defined and managed using a ",(0,c.jsxs)(o.a,{href:"/docs/concepts/compose",children:[(0,c.jsx)(o.code,{children:"compose.yaml"})," file"]}),"."]}),"\n",(0,c.jsx)(o.h2,{id:"project-names",children:"Project Names"}),"\n",(0,c.jsxs)(o.p,{children:["The ",(0,c.jsx)(o.em,{children:"project name"})," can be defined in the Compose file with the ",(0,c.jsxs)(o.a,{href:"https://docs.docker.com/compose/compose-file/04-version-and-name/#name-top-level-element",children:[(0,c.jsx)(o.code,{children:"name"})," property"]}),", otherwise the base name of the project directory will be used."]}),"\n",(0,c.jsx)(o.p,{children:"The project name may then be used when performing project-wide operations such as listing services, tailing logs, or deprovisioning. For example:"}),"\n",(0,c.jsx)(o.pre,{children:(0,c.jsx)(o.code,{children:"defang services --project-name <project-name>\ndefang tail --project-name <project-name>\ndefang compose down --project-name <project-name>\n"})}),"\n",(0,c.jsxs)(o.p,{children:["By default ",(0,c.jsx)(o.code,{children:"defang"})," will use the project name from the ",(0,c.jsx)(o.code,{children:"compose.yaml"})," file in the working directory. The ",(0,c.jsxs)(o.a,{href:"/docs/cli/defang",children:[(0,c.jsx)(o.code,{children:"--project-name"})," CLI flag"]})," may be used when running ",(0,c.jsx)(o.code,{children:"defang"})," from outside the working directory."]})]})}function l(e={}){const{wrapper:o}={...(0,s.R)(),...e.components};return o?(0,c.jsx)(o,{...e,children:(0,c.jsx)(p,{...e})}):p(e)}}}]);