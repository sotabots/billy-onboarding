import{d as R,i as A,o as f,a as b,q as I,T as Q,t as O,y as K,r as N,P as ee,j as U,v as z,H as Y,b as o,w,p as E,I as te,e as M,n as y,f as S,J as se,k as ae,g as j,h as L,K as ne,R as oe,L as F,S as le,c as D,F as W,l as x,m as H,M as G,E as re,N as ue,O as ce,Q as ie,U as pe,V as de,W as _e,s as me,z as fe,X as ve,Y as ge,D as ye}from"./index-2e1cf0fd.js";import{g as J}from"./getElementId-5f791855.js";const he={links:()=>[],mainButtonText:"Continue"},ke=[{id:"telegram_payments",media:{type:"emodji",src:"💳"},type:"default",text:"Bank card"},{id:"wallet_pay",media:{type:"emodji",src:"👛"},type:"default",text:"Wallet pay"}],Te={type:"telegram",title:"Choose the payment method",message:"",buttons:()=>ke},$e=[],Se={title:"",message:"",type:"telegram",buttons:()=>$e},be={modelValue:!1,title:"",message:""},Re={appendTo:"body"},Pe=R({__name:"Portal",props:A({appendTo:{}},Re),setup(e){return(t,i)=>(f(),b(Q,{to:t.appendTo},[I(t.$slots,"default")],8,["to"]))}}),Me=["innerHTML"],De=["innerHTML"],Be=R({__name:"Popup",props:A({modelValue:{type:Boolean},title:{},message:{}},be),emits:["update:modelValue"],setup(e,{emit:t}){const i=e,{modelValue:r,title:n,message:p}=O(i),l=K(ee,N(null)),u=N(null),_=N(null),g=U(),v=g.useTranslated(n),h=g.useTranslated(p),d=J(),T=()=>{t("update:modelValue",!1)},c=a=>{const m=a.target;!!u.value&&!u.value.contains(m)&&T()};return z([l,r],([a,m])=>{a==null||a.setOpened(d,m)},{immediate:!0}),Y(()=>{var a;(a=l.value)==null||a.remove(d)}),(a,m)=>o(l)?(f(),b(o(Pe),{key:0,"append-to":"#tok-popups-host"},{default:w(()=>[E(te,{"enter-from-class":a.$style["tok-popup-enter-from"],"enter-active-class":a.$style["tok-popup-enter-active"],"leave-active-class":a.$style["tok-popup-leave-active"],"leave-to-class":a.$style["tok-popup-leave-to"]},{default:w(()=>[o(r)?(f(),M("section",{key:0,"aria-modal":"true",role:"dialog",class:y(a.$style.wrapper),onClick:c},[S("div",{class:y(a.$style.popup)},[S("div",{ref_key:"contentRef",ref:u,class:y(a.$style.content)},[S("div",{class:y(a.$style.content__header)},[S("h4",{innerHTML:o(v),class:y(a.$style.content__title)},null,10,Me),E(o(se),{ref_key:"closeButtonRef",ref:_,"icon-button":"","aria-label":"close popup",icon:"close",appearance:"ghost",shape:"square",onClick:ae(T,["prevent"])},null,8,["onClick"])],2),S("div",{class:y(a.$style.content__rest)},[o(h)?(f(),M("p",{key:0,innerHTML:o(h),class:y(a.$style.message)},null,10,De)):j("",!0),I(a.$slots,"default",{close:T})],2)],2)],2)],2)):j("",!0)]),_:3},8,["enter-from-class","enter-active-class","leave-active-class","leave-to-class"])]),_:3})):j("",!0)}}),we="_wrapper_hjyk0_1",Ae="_popup_hjyk0_16",Oe="_content_hjyk0_29",Le="_content__header_hjyk0_37",Ne="_content__title_hjyk0_42",je="_content__rest_hjyk0_46",He="_close_hjyk0_50",Ie="_message_hjyk0_70",Ue={wrapper:we,popup:Ae,content:Oe,content__header:Le,content__title:Ne,content__rest:je,close:He,"tok-popup-enter-active":"_tok-popup-enter-active_hjyk0_56","tok-popup-leave-active":"_tok-popup-leave-active_hjyk0_57","tok-popup-enter-from":"_tok-popup-enter-from_hjyk0_64","tok-popup-leave-to":"_tok-popup-leave-to_hjyk0_65",message:Ie},Ve={$style:Ue},Ee=L(Be,[["__cssModules",Ve]]),Ke=R({__name:"TelegramPopupButton",props:{id:{},text:{default:""},border:{type:Boolean},type:{default:"default"}},setup(e){return(t,i)=>ne((f(),M("button",{class:y([t.$style.button,t.border&&t.$style.button_border,t.$style["button_"+t.type]])},[I(t.$slots,"icon"),S("div",{class:y(t.$style.content)},[S("p",null,F(t.text),1),E(o(le),{name:"arrow-right",class:y(t.$style.icon),size:24},null,8,["class"])],2)],2)),[[o(oe)]])}}),Ye="_button_18gxy_1",ze="_button_border_18gxy_24",Fe="_button_destructive_18gxy_33",We="_content_18gxy_41",xe="_icon_18gxy_49",Ge={button:Ye,button_border:ze,button_destructive:Fe,content:We,icon:xe},Je={$style:Ge},Ze=L(Ke,[["__cssModules",Je]]),qe=R({__name:"TelegramPopup",props:A({type:{},modelValue:{type:Boolean},title:{},message:{},buttons:{}},Se),emits:["update:modelValue","onSelect"],setup(e,{emit:t}){const i=e,{type:r,modelValue:n,title:p,message:l,buttons:u}=O(i),_=G(),g=N(!1),v=D(()=>(r.value==="web"||g.value)&&n.value),h=(c,a)=>{c||t("onSelect",a),t("update:modelValue",c)},d=h.bind(null,!1),T=()=>{try{g.value=!1;const c=l.value?l.value:p.value,a=l.value?p.value:void 0;_.showPopup({title:a,message:c,buttons:u.value},d)}catch{g.value=!0}};return z([r,n],([c,a])=>{c==="telegram"&&a&&T()},{immediate:!0}),(c,a)=>(f(),b(o(Ee),{"model-value":v.value,title:o(p),message:o(l),"onUpdate:modelValue":a[0]||(a[0]=m=>h(m,void 0))},{default:w(()=>[S("div",{class:y(c.$style.buttons)},[(f(!0),M(W,null,x(o(u),(m,V)=>(f(),b(Ze,H({key:m.id},m,{border:V<o(u).length-1,onClick:B=>h(!1,m.id)}),{icon:w(()=>[I(c.$slots,"button-icon",{item:m})]),_:2},1040,["border","onClick"]))),128))],2)]),_:3},8,["model-value","title","message"]))}}),Xe="_buttons_up24j_1",Ce={buttons:Xe},Qe={$style:Ce},et=L(qe,[["__cssModules",Qe]]),tt=R({__name:"PaywallPopup",props:A({type:{},title:{},message:{},buttons:{},opened:{type:Boolean}},Te),emits:["update:opened","onSelect"],setup(e,{emit:t}){const i=e,{title:r,message:n,buttons:p}=O(i),l=U(),u=l.useTranslated(r),_=l.useTranslated(n),g=D(()=>p.value.map(d=>({...d,text:"text"in d?l.translate(d.text):void 0}))),v=d=>{t("update:opened",d)},h=d=>{t("onSelect",d)};return(d,T)=>(f(),b(o(et),{type:d.type,"model-value":d.opened,title:o(u),message:o(_),buttons:g.value,onOnSelect:h,"onUpdate:modelValue":v},{"button-icon":w(({item:c})=>["media"in c?(f(),b(o(re),H({key:0},c.media,{class:d.$style.media,static:""}),null,16,["class"])):j("",!0)]),_:1},8,["type","model-value","title","message","buttons"]))}}),st="_media_qadfw_1",at={media:st},nt={$style:at},ot=L(tt,[["__cssModules",nt]]),lt={text:"",target:"_blank"},rt=["innerHTML","href","target"],ut=R({__name:"Link",props:A({text:{},href:{},target:{}},lt),setup(e){const t=e,{text:i,href:r}=O(t),n=U(),p=n.useTranslated(i),l=n.useTranslated(r);return(u,_)=>(f(),M("a",{innerHTML:o(p),class:y(u.$style.link),href:o(l),target:u.target},null,10,rt))}}),ct="_link_1mmgr_1",it={link:ct},pt={$style:it},dt=L(ut,[["__cssModules",pt]]);function _t(e){ue()&&Y(e)}function mt(e){const t=K(ce,null);t===null&&console.warn("[useAlerts] You should add AlertsPlugin into your main.ts");const i=[],r=(l,u)=>{const _=J();return t==null||t.show(_,l,u),e!=null&&e.autoCloseOnUnmount&&i.push(_),_},n=l=>{if(!l){p();return}t==null||t.close(l)},p=()=>{t==null||t.closeLast()};return _t(()=>{i.forEach(n)}),{show:r,close:n,closeLast:p}}function ft(e,t=ie,i=pe){const r=`${Math.floor(Math.abs(e))}`,n=`${e}`.split(".")[1]||"",p=e<0?"-":"",l=r.length%3;let u=p+r.charAt(0);for(let _=1;_<r.length;_++)_%3===l&&r.length>3&&(u+=i),u+=r.charAt(_);return n?u+t+n:u}var s=(e=>(e.ArmenianDram="AMD",e.AustralianDollar="AUD",e.AzerbaijaniManat="AZN",e.Baht="THB",e.BelarusianRuble="BYN",e.BrazilianReal="BRL",e.CanadianDollar="CAD",e.Dirham="AED",e.Dollar="USD",e.Euro="EUR",e.GeorgianLari="GEL",e.HongKongDollar="HKD",e.Hryvnia="UAH",e.IndianRupee="INR",e.IndonesianRupiah="IDR",e.IranianRial="IRR",e.IsraeliShekel="ILS",e.KyrgyzstanSom="KGS",e.MalaysianRinggit="MYR",e.MexicanPeso="MXN",e.MongolianTugrik="MNT",e.NewTurkmenManat="TMT",e.Pound="GBP",e.Ruble="RUB",e.SaudiRiyal="SAR",e.SerbianDinar="RSD",e.SingaporeDollar="SGD",e.SouthAfricanRand="ZAR",e.SriLankanRupee="LKR",e.SwissFranc="CHF",e.TajikistaniSomoni="TJS",e.Tenge="KZT",e.TurkishLira="TRY",e.UzbekSum="UZS",e.VietnameseDong="VND",e.Won="KRW",e.Yen="JPY",e.YuanRenminbi="CNY",e))(s||{});function vt(e){switch(e){case s.Ruble:return"₽";case s.Dollar:case s.MexicanPeso:return"$";case s.SingaporeDollar:return"S$";case s.AustralianDollar:return"A$";case s.HongKongDollar:return"HK$";case s.CanadianDollar:return"C$";case s.Euro:return"€";case s.Pound:return"£";case s.Baht:return"฿";case s.TurkishLira:return"₺";case s.YuanRenminbi:return"CN¥";case s.Yen:return"¥";case s.IsraeliShekel:return"₪";case s.IndianRupee:return"₹";case s.SwissFranc:return"₣";case s.ArmenianDram:return"֏";case s.Won:return"₩";case s.Tenge:return"₸";case s.Hryvnia:return"₴";case s.UzbekSum:return"So'm";case s.KyrgyzstanSom:return"c";case s.Dirham:return"Dh";case s.TajikistaniSomoni:return"SM";case s.MalaysianRinggit:return"RM";case s.BelarusianRuble:return"Rbl";case s.GeorgianLari:return"₾";case s.AzerbaijaniManat:return"₼";case s.SriLankanRupee:return"Rs.";case s.SerbianDinar:return"DIN";case s.SaudiRiyal:return"SR";case s.MongolianTugrik:return"₮";case s.SouthAfricanRand:return"R";case s.IranianRial:return"IR";case s.IndonesianRupiah:return"Rp";case s.VietnameseDong:return"đ";case s.NewTurkmenManat:return"TMT";case s.BrazilianReal:return"R$";default:return null}}function gt(e,t){const i=ft(e,t.decimalSeparator,t.thousandSeparator),r=vt(t.currency),[n,p]=t.align==="left"?[r,""]:["",r];return`${n}${i}${p}`}function Z(e){const t=K(_e,de),i=me(e),r=D(()=>{const v=i.value;return typeof v=="string"?v:`${v}`}),n=U(),p=n.useTranslated(r),l=n.useTranslated(t.align),u=n.useTranslated(t.currency),_=n.useTranslated(t.decimalSeparator),g=n.useTranslated(t.thousandSeparator);return D(()=>{const v=l.value,h=u.value,d=_.value,T=g.value,c=p.value,a=typeof c=="number"?c:Number(c),m={align:v,currency:h,decimalSeparator:d,thousandSeparator:T};return{formatted:gt(a,m),value:a,options:m}})}const yt=R({__name:"PrimitivePaywall",props:A({active:{type:Boolean},media:{},title:{},description:{},pagination:{},shape:{},textAlign:{},background:{},list:{},mainButtonText:{},links:{},popup:{},selectedProduct:{}},he),setup(e){const t=e,{mainButtonText:i,popup:r,selectedProduct:n,active:p}=O(t),l=K(fe,null),u=U(),_=G(),g=ve(),v=mt({autoCloseOnUnmount:!0}),h=u.useTranslated(i),d=u.useTranslated("_alerts.payment.canceled","You have canceled the payment selection"),T=D(()=>{const k=n.value;return k?`${k.price}`:""}),c=Z(T),a=D(()=>{const k=n.value,P=h.value,$=c.value.formatted;return g&&p.value===!1||!k||!P||m.value?"":P.replace(/\{price\}/g,$)}),m=N(!1),V=()=>{m.value=!0};let B;const q=k=>{if(v.closeLast(),B&&clearTimeout(B),!k){v.show(d.value,{type:"error"});return}const P=l?l.state.value:{},$=n.value,X={payment_method:k,id:$.id,currency:c.value.options.currency,price:c.value.value,title:$.title||"Payment",description:$.description||"Payment description"},C=JSON.stringify({product:X,payload:P});_.sendData(C),B=setTimeout(()=>{v.show('The "sendData" method is only available for Mini Apps launched via a Keyboard button',{type:"telegram"})},500)};return Y(()=>{B&&clearTimeout(B)}),(k,P)=>(f(),b(o(ye),H(t,{button:null}),{default:w(()=>[I(k.$slots,"default"),S("div",{class:y([k.$style.links,k.$style["links_"+t.shape]])},[(f(!0),M(W,null,x(k.links,$=>(f(),b(o(dt),H($,{key:$.text}),null,16))),128))],2),E(o(ot),H({opened:m.value,"onUpdate:opened":P[0]||(P[0]=$=>m.value=$)},o(r),{onOnSelect:q}),null,16,["opened"]),(o(g)?o(p):a.value)?(f(),b(o(ge),{key:0,haptic:"light","keep-alive":!!o(g),text:a.value,onOnClick:V},null,8,["keep-alive","text"])):j("",!0)]),_:3},16))}}),ht="_links_1aj4k_1",kt="_links_stacked_1aj4k_7",Tt={links:ht,links_stacked:kt},$t={$style:Tt},Rt=L(yt,[["__cssModules",$t]]),Pt=R({__name:"Money",props:{value:{}},setup(e){const t=e,{value:i}=O(t),r=Z(i),n=D(()=>r.value.formatted);return(p,l)=>(f(),M("span",null,F(n.value),1))}});export{Rt as P,Pt as _};
