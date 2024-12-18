"use strict";(self.webpackChunkdefang_docs=self.webpackChunkdefang_docs||[]).push([[8575],{7361:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var s=o(4848),i=o(8453);const r={title:"defang compose"},t=void 0,c={id:"cli/defang_compose",title:"defang compose",description:"Work with local Compose files",source:"@site/docs/cli/defang_compose.md",sourceDirName:"cli",slug:"/cli/defang_compose",permalink:"/docs/cli/defang_compose",draft:!1,unlisted:!1,editUrl:"https://github.com/DefangLabs/defang-docs/tree/main/docs/cli/defang_compose.md",tags:[],version:"current",frontMatter:{title:"defang compose"},sidebar:"docsSidebar",previous:{title:"defang cert generate",permalink:"/docs/cli/defang_cert_generate"},next:{title:"defang compose config",permalink:"/docs/cli/defang_compose_config"}},d={},a=[{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3},{value:"Auto generated by spf13/cobra on 18-Dec-2024",id:"auto-generated-by-spf13cobra-on-18-dec-2024",level:6}];function l(e){const n={a:"a",code:"code",h3:"h3",h6:"h6",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Work with local Compose files"}),"\n",(0,s.jsx)(n.h3,{id:"synopsis",children:"Synopsis"}),"\n",(0,s.jsx)(n.p,{children:'Define and deploy multi-container applications with Defang. Most compose commands require\na "compose.yaml" file. The simplest "compose.yaml" file with a single service is:'}),"\n",(0,s.jsx)(n.p,{children:"services:\napp:              # the name of the service\nbuild: .        # the folder with the Dockerfile and app sources (. means current folder)\nports:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"80          # the port the service listens on for HTTP requests"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"options",children:"Options"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"  -h, --help   help for compose\n"})}),"\n",(0,s.jsx)(n.h3,{id:"options-inherited-from-parent-commands",children:"Options inherited from parent commands"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"      --color color-mode      colorize output; one of [never auto always] (default auto)\n  -C, --cwd string            change directory before running the command\n      --debug                 debug logging for troubleshooting the CLI\n      --dry-run               dry run (don't actually change anything)\n  -f, --file stringArray      compose file path\n  -T, --non-interactive       disable interactive prompts / no TTY (default true)\n      --org string            Override GitHub organization name (tenant)\n  -p, --project-name string   project name\n  -P, --provider provider     bring-your-own-cloud provider; one of [defang aws digitalocean gcp] (default auto)\n  -v, --verbose               verbose logging\n"})}),"\n",(0,s.jsx)(n.h3,{id:"see-also",children:"SEE ALSO"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/docs/cli/defang",children:"defang"}),"\t - Defang CLI is used to develop, deploy, and debug your cloud services"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/docs/cli/defang_compose_config",children:"defang compose config"}),"\t - Reads a Compose file and shows the generated config"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/docs/cli/defang_compose_down",children:"defang compose down"}),"\t - Reads a Compose file and deprovisions its services"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/docs/cli/defang_compose_logs",children:"defang compose logs"}),"\t - Tail logs from one or more services"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/docs/cli/defang_compose_ps",children:"defang compose ps"}),"\t - Get list of services in the project"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/docs/cli/defang_compose_up",children:"defang compose up"}),"\t - Reads a Compose file and deploy a new project or update an existing project"]}),"\n"]}),"\n",(0,s.jsx)(n.h6,{id:"auto-generated-by-spf13cobra-on-18-dec-2024",children:"Auto generated by spf13/cobra on 18-Dec-2024"})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>t,x:()=>c});var s=o(6540);const i={},r=s.createContext(i);function t(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);