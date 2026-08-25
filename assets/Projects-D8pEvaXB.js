import{j as o,a as R}from"./vendor-query-D97BJ1_7.js";import{c as f,S as I}from"./index-CEX_inLp.js";import{g as S}from"./vendor-gsap-xgxdCp6f.js";import{S as P}from"./vendor-radix-CWVD7tva.js";import{c as _}from"./index-B_jtOnfb.js";import{c as y}from"./utils-CDN07tui.js";import{F as D}from"./FadeImage-7kkOWpb7.js";import"./vendor-react-B-7Fd_5Y.js";const A=_("inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",secondary:"border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",destructive:"border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"}},defaultVariants:{variant:"default"}});function B(n){const e=f.c(12);let s,t,r,a;e[0]!==n?({className:s,variant:a,asChild:r,...t}=n,e[0]=n,e[1]=s,e[2]=t,e[3]=r,e[4]=a):(s=e[1],t=e[2],r=e[3],a=e[4]);const i=(r===void 0?!1:r)?P:"span";let d;e[5]!==s||e[6]!==a?(d=y(A({variant:a}),s),e[5]=s,e[6]=a,e[7]=d):d=e[7];let l;return e[8]!==i||e[9]!==t||e[10]!==d?(l=o.jsx(i,{"data-slot":"badge",className:d,...t}),e[8]=i,e[9]=t,e[10]=d,e[11]=l):l=e[11],l}function $(n){const e=f.c(8);let s,t;e[0]!==n?({className:s,...t}=n,e[0]=n,e[1]=s,e[2]=t):(s=e[1],t=e[2]);let r;e[3]!==s?(r=y("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",s),e[3]=s,e[4]=r):r=e[4];let a;return e[5]!==t||e[6]!==r?(a=o.jsx("div",{"data-slot":"card",className:r,...t}),e[5]=t,e[6]=r,e[7]=a):a=e[7],a}function E(n){const e=f.c(8);let s,t;e[0]!==n?({className:s,...t}=n,e[0]=n,e[1]=s,e[2]=t):(s=e[1],t=e[2]);let r;e[3]!==s?(r=y("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",s),e[3]=s,e[4]=r):r=e[4];let a;return e[5]!==t||e[6]!==r?(a=o.jsx("div",{"data-slot":"card-header",className:r,...t}),e[5]=t,e[6]=r,e[7]=a):a=e[7],a}function T(n){const e=f.c(8);let s,t;e[0]!==n?({className:s,...t}=n,e[0]=n,e[1]=s,e[2]=t):(s=e[1],t=e[2]);let r;e[3]!==s?(r=y("leading-none font-semibold",s),e[3]=s,e[4]=r):r=e[4];let a;return e[5]!==t||e[6]!==r?(a=o.jsx("div",{"data-slot":"card-title",className:r,...t}),e[5]=t,e[6]=r,e[7]=a):a=e[7],a}function W(n){const e=f.c(8);let s,t;e[0]!==n?({className:s,...t}=n,e[0]=n,e[1]=s,e[2]=t):(s=e[1],t=e[2]);let r;e[3]!==s?(r=y("text-muted-foreground text-sm",s),e[3]=s,e[4]=r):r=e[4];let a;return e[5]!==t||e[6]!==r?(a=o.jsx("div",{"data-slot":"card-description",className:r,...t}),e[5]=t,e[6]=r,e[7]=a):a=e[7],a}function L(n){const e=f.c(8);let s,t;e[0]!==n?({className:s,...t}=n,e[0]=n,e[1]=s,e[2]=t):(s=e[1],t=e[2]);let r;e[3]!==s?(r=y("px-6",s),e[3]=s,e[4]=r):r=e[4];let a;return e[5]!==t||e[6]!==r?(a=o.jsx("div",{"data-slot":"card-content",className:r,...t}),e[5]=t,e[6]=r,e[7]=a):a=e[7],a}function M(n){const e=f.c(28),{eyebrow:s,title:t,description:r,tags:a,image:c,href:i,className:d}=n,l=`
        flex
        w-full
        flex-col
        overflow-hidden
        border-3
        border-black
        bg-card

        ${d??""}

        md:flex-row
        md:items-stretch
      `;let m;e[0]!==l?(m=l.trim(),e[0]=l,e[1]=m):m=e[1];let p;e[2]!==c?(p=o.jsx("div",{className:`
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
        `,children:c?o.jsx(D,{src:c,alt:"",width:1920,height:1858,className:"absolute inset-0 h-full w-full object-cover",loading:"lazy",decoding:"async"}):o.jsx("div",{className:"absolute inset-0 grid place-items-center p-6 text-sm text-muted-foreground",children:"Image"})}),e[2]=c,e[3]=p):p=e[3];let x;e[4]!==s?(x=s?o.jsx("p",{className:"eyebrow text-accent-sky",children:s}):null,e[4]=s,e[5]=x):x=e[5];let u;e[6]!==t?(u=o.jsx(T,{className:`
              font-heading
              mt-3
              text-3xl
              tracking-tight

              sm:text-4xl
              md:text-4xl
            `,children:t}),e[6]=t,e[7]=u):u=e[7];let g;e[8]!==r?(g=o.jsx(W,{className:`
              font-body
              mt-4
              text-base
              leading-relaxed

              sm:text-lg
              lg:text-xl
            `,children:r}),e[8]=r,e[9]=g):g=e[9];let b;e[10]!==x||e[11]!==u||e[12]!==g?(b=o.jsxs(E,{className:"p-0",children:[x,u,g]}),e[10]=x,e[11]=u,e[12]=g,e[13]=b):b=e[13];let h;e[14]!==a?(h=a.map(F),e[14]=a,e[15]=h):h=e[15];let w;e[16]!==h?(w=o.jsx(L,{className:"mt-6 p-0 md:mt-auto md:pt-8",children:o.jsx("div",{className:"flex flex-wrap gap-2",children:h})}),e[16]=h,e[17]=w):w=e[17];let v;e[18]!==b||e[19]!==w?(v=o.jsxs("div",{className:`
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
        `,children:[b,w]}),e[18]=b,e[19]=w,e[20]=v):v=e[20];let j;e[21]!==v||e[22]!==m||e[23]!==p?(j=o.jsxs($,{className:m,children:[p,v]}),e[21]=v,e[22]=m,e[23]=p,e[24]=j):j=e[24];const N=j;if(i){let k;return e[25]!==N||e[26]!==i?(k=o.jsx("a",{href:i,target:"_blank",rel:"noreferrer",className:`
          block
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-ring
          focus-visible:ring-offset-2
        `,children:N}),e[25]=N,e[26]=i,e[27]=k):k=e[27],k}return N}function F(n){return o.jsx(B,{variant:"secondary",className:`
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
                `,children:n},n)}const z="/portfolio/assets/Bin%20Sadan-B66bgIty.webp",V="/portfolio/assets/Careerly-Dxk_s0Bb.webp",O="/portfolio/assets/Go-2IRnmVw8.webp",Z="/portfolio/assets/Power%20Zone-XU-v0Rgu.webp",G="/portfolio/assets/Streamore-BeITyCth.webp",C=[{eyebrow:"2026 · Platform",title:"GO Delivery",image:O,description:"Multi-store delivery platform. Customer workflows, order management, auth with RBAC, real-time notifications, and architecture ready for merchants.",tags:["Django","React","Redis","RBAC"]},{eyebrow:"2026 · AI Platform",title:"Careerly",image:V,description:"AI-powered career platform. Aggregates jobs from 4 sources, analyzes CVs, tailors resumes with AI, and tracks your applications.",tags:["Django","DRF","React","TypeScript","AI"]},{eyebrow:"2025 · Enterprise",title:"Bin Saedan Smart ERP",image:z,description:"Smart ERP for enterprise workflows. REST APIs, database architecture, role-based access, and workflow automation built closely with the client.",tags:["Django","DRF","PostgreSQL","React"]},{eyebrow:"2025 · Real-time",title:"Streamore",image:G,description:"Live streaming platform built on LiveKit and RTMP. Broadcast to 5 platforms at once with layouts, overlays, and WebSocket private chat.",tags:["LiveKit","RTMP","WebSockets","React","Django"]},{eyebrow:"2024 · Microservice",title:"Power Zone Dashboard",image:Z,description:"Fitness dashboard for workouts, nutrition, and progress tracking. Coach views, RBAC, optimized APIs, and WebSocket realtime.",tags:["React","Django","WebSockets"]}];S.registerPlugin(I);const K=n=>`+=${(n-1)*110}%`;function se(){const n=f.c(5),e=R.useRef(null),s=R.useRef(null);let t,r;n[0]===Symbol.for("react.memo_cache_sentinel")?(t=()=>{if(typeof window>"u"||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const d=S.context(()=>{const l=s.current;if(!l||window.innerWidth<768)return;const m=()=>Math.max(0,l.scrollWidth-window.innerWidth+96);S.to(l,{x:()=>-m(),ease:"1",force3D:!0,scrollTrigger:{trigger:e.current,start:"top -44%",end:K(C.length),scrub:1.2,pin:!0,anticipatePin:1,invalidateOnRefresh:!0}})},e);return()=>d.revert()},r=[],n[0]=t,n[1]=r):(t=n[0],r=n[1]),R.useLayoutEffect(t,r);let a;n[2]===Symbol.for("react.memo_cache_sentinel")?(a=o.jsx("p",{className:"eyebrow",children:"Selected Work"}),n[2]=a):a=n[2];let c;n[3]===Symbol.for("react.memo_cache_sentinel")?(c=o.jsxs("div",{className:"mx-auto max-w-7xl px-5 sm:px-6 lg:px-8",children:[a,o.jsxs("h2",{className:"font-heading mt-4 text-[clamp(3rem,12vw,8.5rem)] font-black uppercase leading-[0.88] tracking-tight",children:["Things I've",o.jsx("br",{}),"Built"]}),o.jsx("p",{className:"mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:mt-6 sm:text-xl md:text-2xl",children:"A few projects I worked on. Each one taught me something unique."})]}),n[3]=c):c=n[3];let i;return n[4]===Symbol.for("react.memo_cache_sentinel")?(i=o.jsxs("section",{ref:e,className:"relative overflow-hidden bg-background py-16 sm:py-20 md:py-32 md:pb-40",children:[c,o.jsx("div",{className:`
          mt-14 overflow-x-auto
          pe-0
          [-ms-overflow-style:none]
          [scrollbar-width:none]
          [&::-webkit-scrollbar]:hidden
          sm:mt-16
          md:mt-20
          md:overflow-x-visible
          md:px-[max(1.5rem,calc((100vw-1280px)/2))]
        `,children:o.jsx("div",{ref:s,className:`
            flex w-max items-stretch
            gap-4 px-5 pb-5
            will-change-transform
            sm:gap-6 sm:px-6 sm:pb-6
            md:gap-10 md:px-0 md:pe-[50vw]
            max-md:snap-x
            max-md:snap-mandatory
          `,children:C.map(q)})})]}),n[4]=i):i=n[4],i}function q(n){return o.jsx(M,{...n,className:`
                w-[calc(100vw-2.5rem)]
                max-w-[680px]
                shrink-0
                max-md:snap-center
                sm:w-[min(88vw,680px)]
                md:w-[min(78vw,680px)]
              `},n.title)}export{se as default};
