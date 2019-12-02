/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var express_rate_limit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var express_rate_limit__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(express_rate_limit__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(helmet__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var express_mongo_sanitize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);
/* harmony import */ var express_mongo_sanitize__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(express_mongo_sanitize__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var xss_clean__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7);
/* harmony import */ var xss_clean__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(xss_clean__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var hpp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8);
/* harmony import */ var hpp__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(hpp__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9);
/* harmony import */ var _routers_defaultRouter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(49);
/* harmony import */ var _controllers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(11);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(39);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_11__);











 // 1. Create main express intance

var app = express__WEBPACK_IMPORTED_MODULE_2___default()(); // Set security HTTP

app.use(helmet__WEBPACK_IMPORTED_MODULE_4___default()()); // create a limiter, and how many request per ip in specific time period

var limiter = express_rate_limit__WEBPACK_IMPORTED_MODULE_3___default()({
  max: 100,
  // 100 requests
  windowMs: 60 * 60 * 1000,
  // in 1 hour,
  message: 'Too many requests from this IP, please try again in an hour!'
}); // 4. Ensure that the router is parsing the request body to appropriately format incoming requests. Limit body to 10kb

app.use(express__WEBPACK_IMPORTED_MODULE_2___default.a.json({
  limit: '10kb'
}));
app.use(express__WEBPACK_IMPORTED_MODULE_2___default.a.urlencoded({
  extended: true
})); // Data sanitization against NoSQL query injection

app.use(express_mongo_sanitize__WEBPACK_IMPORTED_MODULE_5___default()()); // Data sanitization against XSS

app.use(xss_clean__WEBPACK_IMPORTED_MODULE_6___default()()); // Prevent parameter pollution - we can pass a whitelist for query parameter we would like to be duplicated e.g. { whitelist: ['duration']}

app.use(hpp__WEBPACK_IMPORTED_MODULE_7___default()()); // 5. Utilise routes - apply limiter on api routes

app.use(_config__WEBPACK_IMPORTED_MODULE_11__["BACKEND_BASEURL"], limiter, _routes__WEBPACK_IMPORTED_MODULE_8__["default"]); // Handled routes that are not defined

app.all('*', _routers_defaultRouter__WEBPACK_IMPORTED_MODULE_9__["default"]);
app.use(_controllers__WEBPACK_IMPORTED_MODULE_10__["ErrorController"].handleError); // 6. Define configuration for mongodb

var MONGO_CONFIG = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}; // 7. Start server

mongoose__WEBPACK_IMPORTED_MODULE_1___default.a.connect(_config__WEBPACK_IMPORTED_MODULE_11__["MONGODB_URI"], MONGO_CONFIG).then(function _callee() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log("Connected to database at ".concat(_config__WEBPACK_IMPORTED_MODULE_11__["MONGODB_URI"]));
          app.listen(_config__WEBPACK_IMPORTED_MODULE_11__["MONGODB_PORT"], function () {
            console.log("Server is running on PORT: ".concat(_config__WEBPACK_IMPORTED_MODULE_11__["MONGODB_PORT"]));
          });

        case 2:
        case "end":
          return _context.stop();
      }
    }
  });
}).catch(function (err) {
  console.error(err);
});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("express-rate-limit");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("helmet");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("express-mongo-sanitize");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("xss-clean");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("hpp");

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _routers_authRouter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _routers_userRouter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45);
/* harmony import */ var _routers_transactionRouter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(51);




var router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();
router.use('/auth', _routers_authRouter__WEBPACK_IMPORTED_MODULE_1__["default"]);
router.use('/users', _routers_userRouter__WEBPACK_IMPORTED_MODULE_2__["default"]);
router.use('/transactions', _routers_transactionRouter__WEBPACK_IMPORTED_MODULE_3__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (router);

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _controllers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);


var authRouter = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();
authRouter.post('/signup', _controllers__WEBPACK_IMPORTED_MODULE_1__["AuthController"].signUp);
authRouter.post('/login', _controllers__WEBPACK_IMPORTED_MODULE_1__["AuthController"].login);
authRouter.post('/forgot_password', _controllers__WEBPACK_IMPORTED_MODULE_1__["AuthController"].forgotPassword);
authRouter.patch('/reset_password/:token', _controllers__WEBPACK_IMPORTED_MODULE_1__["AuthController"].resetPassword);
/* harmony default export */ __webpack_exports__["default"] = (authRouter);

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AuthController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthController", function() { return _AuthController__WEBPACK_IMPORTED_MODULE_0__["AuthController"]; });

/* harmony import */ var _UserController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserController", function() { return _UserController__WEBPACK_IMPORTED_MODULE_1__["UserController"]; });

/* harmony import */ var _BaseController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseController", function() { return _BaseController__WEBPACK_IMPORTED_MODULE_2__["BaseController"]; });

/* harmony import */ var _ErrorController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorController", function() { return _ErrorController__WEBPACK_IMPORTED_MODULE_3__["ErrorController"]; });

/* harmony import */ var _TransactionController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransactionController", function() { return _TransactionController__WEBPACK_IMPORTED_MODULE_4__["TransactionController"]; });







/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthController", function() { return AuthController; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(17);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _managers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(18);
/* harmony import */ var _BaseController__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(40);
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(33);
/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(37);






// Managers
 // Controllers

 // Errors

 // Utils


