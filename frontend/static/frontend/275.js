(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[275,236],{236:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return P}});var r=n(7294),o=n(5147),a=n(8324),c=n(3489),l=n(4051),i=n(5005),s=n(1863),u=n(9940);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(o,e);var t,n,r=(t=o,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=y(t);if(n){var o=y(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return d(this,e)});function o(){var e,t;f(this,o);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return d(t,(e=t=r.call.apply(r,[this].concat(a)),t.nameOfItem="автомобиль",t.itemInfo=function(e){return[e.manufacturer,e.model].join(" ")},e))}return o}(n(1437).Z),E=n(6593);function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,t,n){return(v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=k(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Z(e,t){return!t||"object"!==b(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(p,e);var t,n,u,m,f=(u=p,m=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=k(u);if(m){var n=k(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return Z(this,e)});function p(){var e,t;w(this,p);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return Z(t,(e=t=f.call.apply(f,[this].concat(r)),t.url="/testforjob/api/cars/",t.tooltipPlace="bottom",t.nameOfItem="Автомобиль",e))}return t=p,(n=[{key:"componentDidUpdate",value:function(e,t){v(k(p.prototype),"componentDidUpdate",this).call(this,e,t),e.owner!==this.props.owner&&this.getItems()}},{key:"render",value:function(){var e=this;return r.createElement("div",null,this.state.loading&&r.createElement(s.Z,null),this.state.showDeleteDialog&&r.createElement(h,{params:this.state,itemDelete:this.itemDelete}),r.createElement(E.Z,{messages:this.state.messages}),r.createElement(o.Z,{striped:!0,bordered:!0,hover:!0},r.createElement("thead",null,r.createElement("tr",null,r.createElement(a.Z,{key:1,placement:this.tooltipPlace,overlay:r.createElement(c.Z,{id:"tooltip-1"},"Нажмите для сортировки")},r.createElement("th",{id:"manufacturer",onClick:this.btnSortClick},r.createElement(l.Z,{id:"manufacturer"},"manufacturer"===this.state.sortedBy.name&&r.createElement("div",{id:"manufacturer",className:"ml-2"},this.arrow)," ",r.createElement("div",{id:"manufacturer",className:"ml-2"},"Производитель")))),r.createElement(a.Z,{key:2,placement:this.tooltipPlace,overlay:r.createElement(c.Z,{id:"tooltip-2"},"Нажмите для сортировки")},r.createElement("th",{id:"model",onClick:this.btnSortClick},r.createElement(l.Z,{id:"model"},"model"===this.state.sortedBy.name&&r.createElement("div",{id:"model",className:"ml-2"},this.arrow)," ",r.createElement("div",{id:"model",className:"ml-2"},"Модель")))),r.createElement(a.Z,{key:3,placement:this.tooltipPlace,overlay:r.createElement(c.Z,{id:"tooltip-3"},"Нажмите для сортировки")},r.createElement("th",{id:"production",onClick:this.btnSortClick},r.createElement(l.Z,{id:"production"},"production"===this.state.sortedBy.name&&r.createElement("div",{id:"production",className:"ml-2"},this.arrow)," ",r.createElement("div",{id:"production",className:"ml-2"},"Дата выпуска")))),r.createElement(a.Z,{key:4,placement:this.tooltipPlace,overlay:r.createElement(c.Z,{id:"tooltip-4"},"Нажмите для сортировки")},r.createElement("th",{id:"color",onClick:this.btnSortClick},r.createElement(l.Z,{id:"color"},"color"===this.state.sortedBy.name&&r.createElement("div",{id:"color",className:"ml-2"},this.arrow),r.createElement("div",{id:"color",className:"ml-2"},"Цвет")))),r.createElement(a.Z,{key:5,placement:this.tooltipPlace,overlay:r.createElement(c.Z,{id:"tooltip-5"},"Нажмите для сортировки")},r.createElement("th",{id:"power",onClick:this.btnSortClick},r.createElement(l.Z,{id:"power"},"power"===this.state.sortedBy.name&&r.createElement("div",{id:"power",className:"ml-2"},this.arrow)," ",r.createElement("div",{id:"power",className:"ml-2"},"Мощность")))),r.createElement(a.Z,{key:6,placement:this.tooltipPlace,overlay:r.createElement(c.Z,{id:"tooltip-6"},"Нажмите для сортировки")},r.createElement("th",{id:"mileage",onClick:this.btnSortClick},r.createElement(l.Z,{id:"mileage"},"mileage"===this.state.sortedBy.name&&r.createElement("div",{id:"mileage",className:"ml-2"},this.arrow)," ",r.createElement("div",{id:"mileage",className:"ml-2"},"Пробег")))),r.createElement("th",null))),r.createElement("tbody",null,this.state.items.map((function(t,n){return r.createElement("tr",{key:n},r.createElement("td",null,t.manufacturer),r.createElement("td",null,t.model),r.createElement("td",null,t.production),r.createElement("td",null,t.color),r.createElement("td",null,t.power),r.createElement("td",null,t.mileage),r.createElement("td",{style:{width:"100px"}},r.createElement(l.Z,null,r.createElement(a.Z,{key:7,placement:e.tooltipPlace,overlay:r.createElement(c.Z,{id:"tooltip-7"},"Редактировать")},r.createElement(i.Z,{value:t.id,variant:"primary",className:"ml-2",onClick:e.btnEditClick},"⟶")),r.createElement(a.Z,{key:8,placement:e.tooltipPlace,overlay:r.createElement(c.Z,{id:"tooltip-8"},"Удалить")},r.createElement(i.Z,{value:t.id,variant:"danger",className:"ml-2",onClick:e.btnDelClick},"x")))))})))))}}])&&g(t.prototype,n),p}(u.Z)},4275:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return k}});var r=n(7294),o=n(9669),a=n.n(o),c=n(4479),l=n(4051),i=n(2151),s=n(8324),u=n(3489),m=n(5005),f=n(1555),p=n(236),d=n(6593);function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function w(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function O(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Z(e){return(Z=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(k,e);var t,n,o,y,h=(o=k,y=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=Z(o);if(y){var n=Z(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return O(this,e)});function k(){var e,t;w(this,k);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return O(t,(e=t=h.call.apply(h,[this].concat(r)),t.state={messages:[],owner:{id:-10,cars:[],name:"",patronymic:"",last_name:"",gender:"",age:"",comment:""}},t.url="/testforjob/api/owner/",t.tooltipPlace="bottom",t.digitsOnly=function(e){var t=e.charCode;(t<48||t>57)&&e.preventDefault()},t.getErrors=function(e){return Object.keys(e).map((function(t){return{type:"error",message:e[t]}}))},t.getOwner=function(){a().post(t.url,{}).then((function(e){var n=E(E({},e.data),{},{id:e.data.id?e.data.id:-10});t.setState({owner:n})})).catch((function(e){t.setState({messages:t.getErrors(e.response.data)})}))},t.saveOwner=function(){a().post(t.url,{owner:t.state.owner}).then((function(e){t.setState({owner:e.data,messages:[{type:"success",message:"Информация о владельце сохранена"}]})})).catch((function(e){t.setState({messages:t.getErrors(e.response.data)})}))},t.changeOwner=function(e){var n;switch(e.target.name){case"gender-f":n=E(E({},t.state.owner),{},{gender:"f"});break;case"gender-m":n=E(E({},t.state.owner),{},{gender:"m"});break;default:n=E(E({},t.state.owner),{},b({},e.target.name,e.target.value))}t.setState({owner:n})},t.btnNewCarClick=function(){a().post(t.url,{btn_add:"",url:window.location.pathname,owner_pk:t.state.owner.id}).then((function(e){e.data.redirect&&(window.location.href=e.data.redirect)})).catch((function(e){t.setState({messages:t.getErrors(e.response.data)})}))},e))}return t=k,(n=[{key:"componentDidMount",value:function(){this.getOwner()}},{key:"render",value:function(){return r.createElement("div",null,r.createElement(d.Z,{messages:this.state.messages}),r.createElement(c.Z,null,r.createElement(c.Z.Title,null,"Автовладелец"),r.createElement(c.Z.Body,null,r.createElement(l.Z,null,r.createElement("div",{className:"col-5"},r.createElement(l.Z,null,r.createElement(i.Z.Label,{className:"col-4"},"Имя"),r.createElement("input",{className:"form-control col-6",name:"name",type:"text",value:this.state.owner.name?this.state.owner.name:"",onChange:this.changeOwner}),r.createElement(i.Z.Label,{className:"col-4"},"Отчество"),r.createElement("input",{className:"form-control col-6",name:"patronymic",type:"text",value:this.state.owner.patronymic?this.state.owner.patronymic:"",onChange:this.changeOwner}),r.createElement(i.Z.Label,{className:"col-4"},"Фамилия"),r.createElement("input",{className:"form-control col-6",name:"last_name",type:"text",value:this.state.owner.last_name?this.state.owner.last_name:"",onChange:this.changeOwner}),r.createElement(i.Z.Label,{className:"col-4",name:"gender"},"Пол"),r.createElement(l.Z,{className:"col-6"},r.createElement(i.Z.Label,{className:"col-1",name:"gender-m"},r.createElement("small",null,"М")),r.createElement("input",{className:"form-control col-1 border-0",name:"gender-m",type:"radio",checked:"m"===this.state.owner.gender?1:0,onChange:this.changeOwner}),r.createElement(i.Z.Label,{className:"col-1",name:"gender-f"},r.createElement("small",null,"Ж")),r.createElement("input",{className:"form-control col-1 border-0",name:"gender-f",type:"radio",checked:"f"===this.state.owner.gender?1:0,onChange:this.changeOwner})),r.createElement(i.Z.Label,{className:"col-4",name:"age"},"Возраст"),r.createElement("input",{className:"form-control col-6",name:"age",type:"text",maxLength:"3",value:this.state.owner.age?this.state.owner.age:"",onChange:this.changeOwner,onKeyPress:this.digitsOnly}))),r.createElement("div",{className:"col-7"},r.createElement(i.Z.Label,{className:"col-4"},"Комментарий"),r.createElement(i.Z.Control,{as:"textarea",rows:"6",value:this.state.owner.comment,name:"comment",onChange:this.changeOwner}))),r.createElement("hr",null),r.createElement("div",{className:"row spacer"},r.createElement("div",{className:"col-12"},r.createElement(s.Z,{key:1,placement:this.tooltipPlace,overlay:r.createElement(u.Z,{id:"tooltip-1"},"Сохранить информацию об автовладельце")},r.createElement(m.Z,{variant:"primary",className:"col",onClick:this.saveOwner},"Сохранить")))))),r.createElement(c.Z,null,r.createElement(c.Z.Title,null,"Автомобили"),r.createElement(c.Z.Header,null,r.createElement(l.Z,{className:"spacer"},r.createElement(f.Z,{xs:12},r.createElement(s.Z,{key:2,placement:this.tooltipPlace,overlay:r.createElement(u.Z,{id:"tooltip-2"},"Добавить автомобиль")},r.createElement(m.Z,{variant:"primary",className:"col",name:"add_car",onClick:this.btnNewCarClick,disabled:this.state.owner.id<0?"disabled":""},"Добавить автомобиль"))))),r.createElement("div",{className:"row spacer"},r.createElement("div",{className:"col-12"},r.createElement(p.default,{owner:this.state.owner.id,withButtons:"true",withOwnerInfo:"false",withSearch:"false"})))))}}])&&g(t.prototype,n),k}(r.Component)}}]);
//# sourceMappingURL=275.js.map