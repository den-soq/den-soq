_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{"9a+9":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/protected",function(){return t("J5uT")}])},J5uT:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return d}));var c=t("nKUr"),r=t("o0o1"),i=t.n(r);function s(e,n,t,c,r,i,s){try{var o=e[i](s),u=o.value}catch(a){return void t(a)}o.done?n(u):Promise.resolve(u).then(c,r)}var o=t("ODXe"),u=t("q1tI"),a=t("nGE6"),j=t("CafY");function f(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h1",{children:"Access Denied"}),Object(c.jsx)("p",{children:Object(c.jsx)("a",{href:"/api/auth/signin",onClick:function(e){e.preventDefault(),Object(a.signIn)()},children:"You must be signed in to view this page"})})]})}function d(){var e=Object(a.useSession)(),n=Object(o.a)(e,2),t=n[0],r=n[1],d=Object(u.useState)(),h=d[0],p=d[1];return Object(u.useEffect)((function(){(function(){var e,n=(e=i.a.mark((function e(){var n,t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/examples/protected");case 2:return n=e.sent,e.next=5,n.json();case 5:(t=e.sent).content&&p(t.content);case 7:case"end":return e.stop()}}),e)})),function(){var n=this,t=arguments;return new Promise((function(c,r){var i=e.apply(n,t);function o(e){s(i,c,r,o,u,"next",e)}function u(e){s(i,c,r,o,u,"throw",e)}o(void 0)}))});return function(){return n.apply(this,arguments)}})()()}),[t]),r?null:t?Object(c.jsxs)(j.a,{children:[Object(c.jsx)("h1",{children:"Protected Page"}),Object(c.jsx)("p",{children:Object(c.jsx)("strong",{children:h||"\xa0"})})]}):Object(c.jsx)(j.a,{children:Object(c.jsx)(f,{})})}}},[["9a+9",0,2,1,3,4]]]);