var AuthController =
/*#__PURE__*/
function (_BaseController) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(AuthController, _BaseController);

  function AuthController() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, AuthController);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(AuthController).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(AuthController, null, [{
    key: "signUp",
    value: function signUp(req, res, next) {
      var _req$body, name, email, password, passwordConfirm, _ref, token, user;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function signUp$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _req$body = req.body, name = _req$body.name, email = _req$body.email, password = _req$body.password, passwordConfirm = _req$body.passwordConfirm;

              if (!(!name || !email || !password || !passwordConfirm)) {
                _context.next = 5;
                break;
              }

              _utils_logger__WEBPACK_IMPORTED_MODULE_9__["default"].error('[AuthController - signUp] Missing either name, email, password or passwordConfirm in request body');
              return _context.abrupt("return", next(new _errors__WEBPACK_IMPORTED_MODULE_8__["AppError"]('Invalid Arguments - Missing either name, email, password or passwordConfirm in request body', 400)));

            case 5:
              _context.next = 7;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_managers__WEBPACK_IMPORTED_MODULE_6__["UserManager"].shareInstance.signUp({
                name: name,
                email: email,
                password: password,
                passwordConfirm: passwordConfirm
              }));

            case 7:
              _ref = _context.sent;
              token = _ref.token;
              user = _ref.user;
              _utils_logger__WEBPACK_IMPORTED_MODULE_9__["default"].info("[AuthController - signUp] SignUp success");
              AuthController.createSendToken(user, token, 201, res);
              _context.next = 18;
              break;

            case 14:
              _context.prev = 14;
              _context.t0 = _context["catch"](0);
              _utils_logger__WEBPACK_IMPORTED_MODULE_9__["default"].error("[AuthController - signUp] SignUp request failed: ".concat(_context.t0.message));
              next(_context.t0);

            case 18:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[0, 14]]);
    }
  }, {
    key: "login",
    value: function login(req, res, next) {
      var _req$body2, email, password, _ref2, token, user;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function login$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _req$body2 = req.body, email = _req$body2.email, password = _req$body2.password; // Check if email and password exist

              if (!(!email || !password)) {
                _context2.next = 5;
                break;
              }

              _utils_logger__WEBPACK_IMPORTED_MODULE_9__["default"].error('[AuthController - login] Missing email or password in request body');
              return _context2.abrupt("return", next(new _errors__WEBPACK_IMPORTED_MODULE_8__["AppError"]('Invalid Arguments - Missing email or password in request body', 400)));

            case 5:
              _context2.next = 7;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_managers__WEBPACK_IMPORTED_MODULE_6__["UserManager"].shareInstance.login({
                email: email,
                password: password
              }));

            case 7:
              _ref2 = _context2.sent;
              token = _ref2.token;
              user = _ref2.user;
              AuthController.createSendToken(user, token, 200, res);
              _context2.next = 17;
              break;

            case 13:
              _context2.prev = 13;
              _context2.t0 = _context2["catch"](0);
              _utils_logger__WEBPACK_IMPORTED_MODULE_9__["default"].error("[AuthController - Login] Login failed: ".concat(_context2.t0.message));
              next(_context2.t0);

            case 17:
            case "end":
              return _context2.stop();
          }
        }
      }, null, null, [[0, 13]]);
    }
  }, {
    key: "forgotPassword",
    value: function forgotPassword(req, res, next) {
      var email, protocol, host;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function forgotPassword$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              email = req.body.email;
              protocol = req.protocol;
              host = req.get('host'); // Check if email and password exist

              if (email) {
                _context3.next = 7;
                break;
              }

              _utils_logger__WEBPACK_IMPORTED_MODULE_9__["default"].error('[AuthController - forgotPassword] Missing email in request body');
              return _context3.abrupt("return", next(new _errors__WEBPACK_IMPORTED_MODULE_8__["AppError"]('Invalid Arguments - Missing email in request body', 400)));

            case 7:
              _context3.next = 9;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_managers__WEBPACK_IMPORTED_MODULE_6__["UserManager"].shareInstance.forgotPassword(email, {
                host: host,
                protocol: protocol
              }));

            case 9:
              res.status(200).json({
                statusCd: 200,
                status: 'success',
                message: 'Token sent to email'
              });
              _context3.next = 16;
              break;

            case 12:
              _context3.prev = 12;
              _context3.t0 = _context3["catch"](0);
              _utils_logger__WEBPACK_IMPORTED_MODULE_9__["default"].error("[AuthController - forgotPassword] Forgot Password function failed: ".concat(_context3.t0.message));
              next(_context3.t0);

            case 16:
            case "end":
              return _context3.stop();
          }
        }
      }, null, null, [[0, 12]]);
    }
  }, {
    key: "resetPassword",
    value: function resetPassword(req, res, next) {
      var token, _req$body3, password, passwordConfirm, _ref3, jwtToken, user;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function resetPassword$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              // get token from the params
              token = req.params.token;
              _req$body3 = req.body, password = _req$body3.password, passwordConfirm = _req$body3.passwordConfirm;

              if (!(!password || !passwordConfirm)) {
                _context4.next = 6;
                break;
              }

              _utils_logger__WEBPACK_IMPORTED_MODULE_9__["default"].error('[AuthController - resetPassword] Missing password or passwordConfirm in request body');
              return _context4.abrupt("return", next(new _errors__WEBPACK_IMPORTED_MODULE_8__["AppError"]('Invalid Arguments - Missing password or passwordConfirm in request body', 400)));

            case 6:
              _context4.next = 8;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_managers__WEBPACK_IMPORTED_MODULE_6__["UserManager"].shareInstance.resetPassword(token, password, passwordConfirm));

            case 8:
              _ref3 = _context4.sent;
              jwtToken = _ref3.token;
              user = _ref3.user;
              AuthController.createSendToken(user, jwtToken, 200, res);
              _context4.next = 18;
              break;

            case 14:
              _context4.prev = 14;
              _context4.t0 = _context4["catch"](0);
              _utils_logger__WEBPACK_IMPORTED_MODULE_9__["default"].error("[AuthController - resetPassword] reset password function failed: ".concat(_context4.t0.message));
              next(_context4.t0);

            case 18:
            case "end":
              return _context4.stop();
          }
        }
      }, null, null, [[0, 14]]);
    }
  }]);

  return AuthController;
}(_BaseController__WEBPACK_IMPORTED_MODULE_7__["BaseController"]);

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/classCallCheck");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/createClass");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/possibleConstructorReturn");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/getPrototypeOf");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/inherits");

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserManager", function() { return _UserManager__WEBPACK_IMPORTED_MODULE_0__["UserManager"]; });

/* harmony import */ var _TransactionManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransactionManager", function() { return _TransactionManager__WEBPACK_IMPORTED_MODULE_1__["TransactionManager"]; });

/* harmony import */ var _BaseManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseManager", function() { return _BaseManager__WEBPACK_IMPORTED_MODULE_2__["BaseManager"]; });





/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManager", function() { return UserManager; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(35);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(17);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(20);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(30);
/* harmony import */ var _BaseManager__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(54);
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(33);
/* harmony import */ var _utils_TokenManager__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(24);
/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(37);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(39);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_13__);







// Models
 // Services

 //Managers

 //Errors

 // utils


 // Constants


