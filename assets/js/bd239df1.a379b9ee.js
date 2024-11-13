"use strict";(self.webpackChunkdefang_docs=self.webpackChunkdefang_docs||[]).push([[1424],{8015:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var n=s(4848),a=s(8453);const o={slug:"hard-lessons-from-hardware",title:"Hard Lessons From Hardware",tags:["Cloud","NoDevOps","Embedded Systems","Hardware","Wifi","Arduino","Defang"],author:"Linda Lee"},i=void 0,r={permalink:"/blog/hard-lessons-from-hardware",source:"@site/blog/2024-11-12-hard-lessons-from-hardware.md",title:"Hard Lessons From Hardware",description:"About the author: Linda Lee is an intern at Defang Software Labs who enjoys learning about computer-related things. She wrote this blog post after having fun with hardware at work.",date:"2024-11-12T00:00:00.000Z",formattedDate:"November 12, 2024",tags:[{label:"Cloud",permalink:"/blog/tags/cloud"},{label:"NoDevOps",permalink:"/blog/tags/no-dev-ops"},{label:"Embedded Systems",permalink:"/blog/tags/embedded-systems"},{label:"Hardware",permalink:"/blog/tags/hardware"},{label:"Wifi",permalink:"/blog/tags/wifi"},{label:"Arduino",permalink:"/blog/tags/arduino"},{label:"Defang",permalink:"/blog/tags/defang"}],readingTime:3.67,hasTruncateMarker:!1,authors:[{name:"Linda Lee"}],frontMatter:{slug:"hard-lessons-from-hardware",title:"Hard Lessons From Hardware",tags:["Cloud","NoDevOps","Embedded Systems","Hardware","Wifi","Arduino","Defang"],author:"Linda Lee"},unlisted:!1,nextItem:{title:"September 2024 Defang Compose Update",permalink:"/blog/2024-09-30-product-update"}},d={authorsImageUrls:[void 0]},l=[{value:"My Story of Embedded Systems With Defang",id:"my-story-of-embedded-systems-with-defang",level:2},{value:"The Beginning",id:"the-beginning",level:2},{value:"The Middle",id:"the-middle",level:2},{value:"The End",id:"the-end",level:2}];function h(e){const t={a:"a",em:"em",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:"About the author: Linda Lee is an intern at Defang Software Labs who enjoys learning about computer-related things. She wrote this blog post after having fun with hardware at work."})}),"\n",(0,n.jsx)(t.h2,{id:"my-story-of-embedded-systems-with-defang",children:"My Story of Embedded Systems With Defang"}),"\n",(0,n.jsx)(t.p,{children:"Have you ever looked at a touch screen fridge and wondered how it works? Back in my day (not very long ago), a fridge was just a fridge. No fancy built-in interface, no images displayed, and no wifi. But times have changed, and I\u2019ve learned a lot about embedded systems, thanks to Defang!"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"smart_fridge",src:s(5243).A+"",width:"2174",height:"1088"})}),"\n",(0,n.jsxs)(t.p,{children:["From my background, I was more into the web development and software side of things. Buffer flushing? Serial monitors? ESP32-S3? These were unheard of. Then one day at Defang, I was suggested to work on a project with a ",(0,n.jsx)(t.a,{href:"https://wiki.seeedstudio.com/Sensor/SenseCAP/SenseCAP_Indicator/Get_started_with_SenseCAP_Indicator/",children:"SenseCAP Indicator"}),", a small programmable touch screen device. Everyone wished me good luck when I started. That\u2019s how I knew it wasn\u2019t going to be an easy ride. But here I am, and I\u2019m glad I did it."]}),"\n",(0,n.jsx)(t.p,{children:"What is embedded systems/programming? It\u2019s combining hardware with software to perform a function, such as interacting with the physical world or accessing cloud services. A common starting point for beginners is an Arduino board, which is what the SenseCAP Indicator has for its hardware. My goal was to make a UI display for this device, and then send its input to a computer, and get that data into the cloud."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"hand_typing",src:s(5299).A+"",width:"1792",height:"1024"})}),"\n",(0,n.jsx)(t.h2,{id:"the-beginning",children:"The Beginning"}),"\n",(0,n.jsxs)(t.p,{children:["My journey kicked off with installing the ",(0,n.jsx)(t.a,{href:"https://www.arduino.cc/en/software",children:"Arduino IDE"})," on my computer. It took me two hours\u2014far longer than I expected\u2014because the software versions I kept trying were not the right ones. Little did I know that I would encounter this issue many times later, such as when downloading ",(0,n.jsx)(t.a,{href:"https://docs.espressif.com/projects/esp-idf/en/stable/esp32/get-started/index.html",children:"ESP-IDF"}),", a tool for firmware flashing. Figuring out what not to install had become a highly coveted skill."]}),"\n",(0,n.jsxs)(t.p,{children:["The next part was writing software to display images and text. This was slightly less of a problem thanks to forums of users who had done the exact same thing several years ago. One tool I used was ",(0,n.jsx)(t.a,{href:"https://squareline.io/",children:"Squareline Studio"}),", a UX/UI design tool for embedded devices. With a bit of trial and error, I got a simple static program displayed onto the device. Not half bad looking either. Here\u2019s what it looked like:"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"ui_static",src:s(7595).A+"",width:"1254",height:"494"})}),"\n",(0,n.jsx)(t.h2,{id:"the-middle",children:"The Middle"}),"\n",(0,n.jsxs)(t.p,{children:["Now came the networking part. Over wifi, I set up a Flask (Python) server on my computer to receive network pings from the SenseCAP Indicator. I used a library called ",(0,n.jsx)(t.a,{href:"https://github.com/arduino-libraries/ArduinoHttpClient",children:"ArduinoHTTPClient"}),". At first, I wanted to ping the server each time a user touched the screen. Then came driver problems, platform incompatibilities, deprecated libraries\u2026"]}),"\n",(0,n.jsx)(t.p,{children:"\u2026 After weeks of limited progress due to resurfacing issues, I decided to adjust my goal to send pings on a schedule of every 5 seconds, rather than relying on user input. I changed the UI to be more colorful, and for good reason. Now, each network ping appears with a message on the screen. Can you look closely to see what it says?"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"ui_wifi",src:s(4174).A+"",width:"1250",height:"444"})}),"\n",(0,n.jsx)(t.p,{children:"This is what the Flask server looked like on my computer as it got pinged:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"local_server",src:s(5151).A+"",width:"1737",height:"853"})}),"\n",(0,n.jsx)(t.p,{children:"Hooray! Once everything was working, It was time to deploy my Flask code as a cloud service so I could access it from any computer, not just my own. Deployment usually takes several hours due to configuring a ton of cloud provider settings. But I ain\u2019t got time for that. Instead, I used Defang to deploy it within minutes, which took care of all that for me. Saved me a lot of time and tears."}),"\n",(0,n.jsx)(t.p,{children:"Here\u2019s the Flask deployment on Defang\u2019s portal view:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"portal_view",src:s(1570).A+"",width:"2138",height:"989"})}),"\n",(0,n.jsx)(t.p,{children:"Here\u2019s the Flask server on the cloud, accessed with a deployment link:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"deployed_server",src:s(9908).A+"",width:"1722",height:"836"})}),"\n",(0,n.jsx)(t.h2,{id:"the-end",children:"The End"}),"\n",(0,n.jsxs)(t.p,{children:["After two whole months, I finally completed my journey from ",(0,n.jsx)(t.a,{href:"https://github.com/commit111/defang-arduino-static",children:"start"})," to ",(0,n.jsx)(t.a,{href:"https://github.com/commit111/defang-arduino-wifi",children:"finish"}),"! This project was an insightful dive into the world of embedded systems, internet networking, and cloud deployment."]}),"\n",(0,n.jsx)(t.p,{children:"Before I let you go, here are the hard lessons from hardware, from yours truly:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Learning what not to do can be equally as important."}),"\n",(0,n.jsx)(t.li,{children:"Some problems are not as unique as you think."}),"\n",(0,n.jsx)(t.li,{children:"One way to achieve a goal is by modifying it."}),"\n",(0,n.jsx)(t.li,{children:"Choose the simpler way if it is offered."}),"\n",(0,n.jsx)(t.li,{children:"That\u2019s where Defang comes in."}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Want to try deploying to the cloud yourself? You can try it out ",(0,n.jsx)(t.a,{href:"https://defang.io/#samples",children:"here"}),". Keep on composing up! \ud83d\udcaa"]})]})}function c(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},9908:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/deployed_server-37f7d73c595477db369f5ce1b8d64271.png"},5299:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/hand_typing-7402e91c8cbc80ac075a0e2ca9d05400.png"},5151:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/local_server-63ca5d9144e5f6c0f8cd1a9d4465a864.png"},1570:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/portal_view-525f3c5a44f13a228c33ca3af3041025.png"},5243:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/smart_fridge-edd1c954979c53c87af5496734f6432d.png"},7595:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/ui_static-ae5b0e53d9326cde7c791097602d41c4.png"},4174:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/ui_wifi-5afeb2362053def85c5ba2156f636704.png"},8453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>r});var n=s(6540);const a={},o=n.createContext(a);function i(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);