(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{100:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(17),s=c.n(a),l=(c(64),c(65),c(3));var o=function(){return Object(l.jsx)("div",{children:Object(l.jsx)("h1",{children:"Home"})})},i=c(41),j=c.n(i),u=c(54),d=c(28),b=c(12),h=c(108),O=c(8),x=c(11),p=c(19),m=c.n(p),f=function(){var e="http://localhost:3001",t=Object(n.useRef)(),c=Object(n.useRef)(),r=Object(n.useRef)(),a=Object(n.useRef)(),s=Object(n.useState)(""),o=Object(d.a)(s,2),i=o[0],p=o[1],f=Object(n.useState)(""),g=Object(d.a)(f,2),v=g[0],y=g[1],w=Object(n.useState)(!1),S=Object(d.a)(w,2),k=S[0],N=S[1];Object(O.g)();function L(){return(L=Object(u.a)(j.a.mark((function n(){return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(console.log(c.current.state.innerValue),""!==c.current.state.innerValue){n.next=5;break}return n.abrupt("return",p("email not found"));case 5:if(r.current.state.innerValue===a.current.state.innerValue){n.next=7;break}return n.abrupt("return",p("Password do not match"));case 7:try{y("Sign up succes full"),N(!0),m()({method:"post",url:e+"/auth/signup",data:{name:t.current.state.innerValue,email:c.current.state.innerValue,password:r.current.state.innerValue}}).then((function(e){e.data.status,alert(e.data.message)})).catch((function(e){console.log(e)}))}catch(s){p("Fail to craete an account")}N(!1);case 9:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return Object(l.jsx)(b.d,{className:"singup_boader",children:Object(l.jsx)(b.i,{children:Object(l.jsx)(b.c,{md:"6",children:Object(l.jsxs)("form",{noValidate:!0,onSubmit:function(e){e.preventDefault(),function(){L.apply(this,arguments)}()},children:[Object(l.jsx)("h1",{className:"h1 text-center mb-4",children:"Sign up"}),i&&Object(l.jsx)(h.a,{variant:"danger",children:i}),v&&Object(l.jsx)(h.a,{variant:"success",children:v}),Object(l.jsxs)("div",{className:"grey-text",children:[Object(l.jsx)(b.f,{label:"Type your name",icon:"user",type:"text",ref:t,validate:!0}),Object(l.jsx)(b.f,{label:"Type your email",icon:"envelope",type:"email",ref:c}),Object(l.jsx)(b.f,{label:"Type your password",icon:"lock",type:"password",ref:r,validate:!0}),Object(l.jsx)(b.f,{label:"Type your RE-password",icon:"lock",type:"password",ref:a,validate:!0})]}),Object(l.jsxs)("div",{className:"text-center",children:[Object(l.jsx)(b.b,{disabled:k,type:"submit",children:"Sign up"}),Object(l.jsxs)("p",{children:["Alerady Have an account? ",Object(l.jsx)(x.b,{to:"./Login",children:"Log In"})," "]})]})]})})})})},g=c(16),v=c(34),y=r.a.createContext(),w=r.a.createContext(),S=function(){return Object(n.useContext)(y)},k=function(){return Object(n.useContext)(w)};function N(e){var t=e.children,c=Object(n.useState)({user:null,role:null,loginStatus:!1}),r=Object(d.a)(c,2),a=r[0],s=r[1];return Object(n.useEffect)((function(){m()({method:"get",url:"http://localhost:3001/getProfile",withCredentials:!0}).then((function(e){console.log("context response",e.data.profile,e.status),200===e.status&&(s((function(t){return Object(g.a)(Object(g.a)({},t),{},{user:e.data.profile,loginStatus:!0,role:e.data.profile.role})})),console.log("check",e.data.profile.role))})).catch((function(e){s((function(e){return Object(g.a)(Object(g.a)({},e),{},Object(v.a)({loginStatus:!0,user:null,role:null},"role","loggedout"))})),console.log(e,"loggedout err")}))}),[]),Object(l.jsx)(y.Provider,{value:a,children:Object(l.jsx)(w.Provider,{value:s,children:t})})}m.a.defaults.withCredentials=!0;var L=function(){S();var e=k();return Object(l.jsx)(b.d,{className:"singup_boader",children:Object(l.jsx)(b.i,{children:Object(l.jsx)(b.c,{md:"6",children:Object(l.jsxs)("form",{onSubmit:function(t){t.preventDefault(),m()({method:"post",url:"http://localhost:3001/auth/Login",data:{email:document.getElementById("email").value,password:document.getElementById("password").value},withCredentials:!0}).then((function(t){console.log("response.data: ",t.data),200===t.status?e((function(e){return Object(g.a)(Object(g.a)({},e),{},{user:t.data.user,role:t.data.user.role})})):alert(t.data.message)})).catch((function(e){console.log(e)}))},className:"formcenter",children:[Object(l.jsx)("p",{className:"h4 text-center mb-4",children:"Sign in"}),Object(l.jsx)("label",{htmlFor:"defaultFormLoginEmailEx",className:"grey-text",children:"Your email"}),Object(l.jsx)("input",{type:"email",id:"email",className:"form-control",placeholder:"Enter Your Email"}),Object(l.jsx)("br",{}),Object(l.jsx)("label",{htmlFor:"defaultFormLoginPasswordEx",className:"grey-text",children:"Your password"}),Object(l.jsx)("input",{type:"password",id:"password",className:"form-control",placeholder:"Enter Your Password"}),Object(l.jsx)("div",{className:"text-center mt-4",children:Object(l.jsx)(b.b,{color:"unique",type:"submit",children:"Login"})})]})})})})};function E(){return Object(l.jsx)("div",{children:Object(l.jsx)("h1",{children:"User Dashboard"})})}function C(){return Object(l.jsx)("div",{children:Object(l.jsx)("h1",{children:"Admin Dashboard"})})}var F=c(105);var V=function(){Object(O.g)();var e=k();return Object(l.jsx)(F.a,{variant:"danger",onClick:function(){m()({method:"post",url:"http://localhost:3001/auth/logout",withCredentials:!0}).then((function(t){200===t.status&&(alert(t.data.message),e((function(e){return Object(g.a)(Object(g.a)({},e),{},{loginStatus:!1,role:"loggedout",user:null})})))}),(function(e){console.log(e.message)}))},children:"Logout"})},D=c(107),P=c(106);var I=function(){var e=S();return console.log("globalState: ",e),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("nav",{children:Object(l.jsxs)(D.a,{bg:"dark",variant:"dark",children:["admin"===e.role?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(P.a,{className:"mr-auto",children:Object(l.jsx)(P.a.Link,{children:Object(l.jsx)(x.b,{to:"/",children:"Admin Dashboard"})})}),Object(l.jsx)(V,{})]}):null,"user"===e.role?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(P.a,{className:"mr-auto",children:Object(l.jsx)(P.a.Link,{children:Object(l.jsx)(x.b,{to:"/",children:"user Dashboard"})})}),Object(l.jsx)(V,{})]}):null,"loggedout"===e.role?Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(P.a,{className:"mr-auto",children:[Object(l.jsx)(P.a.Link,{children:Object(l.jsx)(x.b,{to:"/signup",children:"Signup"})}),Object(l.jsx)(P.a.Link,{children:Object(l.jsx)(x.b,{to:"/",children:"Home"})}),Object(l.jsx)(P.a.Link,{children:Object(l.jsx)(x.b,{to:"/login",children:"Login"})})]})}):null]})}),null===e.role?Object(l.jsx)(O.d,{children:Object(l.jsx)(O.b,{path:"*",children:Object(l.jsx)("h1",{children:"LOADING......"})})}):null,"loggedout"===e.role?Object(l.jsxs)(O.d,{children:[Object(l.jsx)(O.b,{exact:!0,path:"/",children:Object(l.jsx)(o,{})}),Object(l.jsx)(O.b,{path:"/signup",children:Object(l.jsx)(f,{})}),Object(l.jsx)(O.b,{path:"/login",children:Object(l.jsx)(L,{})}),Object(l.jsx)(O.b,{path:"*",children:Object(l.jsx)(O.a,{to:"/"})})]}):null,"user"===e.role?Object(l.jsxs)(O.d,{children:[Object(l.jsx)(O.b,{exact:!0,path:"/",children:Object(l.jsx)(E,{})}),Object(l.jsx)(O.b,{path:"*",children:Object(l.jsx)(O.a,{to:"/"})})]}):null,"admin"===e.role?Object(l.jsxs)(O.d,{children:[Object(l.jsx)(O.b,{exact:!0,path:"/",children:Object(l.jsx)(C,{})}),Object(l.jsx)(O.b,{path:"*",children:Object(l.jsx)(O.a,{to:"/"})})]}):null]})};s.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(x.a,{children:Object(l.jsx)(N,{children:Object(l.jsx)(I,{})})})}),document.getElementById("root"))},64:function(e,t,c){},65:function(e,t,c){}},[[100,1,2]]]);
//# sourceMappingURL=main.fe4e43a0.chunk.js.map