var UserManager =
/*#__PURE__*/
function (_BaseManager) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(UserManager, _BaseManager);

  function UserManager() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, UserManager);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(UserManager).call(this));
    var instance = _this.constructor.instance;

    if (instance) {
      return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(_this, instance);
    }

    _this.constructor.instance = _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this); // Assign User model

    _this._user = _models__WEBPACK_IMPORTED_MODULE_7__["User"];
    return _this;
  } // shared instance of UserManager


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(UserManager, [{
    key: "signUp",
    value: function signUp(user) {
      var newUser, token;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function signUp$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(new this._user(user).save());

            case 3:
              newUser = _context.sent;
              _utils_logger__WEBPACK_IMPORTED_MODULE_12__["default"].info('[UserManager - signUp] Successfully added user to the database'); // Create token

              token = _utils_TokenManager__WEBPACK_IMPORTED_MODULE_11__["default"].signJWTToken(newUser._id);
              _utils_logger__WEBPACK_IMPORTED_MODULE_12__["default"].info('[UserManager - signUp] JWT created');
              return _context.abrupt("return", {
                token: token,
                user: newUser.serialize()
              });

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](0);
              _utils_logger__WEBPACK_IMPORTED_MODULE_12__["default"].error("[UserManager - signUp] Unable to signup user: ".concat(_context.t0.message));
              throw UserManager.parseError(_context.t0, 'User');

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, null, this, [[0, 10]]);
    }
  }, {
    key: "login",
    value: function login(user) {
      var existingUser, token;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function login$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(this._user.findOne({
                email: user.email
              }).select('+password'));

            case 3:
              existingUser = _context2.sent;
              // make sure we get the password although we specified in the model that it wont be sent by default
              _utils_logger__WEBPACK_IMPORTED_MODULE_12__["default"].info('[UserManager - login] get User from database');
              _context2.t0 = !existingUser;

              if (_context2.t0) {
                _context2.next = 10;
                break;
              }

              _context2.next = 9;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(existingUser.correctPassword(user.password, existingUser.password));

            case 9:
              _context2.t0 = !_context2.sent;

            case 10:
              if (!_context2.t0) {
                _context2.next = 13;
                break;
              }

              _utils_logger__WEBPACK_IMPORTED_MODULE_12__["default"].error('[UserManager - login] Incorrect email or password');
              throw new _errors__WEBPACK_IMPORTED_MODULE_10__["AppError"]('Incorrect email or password', 401);

            case 13:
              // if everything is ok , respond with token
              token = _utils_TokenManager__WEBPACK_IMPORTED_MODULE_11__["default"].signJWTToken(existingUser._id);
              return _context2.abrupt("return", {
                token: token,
                user: existingUser.serialize()
              });

            case 17:
              _context2.prev = 17;
              _context2.t1 = _context2["catch"](0);
              _utils_logger__WEBPACK_IMPORTED_MODULE_12__["default"].error("[UserManager - login] Login failure: ".concat(_context2.t1.message));
              throw UserManager.parseError(_context2.t1, 'User');

            case 21:
            case "end":
              return _context2.stop();
          }
        }
      }, null, this, [[0, 17]]);
    }
  }, {
    key: "forgotPassword",
    value: function forgotPassword(email, urlConfig) {
      var user, resetToken, host, protocol, resetURL, message;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function forgotPassword$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(this._user.findOne({
                email: email
              }));

            case 3:
              user = _context3.sent;

              if (user) {
                _context3.next = 7;
                break;
              }

              _utils_logger__WEBPACK_IMPORTED_MODULE_12__["default"].error("[UserManager - forgotPassword] User not found");
              throw new _errors__WEBPACK_IMPORTED_MODULE_10__["AppError"]('User not found', 404);

            case 7:
              // Generate random reset token
              resetToken = user.createPasswordResetToken(); // would Need to set the validateBeforeSave option to false if we were goinmg to save the user without a required field or a field which doesnt match validation

              _context3.next = 10;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(user.save({
                validateBeforeSave: false
              }));

            case 10:
              // Send to users email
              host = urlConfig.host, protocol = urlConfig.protocol;
              resetURL = "".concat(protocol, "://").concat(host).concat(_config__WEBPACK_IMPORTED_MODULE_13__["BACKEND_BASEURL"], "/reset-password/").concat(resetToken);
              message = "Forgot your password? Submit a PATCH request with your new password and passwordConfirm to ".concat(resetURL, "\nIf you didn't forget your password, please ignore this email");
              _context3.prev = 13;
              _context3.next = 16;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_services__WEBPACK_IMPORTED_MODULE_8__["EmailService"].shareInstance.sendEmail({
                email: user.email,
                subject: 'Your password reset token is valid for 10mins',
                message: message
              }));

            case 16:
              _context3.next = 26;
              break;

            case 18:
              _context3.prev = 18;
              _context3.t0 = _context3["catch"](13);
              // reset the passwordResetToken
              user.passwordResetToken = undefined;
              user.passwordResetExpires = undefined;
              _context3.next = 24;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(user.save({
                validateBeforeSave: false
              }));

            case 24:
              _utils_logger__WEBPACK_IMPORTED_MODULE_12__["default"].error("[UserManager - forgotPassword] email failed: ".concat(_context3.t0.message));
              throw new _errors__WEBPACK_IMPORTED_MODULE_10__["AppError"]('Internal Server Failure', 500);

            case 26:
              _context3.next = 32;
              break;

            case 28:
              _context3.prev = 28;
              _context3.t1 = _context3["catch"](0);
              _utils_logger__WEBPACK_IMPORTED_MODULE_12__["default"].error("[UserManager - forgotPassword] Forgot Password failure: ".concat(_context3.t1.message));
              throw UserManager.parseError(_context3.t1, 'User');

            case 32:
            case "end":
              return _context3.stop();
          }
        }
      }, null, this, [[0, 28], [13, 18]]);
    }
  }, {
    key: "resetPassword",
    value: function resetPassword(token, password, passwordConfirm) {
      var hashedToken, user, jwtToken;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function resetPassword$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              // hash resettoken
              hashedToken = _utils_TokenManager__WEBPACK_IMPORTED_MODULE_11__["default"].hashPasswordResetToken(token); // get user based on hased token and checking if expire date is greater than now

              _context4.next = 4;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_models__WEBPACK_IMPORTED_MODULE_7__["User"].findOne({
                passwordResetToken: hashedToken,
                passwordResetExpires: {
                  $gt: Date.now()
                }
              }));

            case 4:
              user = _context4.sent;

              if (user) {
                _context4.next = 8;
                break;
              }

              _utils_logger__WEBPACK_IMPORTED_MODULE_12__["default"].error('[UserManager - resetPassword] Token is invalid or has expired');
              throw new _errors__WEBPACK_IMPORTED_MODULE_10__["AppError"]('Password Reset Token invalid or expired', 400);

            case 8:
              user.password = password;
              user.passwordConfirm = passwordConfirm;
              user.passwordResetToken = undefined;
              user.passwordResetExpires = undefined;
              _context4.next = 14;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(user.save());

            case 14:
              // Log the user in, send JWT to client
              jwtToken = _utils_TokenManager__WEBPACK_IMPORTED_MODULE_11__["default"].signJWTToken(user._id);
              return _context4.abrupt("return", {
                token: jwtToken,
                user: user.serialize()
              });

            case 18:
              _context4.prev = 18;
              _context4.t0 = _context4["catch"](0);
              _utils_logger__WEBPACK_IMPORTED_MODULE_12__["default"].error("[UserManager - resetPassword] Reset Password failure: ".concat(_context4.t0.message));
              throw UserManager.parseError(_context4.t0, 'User');

            case 22:
            case "end":
              return _context4.stop();
          }
        }
      }, null, null, [[0, 18]]);
    }
  }, {
    key: "updatePassword",
    value: function updatePassword(id, oldpassword, newPassword, newPasswordConfirm) {
      var user, jwtToken;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function updatePassword$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _context5.next = 3;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(this._user.findById(id).select('+password'));

            case 3:
              user = _context5.sent;
              _context5.next = 6;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(user.correctPassword(oldpassword, user.password));

            case 6:
              if (_context5.sent) {
                _context5.next = 9;
                break;
              }

              _utils_logger__WEBPACK_IMPORTED_MODULE_12__["default"].error('[UserManager - updatePassword] Password no not match');
              throw new _errors__WEBPACK_IMPORTED_MODULE_10__["AppError"]('Incorrect Password', 400);

            case 9:
              user.password = newPassword;
              user.passwordConfirm = newPasswordConfirm;
              _context5.next = 13;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(user.save());

            case 13:
              // Log the user in, send JWT to client
              jwtToken = _utils_TokenManager__WEBPACK_IMPORTED_MODULE_11__["default"].signJWTToken(user._id);
              return _context5.abrupt("return", {
                token: jwtToken,
                user: user.serialize()
              });

            case 17:
              _context5.prev = 17;
              _context5.t0 = _context5["catch"](0);
              _utils_logger__WEBPACK_IMPORTED_MODULE_12__["default"].error("[UserManager - updatePassword] Update Password failure: ".concat(_context5.t0.message));
              throw UserManager.parseError(_context5.t0, 'User');

            case 21:
            case "end":
              return _context5.stop();
          }
        }
      }, null, this, [[0, 17]]);
    }
  }, {
    key: "updateUserInfo",
    value: function updateUserInfo(id, newUserInfo) {
      var updatedUser;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function updateUserInfo$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;
              _context6.next = 3;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(this._user.findByIdAndUpdate(id, newUserInfo, {
                new: true,
                // return updated info
                runValidators: true
              }));

            case 3:
              updatedUser = _context6.sent;
              return _context6.abrupt("return", updatedUser.serialize());

            case 7:
              _context6.prev = 7;
              _context6.t0 = _context6["catch"](0);
              _utils_logger__WEBPACK_IMPORTED_MODULE_12__["default"].error("[UserManager - updateUserInfo] Update User Info failure failure: ".concat(_context6.t0.message));
              throw UserManager.parseError(_context6.t0, 'User');

            case 11:
            case "end":
              return _context6.stop();
          }
        }
      }, null, this, [[0, 7]]);
    }
  }, {
    key: "deactivateUser",
    value: function deactivateUser(id) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function deactivateUser$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.prev = 0;
              _context7.next = 3;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(this._user.findByIdAndUpdate(id, {
                active: false
              }));

            case 3:
              _context7.next = 9;
              break;

            case 5:
              _context7.prev = 5;
              _context7.t0 = _context7["catch"](0);
              _utils_logger__WEBPACK_IMPORTED_MODULE_12__["default"].error("[UserManager - deactivateUse] Deactivate User failure: ".concat(_context7.t0.message));
              throw UserManager.parseError(_context7.t0, 'User');

            case 9:
            case "end":
              return _context7.stop();
          }
        }
      }, null, this, [[0, 5]]);
    }
  }, {
    key: "getUser",
    value: function getUser(id) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getUser$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _context8.prev = 0;
              return _context8.abrupt("return", this._user.findById(id));

            case 4:
              _context8.prev = 4;
              _context8.t0 = _context8["catch"](0);
              _utils_logger__WEBPACK_IMPORTED_MODULE_12__["default"].error("[UserManager - getUser] Get User failure: ".concat(_context8.t0.message));
              throw UserManager.parseError(_context8.t0, 'User');

            case 8:
            case "end":
              return _context8.stop();
          }
        }
      }, null, this, [[0, 4]]);
    } // FIXME: Put in Admin Manager

  }, {
    key: "getUsers",
    value: function getUsers() {
      var users;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getUsers$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              _context9.prev = 0;
              _context9.next = 3;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(this._user.find());

            case 3:
              users = _context9.sent;

              if (users) {
                _context9.next = 6;
                break;
              }

              return _context9.abrupt("return", []);

            case 6:
              return _context9.abrupt("return", users);

            case 9:
              _context9.prev = 9;
              _context9.t0 = _context9["catch"](0);
              _utils_logger__WEBPACK_IMPORTED_MODULE_12__["default"].error("[UserManager - getUsers] Get Users failure: ".concat(_context9.t0.message));
              throw UserManager.parseError(_context9.t0, 'User');

            case 13:
            case "end":
              return _context9.stop();
          }
        }
      }, null, this, [[0, 9]]);
    }
  }], [{
    key: "shareInstance",
    get: function get() {
      if (this._sharedInstance === undefined) {
        this._sharedInstance = new UserManager();
      }

      return this._sharedInstance;
    }
  }]);

  return UserManager;
}(_BaseManager__WEBPACK_IMPORTED_MODULE_9__["BaseManager"]);

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _userModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "User", function() { return _userModel__WEBPACK_IMPORTED_MODULE_0__["User"]; });

