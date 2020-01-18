(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["lazy-libs-identity-wrapper-module"],{

/***/ "./node_modules/@abp/ng.identity/fesm2015/abp-ng.identity.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@abp/ng.identity/fesm2015/abp-ng.identity.js ***!
  \*******************************************************************/
/*! exports provided: CreateRole, CreateUser, DeleteRole, DeleteUser, GetRoleById, GetRoles, GetUserById, GetUserRoles, GetUsers, IDENTITY_ROUTES, IdentityModule, IdentityProviders, IdentityService, IdentityState, RolesComponent, UpdateRole, UpdateUser, ɵb, ɵc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateRole", function() { return CreateRole; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateUser", function() { return CreateUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteRole", function() { return DeleteRole; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteUser", function() { return DeleteUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetRoleById", function() { return GetRoleById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetRoles", function() { return GetRoles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUserById", function() { return GetUserById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUserRoles", function() { return GetUserRoles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUsers", function() { return GetUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IDENTITY_ROUTES", function() { return IDENTITY_ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdentityModule", function() { return IdentityModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdentityProviders", function() { return IdentityProviders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdentityService", function() { return IdentityService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdentityState", function() { return IdentityState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolesComponent", function() { return RolesComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateRole", function() { return UpdateRole; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateUser", function() { return UpdateUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return UsersComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return IdentityRoutingModule; });
/* harmony import */ var _abp_ng_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @abp/ng.core */ "./node_modules/@abp/ng.core/fesm2015/abp-ng.core.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm2015/ngxs-store.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @abp/ng.theme.shared */ "./node_modules/@abp/ng.theme.shared/fesm2015/abp-ng.theme.shared.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var snq__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! snq */ "./node_modules/snq/dist/snq.es5.js");
/* harmony import */ var _ngx_validate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-validate/core */ "./node_modules/@ngx-validate/core/fesm2015/ngx-validate-core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _abp_ng_permission_management__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @abp/ng.permission-management */ "./node_modules/@abp/ng.permission-management/fesm2015/abp-ng.permission-management.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_13__);















