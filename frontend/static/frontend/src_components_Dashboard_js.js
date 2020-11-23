(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_components_Dashboard_js"],{

/***/ "./src/components/Dashboard.js":
/*!*************************************!*\
  !*** ./src/components/Dashboard.js ***!
  \*************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Dashboard; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Card.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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





var Dashboard = /*#__PURE__*/function (_Component) {
  _inherits(Dashboard, _Component);

  var _super = _createSuper(Dashboard);

  function Dashboard() {
    var _temp, _this;

    _classCallCheck(this, Dashboard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _super.call.apply(_super, [this].concat(args)), _this.state = {
      uploadFileName: '',
      downloadFormat: 'json'
    }, _this.downloadUrl = '/testforjob/api/download/', _this.getDownloadUrl = function () {
      return '/testforjob/api/download_' + _this.state.downloadFormat + '/';
    }, _this.change = function (e) {}, _this.selectFormat = function (e) {
      //console.log('selectFormat', e.target.value);
      _this.setState({
        downloadFormat: e.target.value
      });
    }, _temp));
  }

  _createClass(Dashboard, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.default.Label, {
        className: "col-5"
      }, "\u0424\u0430\u0439\u043B \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0432 BD"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.default, {
        md: "auto"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
        className: "form-control col-6 ml-4",
        name: "uploadFileName",
        id: "uploadFileName",
        type: "text",
        value: this.state.uploadFileName,
        onChange: this.change
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.default, {
        variant: "primary",
        className: "",
        onClick: this.selectFile
      }, "..."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.default, {
        variant: "primary",
        className: "col-1 ml-4",
        onClick: this.selectFile,
        disabled: this.state.downloadFileName === '' ? 'disabled' : ''
      }, "\u0421\u0442\u0430\u0440\u0442")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.default.Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.default.Label, {
        className: "col-5"
      }, "\u0412\u044B\u0433\u0440\u0443\u0437\u043A\u0430 BD")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.default.Label, {
        className: "col-3 ml-4"
      }, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0444\u043E\u0440\u043C\u0430\u0442 \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u0435\u043C\u043E\u0433\u043E \u0444\u0430\u0439\u043B\u0430"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.default.Control, {
        as: "select",
        className: "col-2",
        onChange: this.selectFormat
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
        value: "json"
      }, "json"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
        value: "csv"
      }, "csv"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
        value: "text"
      }, "text/plain")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
        action: this.getDownloadUrl(),
        method: "post"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.default, {
        variant: "primary",
        type: "submit",
        className: "col ml-4"
      }, "\u0421\u0442\u0430\u0440\u0442")))));
    }
  }]);

  return Dashboard;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);



/***/ })

}]);
//# sourceMappingURL=src_components_Dashboard_js.js.map