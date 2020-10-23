(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 24);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/taggedTemplateLiteral");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/defineProperty");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("little-state-machine");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(10);

var requireById = function requireById(id) {
  if (!(0, _utils.isWebpack)() && typeof id === 'string') {
    return __webpack_require__(32)("" + id);
  }

  return __webpack_require__('' + id);
};

exports["default"] = requireById;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof = __webpack_require__(9);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _requireUniversalModule = __webpack_require__(31);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(33);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks)["default"];
  }
});
exports["default"] = universal;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(15);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(16);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _vm = __webpack_require__(34);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _utils = __webpack_require__(10);

var _helpers = __webpack_require__(35);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function _objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
}

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (// $FlowIgnore
    module.hot && (false)
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(asyncModule) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var userRender = opts.render,
      _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['render', 'loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var renderFunc = userRender || (0, _utils.createDefaultRender)(Loading, Err);
  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.usesBabelPlugin = hasBabelPlugin;
  options.modCache = {};
  options.promCache = {};
  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, [{
      key: 'requireAsyncInner',
      value: function requireAsyncInner(requireAsync, props, state, context, isMount) {
        var _this2 = this;

        if (!state.mod && loadingTransition) {
          this.update({
            mod: null,
            props: props
          }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();
        requireAsync(props, context).then(function (mod) {
          var state = {
            mod: mod,
            props: props,
            context: context
          };
          var timeLapsed = new Date() - time;

          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this2.update(state, isMount);
            }, extraDelay);
          }

          _this2.update(state, isMount);
        })["catch"](function (error) {
          return _this2.update({
            error: error,
            props: props,
            context: context
          });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;
          var info = {
            isMount: isMount,
            isSync: isSync,
            isServer: isServer
          };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var mod = state.mod,
            error = state.error;

        if (mod && !error) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;
            var info = {
              isMount: isMount,
              isSync: isSync,
              isServer: isServer
            };
            onAfter(info, mod);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      } // $FlowFixMe

    }, {
      key: 'init',
      value: function init(props, context) {
        var _req = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            addModule = _req.addModule,
            requireSync = _req.requireSync,
            requireAsync = _req.requireAsync,
            asyncOnly = _req.asyncOnly;

        var mod = void 0;

        try {
          mod = requireSync(props, context);
        } catch (error) {
          return (0, _helpers.__update)(props, {
            error: error,
            props: props,
            context: context
          }, this._initialized);
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(props); // record the module for SSR flushing :)

        if (context.report) {
          context.report(chunkName);
        }

        if (mod || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          return (0, _helpers.__update)(props, {
            asyncOnly: asyncOnly,
            props: props,
            mod: mod,
            context: context
          }, this._initialized, true, true, _utils.isServer);
        }

        this.handleBefore(true, false);
        this.requireAsyncInner(requireAsync, props, {
          props: props,
          asyncOnly: asyncOnly,
          mod: mod,
          context: context
        }, context, true);
        return {
          mod: mod,
          asyncOnly: asyncOnly,
          context: context,
          props: props
        };
      }
    }], [{
      key: 'preload',

      /* eslint-enable react/sort-comp */
      value: function preload(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        props = props || {};

        var _req2 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            requireAsync = _req2.requireAsync,
            requireSync = _req2.requireSync;

        var mod = void 0;

        try {
          mod = requireSync(props, context);
        } catch (error) {
          return Promise.reject(error);
        }

        return Promise.resolve().then(function () {
          if (mod) return mod;
          return requireAsync(props, context);
        }).then(function (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
          return mod;
        });
      }
      /* eslint-disable react/sort-comp */

    }, {
      key: 'preloadWeak',
      value: function preloadWeak(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        props = props || {};

        var _req3 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            requireSync = _req3.requireSync;

        var mod = requireSync(props, context);

        if (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
        }

        return mod;
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        if (!_this._initialized) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = _this.init(_this.props, _this.context); // $FlowFixMe

      _this.state.error = null;
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this._initialized = true;
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        var _this3 = this;

        if (isDynamic || this._asyncOnly) {
          var _req4 = (0, _requireUniversalModule2["default"])(asyncModule, options, this.props, prevProps),
              requireSync = _req4.requireSync,
              requireAsync = _req4.requireAsync,
              shouldUpdate = _req4.shouldUpdate;

          if (shouldUpdate(this.props, prevProps)) {
            var mod = void 0;

            try {
              mod = requireSync(this.props, this.context);
            } catch (error) {
              return this.update({
                error: error
              });
            }

            this.handleBefore(false, !!mod);

            if (!mod) {
              return this.requireAsyncInner(requireAsync, this.props, {
                mod: mod
              });
            }

            var state = {
              mod: mod
            };

            if (alwaysDelay) {
              if (loadingTransition) this.update({
                mod: null
              }); // display `loading` during componentWillReceiveProps

              setTimeout(function () {
                return _this3.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          }
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._initialized = false;
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        var _state = this.state,
            mod = _state.mod,
            error = _state.error;
        return renderFunc(props, mod, isLoading, userError || error);
      }
    }], [{
      key: 'getDerivedStateFromProps',
      value: function getDerivedStateFromProps(nextProps, currentState) {
        var _req5 = (0, _requireUniversalModule2["default"])(asyncModule, options, nextProps, currentState.props),
            requireSync = _req5.requireSync,
            shouldUpdate = _req5.shouldUpdate;

        if (isHMR() && shouldUpdate(currentState.props, nextProps)) {
          var mod = requireSync(nextProps, currentState.context);
          return _extends({}, currentState, {
            mod: mod
          });
        }

        return null;
      }
    }]);

    return UniversalComponent;
  }(_react2["default"].Component), _class.contextTypes = {
    store: _propTypes2["default"].object,
    report: _propTypes2["default"].func
  }, _temp;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(30)(module)))

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ initialStepState; });

// UNUSED EXPORTS: initialFormState

// EXTERNAL MODULE: external "@babel/runtime/helpers/slicedToArray"
var slicedToArray_ = __webpack_require__(12);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/defineProperty"
var defineProperty_ = __webpack_require__(3);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-static"
var external_react_static_ = __webpack_require__(6);

// EXTERNAL MODULE: external "little-state-machine"
var external_little_state_machine_ = __webpack_require__(4);

// EXTERNAL MODULE: external "little-state-machine-devtools"
var external_little_state_machine_devtools_ = __webpack_require__(44);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(1);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "query-string"
var external_query_string_ = __webpack_require__(22);
var external_query_string_default = /*#__PURE__*/__webpack_require__.n(external_query_string_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/taggedTemplateLiteral"
var taggedTemplateLiteral_ = __webpack_require__(2);
var taggedTemplateLiteral_default = /*#__PURE__*/__webpack_require__.n(taggedTemplateLiteral_);

// CONCATENATED MODULE: /Users/alvin/Desktop/Azoomee/test-payment/src/components/GlobalStyle/GlobalStyle.tsx


function _templateObject() {
  var data = taggedTemplateLiteral_default()(["\n  * {\n    scroll-behavior: smooth;\n  }\n\n  body {\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    font-weight: 300;\n    font-size: 16px;\n    margin: 0;\n    padding: 0;\n  }\n\n  fieldset {\n    border: none;\n    padding: 0;\n    margin: 0\n  }\n\n  a {\n    text-decoration: none;\n    color: #108db8;\n    font-weight: bold;\n  }\n\n  img {\n    max-width: 100%;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var GlobalStyle = Object(external_styled_components_["createGlobalStyle"])(_templateObject());
/* harmony default export */ var GlobalStyle_GlobalStyle = (GlobalStyle);
// CONCATENATED MODULE: /Users/alvin/Desktop/Azoomee/test-payment/src/components/AppContainer/AppContainer.tsx


function AppContainer_templateObject() {
  var data = taggedTemplateLiteral_default()(["\n  margin: 0 auto;\n  max-width: 600px;\n  padding: 1rem;\n  width: 100%;\n"]);

  AppContainer_templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var AppContainer = external_styled_components_default.a.main(AppContainer_templateObject());
/* harmony default export */ var AppContainer_AppContainer = (AppContainer);
// EXTERNAL MODULE: external "react-hook-form"
var external_react_hook_form_ = __webpack_require__(23);

// CONCATENATED MODULE: /Users/alvin/Desktop/Azoomee/test-payment/src/updateAction.ts


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var completeStep = function completeStep(state, payload) {
  return _objectSpread(_objectSpread({}, state), {}, {
    stepsCompleted: _objectSpread(_objectSpread({}, state.stepsCompleted), payload)
  });
};

var updateAction = function updateAction(state, payload) {
  return _objectSpread(_objectSpread({}, state), {}, {
    form: _objectSpread(_objectSpread({}, state.form), payload)
  });
};


// CONCATENATED MODULE: /Users/alvin/Desktop/Azoomee/test-payment/src/components/ui/index.ts


function _templateObject2() {
  var data = taggedTemplateLiteral_default()(["\n  background-color: ", ";\n  border-radius: 0.25rem;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),\n    0 2px 4px -1px rgba(0, 0, 0, 0.06);\n  margin-bottom: 4px;\n  padding: 2rem 1.5rem 2rem 2rem;\n  display: flex;\n  flex-direction: column;\n  font-family: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function ui_templateObject() {
  var data = taggedTemplateLiteral_default()(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 1rem;\n"]);

  ui_templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var FieldContainer = external_styled_components_default.a.fieldset(ui_templateObject());
var Form = external_styled_components_default.a.form(_templateObject2(), function (_ref) {
  var theme = _ref.theme;
  return theme.backgroundColor;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.fonts;
});

// EXTERNAL MODULE: external "braintree-web-drop-in"
var external_braintree_web_drop_in_ = __webpack_require__(13);
var external_braintree_web_drop_in_default = /*#__PURE__*/__webpack_require__.n(external_braintree_web_drop_in_);

// CONCATENATED MODULE: /Users/alvin/Desktop/Azoomee/test-payment/src/components/BraintreeDropIn/BraintreeDropin.tsx



var BraintreeDropin_BraintreeDropin = function BraintreeDropin(_ref) {
  var authorization = _ref.authorization,
      callback = _ref.callback;
  var dropInElement = Object(external_react_["useRef"])();
  console.log('dropInElement: ', dropInElement);
  console.log('BraintreeWebDropIn: ', external_braintree_web_drop_in_default.a);
  var create = external_braintree_web_drop_in_default.a.create({
    authorization: authorization,
    selector: dropInElement.current
  }, callback);
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    ref: dropInElement,
    id: "btDropin"
  }, create);
};

/* harmony default export */ var BraintreeDropIn_BraintreeDropin = (BraintreeDropin_BraintreeDropin);
// CONCATENATED MODULE: /Users/alvin/Desktop/Azoomee/test-payment/src/pages/UserDetailsForm.tsx


function UserDetailsForm_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function UserDetailsForm_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { UserDetailsForm_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { UserDetailsForm_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


 // import { FormProps } from './types';







var i18n = __webpack_require__(45);

var UserDetailsForm_UserDetailsForm = function UserDetailsForm(_ref) {
  var accentColor = _ref.accentColor,
      fontColor = _ref.fontColor,
      _ref$locale = _ref.locale,
      locale = _ref$locale === void 0 ? 'en' : _ref$locale,
      _ref$omitFields = _ref.omitFields,
      omitFields = _ref$omitFields === void 0 ? [] : _ref$omitFields,
      shortFlow = _ref.shortFlow,
      voucherCode = _ref.voucherCode;

  var _useStateMachine = Object(external_little_state_machine_["useStateMachine"])(updateAction),
      action = _useStateMachine.action,
      state = _useStateMachine.state;

  var _useStateMachine2 = Object(external_little_state_machine_["useStateMachine"])(completeStep),
      stepAction = _useStateMachine2.action;

  var _useForm = Object(external_react_hook_form_["useForm"])(),
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit,
      errors = _useForm.errors;

  Object(external_react_["useEffect"])(function () {
    stepAction(initialStepState.stepsCompleted);
  }, []);

  var onSubmit = function onSubmit(formData) {
    var updatedFormData = UserDetailsForm_objectSpread(UserDetailsForm_objectSpread({}, formData), {}, {
      password: '',
      confirmPassword: ''
    });

    action(updatedFormData);
    var updatedStepData = {
      stepOne: true
    };
    stepAction(updatedStepData);
  };

  var callback = function callback(err, dropinInstance) {
    if (err) {
      // Handle any errors that might've occurred when creating Drop-in
      console.error(err);
      return;
    } //  submitButton.addEventListener('click', function () {
    //    dropinInstance.requestPaymentMethod(function (err, payload) {
    //      if (err) {
    //        // Handle errors in requesting payment method
    //      }
    //      // Send payload.nonce to your server
    //    });

  };

  console.log(errors);
  return /*#__PURE__*/external_react_default.a.createElement(Form, {
    onSubmit: handleSubmit(onSubmit)
  }, /*#__PURE__*/external_react_default.a.createElement(FieldContainer, null, /*#__PURE__*/external_react_default.a.createElement("label", {
    className: "label",
    htmlFor: "email"
  }, i18n.email.infotext[locale]), /*#__PURE__*/external_react_default.a.createElement("input", {
    className: "input",
    type: "text",
    placeholder: i18n.email.placeholder[locale],
    defaultValue: state.form.email,
    name: "email",
    id: "email",
    ref: register({
      required: true,
      pattern: /^\S+@\S+$/i
    })
  })), /*#__PURE__*/external_react_default.a.createElement(FieldContainer, null, /*#__PURE__*/external_react_default.a.createElement("label", {
    className: "label",
    htmlFor: "password"
  }, "Enter password"), /*#__PURE__*/external_react_default.a.createElement("input", {
    className: "input",
    type: "password",
    placeholder: "Enter Password",
    name: "password",
    id: "password",
    ref: register({
      required: true,
      maxLength: 80
    })
  })), /*#__PURE__*/external_react_default.a.createElement(FieldContainer, null, /*#__PURE__*/external_react_default.a.createElement("label", {
    className: "label",
    htmlFor: "confirmPassword"
  }, "Confirm password"), /*#__PURE__*/external_react_default.a.createElement("input", {
    className: "input",
    type: "password",
    placeholder: "Confirm Password",
    name: "confirmPassword",
    id: "confirmPassword",
    ref: register({
      required: true,
      maxLength: 80
    })
  })), !omitFields.includes('voucher') && /*#__PURE__*/external_react_default.a.createElement(FieldContainer, null, /*#__PURE__*/external_react_default.a.createElement("label", {
    className: "label",
    htmlFor: "voucher"
  }, "Enter voucher code"), /*#__PURE__*/external_react_default.a.createElement("input", {
    className: "input",
    type: "text",
    placeholder: "Voucher code",
    defaultValue: state.form.voucher,
    name: "voucher",
    id: "voucher",
    ref: register({
      required: true,
      maxLength: 80
    })
  })), /*#__PURE__*/external_react_default.a.createElement(BraintreeDropIn_BraintreeDropin, {
    authorization: "sandbox_kt95s7f3_8ckhmxwn5p9bcywd",
    callback: callback
  }), /*#__PURE__*/external_react_default.a.createElement("button", {
    className: "button",
    type: "submit"
  }, "Submit"));
};

/* harmony default export */ var pages_UserDetailsForm = (UserDetailsForm_UserDetailsForm);
// CONCATENATED MODULE: /Users/alvin/Desktop/Azoomee/test-payment/src/App.tsx



function App_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function App_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { App_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { App_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









 // Any routes that start with 'dynamic' will be treated as non-static routes

Object(external_react_static_["addPrefetchExcludes"])(['dynamic']);
var initialFormState = {
  form: {
    email: '',
    password: '',
    confirmPassword: '',
    voucher: ''
  }
};
var initialStepState = {
  stepsCompleted: {
    stepOne: false,
    stepTwo: false,
    stepThree: false
  }
};
Object(external_little_state_machine_["createStore"])(App_objectSpread(App_objectSpread({}, initialFormState), initialStepState));
var theme = {
  accent: '#7114ea',
  backgroundColor: '#fff',
  fonts: "-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\""
};

function App() {
  var _useState = Object(external_react_["useState"])(false),
      _useState2 = slicedToArray_default()(_useState, 2),
      isReady = _useState2[0],
      setIsReady = _useState2[1];

  var _useState3 = Object(external_react_["useState"])({}),
      _useState4 = slicedToArray_default()(_useState3, 2),
      params = _useState4[0],
      setParams = _useState4[1];

  console.log('params: ', params);
  Object(external_react_["useEffect"])(function () {
    if (typeof document !== 'undefined') {
      // use document
      setIsReady(true);
    }
  }, []);
  Object(external_react_["useEffect"])(function () {
    var urlParams = external_query_string_default.a.parse(window.location.search);
    console.log('urlParams: ', urlParams);
    setParams(urlParams);
  }, []);
  return /*#__PURE__*/external_react_default.a.createElement(external_react_static_["Root"], null, /*#__PURE__*/external_react_default.a.createElement(external_styled_components_["ThemeProvider"], {
    theme: theme
  }, /*#__PURE__*/external_react_default.a.createElement(external_little_state_machine_["StateMachineProvider"], null,  false && /*#__PURE__*/false, /*#__PURE__*/external_react_default.a.createElement(GlobalStyle_GlobalStyle, null), /*#__PURE__*/external_react_default.a.createElement(AppContainer_AppContainer, null, /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Suspense, {
    fallback: /*#__PURE__*/external_react_default.a.createElement("em", null, "Loading...")
  }, isReady && /*#__PURE__*/external_react_default.a.createElement(external_react_static_["Routes"], {
    path: '/',
    render: function render() {
      return /*#__PURE__*/external_react_default.a.createElement(pages_UserDetailsForm, null);
    }
  }))))));
}

/* harmony default export */ var src_App = __webpack_exports__["a"] = (App);

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/typeof");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(9);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createDefaultRender = exports.createElement = exports.findExport = exports.resolveExport = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
};

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _requireById = __webpack_require__(5);

var _requireById2 = _interopRequireDefault(_requireById);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};

var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod["default"] : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return React.createElement('div', null, 'Loading...');
};

var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return React.createElement('div', null, 'Error: ', error && error.message);
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return (0, _requireById2["default"])(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {}
  }

  return null;
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, context, modCache) {
  var isSync = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;
  var exp = findExport(mod, key);

  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';

    var info = {
      isServer: _isServer,
      isSync: isSync
    };
    onLoad(mod, info, props, context);
  }

  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return React.isValidElement(Component) ? React.cloneElement(Component, props) : React.createElement(Component, props);
};

var createDefaultRender = exports.createDefaultRender = function createDefaultRender(Loading, Err) {
  return function (props, mod, isLoading, error) {
    if (isLoading) {
      return createElement(Loading, props);
    } else if (error) {
      return createElement(Err, _extends({}, props, {
        error: error
      }));
    } else if (mod) {
      // primary usage (for async import loading + errors):
      return createElement(mod, props);
    }

    return createElement(Loading, props);
  };
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/slicedToArray");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("braintree-web-drop-in");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("/Users/alvin/Desktop/Azoomee/test-payment/node_modules/react-static/lib/browser");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("/Users/alvin/Desktop/Azoomee/test-payment/artifacts/__react_static_root__/node_modules/react-static/lib/browser/components/Default404");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _reactStatic = __webpack_require__(6);

var _router = __webpack_require__(27);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var _default = function _default(_ref) {
  var _ref$RouterProps = _ref.RouterProps,
      userRouterProps = _ref$RouterProps === void 0 ? {} : _ref$RouterProps;
  return {
    Root: function Root(PreviousRoot) {
      return function (_ref2) {
        var children = _ref2.children,
            rest = _objectWithoutProperties(_ref2, ["children"]);

        var basepath = (0, _reactStatic.useBasepath)();
        var staticInfo = (0, _reactStatic.useStaticInfo)();

        var RouteHandler = function RouteHandler(props) {
          return _react["default"].createElement(PreviousRoot, _extends({}, rest, props), children);
        };

        var renderedChildren = // Place a top-level router inside the root
        // This will give proper context to Link and other reach components
        _react["default"].createElement(_router.Router, _extends({}, basepath ? {
          basepath: basepath
        } : {}, userRouterProps), _react["default"].createElement(RouteHandler, {
          path: "/*"
        })); // If we're in SSR, use a manual server location


        return typeof document === 'undefined' ? _react["default"].createElement(_router.ServerLocation, {
          url: (0, _reactStatic.makePathAbsolute)("".concat(basepath, "/").concat(staticInfo.path))
        }, renderedChildren) : renderedChildren;
      };
    },
    Routes: function Routes(PreviousRoutes) {
      return function (props) {
        return (// Wrap Routes in location
          _react["default"].createElement(_router.Location, null, function (location) {
            return _react["default"].createElement(PreviousRoutes, _extends({
              path: "/*"
            }, props, {
              location: location
            }));
          })
        );
      };
    }
  };
};

exports["default"] = _default;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("query-string");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("react-hook-form");

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(25);
__webpack_require__(28);
module.exports = __webpack_require__(36);


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable import/no-dynamic-require */

var plugins = __webpack_require__(26)["default"];

var _require = __webpack_require__(14),
    registerPlugins = _require.registerPlugins;

registerPlugins(plugins);

if (false) {}

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
/* harmony import */ var _react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports
 // Plugins

var plugins = [{
  location: "__react_static_root__/node_modules/react-static-plugin-typescript",
  plugins: [],
  hooks: {}
}, {
  location: "__react_static_root__/node_modules/react-static-plugin-reach-router",
  plugins: [],
  hooks: _react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default()({})
}, {
  location: "__react_static_root__/node_modules/react-static-plugin-sitemap/dist",
  plugins: [],
  hooks: {}
}, {
  location: "__react_static_root__/node_modules/react-static-plugin-styled-components",
  plugins: [],
  hooks: {}
}, {
  location: "__react_static_root__/",
  plugins: [],
  hooks: {}
}]; // Export em!

/* harmony default export */ __webpack_exports__["default"] = (plugins);

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("@reach/router");

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable import/no-dynamic-require */

var _require = __webpack_require__(14),
    registerTemplates = _require.registerTemplates;

var _require2 = __webpack_require__(29),
    templates = _require2["default"],
    notFoundTemplate = _require2.notFoundTemplate;

registerTemplates(templates, notFoundTemplate);

if (false) {}

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notFoundTemplate", function() { return notFoundTemplate; });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_universal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var react_universal_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_universal_component__WEBPACK_IMPORTED_MODULE_3__);




Object(react_universal_component__WEBPACK_IMPORTED_MODULE_3__["setHasBabelPlugin"])();
var universalOptions = {
  loading: function loading() {
    return null;
  },
  error: function error(props) {
    console.error(props.error);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, "An error occurred loading this page's template. More information is available in the console.");
  },
  ignoreBabelRename: true
};
var t_0 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/node_modules/react-static/lib/browser/components/Default404",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, 17, 7))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/node_modules/react-static/lib/browser/components/Default404');
  },
  resolve: function resolve() {
    return /*require.resolve*/(17);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/node_modules/react-static/lib/browser/components/Default404";
  }
}), universalOptions);
t_0.template = '__react_static_root__/node_modules/react-static/lib/browser/components/Default404'; // Template Map

/* harmony default export */ __webpack_exports__["default"] = ({
  '__react_static_root__/node_modules/react-static/lib/browser/components/Default404': t_0
}); // Not Found Template

var notFoundTemplate = "__react_static_root__/node_modules/react-static/lib/browser/components/Default404";
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

exports["default"] = requireUniversalModule;

var _utils = __webpack_require__(10);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache,
      usesBabelPlugin = options.usesBabelPlugin;
  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;
  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);
    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;
    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);

        if (onError) {
          var _isServer = typeof window === 'undefined';

          var info = {
            isServer: _isServer
          };
          onError(error, info);
        }

        rej(error);
      }; // const timer = timeout && setTimeout(reject, timeout)


      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);
        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache);
        if (exp) return res(exp);
        reject(new Error('export not found'));
      };

      var request = load(props, {
        resolve: resolve,
        reject: reject
      }); // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.

      if (!request || typeof request.then !== 'function') return;
      request.then(resolve)["catch"](reject);
    });
    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);

        if (usesBabelPlugin) {
          // if ignoreBabelRename is true, don't apply regex
          var shouldKeepName = options && !!options.ignoreBabelRename;

          if (!shouldKeepName) {
            name = name.replace(/\//g, '-');
          }
        }

        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);
    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);
    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    var resultingConfig = typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;

    if (options) {
      resultingConfig = _extends({}, resultingConfig, options);
    }

    return resultingConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };
  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load,
    ignoreBabelRename: true
  };
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	".": 5,
	"./": 5,
	"./index": 5,
	"./index.js": 5
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 32;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = __webpack_require__(9);

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(15);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks() {
    _classCallCheck(this, ReportChunks);

    return _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).apply(this, arguments));
  }

  _createClass(ReportChunks, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        report: this.props.report
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2["default"].Children.only(this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2["default"].Component);

ReportChunks.propTypes = {
  report: _propTypes2["default"].func.isRequired
};
ReportChunks.childContextTypes = {
  report: _propTypes2["default"].func.isRequired
};
exports["default"] = ReportChunks;

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("vm");

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__handleAfter = exports.__update = undefined;

var _hoistNonReactStatics = __webpack_require__(16);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _index = __webpack_require__(7);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var __update = exports.__update = function __update(props, state, isInitialized) {
  var isMount = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var isSync = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var isServer = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
  if (!isInitialized) return state;

  if (!state.error) {
    state.error = null;
  }

  return __handleAfter(props, state, isMount, isSync, isServer);
};
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["__handleAfter"] }] */