/**
 * @fileoverview added by tsickle
 * Generated from: lib/actions/identity.actions.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GetRoles {
    /**
     * @param {?=} payload
     */
    constructor(payload) {
        this.payload = payload;
    }
}
GetRoles.type = '[Identity] Get Roles';
if (false) {}
class GetRoleById {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
    }
}
GetRoleById.type = '[Identity] Get Role By Id';
if (false) {}
class DeleteRole {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
    }
}
DeleteRole.type = '[Identity] Delete Role';
if (false) {}
class CreateRole {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
    }
}
CreateRole.type = '[Identity] Create Role';
if (false) {}
class UpdateRole {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
    }
}
UpdateRole.type = '[Identity] Update Role';
if (false) {}
class GetUsers {
    /**
     * @param {?=} payload
     */
    constructor(payload) {
        this.payload = payload;
    }
}
GetUsers.type = '[Identity] Get Users';
if (false) {}
class GetUserById {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
    }
}
GetUserById.type = '[Identity] Get User By Id';
if (false) {}
class DeleteUser {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
    }
}
DeleteUser.type = '[Identity] Delete User';
if (false) {}
class CreateUser {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
    }
}
CreateUser.type = '[Identity] Create User';
if (false) {}
class UpdateUser {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
    }
}
UpdateUser.type = '[Identity] Update User';
if (false) {}
class GetUserRoles {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
    }
}
GetUserRoles.type = '[Identity] Get User Roles';
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/identity.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class IdentityService {
    /**
     * @param {?} rest
     */
    constructor(rest) {
        this.rest = rest;
    }
    /**
     * @param {?=} params
     * @return {?}
     */
    getRoles(params = (/** @type {?} */ ({}))) {
        /** @type {?} */
        const request = {
            method: 'GET',
            url: '/api/identity/roles',
            params,
        };
        return this.rest.request(request);
    }
    /**
     * @param {?} id
     * @return {?}
     */
    getRoleById(id) {
        /** @type {?} */
        const request = {
            method: 'GET',
            url: `/api/identity/roles/${id}`,
        };
        return this.rest.request(request);
    }
    /**
     * @param {?} id
     * @return {?}
     */
    deleteRole(id) {
        /** @type {?} */
        const request = {
            method: 'DELETE',
            url: `/api/identity/roles/${id}`,
        };
        return this.rest.request(request);
    }
    /**
     * @param {?} body
     * @return {?}
     */
    createRole(body) {
        /** @type {?} */
        const request = {
            method: 'POST',
            url: '/api/identity/roles',
            body,
        };
        return this.rest.request(request);
    }
    /**
     * @param {?} body
     * @return {?}
     */
    updateRole(body) {
        /** @type {?} */
        const url = `/api/identity/roles/${body.id}`;
        delete body.id;
        /** @type {?} */
        const request = {
            method: 'PUT',
            url,
            body,
        };
        return this.rest.request(request);
    }
    /**
     * @param {?=} params
     * @return {?}
     */
    getUsers(params = (/** @type {?} */ ({}))) {
        /** @type {?} */
        const request = {
            method: 'GET',
            url: '/api/identity/users',
            params,
        };
        return this.rest.request(request);
    }
    /**
     * @param {?} id
     * @return {?}
     */
    getUserById(id) {
        /** @type {?} */
        const request = {
            method: 'GET',
            url: `/api/identity/users/${id}`,
        };
        return this.rest.request(request);
    }
    /**
     * @param {?} id
     * @return {?}
     */
    getUserRoles(id) {
        /** @type {?} */
        const request = {
            method: 'GET',
            url: `/api/identity/users/${id}/roles`,
        };
        return this.rest.request(request);
    }
    /**
     * @param {?} id
     * @return {?}
     */
    deleteUser(id) {
        /** @type {?} */
        const request = {
            method: 'DELETE',
            url: `/api/identity/users/${id}`,
        };
        return this.rest.request(request);
    }
    /**
     * @param {?} body
     * @return {?}
     */
    createUser(body) {
        /** @type {?} */
        const request = {
            method: 'POST',
            url: '/api/identity/users',
            body,
        };
        return this.rest.request(request);
    }
    /**
     * @param {?} body
     * @return {?}
     */
    updateUser(body) {
        /** @type {?} */
        const url = `/api/identity/users/${body.id}`;
        delete body.id;
        /** @type {?} */
        const request = {
            method: 'PUT',
            url,
            body,
        };
        return this.rest.request(request);
    }
}
IdentityService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"], args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
IdentityService.ctorParameters = () => [
    { type: _abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["RestService"] }
];
/** @nocollapse */ IdentityService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function IdentityService_Factory() { return new IdentityService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["RestService"])); }, token: IdentityService, providedIn: "root" });
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/states/identity.state.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
let IdentityState = class IdentityState {
    /**
     * @param {?} identityService
     */
    constructor(identityService) {
        this.identityService = identityService;
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    static getRoles({ roles }) {
        return roles.items || [];
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    static getRolesTotalCount({ roles }) {
        return roles.totalCount || 0;
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    static getUsers({ users }) {
        return users.items || [];
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    static getUsersTotalCount({ users }) {
        return users.totalCount || 0;
    }
    /**
     * @param {?} __0
     * @param {?} __1
     * @return {?}
     */
    getRoles({ patchState }, { payload }) {
        return this.identityService.getRoles(payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])((/**
         * @param {?} roles
         * @return {?}
         */
        roles => patchState({
            roles,
        }))));
    }
    /**
     * @param {?} __0
     * @param {?} __1
     * @return {?}
     */
    getRole({ patchState }, { payload }) {
        return this.identityService.getRoleById(payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])((/**
         * @param {?} selectedRole
         * @return {?}
         */
        selectedRole => patchState({
            selectedRole,
        }))));
    }
    /**
     * @param {?} _
     * @param {?} __1
     * @return {?}
     */
    deleteRole(_, { payload }) {
        return this.identityService.deleteRole(payload);
    }
    /**
     * @param {?} _
     * @param {?} __1
     * @return {?}
     */
    addRole(_, { payload }) {
        return this.identityService.createRole(payload);
    }
    /**
     * @param {?} __0
     * @param {?} __1
     * @return {?}
     */
    updateRole({ getState }, { payload }) {
        return this.identityService.updateRole(Object.assign({}, getState().selectedRole, payload));
    }
    /**
     * @param {?} __0
     * @param {?} __1
     * @return {?}
     */
    getUsers({ patchState }, { payload }) {
        return this.identityService.getUsers(payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])((/**
         * @param {?} users
         * @return {?}
         */
        users => patchState({
            users,
        }))));
    }
    /**
     * @param {?} __0
     * @param {?} __1
     * @return {?}
     */
    getUser({ patchState }, { payload }) {
        return this.identityService.getUserById(payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])((/**
         * @param {?} selectedUser
         * @return {?}
         */
        selectedUser => patchState({
            selectedUser,
        }))));
    }
    /**
     * @param {?} _
     * @param {?} __1
     * @return {?}
     */
    deleteUser(_, { payload }) {
        return this.identityService.deleteUser(payload);
    }
    /**
     * @param {?} _
     * @param {?} __1
     * @return {?}
     */
    addUser(_, { payload }) {
        return this.identityService.createUser(payload);
    }
    /**
     * @param {?} __0
     * @param {?} __1
     * @return {?}
     */
    updateUser({ getState }, { payload }) {
        return this.identityService.updateUser(Object.assign({}, getState().selectedUser, payload));
    }
    /**
     * @param {?} __0
     * @param {?} __1
     * @return {?}
     */
    getUserRoles({ patchState }, { payload }) {
        return this.identityService.getUserRoles(payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["pluck"])('items'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])((/**
         * @param {?} selectedUserRoles
         * @return {?}
         */
        selectedUserRoles => patchState({
            selectedUserRoles,
        }))));
    }
};
IdentityState.ctorParameters = () => [
    { type: IdentityService }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(GetRoles),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:paramtypes", [Object, GetRoles]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:returntype", void 0)
], IdentityState.prototype, "getRoles", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(GetRoleById),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:paramtypes", [Object, GetRoleById]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:returntype", void 0)
], IdentityState.prototype, "getRole", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(DeleteRole),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:paramtypes", [Object, GetRoleById]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:returntype", void 0)
], IdentityState.prototype, "deleteRole", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(CreateRole),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:paramtypes", [Object, CreateRole]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:returntype", void 0)
], IdentityState.prototype, "addRole", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(UpdateRole),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:paramtypes", [Object, UpdateRole]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:returntype", void 0)
], IdentityState.prototype, "updateRole", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(GetUsers),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:paramtypes", [Object, GetUsers]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:returntype", void 0)
], IdentityState.prototype, "getUsers", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(GetUserById),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:paramtypes", [Object, GetUserById]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:returntype", void 0)
], IdentityState.prototype, "getUser", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(DeleteUser),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:paramtypes", [Object, GetUserById]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:returntype", void 0)
], IdentityState.prototype, "deleteUser", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(CreateUser),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:paramtypes", [Object, CreateUser]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:returntype", void 0)
], IdentityState.prototype, "addUser", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(UpdateUser),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:paramtypes", [Object, UpdateUser]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:returntype", void 0)
], IdentityState.prototype, "updateUser", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(GetUserRoles),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:paramtypes", [Object, GetUserRoles]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:returntype", void 0)
], IdentityState.prototype, "getUserRoles", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Selector"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:returntype", Array)
], IdentityState, "getRoles", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Selector"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:returntype", Number)
], IdentityState, "getRolesTotalCount", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Selector"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:returntype", Array)
], IdentityState, "getUsers", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Selector"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:returntype", Number)
], IdentityState, "getUsersTotalCount", null);
IdentityState = Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["State"])({
        name: 'IdentityState',
        defaults: (/** @type {?} */ ({ roles: {}, selectedRole: {}, users: {}, selectedUser: {} })),
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:paramtypes", [IdentityService])
], IdentityState);
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/roles/roles.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RolesComponent {
    /**
     * @param {?} confirmationService
     * @param {?} fb
     * @param {?} store
     */
    constructor(confirmationService, fb, store) {
        this.confirmationService = confirmationService;
        this.fb = fb;
        this.store = store;
        this.visiblePermissions = false;
        this.pageQuery = {};
        this.loading = false;
        this.modalBusy = false;
        this.sortOrder = '';
        this.sortKey = '';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.get();
    }
    /**
     * @return {?}
     */
    createForm() {
        this.form = this.fb.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: this.selected.name || '', disabled: this.selected.isStatic }, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(256),
            ]),
            isDefault: [this.selected.isDefault || false],
            isPublic: [this.selected.isPublic || false],
        });
    }
    /**
     * @return {?}
     */
    openModal() {
        this.createForm();
        this.isModalVisible = true;
    }
    /**
     * @return {?}
     */
    add() {
        this.selected = (/** @type {?} */ ({}));
        this.openModal();
    }
    /**
     * @param {?} id
     * @return {?}
     */
    edit(id) {
        this.store
            .dispatch(new GetRoleById(id))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["pluck"])('IdentityState', 'selectedRole'))
            .subscribe((/**
         * @param {?} selectedRole
         * @return {?}
         */
        selectedRole => {
            this.selected = selectedRole;
            this.openModal();
        }));
    }
    /**
     * @return {?}
     */
    save() {
        if (!this.form.valid)
            return;
        this.modalBusy = true;
        this.store
            .dispatch(this.selected.id
            ? new UpdateRole(Object.assign({}, this.selected, this.form.value, { id: this.selected.id }))
            : new CreateRole(this.form.value))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])((/**
         * @return {?}
         */
        () => (this.modalBusy = false))))
            .subscribe((/**
         * @return {?}
         */
        () => {
            this.isModalVisible = false;
            this.get();
        }));
    }
    /**
     * @param {?} id
     * @param {?} name
     * @return {?}
     */
    delete(id, name) {
        this.confirmationService
            .warn('AbpIdentity::RoleDeletionConfirmationMessage', 'AbpIdentity::AreYouSure', {
            messageLocalizationParams: [name],
        })
            .subscribe((/**
         * @param {?} status
         * @return {?}
         */
        (status) => {
            if (status === "confirm" /* confirm */) {
                this.store.dispatch(new DeleteRole(id)).subscribe((/**
                 * @return {?}
                 */
                () => this.get()));
            }
        }));
    }
    /**
     * @param {?} data
     * @return {?}
     */
    onPageChange(data) {
        this.pageQuery.skipCount = data.first;
        this.pageQuery.maxResultCount = data.rows;
        this.get();
    }
    /**
     * @return {?}
     */
    get() {
        this.loading = true;
        this.store
            .dispatch(new GetRoles(this.pageQuery))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])((/**
         * @return {?}
         */
        () => (this.loading = false))))
            .subscribe();
    }
    /**
     * @return {?}
     */
    onClickSaveButton() {
        this.formRef.nativeElement.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
    }
}
RolesComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'abp-roles',
                template: "<div id=\"identity-roles-wrapper\" class=\"card\">\n  <div class=\"card-header\">\n    <div class=\"row\">\n      <div class=\"col col-md-6\">\n        <h5 class=\"card-title\">{{ 'AbpIdentity::Roles' | abpLocalization }}</h5>\n      </div>\n      <div class=\"text-right col col-md-6\">\n        <button\n          *abpPermission=\"'AbpIdentity.Roles.Create'\"\n          id=\"create-role\"\n          class=\"btn btn-primary\"\n          type=\"button\"\n          (click)=\"add()\"\n        >\n          <i class=\"fa fa-plus mr-1\"></i>\n          <span>{{ 'AbpIdentity::NewRole' | abpLocalization }}</span>\n        </button>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"card-body\">\n    <p-table\n      *ngIf=\"[150, 0] as columnWidths\"\n      [value]=\"data$ | async\"\n      [abpTableSort]=\"{ key: sortKey, order: sortOrder }\"\n      [lazy]=\"true\"\n      [lazyLoadOnInit]=\"false\"\n      [paginator]=\"true\"\n      [rows]=\"10\"\n      [totalRecords]=\"totalCount$ | async\"\n      [loading]=\"loading\"\n      [resizableColumns]=\"true\"\n      [scrollable]=\"true\"\n      (onLazyLoad)=\"onPageChange($event)\"\n    >\n      <ng-template pTemplate=\"colgroup\">\n        <colgroup>\n          <col *ngFor=\"let width of columnWidths\" [ngStyle]=\"{ 'width.px': width || undefined }\" />\n        </colgroup>\n      </ng-template>\n      <ng-template pTemplate=\"emptymessage\" let-columns>\n        <tr\n          abp-table-empty-message\n          [attr.colspan]=\"columnWidths.length\"\n          localizationResource=\"AbpIdentity\"\n          localizationProp=\"NoDataAvailableInDatatable\"\n        ></tr>\n      </ng-template>\n      <ng-template pTemplate=\"header\" let-columns>\n        <tr>\n          <th>{{ 'AbpIdentity::Actions' | abpLocalization }}</th>\n          <th pResizableColumn (click)=\"sortOrderIcon.sort('name')\">\n            {{ 'AbpIdentity::RoleName' | abpLocalization }}\n            <abp-sort-order-icon\n              #sortOrderIcon\n              key=\"name\"\n              [(selectedKey)]=\"sortKey\"\n              [(order)]=\"sortOrder\"\n            ></abp-sort-order-icon>\n          </th>\n        </tr>\n      </ng-template>\n      <ng-template pTemplate=\"body\" let-data>\n        <tr>\n          <td class=\"text-center\">\n            <div ngbDropdown container=\"body\" class=\"d-inline-block\">\n              <button\n                class=\"btn btn-primary btn-sm dropdown-toggle\"\n                data-toggle=\"dropdown\"\n                aria-haspopup=\"true\"\n                ngbDropdownToggle\n              >\n                <i class=\"fa fa-cog mr-1\"></i>{{ 'AbpIdentity::Actions' | abpLocalization }}\n              </button>\n              <div ngbDropdownMenu>\n                <button\n                  *abpPermission=\"'AbpIdentity.Roles.Update'\"\n                  ngbDropdownItem\n                  (click)=\"edit(data.id)\"\n                >\n                  {{ 'AbpIdentity::Edit' | abpLocalization }}\n                </button>\n                <button\n                  *abpPermission=\"'AbpIdentity.Roles.ManagePermissions'\"\n                  ngbDropdownItem\n                  (click)=\"providerKey = data.name; visiblePermissions = true\"\n                >\n                  {{ 'AbpIdentity::Permissions' | abpLocalization }}\n                </button>\n                <button\n                  *abpPermission=\"'AbpIdentity.Roles.Delete'\"\n                  ngbDropdownItem\n                  (click)=\"delete(data.id, data.name)\"\n                >\n                  {{ 'AbpIdentity::Delete' | abpLocalization }}\n                </button>\n              </div>\n            </div>\n          </td>\n          <td>\n            {{ data.name\n            }}<span *ngIf=\"data.isDefault\" class=\"badge badge-pill badge-success ml-1\">{{\n              'AbpIdentity::DisplayName:IsDefault' | abpLocalization\n            }}</span>\n            <span *ngIf=\"data.isPublic\" class=\"badge badge-pill badge-info ml-1\">{{\n              'AbpIdentity::DisplayName:IsPublic' | abpLocalization\n            }}</span>\n          </td>\n        </tr>\n      </ng-template>\n    </p-table>\n  </div>\n</div>\n\n<abp-modal size=\"md\" [(visible)]=\"isModalVisible\" [busy]=\"modalBusy\">\n  <ng-template #abpHeader>\n    <h3>{{ (selected?.id ? 'AbpIdentity::Edit' : 'AbpIdentity::NewRole') | abpLocalization }}</h3>\n  </ng-template>\n\n  <ng-template #abpBody>\n    <form #formRef [formGroup]=\"form\" (ngSubmit)=\"save()\" validateOnSubmit>\n      <div class=\"form-group\">\n        <label for=\"role-name\">{{ 'AbpIdentity::RoleName' | abpLocalization }}</label\n        ><span> * </span>\n        <input autofocus type=\"text\" id=\"role-name\" class=\"form-control\" formControlName=\"name\" />\n      </div>\n\n      <div class=\"custom-checkbox custom-control mb-2\">\n        <input\n          type=\"checkbox\"\n          id=\"role-is-default\"\n          class=\"custom-control-input\"\n          formControlName=\"isDefault\"\n        />\n        <label class=\"custom-control-label\" for=\"role-is-default\">{{\n          'AbpIdentity::DisplayName:IsDefault' | abpLocalization\n        }}</label>\n      </div>\n\n      <div class=\"custom-checkbox custom-control mb-2\">\n        <input\n          type=\"checkbox\"\n          id=\"role-is-public\"\n          class=\"custom-control-input\"\n          formControlName=\"isPublic\"\n        />\n        <label class=\"custom-control-label\" for=\"role-is-public\">{{\n          'AbpIdentity::DisplayName:IsPublic' | abpLocalization\n        }}</label>\n      </div>\n    </form>\n  </ng-template>\n\n  <ng-template #abpFooter>\n    <button type=\"button\" class=\"btn btn-secondary\" #abpClose>\n      {{ 'AbpIdentity::Cancel' | abpLocalization }}\n    </button>\n    <abp-button iconClass=\"fa fa-check\" [disabled]=\"form?.invalid\" (click)=\"onClickSaveButton()\">{{\n      'AbpIdentity::Save' | abpLocalization\n    }}</abp-button>\n  </ng-template>\n</abp-modal>\n\n<abp-permission-management\n  [(visible)]=\"visiblePermissions\"\n  providerName=\"R\"\n  [providerKey]=\"providerKey\"\n  [hideBadges]=\"true\"\n>\n</abp-permission-management>\n"
            }] }
];
/** @nocollapse */
RolesComponent.ctorParameters = () => [
    { type: _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_4__["ConfirmationService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
];
RolesComponent.propDecorators = {
    formRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['formRef', { static: false, read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(IdentityState.getRoles),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", rxjs__WEBPACK_IMPORTED_MODULE_6__["Observable"])
], RolesComponent.prototype, "data$", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(IdentityState.getRolesTotalCount),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", rxjs__WEBPACK_IMPORTED_MODULE_6__["Observable"])
], RolesComponent.prototype, "totalCount$", void 0);
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/users/users.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UsersComponent {
    /**
     * @param {?} confirmationService
     * @param {?} fb
     * @param {?} store
     */
    constructor(confirmationService, fb, store) {
        this.confirmationService = confirmationService;
        this.fb = fb;
        this.store = store;
        this.visiblePermissions = false;
        this.pageQuery = {};
        this.loading = false;
        this.modalBusy = false;
        this.sortOrder = '';
        this.sortKey = '';
        this.passwordRulesArr = (/** @type {?} */ ([]));
        this.requiredPasswordLength = 1;
        this.trackByFn = (/**
         * @param {?} index
         * @param {?} item
         * @return {?}
         */
        (index, item) => Object.keys(item)[0] || index);
    }
    /**
     * @return {?}
     */
    get roleGroups() {
        return Object(snq__WEBPACK_IMPORTED_MODULE_9__["default"])((/**
         * @return {?}
         */
        () => (/** @type {?} */ (((/** @type {?} */ (this.form.get('roleNames')))).controls))), []);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.get();
        /** @type {?} */
        const passwordRules = this.store.selectSnapshot(_abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["ConfigState"].getSettings('Identity.Password'));
        if ((passwordRules['Abp.Identity.Password.RequireDigit'] || '').toLowerCase() === 'true') {
            this.passwordRulesArr.push('number');
        }
        if ((passwordRules['Abp.Identity.Password.RequireLowercase'] || '').toLowerCase() === 'true') {
            this.passwordRulesArr.push('small');
        }
        if ((passwordRules['Abp.Identity.Password.RequireUppercase'] || '').toLowerCase() === 'true') {
            this.passwordRulesArr.push('capital');
        }
        if (+(passwordRules['Abp.Identity.Password.RequiredUniqueChars'] || 0) > 0) {
            this.passwordRulesArr.push('special');
        }
        if (Number.isInteger(+passwordRules['Abp.Identity.Password.RequiredLength'])) {
            this.requiredPasswordLength = +passwordRules['Abp.Identity.Password.RequiredLength'];
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onSearch(value) {
        this.pageQuery.filter = value;
        this.get();
    }
    /**
     * @return {?}
     */
    buildForm() {
        this.store.dispatch(new GetRoles()).subscribe((/**
         * @return {?}
         */
        () => {
            this.roles = this.store.selectSnapshot(IdentityState.getRoles);
            this.form = this.fb.group({
                userName: [this.selected.userName || '', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(256)]],
                email: [
                    this.selected.email || '',
                    [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(256)],
                ],
                name: [this.selected.name || '', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(64)]],
                surname: [this.selected.surname || '', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(64)]],
                phoneNumber: [this.selected.phoneNumber || '', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(16)]],
                lockoutEnabled: [this.selected.lockoutEnabled || (this.selected.id ? false : true)],
                twoFactorEnabled: [this.selected.twoFactorEnabled || (this.selected.id ? false : true)],
                roleNames: this.fb.array(this.roles.map((/**
                 * @param {?} role
                 * @return {?}
                 */
                role => this.fb.group({
                    [role.name]: [
                        !!Object(snq__WEBPACK_IMPORTED_MODULE_9__["default"])((/**
                         * @return {?}
                         */
                        () => this.selectedUserRoles.find((/**
                         * @param {?} userRole
                         * @return {?}
                         */
                        userRole => userRole.id === role.id)))),
                    ],
                })))),
            });
            /** @type {?} */
            const passwordValidators = [
                Object(_ngx_validate_core__WEBPACK_IMPORTED_MODULE_10__["validatePassword"])(this.passwordRulesArr),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(this.requiredPasswordLength),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(32),
            ];
            this.form.addControl('password', new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [...passwordValidators]));
            if (!this.selected.userName) {
                this.form.get('password').setValidators([...passwordValidators, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]);
                this.form.get('password').updateValueAndValidity();
            }
        }));
    }
    /**
     * @return {?}
     */
    openModal() {
        this.buildForm();
        this.isModalVisible = true;
    }
    /**
     * @return {?}
     */
    add() {
        this.selected = (/** @type {?} */ ({}));
        this.selectedUserRoles = (/** @type {?} */ ([]));
        this.openModal();
    }
    /**
     * @param {?} id
     * @return {?}
     */
    edit(id) {
        this.store
            .dispatch(new GetUserById(id))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])((/**
         * @return {?}
         */
        () => this.store.dispatch(new GetUserRoles(id)))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["pluck"])('IdentityState'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1))
            .subscribe((/**
         * @param {?} state
         * @return {?}
         */
        (state) => {
            this.selected = state.selectedUser;
            this.selectedUserRoles = state.selectedUserRoles;
            this.openModal();
        }));
    }
    /**
     * @return {?}
     */
    save() {
        if (!this.form.valid || this.modalBusy)
            return;
        this.modalBusy = true;
        const { roleNames } = this.form.value;
        /** @type {?} */
        const mappedRoleNames = Object(snq__WEBPACK_IMPORTED_MODULE_9__["default"])((/**
         * @return {?}
         */
        () => roleNames.filter((/**
         * @param {?} role
         * @return {?}
         */
        role => !!role[Object.keys(role)[0]])).map((/**
         * @param {?} role
         * @return {?}
         */
        role => Object.keys(role)[0]))), []);
        this.store
            .dispatch(this.selected.id
            ? new UpdateUser(Object.assign({}, this.selected, this.form.value, { id: this.selected.id, roleNames: mappedRoleNames }))
            : new CreateUser(Object.assign({}, this.form.value, { roleNames: mappedRoleNames })))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])((/**
         * @return {?}
         */
        () => (this.modalBusy = false))))
            .subscribe((/**
         * @return {?}
         */
        () => {
            this.isModalVisible = false;
            this.get();
        }));
    }
    /**
     * @param {?} id
     * @param {?} userName
     * @return {?}
     */
    delete(id, userName) {
        this.confirmationService
            .warn('AbpIdentity::UserDeletionConfirmationMessage', 'AbpIdentity::AreYouSure', {
            messageLocalizationParams: [userName],
        })
            .subscribe((/**
         * @param {?} status
         * @return {?}
         */
        (status) => {
            if (status === "confirm" /* confirm */) {
                this.store.dispatch(new DeleteUser(id)).subscribe((/**
                 * @return {?}
                 */
                () => this.get()));
            }
        }));
    }
    /**
     * @param {?} data
     * @return {?}
     */
    onPageChange(data) {
        this.pageQuery.skipCount = data.first;
        this.pageQuery.maxResultCount = data.rows;
        this.get();
    }
    /**
     * @return {?}
     */
    get() {
        this.loading = true;
        this.store
            .dispatch(new GetUsers(this.pageQuery))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])((/**
         * @return {?}
         */
        () => (this.loading = false))))
            .subscribe();
    }
}
UsersComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'abp-users',
                template: "<div id=\"identity-roles-wrapper\" class=\"card\">\n  <div class=\"card-header\">\n    <div class=\"row\">\n      <div class=\"col col-md-6\">\n        <h5 class=\"card-title\">{{ 'AbpIdentity::Users' | abpLocalization }}</h5>\n      </div>\n      <div class=\"text-right col col-md-6\">\n        <button\n          *abpPermission=\"'AbpIdentity.Users.Create'\"\n          id=\"create-role\"\n          class=\"btn btn-primary\"\n          type=\"button\"\n          (click)=\"add()\"\n        >\n          <i class=\"fa fa-plus mr-1\"></i> <span>{{ 'AbpIdentity::NewUser' | abpLocalization }}</span>\n        </button>\n      </div>\n    </div>\n  </div>\n  <div class=\"card-body\">\n    <div id=\"data-tables-table-filter\" class=\"data-tables-filter\">\n      <label\n        ><input\n          type=\"search\"\n          class=\"form-control form-control-sm\"\n          [placeholder]=\"'AbpUi::PagerSearch' | abpLocalization\"\n          (input.debounce)=\"onSearch($event.target.value)\"\n      /></label>\n    </div>\n    <p-table\n      *ngIf=\"[150, 250, 250, 250] as columnWidths\"\n      [value]=\"data$ | async\"\n      [abpTableSort]=\"{ key: sortKey, order: sortOrder }\"\n      [lazy]=\"true\"\n      [lazyLoadOnInit]=\"false\"\n      [paginator]=\"true\"\n      [rows]=\"10\"\n      [totalRecords]=\"totalCount$ | async\"\n      [loading]=\"loading\"\n      [resizableColumns]=\"true\"\n      [scrollable]=\"true\"\n      (onLazyLoad)=\"onPageChange($event)\"\n    >\n      <ng-template pTemplate=\"colgroup\">\n        <colgroup>\n          <col *ngFor=\"let width of columnWidths\" [ngStyle]=\"{ 'width.px': width || undefined }\" />\n        </colgroup>\n      </ng-template>\n      <ng-template pTemplate=\"emptymessage\" let-columns>\n        <tr\n          abp-table-empty-message\n          [attr.colspan]=\"columnWidths.length\"\n          localizationResource=\"AbpIdentity\"\n          localizationProp=\"NoDataAvailableInDatatable\"\n        ></tr>\n      </ng-template>\n      <ng-template pTemplate=\"header\">\n        <tr>\n          <th>{{ 'AbpIdentity::Actions' | abpLocalization }}</th>\n          <th pResizableColumn (click)=\"sortOrderIcon.sort('userName')\">\n            {{ 'AbpIdentity::UserName' | abpLocalization }}\n            <abp-sort-order-icon #sortOrderIcon key=\"userName\" [(selectedKey)]=\"sortKey\" [(order)]=\"sortOrder\">\n            </abp-sort-order-icon>\n          </th>\n          <th pResizableColumn (click)=\"sortOrderIcon.sort('email')\">\n            {{ 'AbpIdentity::EmailAddress' | abpLocalization }}\n            <abp-sort-order-icon key=\"email\" [(selectedKey)]=\"sortKey\" [(order)]=\"sortOrder\"></abp-sort-order-icon>\n          </th>\n          <th pResizableColumn (click)=\"sortOrderIcon.sort('phoneNumber')\">\n            {{ 'AbpIdentity::PhoneNumber' | abpLocalization }}\n            <abp-sort-order-icon key=\"phoneNumber\" [(selectedKey)]=\"sortKey\" [(order)]=\"sortOrder\">\n            </abp-sort-order-icon>\n          </th>\n        </tr>\n      </ng-template>\n      <ng-template pTemplate=\"body\" let-data>\n        <tr>\n          <td class=\"text-center\">\n            <div ngbDropdown container=\"body\" class=\"d-inline-block\">\n              <button\n                class=\"btn btn-primary btn-sm dropdown-toggle\"\n                data-toggle=\"dropdown\"\n                aria-haspopup=\"true\"\n                ngbDropdownToggle\n              >\n                <i class=\"fa fa-cog mr-1\"></i>{{ 'AbpIdentity::Actions' | abpLocalization }}\n              </button>\n              <div ngbDropdownMenu>\n                <button *abpPermission=\"'AbpIdentity.Users.Update'\" ngbDropdownItem (click)=\"edit(data.id)\">\n                  {{ 'AbpIdentity::Edit' | abpLocalization }}\n                </button>\n                <button\n                  *abpPermission=\"'AbpIdentity.Users.ManagePermissions'\"\n                  ngbDropdownItem\n                  (click)=\"providerKey = data.id; visiblePermissions = true\"\n                >\n                  {{ 'AbpIdentity::Permissions' | abpLocalization }}\n                </button>\n                <button\n                  *abpPermission=\"'AbpIdentity.Users.Delete'\"\n                  ngbDropdownItem\n                  (click)=\"delete(data.id, data.userName)\"\n                >\n                  {{ 'AbpIdentity::Delete' | abpLocalization }}\n                </button>\n              </div>\n            </div>\n          </td>\n          <td>{{ data.userName }}</td>\n          <td>{{ data.email }}</td>\n          <td>{{ data.phoneNumber }}</td>\n        </tr>\n      </ng-template>\n    </p-table>\n  </div>\n</div>\n\n<abp-modal [(visible)]=\"isModalVisible\" [busy]=\"modalBusy\" (disappear)=\"form = null\">\n  <ng-template #abpHeader>\n    <h3>{{ (selected?.id ? 'AbpIdentity::Edit' : 'AbpIdentity::NewUser') | abpLocalization }}</h3>\n  </ng-template>\n\n  <ng-template #abpBody>\n    <ng-template #loaderRef\n      ><div class=\"text-center\"><i class=\"fa fa-pulse fa-spinner\"></i></div\n    ></ng-template>\n\n    <form *ngIf=\"form; else loaderRef\" [formGroup]=\"form\" (ngSubmit)=\"save()\">\n      <ngb-tabset>\n        <ngb-tab [title]=\"'AbpIdentity::UserInformations' | abpLocalization\">\n          <ng-template ngbTabContent>\n            <div class=\"mt-2 fade-in-top\">\n              <div class=\"form-group\">\n                <label for=\"user-name\">{{ 'AbpIdentity::UserName' | abpLocalization }}</label\n                ><span> * </span>\n                <input type=\"text\" id=\"user-name\" class=\"form-control\" formControlName=\"userName\" autofocus />\n              </div>\n\n              <div class=\"form-group\">\n                <label for=\"name\">{{ 'AbpIdentity::DisplayName:Name' | abpLocalization }}</label>\n                <input type=\"text\" id=\"name\" class=\"form-control\" formControlName=\"name\" />\n              </div>\n\n              <div class=\"form-group\">\n                <label for=\"surname\">{{ 'AbpIdentity::DisplayName:Surname' | abpLocalization }}</label>\n                <input type=\"text\" id=\"surname\" class=\"form-control\" formControlName=\"surname\" />\n              </div>\n\n              <div class=\"form-group\">\n                <label for=\"password\">{{ 'AbpIdentity::Password' | abpLocalization }}</label\n                ><span *ngIf=\"!selected.userName\"> * </span>\n                <input\n                  type=\"password\"\n                  id=\"password\"\n                  autocomplete=\"new-password\"\n                  class=\"form-control\"\n                  formControlName=\"password\"\n                />\n              </div>\n\n              <div class=\"form-group\">\n                <label for=\"email\">{{ 'AbpIdentity::EmailAddress' | abpLocalization }}</label\n                ><span> * </span>\n                <input type=\"text\" id=\"email\" class=\"form-control\" formControlName=\"email\" />\n              </div>\n\n              <div class=\"form-group\">\n                <label for=\"phone-number\">{{ 'AbpIdentity::PhoneNumber' | abpLocalization }}</label>\n                <input type=\"text\" id=\"phone-number\" class=\"form-control\" formControlName=\"phoneNumber\" />\n              </div>\n\n              <div class=\"custom-checkbox custom-control mb-2\">\n                <input\n                  type=\"checkbox\"\n                  id=\"lockout-checkbox\"\n                  class=\"custom-control-input\"\n                  formControlName=\"lockoutEnabled\"\n                />\n                <label class=\"custom-control-label\" for=\"lockout-checkbox\">{{\n                  'AbpIdentity::DisplayName:LockoutEnabled' | abpLocalization\n                }}</label>\n              </div>\n\n              <div class=\"custom-checkbox custom-control mb-2\">\n                <input\n                  type=\"checkbox\"\n                  id=\"two-factor-checkbox\"\n                  class=\"custom-control-input\"\n                  formControlName=\"twoFactorEnabled\"\n                />\n                <label class=\"custom-control-label\" for=\"two-factor-checkbox\">{{\n                  'AbpIdentity::DisplayName:TwoFactorEnabled' | abpLocalization\n                }}</label>\n              </div>\n            </div>\n          </ng-template>\n        </ngb-tab>\n        <ngb-tab [title]=\"'AbpIdentity::Roles' | abpLocalization\">\n          <ng-template ngbTabContent>\n            <div class=\"mt-2 fade-in-top\">\n              <div\n                *ngFor=\"let roleGroup of roleGroups; let i = index; trackBy: trackByFn\"\n                class=\"custom-checkbox custom-control mb-2\"\n              >\n                <input\n                  type=\"checkbox\"\n                  name=\"Roles[0].IsAssigned\"\n                  value=\"true\"\n                  class=\"custom-control-input\"\n                  [attr.id]=\"'roles-' + i\"\n                  [formControl]=\"roleGroup.controls[roles[i].name]\"\n                />\n                <label class=\"custom-control-label\" [attr.for]=\"'roles-' + i\">{{ roles[i].name }}</label>\n              </div>\n            </div>\n          </ng-template>\n        </ngb-tab>\n      </ngb-tabset>\n    </form>\n  </ng-template>\n\n  <ng-template #abpFooter>\n    <button type=\"button\" class=\"btn btn-secondary\" #abpClose>\n      {{ 'AbpIdentity::Cancel' | abpLocalization }}\n    </button>\n    <abp-button iconClass=\"fa fa-check\" (click)=\"save()\" [disabled]=\"form?.invalid\">{{\n      'AbpIdentity::Save' | abpLocalization\n    }}</abp-button>\n  </ng-template>\n</abp-modal>\n\n<abp-permission-management [(visible)]=\"visiblePermissions\" providerName=\"U\" [providerKey]=\"providerKey\">\n</abp-permission-management>\n"
            }] }
];
/** @nocollapse */
UsersComponent.ctorParameters = () => [
    { type: _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_4__["ConfirmationService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
];
UsersComponent.propDecorators = {
    modalContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['modalContent', { static: false },] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(IdentityState.getUsers),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", rxjs__WEBPACK_IMPORTED_MODULE_6__["Observable"])
], UsersComponent.prototype, "data$", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(IdentityState.getUsersTotalCount),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", rxjs__WEBPACK_IMPORTED_MODULE_6__["Observable"])
], UsersComponent.prototype, "totalCount$", void 0);
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/identity-routing.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
const ɵ0 = { requiredPolicy: 'AbpIdentity.Roles' }, ɵ1 = { requiredPolicy: 'AbpIdentity.Users' };
/** @type {?} */
const routes = [
    { path: '', redirectTo: 'roles', pathMatch: 'full' },
    {
        path: '',
        component: _abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["DynamicLayoutComponent"],
        canActivate: [_abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"], _abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["PermissionGuard"]],
        children: [
            {
                path: 'roles',
                component: RolesComponent,
                data: ɵ0,
            },
            {
                path: 'users',
                component: UsersComponent,
                data: ɵ1,
            },
        ],
    },
];
class IdentityRoutingModule {
}
IdentityRoutingModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"]],
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/identity.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class IdentityModule {
}
IdentityModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                declarations: [RolesComponent, UsersComponent],
                imports: [
                    _ngxs_store__WEBPACK_IMPORTED_MODULE_2__["NgxsModule"].forFeature([IdentityState]),
                    _abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["CoreModule"],
                    IdentityRoutingModule,
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbTabsetModule"],
                    _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_4__["ThemeSharedModule"],
                    primeng_table__WEBPACK_IMPORTED_MODULE_13__["TableModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbDropdownModule"],
                    _abp_ng_permission_management__WEBPACK_IMPORTED_MODULE_12__["PermissionManagementModule"],
                    _ngx_validate_core__WEBPACK_IMPORTED_MODULE_10__["NgxValidateCoreModule"],
                ],
            },] }
];
/**
 *
 * @deprecated
 * @return {?}
 */
