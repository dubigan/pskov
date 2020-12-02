/*! For license information please see 341.js.LICENSE.txt */
(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[341],{812:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var r=n(7294),o=n(2151),a=n(4051),l=n(5005),c=n(4479);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(y,e);var t,n,i,m,v=(i=y,m=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=d(i);if(m){var n=d(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return p(this,e)});function y(){var e,t;s(this,y);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return p(t,(e=t=v.call.apply(v,[this].concat(r)),t.state={uploadFileName:"",websocket:null,downloadFormat:"json"},t.downloadUrl="/testforjob/api/download/",t.uploadUrl="ws://localhost:8000/testforjob/ws/upload/",t.getDownloadUrl=function(){return"/testforjob/api/download_".concat(t.state.downloadFormat,"/")},t.change=function(e){},t.selectFormat=function(e){t.setState({downloadFormat:e.target.value})},e))}return t=y,(n=[{key:"componentDidMount",value:function(){var e=new WebSocket(this.uploadUrl);e.onopen=function(){console.log("connected")},e.onmessage=function(e){var t=JSON.parse(e.data);console.log(t)},e.onclose=function(){console.log("disconnected")},e.onerror=function(){console.log("websocket error")},this.setState({websocket:e})}},{key:"render",value:function(){return r.createElement("div",null,r.createElement(o.Z.Label,{className:"col-5"},"Файл загрузки в BD"),r.createElement(a.Z,{md:"auto"},r.createElement("input",{className:"form-control col-6 ml-4",name:"uploadFileName",id:"uploadFileName",type:"text",value:this.state.uploadFileName,onChange:this.change}),r.createElement(l.Z,{variant:"primary",className:"",onClick:this.selectFile},"..."),r.createElement(l.Z,{variant:"primary",className:"col-1 ml-4",onClick:this.selectFile,disabled:""===this.state.uploadFileName?"disabled":""},"Старт")),r.createElement("hr",null),r.createElement(c.Z,null,r.createElement(c.Z.Header,null,r.createElement(o.Z.Label,{className:"col-5"},"Выгрузка BD")),r.createElement(a.Z,null,r.createElement(o.Z.Label,{className:"col-3 ml-4"},"Выберите формат сохраняемого файла"),r.createElement(o.Z.Control,{as:"select",className:"col-2",onChange:this.selectFormat},r.createElement("option",{value:"json"},"json"),r.createElement("option",{value:"csv"},"csv"),r.createElement("option",{value:"text"},"text/plain")),r.createElement("form",{action:this.getDownloadUrl(),method:"post"},r.createElement(l.Z,{variant:"primary",type:"submit",className:"col ml-4"},"Старт")))))}}])&&u(t.prototype,n),y}(r.Component)},4184:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)&&n.length){var l=o.apply(null,n);l&&e.push(l)}else if("object"===a)for(var c in n)r.call(n,c)&&n[c]&&e.push(c)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},5005:function(e,t,n){"use strict";var r=n(2122),o=n(9756),a=n(4184),l=n.n(a),c=n(7294),i=n(6792),s=n(4873),u=c.forwardRef((function(e,t){var n=e.bsPrefix,a=e.variant,u=e.size,f=e.active,p=e.className,d=e.block,m=e.type,v=e.as,y=(0,o.Z)(e,["bsPrefix","variant","size","active","className","block","type","as"]),b=(0,i.vE)(n,"btn"),h=l()(p,b,f&&"active",a&&b+"-"+a,d&&b+"-block",u&&b+"-"+u);if(y.href)return c.createElement(s.Z,(0,r.Z)({},y,{as:v,ref:t,className:l()(h,y.disabled&&"disabled")}));t&&(y.ref=t),m?y.type=m:v||(y.type="button");var w=v||"button";return c.createElement(w,(0,r.Z)({},y,{className:h}))}));u.displayName="Button",u.defaultProps={variant:"primary",active:!1,disabled:!1},t.Z=u},4051:function(e,t,n){"use strict";var r=n(2122),o=n(9756),a=n(4184),l=n.n(a),c=n(7294),i=n(6792),s=["xl","lg","md","sm","xs"],u=c.forwardRef((function(e,t){var n=e.bsPrefix,a=e.className,u=e.noGutters,f=e.as,p=void 0===f?"div":f,d=(0,o.Z)(e,["bsPrefix","className","noGutters","as"]),m=(0,i.vE)(n,"row"),v=m+"-cols",y=[];return s.forEach((function(e){var t,n=d[e];delete d[e];var r="xs"!==e?"-"+e:"";null!=(t=null!=n&&"object"==typeof n?n.cols:n)&&y.push(""+v+r+"-"+t)})),c.createElement(p,(0,r.Z)({ref:t},d,{className:l().apply(void 0,[a,m,u&&"no-gutters"].concat(y))}))}));u.displayName="Row",u.defaultProps={noGutters:!1},t.Z=u},4873:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(2122),o=n(9756),a=n(7294),l=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return null!=e})).reduce((function(e,t){if("function"!=typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];e.apply(this,r),t.apply(this,r)}}),null)};function c(e){return!e||"#"===e.trim()}var i=a.forwardRef((function(e,t){var n=e.as,i=void 0===n?"a":n,s=e.disabled,u=e.onKeyDown,f=(0,o.Z)(e,["as","disabled","onKeyDown"]),p=function(e){var t=f.href,n=f.onClick;(s||c(t))&&e.preventDefault(),s?e.stopPropagation():n&&n(e)};return c(f.href)&&(f.role=f.role||"button",f.href=f.href||"#"),s&&(f.tabIndex=-1,f["aria-disabled"]=!0),a.createElement(i,(0,r.Z)({ref:t},f,{onClick:p,onKeyDown:l((function(e){" "===e.key&&(e.preventDefault(),p(e))}),u)}))}));i.displayName="SafeAnchor";var s=i},6792:function(e,t,n){"use strict";n.d(t,{vE:function(){return a}});var r=n(7294),o=r.createContext({});function a(e,t){var n=(0,r.useContext)(o);return e||n[t]||t}o.Consumer,o.Provider},4680:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(2122),o=n(9756),a=n(4184),l=n.n(a),c=/-(.)/g,i=n(7294),s=n(6792);function u(e,t){var n,a,u=void 0===t?{}:t,f=u.displayName,p=void 0===f?(n=e)[0].toUpperCase()+(a=n,a.replace(c,(function(e,t){return t.toUpperCase()}))).slice(1):f,d=u.Component,m=u.defaultProps,v=i.forwardRef((function(t,n){var a=t.className,c=t.bsPrefix,u=t.as,f=void 0===u?d||"div":u,p=(0,o.Z)(t,["className","bsPrefix","as"]),m=(0,s.vE)(c,e);return i.createElement(f,(0,r.Z)({ref:n,className:l()(a,m)},p))}));return v.defaultProps=m,v.displayName=p,v}},9602:function(e,t,n){"use strict";var r=n(2122),o=n(7294),a=n(4184),l=n.n(a);t.Z=function(e){return o.forwardRef((function(t,n){return o.createElement("div",(0,r.Z)({},t,{ref:n,className:l()(t.className,e)}))}))}},2473:function(e){"use strict";e.exports=function(){}}}]);
//# sourceMappingURL=341.js.map