var __handleAfter = exports.__handleAfter = function __handleAfter(props, state, isMount, isSync, isServer) {
  var mod = state.mod,
      error = state.error;

  if (mod && !error) {
    (0, _hoistNonReactStatics2["default"])(_index2["default"], mod, {
      preload: true,
      preloadWeak: true
    });

    if (props.onAfter) {
      var onAfter = props.onAfter;
      var info = {
        isMount: isMount,
        isSync: isSync,
        isServer: isServer
      };
      onAfter(info, mod);
    }
  } else if (error && props.onError) {
    props.onError(error);
  }

  return state;
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(37);

var _interopRequireDefault = __webpack_require__(38);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(39));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(40));

var React = _interopRequireWildcard(__webpack_require__(0));

var _useStaticInfo = __webpack_require__(41);
/* eslint-disable import/no-dynamic-require */


var OriginalSuspense = React.Suspense;

function Suspense(_ref) {
  var key = _ref.key,
      children = _ref.children,
      rest = (0, _objectWithoutProperties2["default"])(_ref, ["key", "children"]);
  return typeof document !== 'undefined' ? React.createElement(OriginalSuspense, (0, _extends2["default"])({
    key: key
  }, rest), children) : React.createElement(React.Fragment, {
    key: key
  }, children);
} // Override the suspense module to be our own


