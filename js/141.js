(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[141],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/dashboard/EditDashboardInClickhouseMode.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/dashboard/EditDashboardInClickhouseMode.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_dashboard_DashboardEditor_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/dashboard/DashboardEditor.vue */ \"./src/components/dashboard/DashboardEditor.vue\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  components: {\n    DashboardEditor: _components_dashboard_DashboardEditor_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n  },\n  created: function created() {\n    this.$setTabTitle(this.$t('bi.dashboard.edit'));\n  },\n  methods: {\n    handleLoadedConfig: function handleLoadedConfig(data) {\n      this.$setTabTitle(this.$t('v2.dashboard.editWithClickhouseMode') + ' ' + data.dashboardName);\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/views/dashboard/EditDashboardInClickhouseMode.vue?./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"61ec6757-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/dashboard/EditDashboardInClickhouseMode.vue?vue&type=template&id=12b75da5&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"61ec6757-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/dashboard/EditDashboardInClickhouseMode.vue?vue&type=template&id=12b75da5& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    { staticClass: \"symper-edit-dashboard w-100 position-relative\" },\n    [\n      _c(\n        \"div\",\n        {\n          staticClass:\n            \"\\n            position-absolute\\n            pa-2\\n            amber\\n            darken-3\\n            white--text\\n            text-center\\n        \",\n          staticStyle: {\n            width: \"fit-content\",\n            left: \"374px\",\n            height: \"40px\",\n            \"line-height\": \"27px\",\n            \"font-size\": \"13px\"\n          }\n        },\n        [\n          _vm._v(\n            \" \" + _vm._s(_vm.$t(\"v2.dashboard.inCheckPerformanceMode\")) + \" \"\n          )\n        ]\n      ),\n      _c(\"DashboardEditor\", {\n        attrs: {\n          action: \"edit\",\n          idObject: _vm.$route.params.id,\n          experimentalMode: \"clickhouse\"\n        },\n        on: { \"config-loaded\": _vm.handleLoadedConfig }\n      })\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/views/dashboard/EditDashboardInClickhouseMode.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%2261ec6757-vue-loader-template%22%7D!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./src/views/dashboard/EditDashboardInClickhouseMode.vue":
/*!***************************************************************!*\
  !*** ./src/views/dashboard/EditDashboardInClickhouseMode.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _EditDashboardInClickhouseMode_vue_vue_type_template_id_12b75da5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditDashboardInClickhouseMode.vue?vue&type=template&id=12b75da5& */ \"./src/views/dashboard/EditDashboardInClickhouseMode.vue?vue&type=template&id=12b75da5&\");\n/* harmony import */ var _EditDashboardInClickhouseMode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditDashboardInClickhouseMode.vue?vue&type=script&lang=js& */ \"./src/views/dashboard/EditDashboardInClickhouseMode.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _EditDashboardInClickhouseMode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _EditDashboardInClickhouseMode_vue_vue_type_template_id_12b75da5___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _EditDashboardInClickhouseMode_vue_vue_type_template_id_12b75da5___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/views/dashboard/EditDashboardInClickhouseMode.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/views/dashboard/EditDashboardInClickhouseMode.vue?");

/***/ }),

/***/ "./src/views/dashboard/EditDashboardInClickhouseMode.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./src/views/dashboard/EditDashboardInClickhouseMode.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditDashboardInClickhouseMode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../node_modules/babel-loader/lib!../../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./EditDashboardInClickhouseMode.vue?vue&type=script&lang=js& */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/dashboard/EditDashboardInClickhouseMode.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditDashboardInClickhouseMode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/views/dashboard/EditDashboardInClickhouseMode.vue?");

/***/ }),

/***/ "./src/views/dashboard/EditDashboardInClickhouseMode.vue?vue&type=template&id=12b75da5&":
/*!**********************************************************************************************!*\
  !*** ./src/views/dashboard/EditDashboardInClickhouseMode.vue?vue&type=template&id=12b75da5& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_61ec6757_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditDashboardInClickhouseMode_vue_vue_type_template_id_12b75da5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"61ec6757-vue-loader-template\"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./EditDashboardInClickhouseMode.vue?vue&type=template&id=12b75da5& */ \"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"61ec6757-vue-loader-template\\\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/dashboard/EditDashboardInClickhouseMode.vue?vue&type=template&id=12b75da5&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_61ec6757_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditDashboardInClickhouseMode_vue_vue_type_template_id_12b75da5___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_61ec6757_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditDashboardInClickhouseMode_vue_vue_type_template_id_12b75da5___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/views/dashboard/EditDashboardInClickhouseMode.vue?");

/***/ })

}]);