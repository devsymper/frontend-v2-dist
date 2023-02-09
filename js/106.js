(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[106],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/userRole/ListSystemRole.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/userRole/ListSystemRole.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.reduce.js */ \"./node_modules/core-js/modules/es.array.reduce.js\");\n/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_daomanhkha_Library_CloudStorage_Dropbox_code_frontend_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper */ \"./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_daomanhkha_Library_CloudStorage_Dropbox_code_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _plugins_util_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../plugins/util.js */ \"./src/plugins/util.js\");\n/* harmony import */ var _components_process_reformatGetListData_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../components/process/reformatGetListData.js */ \"./src/components/process/reformatGetListData.js\");\n/* harmony import */ var _configs_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../configs.js */ \"./src/configs.js\");\n/* harmony import */ var _api_systemRole_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/api/systemRole.js */ \"./src/api/systemRole.js\");\n/* harmony import */ var _components_common_ListItems_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/common/ListItems.vue */ \"./src/components/common/ListItems.vue\");\n/* harmony import */ var _components_systemRole_SystemRoleForm_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/systemRole/SystemRoleForm.vue */ \"./src/components/systemRole/SystemRoleForm.vue\");\n/* harmony import */ var _api_PermissionPackage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../api/PermissionPackage */ \"./src/api/PermissionPackage.js\");\n/* harmony import */ var _api_permissionPack__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../api/permissionPack */ \"./src/api/permissionPack.js\");\n\n\n\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data: function data() {\n    var _this = this;\n\n    var self = this;\n    return {\n      commonActionProps: {\n        module: 'system_role',\n        resource: 'system_role',\n        scope: 'system_role'\n      },\n      containerHeight: 300,\n      actionOnItem: 'create',\n      getListUrl: _configs_js__WEBPACK_IMPORTED_MODULE_6__[\"appConfigs\"].apiDomain.systemRole + 'system-role',\n      currentItemData: {\n        name: '',\n        description: '',\n        users: [],\n        permissions: []\n      },\n      tableContextMenu: {\n        update: {\n          name: 'edit',\n          text: this.$t('common.edit'),\n          callback: function callback(row, _callback) {\n            self.getDetailSystemRole(row.id);\n            self.actionOnItem = 'update';\n            self.applyDataToForm(row);\n          }\n        },\n        \"delete\": {\n          name: 'remove',\n          text: this.$t('common.delete'),\n          callback: function () {\n            var _callback2 = Object(_Users_daomanhkha_Library_CloudStorage_Dropbox_code_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee(rows, refreshList) {\n              var ids, _iterator, _step, item, res;\n\n              return regeneratorRuntime.wrap(function _callee$(_context) {\n                while (1) {\n                  switch (_context.prev = _context.next) {\n                    case 0:\n                      ids = [];\n                      _iterator = Object(_Users_daomanhkha_Library_CloudStorage_Dropbox_code_frontend_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(rows);\n\n                      try {\n                        for (_iterator.s(); !(_step = _iterator.n()).done;) {\n                          item = _step.value;\n                          ids.push(item.id);\n                        }\n                      } catch (err) {\n                        _iterator.e(err);\n                      } finally {\n                        _iterator.f();\n                      }\n\n                      _context.prev = 3;\n                      _context.next = 6;\n                      return _api_systemRole_js__WEBPACK_IMPORTED_MODULE_7__[\"systemRoleApi\"][\"delete\"](ids);\n\n                    case 6:\n                      res = _context.sent;\n\n                      if (res.status == 200) {\n                        self.$snotifySuccess(_this.$t('v2.account.deleted') + ids.length + _this.$t('v2.account.items'));\n                      } else {\n                        self.$snotifyError(res, _this.$t('v2.account.canNotDeleteSelectedItems'));\n                      }\n\n                      _context.next = 13;\n                      break;\n\n                    case 10:\n                      _context.prev = 10;\n                      _context.t0 = _context[\"catch\"](3);\n                      self.$snotifyError(_context.t0, _this.$t('v2.account.canNotDeleteSelectedItems'));\n\n                    case 13:\n                      refreshList();\n\n                    case 14:\n                    case \"end\":\n                      return _context.stop();\n                  }\n                }\n              }, _callee, null, [[3, 10]]);\n            }));\n\n            function callback(_x, _x2) {\n              return _callback2.apply(this, arguments);\n            }\n\n            return callback;\n          }()\n        },\n        detail: {\n          name: 'detail',\n          text: this.$t('common.detail'),\n          callback: function callback(row, _callback3) {\n            self.$refs.listSystemRole.actionPanel = true;\n            self.getDetailSystemRole(row.id);\n            self.actionOnItem = 'detail';\n            self.applyDataToForm(row);\n          }\n        }\n      }\n    };\n  },\n  mounted: function mounted() {\n    this.calcContainerHeight();\n  },\n  created: function created() {},\n  watch: {},\n  methods: {\n    closePanel: function closePanel() {\n      this.$refs.listSystemRole.closeactionPanel();\n    },\n    getDetailSystemRole: function getDetailSystemRole(id) {\n      var _this2 = this;\n\n      return Object(_Users_daomanhkha_Library_CloudStorage_Dropbox_code_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {\n        var res, key, mapIdToPermission, permissions;\n        return regeneratorRuntime.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                _context2.next = 2;\n                return _api_systemRole_js__WEBPACK_IMPORTED_MODULE_7__[\"systemRoleApi\"].detail(id);\n\n              case 2:\n                res = _context2.sent;\n\n                if (res.status == 200) {\n                  for (key in res.data) {\n                    _this2.$set(_this2.currentItemData, key, res.data[key]);\n                  }\n                } else {\n                  _this2.$snotifyError(res, _this2.$t('v2.account.canNotGetItemDetail'));\n                }\n\n                _context2.next = 6;\n                return _api_permissionPack__WEBPACK_IMPORTED_MODULE_11__[\"permissionApi\"].getPermissionOfRole('system:' + id);\n\n              case 6:\n                res = _context2.sent;\n\n                if (res.status == 200) {\n                  mapIdToPermission = _this2.$store.state.permission.allPermissionPack;\n                  permissions = res.data.reduce(function (arr, el) {\n                    if (mapIdToPermission[el.permissionPackId]) {\n                      arr.push(mapIdToPermission[el.permissionPackId]);\n                    }\n\n                    return arr;\n                  }, []);\n\n                  _this2.$set(_this2.currentItemData, 'permissions', permissions);\n                } else {\n                  _this2.$snotifyError(res, _this2.$t('v2.account.canNotGetPermissionOfRole'));\n                }\n\n              case 8:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }))();\n    },\n    handleSavedItem: function handleSavedItem() {\n      this.$refs.listSystemRole.refreshList();\n    },\n    handleAddItem: function handleAddItem() {\n      this.actionOnItem = 'create';\n\n      for (var key in this.currentItemData) {\n        if (key == 'users' || key == 'permissions') {\n          this.currentItemData.users = [];\n        } else {\n          this.currentItemData[key] = '';\n        }\n      }\n    },\n    calcContainerHeight: function calcContainerHeight() {\n      this.containerHeight = _plugins_util_js__WEBPACK_IMPORTED_MODULE_4__[\"util\"].getComponentSize(this).h;\n    },\n    applyDataToForm: function applyDataToForm(row) {\n      for (var key in row) {\n        this.$set(this.currentItemData, key, row[key]);\n      }\n    }\n  },\n  components: {\n    ListItems: _components_common_ListItems_vue__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n    SystemRoleForm: _components_systemRole_SystemRoleForm_vue__WEBPACK_IMPORTED_MODULE_9__[\"default\"]\n  }\n});\n\n//# sourceURL=webpack:///./src/views/userRole/ListSystemRole.vue?./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"61ec6757-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/userRole/ListSystemRole.vue?vue&type=template&id=af063432&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"61ec6757-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/userRole/ListSystemRole.vue?vue&type=template&id=af063432& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    { staticClass: \"w-100 h-100\" },\n    [\n      _c(\"list-items\", {\n        ref: \"listSystemRole\",\n        attrs: {\n          useDefaultContext: false,\n          pageTitle: _vm.$t(\"systemRole.list.title\"),\n          tableContextMenu: _vm.tableContextMenu,\n          containerHeight: _vm.containerHeight,\n          getDataUrl: _vm.getListUrl,\n          useActionPanel: true,\n          showCloseIcon: true,\n          headerPrefixKeypath: \"common\",\n          currentItemData: _vm.currentItemData,\n          commonActionProps: _vm.commonActionProps\n        },\n        on: { \"after-open-add-panel\": _vm.handleAddItem },\n        scopedSlots: _vm._u([\n          {\n            key: \"right-panel-content\",\n            fn: function(ref) {\n              var itemData = ref.itemData\n              return [\n                _c(\"SystemRoleForm\", {\n                  attrs: { action: _vm.actionOnItem, itemData: itemData },\n                  on: {\n                    close: _vm.closePanel,\n                    \"saved-item-data\": _vm.handleSavedItem\n                  }\n                })\n              ]\n            }\n          }\n        ])\n      })\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/views/userRole/ListSystemRole.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%2261ec6757-vue-loader-template%22%7D!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./src/api/PermissionPackage.js":
/*!**************************************!*\
  !*** ./src/api/PermissionPackage.js ***!
  \**************************************/
/*! exports provided: permissionPackageApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"permissionPackageApi\", function() { return permissionPackageApi; });\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ \"./src/api/api.js\");\n/* harmony import */ var _configs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../configs.js */ \"./src/configs.js\");\n\n\nvar coreApi = new _api__WEBPACK_IMPORTED_MODULE_0__[\"default\"](_configs_js__WEBPACK_IMPORTED_MODULE_1__[\"appConfigs\"].apiDomain.core);\nvar permissionPackageApi = {\n  getAllPackage: function getAllPackage(pageSize) {\n    return coreApi.get('permission-packages?size=' + pageSize);\n  },\n  addUserToPackage: function addUserToPackage(data) {\n    return coreApi.post('user/permission/package', data);\n  }\n};\n\n//# sourceURL=webpack:///./src/api/PermissionPackage.js?");

