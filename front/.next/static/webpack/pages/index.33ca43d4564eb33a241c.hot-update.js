webpackHotUpdate_N_E("pages/index",{

/***/ "./components/OrderItem.js":
/*!*********************************!*\
  !*** ./components/OrderItem.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return OrderItem; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_ahmaddev_Apps_azizyar_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_ahmaddev_Apps_azizyar_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_ahmaddev_Apps_azizyar_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_ahmaddev_Apps_azizyar_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_Address_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/styles/Address.module.css */ \"./styles/Address.module.css\");\n/* harmony import */ var _styles_Address_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Address_module_css__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\nvar _jsxFileName = \"/Users/ahmaddev/Apps/azizyar/front/components/OrderItem.js\",\n    _s = $RefreshSig$();\n\n\n\n //import { API_URL } from '@/config/index'\n\nfunction OrderItem(_ref) {\n  _s();\n\n  var _this = this;\n\n  var orderitems = _ref.orderitems;\n\n  //console.log(orderitems[0].product.ean)\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      values = _useState[0],\n      setValues = _useState[1];\n\n  var updatImage = function updatImage(ean) {\n    var fetchData = /*#__PURE__*/function () {\n      var _ref2 = Object(_Users_ahmaddev_Apps_azizyar_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_Users_ahmaddev_Apps_azizyar_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n        var data, json;\n        return _Users_ahmaddev_Apps_azizyar_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return fetch(\"\".concat(NEW_IMAGES_URL), {\n                  method: 'POST',\n                  body: JSON.stringify({\n                    ean: '8720279128701'\n                  })\n                });\n\n              case 2:\n                data = _context.sent;\n                _context.next = 5;\n                return response.json();\n\n              case 5:\n                json = _context.sent;\n                // set state with the result\n                setValues(json);\n\n              case 7:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function fetchData() {\n        return _ref2.apply(this, arguments);\n      };\n    }();\n\n    console.log('Working!!!' + ean + values);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: orderitems.map(function (orderitem) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _styles_Address_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.img,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_4___default.a, {\n            src: orderitem.product.image ? orderitem.product.image : '/images/event-default.png',\n            width: 150,\n            height: 150\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n            onClick: function onClick() {\n              return updatImage(orderitems[0].product.ean);\n            },\n            children: \"Posts\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 44,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h4\", {\n          children: [\"OrderItem: \", orderitem.product.ean, ' ', orderitem.fulfilment.latestDeliveryDate, ' ', orderitem.fulfilment.exactDeliveryDate]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          children: [\"OrderItem: \", orderitem.product.title]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 11\n        }, _this)]\n      }, orderitem.product.ean, true, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }, _this);\n    })\n  }, void 0, false);\n} // export async function getStaticProps() {\n//   const res = await fetch(`${API_URL}/images?ean=8720279199770`) //${orderitems.product.ean}\n//   const img = await res.json()\n//   console.log(img)\n// }\n\n_s(OrderItem, \"2pK3rqdy1zaKCApuOUtEsSz9OBs=\");\n\n_c = OrderItem;\n\nvar _c;\n\n$RefreshReg$(_c, \"OrderItem\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9PcmRlckl0ZW0uanM/MmZiYiJdLCJuYW1lcyI6WyJPcmRlckl0ZW0iLCJvcmRlcml0ZW1zIiwidXNlU3RhdGUiLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJ1cGRhdEltYWdlIiwiZWFuIiwiZmV0Y2hEYXRhIiwiZmV0Y2giLCJORVdfSU1BR0VTX1VSTCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsInJlc3BvbnNlIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJvcmRlcml0ZW0iLCJzdHlsZXMiLCJpbWciLCJwcm9kdWN0IiwiaW1hZ2UiLCJmdWxmaWxtZW50IiwibGF0ZXN0RGVsaXZlcnlEYXRlIiwiZXhhY3REZWxpdmVyeURhdGUiLCJ0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUVBOztBQUVlLFNBQVNBLFNBQVQsT0FBbUM7QUFBQTs7QUFBQTs7QUFBQSxNQUFkQyxVQUFjLFFBQWRBLFVBQWM7O0FBQ2hEO0FBRGdELGtCQUdwQkMsc0RBQVEsQ0FBQyxFQUFELENBSFk7QUFBQSxNQUd6Q0MsTUFIeUM7QUFBQSxNQUdqQ0MsU0FIaUM7O0FBS2hELE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLEdBQUQsRUFBUztBQUMxQixRQUFNQyxTQUFTO0FBQUEsaVNBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFFR0MsS0FBSyxXQUFJQyxjQUFKLEdBQXNCO0FBQzVDQyx3QkFBTSxFQUFFLE1BRG9DO0FBRTVDQyxzQkFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUNuQlAsdUJBQUcsRUFBRTtBQURjLG1CQUFmO0FBRnNDLGlCQUF0QixDQUZSOztBQUFBO0FBRVZRLG9CQUZVO0FBQUE7QUFBQSx1QkFTR0MsUUFBUSxDQUFDQyxJQUFULEVBVEg7O0FBQUE7QUFTVkEsb0JBVFU7QUFXaEI7QUFDQVoseUJBQVMsQ0FBQ1ksSUFBRCxDQUFUOztBQVpnQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFIOztBQUFBLHNCQUFUVCxTQUFTO0FBQUE7QUFBQTtBQUFBLE9BQWY7O0FBZUFVLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQWVaLEdBQWYsR0FBcUJILE1BQWpDO0FBQ0QsR0FqQkQ7O0FBbUJBLHNCQUNFO0FBQUEsY0FDR0YsVUFBVSxDQUFDa0IsR0FBWCxDQUFlLFVBQUNDLFNBQUQ7QUFBQSwwQkFDZDtBQUFBLGdDQUNFO0FBQUssbUJBQVMsRUFBRUMsaUVBQU0sQ0FBQ0MsR0FBdkI7QUFBQSxrQ0FDRSxxRUFBQyxpREFBRDtBQUNFLGVBQUcsRUFDREYsU0FBUyxDQUFDRyxPQUFWLENBQWtCQyxLQUFsQixHQUNJSixTQUFTLENBQUNHLE9BQVYsQ0FBa0JDLEtBRHRCLEdBRUksMkJBSlI7QUFNRSxpQkFBSyxFQUFFLEdBTlQ7QUFPRSxrQkFBTSxFQUFFO0FBUFY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQVVFO0FBQVEsbUJBQU8sRUFBRTtBQUFBLHFCQUFNbkIsVUFBVSxDQUFDSixVQUFVLENBQUMsQ0FBRCxDQUFWLENBQWNzQixPQUFkLENBQXNCakIsR0FBdkIsQ0FBaEI7QUFBQSxhQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFlRTtBQUFBLG9DQUNjYyxTQUFTLENBQUNHLE9BQVYsQ0FBa0JqQixHQURoQyxFQUNxQyxHQURyQyxFQUVHYyxTQUFTLENBQUNLLFVBQVYsQ0FBcUJDLGtCQUZ4QixFQUU0QyxHQUY1QyxFQUdHTixTQUFTLENBQUNLLFVBQVYsQ0FBcUJFLGlCQUh4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBZkYsZUFvQkU7QUFBQSxvQ0FBa0JQLFNBQVMsQ0FBQ0csT0FBVixDQUFrQkssS0FBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXBCRjtBQUFBLFNBQVVSLFNBQVMsQ0FBQ0csT0FBVixDQUFrQmpCLEdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEYztBQUFBLEtBQWY7QUFESCxtQkFERjtBQTRCRCxDLENBQ0Q7QUFDQTtBQUNBO0FBRUE7QUFDQTs7R0ExRHdCTixTOztLQUFBQSxTIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9PcmRlckl0ZW0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgc3R5bGVzIGZyb20gJ0Avc3R5bGVzL0FkZHJlc3MubW9kdWxlLmNzcydcbi8vaW1wb3J0IHsgQVBJX1VSTCB9IGZyb20gJ0AvY29uZmlnL2luZGV4J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBPcmRlckl0ZW0oeyBvcmRlcml0ZW1zIH0pIHtcbiAgLy9jb25zb2xlLmxvZyhvcmRlcml0ZW1zWzBdLnByb2R1Y3QuZWFuKVxuXG4gIGNvbnN0IFt2YWx1ZXMsIHNldFZhbHVlc10gPSB1c2VTdGF0ZShbXSlcblxuICBjb25zdCB1cGRhdEltYWdlID0gKGVhbikgPT4ge1xuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgIC8vIGdldCB0aGUgZGF0YSBmcm9tIHRoZSBhcGlcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaChgJHtORVdfSU1BR0VTX1VSTH1gLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgZWFuOiAnODcyMDI3OTEyODcwMScsXG4gICAgICAgIH0pLFxuICAgICAgfSlcbiAgICAgIC8vIGNvbnZlcnQgdGhlIGRhdGEgdG8ganNvblxuICAgICAgY29uc3QganNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuXG4gICAgICAvLyBzZXQgc3RhdGUgd2l0aCB0aGUgcmVzdWx0XG4gICAgICBzZXRWYWx1ZXMoanNvbilcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZygnV29ya2luZyEhIScgKyBlYW4gKyB2YWx1ZXMpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7b3JkZXJpdGVtcy5tYXAoKG9yZGVyaXRlbSkgPT4gKFxuICAgICAgICA8ZGl2IGtleT17b3JkZXJpdGVtLnByb2R1Y3QuZWFufT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltZ30+XG4gICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgc3JjPXtcbiAgICAgICAgICAgICAgICBvcmRlcml0ZW0ucHJvZHVjdC5pbWFnZVxuICAgICAgICAgICAgICAgICAgPyBvcmRlcml0ZW0ucHJvZHVjdC5pbWFnZVxuICAgICAgICAgICAgICAgICAgOiAnL2ltYWdlcy9ldmVudC1kZWZhdWx0LnBuZydcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB3aWR0aD17MTUwfVxuICAgICAgICAgICAgICBoZWlnaHQ9ezE1MH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHVwZGF0SW1hZ2Uob3JkZXJpdGVtc1swXS5wcm9kdWN0LmVhbil9PlxuICAgICAgICAgICAgICBQb3N0c1xuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGg0PlxuICAgICAgICAgICAgT3JkZXJJdGVtOiB7b3JkZXJpdGVtLnByb2R1Y3QuZWFufXsnICd9XG4gICAgICAgICAgICB7b3JkZXJpdGVtLmZ1bGZpbG1lbnQubGF0ZXN0RGVsaXZlcnlEYXRlfXsnICd9XG4gICAgICAgICAgICB7b3JkZXJpdGVtLmZ1bGZpbG1lbnQuZXhhY3REZWxpdmVyeURhdGV9XG4gICAgICAgICAgPC9oND5cbiAgICAgICAgICA8c3Bhbj5PcmRlckl0ZW06IHtvcmRlcml0ZW0ucHJvZHVjdC50aXRsZX08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG4gICAgPC8+XG4gIClcbn1cbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbi8vICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7QVBJX1VSTH0vaW1hZ2VzP2Vhbj04NzIwMjc5MTk5NzcwYCkgLy8ke29yZGVyaXRlbXMucHJvZHVjdC5lYW59XG4vLyAgIGNvbnN0IGltZyA9IGF3YWl0IHJlcy5qc29uKClcblxuLy8gICBjb25zb2xlLmxvZyhpbWcpXG4vLyB9XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/OrderItem.js\n");

/***/ })

})