/* harmony import */ var _transactionModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Transaction", function() { return _transactionModel__WEBPACK_IMPORTED_MODULE_1__["Transaction"]; });




/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22);
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23);
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_TokenManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24);





var userSchema = new mongoose__WEBPACK_IMPORTED_MODULE_1___default.a.Schema({
  email: {
    type: String,
    required: [true, 'Please provide your email'],
    lowercase: true,
    unique: true,
    validate: [validator__WEBPACK_IMPORTED_MODULE_2___default.a.isEmail, 'Please provide a valid email']
  },
  name: {
    type: String,
    require: [true, 'Please tell us your name']
  },
  photo: String,
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  },
  password: {
    type: String,
    minlength: 8,
    require: [true, 'Please enter a password'],
    select: false // Do not send password by default

  },
  passwordConfirm: {
    type: String,
    require: [true, 'Please confirm password'],
    validate: {
      // This only works on create and save
      validator: function validator(el) {
        // true is this element(passwordConfirm) equal to password
        return el === this.password;
      },
      message: 'Passwords are not the same'
    }
  },
  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordResetExpires: Date,
  active: {
    type: Boolean,
    default: true,
    select: false
  }
}); // pre save hook for encrypting password

userSchema.pre('save', function _callee(next) {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (this.isModified('password')) {
            _context.next = 2;
            break;
          }

          return _context.abrupt("return", next());

        case 2:
          _context.next = 4;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(bcryptjs__WEBPACK_IMPORTED_MODULE_3___default.a.hash(this.password, 12));

        case 4:
          this.password = _context.sent;
          // delete passwordconfirm field
          this.passwordConfirm = undefined;
          next();

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, null, this);
}); // presave hook for adding passwordChangedAt field

