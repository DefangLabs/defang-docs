"use strict";(self.webpackChunkdefang_docs=self.webpackChunkdefang_docs||[]).push([[5110],{6346:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var r=t(74848),o=t(28453),a=t(11470),i=t(19365);const s={title:"Networking",description:"Defang helps you safely configure your services' networking.",sidebar_position:300},l="Networking",c={id:"concepts/networking",title:"Networking",description:"Defang helps you safely configure your services' networking.",source:"@site/docs/concepts/networking.mdx",sourceDirName:"concepts",slug:"/concepts/networking",permalink:"/docs/concepts/networking",draft:!1,unlisted:!1,editUrl:"https://github.com/DefangLabs/defang-docs/tree/main/docs/concepts/networking.mdx",tags:[],version:"current",sidebarPosition:300,frontMatter:{title:"Networking",description:"Defang helps you safely configure your services' networking.",sidebar_position:300},sidebar:"docsSidebar",previous:{title:"Domains",permalink:"/docs/concepts/domains"},next:{title:"Resources",permalink:"/docs/concepts/resources"}},u={},d=[{value:"Internal Communication",id:"internal-communication",level:2},{value:"Sample Configuration",id:"sample-configuration",level:3},{value:"Internal DNS",id:"internal-dns",level:3}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"networking",children:"Networking"}),"\n",(0,r.jsx)(n.p,{children:"Defang configures Security Groups, deploys applications to a private subnet and uses an Application Load Balancer to route traffic to your services from the public internet only when required."}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["This page is about internal networking only. If you want to configure your services to be accessible from the public internet, check the ",(0,r.jsx)(n.a,{href:"/docs/concepts/domains",children:"Domains page"}),"."]})}),"\n",(0,r.jsx)(n.h2,{id:"internal-communication",children:"Internal Communication"}),"\n",(0,r.jsxs)(n.p,{children:["You can expose ports in your service definition to allow other services to communicate with it. Similar to public communication, you can use the ",(0,r.jsx)(n.code,{children:"ports"})," section of your service definition, but set the ",(0,r.jsx)(n.code,{children:"mode"})," to ",(0,r.jsx)(n.code,{children:"host"})," instead of ",(0,r.jsx)(n.code,{children:"ingress"})," to allow other services to communicate with it through the internal network."]}),"\n",(0,r.jsx)(n.h3,{id:"sample-configuration",children:"Sample Configuration"}),"\n",(0,r.jsxs)(a.A,{children:[(0,r.jsx)(i.A,{value:"compose",label:"Compose",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"services:\n    # [...]\n    service1:\n      ports:\n        - mode: host\n          target: 3000\t\n          app_protocol: http\n"})})}),(0,r.jsx)(i.A,{value:"pulumi",label:"Pulumi",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:'const service = new defang.DefangService("service1", {\n    // [...]\n    ports: [{\n        target: 3000,\n        mode: "host",\n        protocol: "http",\n    }],\n});\n'})})})]}),"\n",(0,r.jsx)(n.h3,{id:"internal-dns",children:"Internal DNS"}),"\n",(0,r.jsx)(n.p,{children:"Internal communication is handled slightly differently between the Defang Playground and Defang BYOC."}),"\n",(0,r.jsxs)(a.A,{children:[(0,r.jsxs)(i.A,{value:"playground",label:"Playground",default:!0,children:[(0,r.jsx)(n.p,{children:"Internal communication between services in the Defang Playground follows the following pattern:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"http://<username>-<service-name>:<port>\n"})})]}),(0,r.jsxs)(i.A,{value:"byoc",label:"BYOC",children:[(0,r.jsx)(n.p,{children:"Internal communication between services in Defang BYOC follows the following pattern:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"http://<service-name>:<port>\n"})})]})]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},11470:(e,n,t)=>{t.d(n,{A:()=>j});var r=t(96540),o=t(20053),a=t(23104),i=t(56347),s=t(205),l=t(57485),c=t(31682),u=t(89466);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:o}}=e;return{value:n,label:t,attributes:r,default:o}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const o=(0,i.W6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(o.location.search);n.set(a,e),o.replace({...o.location,search:n.toString()})}),[a,o])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:o}=e,a=p(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:a}))),[c,d]=f({queryString:t,groupId:o}),[m,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,a]=(0,u.Dv)(t);return[o,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:o}),b=(()=>{const e=c??m;return h({value:e,tabValues:a})?e:null})();(0,s.A)((()=>{b&&l(b)}),[b]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),g(e)}),[d,g,a]),tabValues:a}}var g=t(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(74848);function x(e){let{className:n,block:t,selectedValue:r,selectValue:i,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),u=e=>{const n=e.currentTarget,t=l.indexOf(n),o=s[t].value;o!==r&&(c(n),i(o))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>l.push(e),onKeyDown:d,onClick:u,...a,className:(0,o.A)("tabs__item",b.tabItem,a?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function y(e){let{lazy:n,children:t,selectedValue:o}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function w(e){const n=m(e);return(0,v.jsxs)("div",{className:(0,o.A)("tabs-container",b.tabList),children:[(0,v.jsx)(x,{...e,...n}),(0,v.jsx)(y,{...e,...n})]})}function j(e){const n=(0,g.A)();return(0,v.jsx)(w,{...e,children:d(e.children)},String(n))}},19365:(e,n,t)=>{t.d(n,{A:()=>i});t(96540);var r=t(20053);const o={tabItem:"tabItem_Ymn6"};var a=t(74848);function i(e){let{children:n,hidden:t,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,i),hidden:t,children:n})}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>s});var r=t(96540);const o={},a=r.createContext(o);function i(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);