function IdentityProviders() {
    return [];
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/constants/routes.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 *
 * @deprecated
 * @type {?}
 */
const IDENTITY_ROUTES = {
    routes: (/** @type {?} */ ([
        {
            name: 'AbpUiNavigation::Menu:Administration',
            path: '',
            order: 1,
            wrapper: true,
        },
        {
            name: 'AbpIdentity::Menu:IdentityManagement',
            path: 'identity',
            order: 1,
            parentName: 'AbpUiNavigation::Menu:Administration',
            layout: "application" /* application */,
            iconClass: 'fa fa-id-card-o',
            children: [
                { path: 'roles', name: 'AbpIdentity::Roles', order: 2, requiredPolicy: 'AbpIdentity.Roles' },
                { path: 'users', name: 'AbpIdentity::Users', order: 1, requiredPolicy: 'AbpIdentity.Users' },
            ],
        },
    ])),
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/identity.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Identity;
(function (Identity) {
    /**
     * @record
     */
    function State() { }
    Identity.State = State;
    if (false) {}
    /**
     * @record
     */
    function RoleSaveRequest() { }
    Identity.RoleSaveRequest = RoleSaveRequest;
    if (false) {}
    /**
     * @record
     */
    function RoleItem() { }
    Identity.RoleItem = RoleItem;
    if (false) {}
    /**
     * @record
     */
    function UserItem() { }
    Identity.UserItem = UserItem;
    if (false) {}
    /**
     * @record
     */
    function User() { }
    Identity.User = User;
    if (false) {}
    /**
     * @record
     */
    function UserSaveRequest() { }
    Identity.UserSaveRequest = UserSaveRequest;
    if (false) {}
})(Identity || (Identity = {}));

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: abp-ng.identity.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=abp-ng.identity.js.map


/***/ }),