userSchema.pre('save', function (next) {
  // if the password has not changed or the document is new
  if (!this.isModified('password') || this.isNew) return next(); // substract 1 second to endsure the password changed at date is before the date on the web token

  this.passwordChangedAt = Date.now() - 1000;
  next();
}); // prefind hook to only look for documents with active set to true

userSchema.pre(/^find/, function (next) {
  // this points to the current query
  this.find({
    active: {
      $ne: false
    }
  }); // active not equal to false

  next();
}); // instance methods
// compare whether the password sent by the user, is the same as the password saved in the database

userSchema.methods.correctPassword = function _callee2(candidatePassword, userPassword) {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(bcryptjs__WEBPACK_IMPORTED_MODULE_3___default.a.compare(candidatePassword, userPassword));

        case 2:
          return _context2.abrupt("return", _context2.sent);

        case 3:
        case "end":
          return _context2.stop();
      }
    }
  });
}; // check if password has been changed after token issue


userSchema.methods.changePasswordAfter = function (JWTTimestamp) {
  if (this.passwordChangedAt) {
    var changedTimestamp = parseInt(this.passwordChangedAt.getTime() / 1000, 10);
    return changedTimestamp > JWTTimestamp;
  }

  return false;
}; // return the params we want to send to to UI


userSchema.methods.serialize = function () {
  var self = this;
  var email = self.email,
      name = self.name,
      role = self.role,
      id = self._id;
  return {
    id: id,
    email: email,
    name: name,
    role: role
  };
}; // create reset password token to be sent to user on reset password request


userSchema.methods.createPasswordResetToken = function () {
  // create reset token
  var resetToken = _utils_TokenManager__WEBPACK_IMPORTED_MODULE_4__["default"].createPasswordResetToken(); // hash the reset token and set it on the instance

  this.passwordResetToken = _utils_TokenManager__WEBPACK_IMPORTED_MODULE_4__["default"].hashPasswordResetToken(resetToken); // Expires 10 mins (in ms) from now

  this.passwordResetExpires = Date.now() + 10 * 60 * 1000; // We will send the unencrypted token via email

  return resetToken;
};

var User = mongoose__WEBPACK_IMPORTED_MODULE_1___default.a.model('users', userSchema);

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("validator");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("bcryptjs");

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25);
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26);
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(27);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _config_keys__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(28);
/* harmony import */ var _config_keys__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_config_keys__WEBPACK_IMPORTED_MODULE_6__);








var TokenManager =
/*#__PURE__*/
function () {
  function TokenManager() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, TokenManager);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(TokenManager, null, [{
    key: "signJWTToken",
    value: function signJWTToken(id) {
      return jsonwebtoken__WEBPACK_IMPORTED_MODULE_5___default.a.sign({
        id: id
      }, _config_keys__WEBPACK_IMPORTED_MODULE_6__["JWT_SECRET"], {
        expiresIn: _config_keys__WEBPACK_IMPORTED_MODULE_6__["JWT_EXPIRES_IN"]
      });
    }
  }, {
    key: "verifyJWTToken",
    value: function verifyJWTToken(token) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function verifyJWTToken$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", Object(util__WEBPACK_IMPORTED_MODULE_4__["promisify"])(jsonwebtoken__WEBPACK_IMPORTED_MODULE_5___default.a.verify)(token, _config_keys__WEBPACK_IMPORTED_MODULE_6__["JWT_SECRET"]));

            case 1:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  }, {
    key: "createPasswordResetToken",
    value: function createPasswordResetToken() {
      return crypto__WEBPACK_IMPORTED_MODULE_3___default.a.randomBytes(32).toString('hex');
    }
  }, {
    key: "hashPasswordResetToken",
    value: function hashPasswordResetToken(token) {
      return crypto__WEBPACK_IMPORTED_MODULE_3___default.a.createHash('sha256').update(token).digest('hex');
    }
  }]);

  return TokenManager;
}();

/* harmony default export */ __webpack_exports__["default"] = (TokenManager);

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

if (false) {} else {
  // return dev set of keys
  module.exports = __webpack_require__(29);
}

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = {
  JWT_SECRET: 'the-real-badass-ulta-secure-secret-key',
  JWT_EXPIRES_IN: '1d',
  JWT_COOKIE_EXPIRES_IN: 1,
  EMAIL_SERVICE: {
    EMAIL_HOST: 'smtp.mailtrap.io',
    EMAIL_USERNAME: '70d576d4d5db67',
    EMAIL_PASSWORD: 'da4bcd8cec6650',
    EMAIL_PORT: '25'
  }
};

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EmailService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmailService", function() { return _EmailService__WEBPACK_IMPORTED_MODULE_0__["EmailService"]; });



/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailService", function() { return EmailService; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(32);
/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nodemailer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config_keys__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(28);
/* harmony import */ var _config_keys__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_config_keys__WEBPACK_IMPORTED_MODULE_4__);





var EmailService =
/*#__PURE__*/
function () {
  function EmailService() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, EmailService);

    var instance = this.constructor.instance;

    if (instance) {
      return instance;
    }

    this.constructor.instance = this; // Assign User model

    this._tranporter = nodemailer__WEBPACK_IMPORTED_MODULE_3___default.a.createTransport({
      host: _config_keys__WEBPACK_IMPORTED_MODULE_4__["EMAIL_SERVICE"].EMAIL_HOST,
      port: _config_keys__WEBPACK_IMPORTED_MODULE_4__["EMAIL_SERVICE"].EMAIL_PORT,
      auth: {
        user: _config_keys__WEBPACK_IMPORTED_MODULE_4__["EMAIL_SERVICE"].EMAIL_USERNAME,
        pass: _config_keys__WEBPACK_IMPORTED_MODULE_4__["EMAIL_SERVICE"].EMAIL_PASSWORD
      }
    });
  } // shared instance of EmailService


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(EmailService, [{
    key: "sendEmail",
    value: function sendEmail(options) {
      var mailOptions;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function sendEmail$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // define mail options
              mailOptions = {
                from: 'Marc Brathwaite <marcbrathwaite@brathworks.io>',
                to: options.email,
                subject: options.subject,
                text: options.message
              }; // Send mail

              _context.next = 3;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(this._tranporter.sendMail(mailOptions));

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    }
  }], [{
    key: "shareInstance",
    get: function get() {
      if (this._sharedInstance === undefined) {
        this._sharedInstance = new EmailService();
      }

      return this._sharedInstance;
    }
  }]);

  return EmailService;
}();

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("nodemailer");

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppError", function() { return _AppError__WEBPACK_IMPORTED_MODULE_0__["AppError"]; });



/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppError", function() { return AppError; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(36);
/* harmony import */ var _babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_5__);






