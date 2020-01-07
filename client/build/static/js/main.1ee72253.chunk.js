(this.webpackJsonpinspoapp=this.webpackJsonpinspoapp||[]).push([[0],{53:function(e,a,t){e.exports=t(80)},63:function(e,a,t){},64:function(e,a,t){},65:function(e,a,t){},80:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(30),o=t.n(s),l=t(13),c=t(16),i=(t(62),t(63),t(6)),m=t(7),u=t(9),p=t(8),d=t(10),h=t(24),f=t(19),g="@@USER/UPDATE_USER_INFO_ACTION",b="@@USER/UPDATE_ACCOUNT_SIGNED_IN_ACTION";function E(e){return{type:g,userName:e.email,fname:e.fname,lname:e.lname}}function v(e){return{type:b,signedIn:e}}var y,N=t(27),O=t(33),_=t.n(O),w=t(34),j=t.n(w),I=t(29),C=t.n(I),k=t(48),S=t.n(k),P={email:{rules:[{test:function(e){return e.length>0&&e.includes("@")},message:"Invalid email input"}],errors:[],valid:!1,state:""},password:{rules:[{test:function(e){return RegExp(/^(?=.*[a-z])(?=.*[A-Z]).*$/).test(e)||e.length>=8},message:"Password must contain at least one lowercase letter, one uppercase letter and be at least 8 characters long"}],errors:[],valid:!1,state:""},fname:{rules:[{test:function(e){return e.length>0},message:"First name cannot be empty"}],errors:[],valid:!1,state:""},lname:{rules:[{test:function(e){return e.length>0},message:"Last name cannot be empty"}],errors:[],valid:!1,state:""}},U=(t(64),function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(t=Object(u.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(s)))).state={email:"",password:"",fname:"",lname:"",showPassword:!1,shouldShowCreateError:!1},t.validator=P,t.resetValidator=function(){for(var e=0,a=Object.entries(P);e<a.length;e++){var t=a[e];t[1].errors=[],t[1].state="",t[1].valid=!1}},t.handleInputChange=function(e,a){t.setState(Object(N.a)({},a,e.target.value)),t.updateValidators(a,e.target.value)},t.updateValidators=function(e,a){t.validator[e].errors=[],t.validator[e].state=a,t.validator[e].valid=!0,t.validator[e].rules.forEach((function(n){n.test(a)||(t.validator[e].errors.push(n.message),t.validator[e].valid=!1)}));var n=!0;Object.keys(t.validator).forEach((function(e){t.validator[e].valid||(n=!1)})),t.displayValidationErrors(e);var r=document.getElementById("submit");r&&(r.disabled=!n)},t.displayValidationErrors=function(e){var a=t.validator[e];return a.valid?"":a.errors.map((function(e,a){return r.a.createElement("div",{key:a,className:"error_div"},r.a.createElement("span",{className:"error"}," ",e),r.a.createElement("br",null))}))},t.addUser=function(e){e.preventDefault();var a={fname:t.state.fname,lname:t.state.lname,email:t.state.email,password:t.state.password};t.props.signUp(a)},t}return Object(d.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=document.getElementById("submit");e&&(e.disabled=!0),this.resetValidator()}},{key:"componentDidUpdate",value:function(e){this.props.signedIn&&this.props.signedIn!==e.signedIn&&this.props.history.push("/dashboard_default")}},{key:"showPassword",value:function(e){e.preventDefault(),this.setState((function(e){return{showPassword:!e.showPassword}}))}},{key:"render",value:function(){var e=this,a=this.state.showPassword;return r.a.createElement("form",{className:"form"},r.a.createElement("div",{className:"form_form-group"},r.a.createElement("span",{className:"form_form-group-label"},"First name"),r.a.createElement("div",{className:"form_form-group-field"},r.a.createElement("div",{className:"form_form-group-icon"},r.a.createElement(C.a,null)),r.a.createElement("input",{id:"fname",type:"text",name:"fname",placeholder:"First name",value:this.state.fname,onChange:function(a){return e.handleInputChange(a,"fname")}})),r.a.createElement("div",{className:"error_div_container"},this.displayValidationErrors("fname"))),r.a.createElement("div",{className:"form_form-group"},r.a.createElement("span",{className:"form_form-group-label"},"Last name"),r.a.createElement("div",{className:"form_form-group-field"},r.a.createElement("div",{className:"form_form-group-icon"},r.a.createElement(C.a,null)),r.a.createElement("input",{id:"lname",type:"text",name:"lname",placeholder:"Last name",value:this.state.lname,onChange:function(a){return e.handleInputChange(a,"lname")}})),r.a.createElement("div",{className:"error_div_container"},this.displayValidationErrors("lname"))),r.a.createElement("div",{className:"form_form-group"},r.a.createElement("span",{className:"form_form-group-label"},"E-mail"),r.a.createElement("div",{className:"form_form-group-field"},r.a.createElement("div",{className:"form_form-group-icon"},r.a.createElement(S.a,null)),r.a.createElement("input",{id:"email",type:"email",ref:"email",name:"email",placeholder:"example@mail.com",value:this.state.email,onChange:function(a){return e.handleInputChange(a,"email")}})),r.a.createElement("div",{className:"error_div_container"},this.displayValidationErrors("email"))),r.a.createElement("div",{className:"form_form-group form_form-group--forgot"},r.a.createElement("span",{className:"form_form-group-label"},"Password"),r.a.createElement("div",{className:"form_form-group-field"},r.a.createElement("div",{className:"form_form-group-icon"},r.a.createElement(j.a,null)),r.a.createElement("input",{id:"password",ref:"password",name:"password",type:this.state.showPassword?"text":"password",placeholder:"Password",value:this.state.password,onChange:function(a){return e.handleInputChange(a,"password")}}),r.a.createElement("button",{type:"button",className:"form_form-group-button".concat(a?" active":""),onClick:function(a){return e.showPassword(a)}},r.a.createElement(_.a,null))),r.a.createElement("div",{className:"error_div_container"},this.displayValidationErrors("password"))),r.a.createElement("div",{className:"account_btns"},r.a.createElement("button",{id:"submit",className:"btn btn-primary account_btn",onClick:function(a){return e.addUser(a)}},"Sign Up")))}}]),a}(r.a.Component)),A=Object(l.c)((function(e,a){return{signedIn:e.Account.signedIn,history:a.history}}),{signUp:function(e){return function(a){fetch("/api/signUp",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(t){if(t.correctUser)return localStorage.setItem("signedIn",JSON.stringify(!0)),localStorage.setItem("username",e.email),localStorage.setItem("fname",e.fname),localStorage.setItem("lname",e.lname),Object(l.b)((function(){a(E(t.user)),a(v(!0))}));localStorage.setItem("signedIn",JSON.stringify(!1)),a(v(!1)),window.alert("The username is already taken")}))}}})(U),D=(t(65),function(e){function a(){return Object(i.a)(this,a),Object(u.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"account"},r.a.createElement("div",{className:"account_wrapper"},r.a.createElement("div",{className:"account_card"},r.a.createElement(A,{history:this.props.history}),r.a.createElement("div",{className:"account_have-account"},r.a.createElement("span",null,"Already have an account? ",r.a.createElement(f.a,{to:"/signin"},"Login"))))))}}]),a}(r.a.PureComponent)),T=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=Object(u.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(r)))).state={email:"",password:"",showPassword:!1},t.checkUser=function(e){e.preventDefault();var a={email:t.state.email,password:t.state.password};t.props.signIn(a)},t.handleInputChange=function(e,a){t.setState(Object(N.a)({},a,e.target.value))},t.showPassword=function(e){e.preventDefault(),t.setState((function(e){return{showPassword:!e.showPassword}}))},t}return Object(d.a)(a,e),Object(m.a)(a,[{key:"componentDidUpdate",value:function(e){this.props.signedIn&&this.props.signedIn!==e.signedIn&&this.props.history.push("/dashboard_default")}},{key:"render",value:function(){var e=this,a=this.state.showPassword;return r.a.createElement("form",{className:"form"},r.a.createElement("div",{className:"form_form-group"},r.a.createElement("span",{className:"form_form-group-label"},"Username"),r.a.createElement("div",{className:"form_form-group-field"},r.a.createElement("div",{className:"form_form-group-icon"},r.a.createElement(C.a,null)),r.a.createElement("input",{name:"username",type:"text",placeholder:"Username",value:this.state.email,onChange:function(a){return e.handleInputChange(a,"email")}}))),r.a.createElement("div",{className:"form_form-group"},r.a.createElement("span",{className:"form_form-group-label"},"Password"),r.a.createElement("div",{className:"form_form-group-field"},r.a.createElement("div",{className:"form_form-group-icon"},r.a.createElement(j.a,null)),r.a.createElement("input",{name:"password",type:a?"text":"password",placeholder:"Password",value:this.state.password,onChange:function(a){return e.handleInputChange(a,"password")}}),r.a.createElement("button",{type:"button",className:"form_form-group-button".concat(a?" active":""),onClick:this.showPassword},r.a.createElement(_.a,null)))),r.a.createElement("div",{className:"account_btns"},r.a.createElement(f.a,{className:"btn btn-primary account_btn",to:"/dashboard_default",onClick:this.checkUser},"Sign In"),r.a.createElement(f.a,{className:"btn btn-outline-primary account_btn",to:"/signup"},"Create Account")))}}]),a}(n.PureComponent),x=Object(l.c)((function(e,a){return{signedIn:e.Account.signedIn,history:a.history}}),{signIn:function(e){return function(a){fetch("/api/signIn",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){if(e.correctUser)return localStorage.setItem("signedIn",JSON.stringify(!0)),localStorage.setItem("username",e.user.email),localStorage.setItem("fname",e.user.fname),localStorage.setItem("lname",e.user.lname),Object(l.b)((function(){a(E(e.user)),a(v(!0))}));localStorage.setItem("signedIn",JSON.stringify(!1)),a(v(!1)),window.alert("The username or password you entered is incorrect")}))}}})(T),V=function(e){function a(){return Object(i.a)(this,a),Object(u.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"account"},r.a.createElement("div",{className:"account_wrapper"},r.a.createElement("div",{className:"account_card"},r.a.createElement(x,{history:this.props.history}))))}}]),a}(r.a.PureComponent),J=t(84),M=t(85),B=t(86),R=t(81),F=t(88),L=t(82),W=t(83),q=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=Object(u.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(r)))).state={isOpen:!1,title:"",start:"",end:""},t.toggleModal=function(){t.setState((function(e){return{isOpen:!e.isOpen}}))},t.handleInputChange=function(e,a){t.setState(Object(N.a)({},a,e.target.value))},t}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"theme-light wrapper squared-corner-theme blocks-with-shadow-theme top-navigation"},r.a.createElement(R.a,{outline:!1,size:"sm",color:"success",btn:"Create new plan",className:"icon account_btn",onClick:this.toggleModal},"Create Plan"),r.a.createElement(F.a,{isOpen:this.state.isOpen,toggle:this.toggleModal,className:"modal-dialog--success theme-light"},r.a.createElement("div",{className:"modal_header"},r.a.createElement("button",{className:"lnr lnr-cross modal_close-btn",type:"button",onClick:this.toggleModal}),r.a.createElement("h4",{className:"modal_title"},"Create a new plan")),r.a.createElement("div",{className:"dashboard_place-order-form"},r.a.createElement("form",{className:"form form--vertical"},r.a.createElement("div",{className:"form_form-group"},r.a.createElement("span",{className:"form_form-group-label"},"Plan Title"),r.a.createElement("div",{className:"form_form-group-field"},r.a.createElement("input",{name:"title",type:"text",placeholder:"Title",value:this.state.title,onChange:function(a){return e.handleInputChange(a,"title")}}))),r.a.createElement("div",{className:"form_form-group"},r.a.createElement("span",{className:"form_form-group-label"},"Start Date"),r.a.createElement("div",{className:"form_form-group-field"},r.a.createElement(L.a,{name:"startDate",type:"date",placeholder:"current date",value:this.state.start,onChange:function(a){return e.handleInputChange(a,"start")}}))),r.a.createElement("div",{className:"form_form-group"},r.a.createElement("span",{className:"form_form-group-label"},"End Date"),r.a.createElement("div",{className:"form_form-group-field"},r.a.createElement(L.a,{name:"endDate",type:"date",placeholder:"current date",value:this.state.end,onChange:function(a){return e.handleInputChange(a,"end")}}))),r.a.createElement(W.a,{className:"modal_footer"},r.a.createElement(R.a,{outline:!1,color:"success",type:"submit"},"Create"),r.a.createElement(R.a,{onClick:this.toggleModal},"Cancel"))))))}}]),a}(r.a.PureComponent),z=function(e){function a(){return Object(i.a)(this,a),Object(u.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement(J.a,null,r.a.createElement(M.a,null,r.a.createElement(B.a,{md:12},r.a.createElement("h3",{className:"page-title"},"Boards"),r.a.createElement("h3",{className:"page-subhead subhead"}," ","Click on a board to view your activity"),r.a.createElement("div",{className:"board_createbtn"},r.a.createElement(q,null)))))}}]),a}(r.a.PureComponent),$=function(e){function a(){return Object(i.a)(this,a),Object(u.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this;return this.props.signedIn?r.a.createElement(h.b,{path:this.props.path,render:function(a){return r.a.createElement(e.props.component,a)}}):r.a.createElement(h.a,{to:"/"})}}]),a}(r.a.PureComponent),G=Object(l.c)((function(e,a){return{signedIn:e.Account.signedIn,path:a.path,component:a.component}}),null)($),Z=t(87),H=t(50),K=t.n(H),Q=function(e){function a(){return Object(i.a)(this,a),Object(u.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement(f.a,{className:"topbar_link",to:this.props.path,onClick:this.props.onClick},r.a.createElement("span",{className:"topbar_link-icon lnr lnr-".concat(this.props.icon)}),r.a.createElement("p",{className:"topbar_link-title"},this.props.title))}}]),a}(r.a.PureComponent),X=function(e){return e.length?e.charAt(0).toUpperCase()+e.substring(1):e},Y=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=Object(u.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(r)))).state={collapsed:!1},t.toggle=function(){t.setState((function(e){return{collapsed:!e.collapsed}}))},t}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"topbar_profile"},r.a.createElement("button",{className:"topbar_avatar",type:"button",onClick:this.toggle},r.a.createElement("p",{className:"topbar_avatar-name"},X(this.props.fname)+" "+X(this.props.lname)),r.a.createElement(K.a,{className:"topbar_icon"})),this.state.collapsed&&r.a.createElement("button",{className:"topbar_back",type:"button",onClick:this.toggle}),r.a.createElement(Z.a,{isOpen:this.state.collapsed,className:"topbar_menu-wrap"},r.a.createElement("div",{className:"topbar_menu"},r.a.createElement(Q,{title:"My Profile",icon:"user",path:"/"}),r.a.createElement(Q,{title:"Sign Out",icon:"exit",path:"/",onClick:this.props.signOut}))))}}]),a}(r.a.PureComponent),ee=function(e){function a(){return Object(i.a)(this,a),Object(u.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"layout layout--top-navigation"},r.a.createElement("div",{className:"topbar topbar--navigation"},r.a.createElement("div",{className:"topbar_wrapper"},r.a.createElement("div",{className:"topbar_left"},r.a.createElement(f.a,{className:"topbar_logo",to:"/dashboard_default/"})),r.a.createElement("div",{className:"topbar_right"},r.a.createElement(Y,{fname:this.props.fname,lname:this.props.lname,signOut:this.props.signOut})))))}}]),a}(r.a.PureComponent),ae=Object(l.c)((function(e){return{fname:e.Account.fname,lname:e.Account.lname}}),{signOut:function(){localStorage.clear();var e={email:"",password:"",fname:"",lname:""};return function(a){return Object(l.b)((function(){a(E(e)),a(v(!1))}))}}})(ee),te=function(){return r.a.createElement("div",null,r.a.createElement(ae,null),r.a.createElement("div",{className:"container_wrap"},r.a.createElement(h.b,{exact:!0,path:"/dashboard_default"},r.a.createElement(z,null))))},ne=function(e){function a(){return Object(i.a)(this,a),Object(u.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement(h.c,{history:this.props.history},r.a.createElement(h.d,null,r.a.createElement(h.b,{exact:!0,path:"/"},this.props.signedIn?r.a.createElement(h.a,{to:"/dashboard_default"}):r.a.createElement(V,{history:this.props.history})),r.a.createElement(h.b,{exact:!0,path:"/signup"},this.props.signedIn?r.a.createElement(h.a,{to:"/dashboard_default"}):r.a.createElement(D,{history:this.props.history})),r.a.createElement(h.b,{path:"/signin"},this.props.signedIn?r.a.createElement(h.a,{to:"/dashboard_default"}):r.a.createElement(V,{history:this.props.history})),r.a.createElement(G,{path:"/",component:te})))}}]),a}(r.a.PureComponent),re=Object(l.c)((function(e,a){return{signedIn:e.Account.signedIn,history:a.history}}),null)(ne),se=Object(c.a)(),oe=function(){return r.a.createElement("div",{className:"theme-light"},r.a.createElement("div",{className:"wrapper squared-corner-theme blocks-with-shadow-theme top-navigation"},r.a.createElement(re,{history:se})))},le=t(26),ce=t(51),ie=t(52),me={userName:localStorage.username,fname:localStorage.fname,lname:localStorage.lname,signedIn:(y=localStorage.signedIn,"true"===y)},ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case g:return{userName:a.userName,fname:a.fname,lname:a.lname,signedIn:e.signedIn};case b:return{userName:e.userName,fname:e.fname,lname:e.lname,signedIn:a.signedIn};default:return e}},pe=Object(le.combineReducers)({Account:ue});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(l.a,{store:Object(le.createStore)(pe,Object(ce.composeWithDevTools)(Object(le.applyMiddleware)(ie.a)))},r.a.createElement(oe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[53,1,2]]]);
//# sourceMappingURL=main.1ee72253.chunk.js.map