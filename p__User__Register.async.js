(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[39],{"5WY0":function(e,t,a){e.exports={main:"antd-pro-pages-user-register-main",getCaptcha:"antd-pro-pages-user-register-getCaptcha",submit:"antd-pro-pages-user-register-submit",login:"antd-pro-pages-user-register-login",error:"antd-pro-pages-user-register-error",success:"antd-pro-pages-user-register-success",warning:"antd-pro-pages-user-register-warning","progress-pass":"antd-pro-pages-user-register-progress-pass",progress:"antd-pro-pages-user-register-progress"}},cq3J:function(e,t,a){"use strict";a.r(t);a("FkTi");var r,s,i,n,o=a("d2Jz"),l=(a("6hsX"),a("AG/s")),c=(a("wJ6z"),a("PDD+")),d=(a("3s4V"),a("Dnvd")),m=(a("bm82"),a("hZ4d")),p=a("mK77"),g=a.n(p),u=(a("yq0f"),a("dWSo")),f=a("43Yg"),h=a.n(f),v=a("/tCh"),w=a.n(v),b=a("scpF"),E=a.n(b),y=a("O/V9"),M=a.n(y),O=a("8aBX"),j=a.n(O),k=(a("UpMR"),a("YtBP")),F=(a("OUmr"),a("SKE2")),S=(a("Om7z"),a("lTO/")),P=a("2w0b"),C=a.n(P),q=a("LneV"),x=a("wMcG"),z=a("YjOg"),D=a.n(z),N=a("jxwP"),V=a.n(N),G=a("5WY0"),I=a.n(G),J=S["default"].Item,U=F["default"].Option,W=k["default"].Group,Y={ok:C.a.createElement("div",{className:I.a.success},C.a.createElement(x["FormattedMessage"],{id:"validation.password.strength.strong"})),pass:C.a.createElement("div",{className:I.a.warning},C.a.createElement(x["FormattedMessage"],{id:"validation.password.strength.medium"})),poor:C.a.createElement("div",{className:I.a.error},C.a.createElement(x["FormattedMessage"],{id:"validation.password.strength.short"}))},T={ok:"success",pass:"normal",poor:"exception"},B=(r=Object(q["connect"])(function(e){var t=e.register,a=e.loading;return{register:t,submitting:a.effects["register/submit"]}}),s=S["default"].create(),r(i=s((n=function(e){function t(){var e,a;h()(this,t);for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return a=E()(this,(e=M()(t)).call.apply(e,[this].concat(s))),a.state={count:0,confirmDirty:!1,visible:!1,help:"",prefix:"86"},a.onGetCaptcha=function(){var e=59;a.setState({count:e}),a.interval=setInterval(function(){e-=1,a.setState({count:e}),0===e&&clearInterval(a.interval)},1e3),u["default"].info({title:Object(x["formatMessage"])({id:"app.login.verification-code-warning"})})},a.getPasswordStatus=function(){var e=a.props.form,t=e.getFieldValue("password");return t&&t.length>9?"ok":t&&t.length>5?"pass":"poor"},a.handleSubmit=function(e){e.preventDefault();var t=a.props,r=t.form,s=t.dispatch;r.validateFields({force:!0},function(e,t){if(!e){var r=a.state.prefix;s({type:"register/submit",payload:g()({},t,{prefix:r})})}})},a.handleConfirmBlur=function(e){var t=e.target.value,r=a.state.confirmDirty;a.setState({confirmDirty:r||!!t})},a.checkConfirm=function(e,t,r){var s=a.props.form;t&&t!==s.getFieldValue("password")?r(Object(x["formatMessage"])({id:"validation.password.twice"})):r()},a.checkPassword=function(e,t,r){var s=a.state,i=s.visible,n=s.confirmDirty;if(t)if(a.setState({help:""}),i||a.setState({visible:!!t}),t.length<6)r("error");else{var o=a.props.form;t&&n&&o.validateFields(["confirm"],{force:!0}),r()}else a.setState({help:Object(x["formatMessage"])({id:"validation.password.required"}),visible:!!t}),r("error")},a.changePrefix=function(e){a.setState({prefix:e})},a.renderPasswordProgress=function(){var e=a.props.form,t=e.getFieldValue("password"),r=a.getPasswordStatus();return t&&t.length?C.a.createElement("div",{className:I.a["progress-".concat(r)]},C.a.createElement(m["a"],{status:T[r],className:I.a.progress,strokeWidth:6,percent:10*t.length>100?100:10*t.length,showInfo:!1})):null},a}return j()(t,e),w()(t,[{key:"componentDidUpdate",value:function(){var e=this.props,t=e.form,a=e.register,r=t.getFieldValue("mail");"ok"===a.status&&V.a.push({pathname:"/user/register-result",state:{account:r}})}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){var e=this.props,t=e.form,a=e.submitting,r=t.getFieldDecorator,s=this.state,i=s.count,n=s.prefix,m=s.help,p=s.visible;return C.a.createElement("div",{className:I.a.main},C.a.createElement("h3",null,C.a.createElement(x["FormattedMessage"],{id:"app.register.register"})),C.a.createElement(S["default"],{onSubmit:this.handleSubmit},C.a.createElement(J,null,r("mail",{rules:[{required:!0,message:Object(x["formatMessage"])({id:"validation.email.required"})},{type:"email",message:Object(x["formatMessage"])({id:"validation.email.wrong-format"})}]})(C.a.createElement(k["default"],{size:"large",placeholder:Object(x["formatMessage"])({id:"form.email.placeholder"})}))),C.a.createElement(J,{help:m},C.a.createElement(d["a"],{getPopupContainer:function(e){return e.parentNode},content:C.a.createElement("div",{style:{padding:"4px 0"}},Y[this.getPasswordStatus()],this.renderPasswordProgress(),C.a.createElement("div",{style:{marginTop:10}},C.a.createElement(x["FormattedMessage"],{id:"validation.password.strength.msg"}))),overlayStyle:{width:240},placement:"right",visible:p},r("password",{rules:[{validator:this.checkPassword}]})(C.a.createElement(k["default"],{size:"large",type:"password",placeholder:Object(x["formatMessage"])({id:"form.password.placeholder"})})))),C.a.createElement(J,null,r("confirm",{rules:[{required:!0,message:Object(x["formatMessage"])({id:"validation.confirm-password.required"})},{validator:this.checkConfirm}]})(C.a.createElement(k["default"],{size:"large",type:"password",placeholder:Object(x["formatMessage"])({id:"form.confirm-password.placeholder"})}))),C.a.createElement(J,null,C.a.createElement(W,{compact:!0},C.a.createElement(F["default"],{size:"large",value:n,onChange:this.changePrefix,style:{width:"20%"}},C.a.createElement(U,{value:"86"},"+86"),C.a.createElement(U,{value:"87"},"+87")),r("mobile",{rules:[{required:!0,message:Object(x["formatMessage"])({id:"validation.phone-number.required"})},{pattern:/^\d{11}$/,message:Object(x["formatMessage"])({id:"validation.phone-number.wrong-format"})}]})(C.a.createElement(k["default"],{size:"large",style:{width:"80%"},placeholder:Object(x["formatMessage"])({id:"form.phone-number.placeholder"})})))),C.a.createElement(J,null,C.a.createElement(o["default"],{gutter:8},C.a.createElement(c["default"],{span:16},r("captcha",{rules:[{required:!0,message:Object(x["formatMessage"])({id:"validation.verification-code.required"})}]})(C.a.createElement(k["default"],{size:"large",placeholder:Object(x["formatMessage"])({id:"form.verification-code.placeholder"})}))),C.a.createElement(c["default"],{span:8},C.a.createElement(l["default"],{size:"large",disabled:i,className:I.a.getCaptcha,onClick:this.onGetCaptcha},i?"".concat(i," s"):Object(x["formatMessage"])({id:"app.register.get-verification-code"}))))),C.a.createElement(J,null,C.a.createElement(l["default"],{size:"large",loading:a,className:I.a.submit,type:"primary",htmlType:"submit"},C.a.createElement(x["FormattedMessage"],{id:"app.register.register"})),C.a.createElement(D.a,{className:I.a.login,to:"/User/Login"},C.a.createElement(x["FormattedMessage"],{id:"app.register.sign-in"})))))}}]),t}(P["Component"]),i=n))||i)||i);t["default"]=B}}]);