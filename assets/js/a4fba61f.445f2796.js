"use strict";(self.webpackChunkdefang_docs=self.webpackChunkdefang_docs||[]).push([[2724],{8320:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var t=s(4848),i=s(8453);const o={slug:"deploying-defang-with-defang-part-1",title:"Deploying Defang with Defang: Part 1",author:"Defang Team",tags:["defang-with-defang","deployment","defang-portal"]},a=void 0,r={permalink:"/blog/deploying-defang-with-defang-part-1",source:"@site/blog/2025-03-14-deploying-defang-with-defang-part-1.md",title:"Deploying Defang with Defang: Part 1",description:"Defang Compose Update",date:"2025-03-14T00:00:00.000Z",formattedDate:"March 14, 2025",tags:[{label:"defang-with-defang",permalink:"/blog/tags/defang-with-defang"},{label:"deployment",permalink:"/blog/tags/deployment"},{label:"defang-portal",permalink:"/blog/tags/defang-portal"}],readingTime:4.29,hasTruncateMarker:!1,authors:[{name:"Defang Team"}],frontMatter:{slug:"deploying-defang-with-defang-part-1",title:"Deploying Defang with Defang: Part 1",author:"Defang Team",tags:["defang-with-defang","deployment","defang-portal"]},unlisted:!1,nextItem:{title:"Introducing Defang's New Look: Website & Logo Refresh",permalink:"/blog/website-logo-refresh-announcement"}},l={authorsImageUrls:[void 0]},d=[{value:"<strong>The Initial Setup: A More Complex Deployment</strong>",id:"the-initial-setup-a-more-complex-deployment",level:2},{value:"<strong>The Transition: Expanding Defang to Reduce Complexity</strong>",id:"the-transition-expanding-defang-to-reduce-complexity",level:2},{value:"<strong>What Changed?</strong>",id:"what-changed",level:2},{value:"<strong>How Deployment Works Today</strong>",id:"how-deployment-works-today",level:2},{value:"<strong>Config &amp; Secrets Management</strong>",id:"config--secrets-management",level:3},{value:"Deployment Modes",id:"deployment-modes",level:3},{value:"<strong>DNS &amp; Certs</strong>",id:"dns--certs",level:3},{value:"<strong>CI/CD Integration</strong>",id:"cicd-integration",level:3},{value:"<strong>The Takeaway: Why This Matters</strong>",id:"the-takeaway-why-this-matters",level:2}];function c(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Defang Compose Update",src:s(6116).A+"",width:"1200",height:"630"})}),"\n",(0,t.jsx)(n.p,{children:"Deploying applications is hard. Deploying complex, multi-service applications is even harder. When we first built the Defang Portal, we quickly recognized the complexity required to deploy it, even with the early Defang tooling helping us simplify it a lot. But we\u2019ve worked a lot to expand Defang\u2019s capabilities over the last year+ so it could take on more of the work and simplify that process."}),"\n",(0,t.jsx)(n.p,{children:"This evolution wasn\u2019t just based on our own instincts and what we saw in the Portal\u2014it was informed by listening to developers who have been using Defang, as well as our experience building dozens of sample projects for different frameworks and languages. Each time we build a new sample, we learn more about the different requirements of various types of applications and developers and refine Defang\u2019s feature set accordingly. The Portal became an extension of this learning process, serving as both a proving ground and an opportunity to close any remaining gaps, since it\u2019s one of the most complex things we\u2019ve built with Defang."}),"\n",(0,t.jsx)(n.p,{children:"Finally, though, the Defang Portal\u2014an application with six services, including two managed data stores, authentication, and a frontend\u2014is fully deployed using just Docker Compose files and the Defang CLI using GitHub Actions."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"the-initial-setup-a-more-complex-deployment",children:(0,t.jsx)(n.strong,{children:"The Initial Setup: A More Complex Deployment"})}),"\n",(0,t.jsxs)(n.p,{children:["The Portal isn\u2019t a simple static website; it\u2019s a ",(0,t.jsx)(n.strong,{children:"full-stack application"})," with the following services:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Next.js frontend"})," \u2013 Including server components and server actions."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Hasura (GraphQL API)"})," \u2013 Serves as a GraphQL layer."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Hono (TypeScript API)"})," \u2013 Lightweight API for custom business logic."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"OpenAuth (Authentication Service)"})," \u2013 Manages authentication flows."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Redis"})," \u2013 Used for caching and session storage."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Postgres"})," \u2013 The main database."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Initially, we provisioned databases and some DNS configurations using Infra-as-Code because Defang couldn\u2019t yet manage them for us. We also deployed the services themselves manually through infrastructure-as-code, requiring us to define each service separately."}),"\n",(0,t.jsx)(n.p,{children:"This worked, but seemed unnecessarily complex, if we had the right tooling\u2026"}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"the-transition-expanding-defang-to-reduce-complexity",children:(0,t.jsx)(n.strong,{children:"The Transition: Expanding Defang to Reduce Complexity"})}),"\n",(0,t.jsx)(n.p,{children:"We\u2019ve made it a priority to expand Defang\u2019s capabilities a lot over the last year so it could take on more of the heavy lifting of a more complex application. Over the past year, we\u2019ve added loads of features to handle things like:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Provisioning databases"}),", including managing passwords and other secrets securely"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Config interpolation using values stored in AWS SSM"}),", ensuring the same Compose file works both locally and in the cloud"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Provisioning certs and managing DNS records"})," from configuration in the Compose file."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"As a result, we reached a point where we no longer needed custom infrastructure definitions for most of our deployment."}),"\n",(0,t.jsx)(n.h2,{id:"what-changed",children:(0,t.jsx)(n.strong,{children:"What Changed?"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Previously"}),": GitHub Actions ran infra-as-code scripts to provision databases, manage DNS, and define services ",(0,t.jsx)(n.em,{children:"separately from the Docker Compose file we used for local dev"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Now"}),": Our ",(0,t.jsx)(n.a,{href:"https://github.com/marketplace/actions/defang-deployment-action",children:(0,t.jsx)(n.strong,{children:"Defang GitHub Action"})})," targets normal Compose files and deploys everything, using secrets and variables managed in GitHub Actions environments."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Result"}),": We ",(0,t.jsx)(n.strong,{children:"eliminated hundreds of lines of Infra-as-Code"}),", making our deployment leaner and easier to manage and reducing the differences between running the Portal locally and running it in the cloud."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"This wasn\u2019t just about reducing complexity\u2014it was also a validation exercise. We knew that Defang had evolved enough to take over much of our deployment, but by going through the transition process ourselves, we could identify and close the remaining gaps and make sure our users could really make use of Defang for complex production-ready apps."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"how-deployment-works-today",children:(0,t.jsx)(n.strong,{children:"How Deployment Works Today"})}),"\n",(0,t.jsx)(n.h3,{id:"config--secrets-management",children:(0,t.jsx)(n.strong,{children:"Config & Secrets Management"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Sensitive configuration values"})," (database credentials, API keys) are stored ",(0,t.jsx)(n.strong,{children:"securely in AWS SSM"})," using Defang\u2019s ",(0,t.jsx)(n.a,{href:"https://docs.defang.io/docs/concepts/configuration",children:"configuration management tooling"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://docs.defang.io/docs/concepts/configuration#interpolation",children:(0,t.jsx)(n.strong,{children:"Environment variable interpolation"})})," allows these ",(0,t.jsx)(n.strong,{children:"SSM-stored config values"})," to be referenced directly in the Compose file, ensuring the same configuration works in local and cloud environments."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Defang provisions managed Postgres and Redis instances automatically"})," when using the ",(0,t.jsx)(n.code,{children:"x-defang-postgres"})," and ",(0,t.jsx)(n.code,{children:"x-defang-redis"})," extensions, securely injecting credentials where needed with variable interpolation."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"deployment-modes",children:"Deployment Modes"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://docs.defang.io/docs/concepts/deployment-modes",children:(0,t.jsx)(n.strong,{children:"Deployment modes"})})," (",(0,t.jsx)(n.code,{children:"development"}),", ",(0,t.jsx)(n.code,{children:"staging"}),", ",(0,t.jsx)(n.code,{children:"production"}),") adjust infrastructure settings across our dev/staging/prod deployments making sure dev is low cost, and production is secure and resilient."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"dns--certs",children:(0,t.jsx)(n.strong,{children:"DNS & Certs"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["When we first set up the portal (before we even released the private beta) DNS and certs had to be managed outside the Defang context. Now, ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"https://docs.defang.io/docs/concepts/domains",children:"we can provision certs using ACM or Let\u2019s Encrypt"})}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"cicd-integration",children:(0,t.jsx)(n.strong,{children:"CI/CD Integration"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Previously"}),": GitHub Actions ran custom infra-as-code scripts."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Now"}),": The ",(0,t.jsx)(n.a,{href:"https://github.com/DefangLabs/defang-github-action",children:(0,t.jsx)(n.strong,{children:"Defang GitHub Action"})})," installs Defang automatically and runs ",(0,t.jsx)(n.code,{children:"defang compose up"}),", simplifying deployment."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Result"}),": A streamlined, repeatable CI/CD pipeline."]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"the-takeaway-why-this-matters",children:(0,t.jsx)(n.strong,{children:"The Takeaway: Why This Matters"})}),"\n",(0,t.jsxs)(n.p,{children:["By transitioning to ",(0,t.jsx)(n.strong,{children:"fully Compose-based deployments"}),", we:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u2705 ",(0,t.jsx)(n.strong,{children:"Eliminated hundreds of lines of Infra-as-Code"})]}),"\n",(0,t.jsxs)(n.li,{children:["\u2705 ",(0,t.jsx)(n.strong,{children:"Simplified configuration management"})," with secure, environment-aware secrets handling"]}),"\n",(0,t.jsxs)(n.li,{children:["\u2705 ",(0,t.jsx)(n.strong,{children:"Streamlined CI/CD"})," with a lightweight GitHub Actions workflow"]}),"\n",(0,t.jsxs)(n.li,{children:["\u2705 ",(0,t.jsx)(n.strong,{children:"Simplified DNS and cert management"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Every sample project we built, every conversation we had with developers, and every challenge we encountered with the Portal helped us get to this point where we could focus on closing the gaps last few gaps to deploying everything from a Compose file."})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},6116:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/header-379caa18ec71bf543fbaf68619ce085d.png"},8453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>r});var t=s(6540);const i={},o=t.createContext(i);function a(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);