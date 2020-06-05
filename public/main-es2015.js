(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-grid-list class=\"nav\" cols=\"3\" rowHeight=\"5:1\">\n  <mat-grid-tile></mat-grid-tile>\n  <mat-grid-tile>Migrant Labor Naukri Portal</mat-grid-tile>\n  <mat-grid-tile></mat-grid-tile>\n</mat-grid-list>\n<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-grid-list cols=\"4\" rowHeight=\"1:1\">\n    <mat-grid-tile></mat-grid-tile>\n    <mat-grid-tile>\n       <a href=\"/shramikForm\">Migrant Labor Force Employment Form</a>\n    </mat-grid-tile>\n    <mat-grid-tile>\n        <a href=\"/shramikDetail\">Migrant Labor Information </a>\n    </mat-grid-tile>\n    <mat-grid-tile></mat-grid-tile>\n</mat-grid-list>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/worker-detail/worker-detail.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/worker-detail/worker-detail.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button mat-icon-button aria-label=\"Dashboard\">\n    <mat-icon style=\"color: rgb(30, 90, 160);\" routerLink=\"/\">home</mat-icon>\n</button>\n\n<mat-grid-tile [colspan]=\"4\" [rowspan]=\"2\">\n</mat-grid-tile>\n\n<mat-grid-tile [colspan]=\"4\" [rowspan]=\"2\"> </mat-grid-tile>\n\n<div class=\"example-container\">\n    SkillSet :\n    <select [(ngModel)]=\"headerLabel\" (ngModelChange)=\"searchProduct()\">\n        <option selected >--Select--</option>\n        <option *ngFor=\"let prod of ProductHeader\">{{prod}} </option>\n    </select>\n\n\n    <div *ngIf=\"headerLabel\">\n        <h5>You have selected: {{headerLabel}} </h5>\n    </div>\n</div>\n<div class=\"example\" #TABLE>\n    <h4>Skill Details:</h4>\n    <table id=\"ExampleMaterialTable\" class=\"TFtable\" #table>\n        <tr>\n            <th>Name</th>\n            <th>Mobile Number</th>\n            <th>Current Address</th>\n            <th>Gender</th>\n        </tr>\n        <tr *ngFor=\"let Prod of ProductDetails\">\n            <td>{{Prod.firstName + \" \" + Prod.lastName}}</td>\n            <td>{{Prod.mobNum}}</td>\n            <td>{{Prod.cAddress}}</td>\n            <td>{{Prod.gender}}</td>\n        </tr>\n\n    </table>\n    <br>\n    <div>\n        <button class=\"btnWidth\" color=\"primary\" mat-raised-button (click)=\"exportTable()\">Export</button>\n    </div>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/worker-form/worker-form.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/worker-form/worker-form.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"padding: 1%;\">\n    <button mat-icon-button aria-label=\"Dashboard\">\n        <mat-icon style=\"color: rgb(30, 90, 160);\" routerLink=\"/\">home</mat-icon>\n    </button>\n    <mat-grid-list cols=\"12\" rowHeight=\"100px\" gutterSize=\"0px\">\n        <mat-grid-tile [colspan]=\"4\" [rowspan]=\"2\" [style.background]=colors[0] *ngIf=\"showSpinner\">\n        </mat-grid-tile>\n\n        <mat-label>Registration</mat-label>\n\n        <form class=\"my-form\">\n            <mat-grid-tile [colspan]=\"4\" [rowspan]=\"2\" *ngIf=\"showSpinner\">\n            </mat-grid-tile>\n\n            <mat-grid-tile [colspan]=\"4\" [rowspan]=\"2\" *ngIf=\"showSpinner\">\n            </mat-grid-tile>\n\n            <div class=\"example-container\">\n                <mat-grid-tile [colspan]=\"4\" [rowspan]=\"1\">\n\n                    <div class=\"move-left\">\n                        <mat-form-field class=\"extend-element\">\n                            <mat-label>First Name</mat-label>\n                            <input matInput placeholder=\"Name\" [(ngModel)]=\"fname\" name=\"fname\" required />\n                        </mat-form-field>\n                    </div>\n                </mat-grid-tile>\n\n                <mat-grid-tile [colspan]=\"4\" [rowspan]=\"1\">\n                    <div class=\"move-left\">\n                        <mat-form-field class=\"extend-element\">\n                            <mat-label>Middle Name</mat-label>\n                            <input matInput placeholder=\"Name\" [(ngModel)]=\"mname\" name=\"mname\">\n                        </mat-form-field>\n                    </div>\n                </mat-grid-tile>\n\n                <mat-grid-tile [colspan]=\"4\" [rowspan]=\"1\">\n                    <div class=\"move-left\">\n                        <mat-form-field class=\"extend-element\">\n                            <mat-label>Last Name</mat-label>\n                            <input matInput placeholder=\"Name\" [(ngModel)]=\"lname\" name=\"lname\" required>\n                        </mat-form-field>\n                    </div>\n                </mat-grid-tile>\n\n                <mat-grid-tile [colspan]=\"4\" [rowspan]=\"1\">\n                    <div class=\"move-left\">\n                        <mat-form-field class=\"extend-element\">\n                            <mat-label>Mobile Number</mat-label>\n                            <input matInput placeholder=\"+91\" [(ngModel)]=\"mob\" (keypress)=\"keyPress($event)\" name=\"mob\"\n                                minlength=10 maxlength=10 required>\n                        </mat-form-field>\n                    </div>\n                </mat-grid-tile>\n\n                <mat-grid-tile [colspan]=\"4\" [rowspan]=\"1\">\n                    <div class=\"move-left\">\n                        <mat-form-field class=\"extend-element\">\n                            <mat-label>Alternate Mobile Number</mat-label>\n                            <input matInput placeholder=\"+91\" [(ngModel)]=\"amob\" (keypress)=\"keyPress($event)\"\n                                name=\"amob\" minlength=10 maxlength=10>\n                        </mat-form-field>\n                    </div>\n                </mat-grid-tile>\n\n                <mat-grid-tile [colspan]=\"4\" [rowspan]=\"1\"> </mat-grid-tile>\n\n\n                <mat-grid-tile [colspan]=\"4\" [rowspan]=\"1\">\n                    <div class=\"move-left\">\n                        <mat-label>Gender :</mat-label>\n                        <mat-radio-group aria-labelledby=\"example-radio-group-label\" class=\"\" [(ngModel)]=\"gender\" name=\"gender\">\n                            <mat-radio-button class=\"example-radio-button\" *ngFor=\"let c of genderVals\" [value]=\"c\">\n                                {{c}}\n                            </mat-radio-button>\n                        </mat-radio-group>\n                    </div>\n                </mat-grid-tile>\n\n\n                <mat-grid-tile [colspan]=\"4\" [rowspan]=\"1\"> </mat-grid-tile>\n                <mat-grid-tile [colspan]=\"4\" [rowspan]=\"1\"></mat-grid-tile>\n\n\n                <mat-grid-tile [colspan]=\"4\" [rowspan]=\"1\">\n                    <div class=\"move-left\">\n                        <mat-form-field appearance=\"fill\" class=\"extend-element\">\n                            <mat-label>Current Address</mat-label>\n                            <textarea matInput [(ngModel)]=\"address\" name=\"address\" placeholder=\"address\"\n                                required></textarea>\n                        </mat-form-field>\n                    </div>\n                </mat-grid-tile>\n\n                <mat-grid-tile [colspan]=\"4\" [rowspan]=\"1\">\n                    <div class=\"move-left\">\n                        <mat-form-field appearance=\"fill\" class=\"extend-element\">\n                            <mat-label>Permanent Address</mat-label>\n                            <textarea matInput [(ngModel)]=\"paddress\" name=\"paddress\" placeholder=\"paddress\"\n                                required></textarea>\n                        </mat-form-field>\n                    </div>\n                </mat-grid-tile>\n\n                <mat-grid-tile [colspan]=\"4\" [rowspan]=\"1\"></mat-grid-tile>\n\n\n                <mat-grid-tile [colspan]=\"4\" [rowspan]=\"1\">\n                    <div class=\"move-left\">\n                        <mat-form-field class=\"extend-element\">\n                            <mat-label>Date Of Birth</mat-label>\n                            <input matInput placeholder=\"(mm/dd/yyyy)\" [(ngModel)]=\"dob\" name=\"dob\" required>\n                        </mat-form-field>\n                    </div>\n                </mat-grid-tile>\n\n                <mat-grid-tile [colspan]=\"4\" [rowspan]=\"1\"></mat-grid-tile>\n                <mat-grid-tile [colspan]=\"4\" [rowspan]=\"1\"></mat-grid-tile>\n\n                <mat-grid-tile [colspan]=\"4\" [rowspan]=\"1\">\n                    <div class=\"move-left\">\n                        <mat-form-field class=\"extend-element\">\n                            <mat-label>Aadhar Number(Preferred)</mat-label>\n                            <input matInput placeholder=\"anumber\" [(ngModel)]=\"anumber\" name=\"anumber\" maxlength=12>\n                        </mat-form-field>\n                    </div>\n                </mat-grid-tile>\n\n                <mat-grid-tile [colspan]=\"4\" [rowspan]=\"1\"></mat-grid-tile>\n                <mat-grid-tile [colspan]=\"4\" [rowspan]=\"1\"></mat-grid-tile>\n\n\n                <mat-grid-tile [colspan]=\"4\" [rowspan]=\"1\">\n                    <div class=\"move-left\">\n                        <mat-form-field class=\"extend-element\">\n                            <mat-label>Skills Set</mat-label>\n                            <input matInput [(ngModel)]=\"SkillsSet\" placeholder=\"SkillsSet\" name=\"SkillsSet\" required>\n                        </mat-form-field>\n                    </div>\n                </mat-grid-tile>\n\n                <mat-grid-tile [colspan]=\"4\" [rowspan]=\"1\"></mat-grid-tile>\n                <mat-grid-tile [colspan]=\"4\" [rowspan]=\"1\"></mat-grid-tile>\n\n\n                <mat-grid-tile [colspan]=\"4\" [rowspan]=\"1\">\n                    <div class=\"move-left\">\n                        <mat-label>Employed/Unemployed : </mat-label>\n                        <mat-radio-group aria-labelledby=\"example-radio-group-label\" class=\"\" [(ngModel)]=\"employed\" name=\"employed\">\n                            <mat-radio-button class=\"example-radio-button\" *ngFor=\"let c of choice\" [value]=\"c\">\n                                {{c}}\n                            </mat-radio-button>\n                        </mat-radio-group>\n                    </div>\n                </mat-grid-tile>\n                <mat-grid-tile [colspan]=\"4\" [rowspan]=\"1\"></mat-grid-tile>\n                <mat-grid-tile [colspan]=\"4\" [rowspan]=\"1\"></mat-grid-tile>\n\n\n                <mat-grid-tile [colspan]=\"4\" [rowspan]=\"1\">\n                    <div class=\"move-left\">\n                        <mat-form-field class=\"extend-element\">\n                            <mat-label>Work Experience</mat-label>\n                            <input matInput placeholder=\"workexperience\" [(ngModel)]=\"workexperience\"\n                                name=\"workexperience\" required>\n                        </mat-form-field>\n                    </div>\n                </mat-grid-tile>\n                <mat-grid-tile [colspan]=\"4\" [rowspan]=\"1\"></mat-grid-tile>\n                <mat-grid-tile [colspan]=\"4\" [rowspan]=\"1\"></mat-grid-tile>\n\n\n                <mat-grid-tile [colspan]=\"4\" [rowspan]=\"1\">\n                    <div class=\"move-left\">\n                        <mat-form-field class=\"extend-element\">\n                            <mat-label>Education</mat-label>\n                            <input matInput placeholder=\"Education\" [(ngModel)]=\"Education\" name=\"Education\" required>\n                        </mat-form-field>\n                    </div>\n                </mat-grid-tile>\n\n\n                <mat-grid-tile [colspan]=\"4\" [rowspan]=\"1\">\n                    <div class=\"move-left\">\n                        <mat-form-field class=\"extend-element\">\n                            <mat-label>Highest Education</mat-label>\n                            <input matInput placeholder=\"\" [(ngModel)]=\"hedu\" name=\"hedu\">\n                        </mat-form-field>\n                    </div>\n                </mat-grid-tile>\n\n                <mat-grid-tile [colspan]=\"4\" [rowspan]=\"1\"></mat-grid-tile>\n\n                <mat-grid-tile [colspan]=\"4\" [rowspan]=\"1\">\n                    <div class=\"move-left\">\n                        <!-- <mat-select (change)=\"selectInput($event)\">-->\n                        <mat-label> Daily waged employee: </mat-label>\n                        <mat-radio-group aria-labelledby=\"example-radio-group-label\" class=\"\" [(ngModel)]=\"dailywaged\" name=\"dailywaged\">\n                            <mat-radio-button class=\"example-radio-button\" *ngFor=\"let c of choice\" [value]=\"c\">\n                                {{c}}\n                            </mat-radio-button>\n                        </mat-radio-group>\n                        <!-- </mat-select>-->\n                    </div>\n                </mat-grid-tile>\n\n                <mat-grid-tile [colspan]=\"4\" [rowspan]=\"1\">\n                    <div class=\"move-left\">\n                        <mat-form-field class=\"extend-element\">\n                            <div class=\"form-group\" *ngIf=\"!isNameSelected\">\n                                <mat-label>Company</mat-label>\n                                <input matInput=\"text\" class=\"form-control\" id=\"address\">\n                            </div>\n                        </mat-form-field>\n                    </div>\n                </mat-grid-tile>\n\n                <mat-grid-tile [colspan]=\"4\" [rowspan]=\"1\"></mat-grid-tile>\n                <mat-grid-tile [colspan]=\"4\" [rowspan]=\"1\">\n                    <div class=\"move-left\">\n                        <mat-label>Willing to Relocate : </mat-label>\n                        <mat-radio-group aria-labelledby=\"example-radio-group-label\" class=\"\" [(ngModel)]=\"relocate\" name=\"relocate\">\n                            <mat-radio-button class=\"example-radio-button\" *ngFor=\"let c of choice\" [value]=\"c\">\n                                {{c}}\n                            </mat-radio-button>\n                        </mat-radio-group>\n                    </div>\n                </mat-grid-tile>\n                <mat-grid-tile [colspan]=\"4\" [rowspan]=\"1\"></mat-grid-tile>\n                <mat-grid-tile [colspan]=\"3\" [rowspan]=\"1\"></mat-grid-tile>\n\n                <mat-grid-tile [colspan]=\"4\" [rowspan]=\"1\">\n                    <div class=\"move-left\">\n                        <mat-form-field class=\"extend-element\">\n                            <mat-label>Family count</mat-label>\n                            <input matInput [(ngModel)]=\"Familycount\" placeholder=\"Familycount\" name=\"Familycount\"\n                                required>\n                        </mat-form-field>\n                    </div>\n                </mat-grid-tile>\n\n            </div>\n            <mat-grid-tile [colspan]=\"4\" [rowspan]=\"1\">\n                <p style=\"color: red;\">\n                    {{error}}\n                </p>\n            </mat-grid-tile>\n        </form>\n    </mat-grid-list>\n    <mat-card-actions>\n        <button class=\"btnWidth\" color=\"primary\" (click)=\"save()\" mat-raised-button>Register</button>\n        <button class=\"btnWidth\" color=\"primary\" (click)=\"onReset()\" mat-raised-button>Cancel</button>\n    </mat-card-actions>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _worker_form_worker_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./worker-form/worker-form.component */ "./src/app/worker-form/worker-form.component.ts");
/* harmony import */ var _worker_detail_worker_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./worker-detail/worker-detail.component */ "./src/app/worker-detail/worker-detail.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");