/***/ "./node_modules/@abp/ng.permission-management/fesm2015/abp-ng.permission-management.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@abp/ng.permission-management/fesm2015/abp-ng.permission-management.js ***!
  \*********************************************************************************************/
/*! exports provided: GetPermissions, PermissionManagementComponent, PermissionManagementModule, PermissionManagementService, PermissionManagementState, PermissionManagementStateService, UpdatePermissions, ɵa, ɵb, ɵc, ɵd, ɵe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetPermissions", function() { return GetPermissions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionManagementComponent", function() { return PermissionManagementComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionManagementModule", function() { return PermissionManagementModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionManagementService", function() { return PermissionManagementService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionManagementState", function() { return PermissionManagementState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionManagementStateService", function() { return PermissionManagementStateService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatePermissions", function() { return UpdatePermissions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return PermissionManagementComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return PermissionManagementState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return PermissionManagementService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return GetPermissions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return UpdatePermissions; });
/* harmony import */ var _abp_ng_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @abp/ng.core */ "./node_modules/@abp/ng.core/fesm2015/abp-ng.core.js");
/* harmony import */ var _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @abp/ng.theme.shared */ "./node_modules/@abp/ng.theme.shared/fesm2015/abp-ng.theme.shared.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm2015/ngxs-store.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");








