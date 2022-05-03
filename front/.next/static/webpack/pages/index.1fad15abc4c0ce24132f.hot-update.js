webpackHotUpdate_N_E("pages/index",{

/***/ "./components/OrderItem.js":
/*!*********************************!*\
  !*** ./components/OrderItem.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return OrderItem; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_ahmaddev_Apps_azizyar_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_ahmaddev_Apps_azizyar_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_ahmaddev_Apps_azizyar_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_ahmaddev_Apps_azizyar_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/config/index */ \"./config/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _styles_Address_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/styles/Address.module.css */ \"./styles/Address.module.css\");\n/* harmony import */ var _styles_Address_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Address_module_css__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\nvar _jsxFileName = \"/Users/ahmaddev/Apps/azizyar/front/components/OrderItem.js\",\n    _s = $RefreshSig$();\n\n\n\n\n //import { API_URL } from '@/config/index'\n\nfunction OrderItem(_ref) {\n  _s();\n\n  var _this = this;\n\n  var orderitems = _ref.orderitems;\n\n  //console.log(orderitems[0].product.ean)\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])({}),\n      values = _useState[0],\n      setValues = _useState[1];\n\n  var updatImage = function updatImage(ean) {\n    var fetchData = /*#__PURE__*/function () {\n      var _ref2 = Object(_Users_ahmaddev_Apps_azizyar_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_Users_ahmaddev_Apps_azizyar_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(ean) {\n        var data, json;\n        return _Users_ahmaddev_Apps_azizyar_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return fetch(\"\".concat(_config_index__WEBPACK_IMPORTED_MODULE_3__[\"NEW_IMAGES_URL\"]), {\n                  method: 'POST',\n                  // body: JSON.stringify({\n                  //   //ean: ean,\n                  //   artEan: `${ean}`,\n                  // }),\n                  body: {\n                    artEan: \"\".concat(ean)\n                  }\n                });\n\n              case 2:\n                data = _context.sent;\n                _context.next = 5;\n                return data.json();\n\n              case 5:\n                json = _context.sent;\n                // set state with the result\n                console.log(json);\n                setValues(json);\n\n              case 8:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function fetchData(_x) {\n        return _ref2.apply(this, arguments);\n      };\n    }();\n\n    fetchData(ean);\n    console.log('Working!!!' + ean + values);\n    console.log(values);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: orderitems.map(function (orderitem) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _styles_Address_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.img,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_5___default.a, {\n            src: orderitem.product.image ? orderitem.product.image : '/images/event-default.png',\n            width: 150,\n            height: 150\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 42,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n            onClick: function onClick() {\n              return updatImage(orderitems[0].product.ean);\n            },\n            children: \"Posts\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 51,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h4\", {\n          children: [\"OrderItem: \", orderitem.product.ean, ' ', orderitem.fulfilment.latestDeliveryDate, ' ', orderitem.fulfilment.exactDeliveryDate]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          children: [\"OrderItem: \", orderitem.product.title]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 11\n        }, _this)]\n      }, orderitem.product.ean, true, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 9\n      }, _this);\n    })\n  }, void 0, false);\n} // export async function getStaticProps() {\n//   const res = await fetch(`${API_URL}/images?ean=8720279199770`) //${orderitems.product.ean}\n//   const img = await res.json()\n//   console.log(img)\n// }\n\n_s(OrderItem, \"jj5GeB6VwF55135U6pCdiR2sE48=\");\n\n_c = OrderItem;\n\nvar _c;\n\n$RefreshReg$(_c, \"OrderItem\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9PcmRlckl0ZW0uanM/MmZiYiJdLCJuYW1lcyI6WyJPcmRlckl0ZW0iLCJvcmRlcml0ZW1zIiwidXNlU3RhdGUiLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJ1cGRhdEltYWdlIiwiZWFuIiwiZmV0Y2hEYXRhIiwiZmV0Y2giLCJORVdfSU1BR0VTX1VSTCIsIm1ldGhvZCIsImJvZHkiLCJhcnRFYW4iLCJkYXRhIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJvcmRlcml0ZW0iLCJzdHlsZXMiLCJpbWciLCJwcm9kdWN0IiwiaW1hZ2UiLCJmdWxmaWxtZW50IiwibGF0ZXN0RGVsaXZlcnlEYXRlIiwiZXhhY3REZWxpdmVyeURhdGUiLCJ0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtDQUVBOztBQUVlLFNBQVNBLFNBQVQsT0FBbUM7QUFBQTs7QUFBQTs7QUFBQSxNQUFkQyxVQUFjLFFBQWRBLFVBQWM7O0FBQ2hEO0FBRGdELGtCQUdwQkMsc0RBQVEsQ0FBQyxFQUFELENBSFk7QUFBQSxNQUd6Q0MsTUFIeUM7QUFBQSxNQUdqQ0MsU0FIaUM7O0FBS2hELE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLEdBQUQsRUFBUztBQUMxQixRQUFNQyxTQUFTO0FBQUEsaVNBQUcsaUJBQU9ELEdBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFFR0UsS0FBSyxXQUFJQyw0REFBSixHQUFzQjtBQUM1Q0Msd0JBQU0sRUFBRSxNQURvQztBQUU1QztBQUNBO0FBQ0E7QUFDQTtBQUNBQyxzQkFBSSxFQUFFO0FBQUVDLDBCQUFNLFlBQUtOLEdBQUw7QUFBUjtBQU5zQyxpQkFBdEIsQ0FGUjs7QUFBQTtBQUVWTyxvQkFGVTtBQUFBO0FBQUEsdUJBV0dBLElBQUksQ0FBQ0MsSUFBTCxFQVhIOztBQUFBO0FBV1ZBLG9CQVhVO0FBYWhCO0FBQ0FDLHVCQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWjtBQUNBVix5QkFBUyxDQUFDVSxJQUFELENBQVQ7O0FBZmdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUg7O0FBQUEsc0JBQVRQLFNBQVM7QUFBQTtBQUFBO0FBQUEsT0FBZjs7QUFrQkFBLGFBQVMsQ0FBQ0QsR0FBRCxDQUFUO0FBRUFTLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQWVWLEdBQWYsR0FBcUJILE1BQWpDO0FBQ0FZLFdBQU8sQ0FBQ0MsR0FBUixDQUFZYixNQUFaO0FBQ0QsR0F2QkQ7O0FBeUJBLHNCQUNFO0FBQUEsY0FDR0YsVUFBVSxDQUFDZ0IsR0FBWCxDQUFlLFVBQUNDLFNBQUQ7QUFBQSwwQkFDZDtBQUFBLGdDQUNFO0FBQUssbUJBQVMsRUFBRUMsaUVBQU0sQ0FBQ0MsR0FBdkI7QUFBQSxrQ0FDRSxxRUFBQyxpREFBRDtBQUNFLGVBQUcsRUFDREYsU0FBUyxDQUFDRyxPQUFWLENBQWtCQyxLQUFsQixHQUNJSixTQUFTLENBQUNHLE9BQVYsQ0FBa0JDLEtBRHRCLEdBRUksMkJBSlI7QUFNRSxpQkFBSyxFQUFFLEdBTlQ7QUFPRSxrQkFBTSxFQUFFO0FBUFY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQVVFO0FBQVEsbUJBQU8sRUFBRTtBQUFBLHFCQUFNakIsVUFBVSxDQUFDSixVQUFVLENBQUMsQ0FBRCxDQUFWLENBQWNvQixPQUFkLENBQXNCZixHQUF2QixDQUFoQjtBQUFBLGFBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQWVFO0FBQUEsb0NBQ2NZLFNBQVMsQ0FBQ0csT0FBVixDQUFrQmYsR0FEaEMsRUFDcUMsR0FEckMsRUFFR1ksU0FBUyxDQUFDSyxVQUFWLENBQXFCQyxrQkFGeEIsRUFFNEMsR0FGNUMsRUFHR04sU0FBUyxDQUFDSyxVQUFWLENBQXFCRSxpQkFIeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWZGLGVBb0JFO0FBQUEsb0NBQWtCUCxTQUFTLENBQUNHLE9BQVYsQ0FBa0JLLEtBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFwQkY7QUFBQSxTQUFVUixTQUFTLENBQUNHLE9BQVYsQ0FBa0JmLEdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEYztBQUFBLEtBQWY7QUFESCxtQkFERjtBQTRCRCxDLENBQ0Q7QUFDQTtBQUNBO0FBRUE7QUFDQTs7R0FoRXdCTixTOztLQUFBQSxTIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9PcmRlckl0ZW0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBORVdfSU1BR0VTX1VSTCB9IGZyb20gJ0AvY29uZmlnL2luZGV4J1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICdAL3N0eWxlcy9BZGRyZXNzLm1vZHVsZS5jc3MnXG4vL2ltcG9ydCB7IEFQSV9VUkwgfSBmcm9tICdAL2NvbmZpZy9pbmRleCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gT3JkZXJJdGVtKHsgb3JkZXJpdGVtcyB9KSB7XG4gIC8vY29uc29sZS5sb2cob3JkZXJpdGVtc1swXS5wcm9kdWN0LmVhbilcblxuICBjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gdXNlU3RhdGUoe30pXG5cbiAgY29uc3QgdXBkYXRJbWFnZSA9IChlYW4pID0+IHtcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoZWFuKSA9PiB7XG4gICAgICAvLyBnZXQgdGhlIGRhdGEgZnJvbSB0aGUgYXBpXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2goYCR7TkVXX0lNQUdFU19VUkx9YCwge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgLy8gYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAvLyAgIC8vZWFuOiBlYW4sXG4gICAgICAgIC8vICAgYXJ0RWFuOiBgJHtlYW59YCxcbiAgICAgICAgLy8gfSksXG4gICAgICAgIGJvZHk6IHsgYXJ0RWFuOiBgJHtlYW59YCB9LFxuICAgICAgfSlcbiAgICAgIC8vIGNvbnZlcnQgdGhlIGRhdGEgdG8ganNvblxuICAgICAgY29uc3QganNvbiA9IGF3YWl0IGRhdGEuanNvbigpXG5cbiAgICAgIC8vIHNldCBzdGF0ZSB3aXRoIHRoZSByZXN1bHRcbiAgICAgIGNvbnNvbGUubG9nKGpzb24pXG4gICAgICBzZXRWYWx1ZXMoanNvbilcbiAgICB9XG5cbiAgICBmZXRjaERhdGEoZWFuKVxuXG4gICAgY29uc29sZS5sb2coJ1dvcmtpbmchISEnICsgZWFuICsgdmFsdWVzKVxuICAgIGNvbnNvbGUubG9nKHZhbHVlcylcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtvcmRlcml0ZW1zLm1hcCgob3JkZXJpdGVtKSA9PiAoXG4gICAgICAgIDxkaXYga2V5PXtvcmRlcml0ZW0ucHJvZHVjdC5lYW59PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1nfT5cbiAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICBzcmM9e1xuICAgICAgICAgICAgICAgIG9yZGVyaXRlbS5wcm9kdWN0LmltYWdlXG4gICAgICAgICAgICAgICAgICA/IG9yZGVyaXRlbS5wcm9kdWN0LmltYWdlXG4gICAgICAgICAgICAgICAgICA6ICcvaW1hZ2VzL2V2ZW50LWRlZmF1bHQucG5nJ1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHdpZHRoPXsxNTB9XG4gICAgICAgICAgICAgIGhlaWdodD17MTUwfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdXBkYXRJbWFnZShvcmRlcml0ZW1zWzBdLnByb2R1Y3QuZWFuKX0+XG4gICAgICAgICAgICAgIFBvc3RzXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8aDQ+XG4gICAgICAgICAgICBPcmRlckl0ZW06IHtvcmRlcml0ZW0ucHJvZHVjdC5lYW59eycgJ31cbiAgICAgICAgICAgIHtvcmRlcml0ZW0uZnVsZmlsbWVudC5sYXRlc3REZWxpdmVyeURhdGV9eycgJ31cbiAgICAgICAgICAgIHtvcmRlcml0ZW0uZnVsZmlsbWVudC5leGFjdERlbGl2ZXJ5RGF0ZX1cbiAgICAgICAgICA8L2g0PlxuICAgICAgICAgIDxzcGFuPk9yZGVySXRlbToge29yZGVyaXRlbS5wcm9kdWN0LnRpdGxlfTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApKX1cbiAgICA8Lz5cbiAgKVxufVxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuLy8gICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtBUElfVVJMfS9pbWFnZXM/ZWFuPTg3MjAyNzkxOTk3NzBgKSAvLyR7b3JkZXJpdGVtcy5wcm9kdWN0LmVhbn1cbi8vICAgY29uc3QgaW1nID0gYXdhaXQgcmVzLmpzb24oKVxuXG4vLyAgIGNvbnNvbGUubG9nKGltZylcbi8vIH1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/OrderItem.js\n");

/***/ })

})