/***/ }),

/***/ "./src/components/process/reformatGetListData.js":
/*!*******************************************************!*\
  !*** ./src/components/process/reformatGetListData.js ***!
  \*******************************************************/
/*! exports provided: reformatGetListProcess, reformatGetListDeployments, reformatGetListInstances, reformatValueToStr, defaultXML */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"reformatGetListProcess\", function() { return reformatGetListProcess; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"reformatGetListDeployments\", function() { return reformatGetListDeployments; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"reformatGetListInstances\", function() { return reformatGetListInstances; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"reformatValueToStr\", function() { return reformatValueToStr; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"defaultXML\", function() { return defaultXML; });\n/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ \"./node_modules/core-js/modules/es.array.includes.js\");\n/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ \"./node_modules/core-js/modules/es.array.is-array.js\");\n/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ \"./node_modules/core-js/modules/es.array.map.js\");\n/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ \"./node_modules/core-js/modules/es.regexp.exec.js\");\n/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ \"./node_modules/core-js/modules/es.string.includes.js\");\n/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ \"./node_modules/core-js/modules/es.string.replace.js\");\n/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _Users_daomanhkha_Library_CloudStorage_Dropbox_code_frontend_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof */ \"./node_modules/@babel/runtime/helpers/esm/typeof.js\");\n/* harmony import */ var _Users_daomanhkha_Library_CloudStorage_Dropbox_code_frontend_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper */ \"./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js\");\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../main */ \"./src/main.js\");\n/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash/isEmpty */ \"./node_modules/lodash/isEmpty.js\");\n/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\n\n\n\n\nvar reformatGetListProcess = function reformatGetListProcess(res) {\n  var _iterator = Object(_Users_daomanhkha_Library_CloudStorage_Dropbox_code_frontend_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(res.data),\n      _step;\n\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var item = _step.value;\n      item.lastUpdated = _main__WEBPACK_IMPORTED_MODULE_8__[\"SYMPER_APP\"].$moment(item.lastUpdated).fromNow();\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n\n  var rsl = {\n    total: res.total,\n    columns: [{\n      name: 'key',\n      title: _main__WEBPACK_IMPORTED_MODULE_8__[\"SYMPER_APP\"].$t('v2.workflow.key'),\n      type: 'text'\n    }, {\n      name: 'name',\n      title: _main__WEBPACK_IMPORTED_MODULE_8__[\"SYMPER_APP\"].$t('v2.workflow.name'),\n      type: 'text'\n    }, {\n      name: 'description',\n      title: _main__WEBPACK_IMPORTED_MODULE_8__[\"SYMPER_APP\"].$t('v2.workflow.description'),\n      type: 'text'\n    }, {\n      name: 'createdBy',\n      title: _main__WEBPACK_IMPORTED_MODULE_8__[\"SYMPER_APP\"].$t('v2.workflow.createdBy'),\n      type: 'text'\n    }, {\n      name: 'version',\n      title: _main__WEBPACK_IMPORTED_MODULE_8__[\"SYMPER_APP\"].$t('v2.workflow.version'),\n      type: 'text'\n    }, {\n      name: 'lastUpdated',\n      title: _main__WEBPACK_IMPORTED_MODULE_8__[\"SYMPER_APP\"].$t('v2.workflow.lastUpdated'),\n      type: 'text'\n    }, {\n      name: 'LastUpdatedBy',\n      title: _main__WEBPACK_IMPORTED_MODULE_8__[\"SYMPER_APP\"].$t('v2.workflow.lastUpdatedBy'),\n      type: 'text'\n    }],\n    listObject: res.data\n  };\n  return rsl;\n};\nvar reformatGetListDeployments = function reformatGetListDeployments(res) {\n  var rsl = {\n    total: res.total,\n    columns: [{\n      name: 'key',\n      title: _main__WEBPACK_IMPORTED_MODULE_8__[\"SYMPER_APP\"].$t('v2.workflow.key'),\n      type: 'text'\n    }, {\n      name: 'name',\n      title: _main__WEBPACK_IMPORTED_MODULE_8__[\"SYMPER_APP\"].$t('v2.workflow.name'),\n      type: 'text'\n    }, {\n      name: 'description',\n      title: _main__WEBPACK_IMPORTED_MODULE_8__[\"SYMPER_APP\"].$t('v2.workflow.description'),\n      type: 'text'\n    }, {\n      name: 'version',\n      title: _main__WEBPACK_IMPORTED_MODULE_8__[\"SYMPER_APP\"].$t('v2.workflow.version'),\n      type: 'text'\n    }],\n    listObject: res.data\n  };\n  return rsl;\n};\nvar reformatGetListInstances = function reformatGetListInstances(res) {\n  if (res.data) {\n    res.data.map(function (row) {\n      return row.ended = row.endTime != null ? true : false;\n    });\n  }\n\n  var rsl = {\n    total: res.total,\n    columns: [{\n      name: 'name',\n      title: _main__WEBPACK_IMPORTED_MODULE_8__[\"SYMPER_APP\"].$t('v2.workflow.name'),\n      type: 'text'\n    }, {\n      name: 'processDefinitionName',\n      title: _main__WEBPACK_IMPORTED_MODULE_8__[\"SYMPER_APP\"].$t('v2.workflow.processDefinitionName'),\n      type: 'text'\n    }, {\n      name: 'businessKey',\n      title: _main__WEBPACK_IMPORTED_MODULE_8__[\"SYMPER_APP\"].$t('v2.workflow.businessKey'),\n      type: 'text'\n    }, {\n      name: 'ended',\n      title: _main__WEBPACK_IMPORTED_MODULE_8__[\"SYMPER_APP\"].$t('v2.workflow.ended'),\n      type: 'text'\n    }, {\n      name: 'startUserId',\n      title: _main__WEBPACK_IMPORTED_MODULE_8__[\"SYMPER_APP\"].$t('v2.workflow.startUserId'),\n      type: 'text'\n    }, {\n      name: 'startTime',\n      title: _main__WEBPACK_IMPORTED_MODULE_8__[\"SYMPER_APP\"].$t('v2.workflow.startTime'),\n      type: 'text'\n    }],\n    listObject: res.data\n  };\n  return rsl;\n};\nvar reformatValueToStr = function reformatValueToStr(value) {\n  if (Array.isArray(value)) {\n    var cleanValue = [];\n\n    var _iterator2 = Object(_Users_daomanhkha_Library_CloudStorage_Dropbox_code_frontend_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(value),\n        _step2;\n\n    try {\n      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n        var _item = _step2.value;\n\n        if (Object(_Users_daomanhkha_Library_CloudStorage_Dropbox_code_frontend_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_item) == 'object' && !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_9___default()(_item)) {\n          cleanValue.push(_item);\n        }\n      }\n    } catch (err) {\n      _iterator2.e(err);\n    } finally {\n      _iterator2.f();\n    }\n\n    if (cleanValue.length == 0) {\n      return '';\n    } else {\n      var _iterator3 = Object(_Users_daomanhkha_Library_CloudStorage_Dropbox_code_frontend_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(cleanValue),\n          _step3;\n\n      try {\n        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {\n          var item = _step3.value;\n\n          for (var key in item) {\n            if (key.includes('symper_prefix_chars_')) {\n              item[key.replace('symper_prefix_chars_', '')] = item[key];\n              delete item[key];\n            }\n          }\n        }\n      } catch (err) {\n        _iterator3.e(err);\n      } finally {\n        _iterator3.f();\n      }\n\n      return cleanValue;\n    }\n  } else {\n    return '';\n  }\n}; // export const defaultXML = `<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n// <definitions xmlns=\"http://www.omg.org/spec/BPMN/20100524/MODEL\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns:flowable=\"http://flowable.org/bpmn\" xmlns:bpmndi=\"http://www.omg.org/spec/BPMN/20100524/DI\" xmlns:omgdc=\"http://www.omg.org/spec/DD/20100524/DC\" xmlns:omgdi=\"http://www.omg.org/spec/DD/20100524/DI\" typeLanguage=\"http://www.w3.org/2001/XMLSchema\" expressionLanguage=\"http://www.w3.org/1999/XPath\" targetNamespace=\"http://www.flowable.org/processdef\">\n//   <signal id=\"snn1\" name=\"signal 1\" flowable:scope=\"global\"></signal>\n//   <process id=\"test_signal\" name=\"tesst signal\" isExecutable=\"true\">\n//     <startEvent id=\"sid-FC81F202-49D0-4CC8-B51A-E88D08EF945F\" isInterrupting=\"true\">\n//       <signalEventDefinition signalRef=\"snn1\"></signalEventDefinition>\n//     </startEvent>\n//   </process>\n//   <bpmndi:BPMNDiagram id=\"BPMNDiagram_test_signal\">\n//     <bpmndi:BPMNPlane bpmnElement=\"test_signal\" id=\"BPMNPlane_test_signal\">\n//       <bpmndi:BPMNShape bpmnElement=\"sid-FC81F202-49D0-4CC8-B51A-E88D08EF945F\" id=\"BPMNShape_sid-FC81F202-49D0-4CC8-B51A-E88D08EF945F\">\n//         <omgdc:Bounds height=\"30.0\" width=\"30.0\" x=\"100.0\" y=\"163.0\"></omgdc:Bounds>\n//       </bpmndi:BPMNShape>\n//     </bpmndi:BPMNPlane>\n//   </bpmndi:BPMNDiagram>\n// </definitions>`;\n\nvar defaultXML = \"<?xml version=\\\"1.0\\\" encoding=\\\"UTF-8\\\"?><bpmn:definitions xmlns:xsi=\\\"http://www.w3.org/2001/XMLSchema-instance\\\" xmlns:bpmn=\\\"http://www.omg.org/spec/BPMN/20100524/MODEL\\\" xmlns:bpmndi=\\\"http://www.omg.org/spec/BPMN/20100524/DI\\\" xmlns:dc=\\\"http://www.omg.org/spec/DD/20100524/DC\\\" id=\\\"Definitions_0c10uce\\\" targetNamespace=\\\"http://bpmn.io/schema/bpmn\\\" exporter=\\\"bpmn-js (https://demo.bpmn.io)\\\" exporterVersion=\\\"6.5.1\\\"><bpmn:process id=\\\"Process_1gacmib\\\" isExecutable=\\\"false\\\"><bpmn:startEvent id=\\\"StartEvent_17nrhtw\\\" /></bpmn:process><bpmndi:BPMNDiagram id=\\\"BPMNDiagram_1\\\"><bpmndi:BPMNPlane id=\\\"BPMNPlane_1\\\" bpmnElement=\\\"Process_1gacmib\\\"><bpmndi:BPMNShape id=\\\"_BPMNShape_StartEvent_2\\\" bpmnElement=\\\"StartEvent_17nrhtw\\\"><dc:Bounds x=\\\"156\\\" y=\\\"81\\\" width=\\\"36\\\" height=\\\"36\\\" /></bpmndi:BPMNShape></bpmndi:BPMNPlane></bpmndi:BPMNDiagram></bpmn:definitions>\";\n\n//# sourceURL=webpack:///./src/components/process/reformatGetListData.js?");