const routes = [
    { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"] },
    { path: 'shramikForm', component: _worker_form_worker_form_component__WEBPACK_IMPORTED_MODULE_3__["WorkerFormComponent"] },
    { path: 'shramikDetail', component: _worker_detail_worker_detail_component__WEBPACK_IMPORTED_MODULE_4__["WorkerDetailComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".nav{\r\n    background-color:rgb(30, 90, 160);\r\n    color: white;\r\n    font-size: 25px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQ0FBaUM7SUFDakMsWUFBWTtJQUNaLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigzMCwgOTAsIDE2MCk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'MigrantsNaukriPortal';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _worker_form_worker_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./worker-form/worker-form.component */ "./src/app/worker-form/worker-form.component.ts");
/* harmony import */ var _worker_detail_worker_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./worker-detail/worker-detail.component */ "./src/app/worker-detail/worker-detail.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm2015/grid-list.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");












// tslint:disable-next-line: max-line-length



let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _worker_form_worker_form_component__WEBPACK_IMPORTED_MODULE_6__["WorkerFormComponent"],
            _worker_detail_worker_detail_component__WEBPACK_IMPORTED_MODULE_7__["WorkerDetailComponent"],
            _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatCheckboxModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DashboardComponent = class DashboardComponent {
    constructor() { }
    ngOnInit() {
    }
};
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")).default]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/services/worker-detail.servie.ts":
/*!**************************************************!*\
  !*** ./src/app/services/worker-detail.servie.ts ***!
  \**************************************************/
/*! exports provided: WorkerDetailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkerDetailService", function() { return WorkerDetailService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




let WorkerDetailService = class WorkerDetailService {
    constructor(http) {
        this.http = http;
        this.url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url}/api`;
    }
    getMigrantsList() {
        return this.http.get(`${this.url}/migrantList/`);
    }
    getMigrantsHeader() {
        return this.http.get(`${this.url}/migrantListHeader/`);
    }
};
WorkerDetailService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
WorkerDetailService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], WorkerDetailService);



/***/ }),

/***/ "./src/app/services/worker-form.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/worker-form.service.ts ***!
  \*************************************************/
/*! exports provided: WorkerformService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkerformService", function() { return WorkerformService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




let WorkerformService = class WorkerformService {
    constructor(http) {
        this.http = http;
        this.url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url}/api`;
    }
    insertData(data) {
        return this.http.post(`${this.url}/workerDataInsert`, data);
    }
};
WorkerformService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
WorkerformService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], WorkerformService);



/***/ }),

