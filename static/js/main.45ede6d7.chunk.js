(this.webpackJsonpaauth=this.webpackJsonpaauth||[]).push([[0],{39:function(e,a,t){},40:function(e,a,t){},52:function(e,a,t){"use strict";t.r(a);var s=t(5),n=t.n(s),c=t(25),r=t.n(c),o=(t(39),t(26)),i=t(27),l=t(32),j=t(31),u=(t.p,t(40),t(30).a.initializeApp({apiKey:"AIzaSyDFYpb5BDSeIKwrXWZptA5ZQ_H-sm-QvdQ",authDomain:"react-user-auth-12731.firebaseapp.com",databaseURL:"https://react-user-auth-12731-default-rtdb.firebaseio.com",projectId:"react-user-auth-12731",storageBucket:"react-user-auth-12731.appspot.com",messagingSenderId:"958228640501",appId:"1:958228640501:web:4070cbb4fe660b9da00bbc"})),b=t(13),d=t(14),p=t(11),h=t(65),m=t(66),O=t(67),x=t(68),f=t(69),N=t(3);var g=function(){var e=Object(s.useState)({email:"",phoneNo:"",name:"",dob:"",password:""}),a=Object(p.a)(e,2),t=a[0],n=a[1],c=Object(s.useState)(!1),r=Object(p.a)(c,2),o=r[0],i=r[1],l=Object(s.useState)(!1),j=Object(p.a)(l,2),g=j[0],w=j[1];function C(e){var a=e.target,s=a.name,c=a.value;s&&c&&n(Object(d.a)(Object(d.a)({},t),{},Object(b.a)({},s,c)))}return g?Object(N.jsx)(v,{}):Object(N.jsxs)("div",{className:" main main1 ",children:[Object(N.jsx)("h2",{children:"Signup"}),Object(N.jsxs)("form",{className:"forms",children:[Object(N.jsxs)("span",{className:"merge",children:[Object(N.jsx)("button",{className:"proper",children:Object(N.jsx)(h.a,{})}),Object(N.jsx)("input",{className:"box1",name:"email",type:"email",id:"email",placeholder:"enter email address",onChange:C,value:t.email})]}),Object(N.jsxs)("span",{className:"merge",children:[Object(N.jsx)("button",{className:"proper",children:Object(N.jsx)(m.a,{})}),Object(N.jsx)("input",{className:"box1",name:"password",type:"password",id:"password",placeholder:"enter password",onChange:C,value:t.password})]}),Object(N.jsxs)("span",{className:"merge",children:[Object(N.jsx)("button",{className:"proper",children:Object(N.jsx)(O.a,{})}),Object(N.jsx)("input",{className:"box1",name:"name",type:"text",id:"name",placeholder:"enter name",onChange:C,value:t.name})]}),Object(N.jsxs)("span",{className:"merge",children:[Object(N.jsx)("button",{className:"proper",children:Object(N.jsx)(x.a,{})}),Object(N.jsx)("input",{className:"box1",name:"phoneNo",type:"tel",id:"phoneNo",placeholder:"enter phone No",onChange:C,value:t.phoneNo})]}),Object(N.jsxs)("span",{className:"merge",children:[Object(N.jsx)("button",{className:"proper",children:Object(N.jsx)(f.a,{})}),Object(N.jsx)("input",{className:"box1",name:"dob",type:"date",id:"dob",placeholder:"enter DOB",onChange:C,value:t.dob})]}),Object(N.jsx)("button",{className:"button",style:o?{background:"#fff"}:{background:"#ccc"},onClick:function(e){e.preventDefault(),u.auth().createUserWithEmailAndPassword(t.email,t.password).then((function(e){console.log(e)})).catch((function(e){console.log(e)})),u.firestore().collection("users").add({email:t.email,phoneNo:t.phoneNo,name:t.name,dob:t.dob}).then((function(){i(!0)})).catch((function(e){alert("Error",e.message),i(!0)}))},children:"Signup"}),Object(N.jsxs)("span",{className:"dot",onClick:function(){return w(!0)},children:[" ","Go back to login screen"]})]})]})};var v=function(){var e=Object(s.useState)({email:"",password:""}),a=Object(p.a)(e,2),t=a[0],n=a[1],c=Object(s.useState)(!1),r=Object(p.a)(c,2),o=r[0],i=r[1];function l(e){var a=e.target,s=a.name,c=a.value;s&&c&&n(Object(d.a)(Object(d.a)({},t),{},Object(b.a)({},s,c)))}return Object(N.jsx)("div",{className:"alignment",children:o?Object(N.jsx)(g,{}):Object(N.jsxs)("div",{className:"main",children:[Object(N.jsx)("h2",{children:"Login"}),Object(N.jsx)("span",{className:"text",onClick:function(){return i(!0)},children:"Create an account"}),Object(N.jsxs)("span",{className:"merge",children:[Object(N.jsx)("button",{className:"proper",children:Object(N.jsx)(h.a,{})}),Object(N.jsx)("input",{className:"box",name:"email",type:"email",id:"email",placeholder:"enter email address",onChange:l,value:t.email})]}),Object(N.jsxs)("span",{className:"merge",children:[" ",Object(N.jsx)("button",{className:"proper",children:Object(N.jsx)(m.a,{})}),Object(N.jsx)("input",{className:"box",name:"password",type:"password",id:"password",placeholder:"enter password",onChange:l,value:t.password})]}),Object(N.jsx)("span",{className:"seprate",children:Object(N.jsx)("button",{className:"button",onClick:function(e){e.preventDefault(),u.auth().signInWithEmailAndPassword(t.email,t.password).then((function(e){console.log(e)})).catch((function(e){console.log(e),alert("Email or Password is incorrect.!!!")}))},children:"Login"})})]})})},w=t(22),C=t.n(w),S=t(29);var k=function(){var e=u.firestore(),a=Object(s.useState)([]),t=Object(p.a)(a,2),n=t[0],c=t[1],r=Object(s.useState)(!1),o=Object(p.a)(r,2),i=(o[0],o[1]);return Object(s.useEffect)((function(){Object(S.a)(C.a.mark((function a(){var t,s;return C.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=[],s=e.collection("users"),a.next=4,s.get();case 4:a.sent.docs.map((function(e){t.push(e.data()),c(t)})),i(!0);case 7:case"end":return a.stop()}}),a)})))()}),[]),Object(N.jsxs)("div",{children:[" ",Object(N.jsxs)("span",{className:"",children:[Object(N.jsx)("h1",{children:"You are loged in !!!"}),Object(N.jsx)("button",{onClick:function(){u.auth().signOut()},children:"Logout.."})]}),Object(N.jsx)("h3",{children:"All Users Details"}),Object(N.jsx)("div",{className:"parent",children:n.map((function(e,a){return Object(N.jsxs)("div",{className:"head",children:[Object(N.jsxs)("h4",{children:["Name- ",e.name]}),Object(N.jsxs)("span",{className:"sub",children:["Email -",e.email]}),Object(N.jsxs)("span",{className:"sub",children:["Phone No -",e.phoneNo]}),Object(N.jsxs)("span",{className:"sub",children:["DOB -",e.dob]})]},a)}))})]})},y=function(e){Object(l.a)(t,e);var a=Object(j.a)(t);function t(e){var s;return Object(o.a)(this,t),(s=a.call(this,e)).state={user:{}},s}return Object(i.a)(t,[{key:"componentDidMount",value:function(){this.authListener()}},{key:"authListener",value:function(){var e=this;u.auth().onAuthStateChanged((function(a){a?e.setState({user:a}):e.setState({user:null})}))}},{key:"render",value:function(){return Object(N.jsx)("div",{className:"App",children:this.state.user?Object(N.jsx)(k,{}):Object(N.jsx)(v,{})})}}]),t}(s.Component),D=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,70)).then((function(a){var t=a.getCLS,s=a.getFID,n=a.getFCP,c=a.getLCP,r=a.getTTFB;t(e),s(e),n(e),c(e),r(e)}))};r.a.render(Object(N.jsx)(n.a.StrictMode,{children:Object(N.jsx)(y,{})}),document.getElementById("root")),D()}},[[52,1,2]]]);
//# sourceMappingURL=main.45ede6d7.chunk.js.map