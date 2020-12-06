(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_components_ListOfItems_js-src_components_Loader_js"],{

/***/ "./src/components/ListOfItems.js":
/*!***************************************!*\
  !*** ./src/components/ListOfItems.js ***!
  \***************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ListOfItems; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var ListOfItems = /*#__PURE__*/function (_Component) {
  _inherits(ListOfItems, _Component);

  var _super = _createSuper(ListOfItems);

  function ListOfItems() {
    var _temp, _this;

    _classCallCheck(this, ListOfItems);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _super.call.apply(_super, [this].concat(args)), _this.state = {
      loading: false,
      messages: [],
      showDeleteDialog: false,
      itemDelete: "",
      items: [],
      sortedBy: {
        name: "",
        direction: "asc"
      }
    }, _this.url = "", _this.upArrow = "\u2191", _this.downArrow = "\u2193", _this.nameOfItem = "", _this.getErrors = function (data) {
      return Object.keys(data).map(function (key) {
        return {
          type: "error",
          message: data[key]
        };
      });
    }, _this.getItems = function () {
      _this.setState({
        loading: true
      }); //console.log('getItems props.owner', this.props.owner);


      axios__WEBPACK_IMPORTED_MODULE_1___default().post(_this.url, {
        sorted_by: _this.state.sortedBy,
        owner: _this.props.owner ? _this.props.owner : -1
      }).then(function (res) {
        //console.log('getItems', res.data);
        _this.setState({
          items: res.data
        });
      }).catch(function (err) {
        //console.log("getItems", err.response.data);
        _this.setState({
          messages: _this.getErrors(err.response.data)
        });
      }).finally(function () {
        return _this.setState({
          loading: false
        });
      });
    }, _this.getItem = function (id) {
      return _this.state.items.filter(function (item) {
        return +item.id === +id;
      })[0];
    }, _this.btnSortClick = function (e) {
      var sorted_name = e.target.id; //console.log('btnSortClick e', e);

      if (_this.state.sortedBy.name !== sorted_name) {
        var sortedBy = {
          name: sorted_name,
          direction: "desc"
        }; //console.log('btnSortClick sortedBy', sortedBy);

        _this.setState({
          sortedBy: sortedBy
        });
      } else {
        var direction = _this.state.sortedBy.direction === "desc" ? "asc" : "desc"; //console.log('btnSortClick direction', direction);

        var _sortedBy = _objectSpread(_objectSpread({}, _this.state.sortedBy), {}, {
          direction: direction
        }); //console.log('btnSortClick', sortedBy);


        _this.setState({
          sortedBy: _sortedBy
        });
      }
    }, _this.btnDelClick = function (e) {
      var item = _this.getItem(e.target.value); //console.log("order out", orderOut);


      _this.setState({
        showDeleteDialog: true,
        itemDelete: item
      });
    }, _this.btnAddClick = function (e) {
      axios__WEBPACK_IMPORTED_MODULE_1___default().post(_this.url, {
        btn_add: ""
      }).then(function (res) {
        if (res.data.redirect) {
          window.location.href = res.data["redirect"];
        }
      }).catch(function (err) {
        //console.log("btnAddClick", err.response.data);
        _this.setState({
          messages: _this.getErrors(err.response.data)
        });
      });
    }, _this.btnEditClick = function (e) {
      axios__WEBPACK_IMPORTED_MODULE_1___default().post(_this.url, {
        btn_edit: "",
        item_pk: e.target.value,
        url: window.location.pathname
      }).then(function (res) {
        if (res.data.redirect) {
          window.location.href = res.data["redirect"];
        }
      }).catch(function (err) {
        //console.log("btnEditClick", err.response.data);
        _this.setState({
          messages: _this.getErrors(err.response.data)
        });
      });
    }, _this.itemDelete = function (confirm) {
      _this.setState({
        showDeleteDialog: false
      }); //console.log('itemDelete', confirm);


      if (confirm === "true") {
        _this.setState({
          loading: true
        });

        axios__WEBPACK_IMPORTED_MODULE_1___default().post(_this.url, {
          sorted_by: _this.state.sortedBy,
          btn_del: "",
          item_pk: _this.state.itemDelete.id
        }).then(function (res) {
          //console.log("delBtnClick", res.data);
          _this.setState({
            items: res.data,
            messages: {
              type: "success",
              message: "".concat(_this.nameOfItem, " \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0443\u0434\u0430\u043B\u0435\u043D")
            }
          });
        }).catch(function (err) {
          //console.log("delBtnClick", err.response.data);
          _this.setState({
            messages: _this.getErrors(err.response.data)
          });
        }).finally(function () {
          return _this.setState({
            loading: false
          });
        });
      }
    }, _temp));
  }

  _createClass(ListOfItems, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getItems();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.sortedBy.name !== this.state.sortedBy.name || prevState.sortedBy.direction !== this.state.sortedBy.direction) {
        this.getItems();
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null);
    }
  }, {
    key: "arrow",
    get: function get() {
      //console.log('arrow', this.state.sortedBy.direction);
      return this.state.sortedBy.direction === "asc" ? this.upArrow : this.downArrow;
    }
  }]);

  return ListOfItems;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);