/***/ "./src/app/worker-detail/tableUtil.ts":
/*!********************************************!*\
  !*** ./src/app/worker-detail/tableUtil.ts ***!
  \********************************************/
/*! exports provided: TableUtil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableUtil", function() { return TableUtil; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_1__);


const getFileName = (name) => {
    const timeSpan = new Date().toISOString();
    const sheetName = name || 'ExportResult';
    const fileName = `${sheetName}-${timeSpan}`;
    return {
        sheetName,
        fileName
    };
};
class TableUtil {
    static exportTableToExcel(tableId, name) {
        const { sheetName, fileName } = getFileName(name);
        const targetTableElm = document.getElementById(tableId);
        const wb = xlsx__WEBPACK_IMPORTED_MODULE_1__["utils"].table_to_book(targetTableElm, {
            sheet: sheetName
        });
        xlsx__WEBPACK_IMPORTED_MODULE_1__["writeFile"](wb, `${fileName}.xlsx`);
    }
    static exportArrayToExcel(arr, name) {
        const { sheetName, fileName } = getFileName(name);
        let wb = xlsx__WEBPACK_IMPORTED_MODULE_1__["utils"].book_new();
        let ws = xlsx__WEBPACK_IMPORTED_MODULE_1__["utils"].json_to_sheet(arr);
        xlsx__WEBPACK_IMPORTED_MODULE_1__["utils"].book_append_sheet(wb, ws, sheetName);
        xlsx__WEBPACK_IMPORTED_MODULE_1__["writeFile"](wb, `${fileName}.xlsx`);
    }
}


/***/ }),