var AppError =
/*#__PURE__*/
function (_Error) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(AppError, _Error);

  function AppError(message, statusCode) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, AppError);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2___default()(AppError).call(this, message));
    _this.name = 'AppError';
    _this.statusCode = statusCode;
    _this.status = "".concat(statusCode).startsWith('4') ? 'failure' : 'error';
    _this.isOperational = true; // all stack trace functionality

    Error.captureStackTrace(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), _this.constructor);
    return _this;
  }

  return AppError;
}(_babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_5___default()(Error));

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/assertThisInitialized");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/wrapNativeSuper");

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var winston__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38);
/* harmony import */ var winston__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(winston__WEBPACK_IMPORTED_MODULE_0__);

var combine = winston__WEBPACK_IMPORTED_MODULE_0__["format"].combine,
    timestamp = winston__WEBPACK_IMPORTED_MODULE_0__["format"].timestamp,
    label = winston__WEBPACK_IMPORTED_MODULE_0__["format"].label,
    printf = winston__WEBPACK_IMPORTED_MODULE_0__["format"].printf;
var myFormat = printf(function (_ref) {
  var level = _ref.level,
      message = _ref.message,
      label = _ref.label,
      timestamp = _ref.timestamp;
  return "".concat(timestamp, " [").concat(label, "] ").concat(level, ": ").concat(message);
});
var logger = Object(winston__WEBPACK_IMPORTED_MODULE_0__["createLogger"])({
  format: combine(label({
    label: 'expense-tracker-api'
  }), timestamp(), myFormat),
  transports: [new winston__WEBPACK_IMPORTED_MODULE_0__["transports"].Console()]
});
/* harmony default export */ __webpack_exports__["default"] = (logger);

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("winston");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

exports.MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/expense-tracker';
exports.MONGODB_PORT = process.env.PORT || 4000;
exports.BACKEND_BASEURL = '/api/v1';

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseController", function() { return BaseController; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28);
/* harmony import */ var _config_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_config_keys__WEBPACK_IMPORTED_MODULE_2__);



var BaseController =
/*#__PURE__*/
function () {
  function BaseController() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, BaseController);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(BaseController, null, [{
    key: "createSendToken",
    value: function createSendToken(user, token, statusCode, res) {
      var cookieOptions = {
        expires: new Date(Date.now() + _config_keys__WEBPACK_IMPORTED_MODULE_2__["JWT_COOKIE_EXPIRES_IN"] * 24 * 60 * 60 * 100),
        httpOnly: true // cookie cannot be modified by the browser

      };

      if (false) {} // Creating cookie to send to client


      res.cookie('jwt', token, cookieOptions);
      res.status(statusCode).json({
        statusCd: statusCode,
        status: 'success',
        token: token,
        data: {
          user: user
        }
      });
    }
  }]);

  return BaseController;
}();

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserController", function() { return UserController; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(17);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _managers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(18);
/* harmony import */ var _BaseController__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(40);
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(33);
/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(37);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(42);






// Managers
 // Controller

 // Erros




var UserController =
/*#__PURE__*/
function (_BaseController) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(UserController, _BaseController);

  function UserController() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, UserController);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(UserController).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(UserController, null, [{
    key: "getCurrentUser",
    value: function getCurrentUser(req, res, next) {
      var user;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getCurrentUser$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              user = req.user;

              if (user) {
                _context.next = 4;
                break;
              }

              _utils_logger__WEBPACK_IMPORTED_MODULE_9__["default"].error('[UserController - getCurrentUser] User not found');
              return _context.abrupt("return", next(new _errors__WEBPACK_IMPORTED_MODULE_8__["AppError"]('User not found', 404)));

            case 4:
              res.status(200).json({
                statusCd: 200,
                status: 'success',
                data: {
                  user: user
                }
              });

            case 5:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  }, {
    key: "getUsers",
    value: function getUsers(req, res, next) {
      var users;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getUsers$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_managers__WEBPACK_IMPORTED_MODULE_6__["UserManager"].shareInstance.getUsers());

            case 3:
              users = _context2.sent;
              res.status(200).json({
                statusCd: 200,
                status: 'success',
                data: {
                  users: users
                }
              });
              _context2.next = 11;
              break;

            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](0);
              _utils_logger__WEBPACK_IMPORTED_MODULE_9__["default"].error("[UserController - getUsers] Get Users failure: ".concat(_context2.t0.message));
              next(_context2.t0);

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, null, null, [[0, 7]]);
    }
  }, {
    key: "updatePassword",
    value: function updatePassword(req, res, next) {
      var _req$body, password, newPassword, newPasswordConfirm, user, id, _ref, token, userModel;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function updatePassword$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              // Get password from body
              _req$body = req.body, password = _req$body.password, newPassword = _req$body.newPassword, newPasswordConfirm = _req$body.newPasswordConfirm;
              user = req.user;

              if (user) {
                _context3.next = 6;
                break;
              }

              _utils_logger__WEBPACK_IMPORTED_MODULE_9__["default"].error('[UserController - updatePassword] User not found');
              return _context3.abrupt("return", next(new _errors__WEBPACK_IMPORTED_MODULE_8__["AppError"]('User not found', 404)));

            case 6:
              // get userId
              id = user.id;

              if (!(!password || !newPassword || !newPasswordConfirm)) {
                _context3.next = 10;
                break;
              }

              _utils_logger__WEBPACK_IMPORTED_MODULE_9__["default"].error("[UserController - updatePassword] Missing either name, email, password or passwordConfirm in request body");
              return _context3.abrupt("return", next(new _errors__WEBPACK_IMPORTED_MODULE_8__["AppError"]('Missing either name, email, password or passwordConfirm in request body', 400)));

            case 10:
              _context3.next = 12;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_managers__WEBPACK_IMPORTED_MODULE_6__["UserManager"].shareInstance.updatePassword(id, password, newPassword, newPasswordConfirm));

            case 12:
              _ref = _context3.sent;
              token = _ref.token;
              userModel = _ref.user;
              UserController.createSendToken(userModel, token, 200, res);
              _context3.next = 22;
              break;

            case 18:
              _context3.prev = 18;
              _context3.t0 = _context3["catch"](0);
              _utils_logger__WEBPACK_IMPORTED_MODULE_9__["default"].error("[UserController - updatePassword] Update Password failure: ".concat(_context3.t0.message));
              next(_context3.t0);

            case 22:
            case "end":
              return _context3.stop();
          }
        }
      }, null, null, [[0, 18]]);
    }
  }, {
    key: "updateUserInfo",
    value: function updateUserInfo(req, res, next) {
      var user, id, filteredBody, updatedUser;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function updateUserInfo$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;

              if (!(req.body.password || req.body.passwordConfirm)) {
                _context4.next = 3;
                break;
              }

              return _context4.abrupt("return", next(new _errors__WEBPACK_IMPORTED_MODULE_8__["AppError"]('This is route is not for password updates', 400)));

            case 3:
              user = req.user;

              if (user) {
                _context4.next = 6;
                break;
              }

              return _context4.abrupt("return", next(new _errors__WEBPACK_IMPORTED_MODULE_8__["AppError"]('User not found', 404)));

            case 6:
              // get userId
              id = user.id; // filter out unwanted field names that are not allowed to be updated

              filteredBody = Object(_utils__WEBPACK_IMPORTED_MODULE_10__["filterObj"])(req.body, 'name', 'email');
              _context4.next = 10;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_managers__WEBPACK_IMPORTED_MODULE_6__["UserManager"].shareInstance.updateUserInfo(id, filteredBody));

            case 10:
              updatedUser = _context4.sent;
              res.status(200).json({
                statusCd: 200,
                status: 'success',
                data: {
                  user: updatedUser
                }
              });
              _context4.next = 17;
              break;

            case 14:
              _context4.prev = 14;
              _context4.t0 = _context4["catch"](0);
              // TODO: logger
              next(_context4.t0);

            case 17:
            case "end":
              return _context4.stop();
          }
        }
      }, null, null, [[0, 14]]);
    }
  }, {
    key: "deleteCurrentUser",
    value: function deleteCurrentUser(req, res, next) {
      var user, id;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function deleteCurrentUser$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              user = req.user;

              if (user) {
                _context5.next = 4;
                break;
              }

              return _context5.abrupt("return", next(new _errors__WEBPACK_IMPORTED_MODULE_8__["AppError"]('User not found', 404)));

            case 4:
              // get userId
              id = user.id;
              _context5.next = 7;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_managers__WEBPACK_IMPORTED_MODULE_6__["UserManager"].shareInstance.deactivateUser(id));

            case 7:
              res.status(204).json({
                statusCd: 204,
                status: 'success',
                data: null
              });
              _context5.next = 13;
              break;

            case 10:
              _context5.prev = 10;
              _context5.t0 = _context5["catch"](0);
              // TODO: logger
              next(_context5.t0);

            case 13:
            case "end":
              return _context5.stop();
          }
        }
      }, null, null, [[0, 10]]);
    }
  }]);

  return UserController;
}(_BaseController__WEBPACK_IMPORTED_MODULE_7__["BaseController"]);

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyMiddleware", function() { return applyMiddleware; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterObj", function() { return filterObj; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function applyMiddleware(middlewareWrapper, router) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = middlewareWrapper[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var wrapper = _step.value;
      wrapper(router);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}
function filterObj(obj) {
  for (var _len = arguments.length, allowedFields = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    allowedFields[_key - 1] = arguments[_key];
  }

  return allowedFields.reduce(function (newObj, field) {
    if (obj[field] !== undefined) {
      return _objectSpread({}, newObj, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, field, obj[field]));
    }

    return newObj;
  }, {});
}

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/defineProperty");

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorController", function() { return ErrorController; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);


