"use strict";(self.webpackChunkdefang_docs=self.webpackChunkdefang_docs||[]).push([[288],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),l=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(r),h=n,g=p["".concat(c,".").concat(h)]||p[h]||d[h]||a;return r?o.createElement(g,s(s({ref:t},u),{},{components:r})):o.createElement(g,s({ref:t},u))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:n,s[1]=i;for(var l=2;l<a;l++)s[l]=r[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}h.displayName="MDXCreateElement"},3581:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var o=r(7462),n=(r(7294),r(3905));const a={sidebar_position:4},s="FAQ",i={unversionedId:"FAQ",id:"FAQ",title:"FAQ",description:"Which cloud/region is the app being deployed to?",source:"@site/docs/FAQ.md",sourceDirName:".",slug:"/FAQ",permalink:"/docs/docs/FAQ",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Webpage and Form Post",permalink:"/docs/docs/Samples/Webpage and Form Post"}},c={},l=[{value:"<strong>Which cloud/region is the app being deployed to?</strong>",id:"which-cloudregion-is-the-app-being-deployed-to",level:3},{value:"<strong>Can I bring my own AWS or other cloud account?</strong>",id:"can-i-bring-my-own-aws-or-other-cloud-account",level:3},{value:"<strong>On AWS, can I deploy to services such as EC2, EKS, or Lambda?</strong>",id:"on-aws-can-i-deploy-to-services-such-as-ec2-eks-or-lambda",level:3},{value:"<strong>Can I access AWS storage services such as S3 or database services such as RDS ? How?</strong>",id:"can-i-access-aws-storage-services-such-as-s3-or-database-services-such-as-rds--how",level:3},{value:"<strong>Do you plan to support other clouds?</strong>",id:"do-you-plan-to-support-other-clouds",level:3},{value:"<strong>Can I run production apps on DOP?</strong>",id:"can-i-run-production-apps-on-dop",level:3}],u={toc:l},p="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"faq"},"FAQ"),(0,n.kt)("h3",{id:"which-cloudregion-is-the-app-being-deployed-to"},(0,n.kt)("strong",{parentName:"h3"},"Which cloud/region is the app being deployed to?")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Currently we are deploying to AWS us-west-2.")),(0,n.kt)("h3",{id:"can-i-bring-my-own-aws-or-other-cloud-account"},(0,n.kt)("strong",{parentName:"h3"},"Can I bring my own AWS or other cloud account?")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"With the current release, which is designed for customers to try out the Defang model with non-production apps, your apps are deployed to Defang\u2019s AWS account. We are working on bring-your-own-account for an upcoming release.")),(0,n.kt)("h3",{id:"on-aws-can-i-deploy-to-services-such-as-ec2-eks-or-lambda"},(0,n.kt)("strong",{parentName:"h3"},"On AWS, can I deploy to services such as EC2, EKS, or Lambda?")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The current release includes support for containers only, deployed to ECS. Future releases shall include support for Lambda, EC2 etc. Using our Pulumi provider, it is possible to combine Defang services with other native AWS resources.")),(0,n.kt)("h3",{id:"can-i-access-aws-storage-services-such-as-s3-or-database-services-such-as-rds--how"},(0,n.kt)("strong",{parentName:"h3"},"Can I access AWS storage services such as S3 or database services such as RDS ? How?")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Yes, you can access any storage service from the underlying cloud platform (AWS) or from a remote database service. To secure access from your Defang services, you should use our published public IPs in your AWS security group or IP allow list.")),(0,n.kt)("h3",{id:"do-you-plan-to-support-other-clouds"},(0,n.kt)("strong",{parentName:"h3"},"Do you plan to support other clouds?")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"While we currently deploy to AWS, the Defang model is designed to be inherently portable. We plan to support other clouds in future releases.")),(0,n.kt)("h3",{id:"can-i-run-production-apps-on-dop"},(0,n.kt)("strong",{parentName:"h3"},"Can I run production apps on DOP?")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The current release of DOP is meant for testing and trial purposes only. Deployment of productions apps is not supported and explicitly disallowed by the ",(0,n.kt)("a",{parentName:"li",href:"https://defang.io/terms-conditions.html"},"Terms and Conditions"),".")))}d.isMDXComponent=!0}}]);