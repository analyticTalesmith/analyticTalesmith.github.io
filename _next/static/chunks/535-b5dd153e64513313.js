"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[535],{1719:(e,t,r)=>{r.d(t,{A:()=>n});let n=(0,r(7401).A)("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]])},1902:(e,t,r)=>{r.d(t,{A:()=>n});let n=(0,r(7401).A)("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]])},6195:(e,t,r)=>{r.d(t,{b:()=>i});var n=r(2115),l=r(3360),o=r(5155),a=n.forwardRef((e,t)=>(0,o.jsx)(l.sG.label,{...e,ref:t,onMouseDown:t=>{var r;t.target.closest("button, input, select, textarea")||(null===(r=e.onMouseDown)||void 0===r||r.call(e,t),!t.defaultPrevented&&t.detail>1&&t.preventDefault())}}));a.displayName="Label";var i=a},520:(e,t,r)=>{r.d(t,{UC:()=>eM,YJ:()=>eA,In:()=>eI,q7:()=>e_,VF:()=>eV,p4:()=>eB,JU:()=>eH,ZL:()=>eD,bL:()=>eR,wn:()=>eF,PP:()=>eG,wv:()=>eK,l9:()=>eP,WT:()=>eE,LM:()=>eL});var n=r(2115),l=r(7650);function o(e,[t,r]){return Math.min(r,Math.max(t,e))}var a=r(3610),i=r(9741),s=r(8068),d=r(8166),u=r(4256),c=r(9674),p=r(2292),v=r(196),f=r(7668),h=r(905),m=r(7323),w=r(3360),g=r(2317),x=r(1524),y=r(1488),b=r(6611),S=r(5155),C=n.forwardRef((e,t)=>(0,S.jsx)(w.sG.span,{...e,ref:t,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}}));C.displayName="VisuallyHidden";var j=r(5587),k=r(4065),T=[" ","Enter","ArrowUp","ArrowDown"],N=[" ","Enter"],R="Select",[P,E,I]=(0,i.N)(R),[D,M]=(0,d.A)(R,[I,h.Bk]),L=(0,h.Bk)(),[A,H]=D(R),[_,B]=D(R),V=e=>{let{__scopeSelect:t,children:r,open:l,defaultOpen:o,onOpenChange:a,value:i,defaultValue:s,onValueChange:d,dir:c,name:p,autoComplete:v,disabled:m,required:w,form:g}=e,x=L(t),[b,C]=n.useState(null),[j,k]=n.useState(null),[T,N]=n.useState(!1),R=(0,u.jH)(c),[E=!1,I]=(0,y.i)({prop:l,defaultProp:o,onChange:a}),[D,M]=(0,y.i)({prop:i,defaultProp:s,onChange:d}),H=n.useRef(null),B=!b||g||!!b.closest("form"),[V,G]=n.useState(new Set),F=Array.from(V).map(e=>e.props.value).join(";");return(0,S.jsx)(h.bL,{...x,children:(0,S.jsxs)(A,{required:w,scope:t,trigger:b,onTriggerChange:C,valueNode:j,onValueNodeChange:k,valueNodeHasChildren:T,onValueNodeHasChildrenChange:N,contentId:(0,f.B)(),value:D,onValueChange:M,open:E,onOpenChange:I,dir:R,triggerPointerDownPosRef:H,disabled:m,children:[(0,S.jsx)(P.Provider,{scope:t,children:(0,S.jsx)(_,{scope:e.__scopeSelect,onNativeOptionAdd:n.useCallback(e=>{G(t=>new Set(t).add(e))},[]),onNativeOptionRemove:n.useCallback(e=>{G(t=>{let r=new Set(t);return r.delete(e),r})},[]),children:r})}),B?(0,S.jsxs)(ek,{"aria-hidden":!0,required:w,tabIndex:-1,name:p,autoComplete:v,value:D,onChange:e=>M(e.target.value),disabled:m,form:g,children:[void 0===D?(0,S.jsx)("option",{value:""}):null,Array.from(V)]},F):null]})})};V.displayName=R;var G="SelectTrigger",F=n.forwardRef((e,t)=>{let{__scopeSelect:r,disabled:l=!1,...o}=e,i=L(r),d=H(G,r),u=d.disabled||l,c=(0,s.s)(t,d.onTriggerChange),p=E(r),v=n.useRef("touch"),[f,m,g]=eT(e=>{let t=p().filter(e=>!e.disabled),r=t.find(e=>e.value===d.value),n=eN(t,e,r);void 0!==n&&d.onValueChange(n.value)}),x=e=>{u||(d.onOpenChange(!0),g()),e&&(d.triggerPointerDownPosRef.current={x:Math.round(e.pageX),y:Math.round(e.pageY)})};return(0,S.jsx)(h.Mz,{asChild:!0,...i,children:(0,S.jsx)(w.sG.button,{type:"button",role:"combobox","aria-controls":d.contentId,"aria-expanded":d.open,"aria-required":d.required,"aria-autocomplete":"none",dir:d.dir,"data-state":d.open?"open":"closed",disabled:u,"data-disabled":u?"":void 0,"data-placeholder":ej(d.value)?"":void 0,...o,ref:c,onClick:(0,a.m)(o.onClick,e=>{e.currentTarget.focus(),"mouse"!==v.current&&x(e)}),onPointerDown:(0,a.m)(o.onPointerDown,e=>{v.current=e.pointerType;let t=e.target;t.hasPointerCapture(e.pointerId)&&t.releasePointerCapture(e.pointerId),0===e.button&&!1===e.ctrlKey&&"mouse"===e.pointerType&&(x(e),e.preventDefault())}),onKeyDown:(0,a.m)(o.onKeyDown,e=>{let t=""!==f.current;e.ctrlKey||e.altKey||e.metaKey||1!==e.key.length||m(e.key),(!t||" "!==e.key)&&T.includes(e.key)&&(x(),e.preventDefault())})})})});F.displayName=G;var K="SelectValue",O=n.forwardRef((e,t)=>{let{__scopeSelect:r,className:n,style:l,children:o,placeholder:a="",...i}=e,d=H(K,r),{onValueNodeHasChildrenChange:u}=d,c=void 0!==o,p=(0,s.s)(t,d.onValueNodeChange);return(0,b.N)(()=>{u(c)},[u,c]),(0,S.jsx)(w.sG.span,{...i,ref:p,style:{pointerEvents:"none"},children:ej(d.value)?(0,S.jsx)(S.Fragment,{children:a}):o})});O.displayName=K;var U=n.forwardRef((e,t)=>{let{__scopeSelect:r,children:n,...l}=e;return(0,S.jsx)(w.sG.span,{"aria-hidden":!0,...l,ref:t,children:n||"▼"})});U.displayName="SelectIcon";var W=e=>(0,S.jsx)(m.Z,{asChild:!0,...e});W.displayName="SelectPortal";var z="SelectContent",q=n.forwardRef((e,t)=>{let r=H(z,e.__scopeSelect),[o,a]=n.useState();return((0,b.N)(()=>{a(new DocumentFragment)},[]),r.open)?(0,S.jsx)(Z,{...e,ref:t}):o?l.createPortal((0,S.jsx)(X,{scope:e.__scopeSelect,children:(0,S.jsx)(P.Slot,{scope:e.__scopeSelect,children:(0,S.jsx)("div",{children:e.children})})}),o):null});q.displayName=z;var[X,Y]=D(z),Z=n.forwardRef((e,t)=>{let{__scopeSelect:r,position:l="item-aligned",onCloseAutoFocus:o,onEscapeKeyDown:i,onPointerDownOutside:d,side:u,sideOffset:f,align:h,alignOffset:m,arrowPadding:w,collisionBoundary:x,collisionPadding:y,sticky:b,hideWhenDetached:C,avoidCollisions:T,...N}=e,R=H(z,r),[P,I]=n.useState(null),[D,M]=n.useState(null),L=(0,s.s)(t,e=>I(e)),[A,_]=n.useState(null),[B,V]=n.useState(null),G=E(r),[F,K]=n.useState(!1),O=n.useRef(!1);n.useEffect(()=>{if(P)return(0,j.Eq)(P)},[P]),(0,p.Oh)();let U=n.useCallback(e=>{let[t,...r]=G().map(e=>e.ref.current),[n]=r.slice(-1),l=document.activeElement;for(let r of e)if(r===l||(null==r||r.scrollIntoView({block:"nearest"}),r===t&&D&&(D.scrollTop=0),r===n&&D&&(D.scrollTop=D.scrollHeight),null==r||r.focus(),document.activeElement!==l))return},[G,D]),W=n.useCallback(()=>U([A,P]),[U,A,P]);n.useEffect(()=>{F&&W()},[F,W]);let{onOpenChange:q,triggerPointerDownPosRef:Y}=R;n.useEffect(()=>{if(P){let e={x:0,y:0},t=t=>{var r,n,l,o;e={x:Math.abs(Math.round(t.pageX)-(null!==(l=null===(r=Y.current)||void 0===r?void 0:r.x)&&void 0!==l?l:0)),y:Math.abs(Math.round(t.pageY)-(null!==(o=null===(n=Y.current)||void 0===n?void 0:n.y)&&void 0!==o?o:0))}},r=r=>{e.x<=10&&e.y<=10?r.preventDefault():P.contains(r.target)||q(!1),document.removeEventListener("pointermove",t),Y.current=null};return null!==Y.current&&(document.addEventListener("pointermove",t),document.addEventListener("pointerup",r,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",t),document.removeEventListener("pointerup",r,{capture:!0})}}},[P,q,Y]),n.useEffect(()=>{let e=()=>q(!1);return window.addEventListener("blur",e),window.addEventListener("resize",e),()=>{window.removeEventListener("blur",e),window.removeEventListener("resize",e)}},[q]);let[Z,$]=eT(e=>{let t=G().filter(e=>!e.disabled),r=t.find(e=>e.ref.current===document.activeElement),n=eN(t,e,r);n&&setTimeout(()=>n.ref.current.focus())}),ee=n.useCallback((e,t,r)=>{let n=!O.current&&!r;(void 0!==R.value&&R.value===t||n)&&(_(e),n&&(O.current=!0))},[R.value]),et=n.useCallback(()=>null==P?void 0:P.focus(),[P]),er=n.useCallback((e,t,r)=>{let n=!O.current&&!r;(void 0!==R.value&&R.value===t||n)&&V(e)},[R.value]),en="popper"===l?Q:J,el=en===Q?{side:u,sideOffset:f,align:h,alignOffset:m,arrowPadding:w,collisionBoundary:x,collisionPadding:y,sticky:b,hideWhenDetached:C,avoidCollisions:T}:{};return(0,S.jsx)(X,{scope:r,content:P,viewport:D,onViewportChange:M,itemRefCallback:ee,selectedItem:A,onItemLeave:et,itemTextRefCallback:er,focusSelectedItem:W,selectedItemText:B,position:l,isPositioned:F,searchRef:Z,children:(0,S.jsx)(k.A,{as:g.DX,allowPinchZoom:!0,children:(0,S.jsx)(v.n,{asChild:!0,trapped:R.open,onMountAutoFocus:e=>{e.preventDefault()},onUnmountAutoFocus:(0,a.m)(o,e=>{var t;null===(t=R.trigger)||void 0===t||t.focus({preventScroll:!0}),e.preventDefault()}),children:(0,S.jsx)(c.qW,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:i,onPointerDownOutside:d,onFocusOutside:e=>e.preventDefault(),onDismiss:()=>R.onOpenChange(!1),children:(0,S.jsx)(en,{role:"listbox",id:R.contentId,"data-state":R.open?"open":"closed",dir:R.dir,onContextMenu:e=>e.preventDefault(),...N,...el,onPlaced:()=>K(!0),ref:L,style:{display:"flex",flexDirection:"column",outline:"none",...N.style},onKeyDown:(0,a.m)(N.onKeyDown,e=>{let t=e.ctrlKey||e.altKey||e.metaKey;if("Tab"===e.key&&e.preventDefault(),t||1!==e.key.length||$(e.key),["ArrowUp","ArrowDown","Home","End"].includes(e.key)){let t=G().filter(e=>!e.disabled).map(e=>e.ref.current);if(["ArrowUp","End"].includes(e.key)&&(t=t.slice().reverse()),["ArrowUp","ArrowDown"].includes(e.key)){let r=e.target,n=t.indexOf(r);t=t.slice(n+1)}setTimeout(()=>U(t)),e.preventDefault()}})})})})})})});Z.displayName="SelectContentImpl";var J=n.forwardRef((e,t)=>{let{__scopeSelect:r,onPlaced:l,...a}=e,i=H(z,r),d=Y(z,r),[u,c]=n.useState(null),[p,v]=n.useState(null),f=(0,s.s)(t,e=>v(e)),h=E(r),m=n.useRef(!1),g=n.useRef(!0),{viewport:x,selectedItem:y,selectedItemText:C,focusSelectedItem:j}=d,k=n.useCallback(()=>{if(i.trigger&&i.valueNode&&u&&p&&x&&y&&C){let e=i.trigger.getBoundingClientRect(),t=p.getBoundingClientRect(),r=i.valueNode.getBoundingClientRect(),n=C.getBoundingClientRect();if("rtl"!==i.dir){let l=n.left-t.left,a=r.left-l,i=e.left-a,s=e.width+i,d=Math.max(s,t.width),c=o(a,[10,Math.max(10,window.innerWidth-10-d)]);u.style.minWidth=s+"px",u.style.left=c+"px"}else{let l=t.right-n.right,a=window.innerWidth-r.right-l,i=window.innerWidth-e.right-a,s=e.width+i,d=Math.max(s,t.width),c=o(a,[10,Math.max(10,window.innerWidth-10-d)]);u.style.minWidth=s+"px",u.style.right=c+"px"}let a=h(),s=window.innerHeight-20,d=x.scrollHeight,c=window.getComputedStyle(p),v=parseInt(c.borderTopWidth,10),f=parseInt(c.paddingTop,10),w=parseInt(c.borderBottomWidth,10),g=v+f+d+parseInt(c.paddingBottom,10)+w,b=Math.min(5*y.offsetHeight,g),S=window.getComputedStyle(x),j=parseInt(S.paddingTop,10),k=parseInt(S.paddingBottom,10),T=e.top+e.height/2-10,N=y.offsetHeight/2,R=v+f+(y.offsetTop+N);if(R<=T){let e=a.length>0&&y===a[a.length-1].ref.current;u.style.bottom="0px";let t=Math.max(s-T,N+(e?k:0)+(p.clientHeight-x.offsetTop-x.offsetHeight)+w);u.style.height=R+t+"px"}else{let e=a.length>0&&y===a[0].ref.current;u.style.top="0px";let t=Math.max(T,v+x.offsetTop+(e?j:0)+N);u.style.height=t+(g-R)+"px",x.scrollTop=R-T+x.offsetTop}u.style.margin="".concat(10,"px 0"),u.style.minHeight=b+"px",u.style.maxHeight=s+"px",null==l||l(),requestAnimationFrame(()=>m.current=!0)}},[h,i.trigger,i.valueNode,u,p,x,y,C,i.dir,l]);(0,b.N)(()=>k(),[k]);let[T,N]=n.useState();(0,b.N)(()=>{p&&N(window.getComputedStyle(p).zIndex)},[p]);let R=n.useCallback(e=>{e&&!0===g.current&&(k(),null==j||j(),g.current=!1)},[k,j]);return(0,S.jsx)($,{scope:r,contentWrapper:u,shouldExpandOnScrollRef:m,onScrollButtonChange:R,children:(0,S.jsx)("div",{ref:c,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:T},children:(0,S.jsx)(w.sG.div,{...a,ref:f,style:{boxSizing:"border-box",maxHeight:"100%",...a.style}})})})});J.displayName="SelectItemAlignedPosition";var Q=n.forwardRef((e,t)=>{let{__scopeSelect:r,align:n="start",collisionPadding:l=10,...o}=e,a=L(r);return(0,S.jsx)(h.UC,{...a,...o,ref:t,align:n,collisionPadding:l,style:{boxSizing:"border-box",...o.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}})});Q.displayName="SelectPopperPosition";var[$,ee]=D(z,{}),et="SelectViewport",er=n.forwardRef((e,t)=>{let{__scopeSelect:r,nonce:l,...o}=e,i=Y(et,r),d=ee(et,r),u=(0,s.s)(t,i.onViewportChange),c=n.useRef(0);return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"},nonce:l}),(0,S.jsx)(P.Slot,{scope:r,children:(0,S.jsx)(w.sG.div,{"data-radix-select-viewport":"",role:"presentation",...o,ref:u,style:{position:"relative",flex:1,overflow:"hidden auto",...o.style},onScroll:(0,a.m)(o.onScroll,e=>{let t=e.currentTarget,{contentWrapper:r,shouldExpandOnScrollRef:n}=d;if((null==n?void 0:n.current)&&r){let e=Math.abs(c.current-t.scrollTop);if(e>0){let n=window.innerHeight-20,l=Math.max(parseFloat(r.style.minHeight),parseFloat(r.style.height));if(l<n){let o=l+e,a=Math.min(n,o),i=o-a;r.style.height=a+"px","0px"===r.style.bottom&&(t.scrollTop=i>0?i:0,r.style.justifyContent="flex-end")}}}c.current=t.scrollTop})})})]})});er.displayName=et;var en="SelectGroup",[el,eo]=D(en),ea=n.forwardRef((e,t)=>{let{__scopeSelect:r,...n}=e,l=(0,f.B)();return(0,S.jsx)(el,{scope:r,id:l,children:(0,S.jsx)(w.sG.div,{role:"group","aria-labelledby":l,...n,ref:t})})});ea.displayName=en;var ei="SelectLabel",es=n.forwardRef((e,t)=>{let{__scopeSelect:r,...n}=e,l=eo(ei,r);return(0,S.jsx)(w.sG.div,{id:l.id,...n,ref:t})});es.displayName=ei;var ed="SelectItem",[eu,ec]=D(ed),ep=n.forwardRef((e,t)=>{let{__scopeSelect:r,value:l,disabled:o=!1,textValue:i,...d}=e,u=H(ed,r),c=Y(ed,r),p=u.value===l,[v,h]=n.useState(null!=i?i:""),[m,g]=n.useState(!1),x=(0,s.s)(t,e=>{var t;return null===(t=c.itemRefCallback)||void 0===t?void 0:t.call(c,e,l,o)}),y=(0,f.B)(),b=n.useRef("touch"),C=()=>{o||(u.onValueChange(l),u.onOpenChange(!1))};if(""===l)throw Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");return(0,S.jsx)(eu,{scope:r,value:l,disabled:o,textId:y,isSelected:p,onItemTextChange:n.useCallback(e=>{h(t=>{var r;return t||(null!==(r=null==e?void 0:e.textContent)&&void 0!==r?r:"").trim()})},[]),children:(0,S.jsx)(P.ItemSlot,{scope:r,value:l,disabled:o,textValue:v,children:(0,S.jsx)(w.sG.div,{role:"option","aria-labelledby":y,"data-highlighted":m?"":void 0,"aria-selected":p&&m,"data-state":p?"checked":"unchecked","aria-disabled":o||void 0,"data-disabled":o?"":void 0,tabIndex:o?void 0:-1,...d,ref:x,onFocus:(0,a.m)(d.onFocus,()=>g(!0)),onBlur:(0,a.m)(d.onBlur,()=>g(!1)),onClick:(0,a.m)(d.onClick,()=>{"mouse"!==b.current&&C()}),onPointerUp:(0,a.m)(d.onPointerUp,()=>{"mouse"===b.current&&C()}),onPointerDown:(0,a.m)(d.onPointerDown,e=>{b.current=e.pointerType}),onPointerMove:(0,a.m)(d.onPointerMove,e=>{if(b.current=e.pointerType,o){var t;null===(t=c.onItemLeave)||void 0===t||t.call(c)}else"mouse"===b.current&&e.currentTarget.focus({preventScroll:!0})}),onPointerLeave:(0,a.m)(d.onPointerLeave,e=>{if(e.currentTarget===document.activeElement){var t;null===(t=c.onItemLeave)||void 0===t||t.call(c)}}),onKeyDown:(0,a.m)(d.onKeyDown,e=>{var t;(null===(t=c.searchRef)||void 0===t?void 0:t.current)!==""&&" "===e.key||(N.includes(e.key)&&C()," "===e.key&&e.preventDefault())})})})})});ep.displayName=ed;var ev="SelectItemText",ef=n.forwardRef((e,t)=>{let{__scopeSelect:r,className:o,style:a,...i}=e,d=H(ev,r),u=Y(ev,r),c=ec(ev,r),p=B(ev,r),[v,f]=n.useState(null),h=(0,s.s)(t,e=>f(e),c.onItemTextChange,e=>{var t;return null===(t=u.itemTextRefCallback)||void 0===t?void 0:t.call(u,e,c.value,c.disabled)}),m=null==v?void 0:v.textContent,g=n.useMemo(()=>(0,S.jsx)("option",{value:c.value,disabled:c.disabled,children:m},c.value),[c.disabled,c.value,m]),{onNativeOptionAdd:x,onNativeOptionRemove:y}=p;return(0,b.N)(()=>(x(g),()=>y(g)),[x,y,g]),(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(w.sG.span,{id:c.textId,...i,ref:h}),c.isSelected&&d.valueNode&&!d.valueNodeHasChildren?l.createPortal(i.children,d.valueNode):null]})});ef.displayName=ev;var eh="SelectItemIndicator",em=n.forwardRef((e,t)=>{let{__scopeSelect:r,...n}=e;return ec(eh,r).isSelected?(0,S.jsx)(w.sG.span,{"aria-hidden":!0,...n,ref:t}):null});em.displayName=eh;var ew="SelectScrollUpButton",eg=n.forwardRef((e,t)=>{let r=Y(ew,e.__scopeSelect),l=ee(ew,e.__scopeSelect),[o,a]=n.useState(!1),i=(0,s.s)(t,l.onScrollButtonChange);return(0,b.N)(()=>{if(r.viewport&&r.isPositioned){let e=function(){a(t.scrollTop>0)},t=r.viewport;return e(),t.addEventListener("scroll",e),()=>t.removeEventListener("scroll",e)}},[r.viewport,r.isPositioned]),o?(0,S.jsx)(eb,{...e,ref:i,onAutoScroll:()=>{let{viewport:e,selectedItem:t}=r;e&&t&&(e.scrollTop=e.scrollTop-t.offsetHeight)}}):null});eg.displayName=ew;var ex="SelectScrollDownButton",ey=n.forwardRef((e,t)=>{let r=Y(ex,e.__scopeSelect),l=ee(ex,e.__scopeSelect),[o,a]=n.useState(!1),i=(0,s.s)(t,l.onScrollButtonChange);return(0,b.N)(()=>{if(r.viewport&&r.isPositioned){let e=function(){let e=t.scrollHeight-t.clientHeight;a(Math.ceil(t.scrollTop)<e)},t=r.viewport;return e(),t.addEventListener("scroll",e),()=>t.removeEventListener("scroll",e)}},[r.viewport,r.isPositioned]),o?(0,S.jsx)(eb,{...e,ref:i,onAutoScroll:()=>{let{viewport:e,selectedItem:t}=r;e&&t&&(e.scrollTop=e.scrollTop+t.offsetHeight)}}):null});ey.displayName=ex;var eb=n.forwardRef((e,t)=>{let{__scopeSelect:r,onAutoScroll:l,...o}=e,i=Y("SelectScrollButton",r),s=n.useRef(null),d=E(r),u=n.useCallback(()=>{null!==s.current&&(window.clearInterval(s.current),s.current=null)},[]);return n.useEffect(()=>()=>u(),[u]),(0,b.N)(()=>{var e;let t=d().find(e=>e.ref.current===document.activeElement);null==t||null===(e=t.ref.current)||void 0===e||e.scrollIntoView({block:"nearest"})},[d]),(0,S.jsx)(w.sG.div,{"aria-hidden":!0,...o,ref:t,style:{flexShrink:0,...o.style},onPointerDown:(0,a.m)(o.onPointerDown,()=>{null===s.current&&(s.current=window.setInterval(l,50))}),onPointerMove:(0,a.m)(o.onPointerMove,()=>{var e;null===(e=i.onItemLeave)||void 0===e||e.call(i),null===s.current&&(s.current=window.setInterval(l,50))}),onPointerLeave:(0,a.m)(o.onPointerLeave,()=>{u()})})}),eS=n.forwardRef((e,t)=>{let{__scopeSelect:r,...n}=e;return(0,S.jsx)(w.sG.div,{"aria-hidden":!0,...n,ref:t})});eS.displayName="SelectSeparator";var eC="SelectArrow";function ej(e){return""===e||void 0===e}n.forwardRef((e,t)=>{let{__scopeSelect:r,...n}=e,l=L(r),o=H(eC,r),a=Y(eC,r);return o.open&&"popper"===a.position?(0,S.jsx)(h.i3,{...l,...n,ref:t}):null}).displayName=eC;var ek=n.forwardRef((e,t)=>{let{value:r,...l}=e,o=n.useRef(null),a=(0,s.s)(t,o),i=function(e){let t=n.useRef({value:e,previous:e});return n.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}(r);return n.useEffect(()=>{let e=o.current,t=Object.getOwnPropertyDescriptor(window.HTMLSelectElement.prototype,"value").set;if(i!==r&&t){let n=new Event("change",{bubbles:!0});t.call(e,r),e.dispatchEvent(n)}},[i,r]),(0,S.jsx)(C,{asChild:!0,children:(0,S.jsx)("select",{...l,ref:a,defaultValue:r})})});function eT(e){let t=(0,x.c)(e),r=n.useRef(""),l=n.useRef(0),o=n.useCallback(e=>{let n=r.current+e;t(n),function e(t){r.current=t,window.clearTimeout(l.current),""!==t&&(l.current=window.setTimeout(()=>e(""),1e3))}(n)},[t]),a=n.useCallback(()=>{r.current="",window.clearTimeout(l.current)},[]);return n.useEffect(()=>()=>window.clearTimeout(l.current),[]),[r,o,a]}function eN(e,t,r){var n;let l=t.length>1&&Array.from(t).every(e=>e===t[0])?t[0]:t,o=(n=Math.max(r?e.indexOf(r):-1,0),e.map((t,r)=>e[(n+r)%e.length]));1===l.length&&(o=o.filter(e=>e!==r));let a=o.find(e=>e.textValue.toLowerCase().startsWith(l.toLowerCase()));return a!==r?a:void 0}ek.displayName="BubbleSelect";var eR=V,eP=F,eE=O,eI=U,eD=W,eM=q,eL=er,eA=ea,eH=es,e_=ep,eB=ef,eV=em,eG=eg,eF=ey,eK=eS}}]);