/***/ }),

/***/ "./src/components/Loader.js":
/*!**********************************!*\
  !*** ./src/components/Loader.js ***!
  \**********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Loader_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Loader.css */ "./src/components/Loader.css");
/* harmony import */ var _Loader_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Loader_css__WEBPACK_IMPORTED_MODULE_1__);
;

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "center-loader"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "lds-dual-ring"
  }));
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/Loader.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/Loader.css ***!
  \*************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module.id, __webpack_require__.*, module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports
;
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* body,\nhtml {\n    height: 100%;\n    display: flex;\n} */\n.center-loader {\n    display: flex;\n    margin: auto;\n    justify-content: center;\n    align-items: center;\n}\n\n.lds-dual-ring {\n    display: inline-block;\n    width: 80px;\n    height: 80px;\n}\n.lds-dual-ring:after {\n    content: ' ';\n    display: block;\n    width: 64px;\n    height: 64px;\n    margin: 8px;\n    border-radius: 50%;\n    border: 6px solid blue;\n    border-color: blue transparent blue transparent;\n    animation: lds-dual-ring 1.2s linear infinite;\n}\n@keyframes lds-dual-ring {\n    0% {\n        transform: rotate(0deg);\n    }\n    100% {\n        transform: rotate(360deg);\n    }\n}\n", "",{"version":3,"sources":["webpack://src/components/Loader.css"],"names":[],"mappings":"AAAA;;;;GAIG;AACH;IACI,aAAa;IACb,YAAY;IACZ,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,qBAAqB;IACrB,WAAW;IACX,YAAY;AAChB;AACA;IACI,YAAY;IACZ,cAAc;IACd,WAAW;IACX,YAAY;IACZ,WAAW;IACX,kBAAkB;IAClB,sBAAsB;IACtB,+CAA+C;IAC/C,6CAA6C;AACjD;AACA;IACI;QACI,uBAAuB;IAC3B;IACA;QACI,yBAAyB;IAC7B;AACJ","sourcesContent":["/* body,\nhtml {\n    height: 100%;\n    display: flex;\n} */\n.center-loader {\n    display: flex;\n    margin: auto;\n    justify-content: center;\n    align-items: center;\n}\n\n.lds-dual-ring {\n    display: inline-block;\n    width: 80px;\n    height: 80px;\n}\n.lds-dual-ring:after {\n    content: ' ';\n    display: block;\n    width: 64px;\n    height: 64px;\n    margin: 8px;\n    border-radius: 50%;\n    border: 6px solid blue;\n    border-color: blue transparent blue transparent;\n    animation: lds-dual-ring 1.2s linear infinite;\n}\n@keyframes lds-dual-ring {\n    0% {\n        transform: rotate(0deg);\n    }\n    100% {\n        transform: rotate(360deg);\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/components/Loader.css":
/*!***********************************!*\
  !*** ./src/components/Loader.css ***!
  \***********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__, module.id */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./Loader.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/Loader.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ })

}]);
//# sourceMappingURL=src_components_ListOfItems_js-src_components_Loader_js.js.map