(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{OXgS:function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),o=u("mrSG"),e=u("r28Q"),i=u("ZZ/e"),s=function(){function l(l,n,u,t,o,e){var i=this;this.toastController=l,this.alertController=n,this.server=u,this.nav=t,this.events=o,this.loadingController=e,this.status=3,this.data=JSON.parse(localStorage.getItem("odata")),this.status=this.data.st,setInterval((function(){"1"==localStorage.getItem("newCharge")&&(localStorage.setItem("newCharge","0"),i.data=JSON.parse(localStorage.getItem("odata")),console.log(i.data),i.status=i.data.st)}),3e3)}return l.prototype.ionViewWillEnter=function(){localStorage.getItem("app_text")&&null!=localStorage.getItem("app_text")&&(this.text=JSON.parse(localStorage.getItem("app_text")))},l.prototype.ngOnInit=function(){},l.prototype.presentAlertConfirm=function(l,n){return o.b(this,void 0,void 0,(function(){var u=this;return o.e(this,(function(t){switch(t.label){case 0:return[4,this.alertController.create({header:"Confirm!",message:"\xbfEstas seguro?",mode:"ios",buttons:[{text:"Cancelar",role:"cancel",cssClass:"secondary",handler:function(l){console.log("Confirm Cancel: blah")}},{text:"Si",handler:function(){u.startRide(l,n)}}]})];case 1:return[4,t.sent().present()];case 2:return t.sent(),[2]}}))}))},l.prototype.startRide=function(l,n){return o.b(this,void 0,void 0,(function(){var u,t=this;return o.e(this,(function(o){switch(o.label){case 0:return[4,this.loadingController.create({message:"Por favor espere..."})];case 1:return[4,(u=o.sent()).present()];case 2:return o.sent(),this.server.startRide(l,n).subscribe((function(l){6==n?(t.presentToast("Env\xedo completado con \xe9xito."),t.nav.navigateRoot("home")):1==n?(t.presentToast("Confirmo la orden."),t.status=1):5==n&&(t.presentToast("Inicia pedido."),t.status=5),u.dismiss()})),[2]}}))}))},l.prototype.presentToast=function(l){return o.b(this,void 0,void 0,(function(){return o.e(this,(function(n){switch(n.label){case 0:return[4,this.toastController.create({message:l,duration:3e3,position:"top",mode:"ios",color:"dark"})];case 1:return n.sent().present(),[2]}}))}))},l.prototype.detail=function(l){localStorage.setItem("odata",JSON.stringify(l)),this.nav.navigateForward("/detail")},l}(),b=function(){return function(){}}(),r=u("pMnS"),a=u("oBZk"),c=u("Ip0R"),d=t.rb({encapsulation:0,styles:[["ion-content[_ngcontent-%COMP%]{--background:#f7f7f7}"]],data:{}});function f(l){return t.Lb(0,[(l()(),t.tb(0,0,null,null,6,"ion-fab",[["horizontal","end"],["slot","fixed"],["vertical","bottom"]],null,null,null,a.T,a.m)),t.sb(1,49152,null,0,i.x,[t.h,t.k,t.z],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(l()(),t.tb(2,0,null,0,4,"a",[["target","_blank"]],[[8,"href",4]],null,null,null,null)),(l()(),t.tb(3,0,null,null,3,"ion-fab-button",[["color","danger"],["edge","true"]],null,null,null,a.S,a.n)),t.sb(4,49152,null,0,i.y,[t.h,t.k,t.z],{color:[0,"color"]},null),(l()(),t.tb(5,0,null,0,1,"ion-icon",[["name","pin"]],null,null,null,a.W,a.q)),t.sb(6,49152,null,0,i.D,[t.h,t.k,t.z],{name:[0,"name"]},null)],(function(l,n){l(n,1,0,"end","bottom"),l(n,4,0,"danger"),l(n,6,0,"pin")}),(function(l,n){var u=n.component;l(n,2,0,t.xb(2,"http://maps.google.com/?q=",u.data.user.lat,",",u.data.user.lng,""))}))}function h(l){return t.Lb(0,[(l()(),t.tb(0,0,null,null,6,"ion-fab",[["horizontal","end"],["slot","fixed"],["vertical","bottom"]],null,null,null,a.T,a.m)),t.sb(1,49152,null,0,i.x,[t.h,t.k,t.z],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(l()(),t.tb(2,0,null,0,4,"a",[["target","_blank"]],[[8,"href",4]],null,null,null,null)),(l()(),t.tb(3,0,null,null,3,"ion-fab-button",[["color","danger"],["edge","true"]],null,null,null,a.S,a.n)),t.sb(4,49152,null,0,i.y,[t.h,t.k,t.z],{color:[0,"color"]},null),(l()(),t.tb(5,0,null,0,1,"ion-icon",[["name","pin"]],null,null,null,a.W,a.q)),t.sb(6,49152,null,0,i.D,[t.h,t.k,t.z],{name:[0,"name"]},null)],(function(l,n){l(n,1,0,"end","bottom"),l(n,4,0,"danger"),l(n,6,0,"pin")}),(function(l,n){var u=n.component;l(n,2,0,t.xb(2,"http://maps.google.com/?q=",u.data.lat,",",u.data.lng,""))}))}function p(l){return t.Lb(0,[(l()(),t.tb(0,0,null,null,7,"ion-item",[["style","font-size: 12px"],["text-wrap",""]],null,null,null,a.Y,a.s)),t.sb(1,49152,null,0,i.I,[t.h,t.k,t.z],null,null),t.sb(2,16384,null,0,i.d,[t.k],null,null),(l()(),t.tb(3,0,null,0,2,"ion-label",[],null,null,null,a.Z,a.t)),t.sb(4,49152,null,0,i.O,[t.h,t.k,t.z],null,null),(l()(),t.Kb(5,0,[""," "," ",""])),(l()(),t.tb(6,0,null,0,1,"ion-icon",[["color","danger"],["name","restaurant"],["slot","start"]],null,null,null,a.W,a.q)),t.sb(7,49152,null,0,i.D,[t.h,t.k,t.z],{color:[0,"color"],name:[1,"name"]},null)],(function(l,n){l(n,7,0,"danger","restaurant")}),(function(l,n){l(n,5,0,n.context.$implicit.qty,n.context.$implicit.type,n.context.$implicit.item)}))}function z(l){return t.Lb(0,[(l()(),t.tb(0,0,null,null,2,"ion-col",[["size","6"]],null,null,null,a.Q,a.k)),t.sb(1,49152,null,0,i.u,[t.h,t.k,t.z],{size:[0,"size"]},null),(l()(),t.Kb(-1,0,["Efectivo"]))],(function(l,n){l(n,1,0,"6")}),null)}function k(l){return t.Lb(0,[(l()(),t.tb(0,0,null,null,2,"ion-col",[["size","6"]],null,null,null,a.Q,a.k)),t.sb(1,49152,null,0,i.u,[t.h,t.k,t.z],{size:[0,"size"]},null),(l()(),t.Kb(-1,0,["Pago en l\xednea"]))],(function(l,n){l(n,1,0,"6")}),null)}function m(l){return t.Lb(0,[(l()(),t.tb(0,0,null,null,79,"ion-content",[],null,null,null,a.R,a.l)),t.sb(1,49152,null,0,i.v,[t.h,t.k,t.z],null,null),(l()(),t.ib(16777216,null,0,1,null,f)),t.sb(3,16384,null,0,c.i,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.ib(16777216,null,0,1,null,h)),t.sb(5,16384,null,0,c.i,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.tb(6,0,null,0,0,"b",[["style","padding: 10px 20px"]],null,null,null,null,null)),(l()(),t.tb(7,0,null,0,15,"ion-card",[["mode","ios"],["style","background-color: white"]],null,null,null,a.P,a.f)),t.sb(8,49152,null,0,i.n,[t.h,t.k,t.z],{mode:[0,"mode"]},null),(l()(),t.tb(9,0,null,0,7,"ion-card-header",[],null,null,null,a.M,a.h)),t.sb(10,49152,null,0,i.p,[t.h,t.k,t.z],null,null),(l()(),t.tb(11,0,null,0,2,"ion-card-title",[],null,null,null,a.O,a.j)),t.sb(12,49152,null,0,i.r,[t.h,t.k,t.z],null,null),(l()(),t.Kb(13,0,["",""])),(l()(),t.tb(14,0,null,0,2,"ion-card-subtitle",[],null,null,null,a.N,a.i)),t.sb(15,49152,null,0,i.q,[t.h,t.k,t.z],null,null),(l()(),t.Kb(16,0,["\xa0",""])),(l()(),t.tb(17,0,null,0,5,"ion-card-content",[],null,null,null,a.L,a.g)),t.sb(18,49152,null,0,i.o,[t.h,t.k,t.z],null,null),(l()(),t.tb(19,0,null,0,3,"ion-list",[["lines","none"]],null,null,null,a.bb,a.u)),t.sb(20,49152,null,0,i.P,[t.h,t.k,t.z],{lines:[0,"lines"]},null),(l()(),t.ib(16777216,null,0,1,null,p)),t.sb(22,278528,null,0,c.h,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null),(l()(),t.tb(23,0,null,0,56,"div",[["class","ion-padding"]],null,null,null,null,null)),(l()(),t.tb(24,0,null,null,8,"ion-row",[["style","border-bottom: 1px solid #f9f9f9;padding: 5px 5px"]],null,null,null,a.hb,a.B)),t.sb(25,49152,null,0,i.kb,[t.h,t.k,t.z],null,null),(l()(),t.tb(26,0,null,0,3,"ion-col",[["size","6"]],null,null,null,a.Q,a.k)),t.sb(27,49152,null,0,i.u,[t.h,t.k,t.z],{size:[0,"size"]},null),(l()(),t.tb(28,0,null,0,1,"b",[],null,null,null,null,null)),(l()(),t.Kb(-1,null,["Estatus"])),(l()(),t.tb(30,0,null,0,2,"ion-col",[["size","6"]],null,null,null,a.Q,a.k)),t.sb(31,49152,null,0,i.u,[t.h,t.k,t.z],{size:[0,"size"]},null),(l()(),t.Kb(32,0,["",""])),(l()(),t.tb(33,0,null,null,8,"ion-row",[["style","border-bottom: 1px solid #f9f9f9;padding: 5px 5px"]],null,null,null,a.hb,a.B)),t.sb(34,49152,null,0,i.kb,[t.h,t.k,t.z],null,null),(l()(),t.tb(35,0,null,0,3,"ion-col",[["size","6"]],null,null,null,a.Q,a.k)),t.sb(36,49152,null,0,i.u,[t.h,t.k,t.z],{size:[0,"size"]},null),(l()(),t.tb(37,0,null,0,1,"b",[],null,null,null,null,null)),(l()(),t.Kb(38,null,["",""])),(l()(),t.tb(39,0,null,0,2,"ion-col",[["size","6"]],null,null,null,a.Q,a.k)),t.sb(40,49152,null,0,i.u,[t.h,t.k,t.z],{size:[0,"size"]},null),(l()(),t.Kb(41,0,["",""])),(l()(),t.tb(42,0,null,null,9,"ion-row",[["style","border-bottom: 1px solid #f9f9f9;padding: 5px 5px"]],null,null,null,a.hb,a.B)),t.sb(43,49152,null,0,i.kb,[t.h,t.k,t.z],null,null),(l()(),t.tb(44,0,null,0,3,"ion-col",[["size","6"]],null,null,null,a.Q,a.k)),t.sb(45,49152,null,0,i.u,[t.h,t.k,t.z],{size:[0,"size"]},null),(l()(),t.tb(46,0,null,0,1,"b",[],null,null,null,null,null)),(l()(),t.Kb(47,null,["",""])),(l()(),t.tb(48,0,null,0,3,"ion-col",[["size","6"]],null,null,null,a.Q,a.k)),t.sb(49,49152,null,0,i.u,[t.h,t.k,t.z],{size:[0,"size"]},null),(l()(),t.tb(50,0,null,0,1,"a",[],[[8,"href",4]],null,null,null,null)),(l()(),t.Kb(51,null,["",""])),(l()(),t.tb(52,0,null,null,8,"ion-row",[["style","border-bottom: 1px solid #f9f9f9;padding: 5px 5px"]],null,null,null,a.hb,a.B)),t.sb(53,49152,null,0,i.kb,[t.h,t.k,t.z],null,null),(l()(),t.tb(54,0,null,0,3,"ion-col",[["size","6"]],null,null,null,a.Q,a.k)),t.sb(55,49152,null,0,i.u,[t.h,t.k,t.z],{size:[0,"size"]},null),(l()(),t.tb(56,0,null,0,1,"b",[],null,null,null,null,null)),(l()(),t.Kb(57,null,["",""])),(l()(),t.tb(58,0,null,0,2,"ion-col",[["size","6"]],null,null,null,a.Q,a.k)),t.sb(59,49152,null,0,i.u,[t.h,t.k,t.z],{size:[0,"size"]},null),(l()(),t.Kb(60,0,["",""])),(l()(),t.tb(61,0,null,null,8,"ion-row",[["style","border-bottom: 1px solid #f9f9f9;padding: 5px 5px"]],null,null,null,a.hb,a.B)),t.sb(62,49152,null,0,i.kb,[t.h,t.k,t.z],null,null),(l()(),t.tb(63,0,null,0,3,"ion-col",[["size","6"]],null,null,null,a.Q,a.k)),t.sb(64,49152,null,0,i.u,[t.h,t.k,t.z],{size:[0,"size"]},null),(l()(),t.tb(65,0,null,0,1,"b",[],null,null,null,null,null)),(l()(),t.Kb(66,null,["",""])),(l()(),t.tb(67,0,null,0,2,"ion-col",[["size","6"]],null,null,null,a.Q,a.k)),t.sb(68,49152,null,0,i.u,[t.h,t.k,t.z],{size:[0,"size"]},null),(l()(),t.Kb(69,0,["","",""])),(l()(),t.tb(70,0,null,null,9,"ion-row",[["style","padding: 5px 5px"]],null,null,null,a.hb,a.B)),t.sb(71,49152,null,0,i.kb,[t.h,t.k,t.z],null,null),(l()(),t.tb(72,0,null,0,3,"ion-col",[["size","6"]],null,null,null,a.Q,a.k)),t.sb(73,49152,null,0,i.u,[t.h,t.k,t.z],{size:[0,"size"]},null),(l()(),t.tb(74,0,null,0,1,"b",[],null,null,null,null,null)),(l()(),t.Kb(75,null,["",""])),(l()(),t.ib(16777216,null,0,1,null,z)),t.sb(77,16384,null,0,c.i,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.ib(16777216,null,0,1,null,k)),t.sb(79,16384,null,0,c.i,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,3,0,5==u.status),l(n,5,0,3==u.status),l(n,8,0,"ios"),l(n,20,0,"none"),l(n,22,0,u.data.items),l(n,27,0,"6"),l(n,31,0,"6"),l(n,36,0,"6"),l(n,40,0,"6"),l(n,45,0,"6"),l(n,49,0,"6"),l(n,55,0,"6"),l(n,59,0,"6"),l(n,64,0,"6"),l(n,68,0,"6"),l(n,73,0,"6"),l(n,77,0,1==u.data.pay),l(n,79,0,1!=u.data.pay)}),(function(l,n){var u=n.component;l(n,13,0,u.data.store),l(n,16,0,u.data.date),l(n,32,0,u.data.status),l(n,38,0,u.text.d_user),l(n,41,0,u.data.user.name),l(n,47,0,u.text.d_phone),l(n,50,0,t.xb(1,"tel:",u.data.user.phone,"")),l(n,51,0,u.data.user.phone),l(n,57,0,u.text.d_address),l(n,60,0,u.data.user.address),l(n,66,0,u.text.d_total_amount),l(n,69,0,u.data.currency,u.data.total),l(n,75,0,u.text.d_pay)}))}function g(l){return t.Lb(0,[(l()(),t.tb(0,0,null,null,6,"ion-row",[],null,null,null,a.hb,a.B)),t.sb(1,49152,null,0,i.kb,[t.h,t.k,t.z],null,null),(l()(),t.tb(2,0,null,0,4,"ion-col",[["size","12"]],null,null,null,a.Q,a.k)),t.sb(3,49152,null,0,i.u,[t.h,t.k,t.z],{size:[0,"size"]},null),(l()(),t.tb(4,0,null,0,2,"ion-button",[["mode","ios"],["size","block"]],null,[[null,"click"]],(function(l,n,u){var t=!0,o=l.component;return"click"===n&&(t=!1!==o.presentAlertConfirm(o.data.id,1)&&t),t}),a.J,a.d)),t.sb(5,49152,null,0,i.l,[t.h,t.k,t.z],{mode:[0,"mode"],size:[1,"size"]},null),(l()(),t.Kb(-1,0,["Confirmar Pedido"]))],(function(l,n){l(n,3,0,"12"),l(n,5,0,"ios","block")}),null)}function x(l){return t.Lb(0,[(l()(),t.tb(0,0,null,null,6,"ion-row",[],null,null,null,a.hb,a.B)),t.sb(1,49152,null,0,i.kb,[t.h,t.k,t.z],null,null),(l()(),t.tb(2,0,null,0,4,"ion-col",[["size","12"]],null,null,null,a.Q,a.k)),t.sb(3,49152,null,0,i.u,[t.h,t.k,t.z],{size:[0,"size"]},null),(l()(),t.tb(4,0,null,0,2,"ion-button",[["color","success"],["mode","ios"],["size","block"]],null,[[null,"click"]],(function(l,n,u){var t=!0,o=l.component;return"click"===n&&(t=!1!==o.presentAlertConfirm(o.data.id,5)&&t),t}),a.J,a.d)),t.sb(5,49152,null,0,i.l,[t.h,t.k,t.z],{color:[0,"color"],mode:[1,"mode"],size:[2,"size"]},null),(l()(),t.Kb(-1,0,["Iniciar Pedido"]))],(function(l,n){l(n,3,0,"12"),l(n,5,0,"success","ios","block")}),null)}function v(l){return t.Lb(0,[(l()(),t.tb(0,0,null,null,6,"ion-row",[],null,null,null,a.hb,a.B)),t.sb(1,49152,null,0,i.kb,[t.h,t.k,t.z],null,null),(l()(),t.tb(2,0,null,0,4,"ion-col",[["size","12"]],null,null,null,a.Q,a.k)),t.sb(3,49152,null,0,i.u,[t.h,t.k,t.z],{size:[0,"size"]},null),(l()(),t.tb(4,0,null,0,2,"ion-button",[["color","success"],["mode","ios"],["size","block"]],null,[[null,"click"]],(function(l,n,u){var t=!0,o=l.component;return"click"===n&&(t=!1!==o.presentAlertConfirm(o.data.id,6)&&t),t}),a.J,a.d)),t.sb(5,49152,null,0,i.l,[t.h,t.k,t.z],{color:[0,"color"],mode:[1,"mode"],size:[2,"size"]},null),(l()(),t.Kb(-1,0,["Completar Pedido"]))],(function(l,n){l(n,3,0,"12"),l(n,5,0,"success","ios","block")}),null)}function I(l){return t.Lb(0,[(l()(),t.tb(0,0,null,null,7,"ion-footer",[["no-border",""]],null,null,null,a.U,a.o)),t.sb(1,49152,null,0,i.A,[t.h,t.k,t.z],null,null),(l()(),t.ib(16777216,null,0,1,null,g)),t.sb(3,16384,null,0,c.i,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.ib(16777216,null,0,1,null,x)),t.sb(5,16384,null,0,c.i,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.ib(16777216,null,0,1,null,v)),t.sb(7,16384,null,0,c.i,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,3,0,0==u.status),l(n,5,0,4==u.status),l(n,7,0,5==u.status)}),null)}function y(l){return t.Lb(0,[(l()(),t.tb(0,0,null,null,13,"ion-header",[["no-border",""]],null,null,null,a.V,a.p)),t.sb(1,49152,null,0,i.C,[t.h,t.k,t.z],null,null),(l()(),t.tb(2,0,null,0,11,"ion-toolbar",[["color","primary"]],null,null,null,a.lb,a.F)),t.sb(3,49152,null,0,i.Db,[t.h,t.k,t.z],{color:[0,"color"]},null),(l()(),t.tb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,a.K,a.e)),t.sb(5,49152,null,0,i.m,[t.h,t.k,t.z],null,null),(l()(),t.tb(6,0,null,0,2,"ion-back-button",[],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==t.Fb(l,8).onClick(u)&&o),o}),a.H,a.b)),t.sb(7,49152,null,0,i.h,[t.h,t.k,t.z],null,null),t.sb(8,16384,null,0,i.i,[[2,i.jb],i.Jb],null,null),(l()(),t.tb(9,0,null,0,4,"ion-title",[],null,null,null,a.kb,a.E)),t.sb(10,49152,null,0,i.Bb,[t.h,t.k,t.z],null,null),(l()(),t.Kb(-1,0,[" Detalle de la orden "])),(l()(),t.tb(12,0,null,0,1,"span",[["style","float: right"]],null,null,null,null,null)),(l()(),t.Kb(13,null,["#",""])),(l()(),t.ib(16777216,null,null,1,null,m)),t.sb(15,16384,null,0,c.i,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.ib(16777216,null,null,1,null,I)),t.sb(17,16384,null,0,c.i,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,3,0,"primary"),l(n,15,0,u.data&&u.text),l(n,17,0,u.text)}),(function(l,n){l(n,13,0,n.component.data.id)}))}function C(l){return t.Lb(0,[(l()(),t.tb(0,0,null,null,1,"app-detail",[],null,null,null,y,d)),t.sb(1,114688,null,0,s,[i.Qb,i.a,e.a,i.Jb,i.e,i.Hb],null,null)],(function(l,n){l(n,1,0)}),null)}var L=t.pb("app-detail",s,C,{},{},[]),w=u("gIcY"),K=u("ZYCi");u.d(n,"DetailPageModuleNgFactory",(function(){return O}));var O=t.qb(b,[],(function(l){return t.Cb([t.Db(512,t.j,t.bb,[[8,[r.a,L]],[3,t.j],t.x]),t.Db(4608,c.k,c.j,[t.u,[2,c.q]]),t.Db(4608,w.l,w.l,[]),t.Db(4608,i.b,i.b,[t.z,t.g]),t.Db(4608,i.Ib,i.Ib,[i.b,t.j,t.q]),t.Db(4608,i.Lb,i.Lb,[i.b,t.j,t.q]),t.Db(1073742336,c.b,c.b,[]),t.Db(1073742336,w.k,w.k,[]),t.Db(1073742336,w.b,w.b,[]),t.Db(1073742336,i.Fb,i.Fb,[]),t.Db(1073742336,K.p,K.p,[[2,K.u],[2,K.m]]),t.Db(1073742336,b,b,[]),t.Db(1024,K.k,(function(){return[[{path:"",component:s}]]}),[])])}))}}]);