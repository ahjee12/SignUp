(this["webpackJsonpsign-up"]=this["webpackJsonpsign-up"]||[]).push([[0],{12:function(e,n,a){},13:function(e,n,a){"use strict";a.r(n);var t=a(0),s=a(1),r=a.n(s),c=a(6),i=a.n(c),l=a(4),o=a(2),m=a(3),b=function(e){var n=Object(s.useState)({username:"",email:"",password:"",password2:"",gender:"",birthday:"",prephonenumber:"010",phonenumber:"",agreement:""}),a=Object(m.a)(n,2),t=a[0],r=a[1],c=Object(s.useState)({}),i=Object(m.a)(c,2),b=i[0],d=i[1];return{handleChange:function(e){var n=e.target,a=n.name,s=n.value;r(Object(o.a)(Object(o.a)({},t),{},Object(l.a)({},a,s)))},values:t,handleSubmit:function(n){n.preventDefault(),d(e(t))},errors:b}},d=function(){var e=Object(s.useState)({activebtn:null,btnindexs:[{id:"male",value:"\ub0a8\uc790"},{id:"female",value:"\uc5ec\uc790"}]}),n=Object(m.a)(e,2),a=n[0],t=n[1];return{btns:a,btnId:function(e){return a.btnindexs[e].id},btnValue:function(e){return a.btnindexs[e].value},activeBtnToggle:function(e){t(Object(o.a)(Object(o.a)({},a),{},{activebtn:a.btnindexs[e]}))},styleActiveBtnToggle:function(e){return a.btnindexs[e]===a.activebtn?"form-lable-btn active":"form-lable-btn inactive"}}};function u(e){var n={};return e.username.trim()?/^[a-zA-z0-9]{1,10}$/.test(e.username)||(n.username="\uc544\uc774\ub514\ub97c \uc54c\ud30c\ubcb3 1~10\uae00\uc790(\ud2b9\uc218\ubb38\uc790X)!"):n.username="\uc544\uc774\ub514\ub97c \uc785\ub825\ud558\uc138\uc694:D",e.email?/\S+@\S+\.\S+/.test(e.email)||(n.email="\uc774\uba54\uc77c \ud615\uc2dd\uc5d0 \ub9de\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4!"):n.email="\uc774\uba54\uc77c\ub97c \uc785\ub825\ud558\uc138\uc694:D",e.password?e.password.length<6?n.password="\ube44\ubc00\ubc88\ud638\ub97c 6\uc790\ub9ac \uc774\uc0c1 \uc785\ub825\ud574\uc8fc\uc138\uc694!":/(?=.*\d{1,50})(?=.*[~`!@#$%\^&*()-+=]{1,50})(?=.*[a-zA-Z]{2,50}).{6,50}$/.test(e.password)||(n.password="\uc601\ubb38 2\uac1c, \uc22b\uc790, \ud2b9\uc218\ubb38\uc790 \uac01\uac01 1\uac1c \uc774\uc0c1 \uc785\ub825\ud574\uc8fc\uc138\uc694!"):n.password="\ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud558\uc138\uc694:D",e.password2?e.password!==e.password2&&(n.password2="\ube44\ubc00\ubc88\ud638\uac00 \uac19\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4!"):n.password2="\ube44\ubc00\ubc88\ud638\ub97c \ub2e4\uc2dc \uc785\ub825\ud558\uc138\uc694:D",e.gender||(n.gender="\uc131\ubcc4\uc744 \uc120\ud0dd\ud558\uc138\uc694:D"),e.birthday||(n.birthday="\uc0dd\uc77c\uc744 \uc785\ub825\ud558\uc138\uc694:D"),e.phonenumber?/-?[0-9]{3,4}-?[0-9]{4}/.test(e.phonenumber)||(n.phonenumber="7 \ub610\ub294 8\uc790\ub9ac \ubc88\ud638\ub97c \uc785\ub825\ud558\uc138\uc694!"):n.phonenumber="\uc804\ud654\ubc88\ud638\ub97c \uc785\ub825\ud558\uc138\uc694:D",e.agreement||(n.agreement="\ub3d9\uc758\ub97c \uccb4\ud06c\ud558\uc138\uc694:D"),n}a(12);var j=function(){var e=b(u),n=e.handleChange,a=e.values,s=e.handleSubmit,r=e.errors,c=d(),i=c.btns,l=c.btnId,o=c.btnValue,m=c.activeBtnToggle,j=c.styleActiveBtnToggle;return Object(t.jsx)("div",{className:"form-container",children:Object(t.jsx)("div",{className:"row",children:Object(t.jsxs)("form",{className:"form",onSubmit:s,children:[Object(t.jsx)("h1",{children:"\ud68c\uc6d0\uac00\uc785"}),Object(t.jsxs)("div",{className:"form-input-container",children:[Object(t.jsx)("label",{htmlFor:"username",className:"form-label"}),Object(t.jsx)("input",{id:"username",type:"text",name:"username",className:"form-input",placeholder:"\uc544\uc774\ub514",value:a.username,onChange:n}),r.username&&Object(t.jsx)("p",{children:r.username})]}),Object(t.jsxs)("div",{className:"form-input-container",children:[Object(t.jsx)("label",{htmlFor:"password",className:"form-label"}),Object(t.jsx)("input",{id:"email",type:"email",name:"email",className:"form-input",placeholder:"\uc774\uba54\uc77c",value:a.email,onChange:n}),r.email&&Object(t.jsx)("p",{children:r.email})]}),Object(t.jsxs)("div",{className:"form-input-container",children:[Object(t.jsx)("label",{htmlFor:"password",className:"form-label"}),Object(t.jsx)("input",{id:"password",type:"password",name:"password",className:"form-input",placeholder:"\ube44\ubc00\ubc88\ud638",value:a.password,onChange:n}),r.password&&Object(t.jsx)("p",{children:r.password})]}),Object(t.jsxs)("div",{className:"form-input-container",children:[Object(t.jsx)("label",{htmlFor:"password2",className:"form-label"}),Object(t.jsx)("input",{id:"password2",type:"password",name:"password2",className:"form-input",placeholder:"\ube44\ubc00\ubc88\ud638 \ud655\uc778",value:a.password2,onChange:n}),r.password2&&Object(t.jsx)("p",{children:r.password2})]}),Object(t.jsxs)("div",{className:"form-input-container gender",children:[i.btnindexs.map((function(e,a){return Object(t.jsxs)("label",{htmlFor:"gender",className:j(a),children:[o(a),Object(t.jsx)("input",{id:l(a),type:"radio",name:"gender",className:"form-input",value:o(a),onChange:n,onClick:function(){m(a)}},a)]},a)})),r.gender&&Object(t.jsx)("p",{children:r.gender})]}),Object(t.jsxs)("div",{className:"form-input-container birthday",children:[Object(t.jsx)("label",{htmlFor:"birthday",className:"form-label",children:"\uc0dd\uc77c"}),Object(t.jsx)("input",{id:"birthday",type:"date",name:"birthday",className:"form-input",min:"1900-01-01",max:"2020-12-31",value:a.birthday,onChange:n}),r.birthday&&Object(t.jsx)("p",{children:r.birthday})]}),Object(t.jsxs)("div",{className:"form-input-container phonenumber",children:[Object(t.jsx)("label",{htmlFor:"phonenumber",className:"form-label",children:"\uc804\ud654"}),Object(t.jsxs)("select",{className:"prephonenumber",name:"prephonenumber",id:"prephonenumber",value:a.prephonenumber,onChange:n,children:[Object(t.jsx)("option",{value:"010",children:"010"}),Object(t.jsx)("option",{value:"011",children:"011"}),Object(t.jsx)("option",{value:"110",children:"110"})]}),Object(t.jsx)("input",{id:"phonenumber",type:"text",name:"phonenumber",className:"form-input",value:a.phonenumber,onChange:n}),Object(t.jsx)("button",{type:"submit",className:"form-input-btn",children:"\uc778\uc99d"}),r.phonenumber&&Object(t.jsx)("p",{children:r.phonenumber})]}),Object(t.jsxs)("div",{className:"form-input-container agreement",children:[Object(t.jsx)("label",{htmlFor:"agreement",className:"form-label",children:"\ubaa8\ub4e0 \uc57d\uad00 \ub0b4\uc6a9\uc5d0 \ub3d9\uc758 \ud569\ub2c8\ub2e4."}),Object(t.jsxs)("div",{className:"toggle-btn-container",children:[Object(t.jsx)("div",{className:"checkbox-bg"}),Object(t.jsx)("input",{type:"checkbox",className:"form-input checkbox-invisible",name:"agreement",value:"\ub3d9\uc758",onChange:n}),Object(t.jsx)("div",{className:"checkbox-circle"})]}),r.agreement&&Object(t.jsx)("p",{children:r.agreement})]}),Object(t.jsx)("div",{className:"form-btn-container signup",children:Object(t.jsx)("button",{className:"form-btn",type:"submit",children:"\uac00\uc785\ud558\uae30"})})]})})})},p=function(){return Object(t.jsx)("div",{children:Object(t.jsx)(j,{})})};var h=function(){return Object(t.jsx)("div",{className:"App",children:Object(t.jsx)(p,{})})};i.a.render(Object(t.jsx)(r.a.StrictMode,{children:Object(t.jsx)(h,{})}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.d6e4513a.chunk.js.map