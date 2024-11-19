"use strict";(self.webpackChunkgtechnadocs=self.webpackChunkgtechnadocs||[]).push([[4481],{4096:(e,t,a)=>{a.d(t,{in:()=>c,OU:()=>P,Ki:()=>C,kJ:()=>b,x:()=>r,e7:()=>d,J_:()=>x,Gx:()=>_});var s=a(6540),n=a(9532),i=a(6803),l=a(4848);function r(){const e=(0,i.A)(),t=e?.data?.blogMetadata;if(!t)throw new Error("useBlogMetadata() can't be called on the current route because the blog metadata could not be found in route context");return t}const o=s.createContext(null);function c(e){let{children:t,content:a,isBlogPostPage:n=!1}=e;const i=function(e){let{content:t,isBlogPostPage:a}=e;return(0,s.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:a})),[t,a])}({content:a,isBlogPostPage:n});return(0,l.jsx)(o.Provider,{value:i,children:t})}function d(){const e=(0,s.useContext)(o);if(null===e)throw new n.dV("BlogPostProvider");return e}var m=a(6025),u=a(4586);const g=e=>new Date(e).toISOString();function h(e){const t=e.map(f);return{author:1===t.length?t[0]:t}}function p(e,t,a){return e?{image:j({imageUrl:t(e,{absolute:!0}),caption:`title image for the blog post: ${a}`})}:{}}function b(e){const{siteConfig:t}=(0,u.A)(),{withBaseUrl:a}=(0,m.hH)(),{metadata:{blogDescription:s,blogTitle:n,permalink:i}}=e,l=`${t.url}${i}`;return{"@context":"https://schema.org","@type":"Blog","@id":l,mainEntityOfPage:l,headline:n,description:s,blogPost:e.items.map((e=>function(e,t,a){const{assets:s,frontMatter:n,metadata:i}=e,{date:l,title:r,description:o,lastUpdatedAt:c}=i,d=s.image??n.image,m=n.keywords??[],u=`${t.url}${i.permalink}`,b=c?g(c):void 0;return{"@type":"BlogPosting","@id":u,mainEntityOfPage:u,url:u,headline:r,name:r,description:o,datePublished:l,...b?{dateModified:b}:{},...h(i.authors),...p(d,a,r),...m?{keywords:m}:{}}}(e.content,t,a)))}}function x(){const e=r(),{assets:t,metadata:a}=d(),{siteConfig:s}=(0,u.A)(),{withBaseUrl:n}=(0,m.hH)(),{date:i,title:l,description:o,frontMatter:c,lastUpdatedAt:b}=a,x=t.image??c.image,f=c.keywords??[],j=b?g(b):void 0,v=`${s.url}${a.permalink}`;return{"@context":"https://schema.org","@type":"BlogPosting","@id":v,mainEntityOfPage:v,url:v,headline:l,name:l,description:o,datePublished:i,...j?{dateModified:j}:{},...h(a.authors),...p(x,n,l),...f?{keywords:f}:{},isPartOf:{"@type":"Blog","@id":`${s.url}${e.blogBasePath}`,name:e.blogTitle}}}function f(e){return{"@type":"Person",...e.name?{name:e.name}:{},...e.title?{description:e.title}:{},...e.url?{url:e.url}:{},...e.email?{email:e.email}:{},...e.imageURL?{image:e.imageURL}:{}}}function j(e){let{imageUrl:t,caption:a}=e;return{"@type":"ImageObject","@id":t,url:t,contentUrl:t,caption:a}}var v=a(6347),A=a(8774),N=a(1682),k=a(9169);function _(e){const{pathname:t}=(0,v.zy)();return(0,s.useMemo)((()=>e.filter((e=>function(e,t){return!(e.unlisted&&!(0,k.ys)(e.permalink,t))}(e,t)))),[e,t])}function C(e){const t=(0,N.$z)(e,(e=>`${new Date(e.date).getFullYear()}`)),a=Object.entries(t);return a.reverse(),a}function P(e){let{items:t,ulClassName:a,liClassName:s,linkClassName:n,linkActiveClassName:i}=e;return(0,l.jsx)("ul",{className:a,children:t.map((e=>(0,l.jsx)("li",{className:s,children:(0,l.jsx)(A.A,{isNavLink:!0,to:e.permalink,className:n,activeClassName:i,children:e.title})},e.permalink)))})}},8027:(e,t,a)=>{a.d(t,{A:()=>G});var s=a(6540),n=a(4164),i=a(8887),l=a(4581),r=a(1312),o=a(4096),c=a(6342),d=a(1107),m=a(4848);function u(e){let{year:t,yearGroupHeadingClassName:a,children:s}=e;return(0,m.jsxs)("div",{role:"group",children:[(0,m.jsx)(d.A,{as:"h3",className:a,children:t}),s]})}function g(e){let{items:t,yearGroupHeadingClassName:a,ListComponent:s}=e;if((0,c.p)().blog.sidebar.groupByYear){const e=(0,o.Ki)(t);return(0,m.jsx)(m.Fragment,{children:e.map((e=>{let[t,n]=e;return(0,m.jsx)(u,{year:t,yearGroupHeadingClassName:a,children:(0,m.jsx)(s,{items:n})},t)}))})}return(0,m.jsx)(s,{items:t})}const h=(0,s.memo)(g),p="sidebar_re4s",b="sidebarItemTitle_pO2u",x="sidebarItemList_Yudw",f="sidebarItem__DBe",j="sidebarItemLink_mo7H",v="sidebarItemLinkActive_I1ZP",A="yearGroupHeading_rMGB",N=e=>{let{items:t}=e;return(0,m.jsx)(o.OU,{items:t,ulClassName:(0,n.A)(x,"clean-list"),liClassName:f,linkClassName:j,linkActiveClassName:v})};function k(e){let{sidebar:t}=e;const a=(0,o.Gx)(t.items);return(0,m.jsx)("aside",{className:"col col--3",children:(0,m.jsxs)("nav",{className:(0,n.A)(p,"thin-scrollbar"),"aria-label":(0,r.T)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,m.jsx)("div",{className:(0,n.A)(b,"margin-bottom--md"),children:t.title}),(0,m.jsx)(h,{items:a,ListComponent:N,yearGroupHeadingClassName:A})]})})}const _=(0,s.memo)(k);var C=a(5600);const P="yearGroupHeading_QT03",y=e=>{let{items:t}=e;return(0,m.jsx)(o.OU,{items:t,ulClassName:"menu__list",liClassName:"menu__list-item",linkClassName:"menu__link",linkActiveClassName:"menu__link--active"})};function w(e){let{sidebar:t}=e;const a=(0,o.Gx)(t.items);return(0,m.jsx)(h,{items:a,ListComponent:y,yearGroupHeadingClassName:P})}function B(e){return(0,m.jsx)(C.GX,{component:w,props:e})}const U=(0,s.memo)(B);function M(e){let{sidebar:t}=e;const a=(0,l.l)();return t?.items.length?"mobile"===a?(0,m.jsx)(U,{sidebar:t}):(0,m.jsx)(_,{sidebar:t}):null}function G(e){const{sidebar:t,toc:a,children:s,...l}=e,r=t&&t.items.length>0;return(0,m.jsx)(i.A,{...l,children:(0,m.jsx)("div",{className:"container margin-vert--lg",children:(0,m.jsxs)("div",{className:"row",children:[(0,m.jsx)(M,{sidebar:t}),(0,m.jsx)("main",{className:(0,n.A)("col",{"col--7":r,"col--9 col--offset-1":!r}),children:s}),a&&(0,m.jsx)("div",{className:"col col--2",children:a})]})})})}},2819:(e,t,a)=>{a.d(t,{A:()=>n});a(6540);var s=a(4848);function n(e){let{children:t,className:a}=e;return(0,s.jsx)("article",{className:a,children:t})}},3125:(e,t,a)=>{a.d(t,{A:()=>o});a(6540);var s=a(4164),n=a(440),i=a(4096),l=a(7910),r=a(4848);function o(e){let{children:t,className:a}=e;const{isBlogPostPage:o}=(0,i.e7)();return(0,r.jsx)("div",{id:o?n.LU:void 0,className:(0,s.A)("markdown",a),children:(0,r.jsx)(l.A,{children:t})})}},8746:(e,t,a)=>{a.d(t,{A:()=>g});a(6540);var s=a(4164),n=a(4096),i=a(7559),l=a(4336),r=a(2053),o=a(1312),c=a(8774),d=a(4848);function m(){return(0,d.jsx)("b",{children:(0,d.jsx)(o.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read more"})})}function u(e){const{blogPostTitle:t,...a}=e;return(0,d.jsx)(c.A,{"aria-label":(0,o.T)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...a,children:(0,d.jsx)(m,{})})}function g(){const{metadata:e,isBlogPostPage:t}=(0,n.e7)(),{tags:a,title:o,editUrl:c,hasTruncateMarker:m,lastUpdatedBy:g,lastUpdatedAt:h}=e,p=!t&&m,b=a.length>0;if(!(b||p||c))return null;if(t){const e=!!(c||h||g);return(0,d.jsxs)("footer",{className:"docusaurus-mt-lg",children:[b&&(0,d.jsx)("div",{className:(0,s.A)("row","margin-top--sm",i.G.blog.blogFooterEditMetaRow),children:(0,d.jsx)("div",{className:"col",children:(0,d.jsx)(r.A,{tags:a})})}),e&&(0,d.jsx)(l.A,{className:(0,s.A)("margin-top--sm",i.G.blog.blogFooterEditMetaRow),editUrl:c,lastUpdatedAt:h,lastUpdatedBy:g})]})}return(0,d.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[b&&(0,d.jsx)("div",{className:(0,s.A)("col",{"col--9":p}),children:(0,d.jsx)(r.A,{tags:a})}),p&&(0,d.jsx)("div",{className:(0,s.A)("col text--right",{"col--3":b}),children:(0,d.jsx)(u,{blogPostTitle:o,to:e.permalink})})]})}},9022:(e,t,a)=>{a.d(t,{A:()=>l});a(6540);var s=a(4164),n=a(8774),i=a(4848);function l(e){const{permalink:t,title:a,subLabel:l,isNext:r}=e;return(0,i.jsxs)(n.A,{className:(0,s.A)("pagination-nav__link",r?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[l&&(0,i.jsx)("div",{className:"pagination-nav__sublabel",children:l}),(0,i.jsx)("div",{className:"pagination-nav__label",children:a})]})}},6133:(e,t,a)=>{a.d(t,{A:()=>r});a(6540);var s=a(4164),n=a(8774);const i={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var l=a(4848);function r(e){let{permalink:t,label:a,count:r,description:o}=e;return(0,l.jsxs)(n.A,{href:t,title:o,className:(0,s.A)(i.tag,r?i.tagWithCount:i.tagRegular),children:[a,r&&(0,l.jsx)("span",{children:r})]})}},2053:(e,t,a)=>{a.d(t,{A:()=>o});a(6540);var s=a(4164),n=a(1312),i=a(6133);const l={tags:"tags_jXut",tag:"tag_QGVx"};var r=a(4848);function o(e){let{tags:t}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("b",{children:(0,r.jsx)(n.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,r.jsx)("ul",{className:(0,s.A)(l.tags,"padding--none","margin-left--sm"),children:t.map((e=>(0,r.jsx)("li",{className:l.tag,children:(0,r.jsx)(i.A,{...e})},e.permalink)))})]})}}}]);