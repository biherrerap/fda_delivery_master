(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{EOjV:function(t,e,n){"use strict";n.r(e),n.d(e,"ion_route",(function(){return u})),n.d(e,"ion_route_redirect",(function(){return s})),n.d(e,"ion_router",(function(){return k})),n.d(e,"ion_router_link",(function(){return S}));var r=n("mrSG"),o=n("0t5z"),i=(n("ttJE"),n("N8eg")),a=n("Jky2"),u=function(){function t(t){Object(o.l)(this,t),this.url="",this.ionRouteDataChanged=Object(o.d)(this,"ionRouteDataChanged",7)}return t.prototype.onUpdate=function(t){this.ionRouteDataChanged.emit(t)},t.prototype.onComponentProps=function(t,e){if(t!==e){var n=t?Object.keys(t):[],r=e?Object.keys(e):[];if(n.length===r.length)for(var o=0,i=n;o<i.length;o++){var a=i[o];if(t[a]!==e[a])return void this.onUpdate(t)}else this.onUpdate(t)}},t.prototype.connectedCallback=function(){this.ionRouteDataChanged.emit()},Object.defineProperty(t,"watchers",{get:function(){return{url:["onUpdate"],component:["onUpdate"],componentProps:["onComponentProps"]}},enumerable:!0,configurable:!0}),t}(),s=function(){function t(t){Object(o.l)(this,t),this.ionRouteRedirectChanged=Object(o.d)(this,"ionRouteRedirectChanged",7)}return t.prototype.propDidChange=function(){this.ionRouteRedirectChanged.emit()},t.prototype.connectedCallback=function(){this.ionRouteRedirectChanged.emit()},Object.defineProperty(t,"watchers",{get:function(){return{from:["propDidChange"],to:["propDidChange"]}},enumerable:!0,configurable:!0}),t}(),c=function(t){return"/"+t.filter((function(t){return t.length>0})).join("/")},h=function(t){if(null==t)return[""];var e=t.split("/").map((function(t){return t.trim()})).filter((function(t){return t.length>0}));return 0===e.length?[""]:e},l=function(t,e,n,o,i){return void 0===i&&(i=!1),Object(r.b)(void 0,void 0,void 0,(function(){var a,u,s,c;return Object(r.e)(this,(function(r){switch(r.label){case 0:return r.trys.push([0,6,,7]),a=d(t),o>=e.length||!a?[2,i]:[4,a.componentOnReady()];case 1:return r.sent(),[4,a.setRouteId((u=e[o]).id,u.params,n)];case 2:return(s=r.sent()).changed&&(n="root",i=!0),[4,l(s.element,e,n,o+1,i)];case 3:return i=r.sent(),s.markVisible?[4,s.markVisible()]:[3,5];case 4:r.sent(),r.label=5;case 5:return[2,i];case 6:return c=r.sent(),console.error(c),[2,!1];case 7:return[2]}}))}))},f=":not([no-router]) ion-nav, :not([no-router]) ion-tabs, :not([no-router]) ion-router-outlet",d=function(t){if(t)return t.matches(f)?t:t.querySelector(f)||void 0},p=function(t,e){return e.find((function(e){return function(t,e){var n=e.from;if(void 0===e.to)return!1;if(n.length>t.length)return!1;for(var r=0;r<n.length;r++){var o=n[r];if("*"===o)return!0;if(o!==t[r])return!1}return n.length===t.length}(t,e)}))},g=function(t,e){for(var n=Math.min(t.length,e.length),r=0;r<n&&t[r].toLowerCase()===e[r].id;r++);return r},v=function(t,e){for(var n,r=new w(t),o=!1,i=0;i<e.length;i++){var a=e[i].path;if(""===a[0])o=!0;else{for(var u=0,s=a;u<s.length;u++){var c=s[u],h=r.next();if(":"===c[0]){if(""===h)return null;((n=n||[])[i]||(n[i]={}))[c.slice(1)]=h}else if(h!==c)return null}o=!1}}return o&&o!==(""===r.next())?null:n?e.map((function(t,e){return{id:t.id,path:t.path,params:b(t.params,n[e])}})):e},b=function(t,e){return!t&&e?e:t&&!e?t:t&&e?Object.assign(Object.assign({},t),e):void 0},m=function(t){for(var e=1,n=1,r=0,o=t;r<o.length;r++)for(var i=0,a=o[r].path;i<a.length;i++){var u=a[i];":"===u[0]?e+=Math.pow(1,n):""!==u&&(e+=Math.pow(2,n)),n++}return e},w=function(){function t(t){this.path=t.slice()}return t.prototype.next=function(){return this.path.length>0?this.path.shift():""},t}(),y=function(t){return Array.from(t.children).filter((function(t){return"ION-ROUTE-REDIRECT"===t.tagName})).map((function(t){var e=R(t,"to");return{from:h(R(t,"from")),to:null==e?void 0:h(e)}}))},O=function(t){return C(j(t))},j=function(t,e){return void 0===e&&(e=t),Array.from(e.children).filter((function(t){return"ION-ROUTE"===t.tagName&&t.component})).map((function(e){var n=R(e,"component");if(null==n)throw new Error("component missing in ion-route");return{path:h(R(e,"url")),id:n.toLowerCase(),params:e.componentProps,children:j(t,e)}}))},R=function(t,e){return e in t?t[e]:t.hasAttribute(e)?t.getAttribute(e):null},C=function(t){for(var e=[],n=0,r=t;n<r.length;n++)P([],e,r[n]);return e},P=function(t,e,n){var r=t.slice();if(r.push({id:n.id,path:n.path,params:n.params}),0!==n.children.length)for(var o=0,i=n.children;o<i.length;o++)P(r,e,i[o]);else e.push(r)},k=function(){function t(t){Object(o.l)(this,t),this.previousPath=null,this.busy=!1,this.state=0,this.lastState=0,this.root="/",this.useHash=!0,this.ionRouteWillChange=Object(o.d)(this,"ionRouteWillChange",7),this.ionRouteDidChange=Object(o.d)(this,"ionRouteDidChange",7)}return t.prototype.componentWillLoad=function(){return Object(r.b)(this,void 0,void 0,(function(){return Object(r.e)(this,(function(t){switch(t.label){case 0:return console.debug("[ion-router] router will load"),[4,d(document.body)?Promise.resolve():new Promise((function(t){window.addEventListener("ionNavWillLoad",t,{once:!0})}))];case 1:return t.sent(),console.debug("[ion-router] found nav"),[4,this.onRoutesChanged()];case 2:return t.sent(),[2]}}))}))},t.prototype.componentDidLoad=function(){window.addEventListener("ionRouteRedirectChanged",Object(i.g)(this.onRedirectChanged.bind(this),10)),window.addEventListener("ionRouteDataChanged",Object(i.g)(this.onRoutesChanged.bind(this),100))},t.prototype.onPopState=function(){var t=this.historyDirection(),e=this.getPath();return console.debug("[ion-router] URL changed -> update nav",e,t),this.writeNavStateRoot(e,t)},t.prototype.onBackButton=function(t){var e=this;t.detail.register(0,(function(){return e.back()}))},t.prototype.push=function(t,e){void 0===e&&(e="forward"),t.startsWith(".")&&(t=new URL(t,window.location.href).pathname),console.debug("[ion-router] URL pushed -> updating nav",t,e);var n=h(t);return this.setPath(n,e),this.writeNavStateRoot(n,e)},t.prototype.back=function(){return window.history.back(),Promise.resolve(this.waitPromise)},t.prototype.printDebug=function(){return Object(r.b)(this,void 0,void 0,(function(){return Object(r.e)(this,(function(t){return console.debug("CURRENT PATH",this.getPath()),console.debug("PREVIOUS PATH",this.previousPath),function(t){console.group("[ion-core] ROUTES["+t.length+"]");for(var e=function(t){var e=[];t.forEach((function(t){return e.push.apply(e,t.path)}));var n=t.map((function(t){return t.id}));console.debug("%c "+c(e),"font-weight: bold; padding-left: 20px","=>\t","("+n.join(", ")+")")},n=0,r=t;n<r.length;n++)e(r[n]);console.groupEnd()}(O(this.el)),function(t){console.group("[ion-core] REDIRECTS["+t.length+"]");for(var e=0,n=t;e<n.length;e++){var r=n[e];r.to&&console.debug("FROM: ","$c "+c(r.from),"font-weight: bold"," TO: ","$c "+c(r.to),"font-weight: bold")}console.groupEnd()}(y(this.el)),[2]}))}))},t.prototype.navChanged=function(t){return Object(r.b)(this,void 0,void 0,(function(){var e,n,o,i,a,u;return Object(r.e)(this,(function(s){switch(s.label){case 0:return this.busy?(console.warn("[ion-router] router is busy, navChanged was cancelled"),[2,!1]):[4,(c=window.document.body,Object(r.b)(void 0,void 0,void 0,(function(){var t,e,n,o;return Object(r.e)(this,(function(r){switch(r.label){case 0:t=[],n=c,r.label=1;case 1:return(e=d(n))?[4,e.getRouteId()]:[3,3];case 2:return(o=r.sent())?(n=o.element,o.element=void 0,t.push(o),[3,4]):[3,5];case 3:return[3,5];case 4:return[3,1];case 5:return[2,{ids:t,outlet:e}]}}))})))];case 1:return e=s.sent(),n=e.ids,o=e.outlet,i=O(this.el),(a=function(t,e){for(var n=null,r=0,o=t.map((function(t){return t.id})),i=0,a=e;i<a.length;i++){var u=a[i],s=g(o,u);s>r&&(n=u,r=s)}return n?n.map((function(e,n){return{id:e.id,path:e.path,params:b(e.params,t[n]&&t[n].params)}})):null}(n,i))?(u=function(t){for(var e=[],n=0,r=t;n<r.length;n++)for(var o=r[n],i=0,a=o.path;i<a.length;i++){var u=a[i];if(":"===u[0]){var s=o.params&&o.params[u.slice(1)];if(!s)return null;e.push(s)}else""!==u&&e.push(u)}return e}(a))?(console.debug("[ion-router] nav changed -> update URL",n,u),this.setPath(u,t),[4,this.safeWriteNavState(o,a,"root",u,null,n.length)]):(console.warn("[ion-router] router could not match path because some required param is missing"),[2,!1]):(console.warn("[ion-router] no matching URL for ",n.map((function(t){return t.id}))),[2,!1]);case 2:return s.sent(),[2,!0]}var c}))}))},t.prototype.onRedirectChanged=function(){var t=this.getPath();t&&p(t,y(this.el))&&this.writeNavStateRoot(t,"root")},t.prototype.onRoutesChanged=function(){return this.writeNavStateRoot(this.getPath(),"root")},t.prototype.historyDirection=function(){var t=window;null===t.history.state&&(this.state++,t.history.replaceState(this.state,t.document.title,t.document.location&&t.document.location.href));var e=t.history.state,n=this.lastState;return this.lastState=e,e>n?"forward":e<n?"back":"root"},t.prototype.writeNavStateRoot=function(t,e){return Object(r.b)(this,void 0,void 0,(function(){var n,o,i,a,u;return Object(r.e)(this,(function(r){return t?(n=y(this.el),o=p(t,n),i=null,o&&(this.setPath(o.to,e),i=o.from,t=o.to),a=O(this.el),(u=function(t,e){for(var n=null,r=0,o=0,i=e;o<i.length;o++){var a=v(t,i[o]);if(null!==a){var u=m(a);u>r&&(r=u,n=a)}}return n}(t,a))?[2,this.safeWriteNavState(document.body,u,e,t,i)]:(console.error("[ion-router] the path does not match any route"),[2,!1])):(console.error("[ion-router] URL is not part of the routing set"),[2,!1])}))}))},t.prototype.safeWriteNavState=function(t,e,n,o,i,a){return void 0===a&&(a=0),Object(r.b)(this,void 0,void 0,(function(){var u,s,c;return Object(r.e)(this,(function(r){switch(r.label){case 0:return[4,this.lock()];case 1:u=r.sent(),s=!1,r.label=2;case 2:return r.trys.push([2,4,,5]),[4,this.writeNavState(t,e,n,o,i,a)];case 3:return s=r.sent(),[3,5];case 4:return c=r.sent(),console.error(c),[3,5];case 5:return u(),[2,s]}}))}))},t.prototype.lock=function(){return Object(r.b)(this,void 0,void 0,(function(){var t,e;return Object(r.e)(this,(function(n){switch(n.label){case 0:return t=this.waitPromise,this.waitPromise=new Promise((function(t){return e=t})),void 0===t?[3,2]:[4,t];case 1:n.sent(),n.label=2;case 2:return[2,e]}}))}))},t.prototype.writeNavState=function(t,e,n,o,i,a){return void 0===a&&(a=0),Object(r.b)(this,void 0,void 0,(function(){var u,s;return Object(r.e)(this,(function(r){switch(r.label){case 0:return this.busy?(console.warn("[ion-router] router is busy, transition was cancelled"),[2,!1]):(this.busy=!0,(u=this.routeChangeEvent(o,i))&&this.ionRouteWillChange.emit(u),[4,l(t,e,n,a)]);case 1:return s=r.sent(),this.busy=!1,s&&console.debug("[ion-router] route changed",o),u&&this.ionRouteDidChange.emit(u),[2,s]}}))}))},t.prototype.setPath=function(t,e){this.state++,function(t,e,n,o,i,a){var u=c(Object(r.j)(h(e),o));n&&(u="#"+u),"forward"===i?t.pushState(a,"",u):t.replaceState(a,"",u)}(window.history,this.root,this.useHash,t,e,this.state)},t.prototype.getPath=function(){return function(t,e,n){var r=t.pathname;if(n){var o=t.hash;r="#"===o[0]?o.slice(1):""}return function(t,e){if(t.length>e.length)return null;if(t.length<=1&&""===t[0])return e;for(var n=0;n<t.length;n++)if(t[n].length>0&&t[n]!==e[n])return null;return e.length===t.length?[""]:e.slice(t.length)}(h(e),h(r))}(window.location,this.root,this.useHash)},t.prototype.routeChangeEvent=function(t,e){var n=this.previousPath,r=c(t);return this.previousPath=r,r===n?null:{from:n,redirectedFrom:e?c(e):null,to:r}},Object.defineProperty(t.prototype,"el",{get:function(){return Object(o.f)(this)},enumerable:!0,configurable:!0}),t}(),S=function(){function t(t){var e=this;Object(o.l)(this,t),this.routerDirection="forward",this.onClick=function(t){Object(a.d)(e.href,t,e.routerDirection)}}return t.prototype.render=function(){var t,e=Object(o.e)(this),n={href:this.href,rel:this.rel,target:this.target};return Object(o.i)(o.a,{onClick:this.onClick,class:Object.assign(Object.assign({},Object(a.a)(this.color)),(t={},t[e]=!0,t["ion-activatable"]=!0,t))},Object(o.i)("a",Object.assign({},n),Object(o.i)("slot",null)))},Object.defineProperty(t,"style",{get:function(){return":host{--background:transparent;--color:var(--ion-color-primary,#3880ff);background:var(--background);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}a{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit}"},enumerable:!0,configurable:!0}),t}()}}]);