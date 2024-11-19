"use strict";(self.webpackChunkgtechnadocs=self.webpackChunkgtechnadocs||[]).push([[9931],{4484:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"projectupdate","title":"Project Update","description":"Current Setup","source":"@site/docs/projectupdate.md","sourceDirName":".","slug":"/projectupdate","permalink":"/gtechnadocs/fr/docs/projectupdate","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var i=t(4848),r=t(8453);const l={},o="Project Update",a={},c=[{value:"Current Setup",id:"current-setup",level:2},{value:"Docusaurus on GitHub Pages",id:"docusaurus-on-github-pages",level:3},{value:"Strapi Installation",id:"strapi-installation",level:3},{value:"Possible Future Deployment",id:"possible-future-deployment",level:4},{value:"Bridge Script",id:"bridge-script",level:3},{value:"What the Script Does",id:"what-the-script-does",level:4},{value:"Key Tools and Their Roles",id:"key-tools-and-their-roles",level:2},{value:"Strapi",id:"strapi",level:3},{value:"Strapi Workflow",id:"strapi-workflow",level:4},{value:"Docusaurus",id:"docusaurus",level:3},{value:"Challenges and Complexities",id:"challenges-and-complexities",level:2}];function d(e){const n={br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"project-update",children:"Project Update"})}),"\n",(0,i.jsx)(n.h2,{id:"current-setup",children:"Current Setup"}),"\n",(0,i.jsx)(n.h3,{id:"docusaurus-on-github-pages",children:"Docusaurus on GitHub Pages"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"I successfully set up Docusaurus on GitHub Pages to test the platform online instead of just locally."}),"\n",(0,i.jsxs)(n.li,{children:["I chose GitHub Pages because it was easier than using our servers, especially since ",(0,i.jsx)(n.code,{children:"devapp.gtechna.net"})," was often down when I tried working with it."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"strapi-installation",children:"Strapi Installation"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"I installed Strapi locally to better understand how it integrates with Docusaurus."}),"\n",(0,i.jsxs)(n.li,{children:["Strapi runs as a local server on my machine, and I access its admin panel through a browser (",(0,i.jsx)(n.code,{children:"http://localhost:1337/admin"}),")."]}),"\n",(0,i.jsx)(n.li,{children:"The project files are on GitHub to share the setup and ensure version control, but the application itself only works locally unless explicitly deployed to a remote server."}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"possible-future-deployment",children:"Possible Future Deployment"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"While I\u2019m currently running Strapi locally, it can be deployed to a shared server or cloud platform (e.g., AWS, DigitalOcean) for team-wide access."}),"\n",(0,i.jsxs)(n.li,{children:["Considerations:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Documentation for some clients will be hosted on-premise and for others on our AWS environment."}),"\n",(0,i.jsx)(n.li,{children:"This may introduce complexities depending on where Strapi is hosted."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"bridge-script",children:"Bridge Script"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"I wrote a JavaScript script that acts as a bridge between Strapi and Docusaurus."}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"what-the-script-does",children:"What the Script Does"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Fetches content"}),": It uses Strapi\u2019s API to retrieve the content I manage in Strapi."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Converts content"}),": The script converts the data into Markdown files, complete with frontmatter metadata (e.g., title, slug)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Saves to Docusaurus"}),": These Markdown files are saved into the appropriate folders in the Docusaurus project."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Static Site Generation"}),": Once the files are in place, Docusaurus builds a static site for the documentation."]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"key-tools-and-their-roles",children:"Key Tools and Their Roles"}),"\n",(0,i.jsx)(n.h3,{id:"strapi",children:"Strapi"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"What it is"}),": A headless CMS, meaning it\u2019s a back-end content manager with no direct connection to the front-end."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Why I chose it"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Good solution for managing multiple versions of content (e.g., English/French) and assets (images, videos)."}),"\n",(0,i.jsx)(n.li,{children:"Promised WYSIWYG content organization, though it doesn\u2019t fully meet that expectation."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"How it works"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'You define content types (e.g., "documentation pages," "blog posts") in Strapi.'}),"\n",(0,i.jsx)(n.li,{children:"Map these content types to Docusaurus folders via the bridge script."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"strapi-workflow",children:"Strapi Workflow"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Organize Docusaurus folders and scripts."}),"\n",(0,i.jsx)(n.li,{children:"Define content types in Strapi."}),"\n",(0,i.jsx)(n.li,{children:"Write and maintain the bridge script to connect the two."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"docusaurus",children:"Docusaurus"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"What it is"}),": A static site generator that builds the front-end documentation site."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Plugins"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"i18n (Internationalization)"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Handles translations by associating content with language-specific versions."}),"\n",(0,i.jsx)(n.li,{children:"Requires properly structured content."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Algolia Search"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Enhances search functionality by indexing your documentation and returning relevant results."}),"\n",(0,i.jsxs)(n.li,{children:["Setup involves:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Creating an account with Algolia."}),"\n",(0,i.jsx)(n.li,{children:"Configuring their crawler for your site."}),"\n",(0,i.jsx)(n.li,{children:"Adding API keys and configuration files."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"challenges-and-complexities",children:"Challenges and Complexities"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Iterative Content Structure"}),":",(0,i.jsx)(n.br,{}),"\n","One challenge is that the content isn\u2019t fully developed yet, making it hard to plan the structure in advance. As the content evolves, the bridge script will likely need several iterations to accommodate changes."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Managing Multiple Documentation Versions"}),":",(0,i.jsx)(n.br,{}),"\n","We discussed creating different versions of the documentation website for specific clients or internal use, rather than managing content display through roles."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Strapi"}),": Needs a clear system to classify content (e.g., tags or fields for version or client)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Bridge Script"}),": Must dynamically fetch and organize content for each version, increasing complexity."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Sidebar Automation"}),":",(0,i.jsx)(n.br,{}),"\n","The content of the sidebars in Docusaurus isn\u2019t as automated as it could be. For now, I have to define the sidebar manually, which adds some extra overhead. I\u2019m sure this feels minor to a developer, but to me, writing scripts is not like breathing!"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Algolia Search Setup"}),":",(0,i.jsx)(n.br,{}),"\n","Setting up Algolia is an involved process. While I might be able to configure it on the current setup with GitHub Pages, it\u2019s complex enough that it should be done by someone with more expertise. Additionally, the setup would need to be redone when we move the site to our servers, making it a task better suited for later in the project timeline."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Autonomy vs. Complexity"}),":",(0,i.jsx)(n.br,{}),"\n","I\u2019m aiming to stay as independent as possible to avoid delays, but there are limits to my technical capabilities."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>o});var s=t(6540);const i={},r=s.createContext(i);function l(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);