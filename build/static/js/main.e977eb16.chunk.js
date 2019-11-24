(this.webpackJsonpinspoapp=this.webpackJsonpinspoapp||[]).push([[0],{26:function(e,a,t){e.exports=t(39)},31:function(e,a,t){},32:function(e,a,t){},33:function(e,a,t){},39:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),o=t(22),s=t.n(o),l=(t(31),t(4)),c=t(5),m=t(7),i=t(6),u=t(8),d=t(11),p=t(10),f=t(15),E=t.n(f),h=t(16),v=t.n(h),g=t(14),b=t.n(g),w=t(23),N=t.n(w),_={email:{rules:[{test:function(e){return e.length>0},message:"Email cannot be empty"}],errors:[],valid:!1,state:""},password:{rules:[{test:function(e){return RegExp(/^(?=.*[a-z])(?=.*[A-Z]).*$/).test(e)||e.length>=8},message:"Password must contain at least one lowercase letter, one uppercase letter and be at least 8 characters long"}],errors:[],valid:!1,state:""},fname:{rules:[{test:function(e){return e.length>0},message:"First name cannot be empty"}],errors:[],valid:!1,state:""},lname:{rules:[{test:function(e){return e.length>0},message:"Last name cannot be empty"}],errors:[],valid:!1,state:""}},y=(t(32),function(e){function a(){var e,t;Object(l.a)(this,a);for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return(t=Object(m.a)(this,(e=Object(i.a)(a)).call.apply(e,[this].concat(o)))).state={formInput:{email:"",password:"",fname:"",lname:""},showPassword:!1,USERINSERTED:!1},t.validator=_,t.resetValidator=function(){for(var e=0,a=Object.entries(_);e<a.length;e++){var t=a[e];t[1].errors=[],t[1].state="",t[1].valid=!1}},t.handleInputChange=function(e,a){var r=Object.assign({},t.state);t.setState(r),t.updateValidators(a,e.target.value)},t.updateValidators=function(e,a){t.validator[e].errors=[],t.validator[e].state=a,t.validator[e].valid=!0,t.validator[e].rules.forEach((function(r){r.test(a)||(console.log(r.message),t.validator[e].errors.push(r.message),t.validator[e].valid=!1)}));var r=!0;Object.keys(t.validator).forEach((function(e){t.validator[e].valid||(r=!1)})),t.displayValidationErrors(e);var n=document.getElementById("submit");n&&(n.disabled=!r)},t.displayValidationErrors=function(e){var a=t.validator[e];return a.valid?"":a.errors.map((function(e,a){return n.a.createElement("div",{key:a,className:"error_div"},n.a.createElement("span",{className:"error"}," ",e),n.a.createElement("br",null))}))},t.addUser=function(e){},t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=document.getElementById("submit");e&&(e.disabled=!0),this.resetValidator()}},{key:"showPassword",value:function(e){e.preventDefault(),this.setState((function(e){return{showPassword:!e.showPassword}}))}},{key:"render",value:function(){var e=this,a=this.state.showPassword;return n.a.createElement("form",{className:"form"},n.a.createElement("div",{className:"form_form-group"},n.a.createElement("span",{className:"form_form-group-label"},"First name"),n.a.createElement("div",{className:"form_form-group-field"},n.a.createElement("div",{className:"form_form-group-icon"},n.a.createElement(b.a,null)),n.a.createElement("input",{id:"fname",type:"text",name:"fname",placeholder:"First name",onChange:function(a){return e.handleInputChange(a,"fname")}})),n.a.createElement("div",{className:"error_div_container"},this.displayValidationErrors("fname"))),n.a.createElement("div",{className:"form_form-group"},n.a.createElement("span",{className:"form_form-group-label"},"Last name"),n.a.createElement("div",{className:"form_form-group-field"},n.a.createElement("div",{className:"form_form-group-icon"},n.a.createElement(b.a,null)),n.a.createElement("input",{id:"lname",type:"text",name:"lname",placeholder:"Last name",onChange:function(a){return e.handleInputChange(a,"lname")}})),n.a.createElement("div",{className:"error_div_container"},this.displayValidationErrors("lname")),"        "),n.a.createElement("div",{className:"form_form-group"},n.a.createElement("span",{className:"form_form-group-label"},"E-mail"),n.a.createElement("div",{className:"form_form-group-field"},n.a.createElement("div",{className:"form_form-group-icon"},n.a.createElement(N.a,null)),n.a.createElement("input",{id:"email",type:"email",ref:"email",name:"email",placeholder:"example@mail.com",onChange:function(a){return e.handleInputChange(a,"email")}})),n.a.createElement("div",{className:"error_div_container"},this.displayValidationErrors("email")),"        "),n.a.createElement("div",{className:"form_form-group form_form-group--forgot"},n.a.createElement("span",{className:"form_form-group-label"},"Password"),n.a.createElement("div",{className:"form_form-group-field"},n.a.createElement("div",{className:"form_form-group-icon"},n.a.createElement(v.a,null)),n.a.createElement("input",{id:"password",ref:"password",name:"password",type:this.state.showPassword?"text":"password",placeholder:"Password",onChange:function(a){return e.handleInputChange(a,"password")}}),n.a.createElement("button",{type:"button",className:"form_form-group-button".concat(a?" active":""),onClick:function(a){return e.showPassword(a)}},n.a.createElement(E.a,null))),n.a.createElement("div",{className:"error_div_container"},this.displayValidationErrors("password")),"        "),n.a.createElement("div",{className:"account_btns"},n.a.createElement("button",{id:"submit",className:"btn btn-primary account_btn",onClick:function(a){return e.addUser(a)}},"Sign Up")))}}]),a}(n.a.Component)),j=(t(33),function(e){function a(){return Object(l.a)(this,a),Object(m.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"account"},n.a.createElement("div",{className:"account_wrapper"},n.a.createElement("div",{className:"account_card"},n.a.createElement(y,null),n.a.createElement("div",{className:"account_have-account"},n.a.createElement("span",null,"Already have an account? ",n.a.createElement(d.b,{to:"/signin"},"Login"))))))}}]),a}(n.a.PureComponent)),O=function(e){function a(){var e,t;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=Object(m.a)(this,(e=Object(i.a)(a)).call.apply(e,[this].concat(n)))).state={showPassword:!1,userlogin:!1,userLoggedin:""},t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"showPassword",value:function(e){e.preventDefault(),this.setState((function(e){return{showPassword:!e.showPassword}}))}},{key:"render",value:function(){var e=this,a=this.state.showPassword;return n.a.createElement("form",{className:"form"},n.a.createElement("div",{className:"form_form-group"},n.a.createElement("span",{className:"form_form-group-label"},"Username"),n.a.createElement("div",{className:"form_form-group-field"},n.a.createElement("div",{className:"form_form-group-icon"},n.a.createElement(b.a,null)),n.a.createElement("input",{name:"username",ref:"email",type:"text",placeholder:"Name"}))),n.a.createElement("div",{className:"form_form-group"},n.a.createElement("span",{className:"form_form-group-label"},"Password"),n.a.createElement("div",{className:"form_form-group-field"},n.a.createElement("div",{className:"form_form-group-icon"},n.a.createElement(v.a,null)),n.a.createElement("input",{name:"password",ref:"password",type:a?"text":"password",placeholder:"Password"}),n.a.createElement("button",{type:"button",className:"form_form-group-button".concat(a?" active":""),onClick:function(a){return e.showPassword(a)}},n.a.createElement(E.a,null)))),n.a.createElement("div",{className:"account_btns"},n.a.createElement(d.b,{className:"btn btn-primary account_btn",to:"/dashboard_default/".concat(this.state.userLoggedin)},"Sign In"),n.a.createElement(d.b,{className:"btn btn-outline-primary account_btn",to:"/signup"},"Create Account")))}}]),a}(r.PureComponent),P=function(e){function a(){return Object(l.a)(this,a),Object(m.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"account"},n.a.createElement("div",{className:"account_wrapper"},n.a.createElement("div",{className:"account_card"},n.a.createElement(O,null))))}}]),a}(n.a.PureComponent),k=function(e){function a(){return Object(l.a)(this,a),Object(m.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return n.a.createElement(d.a,null,n.a.createElement(p.c,null,n.a.createElement(p.a,{exact:!0,path:"/"},n.a.createElement(P,null)),n.a.createElement(p.a,{exact:!0,path:"/signup"},n.a.createElement(j,null)),n.a.createElement(p.a,{path:"/signin"},n.a.createElement(P,null))))}}]),a}(n.a.PureComponent),C=function(){return n.a.createElement("div",{className:"theme-light"},n.a.createElement("div",{className:"wrapper blocks-with-shadow-theme top-navigation"},n.a.createElement(k,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[26,1,2]]]);
//# sourceMappingURL=main.e977eb16.chunk.js.map