import{j as i,a as S}from"./vendor-query-IdFiRdW_.js";import{c as u,S as I}from"./index-MeU6IuIf.js";import{g as R}from"./vendor-gsap-xgxdCp6f.js";import{S as D}from"./vendor-radix-Cyvr7HlE.js";import{c as P}from"./index-B_jtOnfb.js";import{c as y}from"./utils-CDN07tui.js";import{F as A}from"./FadeImage-BY-zKD_V.js";import{u as T}from"./useRevealReady-BpKLEnZU.js";import"./vendor-react-CBYsQ_H5.js";const $=P("inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",secondary:"border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",destructive:"border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"}},defaultVariants:{variant:"default"}});function E(t){const e=u.c(12);let s,n,r,a;e[0]!==t?({className:s,variant:a,asChild:r,...n}=t,e[0]=t,e[1]=s,e[2]=n,e[3]=r,e[4]=a):(s=e[1],n=e[2],r=e[3],a=e[4]);const c=(r===void 0?!1:r)?D:"span";let o;e[5]!==s||e[6]!==a?(o=y($({variant:a}),s),e[5]=s,e[6]=a,e[7]=o):o=e[7];let l;return e[8]!==c||e[9]!==n||e[10]!==o?(l=i.jsx(c,{"data-slot":"badge",className:o,...n}),e[8]=c,e[9]=n,e[10]=o,e[11]=l):l=e[11],l}function _(t){const e=u.c(8);let s,n;e[0]!==t?({className:s,...n}=t,e[0]=t,e[1]=s,e[2]=n):(s=e[1],n=e[2]);let r;e[3]!==s?(r=y("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",s),e[3]=s,e[4]=r):r=e[4];let a;return e[5]!==n||e[6]!==r?(a=i.jsx("div",{"data-slot":"card",className:r,...n}),e[5]=n,e[6]=r,e[7]=a):a=e[7],a}function B(t){const e=u.c(8);let s,n;e[0]!==t?({className:s,...n}=t,e[0]=t,e[1]=s,e[2]=n):(s=e[1],n=e[2]);let r;e[3]!==s?(r=y("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",s),e[3]=s,e[4]=r):r=e[4];let a;return e[5]!==n||e[6]!==r?(a=i.jsx("div",{"data-slot":"card-header",className:r,...n}),e[5]=n,e[6]=r,e[7]=a):a=e[7],a}function M(t){const e=u.c(8);let s,n;e[0]!==t?({className:s,...n}=t,e[0]=t,e[1]=s,e[2]=n):(s=e[1],n=e[2]);let r;e[3]!==s?(r=y("leading-none font-semibold",s),e[3]=s,e[4]=r):r=e[4];let a;return e[5]!==n||e[6]!==r?(a=i.jsx("div",{"data-slot":"card-title",className:r,...n}),e[5]=n,e[6]=r,e[7]=a):a=e[7],a}function W(t){const e=u.c(8);let s,n;e[0]!==t?({className:s,...n}=t,e[0]=t,e[1]=s,e[2]=n):(s=e[1],n=e[2]);let r;e[3]!==s?(r=y("text-muted-foreground text-sm",s),e[3]=s,e[4]=r):r=e[4];let a;return e[5]!==n||e[6]!==r?(a=i.jsx("div",{"data-slot":"card-description",className:r,...n}),e[5]=n,e[6]=r,e[7]=a):a=e[7],a}function L(t){const e=u.c(8);let s,n;e[0]!==t?({className:s,...n}=t,e[0]=t,e[1]=s,e[2]=n):(s=e[1],n=e[2]);let r;e[3]!==s?(r=y("px-6",s),e[3]=s,e[4]=r):r=e[4];let a;return e[5]!==n||e[6]!==r?(a=i.jsx("div",{"data-slot":"card-content",className:r,...n}),e[5]=n,e[6]=r,e[7]=a):a=e[7],a}function F(t){const e=u.c(28),{eyebrow:s,title:n,description:r,tags:a,image:m,href:c,className:o}=t,l=`
        flex
        w-full
        flex-col
        overflow-hidden
        border-3
        border-black
        bg-card

        ${o??""}

        md:flex-row
        md:items-stretch
      `;let d;e[0]!==l?(d=l.trim(),e[0]=l,e[1]=d):d=e[1];let p;e[2]!==m?(p=i.jsx("div",{className:`
          relative
          mx-4
          mt-4
          aspect-[4/3]
          shrink-0
          overflow-hidden
          rounded-2xl
          bg-muted

          sm:mx-5
          sm:mt-5
          sm:aspect-[16/10]

          md:my-4
          md:ms-8
          md:me-0
          md:aspect-auto
          md:w-[calc(50%-1.5rem)]
        `,children:m?i.jsx(A,{src:m,alt:"",width:900,height:871,className:"absolute inset-0 h-full w-full object-cover",loading:"lazy",decoding:"async"}):i.jsx("div",{className:"absolute inset-0 grid place-items-center p-6 text-sm text-muted-foreground",children:"Image"})}),e[2]=m,e[3]=p):p=e[3];let f;e[4]!==s?(f=s?i.jsx("p",{className:"eyebrow text-accent-sky",children:s}):null,e[4]=s,e[5]=f):f=e[5];let x;e[6]!==n?(x=i.jsx(M,{className:`
              font-heading
              mt-3
              text-3xl
              tracking-tight

              sm:text-4xl
              md:text-4xl
            `,children:n}),e[6]=n,e[7]=x):x=e[7];let g;e[8]!==r?(g=i.jsx(W,{className:`
              font-body
              mt-4
              text-base
              leading-relaxed

              sm:text-lg
              lg:text-xl
            `,children:r}),e[8]=r,e[9]=g):g=e[9];let b;e[10]!==f||e[11]!==x||e[12]!==g?(b=i.jsxs(B,{className:"p-0",children:[f,x,g]}),e[10]=f,e[11]=x,e[12]=g,e[13]=b):b=e[13];let h;e[14]!==a?(h=a.map(z),e[14]=a,e[15]=h):h=e[15];let v;e[16]!==h?(v=i.jsx(L,{className:"mt-6 p-0 md:mt-auto md:pt-8",children:i.jsx("div",{className:"flex flex-wrap gap-2",children:h})}),e[16]=h,e[17]=v):v=e[17];let w;e[18]!==b||e[19]!==v?(w=i.jsxs("div",{className:`
          flex
          min-w-0
          flex-1
          flex-col
          px-5
          py-5

          sm:px-6
          sm:py-6

          md:w-1/2
          md:px-7
          md:py-8

          lg:px-10
          lg:py-10
        `,children:[b,v]}),e[18]=b,e[19]=v,e[20]=w):w=e[20];let j;e[21]!==w||e[22]!==d||e[23]!==p?(j=i.jsxs(_,{className:d,children:[p,w]}),e[21]=w,e[22]=d,e[23]=p,e[24]=j):j=e[24];const N=j;if(c){let k;return e[25]!==N||e[26]!==c?(k=i.jsx("a",{href:c,target:"_blank",rel:"noreferrer",className:`
          block
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-ring
          focus-visible:ring-offset-2
        `,children:N}),e[25]=N,e[26]=c,e[27]=k):k=e[27],k}return N}function z(t){return i.jsx(E,{variant:"secondary",className:`
                  border-transparent
                  bg-muted
                  px-2.5
                  py-1
                  font-body
                  text-xs
                  font-medium
                  text-muted-foreground

                  sm:px-3
                  sm:text-sm
                `,children:t},t)}const G="/portfolio/assets/Bin%20Sadan-DH1YtG70.webp",H="/portfolio/assets/Careerly-BM9Gi-y2.webp",V="/portfolio/assets/Go-MwIYkTbv.webp",O="/portfolio/assets/Power%20Zone-AvMDmVHN.webp",Z="/portfolio/assets/Streamore-DQTHvUxm.webp",C=[{eyebrow:"2026 · Platform",title:"GO Delivery",image:V,description:"Multi-store delivery platform. Customer workflows, order management, auth with RBAC, real-time notifications, and architecture ready for merchants.",tags:["Django","React","Redis","RBAC"]},{eyebrow:"2026 · AI Platform",title:"Careerly",image:H,description:"AI-powered career platform. Aggregates jobs from 4 sources, analyzes CVs, tailors resumes with AI, and tracks your applications.",tags:["Django","DRF","React","TypeScript","AI"]},{eyebrow:"2025 · Enterprise",title:"Bin Saedan Smart ERP",image:G,description:"Smart ERP for enterprise workflows. REST APIs, database architecture, role-based access, and workflow automation built closely with the client.",tags:["Django","DRF","PostgreSQL","React"]},{eyebrow:"2025 · Real-time",title:"Streamore",image:Z,description:"Live streaming platform built on LiveKit and RTMP. Broadcast to 5 platforms at once with layouts, overlays, and WebSocket private chat.",tags:["LiveKit","RTMP","WebSockets","React","Django"]},{eyebrow:"2024 · Microservice",title:"Power Zone Dashboard",image:O,description:"Fitness dashboard for workouts, nutrition, and progress tracking. Coach views, RBAC, optimized APIs, and WebSocket realtime.",tags:["React","Django","WebSockets"]}];R.registerPlugin(I);const K=t=>`+=${(t-1)*110}%`;function ne(){const t=u.c(13),[e,s]=T(),n=S.useRef(null);let r,a;t[0]!==s||t[1]!==e?(r=()=>{if(typeof window>"u"||!s||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const p=R.context(()=>{const f=n.current;if(!f||window.innerWidth<768)return;const x=()=>Math.max(0,f.scrollWidth-window.innerWidth+96);R.to(f,{x:()=>-x(),ease:"1",force3D:!0,scrollTrigger:{trigger:e.current,start:"top -44%",end:K(C.length),scrub:1.2,pin:!0,anticipatePin:1,invalidateOnRefresh:!0}})},e);return()=>p.revert()},a=[s,e],t[0]=s,t[1]=e,t[2]=r,t[3]=a):(r=t[2],a=t[3]),S.useLayoutEffect(r,a);let m;t[4]===Symbol.for("react.memo_cache_sentinel")?(m=i.jsx("p",{className:"eyebrow",children:"Selected Work"}),t[4]=m):m=t[4];let c;t[5]===Symbol.for("react.memo_cache_sentinel")?(c=i.jsxs("div",{className:"mx-auto max-w-7xl px-5 sm:px-6 lg:px-8",children:[m,i.jsxs("h2",{className:"font-heading mt-4 text-[clamp(3rem,12vw,8.5rem)] font-black uppercase leading-[0.88] tracking-tight",children:["Things I've",i.jsx("br",{}),"Built"]}),i.jsx("p",{className:"mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:mt-6 sm:text-xl md:text-2xl",children:"A few projects I worked on. Each one taught me something unique."})]}),t[5]=c):c=t[5];let o;t[6]!==s?(o=s?C.map(Q):i.jsx("div",{className:"h-[460px] w-full","aria-hidden":"true"}),t[6]=s,t[7]=o):o=t[7];let l;t[8]!==o?(l=i.jsx("div",{className:`
          mt-14 overflow-x-auto
          pe-0
          [-ms-overflow-style:none]
          [scrollbar-width:none]
          [&::-webkit-scrollbar]:hidden
          sm:mt-16
          md:mt-20
          md:overflow-x-visible
          md:px-[max(1.5rem,calc((100vw-1280px)/2))]
        `,children:i.jsx("div",{ref:n,className:`
            flex w-max items-stretch
            gap-4 px-5 pb-5
            will-change-transform
            sm:gap-6 sm:px-6 sm:pb-6
            md:gap-10 md:px-0 md:pe-[50vw]
            max-md:snap-x
            max-md:snap-mandatory
          `,children:o})}),t[8]=o,t[9]=l):l=t[9];let d;return t[10]!==e||t[11]!==l?(d=i.jsxs("section",{ref:e,className:"relative overflow-hidden bg-background py-16 sm:py-20 md:py-32 md:pb-40",children:[c,l]}),t[10]=e,t[11]=l,t[12]=d):d=t[12],d}function Q(t){return i.jsx(F,{...t,className:`
                    w-[calc(100vw-2.5rem)]
                    max-w-[680px]
                    shrink-0
                    max-md:snap-center
                    sm:w-[min(88vw,680px)]
                    md:w-[min(78vw,680px)]
                  `},t.title)}export{ne as default};
