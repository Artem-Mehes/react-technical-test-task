(this["webpackJsonpreact-technical-test-task"]=this["webpackJsonpreact-technical-test-task"]||[]).push([[0],{67:function(n,t,e){"use strict";e.r(t);var r=e(1),c=e(0),o=e.n(c),a=e(12),i=e.n(a),u=e(19),s=e(3),l=e(2);function f(){var n=Object(s.a)(["\n    margin-left: 6rem;\n    margin-top: 2rem;\n"]);return f=function(){return n},n}function b(){var n=Object(s.a)(["\n    flex: 1;\n    background-color: ",";\n"]);return b=function(){return n},n}var j=l.c.main(b(),(function(n){return n.theme.colors.mainBg})),m=l.c.h1(f());function d(){var n=Object(s.a)(["\n    margin-left: 0.5rem;\n"]);return d=function(){return n},n}function O(){var n=Object(s.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    margin-bottom: 0.4rem;\n"]);return O=function(){return n},n}var h=l.c.li(O()),p=l.c.input(d()),v=e(5),g="SET_EMPLOYEES",x="CHECK_EMPLOYEE",y="UNCHECK_EMPLOYEE",w=function(n,t){return{type:x,payload:{employee:n,month:t}}},k=function(n,t){return{type:y,payload:{employee:n,month:t}}},E=function(n){var t=n.employee,e=n.month,c=Object(v.b)(),o=Object(v.c)((function(n){var r=n.selected[e];return void 0!==(r&&r.find((function(n){return n.id===t.id})))})),a=t.lastName,i=t.firstName;return Object(r.jsxs)(h,{children:["".concat(a," ").concat(i),Object(r.jsx)(p,{type:"checkbox",onChange:function(n){n.target.checked?c(w(t,e)):c(k(t,e))},checked:o})]})},C=Object(c.memo)(E);function S(){var n=Object(s.a)(["\n    margin-bottom: 1rem;\n    font-size: 2rem;\n    color: ",";\n"]);return S=function(){return n},n}function N(){var n=Object(s.a)(["\n    width: 20%;\n    background-color: #fff;\n    border-radius: 17px;\n    padding: 1rem 1.5rem;\n    min-width: 196px;\n    margin: 0 1.3rem 2rem;\n"]);return N=function(){return n},n}function z(){var n=Object(s.a)(["\n    display: flex;\n    flex-wrap: wrap;\n    padding-left: 1rem;\n"]);return z=function(){return n},n}var D=l.c.ul(z()),L=l.c.li(N()),B=l.c.h3(S(),(function(n){return n.theme.colors.accentColor})),I=function(n){var t=new Date(n).toLocaleDateString("en-US",{day:"numeric",month:"long",year:"numeric"});return"Invalid Date"!==t?t+" year":t},J=e(68),M=function(){var n=Object(v.c)((function(n){return n.employees}));return Object(r.jsx)(D,{children:Object.keys(n).map((function(t){return Object(r.jsxs)(L,{children:[Object(r.jsx)(B,{children:t}),Object(r.jsx)("ul",{children:n[t].length>0?n[t].map((function(n){return Object(r.jsx)(C,{employee:n,month:(t=n.dob,new Date(t).toLocaleDateString("en-US",{month:"long"}))},n.id);var t})):"-----"})]},Object(J.a)())}))})},P=function(){return Object(r.jsxs)(j,{children:[Object(r.jsx)(m,{children:"Employees"}),Object(r.jsx)(M,{})]})};function T(){var n=Object(s.a)(["\n    position: sticky;\n    top: 0;\n    padding-top: 2rem;\n"]);return T=function(){return n},n}function U(){var n=Object(s.a)(["\n    font-size: 2rem;\n    text-align: center;\n"]);return U=function(){return n},n}function Y(){var n=Object(s.a)(["\n    width: 30%;\n"]);return Y=function(){return n},n}var _=l.c.aside(Y()),F=l.c.h2(U()),H=l.c.div(T());function K(){var n=Object(s.a)(["\n\tfont-weight: 600;\n\tfont-size: 1.5rem;\n\ttext-decoration: underline;\n"]);return K=function(){return n},n}function A(){var n=Object(s.a)(["\n\tpadding: 2rem;\n\tborder-top: 2px solid #000;\n"]);return A=function(){return n},n}function R(){var n=Object(s.a)(["\n\tlist-style-type: disc;\n\tmargin-left: 1rem;\n\tmargin-bottom: 1.5rem;\n"]);return R=function(){return n},n}function q(){var n=Object(s.a)(["\n\tfont-size: 1.4rem;\n\tmargin-bottom: 0.8rem;\n\tfont-weight: 800;\n\tcolor: ",";\n"]);return q=function(){return n},n}var G=l.c.h4(q(),(function(n){return n.theme.colors.accentColor})),Q=l.c.ul(R()),V=l.c.ul(A()),W=l.c.span(K());function X(){var n=Object(s.a)(["\n    margin-bottom: 0.4rem;\n    font-size: 1.1rem;\n"]);return X=function(){return n},n}var Z=l.c.li(X()),$=function(n){var t=n.employee,e=t.lastName,c=t.firstName,o=t.dob;return Object(r.jsx)(Z,{children:"".concat(e," ").concat(c," - ").concat(I(o))})},nn=Object(c.memo)($),tn=function(){var n=Object(v.c)((function(n){return n.selected})),t=Object.keys(n);return Object(r.jsx)(V,{children:t.length>0?Object(r.jsx)(r.Fragment,{children:t.map((function(t){return Object(r.jsxs)("li",{children:[Object(r.jsx)(G,{children:t}),Object(r.jsx)(Q,{children:n[t].map((function(n){return Object(r.jsx)(nn,{employee:n},n.id)}))})]},Object(J.a)())}))}):Object(r.jsx)(W,{children:"No selected employees"})})},en=function(){return Object(r.jsx)(_,{children:Object(r.jsxs)(H,{children:[Object(r.jsx)(F,{children:"Employees Birthday"}),Object(r.jsx)(tn,{})]})})},rn=e(14),cn=e.n(rn),on=function(n){return{type:g,employees:n}},an=e(7),un=e(6),sn=e(15),ln=function(n){var t=Object(sn.a)(Array(26)).reduce((function(n,t,e){return Object(un.a)(Object(un.a)({},n),{},Object(an.a)({},String.fromCharCode(e+65),[]))}),{});return n.forEach((function(n){return t[n.lastName[0]].push(n)})),t};function fn(){var n=Object(s.a)(["\n    margin: 4rem auto;\n    text-decoration: underline;\n"]);return fn=function(){return n},n}function bn(){var n=Object(s.a)(["\n\tposition: absolute;\n\ttop: 50%;\n\tleft: 50%;\n\ttransform: translate(-50%, -50%);\n\n\t&::after {\n\t\tcontent: '';\n\t\tdisplay: block;\n\t\twidth: 150px;\n\t\theight: 150px;\n\t\tborder-radius: 50%;\n\t\tborder: 6px solid ",";\n\t\tborder-color: #000 transparent #000 transparent;\n\t\tborder-color: ",";\n\t\tanimation: "," 2s linear infinite;\n\t}\n"]);return bn=function(){return n},n}function jn(){var n=Object(s.a)(["\n    0% {\n        transform: rotate(0deg);\n    }\n    100% {\n        transform: rotate(360deg);\n    }\n"]);return jn=function(){return n},n}var mn=Object(l.d)(jn()),dn=l.c.div(bn(),(function(n){return n.theme.colors.accentColor}),(function(n){var t=n.theme;return"".concat(t.colors.accentColor," transparent ").concat(t.colors.accentColor," transparent")}),mn),On=l.c.h1(fn()),hn=e(18),pn=e.n(hn),vn=e(34),gn=function(){var n=Object(vn.a)(pn.a.mark((function n(t){var e;return pn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,cn.a.get("https://yalantis-react-school-api.yalantis.com/api/task0/users",{cancelToken:t.token});case 3:return e=n.sent,n.abrupt("return",e);case 7:throw n.prev=7,n.t0=n.catch(0),console.error(n.t0),new Error(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t){return n.apply(this,arguments)}}();var xn=function(){var n=Object(c.useState)(!0),t=Object(u.a)(n,2),e=t[0],o=t[1],a=Object(c.useState)(""),i=Object(u.a)(a,2),s=i[0],l=i[1],f=Object(v.b)();return Object(c.useEffect)((function(){var n=cn.a.CancelToken.source();return gn(n).then((function(n){var t=n.data,e=ln(t);f(on(e)),o(!1)})).catch((function(n){l(n.message)})),function(){return n.cancel()}}),[f]),s.length>0?Object(r.jsx)(On,{children:s}):e?Object(r.jsx)(dn,{}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(P,{}),Object(r.jsx)(en,{})]})},yn=e(9),wn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,e=t.type,r=t.employees;switch(e){case g:return r;default:return n}},kn=e(36),En=e(35),Cn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,e=t.type,r=t.payload;switch(e){case x:var c=r.month,o=r.employee,a=n[c];return void 0!==a?Object(un.a)(Object(un.a)({},n),{},Object(an.a)({},c,[].concat(Object(sn.a)(a),[o]))):Object(un.a)(Object(un.a)({},n),{},Object(an.a)({},c,[o]));case y:var i=r.month,u=r.employee,s=n[i].filter((function(n){return n.id!==u.id}));if(s.length>0)return Object(un.a)(Object(un.a)({},n),{},Object(an.a)({},i,s));n[i];var l=Object(kn.a)(n,[i].map(En.a));return l;default:return n}},Sn=Object(yn.b)({employees:wn,selected:Cn}),Nn=Object(yn.c)(Sn,{selected:function(n){var t=localStorage.getItem(n);return null===t?{}:JSON.parse(t)}("selected")});Nn.subscribe((function(){return function(n,t){var e=JSON.stringify(t);localStorage.setItem(n,e)}("selected",Nn.getState().selected)}));var zn=Nn,Dn={colors:{accentColor:"#177fff",textColor:"#000",mainBg:"#eaeaea"},font:"'Roboto', sans-serif"};function Ln(){var n=Object(s.a)(["\n    html {\n        box-sizing: border-box;\n        font-family: ",";\n        letter-spacing: 1px;\n        color: ",";\n    }\n\n    *,\n    *::after,\n    *::before {\n        box-sizing: inherit;\n        margin: 0;\n        padding: 0;\n    }\n\n    h1, h2 {\n        margin-bottom: 3rem;\n    }\n\n    ul {\n        list-style-type: none;\n    }\n\n    li {\n        font-weight: 600;\n    }\n\n    #root {\n        display: flex;\n    }\n"]);return Ln=function(){return n},n}var Bn=Object(l.b)(Ln(),(function(n){return n.theme.font}),(function(n){return n.theme.colors.textColor}));e(66);i.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(v.a,{store:zn,children:Object(r.jsxs)(l.a,{theme:Dn,children:[Object(r.jsx)(Bn,{}),Object(r.jsx)(xn,{})]})})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.55121074.chunk.js.map