const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Cffvl1xE.js","assets/gameserver-BsfuVsVl.js","assets/Qmvii117.js","assets/CvUNS3n6.js","assets/B5cC6EMs.js","assets/Cd5px6_N.js","assets/ClvaCUDV.js","assets/tqtTsDVD.js","assets/CjgKi0MV.js","assets/ftQW-l9j.js","assets/Bb_UELfV.js","assets/DaoR69tB.css","assets/IT0CHbmR.js","assets/C96_ymER.css","assets/jAnE9dKN.js","assets/wS1uK12c.css","assets/D-1peGcT.js","assets/CkbcBZux.css","assets/CdIQQCyP.js","assets/D8sLGdhz.css","assets/x_MCYZIx.js","assets/DdtbNRo_.js","assets/O2thuP6F.js","assets/Bquozemk.js","assets/BOF0tDWD.js","assets/WMEXAxHf.js"])))=>i.map(i=>d[i]);
import{A as e,E as t,H as n,K as r,M as i,N as a,P as o,Q as s,S as c,X as l,_t as u,b as d,c as f,d as p,g as m,h,ht as g,k as _,l as v,m as y,pt as b,r as x,s as S,u as C,y as w}from"./Cd5px6_N.js";import{n as T}from"./ftQW-l9j.js";import{c as E,h as ee,p as D}from"./B5cC6EMs.js";import{t as O}from"./Qmvii117.js";import{_ as k,a as A,g as j,i as M,m as N,r as P,t as F,v as I}from"./gameserver-BsfuVsVl.js";var L=Symbol(`scroll-inview-parent`);function R(t){let n=r(new Map);function i(e){let r=n.value.get(e);if(!r){let r=z(e,t);return n.value.set(e,r),r}return r}let a={containers:n,getContainer:i};return e(L,a),a}function z(e,t){let n=new WeakMap,r=new Set,i=[],a=new IntersectionObserver(t=>{for(let r of t){let{intersectionRatio:t,isIntersecting:i,target:a}=r,s=n.get(a);if(!s)continue;let c=e.emitsOn===`full-overlap`?t===1:i;o(()=>{s.latestThreshold=t,c!==s.isInview&&(s.isInview=c,s.emitChange(!!c))})}e.trackFocused&&o(()=>c())},{root:t,rootMargin:e.margin(),threshold:[1,.75,.5,.25,0]});function o(e){i.push(e),i.length===1&&window.requestAnimationFrame(s)}let s=()=>{for(let e of i)e();i=[]};function c(){let e=null;for(let t of r)e=t.latestThreshold>=.5&&(!e||t.latestThreshold>e.latestThreshold)?t:e,t.isFocused&&=!1;e&&(e.isFocused=!0)}return{observeItem(e){n.set(e.element,e),r.add(e),a.observe(e.element)},unobserveItem(e){let{element:t}=e;t&&(n.delete(t),a.unobserve(t)),r.delete(e),c()}}}var B=m({__name:`AppScrollInviewParent`,props:{scrollElement:{default:null}},setup(e){return R(e.scrollElement),(e,t)=>a(e.$slots,`default`)}}),V=m({props:{content:{type:String,required:!0}},setup(e){return()=>d(`style`,{innerHTML:e.content})}}),H=0;function U(e,t,n=!1){t=`#`+t;let r=I(t),i=n?`dark-`:``;return`
		--${i}theme-${e}: ${t};
		--${i}theme-${e}-trans: ${k(1,t)};
		--${i}theme-${e}-rgb: ${r.red}, ${r.green}, ${r.blue};
	`}function W(e,t,n=!1){let r=n?`dark-`:``;return`
		--${r}theme-${e}: var(--theme-${t});
		--${r}theme-${e}-trans: var(--theme-${t}-trans);
		--${r}theme-${e}-rgb: var(--theme-${t}-rgb);
	`}function G(e){return`
		--theme-${e}: var(--dark-theme-${e});
		--theme-${e}-trans: var(--dark-theme-${e}-trans);
		--theme-${e}-rgb: var(--dark-theme-${e}-rgb);
	`}var K=Symbol(`ThemeData`);function q(e){let t=l(e.theme),n=l(e.isDark);return{theme:t,isDarkTheme:n,isLightTheme:l(()=>!n.value)}}var J=m({__name:`AppTheme`,props:{isRoot:{type:Boolean},theme:{default:null},forceDark:{type:Boolean},forceLight:{type:Boolean}},setup(t){let{theme:n,isDark:r}=M(),i=`theme-`+ ++H,o=t.isRoot?`:root`:`#`+i,s=S(()=>t.theme??n.value??j),c=S(()=>r.value&&!t.forceLight||t.forceDark);e(K,q({theme:s,isDark:c}));let l=S(()=>{let e=``,t=s.value;return e+=`
		${o} {
			${U(`white`,`fff`)}
			${U(`black`,`000`)}

			${U(`darkest`,t.darkest_)}
			${U(`darker`,t.darker_)}
			${U(`dark`,t.dark_)}
			${U(`gray`,t.gray_)}
			${U(`gray-subtle`,t.graySubtle_)}
			${U(`light`,t.light_)}
			${U(`lighter`,t.lighter_)}
			${U(`lightest`,t.lightest_)}

			${U(`highlight`,t.highlight_)}
			${U(`highlight-fg`,t.highlightFg_)}
			${U(`backlight`,t.backlight_)}
			${U(`backlight-fg`,t.backlightFg_)}
			${U(`notice`,t.notice_)}
			${U(`notice-fg`,t.noticeFg_)}
			${U(`bi-bg`,t.biBg_)}
			${U(`bi-fg`,t.biFg_)}
			${W(`bg`,`white`)}
			${W(`bg-offset`,`lightest`)}
			${U(`bg-backdrop`,t.bgBackdrop_)}
			${W(`bg-subtle`,`lighter`)}
			${W(`fg`,`dark`)}
			${W(`fg-muted`,`light`)}
			${W(`link`,`backlight`)}
			${W(`link-hover`,`black`)}
			${W(`primary`,`link`)}
			${W(`primary-fg`,`backlight-fg`)}

			${U(`highlight`,t.darkHighlight_,!0)}
			${U(`backlight`,t.darkBacklight_,!0)}
			${U(`notice`,t.darkNotice_,!0)}
			${U(`bi-bg`,t.darkBiBg_,!0)}
			${U(`bi-fg`,t.darkBiFg_,!0)}
			${W(`bg`,`dark`,!0)}
			${W(`bg-offset`,`darker`,!0)}
			${U(`bg-backdrop`,t.darkBgBackdrop_,!0)}
			${W(`bg-subtle`,`gray-subtle`,!0)}
			${W(`fg`,`lightest`,!0)}
			${W(`fg-muted`,`light`,!0)}
			${U(`link`,t.darkHighlight_,!0)}
			${W(`link-hover`,`white`,!0)}
			${W(`primary`,`link`,!0)}
			${U(`primary-fg`,t.darkPrimaryFg_,!0)}
		}
	`,c.value&&(e+=`
			${o} {
				${G(`highlight`)}
				${G(`backlight`)}
				${G(`notice`)}
				${G(`bi-bg`)}
				${G(`bi-fg`)}
				${G(`bg`)}
				${G(`bg-offset`)}
				${G(`bg-backdrop`)}
				${G(`bg-subtle`)}
				${G(`fg`)}
				${G(`fg-muted`)}
				${G(`link`)}
				${G(`link-hover`)}
				${G(`primary`)}
				${G(`primary-fg`)}
			}
		`),e.replace(/\s+/g,``)});return(e,t)=>(_(),p(`div`,{id:i},[y(V,{content:l.value},null,8,[`content`]),a(e.$slots,`default`)]))}}),Y=m({__name:`AppGrowlDynamic`,props:{growl:{}},emits:[`close`],setup(e,{emit:t}){let n=t;return(t,r)=>(_(),v(o(e.growl.component),c(e.growl.props,{onClose:r[0]||=e=>n(`close`)}),null,16))}}),X={class:`growl-inner fill-gray`},Z={key:0,class:`growl-icon`},Q=[`src`],$={class:`growl-content`},te={key:0,class:`growl-title`},ne=O(m({__name:`AppGrowl`,props:{index:{},growl:{}},setup(e){let n,r=S(()=>[`growl-type-`+e.growl.type,{"growl-clickable":!!e.growl.onClick,"growl-has-icon":!!e.growl.icon,"growl-sticky":e.growl.sticky}]);t(()=>{e.growl.sticky||o()});function i(t){e.growl.onClick&&(e.growl.onClick(t),a(t))}function a(t){t&&t.stopPropagation(),e.growl.close()}function o(){e.growl.sticky||n||(n=setTimeout(()=>{a()},4e3))}function s(){e.growl.sticky||!n||(clearTimeout(n),n=void 0)}return(t,n)=>(_(),p(`div`,{class:b([`growl`,r.value]),onMouseover:s,onMouseout:o,onClick:i},[f(`a`,{class:`growl-close`,onClick:a},[y(N,{icon:`remove`})]),f(`div`,X,[e.growl.component?(_(),v(Y,{key:1,growl:e.growl,onClose:a},null,8,[`growl`])):(_(),p(x,{key:0},[e.growl.icon?(_(),p(`div`,Z,[f(`img`,{class:`img-responsive`,src:e.growl.icon,alt:``},null,8,Q)])):C(``,!0),f(`div`,$,[e.growl.title?(_(),p(`h4`,te,u(e.growl.title),1)):C(``,!0),f(`p`,null,u(e.growl.message),1)])],64))])],34))}}),[[`__scopeId`,`data-v-5478e6cc`]]),re={class:`growl-container`},ie=O(m({__name:`AppGrowls`,setup(e){let{growls:t}=E,{isXs:r}=A();return(e,a)=>(_(),p(`div`,re,[y(T,null,{default:n(()=>[(_(!0),p(x,null,i(s(t),(e,t)=>(_(),v(ne,{key:t,growl:e,index:t,class:b({"anim-fade-enter-left anim-fade-leave-left":!s(r),"anim-fade-enter-down anim-back-leave-down":s(r)})},null,8,[`growl`,`index`,`class`]))),128))]),_:1})]))}}),[[`__scopeId`,`data-v-2454a879`]]),ae=m({inheritAttrs:!1,__name:`AppCommonShell`,setup(e){let t=h(()=>D(()=>import(`./Cffvl1xE.js`),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]))),r=h(()=>D(()=>import(`./IT0CHbmR.js`),__vite__mapDeps([12,2,1,3,4,5,6,7,8,9,10,11,13]))),i=h(()=>D(()=>import(`./jAnE9dKN.js`),__vite__mapDeps([14,2,1,3,4,5,6,7,8,9,10,11,15]))),o=h(()=>D(()=>import(`./D-1peGcT.js`),__vite__mapDeps([16,2,1,3,4,5,6,7,8,9,10,11,17]))),c=h(()=>D(()=>import(`./CdIQQCyP.js`),__vite__mapDeps([18,2,5,6,19])));return(e,l)=>(_(),v(J,{"is-root":``},{default:n(()=>[y(s(i)),y(s(c)),y(s(r)),f(`div`,g(w(e.$attrs)),[y(B,null,{default:n(()=>[a(e.$slots,`default`),y(s(t)),y(ie),y(s(o))]),_:3})],16)]),_:3}))}}),oe={class:`-build-embed fill-darker`},se=O(m({__name:`AppMain`,setup(e){let t=h(()=>D(()=>import(`./x_MCYZIx.js`),__vite__mapDeps([20,1,2,3,4,5,6,7,8,9,10,11]))),r=h(()=>D(()=>import(`./DdtbNRo_.js`),__vite__mapDeps([21,1,2,3,4,5,6,7,8,9,10,11]))),i=h(()=>D(()=>import(`./O2thuP6F.js`),__vite__mapDeps([22,3,1,2,4,5,6,7,8,9,10,11]))),a=h(()=>D(()=>import(`./Bquozemk.js`),__vite__mapDeps([23,1,2,3,4,5,6,7,8,9,10,11]))),o=h(()=>D(()=>import(`./BOF0tDWD.js`),__vite__mapDeps([24,1,2,3,4,5,6,7,8,9,10,11]))),c=h(()=>D(()=>import(`./WMEXAxHf.js`),__vite__mapDeps([25,1,2,3,4,5,6,7,8,9,10,11]))),{build:l,bootstrap:u}=F();if(ee.isSecure){let e=window.document.createElement(`meta`);e.httpEquiv=`Content-Security-Policy`,e.content=`upgrade-insecure-requests`,window.document.head.appendChild(e)}return u(),(e,u)=>s(l)?(_(),v(ae,{key:0},{default:n(()=>[f(`div`,oe,[s(l).type===s(P).Flash?(_(),v(s(r),{key:0})):C(``,!0),s(l).type===s(P).Html?(_(),v(s(t),{key:1})):C(``,!0),s(l).type===s(P).Unity?(_(),v(s(i),{key:2})):C(``,!0),s(l).type===s(P).Silverlight?(_(),v(s(c),{key:3})):C(``,!0),s(l).type===s(P).Applet?(_(),v(s(a),{key:4})):C(``,!0),s(l).type===s(P).Rom?(_(),v(s(o),{key:5})):C(``,!0)])]),_:1})):C(``,!0)}}),[[`__scopeId`,`data-v-5650e5a5`]]);export{se as default};