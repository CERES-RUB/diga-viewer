import{j as i}from"./createLucideIcon.mVAD4iI2.js";import{r as a,R as I,a as ge}from"./index.DcOvlJY4.js";import{S as xe}from"./square-arrow-out-up-right.Cb3qQrgn.js";function N(e,t,{checkForDefaultPrevented:n=!0}={}){return function(s){if(e?.(s),n===!1||!s.defaultPrevented)return t?.(s)}}function be(e,t=[]){let n=[];function o(r,c){const u=a.createContext(c),l=n.length;n=[...n,c];const d=f=>{const{scope:h,children:v,...m}=f,g=h?.[e]?.[l]||u,x=a.useMemo(()=>m,Object.values(m));return i.jsx(g.Provider,{value:x,children:v})};d.displayName=r+"Provider";function p(f,h){const v=h?.[e]?.[l]||u,m=a.useContext(v);if(m)return m;if(c!==void 0)return c;throw new Error(`\`${f}\` must be used within \`${r}\``)}return[d,p]}const s=()=>{const r=n.map(c=>a.createContext(c));return function(u){const l=u?.[e]||r;return a.useMemo(()=>({[`__scope${e}`]:{...u,[e]:l}}),[u,l])}};return s.scopeName=e,[o,Se(s,...t)]}function Se(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const o=e.map(s=>({useScope:s(),scopeName:s.scopeName}));return function(r){const c=o.reduce((u,{useScope:l,scopeName:d})=>{const f=l(r)[`__scope${d}`];return{...u,...f}},{});return a.useMemo(()=>({[`__scope${t.scopeName}`]:c}),[c])}};return n.scopeName=t.scopeName,n}function Ce(e,t=[]){let n=[];function o(r,c){const u=a.createContext(c),l=n.length;n=[...n,c];function d(f){const{scope:h,children:v,...m}=f,g=h?.[e][l]||u,x=a.useMemo(()=>m,Object.values(m));return i.jsx(g.Provider,{value:x,children:v})}function p(f,h){const v=h?.[e][l]||u,m=a.useContext(v);if(m)return m;if(c!==void 0)return c;throw new Error(`\`${f}\` must be used within \`${r}\``)}return d.displayName=r+"Provider",[d,p]}const s=()=>{const r=n.map(c=>a.createContext(c));return function(u){const l=u?.[e]||r;return a.useMemo(()=>({[`__scope${e}`]:{...u,[e]:l}}),[u,l])}};return s.scopeName=e,[o,Ne(s,...t)]}function Ne(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const o=e.map(s=>({useScope:s(),scopeName:s.scopeName}));return function(r){const c=o.reduce((u,{useScope:l,scopeName:d})=>{const f=l(r)[`__scope${d}`];return{...u,...f}},{});return a.useMemo(()=>({[`__scope${t.scopeName}`]:c}),[c])}};return n.scopeName=t.scopeName,n}function Re(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}function W(...e){return t=>e.forEach(n=>Re(n,t))}function j(...e){return a.useCallback(W(...e),e)}var P=a.forwardRef((e,t)=>{const{children:n,...o}=e,s=a.Children.toArray(n),r=s.find(Ae);if(r){const c=r.props.children,u=s.map(l=>l===r?a.Children.count(c)>1?a.Children.only(null):a.isValidElement(c)?c.props.children:null:l);return i.jsx(O,{...o,ref:t,children:a.isValidElement(c)?a.cloneElement(c,void 0,u):null})}return i.jsx(O,{...o,ref:t,children:n})});P.displayName="Slot";var O=a.forwardRef((e,t)=>{const{children:n,...o}=e;if(a.isValidElement(n)){const s=Ee(n);return a.cloneElement(n,{...we(o,n.props),ref:t?W(t,s):s})}return a.Children.count(n)>1?a.Children.only(null):null});O.displayName="SlotClone";var Ie=({children:e})=>i.jsx(i.Fragment,{children:e});function Ae(e){return a.isValidElement(e)&&e.type===Ie}function we(e,t){const n={...t};for(const o in t){const s=e[o],r=t[o];/^on[A-Z]/.test(o)?s&&r?n[o]=(...u)=>{r(...u),s(...u)}:s&&(n[o]=s):o==="style"?n[o]={...s,...r}:o==="className"&&(n[o]=[s,r].filter(Boolean).join(" "))}return{...e,...n}}function Ee(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=Object.getOwnPropertyDescriptor(e,"ref")?.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}function Te(e){const t=e+"CollectionProvider",[n,o]=Ce(t),[s,r]=n(t,{collectionRef:{current:null},itemMap:new Map}),c=v=>{const{scope:m,children:g}=v,x=I.useRef(null),b=I.useRef(new Map).current;return i.jsx(s,{scope:m,itemMap:b,collectionRef:x,children:g})};c.displayName=t;const u=e+"CollectionSlot",l=I.forwardRef((v,m)=>{const{scope:g,children:x}=v,b=r(u,g),S=j(m,b.collectionRef);return i.jsx(P,{ref:S,children:x})});l.displayName=u;const d=e+"CollectionItemSlot",p="data-radix-collection-item",f=I.forwardRef((v,m)=>{const{scope:g,children:x,...b}=v,S=I.useRef(null),A=j(m,S),w=r(d,g);return I.useEffect(()=>(w.itemMap.set(S,{ref:S,...b}),()=>void w.itemMap.delete(S))),i.jsx(P,{[p]:"",ref:A,children:x})});f.displayName=d;function h(v){const m=r(e+"CollectionConsumer",v);return I.useCallback(()=>{const x=m.collectionRef.current;if(!x)return[];const b=Array.from(x.querySelectorAll(`[${p}]`));return Array.from(m.itemMap.values()).sort((w,T)=>b.indexOf(w.ref.current)-b.indexOf(T.ref.current))},[m.collectionRef,m.itemMap])}return[{Provider:c,Slot:l,ItemSlot:f},h,o]}function ye(e,t=[]){let n=[];function o(r,c){const u=a.createContext(c),l=n.length;n=[...n,c];function d(f){const{scope:h,children:v,...m}=f,g=h?.[e][l]||u,x=a.useMemo(()=>m,Object.values(m));return i.jsx(g.Provider,{value:x,children:v})}function p(f,h){const v=h?.[e][l]||u,m=a.useContext(v);if(m)return m;if(c!==void 0)return c;throw new Error(`\`${f}\` must be used within \`${r}\``)}return d.displayName=r+"Provider",[d,p]}const s=()=>{const r=n.map(c=>a.createContext(c));return function(u){const l=u?.[e]||r;return a.useMemo(()=>({[`__scope${e}`]:{...u,[e]:l}}),[u,l])}};return s.scopeName=e,[o,je(s,...t)]}function je(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const o=e.map(s=>({useScope:s(),scopeName:s.scopeName}));return function(r){const c=o.reduce((u,{useScope:l,scopeName:d})=>{const f=l(r)[`__scope${d}`];return{...u,...f}},{});return a.useMemo(()=>({[`__scope${t.scopeName}`]:c}),[c])}};return n.scopeName=t.scopeName,n}var D=globalThis?.document?a.useLayoutEffect:()=>{},Pe=ge.useId||(()=>{}),_e=0;function H(e){const[t,n]=a.useState(Pe());return D(()=>{e||n(o=>o??String(_e++))},[e]),e||(t?`radix-${t}`:"")}var Me=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],E=Me.reduce((e,t)=>{const n=a.forwardRef((o,s)=>{const{asChild:r,...c}=o,u=r?P:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),i.jsx(u,{...c,ref:s})});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{});function B(e){const t=a.useRef(e);return a.useEffect(()=>{t.current=e}),a.useMemo(()=>(...n)=>t.current?.(...n),[])}function q({prop:e,defaultProp:t,onChange:n=()=>{}}){const[o,s]=Fe({defaultProp:t,onChange:n}),r=e!==void 0,c=r?e:o,u=B(n),l=a.useCallback(d=>{if(r){const f=typeof d=="function"?d(e):d;f!==e&&u(f)}else s(d)},[r,e,s,u]);return[c,l]}function Fe({defaultProp:e,onChange:t}){const n=a.useState(e),[o]=n,s=a.useRef(o),r=B(t);return a.useEffect(()=>{s.current!==o&&(r(o),s.current=o)},[o,s,r]),n}var Oe=a.createContext(void 0);function z(e){const t=a.useContext(Oe);return e||t||"ltr"}var F="rovingFocusGroup.onEntryFocus",De={bubbles:!1,cancelable:!0},_="RovingFocusGroup",[$,Y,$e]=Te(_),[Be,Z]=ye(_,[$e]),[Le,Ue]=Be(_),J=a.forwardRef((e,t)=>i.jsx($.Provider,{scope:e.__scopeRovingFocusGroup,children:i.jsx($.Slot,{scope:e.__scopeRovingFocusGroup,children:i.jsx(ke,{...e,ref:t})})}));J.displayName=_;var ke=a.forwardRef((e,t)=>{const{__scopeRovingFocusGroup:n,orientation:o,loop:s=!1,dir:r,currentTabStopId:c,defaultCurrentTabStopId:u,onCurrentTabStopIdChange:l,onEntryFocus:d,preventScrollOnEntryFocus:p=!1,...f}=e,h=a.useRef(null),v=j(t,h),m=z(r),[g=null,x]=q({prop:c,defaultProp:u,onChange:l}),[b,S]=a.useState(!1),A=B(d),w=Y(n),T=a.useRef(!1),[fe,k]=a.useState(0);return a.useEffect(()=>{const C=h.current;if(C)return C.addEventListener(F,A),()=>C.removeEventListener(F,A)},[A]),i.jsx(Le,{scope:n,orientation:o,dir:m,loop:s,currentTabStopId:g,onItemFocus:a.useCallback(C=>x(C),[x]),onItemShiftTab:a.useCallback(()=>S(!0),[]),onFocusableItemAdd:a.useCallback(()=>k(C=>C+1),[]),onFocusableItemRemove:a.useCallback(()=>k(C=>C-1),[]),children:i.jsx(E.div,{tabIndex:b||fe===0?-1:0,"data-orientation":o,...f,ref:v,style:{outline:"none",...e.style},onMouseDown:N(e.onMouseDown,()=>{T.current=!0}),onFocus:N(e.onFocus,C=>{const me=!T.current;if(C.target===C.currentTarget&&me&&!b){const G=new CustomEvent(F,De);if(C.currentTarget.dispatchEvent(G),!G.defaultPrevented){const M=w().filter(R=>R.focusable),pe=M.find(R=>R.active),ve=M.find(R=>R.id===g),he=[pe,ve,...M].filter(Boolean).map(R=>R.ref.current);ee(he,p)}}T.current=!1}),onBlur:N(e.onBlur,()=>S(!1))})})}),Q="RovingFocusGroupItem",X=a.forwardRef((e,t)=>{const{__scopeRovingFocusGroup:n,focusable:o=!0,active:s=!1,tabStopId:r,...c}=e,u=H(),l=r||u,d=Ue(Q,n),p=d.currentTabStopId===l,f=Y(n),{onFocusableItemAdd:h,onFocusableItemRemove:v}=d;return a.useEffect(()=>{if(o)return h(),()=>v()},[o,h,v]),i.jsx($.ItemSlot,{scope:n,id:l,focusable:o,active:s,children:i.jsx(E.span,{tabIndex:p?0:-1,"data-orientation":d.orientation,...c,ref:t,onMouseDown:N(e.onMouseDown,m=>{o?d.onItemFocus(l):m.preventDefault()}),onFocus:N(e.onFocus,()=>d.onItemFocus(l)),onKeyDown:N(e.onKeyDown,m=>{if(m.key==="Tab"&&m.shiftKey){d.onItemShiftTab();return}if(m.target!==m.currentTarget)return;const g=Ke(m,d.orientation,d.dir);if(g!==void 0){if(m.metaKey||m.ctrlKey||m.altKey||m.shiftKey)return;m.preventDefault();let b=f().filter(S=>S.focusable).map(S=>S.ref.current);if(g==="last")b.reverse();else if(g==="prev"||g==="next"){g==="prev"&&b.reverse();const S=b.indexOf(m.currentTarget);b=d.loop?We(b,S+1):b.slice(S+1)}setTimeout(()=>ee(b))}})})})});X.displayName=Q;var Ge={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function Ve(e,t){return t!=="rtl"?e:e==="ArrowLeft"?"ArrowRight":e==="ArrowRight"?"ArrowLeft":e}function Ke(e,t,n){const o=Ve(e.key,n);if(!(t==="vertical"&&["ArrowLeft","ArrowRight"].includes(o))&&!(t==="horizontal"&&["ArrowUp","ArrowDown"].includes(o)))return Ge[o]}function ee(e,t=!1){const n=document.activeElement;for(const o of e)if(o===n||(o.focus({preventScroll:t}),document.activeElement!==n))return}function We(e,t){return e.map((n,o)=>e[(t+o)%e.length])}var He=J,qe=X;function ze(e,t){return a.useReducer((n,o)=>t[n][o]??n,e)}var te=e=>{const{present:t,children:n}=e,o=Ye(t),s=typeof n=="function"?n({present:o.isPresent}):a.Children.only(n),r=j(o.ref,Ze(s));return typeof n=="function"||o.isPresent?a.cloneElement(s,{ref:r}):null};te.displayName="Presence";function Ye(e){const[t,n]=a.useState(),o=a.useRef({}),s=a.useRef(e),r=a.useRef("none"),c=e?"mounted":"unmounted",[u,l]=ze(c,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return a.useEffect(()=>{const d=y(o.current);r.current=u==="mounted"?d:"none"},[u]),D(()=>{const d=o.current,p=s.current;if(p!==e){const h=r.current,v=y(d);e?l("MOUNT"):v==="none"||d?.display==="none"?l("UNMOUNT"):l(p&&h!==v?"ANIMATION_OUT":"UNMOUNT"),s.current=e}},[e,l]),D(()=>{if(t){let d;const p=t.ownerDocument.defaultView??window,f=v=>{const g=y(o.current).includes(v.animationName);if(v.target===t&&g&&(l("ANIMATION_END"),!s.current)){const x=t.style.animationFillMode;t.style.animationFillMode="forwards",d=p.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=x)})}},h=v=>{v.target===t&&(r.current=y(o.current))};return t.addEventListener("animationstart",h),t.addEventListener("animationcancel",f),t.addEventListener("animationend",f),()=>{p.clearTimeout(d),t.removeEventListener("animationstart",h),t.removeEventListener("animationcancel",f),t.removeEventListener("animationend",f)}}else l("ANIMATION_END")},[t,l]),{isPresent:["mounted","unmountSuspended"].includes(u),ref:a.useCallback(d=>{d&&(o.current=getComputedStyle(d)),n(d)},[])}}function y(e){return e?.animationName||"none"}function Ze(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=Object.getOwnPropertyDescriptor(e,"ref")?.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var L="Tabs",[Je,st]=be(L,[Z]),ne=Z(),[Qe,U]=Je(L),oe=a.forwardRef((e,t)=>{const{__scopeTabs:n,value:o,onValueChange:s,defaultValue:r,orientation:c="horizontal",dir:u,activationMode:l="automatic",...d}=e,p=z(u),[f,h]=q({prop:o,onChange:s,defaultProp:r});return i.jsx(Qe,{scope:n,baseId:H(),value:f,onValueChange:h,orientation:c,dir:p,activationMode:l,children:i.jsx(E.div,{dir:p,"data-orientation":c,...d,ref:t})})});oe.displayName=L;var re="TabsList",se=a.forwardRef((e,t)=>{const{__scopeTabs:n,loop:o=!0,...s}=e,r=U(re,n),c=ne(n);return i.jsx(He,{asChild:!0,...c,orientation:r.orientation,dir:r.dir,loop:o,children:i.jsx(E.div,{role:"tablist","aria-orientation":r.orientation,...s,ref:t})})});se.displayName=re;var ae="TabsTrigger",ce=a.forwardRef((e,t)=>{const{__scopeTabs:n,value:o,disabled:s=!1,...r}=e,c=U(ae,n),u=ne(n),l=le(c.baseId,o),d=de(c.baseId,o),p=o===c.value;return i.jsx(qe,{asChild:!0,...u,focusable:!s,active:p,children:i.jsx(E.button,{type:"button",role:"tab","aria-selected":p,"aria-controls":d,"data-state":p?"active":"inactive","data-disabled":s?"":void 0,disabled:s,id:l,...r,ref:t,onMouseDown:N(e.onMouseDown,f=>{!s&&f.button===0&&f.ctrlKey===!1?c.onValueChange(o):f.preventDefault()}),onKeyDown:N(e.onKeyDown,f=>{[" ","Enter"].includes(f.key)&&c.onValueChange(o)}),onFocus:N(e.onFocus,()=>{const f=c.activationMode!=="manual";!p&&!s&&f&&c.onValueChange(o)})})})});ce.displayName=ae;var ie="TabsContent",ue=a.forwardRef((e,t)=>{const{__scopeTabs:n,value:o,forceMount:s,children:r,...c}=e,u=U(ie,n),l=le(u.baseId,o),d=de(u.baseId,o),p=o===u.value,f=a.useRef(p);return a.useEffect(()=>{const h=requestAnimationFrame(()=>f.current=!1);return()=>cancelAnimationFrame(h)},[]),i.jsx(te,{present:s||p,children:({present:h})=>i.jsx(E.div,{"data-state":p?"active":"inactive","data-orientation":u.orientation,role:"tabpanel","aria-labelledby":l,hidden:!h,id:d,tabIndex:0,...c,ref:t,style:{...e.style,animationDuration:f.current?"0s":void 0},children:h&&r})})});ue.displayName=ie;function le(e,t){return`${e}-trigger-${t}`}function de(e,t){return`${e}-content-${t}`}var Xe=oe,et=se,V=ce,K=ue;const at=e=>{const{images:t,verses:n}=e,o=a.useMemo(()=>new URLSearchParams(window.location.search).get("tab"),[]),s=r=>{const c=new URL(window.location.href);c.searchParams.set("tab",r),window.history.pushState(null,"",c.toString())};return i.jsxs(Xe,{className:"tabbed-document-index",defaultValue:o||"verses",onValueChange:s,children:[i.jsxs(et,{className:"tabs-list",children:[i.jsxs(V,{value:"verses",children:["Sanskrit Verses (",n.length,")"]}),i.jsxs(V,{value:"images",children:["Images (",t.length,")"]})]}),i.jsx(K,{className:"tabs-content",value:"verses",children:i.jsxs("ul",{children:[i.jsx("li",{className:"disabled",children:"Aśvaghoṣa: Buddhacarita. Sarga 1."}),i.jsx("li",{className:"disabled",children:"Aśvaghoṣa: Buddhacarita. Sarga 2."}),i.jsx("li",{className:"disabled",children:"Aśvaghoṣa: Buddhacarita. Sarga 3."}),i.jsx("li",{className:"disabled",children:"Aśvaghoṣa: Buddhacarita. Sarga 4."}),n.map(r=>i.jsxs("li",{children:[i.jsx("a",{href:`verse/${r.slug}`,children:r.title}),r.annotations===0&&i.jsx("span",{className:"work-in-progress",children:"WORK IN PROGRESS"})]},r.slug)),i.jsx("li",{className:"disabled",children:"Aśvaghoṣa: Buddhacarita. Sarga 6."}),i.jsx("li",{className:"disabled",children:"Aśvaghoṣa: Buddhacarita. Sarga 7."}),i.jsx("li",{className:"disabled",children:"Aśvaghoṣa: Buddhacarita. Sarga 8."}),i.jsx("li",{className:"disabled",children:"Aśvaghoṣa: Buddhacarita. Sarga 9."}),i.jsx("li",{className:"disabled",children:"Aśvaghoṣa: Buddhacarita. Sarga 10."}),i.jsx("li",{className:"disabled",children:"Aśvaghoṣa: Buddhacarita. Sarga 11."}),i.jsx("li",{className:"disabled",children:"Aśvaghoṣa: Buddhacarita. Sarga 12."}),i.jsx("li",{className:"disabled",children:"Aśvaghoṣa: Buddhacarita. Sarga 13."}),i.jsx("li",{className:"disabled",children:"Aśvaghoṣa: Buddhacarita. Sarga 14."}),i.jsx("li",{className:"disabled",children:"Aśvaghoṣa: Buddhacarita. Sarga 15."})]})}),i.jsx(K,{className:"tabs-content",value:"images",children:i.jsx("ul",{children:t.map(r=>i.jsx("li",{children:i.jsxs("p",{children:[i.jsxs("div",{children:[i.jsx("a",{href:`image/${r.slug}`,children:r.title}),r.annotations===0&&i.jsx("span",{className:"work-in-progress",children:"WORK IN PROGRESS"})]}),i.jsxs("div",{className:"credits",children:[i.jsx("span",{children:r.credits}),i.jsx("a",{href:r.source,target:"_blank",children:i.jsx(xe,{size:16})})]}),i.jsx("div",{className:"license",children:r.license})]})},r.slug))})})]})};export{at as TabbedDocumentIndex};