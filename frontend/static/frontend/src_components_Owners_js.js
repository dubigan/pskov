(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_components_Owners_js"],{

/***/ "./src/components/OwnerDeleteDialog.js":
/*!*********************************************!*\
  !*** ./src/components/OwnerDeleteDialog.js ***!
  \*********************************************/
/*! namespace exports */
/*! export OwnerDeleteDialog [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OwnerDeleteDialog": function() { return /* binding */ OwnerDeleteDialog; }
/* harmony export */ });
/* harmony import */ var _DeleteDialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DeleteDialog */ "./src/components/DeleteDialog.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

// import React from "react";
// import { Modal, Button } from "react-bootstrap";

var OwnerDeleteDialog = /*#__PURE__*/function (_DeleteDialog) {
  _inherits(OwnerDeleteDialog, _DeleteDialog);

  var _super = _createSuper(OwnerDeleteDialog);

  function OwnerDeleteDialog() {
    var _temp, _this;

    _classCallCheck(this, OwnerDeleteDialog);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _super.call.apply(_super, [this].concat(args)), _this.nameOfItem = "автовладельца", _this.itemInfo = function (item) {
      return [item.last_name, item.name, item.patronymic].join(" ");
    }, _temp));
  }

  return OwnerDeleteDialog;
}(_DeleteDialog__WEBPACK_IMPORTED_MODULE_0__.default);

/***/ }),

/***/ "./src/components/Owners.js":
/*!**********************************!*\
  !*** ./src/components/Owners.js ***!
  \**********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Owners; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Table.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/OverlayTrigger.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Tooltip.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Loader */ "./src/components/Loader.js");
/* harmony import */ var _ListOfItems__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ListOfItems */ "./src/components/ListOfItems.js");
/* harmony import */ var _OwnerDeleteDialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./OwnerDeleteDialog */ "./src/components/OwnerDeleteDialog.js");
/* harmony import */ var _Alerts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Alerts */ "./src/components/Alerts.js");
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








var Owners = /*#__PURE__*/function (_ListOfItems) {
  _inherits(Owners, _ListOfItems);

  var _super = _createSuper(Owners);

  function Owners() {
    var _temp, _this;

    _classCallCheck(this, Owners);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _super.call.apply(_super, [this].concat(args)), _this.url = "/testforjob/api/owners/", _this.tooltipPlace = "bottom", _this.nameOfItem = "Автовладелец", _temp));
  }

  _createClass(Owners, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, this.state.loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Loader__WEBPACK_IMPORTED_MODULE_1__.default, null), this.state.showDeleteDialog && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_OwnerDeleteDialog__WEBPACK_IMPORTED_MODULE_3__.OwnerDeleteDialog, {
        params: this.state,
        itemDelete: this.itemDelete
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Alerts__WEBPACK_IMPORTED_MODULE_4__.default, {
        messages: this.state.messages
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.default, {
        striped: true,
        bordered: true,
        hover: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
        key: 1,
        placement: this.tooltipPlace,
        overlay: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
          id: "tooltip-1"
        }, "\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u0434\u043B\u044F \u0441\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0438")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
        id: "last_name",
        onClick: this.btnSortClick
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.default, {
        id: "last_name"
      }, this.state.sortedBy.name === "last_name" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        id: "last_name",
        className: "ml-2"
      }, this.arrow), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        id: "last_name",
        className: "ml-2"
      }, "\u0424\u0430\u043C\u0438\u043B\u0438\u044F")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
        key: 2,
        placement: this.tooltipPlace,
        overlay: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
          id: "tooltip-2"
        }, "\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u0434\u043B\u044F \u0441\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0438")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
        id: "name",
        onClick: this.btnSortClick
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.default, {
        id: "name"
      }, this.state.sortedBy.name === "name" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        id: "name",
        className: "ml-2"
      }, this.arrow), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        id: "name",
        className: "ml-2"
      }, "\u0418\u043C\u044F")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
        id: "patronymic"
      }, "\u041E\u0442\u0447\u0435\u0441\u0442\u0432\u043E"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
        key: 3,
        placement: this.tooltipPlace,
        overlay: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
          id: "tooltip-3"
        }, "\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u0434\u043B\u044F \u0441\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0438")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
        id: "gender",
        onClick: this.btnSortClick
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.default, {
        id: "gender"
      }, this.state.sortedBy.name === "gender" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        id: "gender",
        className: "ml-2"
      }, this.arrow), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        id: "gender",
        className: "ml-2"
      }, "\u041F\u043E\u043B")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
        key: 4,
        placement: this.tooltipPlace,
        overlay: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
          id: "tooltip-4"
        }, "\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u0434\u043B\u044F \u0441\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0438")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
        id: "age",
        onClick: this.btnSortClick
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.default, {
        id: "age"
      }, this.state.sortedBy.name === "age" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        id: "age",
        className: "ml-2"
      }, this.arrow), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        id: "age",
        className: "ml-2"
      }, "\u0412\u043E\u0437\u0440\u0430\u0441\u0442")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, this.state.items.map(function (o, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", {
          key: index
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, o.last_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, o.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, o.patronymic), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, o.gender === "f" ? "Жен" : "Муж"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, o.age), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
          style: {
            width: 100 + "px"
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
          key: 5,
          placement: _this2.tooltipPlace,
          overlay: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
            id: "tooltip-5"
          }, "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435")
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.default, {
          value: o.id,
          variant: "primary",
          className: "ml-2",
          onClick: _this2.btnEditClick
        }, "\u27F6")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
          key: 6,
          placement: _this2.tooltipPlace,
          overlay: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
            id: "tooltip-6"
          }, "\u0423\u0434\u0430\u043B\u0435\u043D\u0438\u0435")
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.default, {
          value: o.id,
          variant: "danger",
          className: "ml-2",
          onClick: _this2.btnDelClick
        }, "x")))));
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
        key: 7,
        placement: this.tooltipPlace,
        overlay: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
          id: "tooltip-7"
        }, "\u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u043D\u043E\u0432\u043E\u0433\u043E \u0430\u0432\u0442\u043E\u0432\u043B\u0430\u0434\u0435\u043B\u044C\u0446\u0430")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.default, {
        variant: "primary",
        className: "col",
        onClick: this.btnAddClick
      }, "+")));
    }
  }]);

  return Owners;
}(_ListOfItems__WEBPACK_IMPORTED_MODULE_2__.default);



/***/ })

}]);
//# sourceMappingURL=src_components_Owners_js.js.map