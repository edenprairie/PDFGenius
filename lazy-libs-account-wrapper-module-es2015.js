(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["lazy-libs-account-wrapper-module"],{

/***/ "./node_modules/@abp/ng.account/fesm2015/abp-ng.account.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@abp/ng.account/fesm2015/abp-ng.account.js ***!
  \*****************************************************************/
/*! exports provided: ACCOUNT_OPTIONS, ACCOUNT_ROUTES, AccountModule, AccountProviders, ChangePasswordComponent, LoginComponent, ManageProfileComponent, PersonalSettingsComponent, RegisterComponent, optionsFactory, ɵa, ɵb, ɵd, ɵe, ɵf, ɵg, ɵh, ɵi, ɵj, ɵk, ɵl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCOUNT_OPTIONS", function() { return ACCOUNT_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCOUNT_ROUTES", function() { return ACCOUNT_ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountModule", function() { return AccountModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountProviders", function() { return AccountProviders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageProfileComponent", function() { return ManageProfileComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalSettingsComponent", function() { return PersonalSettingsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "optionsFactory", function() { return optionsFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return AuthWrapperComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return LoginComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return RegisterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return AccountService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return TenantBoxComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return ChangePasswordComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵh", function() { return ManageProfileComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵi", function() { return PersonalSettingsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵj", function() { return AccountRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵk", function() { return optionsFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵl", function() { return ACCOUNT_OPTIONS; });
/* harmony import */ var _abp_ng_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @abp/ng.core */ "./node_modules/@abp/ng.core/fesm2015/abp-ng.core.js");
/* harmony import */ var _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @abp/ng.theme.shared */ "./node_modules/@abp/ng.theme.shared/fesm2015/abp-ng.theme.shared.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _ngx_validate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-validate/core */ "./node_modules/@ngx-validate/core/fesm2015/ngx-validate-core.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngxs/router-plugin */ "./node_modules/@ngxs/router-plugin/fesm2015/ngxs-router-plugin.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm2015/ngxs-store.js");
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-oauth2-oidc */ "./node_modules/angular-oauth2-oidc/fesm2015/angular-oauth2-oidc.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var snq__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! snq */ "./node_modules/snq/dist/snq.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");


















