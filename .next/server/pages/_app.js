"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 523:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: external "@mui/material/styles"
const styles_namespaceObject = require("@mui/material/styles");
;// CONCATENATED MODULE: external "@mui/material/CssBaseline"
const CssBaseline_namespaceObject = require("@mui/material/CssBaseline");
var CssBaseline_default = /*#__PURE__*/__webpack_require__.n(CssBaseline_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Container"
const Container_namespaceObject = require("@mui/material/Container");
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Box"
const Box_namespaceObject = require("@mui/material/Box");
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_namespaceObject);
// EXTERNAL MODULE: ./src/components/CarContext.tsx + 1 modules
var CarContext = __webpack_require__(7945);
;// CONCATENATED MODULE: ./pages/_app.tsx









const darkTheme = (0,styles_namespaceObject.createTheme)({
    palette: {
        mode: "dark"
    }
});
function HomePage({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).StrictMode, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styles_namespaceObject.ThemeProvider, {
            theme: darkTheme,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((CssBaseline_default()), {}),
                /*#__PURE__*/ jsx_runtime_.jsx((Container_default()), {
                    children: /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(CarContext/* CarProvider */.r, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                                ...pageProps
                            })
                        })
                    })
                })
            ]
        })
    });
}
/* harmony default export */ const _app = (HomePage);


/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [945], () => (__webpack_exec__(523)));
module.exports = __webpack_exports__;

})();