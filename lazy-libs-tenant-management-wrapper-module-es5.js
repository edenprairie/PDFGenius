function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["lazy-libs-tenant-management-wrapper-module"], {
  /***/
  "./node_modules/@abp/ng.feature-management/fesm2015/abp-ng.feature-management.js":
  /*!***************************************************************************************!*\
    !*** ./node_modules/@abp/ng.feature-management/fesm2015/abp-ng.feature-management.js ***!
    \***************************************************************************************/

  /*! exports provided: FeatureManagementComponent, FeatureManagementModule, ɵa, ɵb, ɵc, ɵd, ɵe, ɵf */

  /***/
  function node_modulesAbpNgFeatureManagementFesm2015AbpNgFeatureManagementJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeatureManagementComponent", function () {
      return FeatureManagementComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeatureManagementModule", function () {
      return FeatureManagementModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵa", function () {
      return FeatureManagementComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵb", function () {
      return FeatureManagementState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵc", function () {
      return FeatureManagementState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵd", function () {
      return FeatureManagementService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵe", function () {
      return GetFeatures;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵf", function () {
      return UpdateFeatures;
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


    var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngxs/store */
    "./node_modules/@ngxs/store/fesm2015/ngxs-store.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/actions/feature-management.actions.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var GetFeatures =
    /**
     * @param {?} payload
     */
    function GetFeatures(payload) {
      _classCallCheck(this, GetFeatures);

      this.payload = payload;
    };

    GetFeatures.type = '[FeatureManagement] Get Features';

    if (false) {}

    var UpdateFeatures =
    /**
     * @param {?} payload
     */
    function UpdateFeatures(payload) {
      _classCallCheck(this, UpdateFeatures);

      this.payload = payload;
    };

    UpdateFeatures.type = '[FeatureManagement] Update Features';

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/actions/index.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/services/feature-management.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var FeatureManagementService =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} rest
       * @param {?} store
       */
      function FeatureManagementService(rest, store) {
        _classCallCheck(this, FeatureManagementService);

        this.rest = rest;
        this.store = store;
      }
      /**
       * @param {?} params
       * @return {?}
       */


      _createClass(FeatureManagementService, [{
        key: "getFeatures",
        value: function getFeatures(params) {
          /** @type {?} */
          var request = {
            method: 'GET',
            url: '/api/abp/features',
            params: params
          };
          return this.rest.request(request);
        }
        /**
         * @param {?} __0
         * @return {?}
         */

      }, {
        key: "updateFeatures",
        value: function updateFeatures(_ref) {
          var features = _ref.features,
              providerKey = _ref.providerKey,
              providerName = _ref.providerName;

          /** @type {?} */
          var request = {
            method: 'PUT',
            url: '/api/abp/features',
            body: {
              features: features
            },
            params: {
              providerKey: providerKey,
              providerName: providerName
            }
          };
          return this.rest.request(request);
        }
      }]);

      return FeatureManagementService;
    }();

    FeatureManagementService.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    FeatureManagementService.ctorParameters = function () {
      return [{
        type: _abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["RestService"]
      }, {
        type: _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"]
      }];
    };
    /** @nocollapse */


    FeatureManagementService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"])({
      factory: function FeatureManagementService_Factory() {
        return new FeatureManagementService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"])(_abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["RestService"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"])(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"]));
      },
      token: FeatureManagementService,
      providedIn: "root"
    });

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/states/feature-management.state.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var FeatureManagementState =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} featureManagementService
       */
      function FeatureManagementState(featureManagementService) {
        _classCallCheck(this, FeatureManagementState);

        this.featureManagementService = featureManagementService;
      }
      /**
       * @param {?} __0
       * @return {?}
       */


      _createClass(FeatureManagementState, [{
        key: "getFeatures",

        /**
         * @param {?} __0
         * @param {?} __1
         * @return {?}
         */
        value: function getFeatures(_ref2, _ref3) {
          var patchState = _ref2.patchState;
          var payload = _ref3.payload;
          return this.featureManagementService.getFeatures(payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(
          /**
          * @param {?} __0
          * @return {?}
          */
          function (_ref4) {
            var features = _ref4.features;
            return patchState({
              features: features
            });
          }));
        }
        /**
         * @param {?} _
         * @param {?} __1
         * @return {?}
         */

      }, {
        key: "updateFeatures",
        value: function updateFeatures(_, _ref5) {
          var payload = _ref5.payload;
          return this.featureManagementService.updateFeatures(payload);
        }
      }], [{
        key: "getFeatures",
        value: function getFeatures(_ref6) {
          var features = _ref6.features;
          return features || [];
        }
      }]);

      return FeatureManagementState;
    }();

    FeatureManagementState.ctorParameters = function () {
      return [{
        type: FeatureManagementService
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Action"])(GetFeatures), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:paramtypes", [Object, GetFeatures]), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:returntype", void 0)], FeatureManagementState.prototype, "getFeatures", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Action"])(UpdateFeatures), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:paramtypes", [Object, UpdateFeatures]), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:returntype", void 0)], FeatureManagementState.prototype, "updateFeatures", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Selector"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:paramtypes", [Object]), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:returntype", void 0)], FeatureManagementState, "getFeatures", null);
    FeatureManagementState = Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["State"])({
      name: 'FeatureManagementState',
      defaults:
      /** @type {?} */
      {
        features: {}
      }
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:paramtypes", [FeatureManagementService])], FeatureManagementState);

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/states/index.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/feature-management/feature-management.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var FeatureManagementComponent =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} store
       */
      function FeatureManagementComponent(store) {
        _classCallCheck(this, FeatureManagementComponent);

        this.store = store;
        this.visibleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.modalBusy = false;
      }
      /**
       * @return {?}
       */


      _createClass(FeatureManagementComponent, [{
        key: "openModal",

        /**
         * @return {?}
         */
        value: function openModal() {
          if (!this.providerKey || !this.providerName) {
            throw new Error('Provider Key and Provider Name are required.');
          }

          this.getFeatures();
        }
        /**
         * @return {?}
         */

      }, {
        key: "getFeatures",
        value: function getFeatures() {
          var _this = this;

          this.store.dispatch(new GetFeatures({
            providerKey: this.providerKey,
            providerName: this.providerName
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["pluck"])('FeatureManagementState', 'features')).subscribe(
          /**
          * @param {?} features
          * @return {?}
          */
          function (features) {
            _this.buildForm(features);
          });
        }
        /**
         * @param {?} features
         * @return {?}
         */

      }, {
        key: "buildForm",
        value: function buildForm(features) {
          /** @type {?} */
          var formGroupObj = {};

          for (var i = 0; i < features.length; i++) {
            formGroupObj[i] = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](features[i].value === 'false' ? null : features[i].value);
          }

          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroup"](formGroupObj);
        }
        /**
         * @return {?}
         */

      }, {
        key: "save",
        value: function save() {
          var _this2 = this;

          if (this.modalBusy) return;
          this.modalBusy = true;
          /** @type {?} */

          var features = this.store.selectSnapshot(FeatureManagementState.getFeatures);
          features = features.map(
          /**
          * @param {?} feature
          * @param {?} i
          * @return {?}
          */
          function (feature, i) {
            return {
              name: feature.name,
              value: !_this2.form.value[i] || _this2.form.value[i] === 'false' ? null : _this2.form.value[i]
            };
          });
          this.store.dispatch(new UpdateFeatures({
            providerKey: this.providerKey,
            providerName: this.providerName,
            features: features
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(
          /**
          * @return {?}
          */
          function () {
            return _this2.modalBusy = false;
          })).subscribe(
          /**
          * @return {?}
          */
          function () {
            _this2.visible = false;
          });
        }
      }, {
        key: "visible",
        get: function get() {
          return this._visible;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._visible = value;
          this.visibleChange.emit(value);
          if (value) this.openModal();
        }
      }]);

      return FeatureManagementComponent;
    }();

    FeatureManagementComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
      args: [{
        selector: 'abp-feature-management',
        template: "<abp-modal size=\"md\" [(visible)]=\"visible\" [busy]=\"modalBusy\">\n  <ng-template #abpHeader>\n    <h3>{{ 'AbpFeatureManagement::Features' | abpLocalization }}</h3>\n  </ng-template>\n\n  <ng-template #abpBody>\n    <form *ngIf=\"form\" (ngSubmit)=\"save()\" [formGroup]=\"form\" validateOnSubmit>\n      <div\n        class=\"row my-3\"\n        *ngFor=\"let feature of features$ | async; let i = index\"\n        [ngSwitch]=\"feature.valueType.name\"\n      >\n        <div class=\"col-4\">{{ feature.name }}</div>\n        <div class=\"col-8\" *ngSwitchCase=\"'ToggleStringValueType'\">\n          <input type=\"checkbox\" name=\"feature.name\" [formControlName]=\"i\" />\n        </div>\n        <div class=\"col-8\" *ngSwitchCase=\"'FreeTextStringValueType'\">\n          <input type=\"text\" name=\"feature.name\" [formControlName]=\"i\" />\n        </div>\n      </div>\n      <div *ngIf=\"!(features$ | async)?.length\">\n        {{ 'AbpFeatureManagement::NoFeatureFoundMessage' | abpLocalization }}\n      </div>\n    </form>\n  </ng-template>\n\n  <ng-template #abpFooter>\n    <ng-container *ngIf=\"(features$ | async)?.length\">\n      <button #abpClose type=\"button\" class=\"btn btn-secondary\">\n        {{ 'AbpFeatureManagement::Cancel' | abpLocalization }}\n      </button>\n      <abp-button iconClass=\"fa fa-check\" [disabled]=\"form?.invalid || modalBusy\" (click)=\"save()\">\n        {{ 'AbpFeatureManagement::Save' | abpLocalization }}\n      </abp-button>\n    </ng-container>\n  </ng-template>\n</abp-modal>\n"
      }]
    }];
    /** @nocollapse */

    FeatureManagementComponent.ctorParameters = function () {
      return [{
        type: _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"]
      }];
    };

    FeatureManagementComponent.propDecorators = {
      providerKey: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      providerName: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      visible: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      visibleChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
      }]
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Select"])(FeatureManagementState.getFeatures), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"])], FeatureManagementComponent.prototype, "features$", void 0);

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/feature-management.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var FeatureManagementModule = function FeatureManagementModule() {
      _classCallCheck(this, FeatureManagementModule);
    };

    FeatureManagementModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
      args: [{
        declarations: [FeatureManagementComponent],
        imports: [_abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["CoreModule"], _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_1__["ThemeSharedModule"], _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["NgxsModule"].forFeature([FeatureManagementState])],
        exports: [FeatureManagementComponent]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/index.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: abp-ng.feature-management.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=abp-ng.feature-management.js.map

    /***/
  },

  /***/
  "./node_modules/@abp/ng.tenant-management/fesm2015/abp-ng.tenant-management.js":
  /*!*************************************************************************************!*\
    !*** ./node_modules/@abp/ng.tenant-management/fesm2015/abp-ng.tenant-management.js ***!
    \*************************************************************************************/

  /*! exports provided: CreateTenant, DeleteTenant, GetTenantById, GetTenants, TENANT_MANAGEMENT_ROUTES, TenantManagementModule, TenantManagementProviders, TenantManagementService, TenantManagementState, TenantManagementStateService, TenantsComponent, UpdateTenant, ɵa, ɵb, ɵc, ɵd, ɵe, ɵf, ɵg, ɵh, ɵj */

  /***/
  function node_modulesAbpNgTenantManagementFesm2015AbpNgTenantManagementJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateTenant", function () {
      return CreateTenant;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeleteTenant", function () {
      return DeleteTenant;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GetTenantById", function () {
      return GetTenantById;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GetTenants", function () {
      return GetTenants;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TENANT_MANAGEMENT_ROUTES", function () {
      return TENANT_MANAGEMENT_ROUTES;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TenantManagementModule", function () {
      return TenantManagementModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TenantManagementProviders", function () {
      return TenantManagementProviders;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TenantManagementService", function () {
      return TenantManagementService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TenantManagementState", function () {
      return TenantManagementState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TenantManagementStateService", function () {
      return TenantManagementStateService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TenantsComponent", function () {
      return TenantsComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateTenant", function () {
      return UpdateTenant;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵa", function () {
      return TenantsComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵb", function () {
      return TenantManagementState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵc", function () {
      return TenantManagementService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵd", function () {
      return GetTenants;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵe", function () {
      return GetTenantById;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵf", function () {
      return CreateTenant;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵg", function () {
      return UpdateTenant;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵh", function () {
      return DeleteTenant;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵj", function () {
      return TenantManagementRoutingModule;
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


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngxs/store */
    "./node_modules/@ngxs/store/fesm2015/ngxs-store.js");
    /* harmony import */


    var primeng_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! primeng/table */
    "./node_modules/primeng/table.js");
    /* harmony import */


    var primeng_table__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _abp_ng_feature_management__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @abp/ng.feature-management */
    "./node_modules/@abp/ng.feature-management/fesm2015/abp-ng.feature-management.js");
    /* harmony import */


    var _ngx_validate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ngx-validate/core */
    "./node_modules/@ngx-validate/core/fesm2015/ngx-validate-core.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/actions/tenant-management.actions.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var GetTenants =
    /**
     * @param {?=} payload
     */
    function GetTenants(payload) {
      _classCallCheck(this, GetTenants);

      this.payload = payload;
    };

    GetTenants.type = '[TenantManagement] Get Tenant';

    if (false) {}

    var GetTenantById =
    /**
     * @param {?} payload
     */
    function GetTenantById(payload) {
      _classCallCheck(this, GetTenantById);

      this.payload = payload;
    };

    GetTenantById.type = '[TenantManagement] Get Tenant By Id';

    if (false) {}

    var CreateTenant =
    /**
     * @param {?} payload
     */
    function CreateTenant(payload) {
      _classCallCheck(this, CreateTenant);

      this.payload = payload;
    };

    CreateTenant.type = '[TenantManagement] Create Tenant';

    if (false) {}

    var UpdateTenant =
    /**
     * @param {?} payload
     */
    function UpdateTenant(payload) {
      _classCallCheck(this, UpdateTenant);

      this.payload = payload;
    };

    UpdateTenant.type = '[TenantManagement] Update Tenant';

    if (false) {}

    var DeleteTenant =
    /**
     * @param {?} payload
     */
    function DeleteTenant(payload) {
      _classCallCheck(this, DeleteTenant);

      this.payload = payload;
    };

    DeleteTenant.type = '[TenantManagement] Delete Tenant';

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/services/tenant-management.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var TenantManagementService =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} rest
       */
      function TenantManagementService(rest) {
        _classCallCheck(this, TenantManagementService);

        this.rest = rest;
      }
      /**
       * @param {?=} params
       * @return {?}
       */


      _createClass(TenantManagementService, [{
        key: "getTenant",
        value: function getTenant() {
          var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] :
          /** @type {?} */
          {};

          /** @type {?} */
          var request = {
            method: 'GET',
            url: '/api/multi-tenancy/tenants',
            params: params
          };
          return this.rest.request(request);
        }
        /**
         * @param {?} id
         * @return {?}
         */

      }, {
        key: "getTenantById",
        value: function getTenantById(id) {
          /** @type {?} */
          var request = {
            method: 'GET',
            url: "/api/multi-tenancy/tenants/".concat(id)
          };
          return this.rest.request(request);
        }
        /**
         * @param {?} id
         * @return {?}
         */

      }, {
        key: "deleteTenant",
        value: function deleteTenant(id) {
          /** @type {?} */
          var request = {
            method: 'DELETE',
            url: "/api/multi-tenancy/tenants/".concat(id)
          };
          return this.rest.request(request);
        }
        /**
         * @param {?} body
         * @return {?}
         */

      }, {
        key: "createTenant",
        value: function createTenant(body) {
          /** @type {?} */
          var request = {
            method: 'POST',
            url: '/api/multi-tenancy/tenants',
            body: body
          };
          return this.rest.request(request);
        }
        /**
         * @param {?} body
         * @return {?}
         */

      }, {
        key: "updateTenant",
        value: function updateTenant(body) {
          /** @type {?} */
          var url = "/api/multi-tenancy/tenants/".concat(body.id);
          delete body.id;
          /** @type {?} */

          var request = {
            method: 'PUT',
            url: url,
            body: body
          };
          return this.rest.request(request);
        }
        /**
         * @param {?} id
         * @return {?}
         */

      }, {
        key: "getDefaultConnectionString",
        value: function getDefaultConnectionString(id) {
          /** @type {?} */
          var url = "/api/multi-tenancy/tenants/".concat(id, "/default-connection-string");
          /** @type {?} */

          var request = {
            method: 'GET',
            responseType: "text"
            /* Text */
            ,
            url: url
          };
          return this.rest.request(request);
        }
        /**
         * @param {?} payload
         * @return {?}
         */

      }, {
        key: "updateDefaultConnectionString",
        value: function updateDefaultConnectionString(payload) {
          /** @type {?} */
          var url = "/api/multi-tenancy/tenants/".concat(payload.id, "/default-connection-string");
          /** @type {?} */

          var request = {
            method: 'PUT',
            url: url,
            params: {
              defaultConnectionString: payload.defaultConnectionString
            }
          };
          return this.rest.request(request);
        }
        /**
         * @param {?} id
         * @return {?}
         */

      }, {
        key: "deleteDefaultConnectionString",
        value: function deleteDefaultConnectionString(id) {
          /** @type {?} */
          var url = "/api/multi-tenancy/tenants/".concat(id, "/default-connection-string");
          /** @type {?} */

          var request = {
            method: 'DELETE',
            url: url
          };
          return this.rest.request(request);
        }
      }]);

      return TenantManagementService;
    }();

    TenantManagementService.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    TenantManagementService.ctorParameters = function () {
      return [{
        type: _abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["RestService"]
      }];
    };
    /** @nocollapse */


    TenantManagementService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"])({
      factory: function TenantManagementService_Factory() {
        return new TenantManagementService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"])(_abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["RestService"]));
      },
      token: TenantManagementService,
      providedIn: "root"
    });

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/states/tenant-management.state.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var TenantManagementState =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} tenantManagementService
       */
      function TenantManagementState(tenantManagementService) {
        _classCallCheck(this, TenantManagementState);

        this.tenantManagementService = tenantManagementService;
      }
      /**
       * @param {?} __0
       * @return {?}
       */


      _createClass(TenantManagementState, [{
        key: "get",

        /**
         * @param {?} __0
         * @param {?} __1
         * @return {?}
         */
        value: function get(_ref7, _ref8) {
          var patchState = _ref7.patchState;
          var payload = _ref8.payload;
          return this.tenantManagementService.getTenant(payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["tap"])(
          /**
          * @param {?} result
          * @return {?}
          */
          function (result) {
            return patchState({
              result: result
            });
          }));
        }
        /**
         * @param {?} __0
         * @param {?} __1
         * @return {?}
         */

      }, {
        key: "getById",
        value: function getById(_ref9, _ref10) {
          var patchState = _ref9.patchState;
          var payload = _ref10.payload;
          return this.tenantManagementService.getTenantById(payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["tap"])(
          /**
          * @param {?} selectedItem
          * @return {?}
          */
          function (selectedItem) {
            return patchState({
              selectedItem: selectedItem
            });
          }));
        }
        /**
         * @param {?} _
         * @param {?} __1
         * @return {?}
         */

      }, {
        key: "delete",
        value: function _delete(_, _ref11) {
          var payload = _ref11.payload;
          return this.tenantManagementService.deleteTenant(payload);
        }
        /**
         * @param {?} _
         * @param {?} __1
         * @return {?}
         */

      }, {
        key: "add",
        value: function add(_, _ref12) {
          var payload = _ref12.payload;
          return this.tenantManagementService.createTenant(payload);
        }
        /**
         * @param {?} __0
         * @param {?} __1
         * @return {?}
         */

      }, {
        key: "update",
        value: function update(_ref13, _ref14) {
          var getState = _ref13.getState;
          var payload = _ref14.payload;
          return this.tenantManagementService.updateTenant(Object.assign({}, getState().selectedItem, payload));
        }
      }], [{
        key: "get",
        value: function get(_ref15) {
          var result = _ref15.result;
          return result.items || [];
        }
        /**
         * @param {?} __0
         * @return {?}
         */

      }, {
        key: "getTenantsTotalCount",
        value: function getTenantsTotalCount(_ref16) {
          var result = _ref16.result;
          return result.totalCount;
        }
      }]);

      return TenantManagementState;
    }();

    TenantManagementState.ctorParameters = function () {
      return [{
        type: TenantManagementService
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Action"])(GetTenants), Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:paramtypes", [Object, GetTenants]), Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:returntype", void 0)], TenantManagementState.prototype, "get", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Action"])(GetTenantById), Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:paramtypes", [Object, GetTenantById]), Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:returntype", void 0)], TenantManagementState.prototype, "getById", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Action"])(DeleteTenant), Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:paramtypes", [Object, DeleteTenant]), Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:returntype", void 0)], TenantManagementState.prototype, "delete", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Action"])(CreateTenant), Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:paramtypes", [Object, CreateTenant]), Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:returntype", void 0)], TenantManagementState.prototype, "add", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Action"])(UpdateTenant), Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:paramtypes", [Object, UpdateTenant]), Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:returntype", void 0)], TenantManagementState.prototype, "update", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Selector"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:paramtypes", [Object]), Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:returntype", Array)], TenantManagementState, "get", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Selector"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:paramtypes", [Object]), Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:returntype", Number)], TenantManagementState, "getTenantsTotalCount", null);
    TenantManagementState = Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["State"])({
      name: 'TenantManagementState',
      defaults:
      /** @type {?} */
      {
        result: {},
        selectedItem: {}
      }
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:paramtypes", [TenantManagementService])], TenantManagementState);

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/tenants/tenants.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @record
     */


    function SelectedModalContent() {}

    if (false) {}

    var TenantsComponent =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} confirmationService
       * @param {?} tenantService
       * @param {?} fb
       * @param {?} store
       */
      function TenantsComponent(confirmationService, tenantService, fb, store) {
        _classCallCheck(this, TenantsComponent);

        this.confirmationService = confirmationService;
        this.tenantService = tenantService;
        this.fb = fb;
        this.store = store;
        this.selectedModalContent =
        /** @type {?} */
        {};
        this.visibleFeatures = false;
        this.pageQuery = {};
        this.loading = false;
        this.modalBusy = false;
        this.sortOrder = '';
        this.sortKey = '';
      }
      /**
       * @return {?}
       */


      _createClass(TenantsComponent, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {
          this.get();
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "onSearch",
        value: function onSearch(value) {
          this.pageQuery.filter = value;
          this.get();
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "createTenantForm",
        value: function createTenantForm() {
          this.tenantForm = this.fb.group({
            name: [this.selected.name || '', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(256)]]
          });
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "createDefaultConnectionStringForm",
        value: function createDefaultConnectionStringForm() {
          this.defaultConnectionStringForm = this.fb.group({
            useSharedDatabase: this._useSharedDatabase,
            defaultConnectionString: [this.defaultConnectionString || '']
          });
        }
        /**
         * @param {?} title
         * @param {?} template
         * @param {?} type
         * @return {?}
         */

      }, {
        key: "openModal",
        value: function openModal(title, template, type) {
          this.selectedModalContent = {
            title: title,
            template: template,
            type: type
          };
          this.isModalVisible = true;
        }
        /**
         * @param {?} id
         * @return {?}
         */

      }, {
        key: "onEditConnectionString",
        value: function onEditConnectionString(id) {
          var _this3 = this;

          this.store.dispatch(new GetTenantById(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["pluck"])('TenantManagementState', 'selectedItem'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["switchMap"])(
          /**
          * @param {?} selected
          * @return {?}
          */
          function (selected) {
            _this3.selected = selected;
            return _this3.tenantService.getDefaultConnectionString(id);
          })).subscribe(
          /**
          * @param {?} fetchedConnectionString
          * @return {?}
          */
          function (fetchedConnectionString) {
            _this3._useSharedDatabase = fetchedConnectionString ? false : true;
            _this3.defaultConnectionString = fetchedConnectionString ? fetchedConnectionString : '';

            _this3.createDefaultConnectionStringForm();

            _this3.openModal('AbpTenantManagement::ConnectionStrings', _this3.connectionStringModalTemplate, 'saveConnStr');
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "addTenant",
        value: function addTenant() {
          this.selected =
          /** @type {?} */
          {};
          this.createTenantForm();
          this.openModal('AbpTenantManagement::NewTenant', this.tenantModalTemplate, 'saveTenant');
        }
        /**
         * @param {?} id
         * @return {?}
         */

      }, {
        key: "editTenant",
        value: function editTenant(id) {
          var _this4 = this;

          this.store.dispatch(new GetTenantById(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["pluck"])('TenantManagementState', 'selectedItem')).subscribe(
          /**
          * @param {?} selected
          * @return {?}
          */
          function (selected) {
            _this4.selected = selected;

            _this4.createTenantForm();

            _this4.openModal('AbpTenantManagement::Edit', _this4.tenantModalTemplate, 'saveTenant');
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "save",
        value: function save() {
          var type = this.selectedModalContent.type;
          if (!type) return;
          if (type === 'saveTenant') this.saveTenant();else if (type === 'saveConnStr') this.saveConnectionString();
        }
        /**
         * @return {?}
         */

      }, {
        key: "saveConnectionString",
        value: function saveConnectionString() {
          var _this5 = this;

          if (this.modalBusy) return;
          this.modalBusy = true;

          if (this.useSharedDatabase || !this.useSharedDatabase && !this.connectionString) {
            this.tenantService.deleteDefaultConnectionString(this.selected.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(
            /**
            * @return {?}
            */
            function () {
              return _this5.modalBusy = false;
            })).subscribe(
            /**
            * @return {?}
            */
            function () {
              _this5.isModalVisible = false;
            });
          } else {
            this.tenantService.updateDefaultConnectionString({
              id: this.selected.id,
              defaultConnectionString: this.connectionString
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(
            /**
            * @return {?}
            */
            function () {
              return _this5.modalBusy = false;
            })).subscribe(
            /**
            * @return {?}
            */
            function () {
              _this5.isModalVisible = false;
            });
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "saveTenant",
        value: function saveTenant() {
          var _this6 = this;

          if (!this.tenantForm.valid || this.modalBusy) return;
          this.modalBusy = true;
          this.store.dispatch(this.selected.id ? new UpdateTenant(Object.assign({}, this.selected, this.tenantForm.value, {
            id: this.selected.id
          })) : new CreateTenant(this.tenantForm.value)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(
          /**
          * @return {?}
          */
          function () {
            return _this6.modalBusy = false;
          })).subscribe(
          /**
          * @return {?}
          */
          function () {
            _this6.isModalVisible = false;

            _this6.get();
          });
        }
        /**
         * @param {?} id
         * @param {?} name
         * @return {?}
         */

      }, {
        key: "delete",
        value: function _delete(id, name) {
          var _this7 = this;

          this.confirmationService.warn('AbpTenantManagement::TenantDeletionConfirmationMessage', 'AbpTenantManagement::AreYouSure', {
            messageLocalizationParams: [name]
          }).subscribe(
          /**
          * @param {?} status
          * @return {?}
          */
          function (status) {
            if (status === "confirm"
            /* confirm */
            ) {
                _this7.store.dispatch(new DeleteTenant(id)).subscribe(
                /**
                * @return {?}
                */
                function () {
                  return _this7.get();
                });
              }
          });
        }
        /**
         * @param {?} data
         * @return {?}
         */

      }, {
        key: "onPageChange",
        value: function onPageChange(data) {
          this.pageQuery.skipCount = data.first;
          this.pageQuery.maxResultCount = data.rows;
          this.get();
        }
        /**
         * @return {?}
         */

      }, {
        key: "get",
        value: function get() {
          var _this8 = this;

          this.loading = true;
          this.store.dispatch(new GetTenants(this.pageQuery)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(
          /**
          * @return {?}
          */
          function () {
            return _this8.loading = false;
          })).subscribe();
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "onSharedDatabaseChange",
        value: function onSharedDatabaseChange(value) {
          if (!value) {
            setTimeout(
            /**
            * @return {?}
            */
            function () {
              /** @type {?} */
              var defaultConnectionString =
              /** @type {?} */
              document.getElementById('defaultConnectionString');

              if (defaultConnectionString) {
                defaultConnectionString.focus();
              }
            }, 0);
          }
        }
      }, {
        key: "useSharedDatabase",
        get: function get() {
          return this.defaultConnectionStringForm.get('useSharedDatabase').value;
        }
        /**
         * @return {?}
         */

      }, {
        key: "connectionString",
        get: function get() {
          return this.defaultConnectionStringForm.get('defaultConnectionString').value;
        }
        /**
         * @return {?}
         */

      }, {
        key: "isDisabledSaveButton",
        get: function get() {
          if (!this.selectedModalContent) return false;

          if (this.selectedModalContent.type === 'saveConnStr' && this.defaultConnectionStringForm && this.defaultConnectionStringForm.invalid) {
            return true;
          } else if (this.selectedModalContent.type === 'saveTenant' && this.tenantForm && this.tenantForm.invalid) {
            return true;
          } else {
            return false;
          }
        }
      }]);

      return TenantsComponent;
    }();

    TenantsComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
      args: [{
        selector: 'abp-tenants',
        template: "<div id=\"wrapper\" class=\"card\">\n  <div class=\"card-header\">\n    <div class=\"row\">\n      <div class=\"col col-md-6\">\n        <h5 class=\"card-title\">{{ 'AbpTenantManagement::Tenants' | abpLocalization }}</h5>\n      </div>\n      <div class=\"text-right col col-md-6\">\n        <button\n          *abpPermission=\"'AbpTenantManagement.Tenants.Create'\"\n          id=\"create-tenants\"\n          class=\"btn btn-primary\"\n          type=\"button\"\n          (click)=\"addTenant()\"\n        >\n          <i class=\"fa fa-plus mr-1\"></i>\n          <span>{{ 'AbpTenantManagement::NewTenant' | abpLocalization }}</span>\n        </button>\n      </div>\n    </div>\n  </div>\n  <div class=\"card-body\">\n    <div id=\"data-tables-table-filter\" class=\"data-tables-filter\">\n      <label\n        ><input\n          type=\"search\"\n          class=\"form-control form-control-sm\"\n          [placeholder]=\"'AbpUi::PagerSearch' | abpLocalization\"\n          (input.debounce)=\"onSearch($event.target.value)\"\n      /></label>\n    </div>\n    <p-table\n      *ngIf=\"[150, 0] as columnWidths\"\n      [value]=\"data$ | async\"\n      [abpTableSort]=\"{ key: sortKey, order: sortOrder }\"\n      [lazy]=\"true\"\n      [lazyLoadOnInit]=\"false\"\n      [paginator]=\"true\"\n      [rows]=\"10\"\n      [totalRecords]=\"totalCount$ | async\"\n      [loading]=\"loading\"\n      [resizableColumns]=\"true\"\n      [scrollable]=\"true\"\n      (onLazyLoad)=\"onPageChange($event)\"\n    >\n      <ng-template pTemplate=\"colgroup\">\n        <colgroup>\n          <col *ngFor=\"let width of columnWidths\" [ngStyle]=\"{ 'width.px': width || undefined }\" />\n        </colgroup>\n      </ng-template>\n      <ng-template pTemplate=\"emptymessage\" let-columns>\n        <tr\n          abp-table-empty-message\n          [attr.colspan]=\"columnWidths.length\"\n          localizationResource=\"AbpTenantManagement\"\n          localizationProp=\"NoDataAvailableInDatatable\"\n        ></tr>\n      </ng-template>\n      <ng-template pTemplate=\"header\" let-columns>\n        <tr>\n          <th>{{ 'AbpTenantManagement::Actions' | abpLocalization }}</th>\n          <th pResizableColumn (click)=\"sortOrderIcon.sort('name')\">\n            {{ 'AbpTenantManagement::TenantName' | abpLocalization }}\n            <abp-sort-order-icon\n              #sortOrderIcon\n              key=\"name\"\n              [(selectedKey)]=\"sortKey\"\n              [(order)]=\"sortOrder\"\n            >\n            </abp-sort-order-icon>\n          </th>\n        </tr>\n      </ng-template>\n      <ng-template pTemplate=\"body\" let-data>\n        <tr>\n          <td class=\"text-center\">\n            <div ngbDropdown container=\"body\" class=\"d-inline-block\">\n              <button\n                class=\"btn btn-primary btn-sm dropdown-toggle\"\n                data-toggle=\"dropdown\"\n                aria-haspopup=\"true\"\n                ngbDropdownToggle\n              >\n                <i class=\"fa fa-cog mr-1\"></i>{{ 'AbpTenantManagement::Actions' | abpLocalization }}\n              </button>\n              <div ngbDropdownMenu>\n                <button\n                  *abpPermission=\"'AbpTenantManagement.Tenants.Update'\"\n                  ngbDropdownItem\n                  (click)=\"editTenant(data.id)\"\n                >\n                  {{ 'AbpTenantManagement::Edit' | abpLocalization }}\n                </button>\n                <button\n                  *abpPermission=\"'AbpTenantManagement.Tenants.ManageConnectionStrings'\"\n                  ngbDropdownItem\n                  (click)=\"onEditConnectionString(data.id)\"\n                >\n                  {{ 'AbpTenantManagement::Permission:ManageConnectionStrings' | abpLocalization }}\n                </button>\n                <button\n                  *abpPermission=\"'AbpTenantManagement.Tenants.ManageFeatures'\"\n                  ngbDropdownItem\n                  (click)=\"providerKey = data.id; visibleFeatures = true\"\n                >\n                  {{ 'AbpTenantManagement::Permission:ManageFeatures' | abpLocalization }}\n                </button>\n                <button\n                  *abpPermission=\"'AbpTenantManagement.Tenants.Delete'\"\n                  ngbDropdownItem\n                  (click)=\"delete(data.id, data.name)\"\n                >\n                  {{ 'AbpTenantManagement::Delete' | abpLocalization }}\n                </button>\n              </div>\n            </div>\n          </td>\n          <td>{{ data.name }}</td>\n        </tr>\n      </ng-template>\n    </p-table>\n  </div>\n</div>\n\n<abp-modal size=\"md\" [(visible)]=\"isModalVisible\" [busy]=\"modalBusy\">\n  <ng-template #abpHeader>\n    <h3>{{ selectedModalContent.title | abpLocalization }}</h3>\n  </ng-template>\n\n  <ng-template #abpBody>\n    <ng-container *ngTemplateOutlet=\"selectedModalContent?.template\"></ng-container>\n  </ng-template>\n\n  <ng-template #abpFooter>\n    <button #abpClose type=\"button\" class=\"btn btn-secondary\">\n      {{ 'AbpTenantManagement::Cancel' | abpLocalization }}\n    </button>\n    <abp-button iconClass=\"fa fa-check\" (click)=\"save()\" [disabled]=\"isDisabledSaveButton\">{{\n      'AbpIdentity::Save' | abpLocalization\n    }}</abp-button>\n  </ng-template>\n</abp-modal>\n\n<ng-template #tenantModalTemplate>\n  <form [formGroup]=\"tenantForm\" (ngSubmit)=\"save()\" validateOnSubmit>\n    <div class=\"mt-2\">\n      <div class=\"form-group\">\n        <label for=\"name\">{{ 'AbpTenantManagement::TenantName' | abpLocalization }}</label>\n        <input type=\"text\" id=\"name\" class=\"form-control\" formControlName=\"name\" autofocus />\n      </div>\n    </div>\n  </form>\n</ng-template>\n\n<ng-template #connectionStringModalTemplate>\n  <form [formGroup]=\"defaultConnectionStringForm\" (ngSubmit)=\"save()\" validateOnSubmit>\n    <div class=\"form-group\">\n      <div class=\"custom-checkbox custom-control mb-2\">\n        <input\n          id=\"useSharedDatabase\"\n          type=\"checkbox\"\n          class=\"custom-control-input\"\n          formControlName=\"useSharedDatabase\"\n          autofocus\n          (ngModelChange)=\"onSharedDatabaseChange($event)\"\n        />\n        <label for=\"useSharedDatabase\" class=\"custom-control-label\">{{\n          'AbpTenantManagement::DisplayName:UseSharedDatabase' | abpLocalization\n        }}</label>\n      </div>\n    </div>\n    <div class=\"form-group\" *ngIf=\"!useSharedDatabase\">\n      <label for=\"defaultConnectionString\">{{\n        'AbpTenantManagement::DisplayName:DefaultConnectionString' | abpLocalization\n      }}</label>\n      <input\n        type=\"text\"\n        id=\"defaultConnectionString\"\n        class=\"form-control\"\n        formControlName=\"defaultConnectionString\"\n      />\n    </div>\n  </form>\n</ng-template>\n\n<abp-feature-management [(visible)]=\"visibleFeatures\" providerName=\"T\" [providerKey]=\"providerKey\">\n</abp-feature-management>\n"
      }]
    }];
    /** @nocollapse */

    TenantsComponent.ctorParameters = function () {
      return [{
        type: _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_1__["ConfirmationService"]
      }, {
        type: TenantManagementService
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]
      }, {
        type: _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"]
      }];
    };

    TenantsComponent.propDecorators = {
      tenantModalTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
        args: ['tenantModalTemplate', {
          static: false
        }]
      }],
      connectionStringModalTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
        args: ['connectionStringModalTemplate', {
          static: false
        }]
      }]
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Select"])(TenantManagementState.get), Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", rxjs__WEBPACK_IMPORTED_MODULE_8__["Observable"])], TenantsComponent.prototype, "data$", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Select"])(TenantManagementState.getTenantsTotalCount), Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", rxjs__WEBPACK_IMPORTED_MODULE_8__["Observable"])], TenantsComponent.prototype, "totalCount$", void 0);

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/tenant-management-routing.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var ɵ0 = {
      requiredPolicy: 'AbpTenantManagement.Tenants'
    };
    /** @type {?} */

    var routes = [{
      path: '',
      redirectTo: 'tenants',
      pathMatch: 'full'
    }, {
      path: 'tenants',
      component: _abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["DynamicLayoutComponent"],
      canActivate: [_abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"], _abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["PermissionGuard"]],
      data: ɵ0,
      children: [{
        path: '',
        component: TenantsComponent
      }]
    }];

    var TenantManagementRoutingModule = function TenantManagementRoutingModule() {
      _classCallCheck(this, TenantManagementRoutingModule);
    };

    TenantManagementRoutingModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
      args: [{
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"]]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/tenant-management.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var TenantManagementModule = function TenantManagementModule() {
      _classCallCheck(this, TenantManagementModule);
    };

    TenantManagementModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
      args: [{
        declarations: [TenantsComponent],
        imports: [TenantManagementRoutingModule, _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["NgxsModule"].forFeature([TenantManagementState]), _ngx_validate_core__WEBPACK_IMPORTED_MODULE_12__["NgxValidateCoreModule"], _abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["CoreModule"], primeng_table__WEBPACK_IMPORTED_MODULE_5__["TableModule"], _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_1__["ThemeSharedModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownModule"], _abp_ng_feature_management__WEBPACK_IMPORTED_MODULE_11__["FeatureManagementModule"]]
      }]
    }];
    /**
     *
     * @deprecated since version 0.9.0
     * @return {?}
     */

    function TenantManagementProviders() {
      return [];
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/actions/index.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/index.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/constants/routes.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     *
     * @deprecated since version 0.9.0
     * @type {?}
     */


    var TENANT_MANAGEMENT_ROUTES = {
      routes:
      /** @type {?} */
      [{
        name: 'AbpTenantManagement::Menu:TenantManagement',
        path: 'tenant-management',
        parentName: 'AbpUiNavigation::Menu:Administration',
        layout: "application"
        /* application */
        ,
        iconClass: 'fa fa-users',
        children: [{
          path: 'tenants',
          name: 'AbpTenantManagement::Tenants',
          order: 1,
          requiredPolicy: 'AbpTenantManagement.Tenants'
        }]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/constants/index.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/models/tenant-management.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var TenantManagement;

    (function (TenantManagement) {
      /**
       * @record
       */
      function State() {}

      TenantManagement.State = State;

      if (false) {}
      /**
       * @record
       */


      function Item() {}

      TenantManagement.Item = Item;

      if (false) {}
      /**
       * @record
       */


      function AddRequest() {}

      TenantManagement.AddRequest = AddRequest;

      if (false) {}
      /**
       * @record
       */


      function UpdateRequest() {}

      TenantManagement.UpdateRequest = UpdateRequest;

      if (false) {}
      /**
       * @record
       */


      function DefaultConnectionStringRequest() {}

      TenantManagement.DefaultConnectionStringRequest = DefaultConnectionStringRequest;

      if (false) {}
    })(TenantManagement || (TenantManagement = {}));
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/models/index.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/services/tenant-management-state.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var TenantManagementStateService =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} store
       */
      function TenantManagementStateService(store) {
        _classCallCheck(this, TenantManagementStateService);

        this.store = store;
      }
      /**
       * @return {?}
       */


      _createClass(TenantManagementStateService, [{
        key: "get",
        value: function get() {
          return this.store.selectSnapshot(TenantManagementState.get);
        }
        /**
         * @return {?}
         */

      }, {
        key: "getTenantsTotalCount",
        value: function getTenantsTotalCount() {
          return this.store.selectSnapshot(TenantManagementState.getTenantsTotalCount);
        }
      }]);

      return TenantManagementStateService;
    }();

    TenantManagementStateService.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    TenantManagementStateService.ctorParameters = function () {
      return [{
        type: _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"]
      }];
    };
    /** @nocollapse */


    TenantManagementStateService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"])({
      factory: function TenantManagementStateService_Factory() {
        return new TenantManagementStateService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"])(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"]));
      },
      token: TenantManagementStateService,
      providedIn: "root"
    });

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/services/index.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/states/index.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: abp-ng.tenant-management.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=abp-ng.tenant-management.js.map

    /***/

  },

  /***/
  "./src/app/lazy-libs/tenant-management-wrapper.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/lazy-libs/tenant-management-wrapper.module.ts ***!
    \***************************************************************/

  /*! exports provided: TenantManagementWrapperModule */

  /***/
  function srcAppLazyLibsTenantManagementWrapperModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TenantManagementWrapperModule", function () {
      return TenantManagementWrapperModule;
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


    var _abp_ng_tenant_management__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @abp/ng.tenant-management */
    "./node_modules/@abp/ng.tenant-management/fesm2015/abp-ng.tenant-management.js");

    var TenantManagementWrapperModule = function TenantManagementWrapperModule() {
      _classCallCheck(this, TenantManagementWrapperModule);
    };

    TenantManagementWrapperModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_abp_ng_tenant_management__WEBPACK_IMPORTED_MODULE_2__["TenantManagementModule"]]
    })], TenantManagementWrapperModule);
    /***/
  }
}]);
//# sourceMappingURL=lazy-libs-tenant-management-wrapper-module-es5.js.map