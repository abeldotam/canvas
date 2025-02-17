import{d as g,r as T,o as C,aj as S,c as i,y as j,z as B,U as O,ak as D,i as s,g as c,w as d,e as m,F as v,al as y,D as _,E as k,n as L,t as h,ae as $,q as F,am as P,G as z,an as U,x as V,f as A,ai as b,ao as I,Q as E}from"./CKfyRCiV.js";import{_ as G}from"./Ce7dZA8G.js";import{_ as H}from"./Coq9eTNn.js";import{_ as N}from"./DlAUqK2U.js";const R=Symbol.for("nuxt:client-only"),W=g({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(n,{slots:e,attrs:a}){const t=T(!1);return C(()=>{t.value=!0}),S(R,!0),o=>{var f;if(t.value)return(f=e.default)==null?void 0:f.call(e);const u=e.fallback||e.placeholder;if(u)return u();const r=o.fallback||o.placeholder||"",p=o.fallbackTag||o.placeholderTag||"span";return i(p,a,r)}}}),q={class:"z-99 flex items-center gap-3 rounded-lg border border-white/10 bg-zinc-900/90 px-3 py-1 backdrop-blur-xl"},M=g({__name:"LanguageToggle",setup(n){const{locale:e,setLocaleCookie:a,locales:t}=j(),o=B(()=>t.value.find(r=>r.code===e.value));O(e,r=>{a(r)});const u=D();return(r,p)=>{const f=$,l=W;return s(),i("div",q,[c(l,null,{fallback:d(()=>p[0]||(p[0]=[m("div",{class:"h-2 w-5"},null,-1)])),default:d(()=>[(s(!0),i(v,null,y(_(t),x=>(s(),k(f,{key:x.code,class:"cursor-pointer select-none",to:_(u)(x.code)},{default:d(()=>{var w;return[m("span",{class:L(["font-semibold",x.code===((w=_(o))==null?void 0:w.code)?"text-white":"text-neutral-500"])},h(x.code),3)]}),_:2},1032,["to"]))),128))]),_:1})])}}}),Q=Object.assign(M,{__name:"SettingsLanguageToggle"});function Y(n){switch(n){case"home":return{home:{name:"Home",to:"/",icon:"lucide:home"},works:{name:"Works",to:"/works",icon:"lucide:briefcase"},writing:{name:"Writing",to:"/writing",icon:"lucide:library"},about:{name:"About",to:"/about",icon:"lucide:user"},contact:{name:"Contact",to:"/contact",icon:"lucide:mail"}};default:return[]}}const J={class:"mx-auto my-2 flex w-full items-center justify-center"},K={class:"rounded-full"},X={class:"z-10 flex h-[50px] justify-around gap-2 p-1 transition-all duration-300 ease-in-out sm:h-[45px] sm:hover:gap-4"},Z=g({__name:"Navbar",props:{isText:{type:Boolean,default:!1}},setup(n){const e=Y("home"),a=F(),t=P();return(o,u)=>{const r=z,p=$,f=U;return s(),i("div",J,[m("header",K,[c(f,{rounded:"",transparent:"",animate:!1,class:"border border-white/10"},{default:d(()=>[m("nav",X,[(s(!0),i(v,null,y(_(e),l=>(s(),k(p,{id:l.name.toLowerCase(),key:l.name,"aria-label":l.name+" navigation link",class:L([[_(t)(l.to)===_(a).path?"border border-white/5 bg-zinc-900/10 text-white/75 shadow-2xl shadow-white/50 backdrop-blur-3xl text-shadow-sm":"text-muted"],"flex items-center rounded-full border border-transparent px-4 py-1 transition-all duration-300 ease-in-out hover:border-white/5 hover:bg-zinc-900/50 hover:backdrop-blur-3xl sm:px-6"]),to:_(t)(l.to)},{default:d(()=>[c(r,{name:l.icon,class:"size-7 font-light sm:size-6"},null,8,["name"])]),_:2},1032,["id","aria-label","class","to"]))),128))])]),_:1})])])}}}),ee=Object.assign(Z,{__name:"LayoutNavbar"}),te={key:0,class:"ml-1 text-xs font-semibold"},oe=g({__name:"Logo",props:{isText:{type:Boolean,default:!1}},setup(n){const{appName:e}=V();return(a,t)=>{const o=z,u=H;return s(),k(u,{to:"/",class:"flex shrink-0 items-center","aria-label":"Go back to home page"},{default:d(()=>[c(o,{name:"custom:maison-hochard",class:"size-8"}),n.isText?(s(),i("span",te,h(_(e)),1)):A("",!0)]),_:1})}}}),ne=Object.assign(oe,{__name:"Logo"}),ae={},se={class:"mt-6 pb-20"},ce={class:"mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 py-6"},re={class:"text-center text-sm text-muted"};function le(n,e){const a=G,t=ne,o=I;return s(),i("div",se,[c(a),m("footer",ce,[c(t,{size:8}),m("span",re,[b(" © "+h(new Date().getFullYear())+", ",1),c(o,{to:"https://dub.sh/hrcd"},{default:d(()=>e[0]||(e[0]=[b("HugoRCD")])),_:1}),b(" - "+h(n.$t("global.all_rights_reserved"))+". ",1)])])])}const _e=Object.assign(N(ae,[["render",le]]),{__name:"LayoutFooter"}),ie={},ue={class:"sm:mt-[50px]"};function de(n,e){const a=Q,t=ee,o=_e;return s(),i("div",null,[c(a,{class:"fixed right-1 z-50 top-1"}),c(t,{class:"fixed bottom-0 z-50 flex sm:bottom-auto sm:top-0"}),m("div",ue,[E(n.$slots,"default")]),c(o)])}const he=N(ie,[["render",de]]);export{he as default};