var ErrorController =
/*#__PURE__*/
function () {
  function ErrorController() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ErrorController);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ErrorController, null, [{
    key: "handleError",
    value: function handleError(err, req, res, next) {
      err.statusCode = err.statusCode || 500;
      err.status = err.status || 'error';
      res.status(err.statusCode).json({
        statusCd: err.statusCode,
        status: err.status,
        message: err.message
      });
    }
  }]);

  return ErrorController;
}();

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _controllers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _middleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46);



var userRouter = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router(); // require user to be autheticated for these routes

userRouter.use(_middleware__WEBPACK_IMPORTED_MODULE_2__["requireAuth"]);
userRouter.get('/', Object(_middleware__WEBPACK_IMPORTED_MODULE_2__["requireRole"])('admin'), _controllers__WEBPACK_IMPORTED_MODULE_1__["UserController"].getUsers);
userRouter.get('/current_user', _controllers__WEBPACK_IMPORTED_MODULE_1__["UserController"].getCurrentUser);
userRouter.patch('/current_user/password', _controllers__WEBPACK_IMPORTED_MODULE_1__["UserController"].updatePassword);
userRouter.patch('/current_user/info', _controllers__WEBPACK_IMPORTED_MODULE_1__["UserController"].updateUserInfo);
userRouter.delete('/current_user', _controllers__WEBPACK_IMPORTED_MODULE_1__["UserController"].deleteCurrentUser);
/* harmony default export */ __webpack_exports__["default"] = (userRouter);

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _requireAuth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "requireAuth", function() { return _requireAuth__WEBPACK_IMPORTED_MODULE_0__["requireAuth"]; });

/* harmony import */ var _requireRole__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "requireRole", function() { return _requireRole__WEBPACK_IMPORTED_MODULE_1__["requireRole"]; });




/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requireAuth", function() { return requireAuth; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_TokenManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24);
/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37);
/* harmony import */ var _managers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18);




function requireAuth(req, res, next) {
  var token, decoded, currentUser;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function requireAuth$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;

          // Getting token and check if it is there
          if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
            // Get token - format 'Bearer Token'
            token = req.headers.authorization.split(' ')[1];
            _utils_logger__WEBPACK_IMPORTED_MODULE_2__["default"].info('[Middleware - requireAuth] - Get Token from req Header');
          }

          if (token) {
            _context.next = 5;
            break;
          }

          _utils_logger__WEBPACK_IMPORTED_MODULE_2__["default"].error('[Middleware - requireAuth] - No Token in the request header'); // FIXME: Global error handling

          throw new Error('No Token in the request header');

        case 5:
          _context.next = 7;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_utils_TokenManager__WEBPACK_IMPORTED_MODULE_1__["default"].verifyJWTToken(token));

        case 7:
          decoded = _context.sent;
          _context.next = 10;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_managers__WEBPACK_IMPORTED_MODULE_3__["UserManager"].shareInstance.getUser(decoded.id));

        case 10:
          currentUser = _context.sent;

          if (currentUser) {
            _context.next = 14;
            break;
          }

          _utils_logger__WEBPACK_IMPORTED_MODULE_2__["default"].error('[Middleware - requireAuth] - User no longer exists'); // FIXME: Global error handling

          throw new Error('User no longer exists');

        case 14:
          if (!currentUser.changePasswordAfter(decoded.iat)) {
            _context.next = 17;
            break;
          }

          _utils_logger__WEBPACK_IMPORTED_MODULE_2__["default"].error('[Middleware - requireAuth] - User recently changed password'); // FIXME: Global error handling

          throw new Error('User recently changed password. Please log in again');

        case 17:
          // grant access to protected route and put user on req object
          req.user = currentUser.serialize();
          next();
          _context.next = 25;
          break;

        case 21:
          _context.prev = 21;
          _context.t0 = _context["catch"](0);
          // FIXME: GLOBAL Errors
          _utils_logger__WEBPACK_IMPORTED_MODULE_2__["default"].error('[Middleware - requireAuth] - Token Error - Incorrect or Expires');
          return _context.abrupt("return", res.status(401).json({
            statusCd: 401,
            status: 'failure',
            message: "Unauthorized Access: ".concat(_context.t0.message)
          }));

        case 25:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 21]]);
}

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requireRole", function() { return requireRole; });
function requireRole() {
  for (var _len = arguments.length, roles = new Array(_len), _key = 0; _key < _len; _key++) {
    roles[_key] = arguments[_key];
  }

  return function (req, res, next) {
    // check whether the current user role is within roles
    if (!roles.includes(req.user.role)) {
      // FIXME: Error handling
      res.status(403).json({
        statusCd: 403,
        status: 'failure',
        message: 'Unauthorized to use this route'
      });
      return;
    }

    next();
  };
}

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33);