/***/ "./src/app/worker-detail/worker-detail.component.css":
/*!***********************************************************!*\
  !*** ./src/app/worker-detail/worker-detail.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-container{\r\n    align-content: center;\r\n    flex-direction: column;\r\n    max-height: 500px;\r\n    min-width: 300px;\r\n    margin-bottom: 10px;\r\n    margin-left: 75px;\r\n   \r\n}\r\n\r\n.example{\r\n  margin-left: 75px;\r\n}\r\n\r\n.TFtable{\r\n    width: 40%;\r\n}\r\n\r\ntable {\r\n    border-collapse: collapse;\r\n  }\r\n\r\ntable, th, td {\r\n    border: 1px solid black;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd29ya2VyLWRldGFpbC93b3JrZXItZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGlCQUFpQjs7QUFFckI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBR0E7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSx5QkFBeUI7RUFDM0I7O0FBRUE7SUFDRSx1QkFBdUI7RUFDekIiLCJmaWxlIjoic3JjL2FwcC93b3JrZXItZGV0YWlsL3dvcmtlci1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNvbnRhaW5lcntcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBtYXgtaGVpZ2h0OiA1MDBweDtcclxuICAgIG1pbi13aWR0aDogMzAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDc1cHg7XHJcbiAgIFxyXG59XHJcblxyXG4uZXhhbXBsZXtcclxuICBtYXJnaW4tbGVmdDogNzVweDtcclxufVxyXG5cclxuXHJcbi5URnRhYmxle1xyXG4gICAgd2lkdGg6IDQwJTtcclxufVxyXG5cclxudGFibGUge1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICB9XHJcbiAgXHJcbiAgdGFibGUsIHRoLCB0ZCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICB9Il19 */");