React.Suspense = Suspense;
React["default"].Suspense = Suspense;

var App = __webpack_require__(42)["default"];

var _default = function _default(staticInfo) {
  return function (props) {
    return React.createElement(_useStaticInfo.staticInfoContext.Provider, {
      value: staticInfo
    }, React.createElement(App, props));
  };
};

exports["default"] = _default;

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireWildcard");

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireDefault");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/extends");

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/objectWithoutProperties");

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("/Users/alvin/Desktop/Azoomee/test-payment/node_modules/react-static/lib/browser/hooks/useStaticInfo");

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);


 // Your top level component

 // Export your top level component as JSX (for static rendering)

/* harmony default export */ __webpack_exports__["default"] = (_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]); // Render your app

if (typeof document !== 'undefined') {
  var target = document.getElementById('paymentForm');
  var renderMethod = target.hasChildNodes() ? react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.hydrate : react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render;

  var render = function render(Comp) {
    renderMethod( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__["AppContainer"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Comp, null)), target);
  }; // Render!


  render(_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]); // Hot Module Replacement

  if (module && module.hot) {
    module.hot.accept('./App', function () {
      render(_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]);
    });
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(43)(module)))

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = function (originalModule) {
  if (!originalModule.webpackPolyfill) {
    var module = Object.create(originalModule); // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    Object.defineProperty(module, "exports", {
      enumerable: true
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("little-state-machine-devtools");

/***/ }),
/* 45 */
/***/ (function(module) {

module.exports = JSON.parse("{\"intro\":{\"en\":\"Create your Azoomee account\",\"envf\":\"Create your Azoomee account\",\"entr\":\"Azoomee hesabınızı oluşturun\",\"esvf\":\"Crea tu cuenta Azoomee\",\"itvf\":\"Crea il tuo account Azoomee\",\"al\":\"Krijoni profilin tuaj në Azoomee\",\"kpn\":\"Create your Azoomee account\",\"tr\":\"Azoomee hesabınızı oluşturun\"},\"signupButtonText\":{\"en\":\"Create your account\",\"envf\":\"Create your account\",\"entr\":\"Hesabınızı oluşturun\",\"esvf\":\"Crea tu cuenta\",\"itvf\":\"Crea il tuo account\",\"al\":\"Krijoni llogarinë tuaj\",\"kpn\":\"Create your account\",\"tr\":\"Hesabınızı oluşturun\"},\"email\":{\"placeholder\":{\"en\":\"Enter your email\",\"envf\":\"Enter your email\",\"entr\":\"E-posta adresinizi girin\",\"esvf\":\"Introduce tu correo electrónico\",\"itvf\":\"Inserisci il tuo indirizzo email\",\"fr\":\"Enter your email\",\"al\":\"Vendosni këtu adresën tuaj të emailit\",\"kpn\":\"Enter your email address\",\"tr\":\"E-posta adresinizi girin\"},\"infotext\":{\"en\":\"Create your Azoomee account\",\"envf\":\"Create your Azoomee account\",\"entr\":\"Azoomee hesabınızı oluşturun\",\"esvf\":\"Crea tu cuenta Azoomee\",\"itvf\":\"Crea il tuo account Azoomee\",\"al\":\"Krijoni profilin tuaj në Azoomee\",\"kpn\":\"Create your Azoomee account\",\"tr\":\"Azoomee hesabınızı oluşturun\"},\"genericError\":{\"en\":\"Please provide a valid email address\",\"envf\":\"Please provide a valid email address\",\"entr\":\"Lütfen geçerli bir e-posta adresi girin\",\"esvf\":\"Por favor ingresa una dirección de correo electrónico válida\",\"itvf\":\"Si prega di fornire un indirizzo email valido\",\"al\":\"Ju lutem vendosni adresën tuaj të saktë të email\",\"kpn\":\"Please provide a valid email address\",\"tr\":\"Lütfen geçerli bir e-posta adresi girin\"},\"duplicateError\":{\"en\":\"This email address already exists\",\"envf\":\"This email address already exists\",\"entr\":\"Bu e-posta adresi zaten kayıtlı\",\"esvf\":\"Esta direccion de correo electronico ya existe\",\"itvf\":\"Questo indirizzo email esiste già\",\"al\":\"Kjo adresë emaili është përdorur më parë\",\"kpn\":\"This email address already exists\",\"tr\":\"Bu e-posta adresi zaten kayıtlı\"}},\"password\":{\"placeholder\":{\"en\":\"Create a password\",\"envf\":\"Create a password\",\"entr\":\"Şifrenizi oluşturun\",\"esvf\":\"Crea una contraseña\",\"itvf\":\"Crea una password\",\"al\":\"Krijoni një fjalëkalim\",\"kpn\":\"Create a password\",\"tr\":\"Şifrenizi oluşturun\"},\"infotext\":{\"en\":\"Create a password (minimum 6 characters)\",\"envf\":\"Create a password (minimum 6 characters)\",\"entr\":\"Şifreniz en az 6 karakter uzunluğunda olmalı\",\"esvf\":\"Su contraseña debe tener al menos 6 caracteres\",\"itvf\":\"Crea una password\",\"al\":\"Fjalëkalimi juaj duhet të përmbajë të paktën 6 karaktere\",\"kpn\":\"Create a password (minimum 6 characters)\",\"tr\":\"Şifreniz en az 6 karakter uzunluğunda olmalı\"},\"policyError\":{\"en\":\"Your password needs to be at least 6 characters in length\",\"envf\":\"Your password needs to be at least 6 characters in length\",\"entr\":\"Şifreniz en az 6 karakter uzunluğunda olmalı\",\"esvf\":\"Su contraseña debe tener al menos 6 caracteres\",\"itvf\":\"La password deve essere formata almeno da 6 caratteri.\",\"al\":\"Fjalëkalimi juaj duhet të përmbajë të paktën 6 karaktere\",\"kpn\":\"Your password needs to be at least 6 characters in length\",\"tr\":\"Şifreniz en az 6 karakter uzunluğunda olmalı\"}},\"voucher\":{\"placeholder\":{\"en\":\"Enter your voucher\",\"envf\":\"Enter your voucher\",\"entr\":\"Kampanya şifrenizi giriniz\",\"esvf\":\"Introduce tu cupón\",\"itvf\":\"Inserisci il codice\",\"al\":\"Vendosni këtu kodin tuaj dixhital\",\"kpn\":\"Enter your voucher\"},\"infotext\":{\"line1\":{\"en\":\"Enter your voucher code\",\"envf\":\"Enter your Vodafone voucher code\",\"entr\":\"Vodafone kampanya şifrenizi giriniz\",\"esvf\":\"Introduce tu código de cupón Vodafone\",\"itvf\":\"Inserisci il codice del tuo voucher Vodafone.\",\"al\":\"Vendosni kodin tuaj dixhital\",\"kpn\":\"Enter your voucher code\"},\"line2\":{\"en\":\"It's printed on your Vodafone leaflet\",\"envf\":\"\",\"entr\":\"\",\"esvf\":\"\",\"itvf\":\"\",\"al\":\"\",\"kpn\":\"\",\"tr\":\"\"}},\"error\":{\"en\":\"The voucher code you entered was not valid\",\"envf\":\"The voucher code you entered was not valid\",\"entr\":\"Girdiğiniz kampanya şifresi geçersiz\",\"esvf\":\"El código de cupón que ha introducido no es válido\",\"itvf\":\"Il codice promozionale inserito non è valido\",\"al\":\"Kodi i vendosur nuk është i vlefshëm\",\"kpn\":\"The voucher code you entered was not valid\",\"tr\":\"Girdiğiniz kupon kodu geçersiz\"}},\"checkboxes\":{\"en\":\"Please confirm that\",\"envf\":\"Please confirm that\",\"entr\":\"Aşağıdakileri onaylayarak üyeliğinizi başlatın:\",\"esvf\":\"Por favor confirma\",\"itvf\":\"Si prega di confermare.\",\"al\":\"Ju lutem  konfirmoni që\",\"kpn\":\"Please confirm that\",\"tr\":\"Aşağıdakileri onaylayarak üyeliğinizi başlatın:\",\"boxes\":{\"over18\":{\"en\":\"You are over 18\",\"envf\":\"You are over 18\",\"entr\":\"18 yaşından büyüğüm.\",\"esvf\":\"Tengo más de 18 años\",\"itvf\":\"Hai almeno 18 anni.\",\"al\":\"Jeni mbi 18 vjeç\",\"kpn\":\"You are over 18\",\"tr\":\"18 yaşından büyüğüm.\"},\"TandC\":{\"en\":\"You agree to our <a href=\\\"http://azoomee.com/index.php/terms-and-conditions/\\\">terms and conditions</a> and <a href=\\\"http://azoomee.com/index.php/privacy-policy-2/\\\">privacy policy</a>\",\"envf\":\"You agree to our terms and conditions and privacy policy available in the footer below\",\"entr\":\"Hüküm ve Koşulları ve Gizlilik Politikasını kabul ediyorum.\",\"esvf\":\"Estoy de acuerdo con los términos y condiciones y la política de privacidad disponibles debajo\",\"itvf\":\"Accetti i nostri termini e condizioni e politica sulla privacy disponibili nel piè di pagina in basso\",\"al\":\"Ju pranoni kushtet, afatet dhe <a href=\\\"http://azoomee.com/index.php/terms-and-conditions/\\\">politikën</a> e <a href=\\\"http://azoomee.com/index.php/privacy-policy-2/\\\">privatësisë</a> të Azoomee\",\"kpn\":\"You agree to our terms and conditions and privacy policy available in the footer below\",\"tr\":\"Hüküm ve Koşulları ve Gizlilik Politikasını kabul ediyorum.\"},\"marketingOptIn\":{\"en\":\"You agree to receive marketing materials from Azoomee (optional). You can also opt-out in the future at any time.\",\"envf\":\"You agree to receive marketing materials from Azoomee and Vodafone (optional). You can also opt-out in the future at any time.\",\"entr\":\"Azoomee ve Vodafone'dan pazarlama iletişimi almayı kabul ediyorum. (İsteğe bağlı) Bu seçiminizi istediğiniz zaman değiştirebilirsiniz.\",\"esvf\":\"Acepto recibir material de marketing de Azoomee y Vodafone (opcional). Se puede cancelar esta opción en el futuro en cualquier momento\",\"al\":\"Ju pranoni të merrni materiale marketingunga Azoomee (opsionale) nga të cilat mund çrregjistroheni në cdo moment.\",\"itvf\":\"Accetti di ricevere materiale di marketing da Azoomee e Vodafone (opzionale). È inoltre possibile cambiare il tuo consenso in futuro in qualsiasi momento\",\"kpn\":\"You agree to receive marketing materials from Azoomee (optional). You can also opt-out in the future at any time.\",\"tr\":\"Azoomee'den pazarlama iletişimi almayı kabul ediyorum.(İsteğe bağlı) Bu seçiminizi istediğiniz zaman değiştirebilirsiniz.\"}}},\"datause\":{\"en\":\"<div class=\\\"datauseHeader\\\">We use your personal information for the following purposes:</div> <ul><li>To create a unique Azoomee account</li><li>To contact you when there are important service notifications</li><li>To identify your account should you contact us for support</li></ul>\",\"envf\":\"<div class=\\\"datauseHeader\\\">We use your personal information for the following purposes:</div> <ul><li>To create a unique Azoomee account</li><li>To contact you when there are important service notifications</li><li>To identify your account should you contact us for support</li></ul>\",\"entr\":\"<div class=\\\"datauseHeader\\\">Kişisel bilgilerinizi aşağıdaki amaçlar için kullanacağız:</div> <ul><li>Kişiye özel bir Azoomee hesabı oluşturmak</li><li>Önemli hizmet bildirimleri olduğunda sizinle iletişim kurmak</li><li>Destek için bizimle iletişime geçtiğinizde hesabınızı teyit etmek</li></ul>\",\"esvf\":\"<div class=\\\"datauseHeader\\\">Utilizamos su información personal para los siguientes fines:</div> <ul><li>Para crear una única cuenta Azoomee</li><li>Para ponernos en contacto con usted cuando haya notificaciones importantes sobre nuestro servicio</li><li>Para poder identificar su cuenta al abrir un caso con nuestro soporte</li></ul>\",\"itvf\":\"<div class=\\\"datauseHeader\\\">Utilizziamo i tuoi dati personali per i seguenti scopi:</div> <ul><li>Per creare un account unico Azoomee</li><li>Per contattare l'utente quando ci sono importanti notifiche di servizio</li><li>Per identificare il tuo account è necessario contattarci per il supporto</li></ul>\",\"al\":\"<div class=\\\"datauseHeader\\\">Informacioni juaj personal mund të përdoret për qëllimet e meposhtme:</div> <ul><li>Për të krijuar profilin tuaj unik në Azoomee.</li><li>Për t'ju kontaktuar në rast se ka lajmerime për shërbimin Azoomee.</li><li>Për të identifikuar profilin tuaj në rast se na kontaktoni për suport.</li></ul>\",\"kpn\":\"<div class=\\\"datauseHeader\\\">We use your personal information for the following purposes:</div> <ul><li>To create a unique Azoomee account</li><li>To contact you when there are important service notifications</li><li>To identify your account should you contact us for support</li></ul>\",\"tr\":\"<div class=\\\"datauseHeader\\\">Kişisel bilgilerinizi aşağıdaki amaçlar için kullanacağız:</div> <ul><li>Kişiye özell bir Azoomee hesabı oluşturmak</li><li>Önemli hizmet bildirimleri olduğunda sizinle iletişim kurmak</li><li>Destek için bizimle iletişime geçtiğinizde hesabınızı teyit etmek</li></ul>\"},\"genericError\":{\"en\":\"Something went wrong.\",\"envf\":\"Something went wrong.\",\"entr\":\"Bir şeyler yanlış gitti\",\"esvf\":\"Algo salió mal\",\"itvf\":\"Qualcosa è andato storto\",\"al\":\"Dicka nuk funksionoi sic duhet\",\"kpn\":\"Something went wrong.\",\"tr\":\"Bir şeyler yanlış gitti\"}}");

/***/ })
/******/ ]);
});