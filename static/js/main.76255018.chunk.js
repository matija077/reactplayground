(this.webpackJsonpreactplayground=this.webpackJsonpreactplayground||[]).push([[0],{55:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(0),s=n.n(r),a=n(19),i=n.n(a),l=n(17),j=n(7),d=n(23),b=n(24),h=n(29),o=n(27),u=(n(46),n(36)),O=n(22),m=function(e){Object(h.a)(n,e);var t=Object(o.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(u.a,{id:"navbar",bg:"light",variant:"light",children:[Object(c.jsx)(u.a.Brand,{as:l.b,to:"/home",children:"Home"}),Object(c.jsxs)(O.a,{className:"mr-auto",children:[Object(c.jsx)(O.a.Link,{as:l.b,to:"/form",children:"Form"}),Object(c.jsx)(O.a.Link,{as:l.b,to:"/table",children:"Table"}),Object(c.jsx)(O.a.Link,{as:l.b,to:"/playground",children:"Playground"})]})]})})}}]),n}(s.a.Component),x=n(15),p=n.p+"static/media/c1.def2bc01.webp",g=n.p+"static/media/c2.b580e101.webp",v=n.p+"static/media/c3.d6735871.webp",f=function(){return Object(c.jsx)("header",{children:Object(c.jsxs)(x.a,{className:"carousel",children:[Object(c.jsxs)(x.a.Item,{interval:1500,id:"citem",children:[Object(c.jsx)("img",{className:"d-block w-100",src:p,alt:""}),Object(c.jsxs)(x.a.Caption,{id:"caption",children:[Object(c.jsx)("h3",{children:"First slide label"})," ",Object(c.jsx)("br",{})," ",Object(c.jsx)("br",{}),Object(c.jsx)("p",{children:"Nulla vitae elit libero, a pharetra augue mollis interdum."})]})]}),Object(c.jsxs)(x.a.Item,{interval:1500,id:"citem",children:[Object(c.jsx)("img",{className:"d-block w-100",src:g,alt:""}),Object(c.jsxs)(x.a.Caption,{id:"caption",children:[Object(c.jsx)("h3",{children:"Second slide label"})," ",Object(c.jsx)("br",{})," ",Object(c.jsx)("br",{}),Object(c.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})]}),Object(c.jsxs)(x.a.Item,{interval:1500,id:"citem",children:[Object(c.jsx)("img",{className:"d-block w-100",src:v,alt:""}),Object(c.jsxs)(x.a.Caption,{id:"caption",children:[Object(c.jsx)("h3",{children:"Third slide label"})," ",Object(c.jsx)("br",{})," ",Object(c.jsx)("br",{}),Object(c.jsx)("p",{children:"Praesent commodo cursus magna, vel scelerisque nisl consectetur."})]})]})]})})},S=n(39);function w(e){return 1!==e.currentStep?null:Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{htmlFor:"email",children:"Email address"}),Object(c.jsx)("input",{className:"form-control",id:"email",name:"email",type:"text",placeholder:"Enter email",value:e.email,onChange:e.handleChange})]})}function N(e){return 2!==e.currentStep?null:Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{htmlFor:"username",children:"Username"}),Object(c.jsx)("input",{className:"form-control",id:"username",name:"username",type:"text",placeholder:"Enter username",value:e.username,onChange:e.handleChange})]})}function y(e){return 3!==e.currentStep?null:Object(c.jsxs)(s.a.Fragment,{children:[Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{htmlFor:"password",children:"Password"}),Object(c.jsx)("input",{className:"form-control",id:"password",name:"password",type:"password",placeholder:"Enter password",value:e.password,onChange:e.handleChange})]}),Object(c.jsx)("button",{className:"btn btn-success btn-block",children:"Sign up"})]})}var C=function(e){Object(h.a)(n,e);var t=Object(o.a)(n);function n(e){var c;return Object(d.a)(this,n),(c=t.call(this,e)).handleChange=function(e){var t=e.target,n=t.name,r=t.value;c.setState(Object(S.a)({},n,r))},c.handleSubmit=function(e){e.preventDefault();var t=c.state,n=t.email,r=t.username,s=t.password;alert("Your registration detail: \n \n           Email: ".concat(n," \n \n           Username: ").concat(r," \n\n           Password: ").concat(s))},c._next=function(){var e=c.state.currentStep;e=e>=2?3:e+1,c.setState({currentStep:e})},c._prev=function(){var e=c.state.currentStep;e=e<=1?1:e-1,c.setState({currentStep:e})},c.state={currentStep:1,email:"",username:"",password:""},c}return Object(b.a)(n,[{key:"previousButton",value:function(){return 1!==this.state.currentStep?Object(c.jsx)("button",{className:"btn btn-secondary",type:"button",onClick:this._prev,children:"Previous"}):null}},{key:"nextButton",value:function(){return this.state.currentStep<3?Object(c.jsx)("button",{className:"btn btn-primary float-right",type:"button",onClick:this._next,children:"Next"}):null}},{key:"render",value:function(){return Object(c.jsxs)(s.a.Fragment,{children:[Object(c.jsx)("h1",{children:"React Wizard Form \ud83e\uddd9\u200d\u2642\ufe0f"}),Object(c.jsxs)("p",{className:"step",children:["Step ",this.state.currentStep," "]}),Object(c.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(c.jsx)(w,{currentStep:this.state.currentStep,handleChange:this.handleChange,email:this.state.email}),Object(c.jsx)(N,{currentStep:this.state.currentStep,handleChange:this.handleChange,username:this.state.username}),Object(c.jsx)(y,{currentStep:this.state.currentStep,handleChange:this.handleChange,password:this.state.password}),this.previousButton(),this.nextButton()]})]})}}]),n}(s.a.Component),k=n(40),F=function(){return Object(c.jsxs)(k.a,{striped:!0,bordered:!0,hover:!0,variant:"dark",children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"#"}),Object(c.jsx)("th",{children:"First Name"}),Object(c.jsx)("th",{children:"Last Name"}),Object(c.jsx)("th",{children:"Username"})]})}),Object(c.jsxs)("tbody",{children:[Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:"1"}),Object(c.jsx)("td",{children:"Mark"}),Object(c.jsx)("td",{children:"Otto"}),Object(c.jsx)("td",{children:"@mdo"})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:"2"}),Object(c.jsx)("td",{children:"Jacoob"}),Object(c.jsx)("td",{children:"Thornton"}),Object(c.jsx)("td",{children:"@fat"})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:"3"}),Object(c.jsx)("td",{colSpan:"2",children:"Larry the Bird"}),Object(c.jsx)("td",{children:"@twitter"})]})]})]})},B=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:"bubi"}),Object(c.jsx)("div",{className:"buba"})]})};n(55);var E=function(){return Object(c.jsxs)(l.a,{children:[Object(c.jsx)(m,{}),Object(c.jsxs)(j.c,{children:[Object(c.jsx)(j.a,{path:"/form",children:Object(c.jsx)(C,{})}),Object(c.jsx)(j.a,{path:"/table",children:Object(c.jsx)(F,{})}),Object(c.jsx)(j.a,{path:"/playground",children:Object(c.jsx)(B,{})}),Object(c.jsx)(j.a,{children:Object(c.jsx)(f,{})})]})]})};i.a.render(Object(c.jsx)(E,{}),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.76255018.chunk.js.map