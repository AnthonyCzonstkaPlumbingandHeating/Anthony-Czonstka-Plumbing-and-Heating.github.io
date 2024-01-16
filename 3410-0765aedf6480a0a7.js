"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3410],{41370:function(e,n,t){t.d(n,{Z:function(){return Z}});var o=t(828),i=t(85893),r=t(67294),a=t(26042),l=t(69396),c=t(31996),u={250:"duration-250",300:"duration-300",500:"duration-500",700:"duration-700",750:"duration-750"},s={fadeIn:{enter:"transition-all ease-in-out",enterFrom:"opacity-0 !block",enterTo:"opacity-100",leave:"transition-all ease-in-out",leaveFrom:"opacity-100",leaveTo:"opacity-0"},slideFromBottom:{enter:"transition-all ease-in-out",enterFrom:"opacity-0 translate-y-8",enterTo:"opacity-100 translate-y-0",leave:"transition-all ease-in-out",leaveFrom:"opacity-100 translate-y-0",leaveTo:"opacity-0 translate-y-8"},slideFromRight:{enter:"transition-all ease-in-out",enterFrom:"opacity-0 translate-x-8",enterTo:"opacity-100 translate-x-0",leave:"transition-all ease-in-out",leaveFrom:"opacity-100 translate-x-0",leaveTo:"opacity-0 translate-x-8"},slideFromLeft:{enter:"transition-all ease-in-out",enterFrom:"opacity-0 -translate-x-8",enterTo:"opacity-100 translate-x-0",leave:"transition-all ease-in-out",leaveFrom:"opacity-100 translate-x-0",leaveTo:"opacity-0 -translate-x-8"},fadeAndGrow:{enter:"transition-all ease-in-out",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"transition-all ease-in-out",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95"},zoomOut:{enter:"transition-all ease-in-out",enterFrom:"opacity-0 scale-105",enterTo:"opacity-100 scale-100",leave:"transition-all ease-in-out",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-105"},zoomIn:{enter:"transition-all ease-in-out",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"transition-all ease-in-out",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95"},popUp:{enter:"transition-all ease-in-out",enterFrom:"opacity-0 scale-0",enterTo:"opacity-100 scale-100",leave:"transition-all ease-in-out",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-0"},none:{enter:"",enterFrom:"",enterTo:"",leave:"",leaveFrom:"",leaveTo:""}},d=function(e){var n,t=e.show,o=void 0===t||t,d=(e.appear,e.children),v=e.animation,f=void 0===v?"none":v,m=e.duration,b=void 0===m?300:m,p=(e.asChild,e.unmount,e.style),y=e.delay,h=e.className,g=(0,r.useState)(!1),w=g[0],x=g[1],k=null!==(n=s[f])&&void 0!==n?n:s.none,j=(0,l.Z)((0,a.Z)({},k),{enter:"".concat(k.enter," ").concat(u[b]," ").concat(y?"delay-".concat(y):""),leave:"".concat(k.leave," ").concat(u[b]," ").concat(y?"delay-".concat(y):"")});return(0,r.useEffect)((function(){if(o){var e=setTimeout((function(){return x(!0)}),150);return function(){e&&clearTimeout(e)}}}),[o]),(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{className:(0,c.AK)("transition-all",w?"".concat(j.enter," ").concat(j.enterTo):"".concat(j.enter," ").concat(j.enterFrom),h),style:p,children:d})})},v=Object.defineProperty,f=(e,n,t)=>(((e,n,t)=>{n in e?v(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t})(e,"symbol"!==typeof n?n+"":n,t),t),m=new Map,b=new WeakMap,p=0,y=void 0;function h(e){return Object.keys(e).sort().filter((n=>void 0!==e[n])).map((n=>{return`${n}_${"root"===n?(t=e.root,t?(b.has(t)||(p+=1,b.set(t,p.toString())),b.get(t)):"0"):e[n]}`;var t})).toString()}function g(e,n,t={},o=y){if("undefined"===typeof window.IntersectionObserver&&void 0!==o){const i=e.getBoundingClientRect();return n(o,{isIntersecting:o,target:e,intersectionRatio:"number"===typeof t.threshold?t.threshold:0,time:0,boundingClientRect:i,intersectionRect:i,rootBounds:i}),()=>{}}const{id:i,observer:r,elements:a}=function(e){let n=h(e),t=m.get(n);if(!t){const o=new Map;let i;const r=new IntersectionObserver((n=>{n.forEach((n=>{var t;const r=n.isIntersecting&&i.some((e=>n.intersectionRatio>=e));e.trackVisibility&&"undefined"===typeof n.isVisible&&(n.isVisible=r),null==(t=o.get(n.target))||t.forEach((e=>{e(r,n)}))}))}),e);i=r.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),t={id:n,observer:r,elements:o},m.set(n,t)}return t}(t);let l=a.get(e)||[];return a.has(e)||a.set(e,l),l.push(n),r.observe(e),function(){l.splice(l.indexOf(n),1),0===l.length&&(a.delete(e),r.unobserve(e)),0===a.size&&(r.disconnect(),m.delete(i))}}r.Component;var w="default",x="medium",k="none",j="medium";var F={slow:750,medium:500,fast:250},Z=function(e){var n=e.children,t=e.settings,a=e.globalSettings,l=e.unmount,c=void 0!==l&&l,u=e.delay,s=e.className,v=e.style,f=function(e,n){var t=e||{},o=t.type,i=void 0===o?w:o,r=t.speed,a=void 0===r?x:r;return"default"===i&&(i=(null===n||void 0===n?void 0:n.type)||k,a=(null===n||void 0===n?void 0:n.speed)||j),{type:i,speed:a}}(t,a),m=f.type,b=f.speed,p=(0,r.useState)(!1),y=p[0],h=p[1],Z=(0,o.Z)(function({threshold:e,delay:n,trackVisibility:t,rootMargin:o,root:i,triggerOnce:a,skip:l,initialInView:c,fallbackInView:u,onChange:s}={}){var d;const[v,f]=r.useState(null),m=r.useRef(),[b,p]=r.useState({inView:!!c,entry:void 0});m.current=s,r.useEffect((()=>{if(l||!v)return;let r;return r=g(v,((e,n)=>{p({inView:e,entry:n}),m.current&&m.current(e,n),n.isIntersecting&&a&&r&&(r(),r=void 0)}),{root:i,rootMargin:o,threshold:e,trackVisibility:t,delay:n},u),()=>{r&&r()}}),[Array.isArray(e)?e.toString():e,v,i,o,a,l,t,u,n]);const y=null==(d=b.entry)?void 0:d.target,h=r.useRef();v||!y||a||l||h.current===y||(h.current=y,p({inView:!!c,entry:void 0}));const w=[f,b.inView,b.entry];return w.ref=w[0],w.inView=w[1],w.entry=w[2],w}({triggerOnce:!0}),3),T=Z[0],E=Z[1];Z[2];return(0,r.useEffect)((function(){E&&h(!0)}),[E]),"none"===m?(0,i.jsx)("div",{className:s,style:v,children:n}):(0,i.jsxs)(i.Fragment,{children:[!y&&(0,i.jsx)("div",{className:"absolute left-0 top-8 min-h-full min-w-full",ref:T}),(0,i.jsx)(d,{show:y,animation:m,duration:F[b],unmount:c,disableLeave:!0,delay:u,className:s,style:v,children:n})]})}},22875:function(e,n,t){t.d(n,{z:function(){return a}});var o=t(828),i=t(67294),r=t(31996);function a(e){(0,i.useEffect)((function(){var n,t,i,a,l,c,u,s,d,v,f,m,b,p,y,h,g,w,x=null===e||void 0===e?void 0:e.fonts;if("custom"===(null===x||void 0===x?void 0:x.source))x=null===e||void 0===e||null===(m=e.fonts)||void 0===m?void 0:m.custom,Object.entries(null!==(g=(0,r.s4)(null===(b=e.fonts)||void 0===b||null===(p=b.custom)||void 0===p?void 0:p.head))&&void 0!==g?g:{}).forEach((function(e){var n=(0,o.Z)(e,2),t=n[0],i=n[1];return document.documentElement.style.setProperty("--head-".concat(t),i)})),Object.entries(null!==(w=(0,r.s4)(null===(y=e.fonts)||void 0===y||null===(h=y.custom)||void 0===h?void 0:h.body))&&void 0!==w?w:{}).forEach((function(e){var n=(0,o.Z)(e,2),t=n[0],i=n[1];return document.documentElement.style.setProperty("--body-".concat(t),i)}));else if((null===x||void 0===x||null===(n=x.head)||void 0===n?void 0:n.name)&&(null===x||void 0===x||null===(t=x.body)||void 0===t?void 0:t.name)){var k,j;Object.entries(null!==(k=(0,r.s4)(x.body))&&void 0!==k?k:{}).forEach((function(e){var n=(0,o.Z)(e,2),t=n[0],i=n[1];return document.documentElement.style.setProperty("--body-".concat(t),i)})),Object.entries(null!==(j=(0,r.s4)(x.head))&&void 0!==j?j:{}).forEach((function(e){var n=(0,o.Z)(e,2),t=n[0],i=n[1];return document.documentElement.style.setProperty("--head-".concat(t),i)}))}var F={fontFamily:(null===e||void 0===e||null===(i=e.header)||void 0===i||null===(a=i.logo)||void 0===a||null===(l=a.font)||void 0===l?void 0:l.family)||(null===x||void 0===x||null===(c=x.head)||void 0===c?void 0:c.family)||'"Inter", sans-serif',fontWeight:(null===e||void 0===e||null===(u=e.header)||void 0===u||null===(s=u.logo)||void 0===s||null===(d=s.font)||void 0===d?void 0:d.weight)||(null===x||void 0===x||null===(v=x.head)||void 0===v?void 0:v.weight)||500};if(Object.entries(F).forEach((function(e){var n=(0,o.Z)(e,2),t=n[0],i=n[1];return document.documentElement.style.setProperty("--header-logo-".concat(t),i)})),"footer"===(null===e||void 0===e||null===(f=e.footer)||void 0===f?void 0:f.logoFrom)){var Z,T,E,G,S,I,_,N,O={fontFamily:(null===e||void 0===e||null===(Z=e.footer)||void 0===Z||null===(T=Z.logo)||void 0===T||null===(E=T.font)||void 0===E?void 0:E.family)||(null===x||void 0===x||null===(G=x.head)||void 0===G?void 0:G.family)||'"Inter", sans-serif',fontWeight:(null===e||void 0===e||null===(S=e.footer)||void 0===S||null===(I=S.logo)||void 0===I||null===(_=I.font)||void 0===_?void 0:_.weight)||(null===x||void 0===x||null===(N=x.head)||void 0===N?void 0:N.weight)||500};Object.entries(O).forEach((function(e){var n=(0,o.Z)(e,2),t=n[0],i=n[1];return document.documentElement.style.setProperty("--footer-logo-".concat(t),i)}))}}),[e])}},93410:function(e,n,t){t.r(n),t.d(n,{__N_SSP:function(){return A},default:function(){return z}});var o=t(26042),i=t(85893),r=t(31996),a=t(5152),l=t.n(a),c=t(67294),u=t(9008),s=t.n(u);function d(e){var n=e.block,t=e.idx,o=e.order,r=(0,c.useState)(!1),a=r[0],l=r[1],u=(0,c.useRef)(null),d=(0,c.useRef)(null),v=null;if(n){var f,m=new RegExp(/<div class="commonninja_component pid-(.*?)"><\/div>/,"igm").exec(null===n||void 0===n||null===(f=n.embedCode)||void 0===f?void 0:f.html);m&&(null===m||void 0===m?void 0:m.length)>0&&(v=m.find((function(e){return e.startsWith("<div")})))}var b=function(){clearTimeout(d.current),d.current=setTimeout((function(){v&&window.CommonNinja?(window.CommonNinja.reload(null===n||void 0===n?void 0:n.externalId),clearTimeout(u.current),u.current=setTimeout((function(){var e,t=null===(e=document.querySelector(".pid-".concat(null===n||void 0===n?void 0:n.externalId)))||void 0===e?void 0:e.shadowRoot;if(t){var i=t.querySelector("#stacking-script");if(i)i.innerHTML=".chat-button-container { bottom: ".concat(80*o,"px !important; }");else{var r=document.createElement("style");r.id="stacking-script",r.innerHTML=".chat-button-container { bottom: ".concat(80*o,"px !important; }"),t.appendChild(r)}}}),1500)):(l(!0),b())}),1e3)};return(0,c.useEffect)((function(){b()}),[v]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s(),{children:a&&(0,i.jsx)("script",{src:"https://cdn.commoninja.com/sdk/latest/commonninja.js",defer:!0})}),v&&(0,i.jsx)("div",{style:{zIndex:"".concat(100-10*t+1e4)},className:"absolute",dangerouslySetInnerHTML:{__html:v}})]})}var v=t(21123),f=t(41370),m=t(52077),b={left:"left-6",right:"right-6",center:"left-0 right-0 flex justify-center"};function p(e){var n=e.block,t=e.website,o=e.idx,a=(null===n||void 0===n?void 0:n.content)||"This website uses cookies",l=null===n||void 0===n?void 0:n.button,u=(null===n||void 0===n?void 0:n.position)||"center",s=null===n||void 0===n?void 0:n.animation,d=null===t||void 0===t?void 0:t.animation,p=btoa("cookie-notice"),y=btoa("true"),h=(0,c.useState)("#FFFFFF"),g=h[0],w=h[1],x=(0,c.useState)(!0),k=x[0],j=x[1];return(0,c.useEffect)((function(){(0,r.ej)(p)===y&&j(!1)}),[]),k?(0,i.jsx)("div",{style:{zIndex:"".concat(100-10*o+1e4)},className:(0,r.AK)("fixed bottom-6",b[u]),children:(0,i.jsxs)(f.Z,{settings:s,globalSettings:d,delay:500,className:"relative rounded-lg overflow-hidden shadow-md max-w-[90vw]",children:[(0,i.jsx)(v.Z,{block:n,website:t,setTextColor:w}),(0,i.jsxs)("div",{className:"relative z-10 flex flex-wrap gap-6 items-center justify-center p-2 pl-4 text-center",children:[(0,i.jsx)("div",{className:"rich-text-block website-wysiwyg",style:{color:g},dangerouslySetInnerHTML:{__html:a}}),l&&(0,i.jsx)(m.Z,{className:"cursor-pointer",button:l,block:n,website:t,onClick:function(){j(!1),(0,r.d8)(p,y)}})]})]})}):null}var y=t(22875),h=t(75871),g=(0,i.jsx)("div",{className:"min-h-150 flex-shrink-0 flex-grow"}),w=l()((function(){return Promise.resolve().then(t.bind(t,165))}),{loadableGenerated:{webpack:function(){return[165]}},loading:function(){return g},ssr:!1}),x=l()((function(){return t.e(529).then(t.bind(t,60529))}),{loadableGenerated:{webpack:function(){return[60529]}},loading:function(){return g},ssr:!1}),k=l()((function(){return t.e(2258).then(t.bind(t,82258))}),{loadableGenerated:{webpack:function(){return[82258]}},loading:function(){return g},ssr:!0}),j=l()((function(){return Promise.all([t.e(3752),t.e(258)]).then(t.bind(t,10258))}),{loadableGenerated:{webpack:function(){return[10258]}},loading:function(){return g},ssr:!0}),F=l()((function(){return Promise.all([t.e(3752),t.e(8037)]).then(t.bind(t,98037))}),{loadableGenerated:{webpack:function(){return[98037]}},loading:function(){return g},ssr:!1}),Z=l()((function(){return t.e(6383).then(t.bind(t,76383))}),{loadableGenerated:{webpack:function(){return[76383]}},loading:function(){return g},ssr:!0}),T=l()((function(){return t.e(866).then(t.bind(t,50866))}),{loadableGenerated:{webpack:function(){return[50866]}},loading:function(){return g},ssr:!0}),E=l()((function(){return t.e(3509).then(t.bind(t,33509))}),{loadableGenerated:{webpack:function(){return[33509]}},loading:function(){return g},ssr:!0}),G=l()((function(){return t.e(1202).then(t.bind(t,71202))}),{loadableGenerated:{webpack:function(){return[71202]}},loading:function(){return g},ssr:!1}),S=l()((function(){return Promise.all([t.e(1940),t.e(2686)]).then(t.bind(t,52686))}),{loadableGenerated:{webpack:function(){return[52686]}},loading:function(){return g},ssr:!1}),I=l()((function(){return Promise.all([t.e(120),t.e(696),t.e(8350),t.e(8558)]).then(t.bind(t,78558))}),{loadableGenerated:{webpack:function(){return[78558]}},loading:function(){return g},ssr:!0}),_=l()((function(){return t.e(7626).then(t.bind(t,27626))}),{loadableGenerated:{webpack:function(){return[27626]}},loading:function(){return g},ssr:!0}),N=l()((function(){return t.e(6848).then(t.bind(t,16848))}),{loadableGenerated:{webpack:function(){return[16848]}},loading:function(){return g},ssr:!1}),O=l()((function(){return t.e(7033).then(t.bind(t,97033))}),{loadableGenerated:{webpack:function(){return[97033]}},loading:function(){return g},ssr:!0}),B=l()((function(){return t.e(4179).then(t.bind(t,94179))}),{loadableGenerated:{webpack:function(){return[94179]}},loading:function(){return g},ssr:!0}),C=l()((function(){return t.e(5268).then(t.bind(t,5268))}),{loadableGenerated:{webpack:function(){return[5268]}},loading:function(){return g},ssr:!0}),P=l()((function(){return t.e(6232).then(t.bind(t,86232))}),{loadableGenerated:{webpack:function(){return[86232]}},loading:function(){return g},ssr:!0}),R=l()((function(){return t.e(721).then(t.bind(t,40721))}),{loadableGenerated:{webpack:function(){return[40721]}},loading:function(){return g},ssr:!0}),V=l()((function(){return t.e(2037).then(t.bind(t,22037))}),{loadableGenerated:{webpack:function(){return[22037]}},loading:function(){return g},ssr:!0}),W=l()((function(){return t.e(5500).then(t.bind(t,25500))}),{loadableGenerated:{webpack:function(){return[25500]}},loading:function(){return g},ssr:!0}),M=function(e){var n,t,a,l,u=e.page,s=e.website,v=e.apiUrl,f=e.captchaKey;e.ipAddress,e.pt;(0,y.z)(s);var m=(0,c.useMemo)((function(){return(0,h.M)(s)}),[s]),b=function(e,n,t){var r;if("durable"===(null===n||void 0===n||null===(r=n.WebsiteBlock)||void 0===r?void 0:r.source)){var a,l,c=function(e){if(e){var n=0,t=!0,o=!1,i=void 0;try{for(var r,a=e[Symbol.iterator]();!(t=(r=a.next()).done);t=!0){var l=r.value;if(["contact","hero","text"].includes(l.WebsiteBlock.type)){var c,u=null===l||void 0===l||null===(c=l.content)||void 0===c?void 0:c.match(/<h1(.*?)>(.+?)<\/h1>/gi);if((null===u||void 0===u?void 0:u.length)>0)return n}else if(!["embed","image","instagram","quote","video"].includes(l.WebsiteBlock.type)&&l.headline)return n;n++}}catch(s){o=!0,i=s}finally{try{t||null==a.return||a.return()}finally{if(o)throw i}}}return null}(null===u||void 0===u?void 0:u.blocks),d=c===e,b=(null===n||void 0===n||null===(a=n.WebsiteBlock)||void 0===a?void 0:a.type)||"",p="".concat(null===u||void 0===u?void 0:u.slug,"-website-block-").concat(null===(l=n.WebsiteBlock)||void 0===l?void 0:l._id,"-").concat(e),y="".concat(b,"-").concat(e),h={"data-type-id":y,block:n,id:n._id||y,isSeoHeadline:d,key:p,page:u,previousBlock:t,stickyHeaderOffsetStyle:m,website:s};switch(b){case"banner":return(0,i.jsx)(k,(0,o.Z)({},h));case"contact":return(0,i.jsx)(I,(0,o.Z)({captchaKey:f,apiUrl:v},h));case"gallery":case"image-carousel":case"image-grid":return(0,i.jsx)(F,(0,o.Z)({},h));case"hero":return(0,i.jsx)(Z,(0,o.Z)({},h));case"list":case"service-list":case"team-list":return(0,i.jsx)(E,(0,o.Z)({},h));case"location":return(0,i.jsx)(S,(0,o.Z)({},h));case"quote":return(0,i.jsx)(j,(0,o.Z)({},h));case"text":return(0,i.jsx)(T,(0,o.Z)({},h));case"video":return(0,i.jsx)(G,(0,o.Z)({},h));case"embed":return(0,i.jsx)(_,(0,o.Z)({},h));case"image":return(0,i.jsx)(N,(0,o.Z)({},h));case"calendly-scheduling":return(0,i.jsx)(O,(0,o.Z)({},h));case"instagram":return(0,i.jsx)(B,(0,o.Z)({},h));case"pricing-table":return(0,i.jsx)(P,(0,o.Z)({},h));case"faq":return(0,i.jsx)(R,(0,o.Z)({},h));case"google-reviews":return(0,i.jsx)(V,(0,o.Z)({},h));case"cta":return(0,i.jsx)(W,(0,o.Z)({},h))}}else{var g,w,x;if("common-ninja"===(null===n||void 0===n||null===(g=n.WebsiteBlock)||void 0===g?void 0:g.source))return(0,i.jsx)(C,{id:"common-ninja-".concat(null===n||void 0===n||null===(w=n.WebsiteBlock)||void 0===w?void 0:w.type,"-").concat(e),block:n,website:s,previousBlock:t},"".concat(null===u||void 0===u?void 0:u.slug,"-website-block-").concat(null===(x=n.WebsiteBlock)||void 0===x?void 0:x._id,"-").concat(e))}};return(0,i.jsxs)(i.Fragment,{children:[u&&"parent"!==u.type?(0,i.jsxs)(i.Fragment,{children:[null===(n=u.blocks)||void 0===n?void 0:n.map((function(e,n){return b(n,e,n>0?u.blocks[n-1]:null)})),(null===s||void 0===s||null===(t=s.widgets)||void 0===t?void 0:t.length)>0&&function(e){var n=(0,r.p$)(e).reverse(),t=0;return n.forEach((function(e){"cookie_bar"===e.type?e.idx=0:(e.idx=t,t++)})),n}(s.widgets).map((function(e,n){return"cookie-notice"===e.type?(0,i.jsx)(p,{idx:n,order:e.idx,block:e,website:s},"widget-".concat(n)):(0,i.jsx)(d,{idx:n,order:e.idx,block:e},"page-".concat(null===u||void 0===u?void 0:u._id,"-").concat(null===e||void 0===e?void 0:e.externalId))}))]}):(0,i.jsx)(x,{website:s}),(0,i.jsx)(w,{website:s,previousBlock:(null===u||void 0===u||null===(a=u.blocks)||void 0===a?void 0:a.length)>0?null===u||void 0===u?void 0:u.blocks[(null===u||void 0===u||null===(l=u.blocks)||void 0===l?void 0:l.length)-1]:null},"footer-page-".concat(null===u||void 0===u?void 0:u._id))]})};M.getLayout=function(e){return(0,r.G0)(e,{hideFooter:!0})};var A=!0,z=M},828:function(e,n,t){t.d(n,{Z:function(){return r}});var o=t(13375);var i=t(91566);function r(e,n){return function(e){if(Array.isArray(e))return e}(e)||(0,o.Z)(e,n)||(0,i.Z)(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);