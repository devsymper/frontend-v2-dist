(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[157],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/process/StartProcessInstanceByModeler.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/process/StartProcessInstanceByModeler.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ \"./node_modules/core-js/modules/es.regexp.exec.js\");\n/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ \"./node_modules/core-js/modules/es.string.split.js\");\n/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_daomanhkha_Library_CloudStorage_Dropbox_code_frontend_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper */ \"./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Users_daomanhkha_Library_CloudStorage_Dropbox_code_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _api_BPMNEngine__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../api/BPMNEngine */ \"./src/api/BPMNEngine.js\");\n\n\n\n\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data: function data() {\n    return {\n      status: 'starting'\n    };\n  },\n  mounted: function mounted() {\n    this.startProcessInstance();\n  },\n  methods: {\n    startProcessInstance: function startProcessInstance() {\n      var _this = this;\n\n      return Object(_Users_daomanhkha_Library_CloudStorage_Dropbox_code_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n        var id, res, currentUserId, _iterator, _step, t, assignee;\n\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                id = _this.$route.params.id;\n                _context.next = 3;\n                return _api_BPMNEngine__WEBPACK_IMPORTED_MODULE_5__[\"default\"].startProcessInstanceByModelerId(id);\n\n              case 3:\n                res = _context.sent;\n                _context.prev = 4;\n                currentUserId = _this.$store.state.app.endUserInfo.id;\n                _this.status = 'successfull';\n                _iterator = Object(_Users_daomanhkha_Library_CloudStorage_Dropbox_code_frontend_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(res.data.firstTasks);\n                _context.prev = 8;\n\n                _iterator.s();\n\n              case 10:\n                if ((_step = _iterator.n()).done) {\n                  _context.next = 19;\n                  break;\n                }\n\n                t = _step.value;\n\n                if (!t.assignee) {\n                  _context.next = 17;\n                  break;\n                }\n\n                assignee = t.assignee.split(':')[0];\n\n                if (!(assignee == currentUserId)) {\n                  _context.next = 17;\n                  break;\n                }\n\n                _this.$goToPage('myitem/tasks/' + t.id, _this.$t('v2.workflow.doTask'));\n\n                return _context.abrupt(\"break\", 19);\n\n              case 17:\n                _context.next = 10;\n                break;\n\n              case 19:\n                _context.next = 24;\n                break;\n\n              case 21:\n                _context.prev = 21;\n                _context.t0 = _context[\"catch\"](8);\n\n                _iterator.e(_context.t0);\n\n              case 24:\n                _context.prev = 24;\n\n                _iterator.f();\n\n                return _context.finish(24);\n\n              case 27:\n                _context.next = 33;\n                break;\n\n              case 29:\n                _context.prev = 29;\n                _context.t1 = _context[\"catch\"](4);\n                _this.status = 'failed';\n                console.error(_context.t1);\n\n              case 33:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, null, [[4, 29], [8, 21, 24, 27]]);\n      }))();\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/views/process/StartProcessInstanceByModeler.vue?./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"61ec6757-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/process/StartProcessInstanceByModeler.vue?vue&type=template&id=3f9f8c13&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"61ec6757-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/process/StartProcessInstanceByModeler.vue?vue&type=template&id=3f9f8c13& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"align-center mt-10\" }, [\n    _vm.status == \"starting\"\n      ? _c(\n          \"div\",\n          [\n            _c(\"v-progress-circular\", {\n              staticClass: \"mr-4 mb-1\",\n              attrs: { size: 20, width: 3, color: \"primary\", indeterminate: \"\" }\n            }),\n            _c(\"h3\", { staticClass: \"d-inline-block\" }, [\n              _vm._v(_vm._s(_vm.$t(\"v2.workflow.workflowInit\")))\n            ])\n          ],\n          1\n        )\n      : _vm.status == \"successfull\"\n      ? _c(\"div\", { staticClass: \"green--text\" }, [\n          _c(\"i\", { staticClass: \"mdi mdi-check-bold fs-18 mr-4\" }),\n          _c(\"h3\", { staticClass: \"d-inline-block\" }, [\n            _vm._v(_vm._s(_vm.$t(\"v2.workflow.workflowInitSuccess\")))\n          ])\n        ])\n      : _vm.status == \"failed\"\n      ? _c(\"div\", { staticClass: \"red--text\" }, [\n          _c(\"i\", { staticClass: \"mdi mdi-alert-box-outline fs-18 mr-4\" }),\n          _c(\"h3\", { staticClass: \"d-inline-block\" }, [\n            _vm._v(_vm._s(_vm.$t(\"v2.workflow.workflowInitFail\")))\n          ])\n        ])\n      : _vm._e()\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/views/process/StartProcessInstanceByModeler.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%2261ec6757-vue-loader-template%22%7D!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./src/views/process/StartProcessInstanceByModeler.vue":
/*!*************************************************************!*\
  !*** ./src/views/process/StartProcessInstanceByModeler.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _StartProcessInstanceByModeler_vue_vue_type_template_id_3f9f8c13___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StartProcessInstanceByModeler.vue?vue&type=template&id=3f9f8c13& */ \"./src/views/process/StartProcessInstanceByModeler.vue?vue&type=template&id=3f9f8c13&\");\n/* harmony import */ var _StartProcessInstanceByModeler_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StartProcessInstanceByModeler.vue?vue&type=script&lang=js& */ \"./src/views/process/StartProcessInstanceByModeler.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ \"./node_modules/vuetify-loader/lib/runtime/installComponents.js\");\n/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var vuetify_lib_components_VProgressCircular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VProgressCircular */ \"./node_modules/vuetify/lib/components/VProgressCircular/index.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _StartProcessInstanceByModeler_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _StartProcessInstanceByModeler_vue_vue_type_template_id_3f9f8c13___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _StartProcessInstanceByModeler_vue_vue_type_template_id_3f9f8c13___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* vuetify-loader */\n\n\n_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VProgressCircular: vuetify_lib_components_VProgressCircular__WEBPACK_IMPORTED_MODULE_4__[\"VProgressCircular\"]})\n\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/views/process/StartProcessInstanceByModeler.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/views/process/StartProcessInstanceByModeler.vue?");

/***/ }),

/***/ "./src/views/process/StartProcessInstanceByModeler.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./src/views/process/StartProcessInstanceByModeler.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StartProcessInstanceByModeler_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../node_modules/babel-loader/lib!../../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./StartProcessInstanceByModeler.vue?vue&type=script&lang=js& */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/process/StartProcessInstanceByModeler.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StartProcessInstanceByModeler_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/views/process/StartProcessInstanceByModeler.vue?");

/***/ }),

/***/ "./src/views/process/StartProcessInstanceByModeler.vue?vue&type=template&id=3f9f8c13&":
/*!********************************************************************************************!*\
  !*** ./src/views/process/StartProcessInstanceByModeler.vue?vue&type=template&id=3f9f8c13& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_61ec6757_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StartProcessInstanceByModeler_vue_vue_type_template_id_3f9f8c13___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"61ec6757-vue-loader-template\"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./StartProcessInstanceByModeler.vue?vue&type=template&id=3f9f8c13& */ \"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"61ec6757-vue-loader-template\\\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/process/StartProcessInstanceByModeler.vue?vue&type=template&id=3f9f8c13&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_61ec6757_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StartProcessInstanceByModeler_vue_vue_type_template_id_3f9f8c13___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_61ec6757_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StartProcessInstanceByModeler_vue_vue_type_template_id_3f9f8c13___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/views/process/StartProcessInstanceByModeler.vue?");

/***/ })

}]);