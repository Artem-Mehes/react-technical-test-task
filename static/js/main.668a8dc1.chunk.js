(this["webpackJsonpreact-technical-test-task"]=this["webpackJsonpreact-technical-test-task"]||[]).push([[0],{63:function(n,e,t){"use strict";t.r(e);var r=t(1),c=t(0),o=t.n(c),a=t(11),i=t.n(a),u=t(3),l=t(2);function s(){var n=Object(u.a)(["\n    margin-left: 6rem;\n    margin-top: 2rem;\n"]);return s=function(){return n},n}function d(){var n=Object(u.a)(["\n    flex: 1;\n    background-color: ",";\n"]);return d=function(){return n},n}var f=l.c.main(d(),(function(n){return n.theme.colors.mainBg})),m=l.c.h1(s());function b(){var n=Object(u.a)(["\n    margin-left: 0.5rem;\n"]);return b=function(){return n},n}function j(){var n=Object(u.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    margin-bottom: 0.4rem;\n"]);return j=function(){return n},n}var p=l.c.li(j()),h=l.c.input(b()),O=t(4),g=t(8),v=Object(g.c)({name:"selectedEmployees",initialState:{},reducers:{checkEmployee:function(n,e){var t=e.payload,r=t.employee,c=t.month;void 0===n[c]?(n[c]=[],n[c].push(r)):n[c].push(r)},uncheckEmployee:function(n,e){var t=e.payload,r=t.month,c=t.employee,o=n[r].filter((function(n){return n.id!==c.id}));o.length>0?n[r]=o:delete n[r]},clearAll:function(){return{}}}}),x=function(n){return n.selectedEmployees},y=v.actions,k=y.checkEmployee,E=y.uncheckEmployee,w=y.clearAll,C=v.reducer,S=function(n){var e=n.employee,t=n.month,c=Object(O.b)(),o=Object(O.c)(x),a=void 0!==(o[t]&&o[t].find((function(n){var t=n.id;return e.id===t})));return Object(r.jsxs)(p,{children:["".concat(e.lastName," ").concat(e.firstName),Object(r.jsx)(h,{type:"checkbox",onChange:function(n){var r=n.target;c(r.checked?k({employee:e,month:t}):E({employee:e,month:t}))},checked:a})]})},B=Object(c.memo)(S);function z(){var n=Object(u.a)(["\n    margin-bottom: 1rem;\n    font-size: 2rem;\n    color: ",";\n"]);return z=function(){return n},n}function N(){var n=Object(u.a)(["\n    width: 20%;\n    background-color: #fff;\n    border-radius: 17px;\n    padding: 1rem 1.5rem;\n    min-width: 196px;\n    margin: 0 1.3rem 2rem;\n"]);return N=function(){return n},n}function A(){var n=Object(u.a)(["\n    display: flex;\n    flex-wrap: wrap;\n    padding-left: 1rem;\n"]);return A=function(){return n},n}var D,I=l.c.ul(A()),J=l.c.li(N()),T=l.c.h3(z(),(function(n){return n.theme.colors.accentColor})),H=function(n){var e=new Date(n).toLocaleDateString("en-US",{day:"numeric",month:"long",year:"numeric"});return"Invalid Date"!==e?e+" year":e},F=t(64),L=t(7),R=t(14),U=t.n(R),M=t(30),V=t(31),W=t.n(V),q=t(15),G=t(32),K=function(n){var e=Object(G.a)(Array(26)).reduce((function(n,e,t){return Object(q.a)(Object(q.a)({},n),{},Object(L.a)({},String.fromCharCode(t+65),[]))}),{});return n.forEach((function(n){return e[n.lastName[0]].push(n)})),e},P=Object(g.b)("allEmployees/getEmployees",function(){var n=Object(M.a)(U.a.mark((function n(e,t){var r,c;return U.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.rejectWithValue,n.prev=1,n.next=4,W.a.get("https://yalantis-react-school-api.yalantis.com/api/task0/users");case 4:return c=n.sent,n.abrupt("return",K(c.data));case 8:return n.prev=8,n.t0=n.catch(1),n.abrupt("return",r(n.t0.message));case 11:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e,t){return n.apply(this,arguments)}}()),Q=Object(g.c)({name:"allEmployees",initialState:{entities:{},loading:"idle",error:null},reducers:{},extraReducers:(D={},Object(L.a)(D,P.pending,(function(n){"idle"===n.loading&&(n.loading="pending")})),Object(L.a)(D,P.fulfilled,(function(n,e){var t=e.payload;"pending"===n.loading&&(n.entities=t,n.loading="loaded")})),Object(L.a)(D,P.rejected,(function(n,e){var t=e.payload;"pending"===n.loading&&(n.error=t,n.loading="error")})),D)}),X=function(n){return n.allEmployees.loading},Y=function(n){return n.allEmployees.error},Z=function(n){return n.allEmployees.entities},$=Q.reducer,_=function(){var n=Object(O.c)(Z);return Object(r.jsx)(I,{children:Object.keys(n).map((function(e){return Object(r.jsxs)(J,{children:[Object(r.jsx)(T,{children:e}),Object(r.jsx)("ul",{children:n[e].length>0?n[e].map((function(n){return Object(r.jsx)(B,{employee:n,month:(e=n.dob,new Date(e).toLocaleDateString("en-US",{month:"long"}))},n.id);var e})):"-----"})]},Object(F.a)())}))})},nn=function(){return Object(r.jsxs)(f,{children:[Object(r.jsx)(m,{children:"Employees"}),Object(r.jsx)(_,{})]})};function en(){var n=Object(u.a)(["\n\ttext-align: center;\n\tborder-bottom: 2px solid #000;\n"]);return en=function(){return n},n}function tn(){var n=Object(u.a)(["\n    position: sticky;\n    top: 0;\n    padding-top: 2rem;\n    position: relative;\n"]);return tn=function(){return n},n}function rn(){var n=Object(u.a)(["\n    font-size: 2rem;\n"]);return rn=function(){return n},n}function cn(){var n=Object(u.a)(["\n    width: 30%;\n"]);return cn=function(){return n},n}var on=l.c.aside(cn()),an=l.c.h2(rn()),un=l.c.div(tn()),ln=l.c.header(en());function sn(){var n=Object(u.a)(["\n\tcursor: pointer;\n\tposition: absolute;\n\tright: 30px;\n\ttop: 136px;\n\tfont-size: 1.3rem;\n\tborder: 3px solid ",";\n\tpadding: 0.5rem 1rem;\n\tborder-radius: 10px;\n\n\t&:hover {\n\t\tbackground-color: ",";\n\t\tcolor: ",";\n\t}\n\n\t&:active {\n\t\tbackground-color: #005ac9;\n\t\tcolor: ",";\n\t\tborder-color: ",";\n\t}\n\n\t&:focus {\n\t\toutline: none;\n\t}\n"]);return sn=function(){return n},n}function dn(){var n=Object(u.a)(["\n\tfont-weight: 600;\n\tfont-size: 1.5rem;\n\ttext-decoration: underline;\n\ttext-align: center;\n\tmargin-top: 2rem;\n"]);return dn=function(){return n},n}function fn(){var n=Object(u.a)(["\n\tpadding: 2rem;\n"]);return fn=function(){return n},n}function mn(){var n=Object(u.a)(["\n\tlist-style-type: disc;\n\tmargin-left: 1rem;\n\tmargin-bottom: 1.5rem;\n"]);return mn=function(){return n},n}function bn(){var n=Object(u.a)(["\n\tfont-size: 1.4rem;\n\tmargin-bottom: 0.8rem;\n\tfont-weight: 800;\n\tcolor: ",";\n"]);return bn=function(){return n},n}var jn=l.c.h4(bn(),(function(n){return n.theme.colors.accentColor})),pn=l.c.ul(mn()),hn=l.c.ul(fn()),On=l.c.p(dn()),gn=l.c.button(sn(),(function(n){return n.theme.colors.accentColor}),(function(n){return n.theme.colors.accentColor}),(function(n){return n.theme.colors.clearBtnHoverText}),(function(n){return n.theme.colors.clearBtnHoverText}),(function(n){return n.theme.colors.clearBtnActiveBg}));function vn(){var n=Object(u.a)(["\n    margin-bottom: 0.4rem;\n    font-size: 1.1rem;\n"]);return vn=function(){return n},n}var xn=l.c.li(vn()),yn=function(n){var e=n.employee,t=e.lastName,c=e.firstName,o=e.dob;return Object(r.jsx)(xn,{children:"".concat(t," ").concat(c," - ").concat(H(o))})},kn=Object(c.memo)(yn),En=function(){var n=Object(O.b)(),e=Object(O.c)(x),t=Object.keys(e);return 0===t.length?Object(r.jsx)(On,{children:"No selected employees"}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(gn,{onClick:function(){return n(w())},children:"Clear All"}),Object(r.jsx)(hn,{children:t.map((function(n){return Object(r.jsxs)("li",{children:[Object(r.jsx)(jn,{children:n}),Object(r.jsx)(pn,{children:e[n].map((function(n){return Object(r.jsx)(kn,{employee:n},n.id)}))})]},Object(F.a)())}))})]})},wn=function(){return Object(r.jsx)(on,{children:Object(r.jsxs)(un,{children:[Object(r.jsx)(ln,{children:Object(r.jsx)(an,{children:"Employees Birthday"})}),Object(r.jsx)(En,{})]})})};function Cn(){var n=Object(u.a)(["\n    margin: 4rem auto;\n    text-decoration: underline;\n"]);return Cn=function(){return n},n}function Sn(){var n=Object(u.a)(["\n\tposition: absolute;\n\ttop: 50%;\n\tleft: 50%;\n\ttransform: translate(-50%, -50%);\n\n\t&::after {\n\t\tcontent: '';\n\t\tdisplay: block;\n\t\twidth: 150px;\n\t\theight: 150px;\n\t\tborder-radius: 50%;\n\t\tborder: 6px solid ",";\n\t\tborder-color: #000 transparent #000 transparent;\n\t\tborder-color: ",";\n\t\tanimation: "," 2s linear infinite;\n\t}\n"]);return Sn=function(){return n},n}function Bn(){var n=Object(u.a)(["\n    0% {\n        transform: rotate(0deg);\n    }\n    100% {\n        transform: rotate(360deg);\n    }\n"]);return Bn=function(){return n},n}var zn=Object(l.d)(Bn()),Nn=l.c.div(Sn(),(function(n){return n.theme.colors.accentColor}),(function(n){var e=n.theme;return"".concat(e.colors.accentColor," transparent ").concat(e.colors.accentColor," transparent")}),zn),An=l.c.h1(Cn());var Dn=function(){var n=Object(O.c)(X),e=Object(O.c)(Y),t=Object(O.b)();return Object(c.useEffect)((function(){"idle"===n&&t(P())}),[t,n]),"pending"===n||"idle"===n?Object(r.jsx)(Nn,{}):"error"===n?Object(r.jsx)(An,{children:e}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(nn,{}),Object(r.jsx)(wn,{})]})},In={selectedEmployees:function(n){var e=localStorage.getItem(n);return null===e?{}:JSON.parse(e)}("selectedEmployees")},Jn=Object(g.a)({reducer:{allEmployees:$,selectedEmployees:C},middleware:function(n){return n()},devTools:!1,preloadedState:In});Jn.subscribe((function(){return function(n,e){var t=JSON.stringify(e);localStorage.setItem(n,t)}("selectedEmployees",Jn.getState().selectedEmployees)}));var Tn=Jn,Hn={colors:{accentColor:"#177fff",textColor:"#000",mainBg:"#eaeaea",clearBtnHoverText:"#fff",clearBtnActiveBg:"#005ac9"},font:"'Roboto', sans-serif"};function Fn(){var n=Object(u.a)(["\n    html {\n        box-sizing: border-box;\n        font-family: ",";\n        letter-spacing: 1px;\n        color: ",";\n    }\n\n    *,\n    *::after,\n    *::before {\n        box-sizing: inherit;\n        margin: 0;\n        padding: 0;\n    }\n\n    h1, h2 {\n        margin-bottom: 3rem;\n    }\n\n    ul {\n        list-style-type: none;\n    }\n\n    li {\n        font-weight: 600;\n    }\n\n    button {\n        background-color: inherit;\n        border: none;\n    }\n\n    #root {\n        display: flex;\n    }\n"]);return Fn=function(){return n},n}var Ln=Object(l.b)(Fn(),(function(n){return n.theme.font}),(function(n){return n.theme.colors.textColor}));t(62);i.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(O.a,{store:Tn,children:Object(r.jsxs)(l.a,{theme:Hn,children:[Object(r.jsx)(Ln,{}),Object(r.jsx)(Dn,{})]})})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.668a8dc1.chunk.js.map