var defaultRouter = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();
defaultRouter.all('*', function (req, res, next) {
  next(new _errors__WEBPACK_IMPORTED_MODULE_1__["AppError"]("Route ".concat(req.originalUrl, " does not exist on this server!"), 404));
});
/* harmony default export */ __webpack_exports__["default"] = (defaultRouter);

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Transaction", function() { return Transaction; });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

var transactionSchema = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({
  date: {
    type: Date,
    required: [true, 'Please enter a transaction date']
  },
  type: {
    type: String,
    required: [true, 'Please enter a transaction type'],
    enum: ['expense', 'income'],
    lowercase: true
  },
  amount: {
    type: Number,
    required: [true, 'Please enter a transacton amount']
  },
  description: {
    type: String,
    default: ''
  },
  _user: {
    type: mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.Types.ObjectId,
    ref: 'users'
  }
}); // pre save hooks

transactionSchema.pre('save', function (next) {
  this.amount = parseFloat(this.amount);
  next();
}); // instance methods

transactionSchema.methods.serialize = function () {
  var self = this;
  var id = self._id,
      date = self.date,
      type = self.type,
      amount = self.amount,
      description = self.description,
      user = self._user;
  return {
    id: id,
    date: date,
    type: type,
    amount: amount,
    description: description,
    user: user
  };
};

var Transaction = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('transactions', transactionSchema);

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _middleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46);
/* harmony import */ var _controllers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);

 // controllers


var transactionRouter = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router(); // require user to be authenticated for these routes

transactionRouter.use(_middleware__WEBPACK_IMPORTED_MODULE_1__["requireAuth"]);
transactionRouter.post('/', _controllers__WEBPACK_IMPORTED_MODULE_2__["TransactionController"].addTransaction);
/* harmony default export */ __webpack_exports__["default"] = (transactionRouter);

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionController", function() { return TransactionController; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _managers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18);
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(33);
/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(37);



// Managers
 // Errors

 // Utils


var TransactionController =
/*#__PURE__*/
function () {
  function TransactionController() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, TransactionController);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(TransactionController, null, [{
    key: "addTransaction",
    value: function addTransaction(req, res, next) {
      var user, id, _req$body, date, type, amount, description, transaction, newTransaction;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function addTransaction$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              user = req.user;

              if (user) {
                _context.next = 4;
                break;
              }

              return _context.abrupt("return", next(new _errors__WEBPACK_IMPORTED_MODULE_4__["AppError"]('User not found', 404)));

            case 4:
              // get userId
              id = user.id; // get params out of req body

              _req$body = req.body, date = _req$body.date, type = _req$body.type, amount = _req$body.amount, description = _req$body.description;

              if (!(!date || !type || !amount)) {
                _context.next = 8;
                break;
              }

              return _context.abrupt("return", next(new _errors__WEBPACK_IMPORTED_MODULE_4__["AppError"]('Missing either date, type, or amount in request body', 400)));

            case 8:
              transaction = {
                date: date,
                type: type,
                amount: amount,
                _user: id
              };

              if (description) {
                transaction.description = description;
              }

              _context.next = 12;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_managers__WEBPACK_IMPORTED_MODULE_3__["TransactionManager"].shareInstance.addTransaction(transaction));

            case 12:
              newTransaction = _context.sent;
              res.status(201).json({
                statusCd: 201,
                status: 'success',
                data: {
                  newTransaction: newTransaction
                }
              });
              _context.next = 20;
              break;

            case 16:
              _context.prev = 16;
              _context.t0 = _context["catch"](0);
              _utils_logger__WEBPACK_IMPORTED_MODULE_5__["default"].error("[TransactionController - addTransaction] Add Transaction failure: ".concat(_context.t0.message));
              next(_context.t0);

            case 20:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[0, 16]]);
    }
  }]);

  return TransactionController;
}();

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionManager", function() { return TransactionManager; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(35);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(17);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(20);
/* harmony import */ var _BaseManager__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(54);
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(33);
/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(37);







// Model
 // Managers

 // Errors

 // Utils


var TransactionManager =
/*#__PURE__*/
function (_BaseManager) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(TransactionManager, _BaseManager);

  function TransactionManager() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, TransactionManager);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(TransactionManager).call(this));
    var instance = _this.constructor.instance;

    if (instance) {
      return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(_this, instance);
    }

    _this.constructor.instance = _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this); // Assign User model

    _this._transaction = _models__WEBPACK_IMPORTED_MODULE_7__["Transaction"];
    return _this;
  } // shared instance of UserManager


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(TransactionManager, [{
    key: "addTransaction",
    value: function addTransaction(transaction) {
      var newTransaction;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function addTransaction$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(new this._transaction(transaction).save());

            case 3:
              newTransaction = _context.sent;
              return _context.abrupt("return", newTransaction.serialize());

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              _utils_logger__WEBPACK_IMPORTED_MODULE_10__["default"].error("[TransactionManager - addTransaction] Error message: ".concat(_context.t0.message));
              throw TransactionManager.parseError(_context.t0, 'Transaction');

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, null, this, [[0, 7]]);
    }
  }], [{
    key: "shareInstance",
    get: function get() {
      if (this._sharedInstance === undefined) {
        this._sharedInstance = new TransactionManager();
      }

      return this._sharedInstance;
    }
  }]);

  return TransactionManager;
}(_BaseManager__WEBPACK_IMPORTED_MODULE_8__["BaseManager"]);

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseManager", function() { return BaseManager; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33);


//Errors

var BaseManager =
/*#__PURE__*/
function () {
  function BaseManager() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, BaseManager);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(BaseManager, null, [{
    key: "parseError",
    value: function parseError(err, entity) {
      var error = new _errors__WEBPACK_IMPORTED_MODULE_2__["AppError"]('Internal Server Error', 500);

      if (err.name === 'MongoError' && err.code === 11000) {
        error = new _errors__WEBPACK_IMPORTED_MODULE_2__["AppError"]("".concat(entity, " already exists"), 409);
      } else if (err.name === 'AppError') {
        error = err;
      }

      return error;
    }
  }]);

  return BaseManager;
}();

/***/ })
/******/ ]);