/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/login/login.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
const { maxLength, minLength, required } = _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"];
class LoginComponent {
    /**
     * @param {?} fb
     * @param {?} oauthService
     * @param {?} store
     * @param {?} toasterService
     * @param {?} options
     */
    constructor(fb, oauthService, store, toasterService, options) {
        this.fb = fb;
        this.oauthService = oauthService;
        this.store = store;
        this.toasterService = toasterService;
        this.options = options;
        this.oauthService.configure(this.store.selectSnapshot(_abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["ConfigState"].getOne('environment')).oAuthConfig);
        this.oauthService.loadDiscoveryDocument();
        this.form = this.fb.group({
            username: ['', [required, maxLength(255)]],
            password: ['', [required, maxLength(32)]],
            remember: [false],
        });
    }
    /**
     * @return {?}
     */
    onSubmit() {
        if (this.form.invalid)
            return;
        // this.oauthService.setStorage(this.form.value.remember ? localStorage : sessionStorage);
        this.inProgress = true;
        /** @type {?} */
        const tenant = this.store.selectSnapshot(_abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["SessionState"].getTenant);
        Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["from"])(this.oauthService.fetchTokenUsingPasswordFlow(this.form.get('username').value, this.form.get('password').value, new _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpHeaders"](Object.assign({}, (tenant && tenant.id && { __tenant: tenant.id })))))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["switchMap"])((/**
         * @return {?}
         */
        () => this.store.dispatch(new _abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["GetAppConfiguration"]()))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["tap"])((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const redirectUrl = Object(snq__WEBPACK_IMPORTED_MODULE_13__["default"])((/**
             * @return {?}
             */
            () => window.history.state)).redirectUrl || (this.options || {}).redirectUrl || '/';
            this.store.dispatch(new _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_8__["Navigate"]([redirectUrl]));
        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["catchError"])((/**
         * @param {?} err
         * @return {?}
         */
        err => {
            this.toasterService.error(Object(snq__WEBPACK_IMPORTED_MODULE_13__["default"])((/**
             * @return {?}
             */
            () => err.error.error_description)) ||
                Object(snq__WEBPACK_IMPORTED_MODULE_13__["default"])((/**
                 * @return {?}
                 */
                () => err.error.error.message), 'AbpAccount::DefaultErrorMessage'), 'Error', { life: 7000 });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["throwError"])(err);
        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])((/**
         * @return {?}
         */
        () => (this.inProgress = false))))
            .subscribe();
    }
}
LoginComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{
                selector: 'abp-login',
                template: "<abp-auth-wrapper [mainContentRef]=\"mainContentRef\" [cancelContentRef]=\"cancelContentRef\">\n  <ng-template #mainContentRef>\n    <h4>{{ 'AbpAccount::Login' | abpLocalization }}</h4>\n    <strong>\n      {{ 'AbpAccount::AreYouANewUser' | abpLocalization }}\n      <a class=\"text-decoration-none\" routerLink=\"/account/register\">{{ 'AbpAccount::Register' | abpLocalization }}</a>\n    </strong>\n    <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\" validateOnSubmit class=\"mt-4\">\n      <div class=\"form-group\">\n        <label for=\"login-input-user-name-or-email-address\">{{\n          'AbpAccount::UserNameOrEmailAddress' | abpLocalization\n        }}</label>\n        <input\n          class=\"form-control\"\n          type=\"text\"\n          id=\"login-input-user-name-or-email-address\"\n          formControlName=\"username\"\n          autofocus\n        />\n      </div>\n      <div class=\"form-group\">\n        <label for=\"login-input-password\">{{ 'AbpAccount::Password' | abpLocalization }}</label>\n        <input class=\"form-control\" type=\"password\" id=\"login-input-password\" formControlName=\"password\" />\n      </div>\n      <div class=\"form-check\" validationTarget validationStyle>\n        <label class=\"form-check-label\" for=\"login-input-remember-me\">\n          <input class=\"form-check-input\" type=\"checkbox\" id=\"login-input-remember-me\" formControlName=\"remember\" />\n          {{ 'AbpAccount::RememberMe' | abpLocalization }}\n        </label>\n      </div>\n      <abp-button\n        [loading]=\"inProgress\"\n        buttonType=\"submit\"\n        name=\"Action\"\n        buttonClass=\"btn-block btn-lg mt-3 btn btn-primary\"\n      >\n        {{ 'AbpAccount::Login' | abpLocalization }}\n      </abp-button>\n    </form>\n  </ng-template>\n  <ng-template #cancelContentRef>\n    <div class=\"card-footer text-center border-0\">\n      <a routerLink=\"/\">\n        <button type=\"button\" name=\"Action\" value=\"Cancel\" class=\"px-2 py-0 btn btn-link\">\n          {{ 'AbpAccount::Cancel' | abpLocalization }}\n        </button>\n      </a>\n    </div>\n  </ng-template>\n</abp-auth-wrapper>\n"
            }] }
];
/** @nocollapse */
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] },
    { type: angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_10__["OAuthService"] },
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_9__["Store"] },
    { type: _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_1__["ToasterService"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: ['ACCOUNT_OPTIONS',] }] }
];
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/manage-profile/manage-profile.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ManageProfileComponent {
    constructor() {
        this.selectedTab = 0;
    }
}
ManageProfileComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{
                selector: 'abp-manage-profile',
                template: "<div id=\"AbpContentToolbar\"></div>\n\n<div class=\"card border-0 shadow-sm\">\n  <div class=\"card-body\">\n    <div class=\"row\">\n      <div class=\"col-3\">\n        <ul class=\"nav flex-column nav-pills\" id=\"nav-tab\" role=\"tablist\">\n          <li class=\"nav-item\" (click)=\"selectedTab = 0\">\n            <a class=\"nav-link\" [ngClass]=\"{ active: selectedTab === 0 }\" role=\"tab\" href=\"javascript:void(0)\">{{\n              'AbpUi::ChangePassword' | abpLocalization\n            }}</a>\n          </li>\n          <li class=\"nav-item\" (click)=\"selectedTab = 1\">\n            <a class=\"nav-link\" [ngClass]=\"{ active: selectedTab === 1 }\" role=\"tab\" href=\"javascript:void(0)\">{{\n              'AbpAccount::PersonalSettings' | abpLocalization\n            }}</a>\n          </li>\n        </ul>\n      </div>\n      <div class=\"col-9\">\n        <div class=\"tab-content\" *ngIf=\"selectedTab === 0\" [@fadeIn]>\n          <div class=\"tab-pane active\" role=\"tabpanel\">\n            <h4>\n              {{ 'AbpIdentity::ChangePassword' | abpLocalization }}\n              <hr />\n            </h4>\n            <abp-change-password-form></abp-change-password-form>\n          </div>\n        </div>\n        <div class=\"tab-content\" *ngIf=\"selectedTab === 1\" [@fadeIn]>\n          <div class=\"tab-pane active\" role=\"tabpanel\">\n            <h4>\n              {{ 'AbpIdentity::PersonalSettings' | abpLocalization }}\n              <hr />\n            </h4>\n            <abp-personal-settings-form></abp-personal-settings-form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n",
                animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_15__["trigger"])('fadeIn', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_15__["transition"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_15__["useAnimation"])(_abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_1__["fadeIn"]))])]
            }] }
];
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/account.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AccountService {
    /**
     * @param {?} rest
     */
    constructor(rest) {
        this.rest = rest;
    }
    /**
     * @param {?} tenantName
     * @return {?}
     */
    findTenant(tenantName) {
        /** @type {?} */
        const request = {
            method: 'GET',
            url: `/api/abp/multi-tenancy/tenants/by-name/${tenantName}`,
        };
        return this.rest.request(request);
    }
    /**
     * @param {?} body
     * @return {?}
     */
    register(body) {
        /** @type {?} */
        const request = {
            method: 'POST',
            url: '/api/account/register',
            body,
        };
        return this.rest.request(request, { skipHandleError: true });
    }
}
AccountService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"], args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
AccountService.ctorParameters = () => [
    { type: _abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["RestService"] }
];
/** @nocollapse */ AccountService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"])({ factory: function AccountService_Factory() { return new AccountService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"])(_abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["RestService"])); }, token: AccountService, providedIn: "root" });
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/register/register.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
const { maxLength: maxLength$1, minLength: minLength$1, required: required$1, email } = _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"];
class RegisterComponent {
    /**
     * @param {?} fb
     * @param {?} accountService
     * @param {?} oauthService
     * @param {?} store
     * @param {?} toasterService
     */
    constructor(fb, accountService, oauthService, store, toasterService) {
        this.fb = fb;
        this.accountService = accountService;
        this.oauthService = oauthService;
        this.store = store;
        this.toasterService = toasterService;
        this.oauthService.configure(this.store.selectSnapshot(_abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["ConfigState"].getOne('environment')).oAuthConfig);
        this.oauthService.loadDiscoveryDocument();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        const passwordRules = this.store.selectSnapshot(_abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["ConfigState"].getSettings('Identity.Password'));
        /** @type {?} */
        const passwordRulesArr = (/** @type {?} */ ([]));
        /** @type {?} */
        let requiredLength = 1;
        if ((passwordRules['Abp.Identity.Password.RequireDigit'] || '').toLowerCase() === 'true') {
            passwordRulesArr.push('number');
        }
        if ((passwordRules['Abp.Identity.Password.RequireLowercase'] || '').toLowerCase() === 'true') {
            passwordRulesArr.push('small');
        }
        if ((passwordRules['Abp.Identity.Password.RequireUppercase'] || '').toLowerCase() === 'true') {
            passwordRulesArr.push('capital');
        }
        if (+(passwordRules['Abp.Identity.Password.RequiredUniqueChars'] || 0) > 0) {
            passwordRulesArr.push('special');
        }
        if (Number.isInteger(+passwordRules['Abp.Identity.Password.RequiredLength'])) {
            requiredLength = +passwordRules['Abp.Identity.Password.RequiredLength'];
        }
        this.form = this.fb.group({
            username: ['', [required$1, maxLength$1(255)]],
            password: [
                '',
                [required$1, Object(_ngx_validate_core__WEBPACK_IMPORTED_MODULE_4__["validatePassword"])(passwordRulesArr), minLength$1(requiredLength), maxLength$1(32)],
            ],
            email: ['', [required$1, email]],
        });
    }
    /**
     * @return {?}
     */
    onSubmit() {
        if (this.form.invalid)
            return;
        this.inProgress = true;
        /** @type {?} */
        const newUser = (/** @type {?} */ ({
            userName: this.form.get('username').value,
            password: this.form.get('password').value,
            emailAddress: this.form.get('email').value,
            appName: 'Angular',
        }));
        /** @type {?} */
        const tenant = this.store.selectSnapshot(_abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["SessionState"].getTenant);
        this.accountService
            .register(newUser)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["switchMap"])((/**
         * @return {?}
         */
        () => Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["from"])(this.oauthService.fetchTokenUsingPasswordFlow(newUser.userName, newUser.password, new _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpHeaders"](Object.assign({}, (tenant && tenant.id && { __tenant: tenant.id }))))))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["switchMap"])((/**
         * @return {?}
         */
        () => this.store.dispatch(new _abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["GetAppConfiguration"]()))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["tap"])((/**
         * @return {?}
         */
        () => this.store.dispatch(new _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_8__["Navigate"](['/'])))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["catchError"])((/**
         * @param {?} err
         * @return {?}
         */
        err => {
            this.toasterService.error(Object(snq__WEBPACK_IMPORTED_MODULE_13__["default"])((/**
             * @return {?}
             */
            () => err.error.error_description)) ||
                Object(snq__WEBPACK_IMPORTED_MODULE_13__["default"])((/**
                 * @return {?}
                 */
                () => err.error.error.message), 'AbpAccount::DefaultErrorMessage'), 'Error', { life: 7000 });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["throwError"])(err);
        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])((/**
         * @return {?}
         */
        () => (this.inProgress = false))))
            .subscribe();
    }
}
RegisterComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{
                selector: 'abp-register',
                template: "<abp-auth-wrapper [mainContentRef]=\"mainContentRef\">\n  <ng-template #mainContentRef>\n    <h4>{{ 'AbpAccount::Register' | abpLocalization }}</h4>\n    <strong>\n      {{ 'AbpAccount::AlreadyRegistered' | abpLocalization }}\n      <a class=\"text-decoration-none\" routerLink=\"/account/login\">{{ 'AbpAccount::Login' | abpLocalization }}</a>\n    </strong>\n    <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\" validateOnSubmit class=\"mt-4\">\n      <div class=\"form-group\">\n        <label for=\"input-user-name\">{{ 'AbpAccount::UserName' | abpLocalization }}</label\n        ><span> * </span\n        ><input autofocus type=\"text\" id=\"input-user-name\" class=\"form-control\" formControlName=\"username\" />\n      </div>\n      <div class=\"form-group\">\n        <label for=\"input-email-address\">{{ 'AbpAccount::EmailAddress' | abpLocalization }}</label\n        ><span> * </span><input type=\"email\" id=\"input-email-address\" class=\"form-control\" formControlName=\"email\" />\n      </div>\n      <div class=\"form-group\">\n        <label for=\"input-password\">{{ 'AbpAccount::Password' | abpLocalization }}</label\n        ><span> * </span><input type=\"password\" id=\"input-password\" class=\"form-control\" formControlName=\"password\" />\n      </div>\n      <abp-button\n        [loading]=\"inProgress\"\n        buttonType=\"submit\"\n        name=\"Action\"\n        buttonClass=\"btn-block btn-lg mt-3 btn btn-primary\"\n      >\n        {{ 'AbpAccount::Register' | abpLocalization }}\n      </abp-button>\n    </form>\n  </ng-template>\n</abp-auth-wrapper>\n"
            }] }
];
/** @nocollapse */
RegisterComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] },
    { type: AccountService },
    { type: angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_10__["OAuthService"] },
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_9__["Store"] },
    { type: _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_1__["ToasterService"] }
];
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/account-routing.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const routes = [
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    {
        path: '',
        component: _abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["DynamicLayoutComponent"],
        children: [
            { path: 'login', component: LoginComponent },
            { path: 'register', component: RegisterComponent },
            {
                path: 'manage-profile',
                component: ManageProfileComponent,
            },
        ],
    },
];
class AccountRoutingModule {
}
AccountRoutingModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"], args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]],
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/change-password/change-password.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
const { minLength: minLength$2, required: required$2, maxLength: maxLength$2 } = _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"];
/** @type {?} */
const PASSWORD_FIELDS = ['newPassword', 'repeatNewPassword'];
class ChangePasswordComponent {
    /**
     * @param {?} fb
     * @param {?} store
     * @param {?} toasterService
     */
    constructor(fb, store, toasterService) {
        this.fb = fb;
        this.store = store;
        this.toasterService = toasterService;
        this.mapErrorsFn = (/**
         * @param {?} errors
         * @param {?} groupErrors
         * @param {?} control
         * @return {?}
         */
        (errors, groupErrors, control) => {
            if (PASSWORD_FIELDS.indexOf(control.name) < 0)
                return errors;
            return errors.concat(groupErrors.filter((/**
             * @param {?} __0
             * @return {?}
             */
            ({ key }) => key === 'passwordMismatch')));
        });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        const passwordRules = this.store.selectSnapshot(_abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["ConfigState"].getSettings('Identity.Password'));
        /** @type {?} */
        const passwordRulesArr = (/** @type {?} */ ([]));
        /** @type {?} */
        let requiredLength = 1;
        if ((passwordRules['Abp.Identity.Password.RequireDigit'] || '').toLowerCase() === 'true') {
            passwordRulesArr.push('number');
        }
        if ((passwordRules['Abp.Identity.Password.RequireLowercase'] || '').toLowerCase() === 'true') {
            passwordRulesArr.push('small');
        }
        if ((passwordRules['Abp.Identity.Password.RequireUppercase'] || '').toLowerCase() === 'true') {
            passwordRulesArr.push('capital');
        }
        if (+(passwordRules['Abp.Identity.Password.RequiredUniqueChars'] || 0) > 0) {
            passwordRulesArr.push('special');
        }
        if (Number.isInteger(+passwordRules['Abp.Identity.Password.RequiredLength'])) {
            requiredLength = +passwordRules['Abp.Identity.Password.RequiredLength'];
        }
        this.form = this.fb.group({
            password: ['', required$2],
            newPassword: [
                '',
                {
                    validators: [required$2, Object(_ngx_validate_core__WEBPACK_IMPORTED_MODULE_4__["validatePassword"])(passwordRulesArr), minLength$2(requiredLength), maxLength$2(32)],
                },
            ],
            repeatNewPassword: [
                '',
                { validators: [required$2, Object(_ngx_validate_core__WEBPACK_IMPORTED_MODULE_4__["validatePassword"])(passwordRulesArr), minLength$2(requiredLength), maxLength$2(32)] },
            ],
        }, {
            validators: [Object(_ngx_validate_core__WEBPACK_IMPORTED_MODULE_4__["comparePasswords"])(PASSWORD_FIELDS)],
        });
    }
    /**
     * @return {?}
     */
    onSubmit() {
        if (this.form.invalid)
            return;
        this.inProgress = true;
        this.store
            .dispatch(new _abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["ChangePassword"]({
            currentPassword: this.form.get('password').value,
            newPassword: this.form.get('newPassword').value,
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])((/**
         * @return {?}
         */
        () => (this.inProgress = false))))
            .subscribe({
            next: (/**
             * @return {?}
             */
            () => {
                this.form.reset();
                this.toasterService.success('AbpAccount::PasswordChangedMessage', 'Success', { life: 5000 });
            }),
            error: (/**
             * @param {?} err
             * @return {?}
             */
            err => {
                this.toasterService.error(Object(snq__WEBPACK_IMPORTED_MODULE_13__["default"])((/**
                 * @return {?}
                 */
                () => err.error.error.message), 'AbpAccount::DefaultErrorMessage'), 'Error', {
                    life: 7000,
                });
            }),
        });
    }
}
ChangePasswordComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{
                selector: 'abp-change-password-form',
                template: "<form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\" [mapErrorsFn]=\"mapErrorsFn\" validateOnSubmit>\n  <div class=\"form-group\">\n    <label for=\"current-password\">{{ 'AbpIdentity::DisplayName:CurrentPassword' | abpLocalization }}</label\n    ><span> * </span\n    ><input type=\"password\" id=\"current-password\" class=\"form-control\" formControlName=\"password\" autofocus />\n  </div>\n  <div class=\"form-group\">\n    <label for=\"new-password\">{{ 'AbpIdentity::DisplayName:NewPassword' | abpLocalization }}</label\n    ><span> * </span><input type=\"password\" id=\"new-password\" class=\"form-control\" formControlName=\"newPassword\" />\n  </div>\n  <div class=\"form-group\">\n    <label for=\"confirm-new-password\">{{ 'AbpIdentity::DisplayName:NewPasswordConfirm' | abpLocalization }}</label\n    ><span> * </span\n    ><input type=\"password\" id=\"confirm-new-password\" class=\"form-control\" formControlName=\"repeatNewPassword\" />\n  </div>\n  <abp-button\n    iconClass=\"fa fa-check\"\n    buttonClass=\"btn btn-primary color-white\"\n    buttonType=\"submit\"\n    [loading]=\"inProgress\"\n    [disabled]=\"form?.invalid\"\n    >{{ 'AbpIdentity::Save' | abpLocalization }}</abp-button\n  >\n</form>\n"
            }] }
];
/** @nocollapse */
ChangePasswordComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] },
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_9__["Store"] },
    { type: _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_1__["ToasterService"] }
];
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/personal-settings/personal-settings.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
const { maxLength: maxLength$3, required: required$3, email: email$1 } = _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"];
class PersonalSettingsComponent {
    /**
     * @param {?} fb
     * @param {?} store
     * @param {?} toasterService
     */
    constructor(fb, store, toasterService) {
        this.fb = fb;
        this.store = store;
        this.toasterService = toasterService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.buildForm();
    }
    /**
     * @return {?}
     */
    buildForm() {
        this.store
            .dispatch(new _abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["GetProfile"]())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["withLatestFrom"])(this.profile$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["take"])(1))
            .subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ([, profile]) => {
            this.form = this.fb.group({
                userName: [profile.userName, [required$3, maxLength$3(256)]],
                email: [profile.email, [required$3, email$1, maxLength$3(256)]],
                name: [profile.name || '', [maxLength$3(64)]],
                surname: [profile.surname || '', [maxLength$3(64)]],
                phoneNumber: [profile.phoneNumber || '', [maxLength$3(16)]],
            });
        }));
    }
    /**
     * @return {?}
     */
    submit() {
        if (this.form.invalid)
            return;
        this.inProgress = true;
        this.store
            .dispatch(new _abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["UpdateProfile"](this.form.value))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])((/**
         * @return {?}
         */
        () => (this.inProgress = false))))
            .subscribe((/**
         * @return {?}
         */
        () => {
            this.toasterService.success('AbpAccount::PersonalSettingsSaved', 'Success', { life: 5000 });
        }));
    }
}
PersonalSettingsComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{
                selector: 'abp-personal-settings-form',
                template: "<form validateOnSubmit *ngIf=\"form\" [formGroup]=\"form\" (ngSubmit)=\"submit()\">\n  <div class=\"form-group\">\n    <label for=\"username\">{{ 'AbpIdentity::DisplayName:UserName' | abpLocalization }}</label\n    ><span> * </span\n    ><input\n      type=\"text\"\n      id=\"username\"\n      class=\"form-control\"\n      formControlName=\"userName\"\n      autofocus\n      (keydown.space)=\"$event.preventDefault()\"\n    />\n  </div>\n  <div class=\"row\">\n    <div class=\"col col-md-6\">\n      <div class=\"form-group\">\n        <label for=\"name\">{{ 'AbpIdentity::DisplayName:Name' | abpLocalization }}</label\n        ><input type=\"text\" id=\"name\" class=\"form-control\" formControlName=\"name\" />\n      </div>\n    </div>\n    <div class=\"col col-md-6\">\n      <div class=\"form-group\">\n        <label for=\"surname\">{{ 'AbpIdentity::DisplayName:Surname' | abpLocalization }}</label\n        ><input type=\"text\" id=\"surname\" class=\"form-control\" formControlName=\"surname\" />\n      </div>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"email-address\">{{ 'AbpIdentity::DisplayName:Email' | abpLocalization }}</label\n    ><span> * </span><input type=\"text\" id=\"email-address\" class=\"form-control\" formControlName=\"email\" />\n  </div>\n  <div class=\"form-group\">\n    <label for=\"phone-number\">{{ 'AbpIdentity::DisplayName:PhoneNumber' | abpLocalization }}</label\n    ><input type=\"text\" id=\"phone-number\" class=\"form-control\" formControlName=\"phoneNumber\" />\n  </div>\n  <abp-button\n    buttonType=\"submit\"\n    iconClass=\"fa fa-check\"\n    buttonClass=\"btn btn-primary color-white\"\n    [loading]=\"inProgress\"\n    [disabled]=\"form?.invalid || form?.pristine\"\n  >\n    {{ 'AbpIdentity::Save' | abpLocalization }}</abp-button\n  >\n</form>\n"
            }] }
];
/** @nocollapse */
PersonalSettingsComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] },
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_9__["Store"] },
    { type: _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_1__["ToasterService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_16__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_9__["Select"])(_abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["ProfileState"].getProfile),
    Object(tslib__WEBPACK_IMPORTED_MODULE_16__["__metadata"])("design:type", rxjs__WEBPACK_IMPORTED_MODULE_11__["Observable"])
], PersonalSettingsComponent.prototype, "profile$", void 0);
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/tenant-box/tenant-box.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TenantBoxComponent {
    /**
     * @param {?} store
     * @param {?} toasterService
     * @param {?} accountService
     */
    constructor(store, toasterService, accountService) {
        this.store = store;
        this.toasterService = toasterService;
        this.accountService = accountService;
        this.tenant = (/** @type {?} */ ({}));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.tenant = this.store.selectSnapshot(_abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["SessionState"].getTenant) || ((/** @type {?} */ ({})));
        this.tenantName = this.tenant.name || '';
    }
    /**
     * @return {?}
     */
    onSwitch() {
        this.isModalVisible = true;
    }
    /**
     * @return {?}
     */
    save() {
        if (this.tenant.name && !this.inProgress) {
            this.inProgress = true;
            this.accountService
                .findTenant(this.tenant.name)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])((/**
             * @return {?}
             */
            () => (this.inProgress = false))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["catchError"])((/**
             * @param {?} err
             * @return {?}
             */
            err => {
                this.toasterService.error(Object(snq__WEBPACK_IMPORTED_MODULE_13__["default"])((/**
                 * @return {?}
                 */
                () => err.error.error_description), 'AbpUi::DefaultErrorMessage'), 'AbpUi::Error');
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["throwError"])(err);
            })))
                .subscribe((/**
             * @param {?} __0
             * @return {?}
             */
            ({ success, tenantId }) => {
                if (success) {
                    this.tenant = {
                        id: tenantId,
                        name: this.tenant.name,
                    };
                    this.tenantName = this.tenant.name;
                    this.isModalVisible = false;
                }
                else {
                    this.toasterService.error('AbpUiMultiTenancy::GivenTenantIsNotAvailable', 'AbpUi::Error', {
                        messageLocalizationParams: [this.tenant.name],
                    });
                    this.tenant = (/** @type {?} */ ({}));
                }
                this.store.dispatch(new _abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["SetTenant"](success ? this.tenant : null));
            }));
        }
        else {
            this.store.dispatch(new _abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["SetTenant"](null));
            this.tenantName = null;
            this.isModalVisible = false;
        }
    }
}
TenantBoxComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{
                selector: 'abp-tenant-box',
                template: "<div class=\"card shadow-sm rounded mb-3\">\n  <div class=\"card-body px-5\">\n    <div class=\"row\">\n      <div class=\"col\">\n        <span style=\"font-size: 0.8em;\" class=\"text-uppercase text-muted\">{{\n          'AbpUiMultiTenancy::Tenant' | abpLocalization\n        }}</span\n        ><br />\n        <h6 class=\"m-0 d-inline-block\">\n          <span>\n            {{ tenantName || ('AbpUiMultiTenancy::NotSelected' | abpLocalization) }}\n          </span>\n        </h6>\n      </div>\n      <div class=\"col-auto\">\n        <a\n          id=\"AbpTenantSwitchLink\"\n          href=\"javascript:void(0);\"\n          class=\"btn btn-sm mt-3 btn-outline-primary\"\n          (click)=\"onSwitch()\"\n          >{{ 'AbpUiMultiTenancy::Switch' | abpLocalization }}</a\n        >\n      </div>\n    </div>\n  </div>\n</div>\n\n<abp-modal size=\"md\" [(visible)]=\"isModalVisible\" [busy]=\"inProgress\">\n  <ng-template #abpHeader>\n    <h5>Switch Tenant</h5>\n  </ng-template>\n  <ng-template #abpBody>\n    <form (ngSubmit)=\"save()\">\n      <div class=\"mt-2\">\n        <div class=\"form-group\">\n          <label for=\"name\">{{ 'AbpUiMultiTenancy::Name' | abpLocalization }}</label>\n          <input [(ngModel)]=\"tenant.name\" type=\"text\" id=\"name\" name=\"tenant\" class=\"form-control\" autofocus />\n        </div>\n        <p>{{ 'AbpUiMultiTenancy::SwitchTenantHint' | abpLocalization }}</p>\n      </div>\n    </form>\n  </ng-template>\n  <ng-template #abpFooter>\n    <button #abpClose type=\"button\" class=\"btn btn-secondary\">\n      {{ 'AbpTenantManagement::Cancel' | abpLocalization }}\n    </button>\n    <abp-button buttonType=\"button\" buttonClass=\"btn btn-primary\" (click)=\"save()\">\n      <i class=\"fa fa-check mr-1\"></i> <span>{{ 'AbpTenantManagement::Save' | abpLocalization }}</span>\n    </abp-button>\n  </ng-template>\n</abp-modal>\n"
            }] }
];
/** @nocollapse */
TenantBoxComponent.ctorParameters = () => [
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_9__["Store"] },
    { type: _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_1__["ToasterService"] },
    { type: AccountService }
];
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/tokens/options.token.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} options
 * @return {?}
 */