/**
 * @fileoverview added by tsickle
 * Generated from: lib/actions/permission-management.actions.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GetPermissions {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
    }
}
GetPermissions.type = '[PermissionManagement] Get Permissions';
if (false) {}
class UpdatePermissions {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
    }
}
UpdatePermissions.type = '[PermissionManagement] Update Permissions';
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/permission-management.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PermissionManagementService {
    /**
     * @param {?} rest
     */
    constructor(rest) {
        this.rest = rest;
    }
    /**
     * @param {?} params
     * @return {?}
     */
    getPermissions(params) {
        /** @type {?} */
        const request = {
            method: 'GET',
            url: '/api/abp/permissions',
            params,
        };
        return this.rest.request(request);
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    updatePermissions({ permissions, providerKey, providerName, }) {
        /** @type {?} */
        const request = {
            method: 'PUT',
            url: '/api/abp/permissions',
            body: { permissions },
            params: { providerKey, providerName },
        };
        return this.rest.request(request);
    }
}
PermissionManagementService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"], args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
PermissionManagementService.ctorParameters = () => [
    { type: _abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["RestService"] }
];
/** @nocollapse */ PermissionManagementService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"])({ factory: function PermissionManagementService_Factory() { return new PermissionManagementService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"])(_abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["RestService"])); }, token: PermissionManagementService, providedIn: "root" });
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/states/permission-management.state.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
let PermissionManagementState = class PermissionManagementState {
    /**
     * @param {?} permissionManagementService
     */
    constructor(permissionManagementService) {
        this.permissionManagementService = permissionManagementService;
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    static getPermissionGroups({ permissionRes }) {
        return permissionRes.groups || [];
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    static getEntityDisplayName({ permissionRes }) {
        return permissionRes.entityDisplayName;
    }
    /**
     * @param {?} __0
     * @param {?} __1
     * @return {?}
     */
    permissionManagementGet({ patchState }, { payload }) {
        return this.permissionManagementService.getPermissions(payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])((/**
         * @param {?} permissionResponse
         * @return {?}
         */
        permissionResponse => patchState({
            permissionRes: permissionResponse,
        }))));
    }
    /**
     * @param {?} _
     * @param {?} __1
     * @return {?}
     */
    permissionManagementUpdate(_, { payload }) {
        return this.permissionManagementService.updatePermissions(payload);
    }
};
PermissionManagementState.ctorParameters = () => [
    { type: PermissionManagementService }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Action"])(GetPermissions),
    Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__metadata"])("design:paramtypes", [Object, GetPermissions]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__metadata"])("design:returntype", void 0)
], PermissionManagementState.prototype, "permissionManagementGet", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Action"])(UpdatePermissions),
    Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__metadata"])("design:paramtypes", [Object, UpdatePermissions]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__metadata"])("design:returntype", void 0)
], PermissionManagementState.prototype, "permissionManagementUpdate", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Selector"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__metadata"])("design:returntype", void 0)
], PermissionManagementState, "getPermissionGroups", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Selector"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__metadata"])("design:returntype", String)
], PermissionManagementState, "getEntityDisplayName", null);
PermissionManagementState = Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["State"])({
        name: 'PermissionManagementState',
        defaults: (/** @type {?} */ ({ permissionRes: {} })),
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__metadata"])("design:paramtypes", [PermissionManagementService])
], PermissionManagementState);
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/permission-management.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PermissionManagementComponent {
    /**
     * @param {?} store
     * @param {?} renderer
     */
    constructor(store, renderer) {
        this.store = store;
        this.renderer = renderer;
        this.hideBadges = false;
        this.visibleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.permissions = [];
        this.selectThisTab = false;
        this.selectAllTab = false;
        this.modalBusy = false;
        this.trackByFn = (/**
         * @param {?} _
         * @param {?} item
         * @return {?}
         */
        (_, item) => item.name);
    }
    /**
     * @return {?}
     */
    get visible() {
        return this._visible;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set visible(value) {
        if (!this.selectedGroup)
            return;
        this._visible = value;
        this.visibleChange.emit(value);
        if (!value) {
            this.selectedGroup = null;
        }
    }
    /**
     * @return {?}
     */
    get selectedGroupPermissions$() {
        return this.groups$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((/**
         * @param {?} groups
         * @return {?}
         */
        groups => this.selectedGroup
            ? groups.find((/**
             * @param {?} group
             * @return {?}
             */
            group => group.name === this.selectedGroup.name)).permissions
            : [])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((/**
         * @param {?} permissions
         * @return {?}
         */
        permissions => permissions.map((/**
         * @param {?} permission
         * @return {?}
         */
        permission => ((/** @type {?} */ (((/** @type {?} */ (Object.assign({}, permission, { margin: findMargin(permissions, permission), isGranted: this.permissions.find((/**
             * @param {?} per
             * @return {?}
             */
            per => per.name === permission.name)).isGranted }))))))))))));
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @param {?} name
     * @return {?}
     */
    getChecked(name) {
        return (this.permissions.find((/**
         * @param {?} per
         * @return {?}
         */
        per => per.name === name)) || { isGranted: false }).isGranted;
    }
    /**
     * @param {?} grantedProviders
     * @return {?}
     */
    isGrantedByOtherProviderName(grantedProviders) {
        if (grantedProviders.length) {
            return grantedProviders.findIndex((/**
             * @param {?} p
             * @return {?}
             */
            p => p.providerName !== this.providerName)) > -1;
        }
        return false;
    }
    /**
     * @param {?} clickedPermission
     * @param {?} value
     * @return {?}
     */
    onClickCheckbox(clickedPermission, value) {
        if (clickedPermission.isGranted &&
            this.isGrantedByOtherProviderName(clickedPermission.grantedProviders))
            return;
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.permissions = this.permissions.map((/**
             * @param {?} per
             * @return {?}
             */
            per => {
                if (clickedPermission.name === per.name) {
                    return Object.assign({}, per, { isGranted: !per.isGranted });
                }
                else if (clickedPermission.name === per.parentName && clickedPermission.isGranted) {
                    return Object.assign({}, per, { isGranted: false });
                }
                else if (clickedPermission.parentName === per.name && !clickedPermission.isGranted) {
                    return Object.assign({}, per, { isGranted: true });
                }
                return per;
            }));
            this.setTabCheckboxState();
            this.setGrantCheckboxState();
        }), 0);
    }
    /**
     * @return {?}
     */
    setTabCheckboxState() {
        this.selectedGroupPermissions$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1)).subscribe((/**
         * @param {?} permissions
         * @return {?}
         */
        permissions => {
            /** @type {?} */
            const selectedPermissions = permissions.filter((/**
             * @param {?} per
             * @return {?}
             */
            per => per.isGranted));
            /** @type {?} */
            const element = (/** @type {?} */ (document.querySelector('#select-all-in-this-tabs')));
            if (selectedPermissions.length === permissions.length) {
                element.indeterminate = false;
                this.selectThisTab = true;
            }
            else if (selectedPermissions.length === 0) {
                element.indeterminate = false;
                this.selectThisTab = false;
            }
            else {
                element.indeterminate = true;
            }
        }));
    }
    /**
     * @return {?}
     */
    setGrantCheckboxState() {
        /** @type {?} */
        const selectedAllPermissions = this.permissions.filter((/**
         * @param {?} per
         * @return {?}
         */
        per => per.isGranted));
        /** @type {?} */
        const checkboxElement = (/** @type {?} */ (document.querySelector('#select-all-in-all-tabs')));
        if (selectedAllPermissions.length === this.permissions.length) {
            checkboxElement.indeterminate = false;
            this.selectAllTab = true;
        }
        else if (selectedAllPermissions.length === 0) {
            checkboxElement.indeterminate = false;
            this.selectAllTab = false;
        }
        else {
            checkboxElement.indeterminate = true;
        }
    }
    /**
     * @return {?}
     */
    onClickSelectThisTab() {
        this.selectedGroupPermissions$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1)).subscribe((/**
         * @param {?} permissions
         * @return {?}
         */
        permissions => {
            permissions.forEach((/**
             * @param {?} permission
             * @return {?}
             */
            permission => {
                if (permission.isGranted && this.isGrantedByOtherProviderName(permission.grantedProviders))
                    return;
                /** @type {?} */
                const index = this.permissions.findIndex((/**
                 * @param {?} per
                 * @return {?}
                 */
                per => per.name === permission.name));
                this.permissions = [
                    ...this.permissions.slice(0, index),
                    Object.assign({}, this.permissions[index], { isGranted: !this.selectThisTab }),
                    ...this.permissions.slice(index + 1),
                ];
            }));
        }));
        this.setGrantCheckboxState();
    }
    /**
     * @return {?}
     */
    onClickSelectAll() {
        this.permissions = this.permissions.map((/**
         * @param {?} permission
         * @return {?}
         */
        permission => (Object.assign({}, permission, { isGranted: this.isGrantedByOtherProviderName(permission.grantedProviders) || !this.selectAllTab }))));
        this.selectThisTab = !this.selectAllTab;
    }
    /**
     * @param {?} group
     * @return {?}
     */
    onChangeGroup(group) {
        this.selectedGroup = group;
        this.setTabCheckboxState();
    }
    /**
     * @return {?}
     */
    submit() {
        this.modalBusy = true;
        /** @type {?} */
        const unchangedPermissions = getPermissions(this.store.selectSnapshot(PermissionManagementState.getPermissionGroups));
        /** @type {?} */
        const changedPermissions = this.permissions
            .filter((/**
         * @param {?} per
         * @return {?}
         */
        per => unchangedPermissions.find((/**
         * @param {?} unchanged
         * @return {?}
         */
        unchanged => unchanged.name === per.name)).isGranted ===
            per.isGranted
            ? false
            : true))
            .map((/**
         * @param {?} __0
         * @return {?}
         */
        ({ name, isGranted }) => ({ name, isGranted })));
        if (changedPermissions.length) {
            this.store
                .dispatch(new UpdatePermissions({
                providerKey: this.providerKey,
                providerName: this.providerName,
                permissions: changedPermissions,
            }))
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])((/**
             * @return {?}
             */
            () => (this.modalBusy = false))))
                .subscribe((/**
             * @return {?}
             */
            () => {
                this.visible = false;
            }));
        }
        else {
            this.modalBusy = false;
            this.visible = false;
        }
    }
    /**
     * @return {?}
     */
    openModal() {
        if (!this.providerKey || !this.providerName) {
            throw new Error('Provider Key and Provider Name are required.');
        }
        this.store
            .dispatch(new GetPermissions({
            providerKey: this.providerKey,
            providerName: this.providerName,
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["pluck"])('PermissionManagementState', 'permissionRes'))
            .subscribe((/**
         * @param {?} permissionRes
         * @return {?}
         */
        (permissionRes) => {
            this.selectedGroup = permissionRes.groups[0];
            this.permissions = getPermissions(permissionRes.groups);
            this.visible = true;
        }));
    }
    /**
     * @return {?}
     */
    initModal() {
        this.setTabCheckboxState();
        this.setGrantCheckboxState();
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    ngOnChanges({ visible }) {
        if (!visible)
            return;
        if (visible.currentValue) {
            this.openModal();
        }
        else if (visible.currentValue === false && this.visible) {
            this.visible = false;
        }
    }
}
PermissionManagementComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{
                selector: 'abp-permission-management',
                template: "<abp-modal [(visible)]=\"visible\" (init)=\"initModal()\" [busy]=\"modalBusy\">\n  <ng-container *ngIf=\"{ entityName: entityName$ | async } as data\">\n    <ng-template #abpHeader>\n      <h4>\n        {{ 'AbpPermissionManagement::Permissions' | abpLocalization }} - {{ data.entityName }}\n      </h4>\n    </ng-template>\n    <ng-template #abpBody>\n      <div class=\"custom-checkbox custom-control mb-2\">\n        <input\n          type=\"checkbox\"\n          id=\"select-all-in-all-tabs\"\n          name=\"select-all-in-all-tabs\"\n          class=\"custom-control-input\"\n          [(ngModel)]=\"selectAllTab\"\n          (click)=\"onClickSelectAll()\"\n        />\n        <label class=\"custom-control-label\" for=\"select-all-in-all-tabs\">{{\n          'AbpPermissionManagement::SelectAllInAllTabs' | abpLocalization\n        }}</label>\n      </div>\n\n      <hr class=\"mt-2 mb-2\" />\n      <div class=\"row\">\n        <div class=\"col-4\">\n          <ul class=\"nav nav-pills flex-column\">\n            <li *ngFor=\"let group of groups$ | async; trackBy: trackByFn\" class=\"nav-item\">\n              <a\n                class=\"nav-link pointer\"\n                [class.active]=\"selectedGroup?.name === group?.name\"\n                (click)=\"onChangeGroup(group)\"\n                >{{ group?.displayName }}</a\n              >\n            </li>\n          </ul>\n        </div>\n        <div class=\"col-8\">\n          <h4>{{ selectedGroup?.displayName }}</h4>\n          <hr class=\"mt-2 mb-3\" />\n          <div class=\"pl-1 pt-1\">\n            <div class=\"custom-checkbox custom-control mb-2\">\n              <input\n                type=\"checkbox\"\n                id=\"select-all-in-this-tabs\"\n                name=\"select-all-in-this-tabs\"\n                class=\"custom-control-input\"\n                [(ngModel)]=\"selectThisTab\"\n                (click)=\"onClickSelectThisTab()\"\n              />\n              <label class=\"custom-control-label\" for=\"select-all-in-this-tabs\">{{\n                'AbpPermissionManagement::SelectAllInThisTab' | abpLocalization\n              }}</label>\n            </div>\n            <hr class=\"mb-3\" />\n            <div\n              *ngFor=\"\n                let permission of selectedGroupPermissions$ | async;\n                let i = index;\n                trackBy: trackByFn\n              \"\n              [style.margin-left]=\"permission.margin + 'px'\"\n              class=\"custom-checkbox custom-control mb-2\"\n            >\n              <input\n                #permissionCheckbox\n                type=\"checkbox\"\n                [checked]=\"getChecked(permission.name)\"\n                [value]=\"getChecked(permission.name)\"\n                [attr.id]=\"permission.name\"\n                class=\"custom-control-input\"\n                [disabled]=\"isGrantedByOtherProviderName(permission.grantedProviders)\"\n              />\n              <label\n                class=\"custom-control-label\"\n                [attr.for]=\"permission.name\"\n                (click)=\"onClickCheckbox(permission, permissionCheckbox.value)\"\n                >{{ permission.displayName }}\n                <ng-container *ngIf=\"!hideBadges\">\n                  <span\n                    *ngFor=\"let provider of permission.grantedProviders\"\n                    class=\"badge badge-light\"\n                    >{{ provider.providerName }}: {{ provider.providerKey }}</span\n                  >\n                </ng-container>\n              </label>\n            </div>\n          </div>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template #abpFooter>\n      <button type=\"button\" class=\"btn btn-secondary\" #abpClose>\n        {{ 'AbpIdentity::Cancel' | abpLocalization }}\n      </button>\n      <abp-button iconClass=\"fa fa-check\" (click)=\"submit()\">{{\n        'AbpIdentity::Save' | abpLocalization\n      }}</abp-button>\n    </ng-template>\n  </ng-container>\n</abp-modal>\n"
            }] }
];
/** @nocollapse */
PermissionManagementComponent.ctorParameters = () => [
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"] }
];
PermissionManagementComponent.propDecorators = {
    providerName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    providerKey: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    hideBadges: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    visible: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    visibleChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Select"])(PermissionManagementState.getPermissionGroups),
    Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__metadata"])("design:type", rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"])
], PermissionManagementComponent.prototype, "groups$", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Select"])(PermissionManagementState.getEntityDisplayName),
    Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__metadata"])("design:type", rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"])
], PermissionManagementComponent.prototype, "entityName$", void 0);
if (false) {}
/**
 * @param {?} permissions
 * @param {?} permission
 * @return {?}
 */
