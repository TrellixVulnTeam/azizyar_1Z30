webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HomePage; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var E_azizyar_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var E_azizyar_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(E_azizyar_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var E_azizyar_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Layout */ "./components/Layout.js");
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/config/index */ "./config/index.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Address__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/Address */ "./components/Address.js");




var _jsxFileName = "E:\\azizyar\\front\\pages\\index.js",
    _s = $RefreshSig$();







var __N_SSP = true;
function HomePage(_ref) {
  _s();

  var _this = this;

  var cont = _ref.cont;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])('image'),
      resourceType = _useState[0],
      setResourceType = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      resp = _useState2[0],
      setState = _useState2[1];

  var fetchData = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])( /*#__PURE__*/function () {
    var _ref2 = Object(E_azizyar_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/E_azizyar_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(ean) {
      var data, json;
      return E_azizyar_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch("".concat(_config_index__WEBPACK_IMPORTED_MODULE_5__["NEW_IMAGES_URL"]), {
                method: 'POST',
                body: JSON.stringify({
                  ean: 8720279199985
                })
              });

            case 2:
              data = _context.sent;
              _context.next = 5;
              return data.json();

            case 5:
              json = _context.sent;
              console.log('Working');
              setState(json);

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }(), []);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var getImg = fetchData() // make sure to catch any error
    ["catch"](console.error);
  }, [resourceType]); //setState('555');

  console.log(resp);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      onClick: function onClick() {
        return setResourceType('image');
      },
      children: "Posts"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: "Orders: "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_toastify__WEBPACK_IMPORTED_MODULE_6__["ToastContainer"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: resp.url,
      height: "100",
      width: "100"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, this), cont.map(function (con) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Address__WEBPACK_IMPORTED_MODULE_8__["default"], {
        address: con
      }, con.orderId, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, _this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 5
  }, this);
}

_s(HomePage, "RWo5nyn07nWADEx2jRp7szBBMv4=");

_c = HomePage;

var _c;

