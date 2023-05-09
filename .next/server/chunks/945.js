"use strict";
exports.id = 945;
exports.ids = [945];
exports.modules = {

/***/ 7945:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "X": () => (/* binding */ CarContext),
  "r": () => (/* binding */ CarProvider)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./public/api/cars.json
const cars_namespaceObject = JSON.parse('[{"id":"xc90-recharge","modelName":"XC90 Recharge","bodyType":"suv","modelType":"plug-in hybrid","imageUrl":"/images/xc90_recharge.jpg"},{"id":"xc60-recharge","modelName":"XC60 Recharge","bodyType":"suv","modelType":"plug-in hybrid","imageUrl":"/images/xc60_recharge.jpg"},{"id":"xc40-recharge","modelName":"XC40 Recharge","bodyType":"suv","modelType":"plug-in hybrid","imageUrl":"/images/xc40_recharge.jpg"},{"id":"xc40-bev","modelName":"XC40 Recharge","bodyType":"suv","modelType":"pure electric","imageUrl":"/images/xc40_bev.jpg"},{"id":"v90-recharge","modelName":"V90 Recharge","bodyType":"estate","modelType":"plug-in hybrid","imageUrl":"/images/v90_recharge.jpg"},{"id":"v60-recharge","modelName":"V60 Recharge","bodyType":"estate","modelType":"plug-in hybrid","imageUrl":"/images/v60_recharge.jpg"},{"id":"s90-recharge","modelName":"S90 Recharge","bodyType":"sedan","modelType":"plug-in hybrid","imageUrl":"/images/s90_recharge.jpg"},{"id":"s60-recharge","modelName":"S60 Recharge","bodyType":"sedan","modelType":"plug-in hybrid","imageUrl":"/images/s60_recharge.jpg"}]');
;// CONCATENATED MODULE: ./src/components/CarContext.tsx



const CarContext = /*#__PURE__*/ (0,external_react_.createContext)({
    cars: cars_namespaceObject
});
const CarProvider = ({ children  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(CarContext.Provider, {
        value: {
            cars: cars_namespaceObject
        },
        children: children
    });
};


/***/ })

};
;