/***/ }),

/***/ "./src/app/worker-detail/worker-detail.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/worker-detail/worker-detail.component.ts ***!
  \**********************************************************/
/*! exports provided: WorkerDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkerDetailComponent", function() { return WorkerDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _tableUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tableUtil */ "./src/app/worker-detail/tableUtil.ts");
/* harmony import */ var _services_worker_detail_servie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/worker-detail.servie */ "./src/app/services/worker-detail.servie.ts");




let WorkerDetailComponent = class WorkerDetailComponent {
    constructor(workerdetail) {
        this.workerdetail = workerdetail;
        this.headerLabel = "";
        this.ProductDetails = [];
        this.workerdetail.getMigrantsHeader().subscribe(resp => {
            this.ProductHeader = resp;
        });
        this.workerdetail.getMigrantsList().subscribe(resp => {
            this.Products = resp;
        });
    }
    ngOnInit() {
    }
    exportTable() {
        _tableUtil__WEBPACK_IMPORTED_MODULE_2__["TableUtil"].exportTableToExcel('ExampleMaterialTable');
    }
    exportArray() {
        const onlyNameAndSymbolArr = this.dataSource.map(x => ({
            name: x.name,
            symbol: x.symbol
        }));
        _tableUtil__WEBPACK_IMPORTED_MODULE_2__["TableUtil"].exportArrayToExcel(onlyNameAndSymbolArr, 'ExampleArray');
    }
    searchProduct() {
        const obj = this.Products.filter(m => m.skillset == this.headerLabel);
        this.ProductDetails = obj;
        return this.ProductDetails;
    }
};
WorkerDetailComponent.ctorParameters = () => [
    { type: _services_worker_detail_servie__WEBPACK_IMPORTED_MODULE_3__["WorkerDetailService"] }
];
WorkerDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-worker-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./worker-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/worker-detail/worker-detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./worker-detail.component.css */ "./src/app/worker-detail/worker-detail.component.css")).default]
    })
], WorkerDetailComponent);



