"use strict";(self.webpackChunkgtechnadocs=self.webpackChunkgtechnadocs||[]).push([[7643],{5124:(e,t,a)=>{a.r(t),a.d(t,{default:()=>x});a(6540);var n=a(4164),s=a(4586),i=a(1213),l=a(7559),r=a(8027),o=a(7713),c=a(1463),d=a(3892),g=a(5260),m=a(4096),u=a(4848);function h(e){const t=(0,m.kJ)(e);return(0,u.jsx)(g.A,{children:(0,u.jsx)("script",{type:"application/ld+json",children:JSON.stringify(t)})})}function p(e){const{metadata:t}=e,{siteConfig:{title:a}}=(0,s.A)(),{blogDescription:n,blogTitle:l,permalink:r}=t,o="/"===r?a:l;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(i.be,{title:o,description:n}),(0,u.jsx)(c.A,{tag:"blog_posts_list"})]})}function b(e){const{metadata:t,items:a,sidebar:n}=e;return(0,u.jsxs)(r.A,{sidebar:n,children:[(0,u.jsx)(d.A,{items:a}),(0,u.jsx)(o.A,{metadata:t})]})}function x(e){return(0,u.jsxs)(i.e3,{className:(0,n.A)(l.G.wrapper.blogPages,l.G.page.blogListPage),children:[(0,u.jsx)(p,{...e}),(0,u.jsx)(h,{...e}),(0,u.jsx)(b,{...e})]})}},7713:(e,t,a)=>{a.d(t,{A:()=>l});a(6540);var n=a(1312),s=a(9022),i=a(4848);function l(e){const{metadata:t}=e,{previousPage:a,nextPage:l}=t;return(0,i.jsxs)("nav",{className:"pagination-nav","aria-label":(0,n.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[a&&(0,i.jsx)(s.A,{permalink:a,title:(0,i.jsx)(n.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer entries"})}),l&&(0,i.jsx)(s.A,{permalink:l,title:(0,i.jsx)(n.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older entries"}),isNext:!0})]})}},3892:(e,t,a)=>{a.d(t,{A:()=>l});a(6540);var n=a(4096),s=a(4790),i=a(4848);function l(e){let{items:t,component:a=s.A}=e;return(0,i.jsx)(i.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,i.jsx)(n.in,{content:t,children:(0,i.jsx)(a,{children:(0,i.jsx)(t,{})})},t.metadata.permalink)}))})}},1503:(e,t,a)=>{a.d(t,{A:()=>r});a(6540);var n=a(4164),s=a(8774);const i={button:"button__Owf"};var l=a(4848);function r(e){let{size:t=null,outline:a=!1,variant:r="primary",block:o=!1,disabled:c=!1,className:d,style:g,link:m,label:u}=e;const h=t?{sm:"sm",small:"sm",lg:"lg",large:"lg",medium:null}[t]:"",p=h?i[`button--${h}`]:"",b=a?i["button--outline"]:"",x=r?i[`button--${r}`]:"",j=o?i["button--block"]:"",A=c?i.disabled:"",f=c?void 0:m;return(0,l.jsx)(s.A,{to:f,children:(0,l.jsx)("button",{className:(0,n.A)(i.button,p,b,x,j,A,d),style:g,role:"button","aria-disabled":c,children:u})})}},4790:(e,t,a)=>{a.d(t,{A:()=>g});a(6540);var n=a(4164),s=a(4096),i=a(2819);const l={metadata:"metadata_RdXi",blogPostTitle:"blogPostTitle_qTIG",blogPostListTitle:"blogPostListTitle_IvZo",author:"author_JcC_"};var r=a(4848);function o(){const{metadata:e,isBlogPostPage:t}=(0,s.e7)(),{title:a,permalink:n,date:i,formattedDate:o,readingTime:c,authors:d}=e;return(0,r.jsxs)("header",{children:[(0,r.jsx)("h1",{children:t?a:(0,r.jsx)("a",{href:n,children:a})}),(0,r.jsxs)("p",{className:l.metadata,children:[(0,r.jsx)("time",{dateTime:i,children:o}),c&&` \xb7 ${Math.ceil(c)} min read`,d.length>0&&(0,r.jsxs)(r.Fragment,{children:[" | ",d.map(((e,t)=>(0,r.jsxs)("span",{children:[e.url?(0,r.jsx)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",className:l.author,children:e.name}):(0,r.jsx)("span",{className:l.author,children:e.name}),e.title?`, ${e.title}`:""]},t)))]})]})]})}var c=a(3125),d=a(8746);function g(e){let{children:t,className:a}=e;const l=function(){const{isBlogPostPage:e}=(0,s.e7)();return e?void 0:"margin-bottom--xl"}();return(0,r.jsxs)(i.A,{className:(0,n.A)(l,a),children:[(0,r.jsx)(o,{}),(0,r.jsx)(c.A,{children:t}),(0,r.jsx)(d.A,{})]})}},5140:(e,t,a)=>{a.d(t,{A:()=>i});var n=a(9068),s=a(1503);const i={...n.A,Button:s.A}}}]);