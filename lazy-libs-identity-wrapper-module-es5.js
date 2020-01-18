function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["lazy-libs-identity-wrapper-module"], {
  /***/
  "./node_modules/@abp/ng.identity/fesm2015/abp-ng.identity.js":
  /*!*******************************************************************!*\
    !*** ./node_modules/@abp/ng.identity/fesm2015/abp-ng.identity.js ***!
    \*******************************************************************/

  /*! exports provided: CreateRole, CreateUser, DeleteRole, DeleteUser, GetRoleById, GetRoles, GetUserById, GetUserRoles, GetUsers, IDENTITY_ROUTES, IdentityModule, IdentityProviders, IdentityService, IdentityState, RolesComponent, UpdateRole, UpdateUser, ɵb, ɵc */

  /***/
  function node_modulesAbpNgIdentityFesm2015AbpNgIdentityJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateRole", function () {
      return CreateRole;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateUser", function () {
      return CreateUser;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeleteRole", function () {
      return DeleteRole;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeleteUser", function () {
      return DeleteUser;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GetRoleById", function () {
      return GetRoleById;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GetRoles", function () {
      return GetRoles;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GetUserById", function () {
      return GetUserById;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GetUserRoles", function () {
      return GetUserRoles;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GetUsers", function () {
      return GetUsers;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IDENTITY_ROUTES", function () {
      return IDENTITY_ROUTES;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IdentityModule", function () {
      return IdentityModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IdentityProviders", function () {
      return IdentityProviders;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IdentityService", function () {
      return IdentityService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IdentityState", function () {
      return IdentityState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RolesComponent", function () {
      return RolesComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateRole", function () {
      return UpdateRole;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateUser", function () {
      return UpdateUser;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵb", function () {
      return UsersComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵc", function () {
      return IdentityRoutingModule;
    });
    /* harmony import */


    var _abp_ng_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @abp/ng.core */
    "./node_modules/@abp/ng.core/fesm2015/abp-ng.core.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngxs/store */
    "./node_modules/@ngxs/store/fesm2015/ngxs-store.js");
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @abp/ng.theme.shared */
    "./node_modules/@abp/ng.theme.shared/fesm2015/abp-ng.theme.shared.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var snq__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! snq */
    "./node_modules/snq/dist/snq.es5.js");
    /* harmony import */


    var _ngx_validate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ngx-validate/core */
    "./node_modules/@ngx-validate/core/fesm2015/ngx-validate-core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _abp_ng_permission_management__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @abp/ng.permission-management */
    "./node_modules/@abp/ng.permission-management/fesm2015/abp-ng.permission-management.js");
    /* harmony import */


    var primeng_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! primeng/table */
    "./node_modules/primeng/table.js");
    /* harmony import */


    var primeng_table__WEBPACK_IMPORTED_MODULE_13___default =
    /*#__PURE__*/
    __webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_13__);
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/actions/identity.actions.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var GetRoles =
    /**
     * @param {?=} payload
     */
    function GetRoles(payload) {
      _classCallCheck(this, GetRoles);

      this.payload = payload;
    };

    GetRoles.type = '[Identity] Get Roles';

    if (false) {}

    var GetRoleById =
    /**
     * @param {?} payload
     */
    function GetRoleById(payload) {
      _classCallCheck(this, GetRoleById);

      this.payload = payload;
    };

    GetRoleById.type = '[Identity] Get Role By Id';

    if (false) {}

    var DeleteRole =
    /**
     * @param {?} payload
     */
    function DeleteRole(payload) {
      _classCallCheck(this, DeleteRole);

      this.payload = payload;
    };

    DeleteRole.type = '[Identity] Delete Role';

    if (false) {}

    var CreateRole =
    /**
     * @param {?} payload
     */
    function CreateRole(payload) {
      _classCallCheck(this, CreateRole);

      this.payload = payload;
    };

    CreateRole.type = '[Identity] Create Role';

    if (false) {}

    var UpdateRole =
    /**
     * @param {?} payload
     */
    function UpdateRole(payload) {
      _classCallCheck(this, UpdateRole);

      this.payload = payload;
    };

    UpdateRole.type = '[Identity] Update Role';

    if (false) {}

    var GetUsers =
    /**
     * @param {?=} payload
     */
    function GetUsers(payload) {
      _classCallCheck(this, GetUsers);

      this.payload = payload;
    };

    GetUsers.type = '[Identity] Get Users';

    if (false) {}

    var GetUserById =
    /**
     * @param {?} payload
     */
    function GetUserById(payload) {
      _classCallCheck(this, GetUserById);

      this.payload = payload;
    };

    GetUserById.type = '[Identity] Get User By Id';

    if (false) {}

    var DeleteUser =
    /**
     * @param {?} payload
     */
    function DeleteUser(payload) {
      _classCallCheck(this, DeleteUser);

      this.payload = payload;
    };

    DeleteUser.type = '[Identity] Delete User';

    if (false) {}

    var CreateUser =
    /**
     * @param {?} payload
     */
    function CreateUser(payload) {
      _classCallCheck(this, CreateUser);

      this.payload = payload;
    };

    CreateUser.type = '[Identity] Create User';

    if (false) {}

    var UpdateUser =
    /**
     * @param {?} payload
     */
    function UpdateUser(payload) {
      _classCallCheck(this, UpdateUser);

      this.payload = payload;
    };

    UpdateUser.type = '[Identity] Update User';

    if (false) {}

    var GetUserRoles =
    /**
     * @param {?} payload
     */
    function GetUserRoles(payload) {
      _classCallCheck(this, GetUserRoles);

      this.payload = payload;
    };

    GetUserRoles.type = '[Identity] Get User Roles';

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/services/identity.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var IdentityService =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} rest
       */
      function IdentityService(rest) {
        _classCallCheck(this, IdentityService);

        this.rest = rest;
      }
      /**
       * @param {?=} params
       * @return {?}
       */


      _createClass(IdentityService, [{
        key: "getRoles",
        value: function getRoles() {
          var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] :
          /** @type {?} */
          {};

          /** @type {?} */
          var request = {
            method: 'GET',
            url: '/api/identity/roles',
            params: params
          };
          return this.rest.request(request);
        }
        /**
         * @param {?} id
         * @return {?}
         */

      }, {
        key: "getRoleById",
        value: function getRoleById(id) {
          /** @type {?} */
          var request = {
            method: 'GET',
            url: "/api/identity/roles/".concat(id)
          };
          return this.rest.request(request);
        }
        /**
         * @param {?} id
         * @return {?}
         */

      }, {
        key: "deleteRole",
        value: function deleteRole(id) {
          /** @type {?} */
          var request = {
            method: 'DELETE',
            url: "/api/identity/roles/".concat(id)
          };
          return this.rest.request(request);
        }
        /**
         * @param {?} body
         * @return {?}
         */

      }, {
        key: "createRole",
        value: function createRole(body) {
          /** @type {?} */
          var request = {
            method: 'POST',
            url: '/api/identity/roles',
            body: body
          };
          return this.rest.request(request);
        }
        /**
         * @param {?} body
         * @return {?}
         */

      }, {
        key: "updateRole",
        value: function updateRole(body) {
          /** @type {?} */
          var url = "/api/identity/roles/".concat(body.id);
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
         * @param {?=} params
         * @return {?}
         */

      }, {
        key: "getUsers",
        value: function getUsers() {
          var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] :
          /** @type {?} */
          {};

          /** @type {?} */
          var request = {
            method: 'GET',
            url: '/api/identity/users',
            params: params
          };
          return this.rest.request(request);
        }
        /**
         * @param {?} id
         * @return {?}
         */

      }, {
        key: "getUserById",
        value: function getUserById(id) {
          /** @type {?} */
          var request = {
            method: 'GET',
            url: "/api/identity/users/".concat(id)
          };
          return this.rest.request(request);
        }
        /**
         * @param {?} id
         * @return {?}
         */

      }, {
        key: "getUserRoles",
        value: function getUserRoles(id) {
          /** @type {?} */
          var request = {
            method: 'GET',
            url: "/api/identity/users/".concat(id, "/roles")
          };
          return this.rest.request(request);
        }
        /**
         * @param {?} id
         * @return {?}
         */

      }, {
        key: "deleteUser",
        value: function deleteUser(id) {
          /** @type {?} */
          var request = {
            method: 'DELETE',
            url: "/api/identity/users/".concat(id)
          };
          return this.rest.request(request);
        }
        /**
         * @param {?} body
         * @return {?}
         */

      }, {
        key: "createUser",
        value: function createUser(body) {
          /** @type {?} */
          var request = {
            method: 'POST',
            url: '/api/identity/users',
            body: body
          };
          return this.rest.request(request);
        }
        /**
         * @param {?} body
         * @return {?}
         */

      }, {
        key: "updateUser",
        value: function updateUser(body) {
          /** @type {?} */
          var url = "/api/identity/users/".concat(body.id);
          delete body.id;
          /** @type {?} */

          var request = {
            method: 'PUT',
            url: url,
            body: body
          };
          return this.rest.request(request);
        }
      }]);

      return IdentityService;
    }();

    IdentityService.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    IdentityService.ctorParameters = function () {
      return [{
        type: _abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["RestService"]
      }];
    };
    /** @nocollapse */


    IdentityService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function IdentityService_Factory() {
        return new IdentityService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["RestService"]));
      },
      token: IdentityService,
      providedIn: "root"
    });

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/states/identity.state.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var IdentityState =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} identityService
       */
      function IdentityState(identityService) {
        _classCallCheck(this, IdentityState);

        this.identityService = identityService;
      }
      /**
       * @param {?} __0
       * @return {?}
       */


      _createClass(IdentityState, [{
        key: "getRoles",

        /**
         * @param {?} __0
         * @param {?} __1
         * @return {?}
         */
        value: function getRoles(_ref, _ref2) {
          var patchState = _ref.patchState;
          var payload = _ref2.payload;
          return this.identityService.getRoles(payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(
          /**
          * @param {?} roles
          * @return {?}
          */
          function (roles) {
            return patchState({
              roles: roles
            });
          }));
        }
        /**
         * @param {?} __0
         * @param {?} __1
         * @return {?}
         */

      }, {
        key: "getRole",
        value: function getRole(_ref3, _ref4) {
          var patchState = _ref3.patchState;
          var payload = _ref4.payload;
          return this.identityService.getRoleById(payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(
          /**
          * @param {?} selectedRole
          * @return {?}
          */
          function (selectedRole) {
            return patchState({
              selectedRole: selectedRole
            });
          }));
        }
        /**
         * @param {?} _
         * @param {?} __1
         * @return {?}
         */

      }, {
        key: "deleteRole",
        value: function deleteRole(_, _ref5) {
          var payload = _ref5.payload;
          return this.identityService.deleteRole(payload);
        }
        /**
         * @param {?} _
         * @param {?} __1
         * @return {?}
         */

      }, {
        key: "addRole",
        value: function addRole(_, _ref6) {
          var payload = _ref6.payload;
          return this.identityService.createRole(payload);
        }
        /**
         * @param {?} __0
         * @param {?} __1
         * @return {?}
         */

      }, {
        key: "updateRole",
        value: function updateRole(_ref7, _ref8) {
          var getState = _ref7.getState;
          var payload = _ref8.payload;
          return this.identityService.updateRole(Object.assign({}, getState().selectedRole, payload));
        }
        /**
         * @param {?} __0
         * @param {?} __1
         * @return {?}
         */

      }, {
        key: "getUsers",
        value: function getUsers(_ref9, _ref10) {
          var patchState = _ref9.patchState;
          var payload = _ref10.payload;
          return this.identityService.getUsers(payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(
          /**
          * @param {?} users
          * @return {?}
          */
          function (users) {
            return patchState({
              users: users
            });
          }));
        }
        /**
         * @param {?} __0
         * @param {?} __1
         * @return {?}
         */

      }, {
        key: "getUser",
        value: function getUser(_ref11, _ref12) {
          var patchState = _ref11.patchState;
          var payload = _ref12.payload;
          return this.identityService.getUserById(payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(
          /**
          * @param {?} selectedUser
          * @return {?}
          */
          function (selectedUser) {
            return patchState({
              selectedUser: selectedUser
            });
          }));
        }
        /**
         * @param {?} _
         * @param {?} __1
         * @return {?}
         */

      }, {
        key: "deleteUser",
        value: function deleteUser(_, _ref13) {
          var payload = _ref13.payload;
          return this.identityService.deleteUser(payload);
        }
        /**
         * @param {?} _
         * @param {?} __1
         * @return {?}
         */

      }, {
        key: "addUser",
        value: function addUser(_, _ref14) {
          var payload = _ref14.payload;
          return this.identityService.createUser(payload);
        }
        /**
         * @param {?} __0
         * @param {?} __1
         * @return {?}
         */

      }, {
        key: "updateUser",
        value: function updateUser(_ref15, _ref16) {
          var getState = _ref15.getState;
          var payload = _ref16.payload;
          return this.identityService.updateUser(Object.assign({}, getState().selectedUser, payload));
        }
        /**
         * @param {?} __0
         * @param {?} __1
         * @return {?}
         */

      }, {
        key: "getUserRoles",
        value: function getUserRoles(_ref17, _ref18) {
          var patchState = _ref17.patchState;
          var payload = _ref18.payload;
          return this.identityService.getUserRoles(payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["pluck"])('items'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(
          /**
          * @param {?} selectedUserRoles
          * @return {?}
          */
          function (selectedUserRoles) {
            return patchState({
              selectedUserRoles: selectedUserRoles
            });
          }));
        }
      }], [{
        key: "getRoles",
        value: function getRoles(_ref19) {
          var roles = _ref19.roles;
          return roles.items || [];
        }
        /**
         * @param {?} __0
         * @return {?}
         */

      }, {
        key: "getRolesTotalCount",
        value: function getRolesTotalCount(_ref20) {
          var roles = _ref20.roles;
          return roles.totalCount || 0;
        }
        /**
         * @param {?} __0
         * @return {?}
         */

      }, {
        key: "getUsers",
        value: function getUsers(_ref21) {
          var users = _ref21.users;
          return users.items || [];
        }
        /**
         * @param {?} __0
         * @return {?}
         */

      }, {
        key: "getUsersTotalCount",
        value: function getUsersTotalCount(_ref22) {
          var users = _ref22.users;
          return users.totalCount || 0;
        }
      }]);

      return IdentityState;
    }();

    IdentityState.ctorParameters = function () {
      return [{
        type: IdentityService
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(GetRoles), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:paramtypes", [Object, GetRoles]), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:returntype", void 0)], IdentityState.prototype, "getRoles", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(GetRoleById), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:paramtypes", [Object, GetRoleById]), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:returntype", void 0)], IdentityState.prototype, "getRole", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(DeleteRole), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:paramtypes", [Object, GetRoleById]), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:returntype", void 0)], IdentityState.prototype, "deleteRole", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(CreateRole), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:paramtypes", [Object, CreateRole]), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:returntype", void 0)], IdentityState.prototype, "addRole", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(UpdateRole), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:paramtypes", [Object, UpdateRole]), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:returntype", void 0)], IdentityState.prototype, "updateRole", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(GetUsers), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:paramtypes", [Object, GetUsers]), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:returntype", void 0)], IdentityState.prototype, "getUsers", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(GetUserById), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:paramtypes", [Object, GetUserById]), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:returntype", void 0)], IdentityState.prototype, "getUser", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(DeleteUser), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:paramtypes", [Object, GetUserById]), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:returntype", void 0)], IdentityState.prototype, "deleteUser", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(CreateUser), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:paramtypes", [Object, CreateUser]), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:returntype", void 0)], IdentityState.prototype, "addUser", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(UpdateUser), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:paramtypes", [Object, UpdateUser]), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:returntype", void 0)], IdentityState.prototype, "updateUser", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(GetUserRoles), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:paramtypes", [Object, GetUserRoles]), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:returntype", void 0)], IdentityState.prototype, "getUserRoles", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Selector"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:paramtypes", [Object]), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:returntype", Array)], IdentityState, "getRoles", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Selector"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:paramtypes", [Object]), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:returntype", Number)], IdentityState, "getRolesTotalCount", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Selector"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:paramtypes", [Object]), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:returntype", Array)], IdentityState, "getUsers", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Selector"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:paramtypes", [Object]), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:returntype", Number)], IdentityState, "getUsersTotalCount", null);
    IdentityState = Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["State"])({
      name: 'IdentityState',
      defaults:
      /** @type {?} */
      {
        roles: {},
        selectedRole: {},
        users: {},
        selectedUser: {}
      }
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:paramtypes", [IdentityService])], IdentityState);

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/roles/roles.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var RolesComponent =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} confirmationService
       * @param {?} fb
       * @param {?} store
       */
      function RolesComponent(confirmationService, fb, store) {
        _classCallCheck(this, RolesComponent);

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


      _createClass(RolesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.get();
        }
        /**
         * @return {?}
         */

      }, {
        key: "createForm",
        value: function createForm() {
          this.form = this.fb.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({
              value: this.selected.name || '',
              disabled: this.selected.isStatic
            }, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(256)]),
            isDefault: [this.selected.isDefault || false],
            isPublic: [this.selected.isPublic || false]
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "openModal",
        value: function openModal() {
          this.createForm();
          this.isModalVisible = true;
        }
        /**
         * @return {?}
         */

      }, {
        key: "add",
        value: function add() {
          this.selected =
          /** @type {?} */
          {};
          this.openModal();
        }
        /**
         * @param {?} id
         * @return {?}
         */

      }, {
        key: "edit",
        value: function edit(id) {
          var _this = this;

          this.store.dispatch(new GetRoleById(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["pluck"])('IdentityState', 'selectedRole')).subscribe(
          /**
          * @param {?} selectedRole
          * @return {?}
          */
          function (selectedRole) {
            _this.selected = selectedRole;

            _this.openModal();
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "save",
        value: function save() {
          var _this2 = this;

          if (!this.form.valid) return;
          this.modalBusy = true;
          this.store.dispatch(this.selected.id ? new UpdateRole(Object.assign({}, this.selected, this.form.value, {
            id: this.selected.id
          })) : new CreateRole(this.form.value)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(
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
            _this2.isModalVisible = false;

            _this2.get();
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
          var _this3 = this;

          this.confirmationService.warn('AbpIdentity::RoleDeletionConfirmationMessage', 'AbpIdentity::AreYouSure', {
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
                _this3.store.dispatch(new DeleteRole(id)).subscribe(
                /**
                * @return {?}
                */
                function () {
                  return _this3.get();
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
          var _this4 = this;

          this.loading = true;
          this.store.dispatch(new GetRoles(this.pageQuery)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(
          /**
          * @return {?}
          */
          function () {
            return _this4.loading = false;
          })).subscribe();
        }
        /**
         * @return {?}
         */

      }, {
        key: "onClickSaveButton",
        value: function onClickSaveButton() {
          this.formRef.nativeElement.dispatchEvent(new Event('submit', {
            bubbles: true,
            cancelable: true
          }));
        }
      }]);

      return RolesComponent;
    }();

    RolesComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
      args: [{
        selector: 'abp-roles',
        template: "<div id=\"identity-roles-wrapper\" class=\"card\">\n  <div class=\"card-header\">\n    <div class=\"row\">\n      <div class=\"col col-md-6\">\n        <h5 class=\"card-title\">{{ 'AbpIdentity::Roles' | abpLocalization }}</h5>\n      </div>\n      <div class=\"text-right col col-md-6\">\n        <button\n          *abpPermission=\"'AbpIdentity.Roles.Create'\"\n          id=\"create-role\"\n          class=\"btn btn-primary\"\n          type=\"button\"\n          (click)=\"add()\"\n        >\n          <i class=\"fa fa-plus mr-1\"></i>\n          <span>{{ 'AbpIdentity::NewRole' | abpLocalization }}</span>\n        </button>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"card-body\">\n    <p-table\n      *ngIf=\"[150, 0] as columnWidths\"\n      [value]=\"data$ | async\"\n      [abpTableSort]=\"{ key: sortKey, order: sortOrder }\"\n      [lazy]=\"true\"\n      [lazyLoadOnInit]=\"false\"\n      [paginator]=\"true\"\n      [rows]=\"10\"\n      [totalRecords]=\"totalCount$ | async\"\n      [loading]=\"loading\"\n      [resizableColumns]=\"true\"\n      [scrollable]=\"true\"\n      (onLazyLoad)=\"onPageChange($event)\"\n    >\n      <ng-template pTemplate=\"colgroup\">\n        <colgroup>\n          <col *ngFor=\"let width of columnWidths\" [ngStyle]=\"{ 'width.px': width || undefined }\" />\n        </colgroup>\n      </ng-template>\n      <ng-template pTemplate=\"emptymessage\" let-columns>\n        <tr\n          abp-table-empty-message\n          [attr.colspan]=\"columnWidths.length\"\n          localizationResource=\"AbpIdentity\"\n          localizationProp=\"NoDataAvailableInDatatable\"\n        ></tr>\n      </ng-template>\n      <ng-template pTemplate=\"header\" let-columns>\n        <tr>\n          <th>{{ 'AbpIdentity::Actions' | abpLocalization }}</th>\n          <th pResizableColumn (click)=\"sortOrderIcon.sort('name')\">\n            {{ 'AbpIdentity::RoleName' | abpLocalization }}\n            <abp-sort-order-icon\n              #sortOrderIcon\n              key=\"name\"\n              [(selectedKey)]=\"sortKey\"\n              [(order)]=\"sortOrder\"\n            ></abp-sort-order-icon>\n          </th>\n        </tr>\n      </ng-template>\n      <ng-template pTemplate=\"body\" let-data>\n        <tr>\n          <td class=\"text-center\">\n            <div ngbDropdown container=\"body\" class=\"d-inline-block\">\n              <button\n                class=\"btn btn-primary btn-sm dropdown-toggle\"\n                data-toggle=\"dropdown\"\n                aria-haspopup=\"true\"\n                ngbDropdownToggle\n              >\n                <i class=\"fa fa-cog mr-1\"></i>{{ 'AbpIdentity::Actions' | abpLocalization }}\n              </button>\n              <div ngbDropdownMenu>\n                <button\n                  *abpPermission=\"'AbpIdentity.Roles.Update'\"\n                  ngbDropdownItem\n                  (click)=\"edit(data.id)\"\n                >\n                  {{ 'AbpIdentity::Edit' | abpLocalization }}\n                </button>\n                <button\n                  *abpPermission=\"'AbpIdentity.Roles.ManagePermissions'\"\n                  ngbDropdownItem\n                  (click)=\"providerKey = data.name; visiblePermissions = true\"\n                >\n                  {{ 'AbpIdentity::Permissions' | abpLocalization }}\n                </button>\n                <button\n                  *abpPermission=\"'AbpIdentity.Roles.Delete'\"\n                  ngbDropdownItem\n                  (click)=\"delete(data.id, data.name)\"\n                >\n                  {{ 'AbpIdentity::Delete' | abpLocalization }}\n                </button>\n              </div>\n            </div>\n          </td>\n          <td>\n            {{ data.name\n            }}<span *ngIf=\"data.isDefault\" class=\"badge badge-pill badge-success ml-1\">{{\n              'AbpIdentity::DisplayName:IsDefault' | abpLocalization\n            }}</span>\n            <span *ngIf=\"data.isPublic\" class=\"badge badge-pill badge-info ml-1\">{{\n              'AbpIdentity::DisplayName:IsPublic' | abpLocalization\n            }}</span>\n          </td>\n        </tr>\n      </ng-template>\n    </p-table>\n  </div>\n</div>\n\n<abp-modal size=\"md\" [(visible)]=\"isModalVisible\" [busy]=\"modalBusy\">\n  <ng-template #abpHeader>\n    <h3>{{ (selected?.id ? 'AbpIdentity::Edit' : 'AbpIdentity::NewRole') | abpLocalization }}</h3>\n  </ng-template>\n\n  <ng-template #abpBody>\n    <form #formRef [formGroup]=\"form\" (ngSubmit)=\"save()\" validateOnSubmit>\n      <div class=\"form-group\">\n        <label for=\"role-name\">{{ 'AbpIdentity::RoleName' | abpLocalization }}</label\n        ><span> * </span>\n        <input autofocus type=\"text\" id=\"role-name\" class=\"form-control\" formControlName=\"name\" />\n      </div>\n\n      <div class=\"custom-checkbox custom-control mb-2\">\n        <input\n          type=\"checkbox\"\n          id=\"role-is-default\"\n          class=\"custom-control-input\"\n          formControlName=\"isDefault\"\n        />\n        <label class=\"custom-control-label\" for=\"role-is-default\">{{\n          'AbpIdentity::DisplayName:IsDefault' | abpLocalization\n        }}</label>\n      </div>\n\n      <div class=\"custom-checkbox custom-control mb-2\">\n        <input\n          type=\"checkbox\"\n          id=\"role-is-public\"\n          class=\"custom-control-input\"\n          formControlName=\"isPublic\"\n        />\n        <label class=\"custom-control-label\" for=\"role-is-public\">{{\n          'AbpIdentity::DisplayName:IsPublic' | abpLocalization\n        }}</label>\n      </div>\n    </form>\n  </ng-template>\n\n  <ng-template #abpFooter>\n    <button type=\"button\" class=\"btn btn-secondary\" #abpClose>\n      {{ 'AbpIdentity::Cancel' | abpLocalization }}\n    </button>\n    <abp-button iconClass=\"fa fa-check\" [disabled]=\"form?.invalid\" (click)=\"onClickSaveButton()\">{{\n      'AbpIdentity::Save' | abpLocalization\n    }}</abp-button>\n  </ng-template>\n</abp-modal>\n\n<abp-permission-management\n  [(visible)]=\"visiblePermissions\"\n  providerName=\"R\"\n  [providerKey]=\"providerKey\"\n  [hideBadges]=\"true\"\n>\n</abp-permission-management>\n"
      }]
    }];
    /** @nocollapse */

    RolesComponent.ctorParameters = function () {
      return [{
        type: _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_4__["ConfirmationService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
      }, {
        type: _ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
      }];
    };

    RolesComponent.propDecorators = {
      formRef: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
        args: ['formRef', {
          static: false,
          read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }]
      }]
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(IdentityState.getRoles), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", rxjs__WEBPACK_IMPORTED_MODULE_6__["Observable"])], RolesComponent.prototype, "data$", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(IdentityState.getRolesTotalCount), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", rxjs__WEBPACK_IMPORTED_MODULE_6__["Observable"])], RolesComponent.prototype, "totalCount$", void 0);

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/users/users.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var UsersComponent =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} confirmationService
       * @param {?} fb
       * @param {?} store
       */
      function UsersComponent(confirmationService, fb, store) {
        _classCallCheck(this, UsersComponent);

        this.confirmationService = confirmationService;
        this.fb = fb;
        this.store = store;
        this.visiblePermissions = false;
        this.pageQuery = {};
        this.loading = false;
        this.modalBusy = false;
        this.sortOrder = '';
        this.sortKey = '';
        this.passwordRulesArr =
        /** @type {?} */
        [];
        this.requiredPasswordLength = 1;

        this.trackByFn =
        /**
        * @param {?} index
        * @param {?} item
        * @return {?}
        */
        function (index, item) {
          return Object.keys(item)[0] || index;
        };
      }
      /**
       * @return {?}
       */


      _createClass(UsersComponent, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {
          this.get();
          /** @type {?} */

          var passwordRules = this.store.selectSnapshot(_abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["ConfigState"].getSettings('Identity.Password'));

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

      }, {
        key: "onSearch",
        value: function onSearch(value) {
          this.pageQuery.filter = value;
          this.get();
        }
        /**
         * @return {?}
         */

      }, {
        key: "buildForm",
        value: function buildForm() {
          var _this5 = this;

          this.store.dispatch(new GetRoles()).subscribe(
          /**
          * @return {?}
          */
          function () {
            _this5.roles = _this5.store.selectSnapshot(IdentityState.getRoles);
            _this5.form = _this5.fb.group({
              userName: [_this5.selected.userName || '', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(256)]],
              email: [_this5.selected.email || '', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(256)]],
              name: [_this5.selected.name || '', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(64)]],
              surname: [_this5.selected.surname || '', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(64)]],
              phoneNumber: [_this5.selected.phoneNumber || '', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(16)]],
              lockoutEnabled: [_this5.selected.lockoutEnabled || (_this5.selected.id ? false : true)],
              twoFactorEnabled: [_this5.selected.twoFactorEnabled || (_this5.selected.id ? false : true)],
              roleNames: _this5.fb.array(_this5.roles.map(
              /**
              * @param {?} role
              * @return {?}
              */
              function (role) {
                return _this5.fb.group(_defineProperty({}, role.name, [!!Object(snq__WEBPACK_IMPORTED_MODULE_9__["default"])(
                /**
                * @return {?}
                */
                function () {
                  return _this5.selectedUserRoles.find(
                  /**
                  * @param {?} userRole
                  * @return {?}
                  */
                  function (userRole) {
                    return userRole.id === role.id;
                  });
                })]));
              }))
            });
            /** @type {?} */

            var passwordValidators = [Object(_ngx_validate_core__WEBPACK_IMPORTED_MODULE_10__["validatePassword"])(_this5.passwordRulesArr), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(_this5.requiredPasswordLength), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(32)];

            _this5.form.addControl('password', new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [].concat(passwordValidators)));

            if (!_this5.selected.userName) {
              _this5.form.get('password').setValidators([].concat(passwordValidators, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]));

              _this5.form.get('password').updateValueAndValidity();
            }
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "openModal",
        value: function openModal() {
          this.buildForm();
          this.isModalVisible = true;
        }
        /**
         * @return {?}
         */

      }, {
        key: "add",
        value: function add() {
          this.selected =
          /** @type {?} */
          {};
          this.selectedUserRoles =
          /** @type {?} */
          [];
          this.openModal();
        }
        /**
         * @param {?} id
         * @return {?}
         */

      }, {
        key: "edit",
        value: function edit(id) {
          var _this6 = this;

          this.store.dispatch(new GetUserById(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(
          /**
          * @return {?}
          */
          function () {
            return _this6.store.dispatch(new GetUserRoles(id));
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["pluck"])('IdentityState'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1)).subscribe(
          /**
          * @param {?} state
          * @return {?}
          */
          function (state) {
            _this6.selected = state.selectedUser;
            _this6.selectedUserRoles = state.selectedUserRoles;

            _this6.openModal();
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "save",
        value: function save() {
          var _this7 = this;

          if (!this.form.valid || this.modalBusy) return;
          this.modalBusy = true;
          var roleNames = this.form.value.roleNames;
          /** @type {?} */

          var mappedRoleNames = Object(snq__WEBPACK_IMPORTED_MODULE_9__["default"])(
          /**
          * @return {?}
          */
          function () {
            return roleNames.filter(
            /**
            * @param {?} role
            * @return {?}
            */
            function (role) {
              return !!role[Object.keys(role)[0]];
            }).map(
            /**
            * @param {?} role
            * @return {?}
            */
            function (role) {
              return Object.keys(role)[0];
            });
          }, []);
          this.store.dispatch(this.selected.id ? new UpdateUser(Object.assign({}, this.selected, this.form.value, {
            id: this.selected.id,
            roleNames: mappedRoleNames
          })) : new CreateUser(Object.assign({}, this.form.value, {
            roleNames: mappedRoleNames
          }))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(
          /**
          * @return {?}
          */
          function () {
            return _this7.modalBusy = false;
          })).subscribe(
          /**
          * @return {?}
          */
          function () {
            _this7.isModalVisible = false;

            _this7.get();
          });
        }
        /**
         * @param {?} id
         * @param {?} userName
         * @return {?}
         */

      }, {
        key: "delete",
        value: function _delete(id, userName) {
          var _this8 = this;

          this.confirmationService.warn('AbpIdentity::UserDeletionConfirmationMessage', 'AbpIdentity::AreYouSure', {
            messageLocalizationParams: [userName]
          }).subscribe(
          /**
          * @param {?} status
          * @return {?}
          */
          function (status) {
            if (status === "confirm"
            /* confirm */
            ) {
                _this8.store.dispatch(new DeleteUser(id)).subscribe(
                /**
                * @return {?}
                */
                function () {
                  return _this8.get();
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
          var _this9 = this;

          this.loading = true;
          this.store.dispatch(new GetUsers(this.pageQuery)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(
          /**
          * @return {?}
          */
          function () {
            return _this9.loading = false;
          })).subscribe();
        }
      }, {
        key: "roleGroups",
        get: function get() {
          var _this10 = this;

          return Object(snq__WEBPACK_IMPORTED_MODULE_9__["default"])(
          /**
          * @return {?}
          */
          function () {
            return (
              /** @type {?} */

              /** @type {?} */
              _this10.form.get('roleNames').controls
            );
          }, []);
        }
      }]);

      return UsersComponent;
    }();

    UsersComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
      args: [{
        selector: 'abp-users',
        template: "<div id=\"identity-roles-wrapper\" class=\"card\">\n  <div class=\"card-header\">\n    <div class=\"row\">\n      <div class=\"col col-md-6\">\n        <h5 class=\"card-title\">{{ 'AbpIdentity::Users' | abpLocalization }}</h5>\n      </div>\n      <div class=\"text-right col col-md-6\">\n        <button\n          *abpPermission=\"'AbpIdentity.Users.Create'\"\n          id=\"create-role\"\n          class=\"btn btn-primary\"\n          type=\"button\"\n          (click)=\"add()\"\n        >\n          <i class=\"fa fa-plus mr-1\"></i> <span>{{ 'AbpIdentity::NewUser' | abpLocalization }}</span>\n        </button>\n      </div>\n    </div>\n  </div>\n  <div class=\"card-body\">\n    <div id=\"data-tables-table-filter\" class=\"data-tables-filter\">\n      <label\n        ><input\n          type=\"search\"\n          class=\"form-control form-control-sm\"\n          [placeholder]=\"'AbpUi::PagerSearch' | abpLocalization\"\n          (input.debounce)=\"onSearch($event.target.value)\"\n      /></label>\n    </div>\n    <p-table\n      *ngIf=\"[150, 250, 250, 250] as columnWidths\"\n      [value]=\"data$ | async\"\n      [abpTableSort]=\"{ key: sortKey, order: sortOrder }\"\n      [lazy]=\"true\"\n      [lazyLoadOnInit]=\"false\"\n      [paginator]=\"true\"\n      [rows]=\"10\"\n      [totalRecords]=\"totalCount$ | async\"\n      [loading]=\"loading\"\n      [resizableColumns]=\"true\"\n      [scrollable]=\"true\"\n      (onLazyLoad)=\"onPageChange($event)\"\n    >\n      <ng-template pTemplate=\"colgroup\">\n        <colgroup>\n          <col *ngFor=\"let width of columnWidths\" [ngStyle]=\"{ 'width.px': width || undefined }\" />\n        </colgroup>\n      </ng-template>\n      <ng-template pTemplate=\"emptymessage\" let-columns>\n        <tr\n          abp-table-empty-message\n          [attr.colspan]=\"columnWidths.length\"\n          localizationResource=\"AbpIdentity\"\n          localizationProp=\"NoDataAvailableInDatatable\"\n        ></tr>\n      </ng-template>\n      <ng-template pTemplate=\"header\">\n        <tr>\n          <th>{{ 'AbpIdentity::Actions' | abpLocalization }}</th>\n          <th pResizableColumn (click)=\"sortOrderIcon.sort('userName')\">\n            {{ 'AbpIdentity::UserName' | abpLocalization }}\n            <abp-sort-order-icon #sortOrderIcon key=\"userName\" [(selectedKey)]=\"sortKey\" [(order)]=\"sortOrder\">\n            </abp-sort-order-icon>\n          </th>\n          <th pResizableColumn (click)=\"sortOrderIcon.sort('email')\">\n            {{ 'AbpIdentity::EmailAddress' | abpLocalization }}\n            <abp-sort-order-icon key=\"email\" [(selectedKey)]=\"sortKey\" [(order)]=\"sortOrder\"></abp-sort-order-icon>\n          </th>\n          <th pResizableColumn (click)=\"sortOrderIcon.sort('phoneNumber')\">\n            {{ 'AbpIdentity::PhoneNumber' | abpLocalization }}\n            <abp-sort-order-icon key=\"phoneNumber\" [(selectedKey)]=\"sortKey\" [(order)]=\"sortOrder\">\n            </abp-sort-order-icon>\n          </th>\n        </tr>\n      </ng-template>\n      <ng-template pTemplate=\"body\" let-data>\n        <tr>\n          <td class=\"text-center\">\n            <div ngbDropdown container=\"body\" class=\"d-inline-block\">\n              <button\n                class=\"btn btn-primary btn-sm dropdown-toggle\"\n                data-toggle=\"dropdown\"\n                aria-haspopup=\"true\"\n                ngbDropdownToggle\n              >\n                <i class=\"fa fa-cog mr-1\"></i>{{ 'AbpIdentity::Actions' | abpLocalization }}\n              </button>\n              <div ngbDropdownMenu>\n                <button *abpPermission=\"'AbpIdentity.Users.Update'\" ngbDropdownItem (click)=\"edit(data.id)\">\n                  {{ 'AbpIdentity::Edit' | abpLocalization }}\n                </button>\n                <button\n                  *abpPermission=\"'AbpIdentity.Users.ManagePermissions'\"\n                  ngbDropdownItem\n                  (click)=\"providerKey = data.id; visiblePermissions = true\"\n                >\n                  {{ 'AbpIdentity::Permissions' | abpLocalization }}\n                </button>\n                <button\n                  *abpPermission=\"'AbpIdentity.Users.Delete'\"\n                  ngbDropdownItem\n                  (click)=\"delete(data.id, data.userName)\"\n                >\n                  {{ 'AbpIdentity::Delete' | abpLocalization }}\n                </button>\n              </div>\n            </div>\n          </td>\n          <td>{{ data.userName }}</td>\n          <td>{{ data.email }}</td>\n          <td>{{ data.phoneNumber }}</td>\n        </tr>\n      </ng-template>\n    </p-table>\n  </div>\n</div>\n\n<abp-modal [(visible)]=\"isModalVisible\" [busy]=\"modalBusy\" (disappear)=\"form = null\">\n  <ng-template #abpHeader>\n    <h3>{{ (selected?.id ? 'AbpIdentity::Edit' : 'AbpIdentity::NewUser') | abpLocalization }}</h3>\n  </ng-template>\n\n  <ng-template #abpBody>\n    <ng-template #loaderRef\n      ><div class=\"text-center\"><i class=\"fa fa-pulse fa-spinner\"></i></div\n    ></ng-template>\n\n    <form *ngIf=\"form; else loaderRef\" [formGroup]=\"form\" (ngSubmit)=\"save()\">\n      <ngb-tabset>\n        <ngb-tab [title]=\"'AbpIdentity::UserInformations' | abpLocalization\">\n          <ng-template ngbTabContent>\n            <div class=\"mt-2 fade-in-top\">\n              <div class=\"form-group\">\n                <label for=\"user-name\">{{ 'AbpIdentity::UserName' | abpLocalization }}</label\n                ><span> * </span>\n                <input type=\"text\" id=\"user-name\" class=\"form-control\" formControlName=\"userName\" autofocus />\n              </div>\n\n              <div class=\"form-group\">\n                <label for=\"name\">{{ 'AbpIdentity::DisplayName:Name' | abpLocalization }}</label>\n                <input type=\"text\" id=\"name\" class=\"form-control\" formControlName=\"name\" />\n              </div>\n\n              <div class=\"form-group\">\n                <label for=\"surname\">{{ 'AbpIdentity::DisplayName:Surname' | abpLocalization }}</label>\n                <input type=\"text\" id=\"surname\" class=\"form-control\" formControlName=\"surname\" />\n              </div>\n\n              <div class=\"form-group\">\n                <label for=\"password\">{{ 'AbpIdentity::Password' | abpLocalization }}</label\n                ><span *ngIf=\"!selected.userName\"> * </span>\n                <input\n                  type=\"password\"\n                  id=\"password\"\n                  autocomplete=\"new-password\"\n                  class=\"form-control\"\n                  formControlName=\"password\"\n                />\n              </div>\n\n              <div class=\"form-group\">\n                <label for=\"email\">{{ 'AbpIdentity::EmailAddress' | abpLocalization }}</label\n                ><span> * </span>\n                <input type=\"text\" id=\"email\" class=\"form-control\" formControlName=\"email\" />\n              </div>\n\n              <div class=\"form-group\">\n                <label for=\"phone-number\">{{ 'AbpIdentity::PhoneNumber' | abpLocalization }}</label>\n                <input type=\"text\" id=\"phone-number\" class=\"form-control\" formControlName=\"phoneNumber\" />\n              </div>\n\n              <div class=\"custom-checkbox custom-control mb-2\">\n                <input\n                  type=\"checkbox\"\n                  id=\"lockout-checkbox\"\n                  class=\"custom-control-input\"\n                  formControlName=\"lockoutEnabled\"\n                />\n                <label class=\"custom-control-label\" for=\"lockout-checkbox\">{{\n                  'AbpIdentity::DisplayName:LockoutEnabled' | abpLocalization\n                }}</label>\n              </div>\n\n              <div class=\"custom-checkbox custom-control mb-2\">\n                <input\n                  type=\"checkbox\"\n                  id=\"two-factor-checkbox\"\n                  class=\"custom-control-input\"\n                  formControlName=\"twoFactorEnabled\"\n                />\n                <label class=\"custom-control-label\" for=\"two-factor-checkbox\">{{\n                  'AbpIdentity::DisplayName:TwoFactorEnabled' | abpLocalization\n                }}</label>\n              </div>\n            </div>\n          </ng-template>\n        </ngb-tab>\n        <ngb-tab [title]=\"'AbpIdentity::Roles' | abpLocalization\">\n          <ng-template ngbTabContent>\n            <div class=\"mt-2 fade-in-top\">\n              <div\n                *ngFor=\"let roleGroup of roleGroups; let i = index; trackBy: trackByFn\"\n                class=\"custom-checkbox custom-control mb-2\"\n              >\n                <input\n                  type=\"checkbox\"\n                  name=\"Roles[0].IsAssigned\"\n                  value=\"true\"\n                  class=\"custom-control-input\"\n                  [attr.id]=\"'roles-' + i\"\n                  [formControl]=\"roleGroup.controls[roles[i].name]\"\n                />\n                <label class=\"custom-control-label\" [attr.for]=\"'roles-' + i\">{{ roles[i].name }}</label>\n              </div>\n            </div>\n          </ng-template>\n        </ngb-tab>\n      </ngb-tabset>\n    </form>\n  </ng-template>\n\n  <ng-template #abpFooter>\n    <button type=\"button\" class=\"btn btn-secondary\" #abpClose>\n      {{ 'AbpIdentity::Cancel' | abpLocalization }}\n    </button>\n    <abp-button iconClass=\"fa fa-check\" (click)=\"save()\" [disabled]=\"form?.invalid\">{{\n      'AbpIdentity::Save' | abpLocalization\n    }}</abp-button>\n  </ng-template>\n</abp-modal>\n\n<abp-permission-management [(visible)]=\"visiblePermissions\" providerName=\"U\" [providerKey]=\"providerKey\">\n</abp-permission-management>\n"
      }]
    }];
    /** @nocollapse */

    UsersComponent.ctorParameters = function () {
      return [{
        type: _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_4__["ConfirmationService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
      }, {
        type: _ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
      }];
    };

    UsersComponent.propDecorators = {
      modalContent: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
        args: ['modalContent', {
          static: false
        }]
      }]
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(IdentityState.getUsers), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", rxjs__WEBPACK_IMPORTED_MODULE_6__["Observable"])], UsersComponent.prototype, "data$", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(IdentityState.getUsersTotalCount), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", rxjs__WEBPACK_IMPORTED_MODULE_6__["Observable"])], UsersComponent.prototype, "totalCount$", void 0);

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/identity-routing.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var ɵ0 = {
      requiredPolicy: 'AbpIdentity.Roles'
    },
        ɵ1 = {
      requiredPolicy: 'AbpIdentity.Users'
    };
    /** @type {?} */

    var routes = [{
      path: '',
      redirectTo: 'roles',
      pathMatch: 'full'
    }, {
      path: '',
      component: _abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["DynamicLayoutComponent"],
      canActivate: [_abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"], _abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["PermissionGuard"]],
      children: [{
        path: 'roles',
        component: RolesComponent,
        data: ɵ0
      }, {
        path: 'users',
        component: UsersComponent,
        data: ɵ1
      }]
    }];

    var IdentityRoutingModule = function IdentityRoutingModule() {
      _classCallCheck(this, IdentityRoutingModule);
    };

    IdentityRoutingModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
      args: [{
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"]]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/identity.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var IdentityModule = function IdentityModule() {
      _classCallCheck(this, IdentityModule);
    };

    IdentityModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
      args: [{
        declarations: [RolesComponent, UsersComponent],
        imports: [_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["NgxsModule"].forFeature([IdentityState]), _abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["CoreModule"], IdentityRoutingModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbTabsetModule"], _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_4__["ThemeSharedModule"], primeng_table__WEBPACK_IMPORTED_MODULE_13__["TableModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbDropdownModule"], _abp_ng_permission_management__WEBPACK_IMPORTED_MODULE_12__["PermissionManagementModule"], _ngx_validate_core__WEBPACK_IMPORTED_MODULE_10__["NgxValidateCoreModule"]]
      }]
    }];
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


    var IDENTITY_ROUTES = {
      routes:
      /** @type {?} */
      [{
        name: 'AbpUiNavigation::Menu:Administration',
        path: '',
        order: 1,
        wrapper: true
      }, {
        name: 'AbpIdentity::Menu:IdentityManagement',
        path: 'identity',
        order: 1,
        parentName: 'AbpUiNavigation::Menu:Administration',
        layout: "application"
        /* application */
        ,
        iconClass: 'fa fa-id-card-o',
        children: [{
          path: 'roles',
          name: 'AbpIdentity::Roles',
          order: 2,
          requiredPolicy: 'AbpIdentity.Roles'
        }, {
          path: 'users',
          name: 'AbpIdentity::Users',
          order: 1,
          requiredPolicy: 'AbpIdentity.Users'
        }]
      }]
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
      function State() {}

      Identity.State = State;

      if (false) {}
      /**
       * @record
       */


      function RoleSaveRequest() {}

      Identity.RoleSaveRequest = RoleSaveRequest;

      if (false) {}
      /**
       * @record
       */


      function RoleItem() {}

      Identity.RoleItem = RoleItem;

      if (false) {}
      /**
       * @record
       */


      function UserItem() {}

      Identity.UserItem = UserItem;

      if (false) {}
      /**
       * @record
       */


      function User() {}

      Identity.User = User;

      if (false) {}
      /**
       * @record
       */


      function UserSaveRequest() {}

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

    /***/

  },

  /***/
  "./node_modules/@abp/ng.permission-management/fesm2015/abp-ng.permission-management.js":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/@abp/ng.permission-management/fesm2015/abp-ng.permission-management.js ***!
    \*********************************************************************************************/

  /*! exports provided: GetPermissions, PermissionManagementComponent, PermissionManagementModule, PermissionManagementService, PermissionManagementState, PermissionManagementStateService, UpdatePermissions, ɵa, ɵb, ɵc, ɵd, ɵe */

  /***/
  function node_modulesAbpNgPermissionManagementFesm2015AbpNgPermissionManagementJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GetPermissions", function () {
      return GetPermissions;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PermissionManagementComponent", function () {
      return PermissionManagementComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PermissionManagementModule", function () {
      return PermissionManagementModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PermissionManagementService", function () {
      return PermissionManagementService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PermissionManagementState", function () {
      return PermissionManagementState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PermissionManagementStateService", function () {
      return PermissionManagementStateService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdatePermissions", function () {
      return UpdatePermissions;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵa", function () {
      return PermissionManagementComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵb", function () {
      return PermissionManagementState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵc", function () {
      return PermissionManagementService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵd", function () {
      return GetPermissions;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵe", function () {
      return UpdatePermissions;
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


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngxs/store */
    "./node_modules/@ngxs/store/fesm2015/ngxs-store.js");
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/actions/permission-management.actions.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var GetPermissions =
    /**
     * @param {?} payload
     */
    function GetPermissions(payload) {
      _classCallCheck(this, GetPermissions);

      this.payload = payload;
    };

    GetPermissions.type = '[PermissionManagement] Get Permissions';

    if (false) {}

    var UpdatePermissions =
    /**
     * @param {?} payload
     */
    function UpdatePermissions(payload) {
      _classCallCheck(this, UpdatePermissions);

      this.payload = payload;
    };

    UpdatePermissions.type = '[PermissionManagement] Update Permissions';

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/services/permission-management.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var PermissionManagementService =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} rest
       */
      function PermissionManagementService(rest) {
        _classCallCheck(this, PermissionManagementService);

        this.rest = rest;
      }
      /**
       * @param {?} params
       * @return {?}
       */


      _createClass(PermissionManagementService, [{
        key: "getPermissions",
        value: function getPermissions(params) {
          /** @type {?} */
          var request = {
            method: 'GET',
            url: '/api/abp/permissions',
            params: params
          };
          return this.rest.request(request);
        }
        /**
         * @param {?} __0
         * @return {?}
         */

      }, {
        key: "updatePermissions",
        value: function updatePermissions(_ref23) {
          var permissions = _ref23.permissions,
              providerKey = _ref23.providerKey,
              providerName = _ref23.providerName;

          /** @type {?} */
          var request = {
            method: 'PUT',
            url: '/api/abp/permissions',
            body: {
              permissions: permissions
            },
            params: {
              providerKey: providerKey,
              providerName: providerName
            }
          };
          return this.rest.request(request);
        }
      }]);

      return PermissionManagementService;
    }();

    PermissionManagementService.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    PermissionManagementService.ctorParameters = function () {
      return [{
        type: _abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["RestService"]
      }];
    };
    /** @nocollapse */


    PermissionManagementService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"])({
      factory: function PermissionManagementService_Factory() {
        return new PermissionManagementService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"])(_abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["RestService"]));
      },
      token: PermissionManagementService,
      providedIn: "root"
    });

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/states/permission-management.state.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var PermissionManagementState =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} permissionManagementService
       */
      function PermissionManagementState(permissionManagementService) {
        _classCallCheck(this, PermissionManagementState);

        this.permissionManagementService = permissionManagementService;
      }
      /**
       * @param {?} __0
       * @return {?}
       */


      _createClass(PermissionManagementState, [{
        key: "permissionManagementGet",

        /**
         * @param {?} __0
         * @param {?} __1
         * @return {?}
         */
        value: function permissionManagementGet(_ref24, _ref25) {
          var patchState = _ref24.patchState;
          var payload = _ref25.payload;
          return this.permissionManagementService.getPermissions(payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(
          /**
          * @param {?} permissionResponse
          * @return {?}
          */
          function (permissionResponse) {
            return patchState({
              permissionRes: permissionResponse
            });
          }));
        }
        /**
         * @param {?} _
         * @param {?} __1
         * @return {?}
         */

      }, {
        key: "permissionManagementUpdate",
        value: function permissionManagementUpdate(_, _ref26) {
          var payload = _ref26.payload;
          return this.permissionManagementService.updatePermissions(payload);
        }
      }], [{
        key: "getPermissionGroups",
        value: function getPermissionGroups(_ref27) {
          var permissionRes = _ref27.permissionRes;
          return permissionRes.groups || [];
        }
        /**
         * @param {?} __0
         * @return {?}
         */

      }, {
        key: "getEntityDisplayName",
        value: function getEntityDisplayName(_ref28) {
          var permissionRes = _ref28.permissionRes;
          return permissionRes.entityDisplayName;
        }
      }]);

      return PermissionManagementState;
    }();

    PermissionManagementState.ctorParameters = function () {
      return [{
        type: PermissionManagementService
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Action"])(GetPermissions), Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__metadata"])("design:paramtypes", [Object, GetPermissions]), Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__metadata"])("design:returntype", void 0)], PermissionManagementState.prototype, "permissionManagementGet", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Action"])(UpdatePermissions), Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__metadata"])("design:paramtypes", [Object, UpdatePermissions]), Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__metadata"])("design:returntype", void 0)], PermissionManagementState.prototype, "permissionManagementUpdate", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Selector"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__metadata"])("design:paramtypes", [Object]), Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__metadata"])("design:returntype", void 0)], PermissionManagementState, "getPermissionGroups", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Selector"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__metadata"])("design:paramtypes", [Object]), Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__metadata"])("design:returntype", String)], PermissionManagementState, "getEntityDisplayName", null);
    PermissionManagementState = Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["State"])({
      name: 'PermissionManagementState',
      defaults:
      /** @type {?} */
      {
        permissionRes: {}
      }
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__metadata"])("design:paramtypes", [PermissionManagementService])], PermissionManagementState);

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/permission-management.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var PermissionManagementComponent =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} store
       * @param {?} renderer
       */
      function PermissionManagementComponent(store, renderer) {
        _classCallCheck(this, PermissionManagementComponent);

        this.store = store;
        this.renderer = renderer;
        this.hideBadges = false;
        this.visibleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.permissions = [];
        this.selectThisTab = false;
        this.selectAllTab = false;
        this.modalBusy = false;

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
       * @return {?}
       */


      _createClass(PermissionManagementComponent, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {}
        /**
         * @param {?} name
         * @return {?}
         */

      }, {
        key: "getChecked",
        value: function getChecked(name) {
          return (this.permissions.find(
          /**
          * @param {?} per
          * @return {?}
          */
          function (per) {
            return per.name === name;
          }) || {
            isGranted: false
          }).isGranted;
        }
        /**
         * @param {?} grantedProviders
         * @return {?}
         */

      }, {
        key: "isGrantedByOtherProviderName",
        value: function isGrantedByOtherProviderName(grantedProviders) {
          var _this11 = this;

          if (grantedProviders.length) {
            return grantedProviders.findIndex(
            /**
            * @param {?} p
            * @return {?}
            */
            function (p) {
              return p.providerName !== _this11.providerName;
            }) > -1;
          }

          return false;
        }
        /**
         * @param {?} clickedPermission
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "onClickCheckbox",
        value: function onClickCheckbox(clickedPermission, value) {
          var _this12 = this;

          if (clickedPermission.isGranted && this.isGrantedByOtherProviderName(clickedPermission.grantedProviders)) return;
          setTimeout(
          /**
          * @return {?}
          */
          function () {
            _this12.permissions = _this12.permissions.map(
            /**
            * @param {?} per
            * @return {?}
            */
            function (per) {
              if (clickedPermission.name === per.name) {
                return Object.assign({}, per, {
                  isGranted: !per.isGranted
                });
              } else if (clickedPermission.name === per.parentName && clickedPermission.isGranted) {
                return Object.assign({}, per, {
                  isGranted: false
                });
              } else if (clickedPermission.parentName === per.name && !clickedPermission.isGranted) {
                return Object.assign({}, per, {
                  isGranted: true
                });
              }

              return per;
            });

            _this12.setTabCheckboxState();

            _this12.setGrantCheckboxState();
          }, 0);
        }
        /**
         * @return {?}
         */

      }, {
        key: "setTabCheckboxState",
        value: function setTabCheckboxState() {
          var _this13 = this;

          this.selectedGroupPermissions$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1)).subscribe(
          /**
          * @param {?} permissions
          * @return {?}
          */
          function (permissions) {
            /** @type {?} */
            var selectedPermissions = permissions.filter(
            /**
            * @param {?} per
            * @return {?}
            */
            function (per) {
              return per.isGranted;
            });
            /** @type {?} */

            var element =
            /** @type {?} */
            document.querySelector('#select-all-in-this-tabs');

            if (selectedPermissions.length === permissions.length) {
              element.indeterminate = false;
              _this13.selectThisTab = true;
            } else if (selectedPermissions.length === 0) {
              element.indeterminate = false;
              _this13.selectThisTab = false;
            } else {
              element.indeterminate = true;
            }
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "setGrantCheckboxState",
        value: function setGrantCheckboxState() {
          /** @type {?} */
          var selectedAllPermissions = this.permissions.filter(
          /**
          * @param {?} per
          * @return {?}
          */
          function (per) {
            return per.isGranted;
          });
          /** @type {?} */

          var checkboxElement =
          /** @type {?} */
          document.querySelector('#select-all-in-all-tabs');

          if (selectedAllPermissions.length === this.permissions.length) {
            checkboxElement.indeterminate = false;
            this.selectAllTab = true;
          } else if (selectedAllPermissions.length === 0) {
            checkboxElement.indeterminate = false;
            this.selectAllTab = false;
          } else {
            checkboxElement.indeterminate = true;
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "onClickSelectThisTab",
        value: function onClickSelectThisTab() {
          var _this14 = this;

          this.selectedGroupPermissions$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1)).subscribe(
          /**
          * @param {?} permissions
          * @return {?}
          */
          function (permissions) {
            permissions.forEach(
            /**
            * @param {?} permission
            * @return {?}
            */
            function (permission) {
              if (permission.isGranted && _this14.isGrantedByOtherProviderName(permission.grantedProviders)) return;
              /** @type {?} */

              var index = _this14.permissions.findIndex(
              /**
              * @param {?} per
              * @return {?}
              */
              function (per) {
                return per.name === permission.name;
              });

              _this14.permissions = [].concat(_toConsumableArray(_this14.permissions.slice(0, index)), [Object.assign({}, _this14.permissions[index], {
                isGranted: !_this14.selectThisTab
              })], _toConsumableArray(_this14.permissions.slice(index + 1)));
            });
          });
          this.setGrantCheckboxState();
        }
        /**
         * @return {?}
         */

      }, {
        key: "onClickSelectAll",
        value: function onClickSelectAll() {
          var _this15 = this;

          this.permissions = this.permissions.map(
          /**
          * @param {?} permission
          * @return {?}
          */
          function (permission) {
            return Object.assign({}, permission, {
              isGranted: _this15.isGrantedByOtherProviderName(permission.grantedProviders) || !_this15.selectAllTab
            });
          });
          this.selectThisTab = !this.selectAllTab;
        }
        /**
         * @param {?} group
         * @return {?}
         */

      }, {
        key: "onChangeGroup",
        value: function onChangeGroup(group) {
          this.selectedGroup = group;
          this.setTabCheckboxState();
        }
        /**
         * @return {?}
         */

      }, {
        key: "submit",
        value: function submit() {
          var _this16 = this;

          this.modalBusy = true;
          /** @type {?} */

          var unchangedPermissions = getPermissions(this.store.selectSnapshot(PermissionManagementState.getPermissionGroups));
          /** @type {?} */

          var changedPermissions = this.permissions.filter(
          /**
          * @param {?} per
          * @return {?}
          */
          function (per) {
            return unchangedPermissions.find(
            /**
            * @param {?} unchanged
            * @return {?}
            */
            function (unchanged) {
              return unchanged.name === per.name;
            }).isGranted === per.isGranted ? false : true;
          }).map(
          /**
          * @param {?} __0
          * @return {?}
          */
          function (_ref29) {
            var name = _ref29.name,
                isGranted = _ref29.isGranted;
            return {
              name: name,
              isGranted: isGranted
            };
          });

          if (changedPermissions.length) {
            this.store.dispatch(new UpdatePermissions({
              providerKey: this.providerKey,
              providerName: this.providerName,
              permissions: changedPermissions
            })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(
            /**
            * @return {?}
            */
            function () {
              return _this16.modalBusy = false;
            })).subscribe(
            /**
            * @return {?}
            */
            function () {
              _this16.visible = false;
            });
          } else {
            this.modalBusy = false;
            this.visible = false;
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "openModal",
        value: function openModal() {
          var _this17 = this;

          if (!this.providerKey || !this.providerName) {
            throw new Error('Provider Key and Provider Name are required.');
          }

          this.store.dispatch(new GetPermissions({
            providerKey: this.providerKey,
            providerName: this.providerName
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["pluck"])('PermissionManagementState', 'permissionRes')).subscribe(
          /**
          * @param {?} permissionRes
          * @return {?}
          */
          function (permissionRes) {
            _this17.selectedGroup = permissionRes.groups[0];
            _this17.permissions = getPermissions(permissionRes.groups);
            _this17.visible = true;
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "initModal",
        value: function initModal() {
          this.setTabCheckboxState();
          this.setGrantCheckboxState();
        }
        /**
         * @param {?} __0
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(_ref30) {
          var visible = _ref30.visible;
          if (!visible) return;

          if (visible.currentValue) {
            this.openModal();
          } else if (visible.currentValue === false && this.visible) {
            this.visible = false;
          }
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
          if (!this.selectedGroup) return;
          this._visible = value;
          this.visibleChange.emit(value);

          if (!value) {
            this.selectedGroup = null;
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "selectedGroupPermissions$",
        get: function get() {
          var _this18 = this;

          return this.groups$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(
          /**
          * @param {?} groups
          * @return {?}
          */
          function (groups) {
            return _this18.selectedGroup ? groups.find(
            /**
            * @param {?} group
            * @return {?}
            */
            function (group) {
              return group.name === _this18.selectedGroup.name;
            }).permissions : [];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(
          /**
          * @param {?} permissions
          * @return {?}
          */
          function (permissions) {
            return permissions.map(
            /**
            * @param {?} permission
            * @return {?}
            */
            function (permission) {
              return (
                /** @type {?} */

                /** @type {?} */
                Object.assign({}, permission, {
                  margin: findMargin(permissions, permission),
                  isGranted: _this18.permissions.find(
                  /**
                  * @param {?} per
                  * @return {?}
                  */
                  function (per) {
                    return per.name === permission.name;
                  }).isGranted
                })
              );
            });
          }));
        }
      }]);

      return PermissionManagementComponent;
    }();

    PermissionManagementComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
      args: [{
        selector: 'abp-permission-management',
        template: "<abp-modal [(visible)]=\"visible\" (init)=\"initModal()\" [busy]=\"modalBusy\">\n  <ng-container *ngIf=\"{ entityName: entityName$ | async } as data\">\n    <ng-template #abpHeader>\n      <h4>\n        {{ 'AbpPermissionManagement::Permissions' | abpLocalization }} - {{ data.entityName }}\n      </h4>\n    </ng-template>\n    <ng-template #abpBody>\n      <div class=\"custom-checkbox custom-control mb-2\">\n        <input\n          type=\"checkbox\"\n          id=\"select-all-in-all-tabs\"\n          name=\"select-all-in-all-tabs\"\n          class=\"custom-control-input\"\n          [(ngModel)]=\"selectAllTab\"\n          (click)=\"onClickSelectAll()\"\n        />\n        <label class=\"custom-control-label\" for=\"select-all-in-all-tabs\">{{\n          'AbpPermissionManagement::SelectAllInAllTabs' | abpLocalization\n        }}</label>\n      </div>\n\n      <hr class=\"mt-2 mb-2\" />\n      <div class=\"row\">\n        <div class=\"col-4\">\n          <ul class=\"nav nav-pills flex-column\">\n            <li *ngFor=\"let group of groups$ | async; trackBy: trackByFn\" class=\"nav-item\">\n              <a\n                class=\"nav-link pointer\"\n                [class.active]=\"selectedGroup?.name === group?.name\"\n                (click)=\"onChangeGroup(group)\"\n                >{{ group?.displayName }}</a\n              >\n            </li>\n          </ul>\n        </div>\n        <div class=\"col-8\">\n          <h4>{{ selectedGroup?.displayName }}</h4>\n          <hr class=\"mt-2 mb-3\" />\n          <div class=\"pl-1 pt-1\">\n            <div class=\"custom-checkbox custom-control mb-2\">\n              <input\n                type=\"checkbox\"\n                id=\"select-all-in-this-tabs\"\n                name=\"select-all-in-this-tabs\"\n                class=\"custom-control-input\"\n                [(ngModel)]=\"selectThisTab\"\n                (click)=\"onClickSelectThisTab()\"\n              />\n              <label class=\"custom-control-label\" for=\"select-all-in-this-tabs\">{{\n                'AbpPermissionManagement::SelectAllInThisTab' | abpLocalization\n              }}</label>\n            </div>\n            <hr class=\"mb-3\" />\n            <div\n              *ngFor=\"\n                let permission of selectedGroupPermissions$ | async;\n                let i = index;\n                trackBy: trackByFn\n              \"\n              [style.margin-left]=\"permission.margin + 'px'\"\n              class=\"custom-checkbox custom-control mb-2\"\n            >\n              <input\n                #permissionCheckbox\n                type=\"checkbox\"\n                [checked]=\"getChecked(permission.name)\"\n                [value]=\"getChecked(permission.name)\"\n                [attr.id]=\"permission.name\"\n                class=\"custom-control-input\"\n                [disabled]=\"isGrantedByOtherProviderName(permission.grantedProviders)\"\n              />\n              <label\n                class=\"custom-control-label\"\n                [attr.for]=\"permission.name\"\n                (click)=\"onClickCheckbox(permission, permissionCheckbox.value)\"\n                >{{ permission.displayName }}\n                <ng-container *ngIf=\"!hideBadges\">\n                  <span\n                    *ngFor=\"let provider of permission.grantedProviders\"\n                    class=\"badge badge-light\"\n                    >{{ provider.providerName }}: {{ provider.providerKey }}</span\n                  >\n                </ng-container>\n              </label>\n            </div>\n          </div>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template #abpFooter>\n      <button type=\"button\" class=\"btn btn-secondary\" #abpClose>\n        {{ 'AbpIdentity::Cancel' | abpLocalization }}\n      </button>\n      <abp-button iconClass=\"fa fa-check\" (click)=\"submit()\">{{\n        'AbpIdentity::Save' | abpLocalization\n      }}</abp-button>\n    </ng-template>\n  </ng-container>\n</abp-modal>\n"
      }]
    }];
    /** @nocollapse */

    PermissionManagementComponent.ctorParameters = function () {
      return [{
        type: _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]
      }];
    };

    PermissionManagementComponent.propDecorators = {
      providerName: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      providerKey: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      hideBadges: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      visible: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      visibleChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
      }]
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Select"])(PermissionManagementState.getPermissionGroups), Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__metadata"])("design:type", rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"])], PermissionManagementComponent.prototype, "groups$", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Select"])(PermissionManagementState.getEntityDisplayName), Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__metadata"])("design:type", rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"])], PermissionManagementComponent.prototype, "entityName$", void 0);

    if (false) {}
    /**
     * @param {?} permissions
     * @param {?} permission
     * @return {?}
     */


    function findMargin(permissions, permission) {
      /** @type {?} */
      var parentPermission = permissions.find(
      /**
      * @param {?} per
      * @return {?}
      */
      function (per) {
        return per.name === permission.parentName;
      });

      if (parentPermission && parentPermission.parentName) {
        /** @type {?} */
        var margin = 20;
        return margin += findMargin(permissions, parentPermission);
      }

      return parentPermission ? 20 : 0;
    }
    /**
     * @param {?} groups
     * @return {?}
     */


    function getPermissions(groups) {
      return groups.reduce(
      /**
      * @param {?} acc
      * @param {?} val
      * @return {?}
      */
      function (acc, val) {
        return [].concat(_toConsumableArray(acc), _toConsumableArray(val.permissions));
      }, []);
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/permission-management.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var PermissionManagementModule = function PermissionManagementModule() {
      _classCallCheck(this, PermissionManagementModule);
    };

    PermissionManagementModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
      args: [{
        declarations: [PermissionManagementComponent],
        imports: [_abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["CoreModule"], _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_1__["ThemeSharedModule"], _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["NgxsModule"].forFeature([PermissionManagementState])],
        exports: [PermissionManagementComponent]
      }]
    }];
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
      function State() {}

      PermissionManagement.State = State;

      if (false) {}
      /**
       * @record
       */


      function Response() {}

      PermissionManagement.Response = Response;

      if (false) {}
      /**
       * @record
       */


      function Group() {}

      PermissionManagement.Group = Group;

      if (false) {}
      /**
       * @record
       */


      function MinimumPermission() {}

      PermissionManagement.MinimumPermission = MinimumPermission;

      if (false) {}
      /**
       * @record
       */


      function Permission() {}

      PermissionManagement.Permission = Permission;

      if (false) {}
      /**
       * @record
       */


      function GrantedProvider() {}

      PermissionManagement.GrantedProvider = GrantedProvider;

      if (false) {}
      /**
       * @record
       */


      function UpdateRequest() {}

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


    var PermissionManagementStateService =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} store
       */
      function PermissionManagementStateService(store) {
        _classCallCheck(this, PermissionManagementStateService);

        this.store = store;
      }
      /**
       * @return {?}
       */


      _createClass(PermissionManagementStateService, [{
        key: "getPermissionGroups",
        value: function getPermissionGroups() {
          return this.store.selectSnapshot(PermissionManagementState.getPermissionGroups);
        }
        /**
         * @return {?}
         */

      }, {
        key: "getEntityDisplayName",
        value: function getEntityDisplayName() {
          return this.store.selectSnapshot(PermissionManagementState.getEntityDisplayName);
        }
      }]);

      return PermissionManagementStateService;
    }();

    PermissionManagementStateService.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    PermissionManagementStateService.ctorParameters = function () {
      return [{
        type: _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
      }];
    };
    /** @nocollapse */


    PermissionManagementStateService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"])({
      factory: function PermissionManagementStateService_Factory() {
        return new PermissionManagementStateService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"])(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"]));
      },
      token: PermissionManagementStateService,
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
     * Generated from: abp-ng.permission-management.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=abp-ng.permission-management.js.map

    /***/

  },

  /***/
  "./src/app/lazy-libs/identity-wrapper.module.ts":
  /*!******************************************************!*\
    !*** ./src/app/lazy-libs/identity-wrapper.module.ts ***!
    \******************************************************/

  /*! exports provided: IdentityWrapperModule */

  /***/
  function srcAppLazyLibsIdentityWrapperModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IdentityWrapperModule", function () {
      return IdentityWrapperModule;
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


    var _abp_ng_identity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @abp/ng.identity */
    "./node_modules/@abp/ng.identity/fesm2015/abp-ng.identity.js");

    var IdentityWrapperModule = function IdentityWrapperModule() {
      _classCallCheck(this, IdentityWrapperModule);
    };

    IdentityWrapperModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_abp_ng_identity__WEBPACK_IMPORTED_MODULE_2__["IdentityModule"]]
    })], IdentityWrapperModule);
    /***/
  }
}]);
//# sourceMappingURL=lazy-libs-identity-wrapper-module-es5.js.map