/***/ }),

/***/ "./src/app/worker-form/worker-form.component.css":
/*!*******************************************************!*\
  !*** ./src/app/worker-form/worker-form.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".extend-element{\r\n    width:70%;\r\n    padding-top:1.34375em;\r\n    font-weight: 600;\r\n}\r\n\r\n.move-left{\r\n    width: 100%; \r\n    display: flex; \r\n    align-items: flex-start;\r\n    text-align: left;\r\n}\r\n\r\n.btnWidth{\r\n    margin: 0% 1% 1% 1%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd29ya2VyLWZvcm0vd29ya2VyLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFNBQVM7SUFDVCxxQkFBcUI7SUFDckIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvd29ya2VyLWZvcm0vd29ya2VyLWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leHRlbmQtZWxlbWVudHtcclxuICAgIHdpZHRoOjcwJTtcclxuICAgIHBhZGRpbmctdG9wOjEuMzQzNzVlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5tb3ZlLWxlZnR7XHJcbiAgICB3aWR0aDogMTAwJTsgXHJcbiAgICBkaXNwbGF5OiBmbGV4OyBcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLmJ0bldpZHRoe1xyXG4gICAgbWFyZ2luOiAwJSAxJSAxJSAxJTtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/worker-form/worker-form.component.ts":
/*!******************************************************!*\
  !*** ./src/app/worker-form/worker-form.component.ts ***!
  \******************************************************/
