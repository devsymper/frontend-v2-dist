(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[117],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/kanban/BaConfig/KanbanList.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/kanban/BaConfig/KanbanList.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_common_ListItems__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/common/ListItems */ \"./src/components/common/ListItems.vue\");\n/* harmony import */ var _plugins_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/plugins/util.js */ \"./src/plugins/util.js\");\n/* harmony import */ var _configs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/configs */ \"./src/configs.js\");\n/* harmony import */ var worker_loader_worker_kanban_KanbanShowList_Worker_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! worker-loader!@/worker/kanban/KanbanShowList.Worker.js */ \"./node_modules/worker-loader/dist/cjs.js!./src/worker/kanban/KanbanShowList.Worker.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'listKanbans',\n  components: {\n    ListItems: _components_common_ListItems__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n  },\n  created: function created() {\n    this.kanbanShowListWorker = new worker_loader_worker_kanban_KanbanShowList_Worker_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\n    this.listenFromWorker();\n  },\n  data: function data() {\n    var self = this;\n    return {\n      containerHeight: 0,\n      apiUrl: _configs__WEBPACK_IMPORTED_MODULE_2__[\"appConfigs\"].apiDomain.kanban + '/kanban',\n      kanbanShowListWorker: null,\n      tableContextMenu: {\n        update: {\n          name: 'edit',\n          text: this.$t('common.edit'),\n          callback: function callback(obj, _callback) {\n            self.$goToPage('/kanban/' + obj.id + '/edit');\n          }\n        },\n        view: {\n          name: 'view',\n          text: this.$t('common.view'),\n          callback: function callback(obj, _callback2) {\n            self.$goToPage('/kanban/' + obj.id + '/view');\n          }\n        },\n        \"delete\": {\n          name: 'delete',\n          text: this.$t('common.delete'),\n          callback: function callback(rows, _callback3) {\n            self.deleteRows(rows);\n          }\n        }\n      }\n    };\n  },\n  mounted: function mounted() {\n    this.containerHeight = _plugins_util_js__WEBPACK_IMPORTED_MODULE_1__[\"util\"].getComponentSize(this).h;\n  },\n  methods: {\n    addKanban: function addKanban() {\n      this.$goToPage('/kanban/config', 'Tạo kanban');\n    },\n    listenFromWorker: function listenFromWorker() {\n      var self = this;\n      this.kanbanShowListWorker.addEventListener('message', function (event) {\n        var data = event.data;\n        var action = data.action;\n\n        if (self[action]) {\n          self[action](data.data);\n        } else {\n          console.error(\" action \".concat(action, \" not found \"));\n        }\n      });\n    },\n    deleteRows: function deleteRows(rows) {\n      this.kanbanShowListWorker.postMessage({\n        action: 'deleteRows',\n        data: {\n          rows: rows\n        }\n      });\n    },\n    handleDeleteRows: function handleDeleteRows(data) {\n      if (data == 200) {\n        this.$snotifySuccess(this.$t('v2.acessControl.successfullDelete'));\n      } else {\n        this.$snotifyError(this.$t('v2.acessControl.anErrorOccurred'));\n      }\n\n      this.$refs.listKanban.refreshList();\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/views/kanban/BaConfig/KanbanList.vue?./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"61ec6757-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/kanban/BaConfig/KanbanList.vue?vue&type=template&id=6dde5c25&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"61ec6757-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/kanban/BaConfig/KanbanList.vue?vue&type=template&id=6dde5c25& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    { staticClass: \"h-100 w-100\" },\n    [\n      _c(\"ListItems\", {\n        ref: \"listKanban\",\n        attrs: {\n          getDataUrl: _vm.apiUrl,\n          headerPrefixKeypath: \"table\",\n          pageTitle: _vm.$t(\"kanban.list.title\"),\n          containerHeight: _vm.containerHeight,\n          tableContextMenu: _vm.tableContextMenu,\n          showExportButton: false,\n          useDefaultContext: false,\n          useActionPanel: false,\n          emptyDataKey: \"kanban-record-list\",\n          isConfigKanban: true\n        },\n        on: { \"on-add-item-clicked\": _vm.addKanban }\n      })\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/views/kanban/BaConfig/KanbanList.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%2261ec6757-vue-loader-template%22%7D!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/worker-loader/dist/cjs.js!./src/worker/kanban/KanbanShowList.Worker.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/worker-loader/dist/cjs.js!./src/worker/kanban/KanbanShowList.Worker.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Worker_fn; });\nfunction Worker_fn() {\n  return new Worker(__webpack_require__.p + \"js/KanbanShowList.Worker.worker.js\");\n}\n\n\n//# sourceURL=webpack:///./src/worker/kanban/KanbanShowList.Worker.js?./node_modules/worker-loader/dist/cjs.js");

/***/ }),

/***/ "./src/views/kanban/BaConfig/KanbanList.vue":
/*!**************************************************!*\
  !*** ./src/views/kanban/BaConfig/KanbanList.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _KanbanList_vue_vue_type_template_id_6dde5c25___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./KanbanList.vue?vue&type=template&id=6dde5c25& */ \"./src/views/kanban/BaConfig/KanbanList.vue?vue&type=template&id=6dde5c25&\");\n/* harmony import */ var _KanbanList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./KanbanList.vue?vue&type=script&lang=js& */ \"./src/views/kanban/BaConfig/KanbanList.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _KanbanList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _KanbanList_vue_vue_type_template_id_6dde5c25___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _KanbanList_vue_vue_type_template_id_6dde5c25___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/views/kanban/BaConfig/KanbanList.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/views/kanban/BaConfig/KanbanList.vue?");

/***/ }),

/***/ "./src/views/kanban/BaConfig/KanbanList.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./src/views/kanban/BaConfig/KanbanList.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_KanbanList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./KanbanList.vue?vue&type=script&lang=js& */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/kanban/BaConfig/KanbanList.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_KanbanList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/views/kanban/BaConfig/KanbanList.vue?");

/***/ }),

/***/ "./src/views/kanban/BaConfig/KanbanList.vue?vue&type=template&id=6dde5c25&":
/*!*********************************************************************************!*\
  !*** ./src/views/kanban/BaConfig/KanbanList.vue?vue&type=template&id=6dde5c25& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_61ec6757_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_KanbanList_vue_vue_type_template_id_6dde5c25___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"61ec6757-vue-loader-template\"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./KanbanList.vue?vue&type=template&id=6dde5c25& */ \"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"61ec6757-vue-loader-template\\\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/kanban/BaConfig/KanbanList.vue?vue&type=template&id=6dde5c25&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_61ec6757_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_KanbanList_vue_vue_type_template_id_6dde5c25___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_61ec6757_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_KanbanList_vue_vue_type_template_id_6dde5c25___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/views/kanban/BaConfig/KanbanList.vue?");

/***/ })

}]);