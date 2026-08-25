import{a as d,j as y}from"./vendor-query-D97BJ1_7.js";import{c as C}from"./index-BmTytKvR.js";import{u as N,a as H,C as A}from"./react-three-fiber.esm-Cf7iG4b4.js";import{W,H as D,L as B,D as U,F as G,C as X,M as Z,S as q,U as V,a as Y,B as J,b as O}from"./vendor-three-chEJ4Nom.js";import"./vendor-react-B-7Fd_5Y.js";import"./vanilla-m3Xdu9cz.js";function L(){return L=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},L.apply(null,arguments)}function K(n,e,t){const r=N(l=>l.size),o=N(l=>l.viewport),c=typeof n=="number"?n:r.width*o.dpr,u=r.height*o.dpr,a=(typeof n=="number"?t:n)||{},{samples:s=0,depth:g,...f}=a,v=g??a.depthBuffer,i=d.useMemo(()=>{const l=new W(c,u,{minFilter:B,magFilter:B,type:D,...f});return v&&(l.depthTexture=new U(c,u,G)),l.samples=s,l},[]);return d.useLayoutEffect(()=>{i.setSize(c,u),s&&(i.samples=s)},[s,i,c,u]),d.useEffect(()=>()=>i.dispose(),[]),i}const Q=n=>typeof n=="function",ee=d.forwardRef(({envMap:n,resolution:e=256,frames:t=1/0,makeDefault:r,children:o,...c},u)=>{const a=N(({set:m})=>m),s=N(({camera:m})=>m),g=N(({size:m})=>m),f=d.useRef(null);d.useImperativeHandle(u,()=>f.current,[]);const v=d.useRef(null),i=K(e);d.useLayoutEffect(()=>{c.manual||(f.current.aspect=g.width/g.height)},[g,c]),d.useLayoutEffect(()=>{f.current.updateProjectionMatrix()});let l=0,x=null;const p=Q(o);return H(m=>{p&&(t===1/0||l<t)&&(v.current.visible=!1,m.gl.setRenderTarget(i),x=m.scene.background,n&&(m.scene.background=n),m.gl.render(m.scene,f.current),m.scene.background=x,m.gl.setRenderTarget(null),v.current.visible=!0,l++)}),d.useLayoutEffect(()=>{if(r){const m=s;return a(()=>({camera:f.current})),()=>a(()=>({camera:m}))}},[f,r,a]),d.createElement(d.Fragment,null,d.createElement("perspectiveCamera",L({ref:f},c),!p&&o),d.createElement("group",{ref:v},p&&o(i.texture)))}),te=Math.PI/180;function ne(n){return n*te}function re(n,e){const t=q.physical,{vertexShader:r,fragmentShader:o,uniforms:c}=t,u=t.defines??{},a=V.clone(c),s=new n(e.material||{});s.color&&(a.diffuse.value=s.color),"roughness"in s&&(a.roughness.value=s.roughness),"metalness"in s&&(a.metalness.value=s.metalness),"envMap"in s&&(a.envMap.value=s.envMap),"envMapIntensity"in s&&(a.envMapIntensity.value=s.envMapIntensity),Object.entries(e.uniforms??{}).forEach(([i,l])=>{a[i]=l!==null&&typeof l=="object"&&"value"in l?l:{value:l}});let g=`${e.header}
${e.vertexHeader??""}
${r}`,f=`${e.header}
${e.fragmentHeader??""}
${o}`;for(const[i,l]of Object.entries(e.vertex??{}))g=g.replace(i,`${i}
${l}`);for(const[i,l]of Object.entries(e.fragment??{}))f=f.replace(i,`${i}
${l}`);return new Y({defines:{...u},uniforms:a,vertexShader:g,fragmentShader:f,lights:!0,fog:!!e.material?.fog})}const oe=n=>{const e=C.c(3),{children:t}=n;let r;e[0]===Symbol.for("react.memo_cache_sentinel")?(r=[1,2],e[0]=r):r=e[0];let o;return e[1]!==t?(o=y.jsx(A,{dpr:r,frameloop:"always",className:"w-full h-full relative",children:t}),e[1]=t,e[2]=o):o=e[2],o},se=n=>{const e=n.replace("#",""),t=parseInt(e.substring(0,2),16),r=parseInt(e.substring(2,4),16),o=parseInt(e.substring(4,6),16);return[t/255,r/255,o/255]},ae=`
float random (in vec2 st) {
    return fract(sin(dot(st.xy,
                         vec2(12.9898,78.233)))*
        43758.5453123);
}
float noise (in vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);
    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(a, b, u.x) +
           (c - a)* u.y * (1.0 - u.x) +
           (d - b) * u.x * u.y;
}
vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
vec3 fade(vec3 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}
float cnoise(vec3 P){
  vec3 Pi0 = floor(P);
  vec3 Pi1 = Pi0 + vec3(1.0);
  Pi0 = mod(Pi0, 289.0);
  Pi1 = mod(Pi1, 289.0);
  vec3 Pf0 = fract(P);
  vec3 Pf1 = Pf0 - vec3(1.0);
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;
  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);
  vec4 gx0 = ixy0 / 7.0;
  vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);
  vec4 gx1 = ixy1 / 7.0;
  vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);
  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);
  vec4 norm0 = taylorInvSqrt(vec4(dot(g000,g000),dot(g010,g010),dot(g100,g100),dot(g110,g110)));
  g000 *= norm0.x; g010 *= norm0.y; g100 *= norm0.z; g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001,g001),dot(g011,g011),dot(g101,g101),dot(g111,g111)));
  g001 *= norm1.x; g011 *= norm1.y; g101 *= norm1.z; g111 *= norm1.w;
  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x,Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x,Pf1.y,Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy,Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy,Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x,Pf0.y,Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x,Pf1.yz));
  float n111 = dot(g111, Pf1);
  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(vec4(n000,n100,n010,n110),vec4(n001,n101,n011,n111),fade_xyz.z);
  vec2 n_yz = mix(n_z.xy,n_z.zw,fade_xyz.y);
  float n_xyz = mix(n_yz.x,n_yz.y,fade_xyz.x);
  return 2.2 * n_xyz;
}
`,de=n=>{const e=C.c(25),{beamWidth:t,beamHeight:r,beamNumber:o,lightColor:c,speed:u,noiseIntensity:a,scale:s,rotation:g}=n,f=t===void 0?2:t,v=r===void 0?15:r,i=o===void 0?12:o,l=c===void 0?"#ffffff":c,x=u===void 0?2:u,p=a===void 0?1.75:a,m=s===void 0?.2:s,M=g===void 0?0:g,E=d.useRef(null);let S;e[0]!==p||e[1]!==m||e[2]!==x?(S=re(Z,{header:`
  varying vec3 vEye;
  varying float vNoise;
  varying vec2 vUv;
  varying vec3 vPosition;
  uniform float time;
  uniform float uSpeed;
  uniform float uNoiseIntensity;
  uniform float uScale;
  ${ae}`,vertexHeader:`
  float getPos(vec3 pos) {
    vec3 noisePos =
      vec3(pos.x * 0., pos.y - uv.y, pos.z + time * uSpeed * 3.) * uScale;
    return cnoise(noisePos);
  }
  vec3 getCurrentPos(vec3 pos) {
    vec3 newpos = pos;
    newpos.z += getPos(pos);
    return newpos;
  }
  vec3 getNormal(vec3 pos) {
    vec3 curpos = getCurrentPos(pos);
    vec3 nextposX = getCurrentPos(pos + vec3(0.01, 0.0, 0.0));
    vec3 nextposZ = getCurrentPos(pos + vec3(0.0, -0.01, 0.0));
    vec3 tangentX = normalize(nextposX - curpos);
    vec3 tangentZ = normalize(nextposZ - curpos);
    return normalize(cross(tangentZ, tangentX));
  }`,fragmentHeader:"",vertex:{"#include <begin_vertex>":"transformed.z += getPos(transformed.xyz);","#include <beginnormal_vertex>":"objectNormal = getNormal(position.xyz);"},fragment:{"#include <dithering_fragment>":`
    float randomNoise = noise(gl_FragCoord.xy);
    gl_FragColor.rgb -= randomNoise / 15. * uNoiseIntensity;`},material:{fog:!0},uniforms:{diffuse:new X(...se("#000000")),time:{shared:!0,mixed:!0,linked:!0,value:0},roughness:.3,metalness:.3,uSpeed:{shared:!0,mixed:!0,linked:!0,value:x},envMapIntensity:10,uNoiseIntensity:p,uScale:m}}),e[0]=p,e[1]=m,e[2]=x,e[3]=S):S=e[3];const h=S;let z;e[4]!==M?(z=ne(M),e[4]=M,e[5]=z):z=e[5];let P;e[6]!==z?(P=[0,0,z],e[6]=z,e[7]=P):P=e[7];let w;e[8]!==v||e[9]!==h||e[10]!==i||e[11]!==f?(w=y.jsx(k,{ref:E,material:h,count:i,width:f,height:v}),e[8]=v,e[9]=h,e[10]=i,e[11]=f,e[12]=w):w=e[12];let j;e[13]===Symbol.for("react.memo_cache_sentinel")?(j=[0,3,10],e[13]=j):j=e[13];let _;e[14]!==l?(_=y.jsx(ie,{color:l,position:j}),e[14]=l,e[15]=_):_=e[15];let b;e[16]!==P||e[17]!==w||e[18]!==_?(b=y.jsxs("group",{rotation:P,children:[w,_]}),e[16]=P,e[17]=w,e[18]=_,e[19]=b):b=e[19];let I;e[20]===Symbol.for("react.memo_cache_sentinel")?(I=y.jsx("ambientLight",{intensity:1}),e[20]=I):I=e[20];let R;e[21]===Symbol.for("react.memo_cache_sentinel")?(R=y.jsx("color",{attach:"background",args:["#000000"]}),e[21]=R):R=e[21];let F;e[22]===Symbol.for("react.memo_cache_sentinel")?(F=y.jsx(ee,{makeDefault:!0,position:[0,0,20],fov:30}),e[22]=F):F=e[22];let $;return e[23]!==b?($=y.jsxs(oe,{children:[b,I,R,F]}),e[23]=b,e[24]=$):$=e[24],$};function ce(n,e,t,r,o){const c=new J,u=n*(o+1)*2,a=n*o*2,s=new Float32Array(u*3),g=new Uint32Array(a*3),f=new Float32Array(u*2);let v=0,i=0,l=0;const p=-(n*e+(n-1)*r)/2;for(let m=0;m<n;m++){const M=p+m*(e+r),E=Math.random()*300,S=Math.random()*300;for(let h=0;h<=o;h++){const z=t*(h/o-.5),P=[M,z,0],w=[M+e,z,0];s.set([...P,...w],v*3);const j=h/o;if(f.set([E,j+S,E+1,j+S],l),h<o){const _=v,b=v+1,I=v+2,R=v+3;g.set([_,b,I,I,b,R],i),i+=6}v+=2,l+=4}}return c.setAttribute("position",new O(s,3)),c.setAttribute("uv",new O(f,2)),c.setIndex(new O(g,1)),c.computeVertexNormals(),c}const T=d.forwardRef((n,e)=>{const t=C.c(9),{material:r,width:o,count:c,height:u}=n,a=d.useRef(null);let s;t[0]===Symbol.for("react.memo_cache_sentinel")?(s=()=>a.current,t[0]=s):s=t[0],d.useImperativeHandle(e,s);let g;t[1]!==c||t[2]!==u||t[3]!==o?(g=ce(c,o,u,0,100),t[1]=c,t[2]=u,t[3]=o,t[4]=g):g=t[4];const f=g;let v;t[5]===Symbol.for("react.memo_cache_sentinel")?(v=(l,x)=>{a.current&&(a.current.material.uniforms.time.value=a.current.material.uniforms.time.value+.1*x)},t[5]=v):v=t[5],H(v);let i;return t[6]!==f||t[7]!==r?(i=y.jsx("mesh",{ref:a,geometry:f,material:r}),t[6]=f,t[7]=r,t[8]=i):i=t[8],i});T.displayName="MergedPlanes";const k=d.forwardRef((n,e)=>{const t=C.c(6);let r;return t[0]!==n.count||t[1]!==n.height||t[2]!==n.material||t[3]!==n.width||t[4]!==e?(r=y.jsx(T,{ref:e,material:n.material,width:n.width,count:n.count,height:n.height}),t[0]=n.count,t[1]=n.height,t[2]=n.material,t[3]=n.width,t[4]=e,t[5]=r):r=t[5],r});k.displayName="PlaneNoise";const ie=n=>{const e=C.c(5),{position:t,color:r}=n,o=d.useRef(null);let c,u;e[0]===Symbol.for("react.memo_cache_sentinel")?(c=()=>{if(!o.current)return;const s=o.current.shadow.camera;s.top=24,s.bottom=-24,s.left=-24,s.right=24,s.far=64,o.current.shadow.bias=-.004},u=[],e[0]=c,e[1]=u):(c=e[0],u=e[1]),d.useEffect(c,u);let a;return e[2]!==r||e[3]!==t?(a=y.jsx("directionalLight",{ref:o,color:r,intensity:1,position:t}),e[2]=r,e[3]=t,e[4]=a):a=e[4],a};export{de as default};