/*! exports provided: WorkerFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkerFormComponent", function() { return WorkerFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_worker_form_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/worker-form.service */ "./src/app/services/worker-form.service.ts");



let WorkerFormComponent = class WorkerFormComponent {
    constructor(workerFormService) {
        this.workerFormService = workerFormService;
        this.showErrMsg1 = false;
        this.showErrMsg2 = false;
        this.error = '';
        this.choice = ['Yes', 'No'];
        this.genderVals = ['Male', 'Female', 'Others'];
    }
    selectInput(event) {
        const selected = event.target.value;
        // tslint:disable-next-line: triple-equals
        if (selected == 'No') {
            this.isNameSelected = true;
        }
        else {
            this.isNameSelected = false;
        }
    }
    keyPress(event) {
        const pattern = /[0-9\+\-\ ]/;
        const inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    }
    save() {
        if (this.fname == 'undefined' || this.fname == null) {
            this.error = '* Please enter first name';
        }
        else if (this.lname == 'undefined' || this.lname == null) {
            // this.required = true;
            this.error = '* Please enter last name';
        }
        else if (this.mob == null) {
            this.required = true;
            this.error = '* Please enter Mobile Number';
        }
        else if (this.address == 'undefined' || this.address == null) {
            this.required = true;
            this.error = '* Please Enter Current Address with pincode';
        }
        else if (this.paddress == null) {
            this.required = true;
            this.error = '* Please Enter Permanent Address with pincode';
        }
        else if (this.dob == null) {
            this.required = true;
            this.error = '* Please Enter date of birth';
        }
        else if (this.SkillsSet == 'undefined' || this.SkillsSet == null) {
            this.required = true;
            this.error = '* Please add your SkillsSet';
        }
        else if (this.workexperience == null) {
            this.required = true;
            this.error = '* Please Enter your work experience';
        }
        else if (this.Education == null) {
            this.required = true;
            this.error = '* Please Enter Education Details';
        }
        else if (this.Familycount == null) {
            this.required = true;
            this.error = '* Please Enter Familycount';
        }
        const Data = {
            firstName: this.fname,
            middleName: this.mname,
            lastName: this.lname,
            mobNum: this.mob,
            aMobNum: this.amob,
            gender: this.gender,
            adhaar: this.anumber,
            cAddress: this.address,
            pAddress: this.paddress,
            dob: this.dob,
            skillset: this.SkillsSet,
            employed: this.employed,
            highestEducation: this.Education,
            Workexperience: this.workexperience,
            opentoRelocate: this.relocate,
            dailyWagedEmployee: this.dailywaged,
            highestDegree: this.hedu,
            numberOfFamilyMembers: this.Familycount
        };
        console.log(Data);
        this.workerFormService.insertData(Data).subscribe(resp => {
            console.log(resp);
        });
    }
    onReset() {
        this.submitted = false;
        this.fname = [];
        this.lname = [];
        this.mname = [];
        this.mob = [];
        this.amob = [];
        this.gender = [];
        this.address = [];
        this.paddress = [];
        this.dob = [];
        this.anumber = [];
        this.SkillsSet = [];
        this.workexperience = [];
        this.relocate = [];
        this.Education = [];
        this.hedu = [];
        this.Familycount = [];
    }
};
WorkerFormComponent.ctorParameters = () => [
    { type: _services_worker_form_service__WEBPACK_IMPORTED_MODULE_2__["WorkerformService"] }
];
WorkerFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-worker-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./worker-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/worker-form/worker-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./worker-form.component.css */ "./src/app/worker-form/worker-form.component.css")).default]
    })
], WorkerFormComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    url: '',
    nodTransfer: 2,
    nodDataset: 3,
    nodClose: 5,
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\asriva63\Documents\Co(vi)de_Hackathon\MigrantsNaukriPortal\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** stream (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map