function findMargin(permissions, permission) {
    /** @type {?} */
    const parentPermission = permissions.find((/**
     * @param {?} per
     * @return {?}
     */
    per => per.name === permission.parentName));
    if (parentPermission && parentPermission.parentName) {
        /** @type {?} */
        let margin = 20;
        return (margin += findMargin(permissions, parentPermission));
    }
    return parentPermission ? 20 : 0;
}
/**
 * @param {?} groups
 * @return {?}
 */
function getPermissions(groups) {
    return groups.reduce((/**
     * @param {?} acc
     * @param {?} val
     * @return {?}
     */
    (acc, val) => [...acc, ...val.permissions]), []);
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/permission-management.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PermissionManagementModule {
}
PermissionManagementModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"], args: [{
                declarations: [PermissionManagementComponent],
                imports: [_abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["CoreModule"], _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_1__["ThemeSharedModule"], _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["NgxsModule"].forFeature([PermissionManagementState])],
                exports: [PermissionManagementComponent],
            },] }
];

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
 * Generated from: lib/models/permission-management.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PermissionManagement;
(function (PermissionManagement) {
    /**
     * @record
     */
    function State() { }
    PermissionManagement.State = State;
    if (false) {}
    /**
     * @record
     */
    function Response() { }
    PermissionManagement.Response = Response;
    if (false) {}
    /**
     * @record
     */
    function Group() { }
    PermissionManagement.Group = Group;
    if (false) {}
    /**
     * @record
     */
    function MinimumPermission() { }
    PermissionManagement.MinimumPermission = MinimumPermission;
    if (false) {}
    /**
     * @record
     */
    function Permission() { }
    PermissionManagement.Permission = Permission;
    if (false) {}
    /**
     * @record
     */
    function GrantedProvider() { }
    PermissionManagement.GrantedProvider = GrantedProvider;
    if (false) {}
    /**
     * @record
     */
    function UpdateRequest() { }
    PermissionManagement.UpdateRequest = UpdateRequest;
    if (false) {}
})(PermissionManagement || (PermissionManagement = {}));

