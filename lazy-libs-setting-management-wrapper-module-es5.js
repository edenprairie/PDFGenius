function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["lazy-libs-setting-management-wrapper-module"], {
  /***/
  "./node_modules/@abp/ng.setting-management/fesm2015/abp-ng.setting-management.js":
  /*!***************************************************************************************!*\
    !*** ./node_modules/@abp/ng.setting-management/fesm2015/abp-ng.setting-management.js ***!
    \***************************************************************************************/

  /*! exports provided: SettingManagementComponent, SettingManagementModule, ɵa, ɵb, ɵc */

  /***/
  function node_modulesAbpNgSettingManagementFesm2015AbpNgSettingManagementJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingManagementComponent", function () {
      return SettingManagementComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingManagementModule", function () {
      return SettingManagementModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵa", function () {
      return SettingManagementRoutingModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵb", function () {
      return SettingManagementState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵc", function () {
      return SetSelectedSettingTab;
    });
    /* harmony import */


    var _abp_ng_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @abp/ng.core */
    "./node_modules/@abp/ng.core/fesm2015/abp-ng.core.js");
    /* harmony import */


    var _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @abp/ng.theme.shared */
    "./node_modules/@abp/ng.theme.shared/fesm2015/abp-ng.theme.shared.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngxs/store */
    "./node_modules/@ngxs/store/fesm2015/ngxs-store.js");
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/actions/setting-management.actions.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var SetSelectedSettingTab =
    /**
     * @param {?} payload
     */
    function SetSelectedSettingTab(payload) {
      _classCallCheck(this, SetSelectedSettingTab);

      this.payload = payload;
    };

    SetSelectedSettingTab.type = '[SettingManagement] Set Selected Tab';

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/states/setting-management.state.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var SettingManagementState =
    /*#__PURE__*/
    function () {
      function SettingManagementState() {
        _classCallCheck(this, SettingManagementState);
      }

      _createClass(SettingManagementState, [{
        key: "settingManagementAction",

        /**
         * @param {?} __0
         * @param {?} __1
         * @return {?}
         */
        value: function settingManagementAction(_ref, _ref2) {
          var patchState = _ref.patchState;
          var payload = _ref2.payload;
          patchState({
            selectedTab: payload
          });
        }
      }], [{
        key: "getSelectedTab",

        /**
         * @param {?} __0
         * @return {?}
         */
        value: function getSelectedTab(_ref3) {
          var selectedTab = _ref3.selectedTab;
          return selectedTab;
        }
      }]);

      return SettingManagementState;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Action"])(SetSelectedSettingTab), Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__metadata"])("design:paramtypes", [Object, SetSelectedSettingTab]), Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__metadata"])("design:returntype", void 0)], SettingManagementState.prototype, "settingManagementAction", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Selector"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__metadata"])("design:paramtypes", [Object]), Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__metadata"])("design:returntype", void 0)], SettingManagementState, "getSelectedTab", null);
    SettingManagementState = Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["State"])({
      name: 'SettingManagementState',
      defaults:
      /** @type {?} */
      {
        selectedTab: {}
      }
    })], SettingManagementState);
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/setting-management.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var SettingManagementComponent =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} router
       * @param {?} store
       */
      function SettingManagementComponent(router, store) {
        _classCallCheck(this, SettingManagementComponent);

        this.router = router;
        this.store = store;
        this.settings = [];

        this.trackByFn =
        /**
        * @param {?} _
        * @param {?} item
        * @return {?}
        */
        function (_, item) {
          return item.name;
        };
      }
      /**
       * @param {?} value
       * @return {?}
       */


      _createClass(SettingManagementComponent, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {
          var _this = this;

          this.settings = Object(_abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_1__["getSettingTabs"])().filter(
          /**
          * @param {?} setting
          * @return {?}
          */
          function (setting) {
            return _this.store.selectSnapshot(_abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["ConfigState"].getGrantedPolicy(setting.requiredPolicy));
          }).sort(
          /**
          * @param {?} a
          * @param {?} b
          * @return {?}
          */
          function (a, b) {
            return a.order - b.order;
          });

          if (!this.selected && this.settings.length) {
            this.selected = this.settings[0];
          }
        }
      }, {
        key: "selected",
        set: function set(value) {
          this.store.dispatch(new SetSelectedSettingTab(value));
        }
        /**
         * @return {?}
         */
        ,
        get: function get() {
          /** @type {?} */
          var value = this.store.selectSnapshot(SettingManagementState.getSelectedTab);

          if ((!value || !value.component) && this.settings.length) {
            return this.settings[0];
          }

          return value;
        }
      }]);

      return SettingManagementComponent;
    }();

    SettingManagementComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
      args: [{
        selector: 'abp-setting-management',
        template: "<div class=\"row entry-row\">\n  <div class=\"col-auto\">\n    <h1 class=\"content-header-title\">{{ 'AbpSettingManagement::Settings' | abpLocalization }}</h1>\n  </div>\n  <div id=\"breadcrumb\" class=\"col-md-auto pl-md-0\">\n    <abp-breadcrumb></abp-breadcrumb>\n  </div>\n  <div class=\"col\">\n    <div class=\"text-lg-right pt-2\" id=\"AbpContentToolbar\"></div>\n  </div>\n</div>\n\n<div id=\"SettingManagementWrapper\">\n  <div class=\"card\">\n    <div class=\"card-body\">\n      <div class=\"row\">\n        <div class=\"col-12 col-md-3\">\n          <ul class=\"nav flex-column nav-pills\" id=\"nav-tab\" role=\"tablist\">\n            <li\n              *abpFor=\"let setting of settings; trackBy: trackByFn\"\n              (click)=\"selected = setting\"\n              class=\"nav-item pointer\"\n              [abpPermission]=\"setting.requiredPolicy\"\n            >\n              <a\n                class=\"nav-link\"\n                [id]=\"setting.name + '-tab'\"\n                role=\"tab\"\n                [class.active]=\"setting.name === selected.name\"\n                >{{ setting.name | abpLocalization }}</a\n              >\n            </li>\n          </ul>\n        </div>\n        <div class=\"col-12 col-md-9\">\n          <div *ngIf=\"settings.length\" class=\"tab-content\">\n            <div class=\"tab-pane fade show active\" [id]=\"selected.name + '-tab'\" role=\"tabpanel\">\n              <ng-container *ngComponentOutlet=\"selected.component\"></ng-container>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"
      }]
    }];
    /** @nocollapse */

    SettingManagementComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"]
      }];
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/setting-management-routing.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var ɵ0 = {
      requiredPolicy: 'AbpAccount.SettingManagement'
    };
    /** @type {?} */

    var routes = [{
      path: '',
      component: _abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["DynamicLayoutComponent"],
      children: [{
        path: '',
        component: SettingManagementComponent,
        data: ɵ0
      }]
    }];

    var SettingManagementRoutingModule = function SettingManagementRoutingModule() {
      _classCallCheck(this, SettingManagementRoutingModule);
    };

    SettingManagementRoutingModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
      args: [{
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/setting-management.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var SettingManagementModule = function SettingManagementModule() {
      _classCallCheck(this, SettingManagementModule);
    };

    SettingManagementModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
      args: [{
        declarations: [SettingManagementComponent],
        imports: [SettingManagementRoutingModule, _abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["CoreModule"], _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_1__["ThemeSharedModule"], _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["NgxsModule"].forFeature([SettingManagementState])]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * Generated from: public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: abp-ng.setting-management.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=abp-ng.setting-management.js.map

    /***/
  },

  /***/
  "./src/app/lazy-libs/setting-management-wrapper.module.ts":
  /*!****************************************************************!*\
    !*** ./src/app/lazy-libs/setting-management-wrapper.module.ts ***!
    \****************************************************************/

  /*! exports provided: SettingManagementWrapperModule */

  /***/
  function srcAppLazyLibsSettingManagementWrapperModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingManagementWrapperModule", function () {
      return SettingManagementWrapperModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _abp_ng_setting_management__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @abp/ng.setting-management */
    "./node_modules/@abp/ng.setting-management/fesm2015/abp-ng.setting-management.js");

    var SettingManagementWrapperModule = function SettingManagementWrapperModule() {
      _classCallCheck(this, SettingManagementWrapperModule);
    };

    SettingManagementWrapperModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_abp_ng_setting_management__WEBPACK_IMPORTED_MODULE_2__["SettingManagementModule"]]
    })], SettingManagementWrapperModule);
    /***/
  }
}]);
//# sourceMappingURL=lazy-libs-setting-management-wrapper-module-es5.js.map