/***/ }),

/***/ "./src/views/userRole/ListSystemRole.vue":
/*!***********************************************!*\
  !*** ./src/views/userRole/ListSystemRole.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ListSystemRole_vue_vue_type_template_id_af063432___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListSystemRole.vue?vue&type=template&id=af063432& */ \"./src/views/userRole/ListSystemRole.vue?vue&type=template&id=af063432&\");\n/* harmony import */ var _ListSystemRole_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ListSystemRole.vue?vue&type=script&lang=js& */ \"./src/views/userRole/ListSystemRole.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _ListSystemRole_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _ListSystemRole_vue_vue_type_template_id_af063432___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _ListSystemRole_vue_vue_type_template_id_af063432___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/views/userRole/ListSystemRole.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/views/userRole/ListSystemRole.vue?");

/***/ }),

/***/ "./src/views/userRole/ListSystemRole.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./src/views/userRole/ListSystemRole.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListSystemRole_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../node_modules/babel-loader/lib!../../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ListSystemRole.vue?vue&type=script&lang=js& */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/userRole/ListSystemRole.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListSystemRole_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/views/userRole/ListSystemRole.vue?");

/***/ }),

/***/ "./src/views/userRole/ListSystemRole.vue?vue&type=template&id=af063432&":
/*!******************************************************************************!*\
  !*** ./src/views/userRole/ListSystemRole.vue?vue&type=template&id=af063432& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_61ec6757_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListSystemRole_vue_vue_type_template_id_af063432___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"61ec6757-vue-loader-template\"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ListSystemRole.vue?vue&type=template&id=af063432& */ \"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"61ec6757-vue-loader-template\\\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/userRole/ListSystemRole.vue?vue&type=template&id=af063432&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_61ec6757_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListSystemRole_vue_vue_type_template_id_af063432___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_61ec6757_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListSystemRole_vue_vue_type_template_id_af063432___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/views/userRole/ListSystemRole.vue?");

/***/ })

}]);