$RefreshReg$(_c, "HomePage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZVBhZ2UiLCJjb250IiwidXNlU3RhdGUiLCJyZXNvdXJjZVR5cGUiLCJzZXRSZXNvdXJjZVR5cGUiLCJyZXNwIiwic2V0U3RhdGUiLCJmZXRjaERhdGEiLCJ1c2VDYWxsYmFjayIsImVhbiIsImZldGNoIiwiTkVXX0lNQUdFU19VUkwiLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJqc29uIiwiY29uc29sZSIsImxvZyIsInVzZUVmZmVjdCIsImdldEltZyIsImVycm9yIiwidXJsIiwibWFwIiwiY29uIiwib3JkZXJJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLFNBQVNBLFFBQVQsT0FBNEI7QUFBQTs7QUFBQTs7QUFBQSxNQUFSQyxJQUFRLFFBQVJBLElBQVE7O0FBQUEsa0JBQ0RDLHNEQUFRLENBQUMsT0FBRCxDQURQO0FBQUEsTUFDbENDLFlBRGtDO0FBQUEsTUFDcEJDLGVBRG9COztBQUFBLG1CQUVoQkYsc0RBQVEsQ0FBQyxFQUFELENBRlE7QUFBQSxNQUVsQ0csSUFGa0M7QUFBQSxNQUU1QkMsUUFGNEI7O0FBSXpDLE1BQU1DLFNBQVMsR0FBR0MseURBQVc7QUFBQSx5UEFBQyxpQkFBT0MsR0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNUQyxLQUFLLFdBQUlDLDREQUFKLEdBQXNCO0FBQzVDQyxzQkFBTSxFQUFFLE1BRG9DO0FBRTVDQyxvQkFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUNuQk4scUJBQUcsRUFBRTtBQURjLGlCQUFmO0FBRnNDLGVBQXRCLENBREk7O0FBQUE7QUFDdEJPLGtCQURzQjtBQUFBO0FBQUEscUJBT1RBLElBQUksQ0FBQ0MsSUFBTCxFQVBTOztBQUFBO0FBT3RCQSxrQkFQc0I7QUFRNUJDLHFCQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaO0FBQ0FiLHNCQUFRLENBQUNXLElBQUQsQ0FBUjs7QUFUNEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBRDs7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQVUxQixFQVYwQixDQUE3QjtBQVlBRyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFNQyxNQUFNLEdBQUdkLFNBQVMsR0FDdEI7QUFEc0IsYUFBVCxDQUdOVyxPQUFPLENBQUNJLEtBSEYsQ0FBZjtBQUlELEdBTFEsRUFLTixDQUFDbkIsWUFBRCxDQUxNLENBQVQsQ0FoQnlDLENBdUJ6Qzs7QUFFQWUsU0FBTyxDQUFDQyxHQUFSLENBQVlkLElBQVo7QUFFQSxzQkFDRSxxRUFBQywwREFBRDtBQUFBLDRCQUNFO0FBQVEsYUFBTyxFQUFFO0FBQUEsZUFBTUQsZUFBZSxDQUFDLE9BQUQsQ0FBckI7QUFBQSxPQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQUdFLHFFQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRixlQUlFO0FBQUssU0FBRyxFQUFFQyxJQUFJLENBQUNrQixHQUFmO0FBQW9CLFlBQU0sRUFBQyxLQUEzQjtBQUFpQyxXQUFLLEVBQUM7QUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGLEVBTUd0QixJQUFJLENBQUN1QixHQUFMLENBQVMsVUFBQ0MsR0FBRDtBQUFBLDBCQUNSLHFFQUFDLDJEQUFEO0FBQTJCLGVBQU8sRUFBRUE7QUFBcEMsU0FBY0EsR0FBRyxDQUFDQyxPQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRFE7QUFBQSxLQUFULENBTkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFZRDs7R0F2Q3VCMUIsUTs7S0FBQUEsUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jMGJjNTdlZTlkOTFiOWE5NjkxZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJ0AvY29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQgeyBORVdfVE9LRU5fVVJMLCBORVdfSU1BR0VTX1VSTCwgQVBJX1VSTCB9IGZyb20gJ0AvY29uZmlnL2luZGV4JztcclxuaW1wb3J0IHsgVG9hc3RDb250YWluZXIsIHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xyXG5pbXBvcnQgJ3JlYWN0LXRvYXN0aWZ5L2Rpc3QvUmVhY3RUb2FzdGlmeS5jc3MnO1xyXG5pbXBvcnQgQWRkcmVzcyBmcm9tICdAL2NvbXBvbmVudHMvQWRkcmVzcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lUGFnZSh7IGNvbnQgfSkge1xyXG4gIGNvbnN0IFtyZXNvdXJjZVR5cGUsIHNldFJlc291cmNlVHlwZV0gPSB1c2VTdGF0ZSgnaW1hZ2UnKTtcclxuICBjb25zdCBbcmVzcCwgc2V0U3RhdGVdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICBjb25zdCBmZXRjaERhdGEgPSB1c2VDYWxsYmFjayhhc3luYyAoZWFuKSA9PiB7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2goYCR7TkVXX0lNQUdFU19VUkx9YCwge1xyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIGVhbjogODcyMDI3OTE5OTk4NSxcclxuICAgICAgfSksXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGpzb24gPSBhd2FpdCBkYXRhLmpzb24oKTtcclxuICAgIGNvbnNvbGUubG9nKCdXb3JraW5nJyk7XHJcbiAgICBzZXRTdGF0ZShqc29uKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBnZXRJbWcgPSBmZXRjaERhdGEoKVxyXG4gICAgICAvLyBtYWtlIHN1cmUgdG8gY2F0Y2ggYW55IGVycm9yXHJcblxyXG4gICAgICAuY2F0Y2goY29uc29sZS5lcnJvcik7XHJcbiAgfSwgW3Jlc291cmNlVHlwZV0pO1xyXG5cclxuICAvL3NldFN0YXRlKCc1NTUnKTtcclxuXHJcbiAgY29uc29sZS5sb2cocmVzcCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldFJlc291cmNlVHlwZSgnaW1hZ2UnKX0+UG9zdHM8L2J1dHRvbj5cclxuICAgICAgPGgxPk9yZGVyczogPC9oMT5cclxuICAgICAgPFRvYXN0Q29udGFpbmVyIC8+XHJcbiAgICAgIDxpbWcgc3JjPXtyZXNwLnVybH0gaGVpZ2h0PScxMDAnIHdpZHRoPScxMDAnPjwvaW1nPlxyXG5cclxuICAgICAge2NvbnQubWFwKChjb24pID0+IChcclxuICAgICAgICA8QWRkcmVzcyBrZXk9e2Nvbi5vcmRlcklkfSBhZGRyZXNzPXtjb259IC8+XHJcbiAgICAgICkpfVxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcclxuICBjb25zdCByZXM0ID0gYXdhaXQgZmV0Y2goYCR7TkVXX1RPS0VOX1VSTH1gLCB7IG1ldGhvZDogJ3Bvc3QnIH0pO1xyXG4gIGNvbnN0IG5ld1Rva2VuID0gYXdhaXQgcmVzNC5qc29uKCk7XHJcblxyXG4gIGNvbnN0IGNvbnQgPSBbXTtcclxuXHJcbiAgY29uc3QgYm9sUmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLmJvbC5jb20vcmV0YWlsZXIvb3JkZXJzYCwge1xyXG4gICAgbWV0aG9kOiAnZ2V0JyxcclxuXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL3ZuZC5yZXRhaWxlci52Nytqc29uJyxcclxuICAgICAgQXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgbmV3VG9rZW4udG9rZW4sXHJcbiAgICB9LFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBkYXRhID0gYXdhaXQgYm9sUmVzLmpzb24oKTtcclxuXHJcbiAgY29uc3QgbW1tID0gZGF0YS5vcmRlcnM7XHJcblxyXG4gIGZvciAobGV0IGsgaW4gbW1tKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhrKVxyXG5cclxuICAgIGNvbnN0IGJvbERldGFpbCA9IGF3YWl0IGZldGNoKFxyXG4gICAgICBgaHR0cHM6Ly9hcGkuYm9sLmNvbS9yZXRhaWxlci9vcmRlcnMvJHttbW1ba10ub3JkZXJJZH1gLFxyXG4gICAgICB7XHJcbiAgICAgICAgbWV0aG9kOiAnZ2V0JyxcclxuXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vdm5kLnJldGFpbGVyLnY3K2pzb24nLFxyXG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgbmV3VG9rZW4udG9rZW4sXHJcbiAgICAgICAgfSxcclxuICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBkYXQgPSBhd2FpdCBib2xEZXRhaWwuanNvbigpO1xyXG5cclxuICAgIGRhdC5vcmRlckl0ZW1zLmZvckVhY2goYXN5bmMgKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgIGNvbnN0IGltZ1JlcyA9IGF3YWl0IGZldGNoKGAke0FQSV9VUkx9L2ltYWdlcz9lYW49JHtpdGVtLnByb2R1Y3QuZWFufWApO1xyXG4gICAgICBjb25zdCBpbWdzID0gYXdhaXQgaW1nUmVzLmpzb24oKTtcclxuXHJcbiAgICAgIGNvbnN0IGltZ1VybCA9IGltZ3NbMF0gPyBpbWdzWzBdLnVybCA6ICcvaW1hZ2VzL2V2ZW50LWRlZmF1bHQucG5nJztcclxuXHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGltZ1VybCk7XHJcblxyXG4gICAgICBjb25zdCBpbWcgPSBpbWdVcmw7XHJcbiAgICAgIGRhdC5vcmRlckl0ZW1zW2luZGV4XS5wcm9kdWN0WydpbWFnZSddID0gaW1nO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29udC5wdXNoKGRhdCk7XHJcbiAgfVxyXG5cclxuICBpZiAoYm9sUmVzLm9rKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwcm9wczogeyBjb250IH0sXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9