/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/permission-management-state.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PermissionManagementStateService {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
    }
    /**
     * @return {?}
     */
    getPermissionGroups() {
        return this.store.selectSnapshot(PermissionManagementState.getPermissionGroups);
    }
    /**
     * @return {?}
     */
    getEntityDisplayName() {
        return this.store.selectSnapshot(PermissionManagementState.getEntityDisplayName);
    }
}
PermissionManagementStateService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"], args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
PermissionManagementStateService.ctorParameters = () => [
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
];
/** @nocollapse */ PermissionManagementStateService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"])({ factory: function PermissionManagementStateService_Factory() { return new PermissionManagementStateService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"])(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"])); }, token: PermissionManagementStateService, providedIn: "root" });
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
 * Generated from: abp-ng.permission-management.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=abp-ng.permission-management.js.map


/***/ }),

/***/ "./src/app/lazy-libs/identity-wrapper.module.ts":
/*!******************************************************!*\
  !*** ./src/app/lazy-libs/identity-wrapper.module.ts ***!
  \******************************************************/
/*! exports provided: IdentityWrapperModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdentityWrapperModule", function() { return IdentityWrapperModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _abp_ng_identity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @abp/ng.identity */ "./node_modules/@abp/ng.identity/fesm2015/abp-ng.identity.js");



let IdentityWrapperModule = class IdentityWrapperModule {
};
IdentityWrapperModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_abp_ng_identity__WEBPACK_IMPORTED_MODULE_2__["IdentityModule"]],
    })
], IdentityWrapperModule);



/***/ })

}]);