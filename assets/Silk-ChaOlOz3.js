import{a as l,j as u}from"./vendor-query-D97BJ1_7.js";import{c as h}from"./index-CEX_inLp.js";import{C,u as R,a as j}from"./react-three-fiber.esm-uHT_VkhY.js";import{C as P}from"./vendor-three-chEJ4Nom.js";import"./vendor-react-B-7Fd_5Y.js";import"./vendor-gsap-xgxdCp6f.js";import"./vanilla-m3Xdu9cz.js";const y=i=>{const a=i.replace("#",""),t=parseInt(a.slice(0,2),16)/255,e=parseInt(a.slice(2,4),16)/255,s=parseInt(a.slice(4,6),16)/255;return[t,e,s]},T=`
varying vec2 vUv;
varying vec3 vPosition;

void main() {
  vPosition = position;
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,_=`
varying vec2 vUv;
varying vec3 vPosition;

uniform float uTime;
uniform vec3  uColor;
uniform float uSpeed;
uniform float uScale;
uniform float uRotation;
uniform float uNoiseIntensity;

const float e = 2.71828182845904523536;

float noise(vec2 texCoord) {
  float G = e;
  vec2  r = (G * sin(G * texCoord));
  return fract(r.x * r.y * (1.0 + texCoord.x));
}

vec2 rotateUvs(vec2 uv, float angle) {
  float c = cos(angle);
  float s = sin(angle);
  mat2  rot = mat2(c, -s, s, c);
  return rot * uv;
}

void main() {
  float rnd        = noise(gl_FragCoord.xy);
  vec2  uv         = rotateUvs(vUv * uScale, uRotation);
  vec2  tex        = uv * uScale;
  float tOffset    = uSpeed * uTime;

  tex.y += 0.03 * sin(8.0 * tex.x - tOffset);

  float pattern = 0.6 +
                  0.4 * sin(5.0 * (tex.x + tex.y +
                                   cos(3.0 * tex.x + 5.0 * tex.y) +
                                   0.02 * tOffset) +
                           sin(20.0 * (tex.x + tex.y - 0.1 * tOffset)));

  vec4 col = vec4(uColor, 1.0) * vec4(pattern) - rnd / 15.0 * uNoiseIntensity;
  col.a = 1.0;
  gl_FragColor = col;
}
`,g=l.forwardRef(function(a,t){const e=h.c(12),{uniforms:s}=a,{viewport:r}=R();let o,c;e[0]!==t||e[1]!==r?(o=()=>{const x=t;x.current&&x.current.scale.set(r.width,r.height,1)},c=[t,r],e[0]=t,e[1]=r,e[2]=o,e[3]=c):(o=e[2],c=e[3]),l.useLayoutEffect(o,c);let v;e[4]!==t?(v=(x,S)=>{const p=t;if(p.current){const d=p.current.material;d.uniforms.uTime.value=d.uniforms.uTime.value+.1*S}},e[4]=t,e[5]=v):v=e[5],j(v);let m;e[6]===Symbol.for("react.memo_cache_sentinel")?(m=u.jsx("planeGeometry",{args:[1,1,1,1]}),e[6]=m):m=e[6];let n;e[7]!==s?(n=u.jsx("shaderMaterial",{uniforms:s,vertexShader:T,fragmentShader:_}),e[7]=s,e[8]=n):n=e[8];let f;return e[9]!==t||e[10]!==n?(f=u.jsxs("mesh",{ref:t,children:[m,n]}),e[9]=t,e[10]=n,e[11]=f):f=e[11],f});g.displayName="SilkPlane";const M=({speed:i=5,scale:a=1,color:t="#7B7481",noiseIntensity:e=1.5,rotation:s=0})=>{const r=l.useRef(null),o=l.useMemo(()=>({uSpeed:{value:i},uScale:{value:a},uNoiseIntensity:{value:e},uColor:{value:new P(...y(t))},uRotation:{value:s},uTime:{value:0}}),[]);return l.useEffect(()=>{o.uSpeed.value=i,o.uScale.value=a,o.uNoiseIntensity.value=e,o.uColor.value.setRGB(...y(t)),o.uRotation.value=s},[i,a,e,t,s,o]),u.jsx(C,{dpr:[1,2],frameloop:"always",children:u.jsx(g,{ref:r,uniforms:o})})};export{M as default};
