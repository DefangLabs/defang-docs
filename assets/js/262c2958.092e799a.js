"use strict";(self.webpackChunkdefang_docs=self.webpackChunkdefang_docs||[]).push([[6182],{3397:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>g,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var t=s(4848),o=s(8453);const a={title:"Managed Postgres",description:"Defang can help you provision managed Postgres.",sidebar_position:1e3},r="Managed Postgres",i={id:"concepts/managed-storage/managed-postgres",title:"Managed Postgres",description:"Defang can help you provision managed Postgres.",source:"@site/docs/concepts/managed-storage/managed-postgres.md",sourceDirName:"concepts/managed-storage",slug:"/concepts/managed-storage/managed-postgres",permalink:"/docs/concepts/managed-storage/managed-postgres",draft:!1,unlisted:!1,editUrl:"https://github.com/DefangLabs/defang-docs/tree/main/docs/concepts/managed-storage/managed-postgres.md",tags:[],version:"current",sidebarPosition:1e3,frontMatter:{title:"Managed Postgres",description:"Defang can help you provision managed Postgres.",sidebar_position:1e3},sidebar:"docsSidebar",previous:{title:"Managed Storage",permalink:"/docs/concepts/managed-storage/"},next:{title:"Managed Redis",permalink:"/docs/concepts/managed-storage/managed-redis"}},d={},c=[{value:"Current Support",id:"current-support",level:2},{value:"How to use Managed Postgres",id:"how-to-use-managed-postgres",level:2},{value:"Required Configuration",id:"required-configuration",level:3},{value:"Optional Configuration",id:"optional-configuration",level:3},{value:"Connecting to Managed Postgres",id:"connecting-to-managed-postgres",level:3},{value:"Example",id:"example",level:3},{value:"Final Snapshots",id:"final-snapshots",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"managed-postgres",children:"Managed Postgres"}),"\n",(0,t.jsx)(n.p,{children:"Postgres, or PostgreSQL, is an advanced open-source relational database system known for its robustness, extensibility, and compliance with SQL standards, making it a popular choice for complex applications requiring reliable data integrity and sophisticated querying capabilities."}),"\n",(0,t.jsx)(n.h2,{id:"current-support",children:"Current Support"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Provider"}),(0,t.jsx)(n.th,{children:"Managed Postgres"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/providers/playground#managed-services",children:"Playground"})}),(0,t.jsx)(n.td,{children:"\u274c"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/providers/aws#managed-storage",children:"AWS"})}),(0,t.jsx)(n.td,{children:"\u2705"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/providers/digitalocean#future-improvements",children:"DigitalOcean"})}),(0,t.jsx)(n.td,{children:"\u274c"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/providers/gcp#future-improvements",children:"GCP"})}),(0,t.jsx)(n.td,{children:"\u274c"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"how-to-use-managed-postgres",children:"How to use Managed Postgres"}),"\n",(0,t.jsxs)(n.p,{children:["To use managed Postgres, in your ",(0,t.jsx)(n.code,{children:"compose.yaml"})," file, use the ",(0,t.jsx)(n.code,{children:"x-defang-postgres"})," extension to define your Postgres service. Adding the extension will tell Defang to provision a managed instance, rather than running Postgres as a service."]}),"\n",(0,t.jsx)(n.h3,{id:"required-configuration",children:"Required Configuration"}),"\n",(0,t.jsxs)(n.p,{children:["When using managed Postgres, you ",(0,t.jsx)(n.strong,{children:"must"})," set a password for the database using ",(0,t.jsx)(n.code,{children:"defang config set POSTGRES_PASSWORD"}),". If you do not provide the password, the deployment will fail."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"POSTGRES_PASSWORD"}),": You can can assign the password in the service's environment variables. To learn more about how this works, read about ",(0,t.jsx)(n.a,{href:"/docs/concepts/configuration",children:"configuration"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"optional-configuration",children:"Optional Configuration"}),"\n",(0,t.jsx)(n.p,{children:"You can also set the following optional environment variables to configure the managed Postgres instance:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"POSTGRES_USER"}),": The user for the managed Postgres instance. The default is ",(0,t.jsx)(n.code,{children:"postgres"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"POSTGRES_DB"}),": The database name for the managed Postgres instance. The default is ",(0,t.jsx)(n.code,{children:"postgres"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"connecting-to-managed-postgres",children:"Connecting to Managed Postgres"}),"\n",(0,t.jsxs)(n.p,{children:["You can connect to the managed Postgres instance using the name of your service as the hostname, ",(0,t.jsx)(n.code,{children:"POSTGRES_USER"}),", ",(0,t.jsx)(n.code,{children:"POSTGRES_DB"}),", and ",(0,t.jsx)(n.code,{children:"POSTGRES_PASSWORD"})," environment variables."]}),"\n",(0,t.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"For a smoother experience with Defang, we recommend using Postgres 14 for your container images. This version provides easier access and improved usability."})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"  app:\n    # [...]\n    environment:\n      POSTGRES_HOST: database\n      POSTGRES_USER: postgres\n      POSTGRES_DB: postgres\n      // highlight-start\n      # Note: by leaving the value empty, Defang will use the\n      # value set using `defang config set POSTGRES_PASSWORD`\n      POSTGRES_PASSWORD:\n      // highlight-end\n      # Note: you can create a connection string by using interpolation,\n      # reference config variables by using ${<config name>}\n      CONNECTURL: postgresql://postgres:${POSTGRES_PASSWORD}@database:5432/postgres?sslmode=require\n  database:\n    image: postgres:14\n    x-defang-postgres: true\n    ports:\n      - mode: host\n        target: 5432\n    environment:\n      // highlight-start\n      # Note: by leaving the value empty, Defang will use the\n      # value set using `defang config set POSTGRES_PASSWORD`\n      POSTGRES_PASSWORD:\n      // highlight-end\n\n"})}),"\n",(0,t.jsx)(n.h2,{id:"final-snapshots",children:"Final Snapshots"}),"\n",(0,t.jsx)(n.p,{children:"When a project is deployed to a production environment any managed postgres instances are automatically configured to create a snapshot of the database before deletion. The snapshot will be named with the following format"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"<project-name>-<service>-postgres-<id>-final-snapshot"})}),"\n",(0,t.jsx)(n.p,{children:"The AWS Console can be used to restore a snapshop into a new instance of postgres."})]})}function g(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>i});var t=s(6540);const o={},a=t.createContext(o);function r(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);