function optionsFactory(options) {
    return Object.assign({ redirectUrl: '/' }, options);
}
/** @type {?} */
const ACCOUNT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('ACCOUNT_OPTIONS');

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/auth-wrapper/auth-wrapper.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AuthWrapperComponent {
}
AuthWrapperComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{
                selector: 'abp-auth-wrapper',
                template: "<div class=\"row\">\n  <div class=\"mx-auto col col-md-5\">\n    <abp-tenant-box></abp-tenant-box>\n\n    <div class=\"abp-account-container\">\n      <div class=\"card mt-3 shadow-sm rounded\">\n        <div class=\"card-body p-5\">\n          <ng-content *ngTemplateOutlet=\"mainContentRef\"></ng-content>\n        </div>\n        <ng-content *ngTemplateOutlet=\"cancelContentRef\"></ng-content>\n      </div>\n    </div>\n  </div>\n</div>\n"
            }] }
];
AuthWrapperComponent.propDecorators = {
    mainContentRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    cancelContentRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/account.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AccountModule {
}
AccountModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"], args: [{
                declarations: [
                    AuthWrapperComponent,
                    LoginComponent,
                    RegisterComponent,
                    TenantBoxComponent,
                    ChangePasswordComponent,
                    ManageProfileComponent,
                    PersonalSettingsComponent,
                ],
                imports: [_abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["CoreModule"], AccountRoutingModule, _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_1__["ThemeSharedModule"], primeng_table__WEBPACK_IMPORTED_MODULE_5__["TableModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownModule"], _ngx_validate_core__WEBPACK_IMPORTED_MODULE_4__["NgxValidateCoreModule"]],
                exports: [],
            },] }
];
/**
 *
 * @deprecated since version 0.9
 * @param {?=} options
 * @return {?}
 */
