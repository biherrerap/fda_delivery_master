(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{HYi3:function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),t=u("mrSG"),i=u("r28Q"),r=u("ZZ/e"),s=function(){function l(l,n,u,e){this.server=l,this.toastController=n,this.nav=u,this.loadingController=e,this.newPassword=!1,console.log("info"),console.log(localStorage.getItem("app_text")),this.text=JSON.parse(localStorage.getItem("app_text"))}return l.prototype.ngOnInit=function(){},l.prototype.forgot=function(l,n){return void 0===n&&(n="new"),t.b(this,void 0,void 0,(function(){var u,e=this;return t.e(this,(function(t){switch(t.label){case 0:return"new"!=n||0!=l.email.length?[3,1]:(this.presentToast("Por favor introduzca su correo electr\xf3nico"),[3,4]);case 1:return[4,this.loadingController.create({message:"Por favor espere...",mode:"ios"})];case 2:return[4,(u=t.sent()).present()];case 3:t.sent(),this.server.forgot(l).subscribe((function(n){"error"==n.msg?e.presentToast(n.error):(e.presentToast("OTP enviado con \xe9xito en su correo electr\xf3nico"),e.user_id=n.user_id,e.email=l.email),u.dismiss()})),t.label=4;case 4:return[2]}}))}))},l.prototype.verify=function(l){return t.b(this,void 0,void 0,(function(){var n,u=this;return t.e(this,(function(e){switch(e.label){case 0:return 0!=l.otp.length?[3,1]:(this.presentToast("Por favor ingrese su OTP"),[3,4]);case 1:return[4,this.loadingController.create({message:"Por favor espere...",duration:3e3,mode:"ios"})];case 2:return[4,(n=e.sent()).present()];case 3:e.sent(),this.server.verify({otp:l.otp,user_id:this.user_id}).subscribe((function(l){"error"==l.msg?u.presentToast(l.error):(u.user_id=l.user_id,u.newPassword=!0,u.presentToast("Correo electr\xf3nico verificado con \xe9xito.")),n.dismiss()})),e.label=4;case 4:return[2]}}))}))},l.prototype.new_password=function(l){return t.b(this,void 0,void 0,(function(){var n,u=this;return t.e(this,(function(e){switch(e.label){case 0:return 0!=l.password.length?[3,1]:(this.presentToast("Por favor ingrese su nueva contrase\xf1a"),[3,5]);case 1:return l.password==l.new_password?[3,2]:(this.presentToast("La confirmaci\xf3n de contrase\xf1a no coincide."),[3,5]);case 2:return[4,this.loadingController.create({message:"Por favor espere...",duration:3e3,mode:"ios"})];case 3:return[4,(n=e.sent()).present()];case 4:e.sent(),this.server.updatePassword({password:l.password,user_id:this.user_id}).subscribe((function(l){"error"==l.msg?u.presentToast(l.error):(u.nav.navigateForward("/login"),u.presentToast("Nueva contrase\xf1a actualizada con \xe9xito.")),n.dismiss()})),e.label=5;case 5:return[2]}}))}))},l.prototype.presentToast=function(l){return t.b(this,void 0,void 0,(function(){return t.e(this,(function(n){switch(n.label){case 0:return[4,this.toastController.create({message:l,duration:3e3,position:"top",mode:"ios",color:"dark"})];case 1:return n.sent().present(),[2]}}))}))},l.prototype.resend=function(){this.forgot({email:this.email})},l}(),o=function(){return function(){}}(),a=u("pMnS"),b=u("oBZk"),d=u("gIcY"),c=u("Ip0R"),g=e.rb({encapsulation:0,styles:[[""]],data:{}});function p(l){return e.Lb(0,[(l()(),e.tb(0,0,null,null,35,"ion-card",[["mode","ios"]],null,null,null,b.P,b.f)),e.sb(1,49152,null,0,r.n,[e.h,e.k,e.z],{mode:[0,"mode"]},null),(l()(),e.tb(2,0,null,0,7,"ion-card-header",[],null,null,null,b.M,b.h)),e.sb(3,49152,null,0,r.p,[e.h,e.k,e.z],null,null),(l()(),e.tb(4,0,null,0,2,"ion-card-title",[],null,null,null,b.O,b.j)),e.sb(5,49152,null,0,r.r,[e.h,e.k,e.z],null,null),(l()(),e.Kb(-1,0,["\xbfOlvidaste tu contrase\xf1a?"])),(l()(),e.tb(7,0,null,0,2,"ion-card-subtitle",[],null,null,null,b.N,b.i)),e.sb(8,49152,null,0,r.q,[e.h,e.k,e.z],null,null),(l()(),e.Kb(-1,0,["No te preocupes, puedes restablecer aqu\xed"])),(l()(),e.tb(10,0,null,0,25,"ion-card-content",[],null,null,null,b.L,b.g)),e.sb(11,49152,null,0,r.o,[e.h,e.k,e.z],null,null),(l()(),e.tb(12,0,null,0,23,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(l,n,u){var t=!0,i=l.component;return"submit"===n&&(t=!1!==e.Fb(l,14).onSubmit(u)&&t),"reset"===n&&(t=!1!==e.Fb(l,14).onReset()&&t),"ngSubmit"===n&&(t=!1!==i.forgot(e.Fb(l,14).value)&&t),t}),null,null)),e.sb(13,16384,null,0,d.m,[],null,null),e.sb(14,4210688,[["form",4]],0,d.h,[[8,null],[8,null]],null,{ngSubmit:"ngSubmit"}),e.Hb(2048,null,d.a,null,[d.h]),e.sb(16,16384,null,0,d.g,[[4,d.a]],null,null),(l()(),e.tb(17,0,null,null,13,"ion-item",[],null,null,null,b.Y,b.s)),e.sb(18,49152,null,0,r.I,[e.h,e.k,e.z],null,null),(l()(),e.tb(19,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,b.Z,b.t)),e.sb(20,49152,null,0,r.O,[e.h,e.k,e.z],{position:[0,"position"]},null),(l()(),e.Kb(-1,0,["Ingrese su email"])),(l()(),e.tb(22,0,null,0,8,"ion-input",[["name","email"],["ngModel",""],["required",""],["type","email"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==e.Fb(l,25)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Fb(l,25)._handleInputEvent(u.target)&&t),t}),b.X,b.r)),e.sb(23,16384,null,0,d.j,[],{required:[0,"required"]},null),e.Hb(1024,null,d.c,(function(l){return[l]}),[d.j]),e.sb(25,16384,null,0,r.Pb,[e.k],null,null),e.Hb(1024,null,d.d,(function(l){return[l]}),[r.Pb]),e.sb(27,671744,null,0,d.i,[[2,d.a],[6,d.c],[8,null],[6,d.d]],{name:[0,"name"],model:[1,"model"]},null),e.Hb(2048,null,d.e,null,[d.i]),e.sb(29,16384,null,0,d.f,[[4,d.e]],null,null),e.sb(30,49152,null,0,r.H,[e.h,e.k,e.z],{name:[0,"name"],required:[1,"required"],type:[2,"type"]},null),(l()(),e.tb(31,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.tb(32,0,null,null,2,"ion-button",[["expand","block"],["mode","ios"],["type","submit"]],null,null,null,b.J,b.d)),e.sb(33,49152,null,0,r.l,[e.h,e.k,e.z],{expand:[0,"expand"],mode:[1,"mode"],type:[2,"type"]},null),(l()(),e.Kb(-1,0,["Continuar"])),(l()(),e.tb(35,0,null,null,0,"br",[],null,null,null,null,null))],(function(l,n){l(n,1,0,"ios"),l(n,20,0,"floating"),l(n,23,0,""),l(n,27,0,"email",""),l(n,30,0,"email","","email"),l(n,33,0,"block","ios","submit")}),(function(l,n){l(n,12,0,e.Fb(n,16).ngClassUntouched,e.Fb(n,16).ngClassTouched,e.Fb(n,16).ngClassPristine,e.Fb(n,16).ngClassDirty,e.Fb(n,16).ngClassValid,e.Fb(n,16).ngClassInvalid,e.Fb(n,16).ngClassPending),l(n,22,0,e.Fb(n,23).required?"":null,e.Fb(n,29).ngClassUntouched,e.Fb(n,29).ngClassTouched,e.Fb(n,29).ngClassPristine,e.Fb(n,29).ngClassDirty,e.Fb(n,29).ngClassValid,e.Fb(n,29).ngClassInvalid,e.Fb(n,29).ngClassPending)}))}function h(l){return e.Lb(0,[(l()(),e.tb(0,0,null,null,38,"ion-card",[["mode","ios"]],null,null,null,b.P,b.f)),e.sb(1,49152,null,0,r.n,[e.h,e.k,e.z],{mode:[0,"mode"]},null),(l()(),e.tb(2,0,null,0,7,"ion-card-header",[],null,null,null,b.M,b.h)),e.sb(3,49152,null,0,r.p,[e.h,e.k,e.z],null,null),(l()(),e.tb(4,0,null,0,2,"ion-card-title",[],null,null,null,b.O,b.j)),e.sb(5,49152,null,0,r.r,[e.h,e.k,e.z],null,null),(l()(),e.Kb(-1,0,["Verifique su correo electr\xf3nico"])),(l()(),e.tb(7,0,null,0,2,"ion-card-subtitle",[],null,null,null,b.N,b.i)),e.sb(8,49152,null,0,r.q,[e.h,e.k,e.z],null,null),(l()(),e.Kb(9,0,["Se ha enviado una OTP en su correo electr\xf3nico ",""])),(l()(),e.tb(10,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.tb(11,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.tb(12,0,null,0,22,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(l,n,u){var t=!0,i=l.component;return"submit"===n&&(t=!1!==e.Fb(l,14).onSubmit(u)&&t),"reset"===n&&(t=!1!==e.Fb(l,14).onReset()&&t),"ngSubmit"===n&&(t=!1!==i.verify(e.Fb(l,14).value)&&t),t}),null,null)),e.sb(13,16384,null,0,d.m,[],null,null),e.sb(14,4210688,[["form",4]],0,d.h,[[8,null],[8,null]],null,{ngSubmit:"ngSubmit"}),e.Hb(2048,null,d.a,null,[d.h]),e.sb(16,16384,null,0,d.g,[[4,d.a]],null,null),(l()(),e.tb(17,0,null,null,13,"ion-item",[],null,null,null,b.Y,b.s)),e.sb(18,49152,null,0,r.I,[e.h,e.k,e.z],null,null),(l()(),e.tb(19,0,null,0,2,"ion-label",[["position","floating"],["style","font-size: 12px"]],null,null,null,b.Z,b.t)),e.sb(20,49152,null,0,r.O,[e.h,e.k,e.z],{position:[0,"position"]},null),(l()(),e.Kb(-1,0,["Ingrese OTP"])),(l()(),e.tb(22,0,null,0,8,"ion-input",[["name","otp"],["ngModel",""],["required",""],["type","email"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==e.Fb(l,25)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Fb(l,25)._handleInputEvent(u.target)&&t),t}),b.X,b.r)),e.sb(23,16384,null,0,d.j,[],{required:[0,"required"]},null),e.Hb(1024,null,d.c,(function(l){return[l]}),[d.j]),e.sb(25,16384,null,0,r.Pb,[e.k],null,null),e.Hb(1024,null,d.d,(function(l){return[l]}),[r.Pb]),e.sb(27,671744,null,0,d.i,[[2,d.a],[6,d.c],[8,null],[6,d.d]],{name:[0,"name"],model:[1,"model"]},null),e.Hb(2048,null,d.e,null,[d.i]),e.sb(29,16384,null,0,d.f,[[4,d.e]],null,null),e.sb(30,49152,null,0,r.H,[e.h,e.k,e.z],{name:[0,"name"],required:[1,"required"],type:[2,"type"]},null),(l()(),e.tb(31,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.tb(32,0,null,null,2,"ion-button",[["expand","block"],["mode","ios"],["type","submit"]],null,null,null,b.J,b.d)),e.sb(33,49152,null,0,r.l,[e.h,e.k,e.z],{expand:[0,"expand"],mode:[1,"mode"],type:[2,"type"]},null),(l()(),e.Kb(-1,0,["Verificar"])),(l()(),e.tb(35,0,null,0,3,"p",[["align","center"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["\xbfNo recibi\xf3 OTP? "])),(l()(),e.tb(37,0,null,null,1,"a",[],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.resend()&&e),e}),null,null)),(l()(),e.Kb(-1,null,["Reenviar"]))],(function(l,n){l(n,1,0,"ios"),l(n,20,0,"floating"),l(n,23,0,""),l(n,27,0,"otp",""),l(n,30,0,"otp","","email"),l(n,33,0,"block","ios","submit")}),(function(l,n){l(n,9,0,n.component.email),l(n,12,0,e.Fb(n,16).ngClassUntouched,e.Fb(n,16).ngClassTouched,e.Fb(n,16).ngClassPristine,e.Fb(n,16).ngClassDirty,e.Fb(n,16).ngClassValid,e.Fb(n,16).ngClassInvalid,e.Fb(n,16).ngClassPending),l(n,22,0,e.Fb(n,23).required?"":null,e.Fb(n,29).ngClassUntouched,e.Fb(n,29).ngClassTouched,e.Fb(n,29).ngClassPristine,e.Fb(n,29).ngClassDirty,e.Fb(n,29).ngClassValid,e.Fb(n,29).ngClassInvalid,e.Fb(n,29).ngClassPending)}))}function m(l){return e.Lb(0,[(l()(),e.tb(0,0,null,null,49,"ion-card",[["mode","ios"]],null,null,null,b.P,b.f)),e.sb(1,49152,null,0,r.n,[e.h,e.k,e.z],{mode:[0,"mode"]},null),(l()(),e.tb(2,0,null,0,4,"ion-card-header",[],null,null,null,b.M,b.h)),e.sb(3,49152,null,0,r.p,[e.h,e.k,e.z],null,null),(l()(),e.tb(4,0,null,0,2,"ion-card-title",[],null,null,null,b.O,b.j)),e.sb(5,49152,null,0,r.r,[e.h,e.k,e.z],null,null),(l()(),e.Kb(-1,0,["Establecer nueva contrase\xf1a"])),(l()(),e.tb(7,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.tb(8,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.tb(9,0,null,0,36,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(l,n,u){var t=!0,i=l.component;return"submit"===n&&(t=!1!==e.Fb(l,11).onSubmit(u)&&t),"reset"===n&&(t=!1!==e.Fb(l,11).onReset()&&t),"ngSubmit"===n&&(t=!1!==i.new_password(e.Fb(l,11).value)&&t),t}),null,null)),e.sb(10,16384,null,0,d.m,[],null,null),e.sb(11,4210688,[["form",4]],0,d.h,[[8,null],[8,null]],null,{ngSubmit:"ngSubmit"}),e.Hb(2048,null,d.a,null,[d.h]),e.sb(13,16384,null,0,d.g,[[4,d.a]],null,null),(l()(),e.tb(14,0,null,null,13,"ion-item",[],null,null,null,b.Y,b.s)),e.sb(15,49152,null,0,r.I,[e.h,e.k,e.z],null,null),(l()(),e.tb(16,0,null,0,2,"ion-label",[["position","floating"],["style","font-size: 12px"]],null,null,null,b.Z,b.t)),e.sb(17,49152,null,0,r.O,[e.h,e.k,e.z],{position:[0,"position"]},null),(l()(),e.Kb(-1,0,["Nueva contrase\xf1a"])),(l()(),e.tb(19,0,null,0,8,"ion-input",[["name","password"],["ngModel",""],["required",""],["type","password"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==e.Fb(l,22)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Fb(l,22)._handleInputEvent(u.target)&&t),t}),b.X,b.r)),e.sb(20,16384,null,0,d.j,[],{required:[0,"required"]},null),e.Hb(1024,null,d.c,(function(l){return[l]}),[d.j]),e.sb(22,16384,null,0,r.Pb,[e.k],null,null),e.Hb(1024,null,d.d,(function(l){return[l]}),[r.Pb]),e.sb(24,671744,null,0,d.i,[[2,d.a],[6,d.c],[8,null],[6,d.d]],{name:[0,"name"],model:[1,"model"]},null),e.Hb(2048,null,d.e,null,[d.i]),e.sb(26,16384,null,0,d.f,[[4,d.e]],null,null),e.sb(27,49152,null,0,r.H,[e.h,e.k,e.z],{name:[0,"name"],required:[1,"required"],type:[2,"type"]},null),(l()(),e.tb(28,0,null,null,13,"ion-item",[],null,null,null,b.Y,b.s)),e.sb(29,49152,null,0,r.I,[e.h,e.k,e.z],null,null),(l()(),e.tb(30,0,null,0,2,"ion-label",[["position","floating"],["style","font-size: 12px"]],null,null,null,b.Z,b.t)),e.sb(31,49152,null,0,r.O,[e.h,e.k,e.z],{position:[0,"position"]},null),(l()(),e.Kb(-1,0,["Confirm Password"])),(l()(),e.tb(33,0,null,0,8,"ion-input",[["name","new_password"],["ngModel",""],["required",""],["type","password"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==e.Fb(l,36)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Fb(l,36)._handleInputEvent(u.target)&&t),t}),b.X,b.r)),e.sb(34,16384,null,0,d.j,[],{required:[0,"required"]},null),e.Hb(1024,null,d.c,(function(l){return[l]}),[d.j]),e.sb(36,16384,null,0,r.Pb,[e.k],null,null),e.Hb(1024,null,d.d,(function(l){return[l]}),[r.Pb]),e.sb(38,671744,null,0,d.i,[[2,d.a],[6,d.c],[8,null],[6,d.d]],{name:[0,"name"],model:[1,"model"]},null),e.Hb(2048,null,d.e,null,[d.i]),e.sb(40,16384,null,0,d.f,[[4,d.e]],null,null),e.sb(41,49152,null,0,r.H,[e.h,e.k,e.z],{name:[0,"name"],required:[1,"required"],type:[2,"type"]},null),(l()(),e.tb(42,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.tb(43,0,null,null,2,"ion-button",[["expand","block"],["mode","ios"],["type","submit"]],null,null,null,b.J,b.d)),e.sb(44,49152,null,0,r.l,[e.h,e.k,e.z],{expand:[0,"expand"],mode:[1,"mode"],type:[2,"type"]},null),(l()(),e.Kb(-1,0,["Actualizar"])),(l()(),e.tb(46,0,null,0,3,"p",[["align","center"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["\xbfNo recibi\xf3 OTP? "])),(l()(),e.tb(48,0,null,null,1,"a",[],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.resend()&&e),e}),null,null)),(l()(),e.Kb(-1,null,["Reenviar"]))],(function(l,n){l(n,1,0,"ios"),l(n,17,0,"floating"),l(n,20,0,""),l(n,24,0,"password",""),l(n,27,0,"password","","password"),l(n,31,0,"floating"),l(n,34,0,""),l(n,38,0,"new_password",""),l(n,41,0,"new_password","","password"),l(n,44,0,"block","ios","submit")}),(function(l,n){l(n,9,0,e.Fb(n,13).ngClassUntouched,e.Fb(n,13).ngClassTouched,e.Fb(n,13).ngClassPristine,e.Fb(n,13).ngClassDirty,e.Fb(n,13).ngClassValid,e.Fb(n,13).ngClassInvalid,e.Fb(n,13).ngClassPending),l(n,19,0,e.Fb(n,20).required?"":null,e.Fb(n,26).ngClassUntouched,e.Fb(n,26).ngClassTouched,e.Fb(n,26).ngClassPristine,e.Fb(n,26).ngClassDirty,e.Fb(n,26).ngClassValid,e.Fb(n,26).ngClassInvalid,e.Fb(n,26).ngClassPending),l(n,33,0,e.Fb(n,34).required?"":null,e.Fb(n,40).ngClassUntouched,e.Fb(n,40).ngClassTouched,e.Fb(n,40).ngClassPristine,e.Fb(n,40).ngClassDirty,e.Fb(n,40).ngClassValid,e.Fb(n,40).ngClassInvalid,e.Fb(n,40).ngClassPending)}))}function f(l){return e.Lb(0,[(l()(),e.tb(0,0,null,null,11,"ion-header",[],null,null,null,b.V,b.p)),e.sb(1,49152,null,0,r.C,[e.h,e.k,e.z],null,null),(l()(),e.tb(2,0,null,0,9,"ion-toolbar",[["color","primary"]],null,null,null,b.lb,b.F)),e.sb(3,49152,null,0,r.Db,[e.h,e.k,e.z],{color:[0,"color"]},null),(l()(),e.tb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,b.K,b.e)),e.sb(5,49152,null,0,r.m,[e.h,e.k,e.z],null,null),(l()(),e.tb(6,0,null,0,2,"ion-back-button",[],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.Fb(l,8).onClick(u)&&t),t}),b.H,b.b)),e.sb(7,49152,null,0,r.h,[e.h,e.k,e.z],null,null),e.sb(8,16384,null,0,r.i,[[2,r.jb],r.Jb],null,null),(l()(),e.tb(9,0,null,0,2,"ion-title",[],null,null,null,b.kb,b.E)),e.sb(10,49152,null,0,r.Bb,[e.h,e.k,e.z],null,null),(l()(),e.Kb(-1,0,["\xbfOlvidaste tu contrase\xf1a?"])),(l()(),e.tb(12,0,null,null,7,"ion-content",[],null,null,null,b.R,b.l)),e.sb(13,49152,null,0,r.v,[e.h,e.k,e.z],null,null),(l()(),e.ib(16777216,null,0,1,null,p)),e.sb(15,16384,null,0,c.i,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.ib(16777216,null,0,1,null,h)),e.sb(17,16384,null,0,c.i,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.ib(16777216,null,0,1,null,m)),e.sb(19,16384,null,0,c.i,[e.O,e.L],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,3,0,"primary"),l(n,15,0,!u.user_id),l(n,17,0,u.user_id&&!u.newPassword),l(n,19,0,u.user_id&&u.newPassword)}),null)}function v(l){return e.Lb(0,[(l()(),e.tb(0,0,null,null,1,"app-forgot",[],null,null,null,f,g)),e.sb(1,114688,null,0,s,[i.a,r.Qb,r.Jb,r.Hb],null,null)],(function(l,n){l(n,1,0)}),null)}var F=e.pb("app-forgot",s,v,{},{},[]),C=u("ZYCi");u.d(n,"ForgotPageModuleNgFactory",(function(){return k}));var k=e.qb(o,[],(function(l){return e.Cb([e.Db(512,e.j,e.bb,[[8,[a.a,F]],[3,e.j],e.x]),e.Db(4608,c.k,c.j,[e.u,[2,c.q]]),e.Db(4608,d.l,d.l,[]),e.Db(4608,r.b,r.b,[e.z,e.g]),e.Db(4608,r.Ib,r.Ib,[r.b,e.j,e.q]),e.Db(4608,r.Lb,r.Lb,[r.b,e.j,e.q]),e.Db(1073742336,c.b,c.b,[]),e.Db(1073742336,d.k,d.k,[]),e.Db(1073742336,d.b,d.b,[]),e.Db(1073742336,r.Fb,r.Fb,[]),e.Db(1073742336,C.p,C.p,[[2,C.u],[2,C.m]]),e.Db(1073742336,o,o,[]),e.Db(1024,C.k,(function(){return[[{path:"",component:s}]]}),[])])}))}}]);