function AccountProviders(options = (/** @type {?} */ ({}))) {
    return [
        { provide: ACCOUNT_OPTIONS, useValue: options },
        {
            provide: 'ACCOUNT_OPTIONS',
            useFactory: optionsFactory,
            deps: [ACCOUNT_OPTIONS],
        },
    ];
}

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
 * @deprecated since version 0.9
 * @type {?}
 */
const ACCOUNT_ROUTES = {
    routes: (/** @type {?} */ ([
        {
            name: 'Account',
            path: 'account',
            invisible: true,
            layout: "application" /* application */,
            children: [{ path: 'login', name: 'Login', order: 1 }, { path: 'register', name: 'Register', order: 2 }],
        },
    ])),
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/tokens/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/options.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function Options() { }
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/user.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function RegisterRequest() { }
if (false) {}
/**
 * @record
 */
function RegisterResponse() { }
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/tenant.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function TenantIdResponse() { }
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: abp-ng.account.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=abp-ng.account.js.map


/***/ }),

/***/ "./src/app/lazy-libs/account-wrapper.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/lazy-libs/account-wrapper.module.ts ***!
  \*****************************************************/
/*! exports provided: AccountWrapperModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountWrapperModule", function() { return AccountWrapperModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _abp_ng_account__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @abp/ng.account */ "./node_modules/@abp/ng.account/fesm2015/abp-ng.account.js");



let AccountWrapperModule = class AccountWrapperModule {
};
AccountWrapperModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_abp_ng_account__WEBPACK_IMPORTED_MODULE_2__["AccountModule"]],
    })
], AccountWrapperModule);



/***/ })

}]);