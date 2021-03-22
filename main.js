(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\fbClone\src\main.ts */"zUnb");


/***/ }),

/***/ "3LN8":
/*!*****************************************!*\
  !*** ./src/app/shared/api.constants.ts ***!
  \*****************************************/
/*! exports provided: USER_API, USER_POST_API */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_API", function() { return USER_API; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_POST_API", function() { return USER_POST_API; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ "AytR");

const SERVICE_API = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].GATEWAY_URL;
const USER_SERVICE = SERVICE_API + '/user';
const USER_POST = SERVICE_API + '/posts';
const USER_API = {
    TEST: USER_SERVICE,
    CREATE: USER_SERVICE + '/create',
    AUTHENTICATE: USER_SERVICE + '/authenticate',
    REFRESH: USER_SERVICE + '/refresh',
    LOGOUT: SERVICE_API + '/logout'
};
const USER_POST_API = {
    GET_POST: USER_POST + '/get-post',
    CREATE_POST: USER_POST + '/create-post',
    UPDATE_POST: USER_POST + '/update-post',
    DELETE_POST: USER_POST + '/delete-post'
};
//
// export const FILE_SERVICE = SERVICE_API + '/files';
// const PRJ_SERVICE = SERVICE_API + '/projects';
// export const PRJ_API = {
//   ADD: PRJ_SERVICE,
//   ADD_MEMBER: PRJ_SERVICE,
//   UPDATE: PRJ_SERVICE,
//   GET_PROJECT_BY_PROJECT_ID: PRJ_SERVICE,
//   GET_PROJECTS: PRJ_SERVICE,
//   GET_USERS_BY_PROJECT_ID: PRJ_SERVICE,
// };
//
// const USERS_SERVICE = SERVICE_API + '/users';
// export const USERS_API = {
//   USERS: USERS_SERVICE,
//   USERS_BULK: USERS_SERVICE + '/bulk',
//   USERS_ARCHIVE: USERS_SERVICE + '/archive',
// };
//
// const OFFICE_SERVICE = SERVICE_API + '/offices';
// export const OFFICE_API = {
//   GET_OFFICES: OFFICE_SERVICE,
//   GET_EMPLOYEES_BY_OFFICE_ID: OFFICE_SERVICE,
//   GET_MINISTRIES: OFFICE_SERVICE + '/ministries',
//   GET_DIVISION: OFFICE_SERVICE + '/layers',
// };
//
// const ROLES_SERVICE = SERVICE_API + '/roles';
// export const ROLES_API = {
//   ROLES: ROLES_SERVICE,
//   ROLE_BY_NAME: ROLES_SERVICE + '/name',
//   ROLES_BULK: ROLES_SERVICE + '/bulk',
//   ROLES_PRIVILEGES: ROLES_SERVICE + '/privileges',
// };
//
// const ARTICLE_SERVICE = SERVICE_API + '/articles';
// export const ARTICLE_API = {
//   GET_ARTICLES: ARTICLE_SERVICE,
//   GET_ARTICLE_DETAILS: ARTICLE_SERVICE + '/details',
//   ADD: ARTICLE_SERVICE,
//   ARTICLES: ARTICLE_SERVICE,
// };
//
// const ECO_CODE_SERVICE = SERVICE_API + '/eco-codes';
// export const ECO_CODE_API = {
//   GET_ECO_CODE: ECO_CODE_SERVICE,
// };
//
// export const GREETING_SERVICE = SERVICE_API + '/greetings';
// export const AUTH_SERVICE_API = SERVICE_API + '/authentication';


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    // GATEWAY_URL: 'http://localhost:8081',
    // gateway for hiroku
    GATEWAY_URL: 'https://fb-clone-service.herokuapp.com',
    SERVICE_CONTEXT: '',
    IS_MODAL_OPEN: false
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

/***/ "BuFo":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _shared_api_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/api.constants */ "3LN8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/badge */ "TU8p");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");











function HomeComponent_mat_card_91_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-card", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", i_r4.imgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("src", "", i_r4.userImg, "}", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](i_r4.name);
} }
function HomeComponent_mat_card_116_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-card", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-card-header", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-card-content", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("alt", p_r5 == null ? null : p_r5.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", p_r5 == null ? null : p_r5.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](p_r5 == null ? null : p_r5.time);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](p_r5 == null ? null : p_r5.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](p_r5 == null ? null : p_r5.message);
} }
// @ts-ignore
// @ts-ignore
class HomeComponent {
    // tslint:disable-next-line:new-parens
    constructor(http) {
        this.http = http;
        this.post = [];
        this.myDays = [
            {
                name: 'Darkness',
                userImg: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
                imgUrl: 'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'
            },
            {
                name: 'Rayyan',
                userImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK0SJou-ezLa2_9RLjxAzgnJh0oX-AT0sdWg&usqp=CAU',
                imgUrl: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhISEhMVFhUQFRAVEBUVFRUVFQ8PFRUWFhUVFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGhAQGy0lHR8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOAA4QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAADAAECBAUGBwj/xAA+EAACAQIDBQYDBgQEBwAAAAAAAQIDEQQSIRMxQVFhBRRxgZGhBgciMlKxwdHwI5Lh8RVCYnJUY4KDorLC/8QAGgEAAgMBAQAAAAAAAAAAAAAAAAECAwQFBv/EACURAAICAgEEAgMBAQAAAAAAAAABAhEDEiETMUFRMmEEInFSM//aAAwDAQACEQMRAD8A7ScSGU1dh0Jw7NuZo2bJTRkxphoUWaNTBKJGGhIjt6KuxaJKDLD1GygKyEEHhOxBQJKkwsGgqrk41UCWHYlRfIewqRap1Ik41VcqKkyWyCyOppWTQLZgKNRotKtcbZHVoq1KEgEqUlwL2dj7XmIabM1xZGzNTNBk4wiKie/0ZOo6RpzpRe4jHDojqx7oz7CNZYaI3dYhoxdRGXYkkzT7tElsohow6iMoc0+7xGlhkw1Y+ojPUh4vVeRalhUgSparxRFpjTTPlYQhGozH1fsVyISovgwjZGM2U2TpgVhrvUlKikWbilC4wKMYIJ3dMN3YUY2IkrBKgkStELKkmCeEJEf6EhUiPniBjhgcotCsaSLipxZCVFFTOyazMNkPVlhUokJTSFTpBNkhWFAVUTCTgrEtgS2dgDgpSpiUGX7dCUV0FTHsUE5IWaRpOKG2aHqxbr0UdtIZOXUvqCHyhq/Yt16M/wCobJLqaWUbKg1Y9/ozvq6k4VJF5xBzpC1aDdME5k6bV0QlRYoJ3XihWx0j5OHGHNJRyfWWUkojDooLBWHEOiQDjOA44CohkJWFccA5ByiwEsO2WrjiGiqsPYeMbFhshvFQ7IKSCxkgWVE0kKwCjZhkSJERXHIuSISqpDsKCiKu3ZNVBboejDiK7xEVe8ksqvK7Syrm+SM2fxbgE7PF0Lv/AJkX7pgnYtWbQ4DDYynUjmpzhOL0UoSUlfldMK5DsVEhgTbIOMuZFyJKIdtEU1cGqTHjR1RG2/A6Xs+SxCEaSo+siRBMkZbLaJCGHuOxCHGEOwHHIj3ACQiNxXHYD2FlFcVxAM4ISghxwCxDjCCwIuAzpomIB2C2KML417b7jhZ1lBzl9mOtlFvRSk/FrTidFc81+eePUcLQo8a1Zy8IUou/vOPuKkShzJI8l7U7drV5ynVqTnKWjbbso3uoxjuilyRnPEPmVpSGTLVL0bNEb3YHxDWwtSNSlOzi75X9mS4qUeKdl6H0V8K9uQxuGhXha8tKkU77Oot8fz8z5YUz2L5B15NYyLf0fwWlyn9Sb9LehXJ8kMsLg36PXRDCFZjJCQ1xIdiPkYQhzQRPq4kiI6MVlxIe4w47Ae4rjWHsFiFcVxWHsFgK4hWFYLAQhWEOwEPcSQ9gsQ1xXFYVgsBJkiNh7BYDnlfz7gthhJX1VSrG3NOCbfllXqepnm/zz7PlUwlCpCLlsq1pWV7RnBq9l1jFeY0yzD80jwaQ1yVSNnYgSNzJXPWvkJiYKtiabbz1KcJR0VssJWlrff8AXHS3M8lij2f5KfDValOeLq03GNSjBYdtr+JGo1JySTvujHf94jIU2ljlfo9csPYZDis5ghIYdBYHyIIcRrIn1ikPYGpDqRzlI0UFTFcHnFnJbCoJce4LMLMGwUFuK4LMLMGwUFuK4K4rjsVBbiuCuPmDYKCXFcHmFcLCglx7griCw1CXFcHccLFQS4HGYinTpznVlGNOMW6jk7RUeNx5ySTbaSWrbdkl1Z5h81fialVpU8PQqKqs7lX2bzR+m2SLluerbsvuonCLk6HR5r2/2dQ21RUKjnTUns55Gs0N8U1Kzut1+Nr8TNXZP+p/y/1Lu0g9G5J8noPOLXVeJtWKJa8s/ZWh2VFb3J+iPSOw/mRiaEIUpUaU6dKMYRSUoSUYpJfVdrhyPPJUb7pNeJB0qy3O/mDhH/JFty4bPcV80sGqalKFXPxpxUZWfSbaTX7sUH83aP8Aw1T+eH6HjbnVW9exKnnbKunH0NY0fT3ZHaUMRRpV6d8tWKkk965p9U7ryLkWcl8rm/8ADcPfg66XVKtM6xGRunRVJKz5JHEI3lR9UEkwCrx5klWXM5KZtphxAHXjzF3mPMeyFqw4gMcRF8R9vHmFoWrCj3APEx5jd6jzDZBqyzcRW71HmP3qPMNl7DRlgQBYmPMfvMeYbIWrDCA95jzG71HmPdew1ZYuK5X71HmP3mPMN0GrDpgcdjIUac6tR5YU4uUn0XLm+g3eI8ziPm52llwkKUXrWqrMucIJyf8A5ZCeP9pJCcWcP8VfF1bGTak7UU3s6S0SV9HJL7Uur3cDAlVKUpijUOrFqKpEXEPUaas0vMrSUo/Z1XLivAJtB1IHyCdAFXT8R1VaJVaMZePPiVZxlHqvcg7RONMt7e3ELhq+eUY33tdG1fcnwZmQqRejD4aMVJNX0aflci5NrgnGKi7Z9M/DMqfdKGySUI04xUVf6ZR+mSd97Uk9eO81IvVHmfys7Ty068Zyk1KUZxvdxu7qeXlra6/U7yPalPTVcDlzksctG+URljk3aXDPlsca4jp2ZNT3aNeXNhI4iXNmV3nUk8UcrRHdo1Nq+Ytr1M3vI/eVzJKBBmmqr5jqr1Mfvgu99R9MVGxtepJVDI72uZB4t8GLpjNedaw7q3RkVK7e9jQrPmCh7HSNunVS4ku8Ixs7fEi61t7DpC4NqOLQ/fEZUZpreDjPqHTVhRs99Qz7QRlRd9xCcraC6aBRRrvtE4T5m4zP3eNtyqv1yr8jpItnF/MNWnRfOElblaX9fYu/HjWRFeZLR0ck5EcxCUgM6uvQ3uRmUbLKmETZXhV5Jv2QVTvwsSTISQa7EyCYmyRAhPDp70EpRiugymPdCpDtnT/BmLlTxEUn9NVOM4342vGaXisv/Uj0FYjVHm/wRO2ItlunGTTe+Elua9WvNHdZ9Tk/mwvLZ0vxf+Z4sMIR0DknqKrdRKuZcZsLGTMWp3mjR23UFPEFZNilEnGJTJpFjbjrEFOTbCUdxZoQUkWXVY3egE6nAZRFoPau5b70ycK7YPZJJEtlpdMOmLdF2ji7A8TVUmZqk9R4yYOI413ReinzJfVzKqrMJt1beLUdlilWcXe4WVa7uZsXcJC6IvGrslsaUMRY4b47xGbERX3acV5tt/odZHEaHEfF7/jt84wftb8izEv2KM/xMCbBRX1ak5sFTl9Rcyhdi7Faaa/iOmDUb6r+w6nz9SxEGFTJQkDQzZIhQWpEgpEqVXgO0nrHzXIYvo6D4Jl/HbW5U5X/ANN3G1zttpqcN8GUZOu5RTyZJKb4XvGy8b6+R2rjuOfnjc2zo/jNKB4+IVhGs5Vo7+lUi5BMRWjfQzosnlMqO46LaxA/eUVFFkp0G0ST5IyjFoNSxKzdDQqdowtovYxKVNp6irS5MvMzirLE8Q23YadZ8yODjrqWZUotkowfcozZor9S1g4yqLeLFuUFv0IUqmTSLKXaGKlJWYOKQoZHPhEqdfM7ItRjJGPhptamhHEvmVyaL4KSVFyUG0Bikt7BvEPiyvUlfURYk/ZZnicrJvtAyatQGpEWTSRv4evc5D4tmtvo90Y36O70OiwUrHO/FFL+Nmt9qKfi1dP8BwXJTm4RhSYOj9rfYnJEKK+rXkT8lPguOLWqXmmLaL/Mn4r9CK+lb7rl+jFeL3O3iTKwsIxf2ZeTJyi1vQCVJcWiVOs48cy5Mkn7E/oUlyJRnfc7S9pBHGMlePmuQDKh0Kzrvg/EyjCqmrLPG3+7L9WnhlNueJbaMjsKDVCCz503KUW1bIno4eClF+bZfyswy5bZ1MKUYI84GGHNZxrOrhJlijK7B92ki9hKG65mVUdufDAupZh6eKB4ynaVlxCwwjcRqmiqbplPG4q60KGdh8RRabAxRejPK0aGDqaBlU1M6OJyBcJirz1JJ+CtwT5ovZ9SnipassTl9em4o45vMKXYljSTJwX0jwr8AFJysO3l3+fgQaLkyzWrpLV2XN6FWXalNaXb8F+pz2OxznJv+VfdiV1WLVGK7maWab+J0j7RpP7/AKRf5hI42i/8zX+6L/8Am5zG1H2jG4wfgis2ReTsKWLhwnF+dvxsZHxJWu4O/B7muZjKqNUqX057yOkVyiTzSkqaK8p9Q+Aje7uBnHcGw2l7efgQUaYnK0WXBp3X9GM7PjboR2rQtomWcEOSSjbkxOw1/MYA7kVJxd0GUlLo/wAQWUbL0BAdr2BbYU7X31FL/dmb/BxNJprUwfhypal/3J/+sDbnir2Mck7f9Z0sXxX8POLiGHNJyODssFiopOKv4O+goY5O6aTTvudtDA2r4P8AH30FCro78fEwKT4PUZIRTs2KeKpqVoRatvXDyLce1W1fRK2ie/8AHU5yNr79yLG3ukrWtv09BLIyiSi+Wi5mc5Xk7vg1deVuROdLUp0qyTtdpu261l5olV7QlGVmtODNeLIqpmLPFthKzSlacXZ31Vn4Ow06Nlni9OW5rlo9Xx9AGLxN5KyV7q3NJ77g41ZfUs2lk7O61vK5FylvfgW8VHVouU8ZllZvW17avQnPNN3e57vDquBSp1IJqVo3vzeml+K/dy5Rxrle/PRJJWjw6jhlcn24JSjHW0uWTw6yt3m3daRdtPYB2nWShPR6xaTtpd6bwFass2um++u/9Cn2piU4KKvwVnrzY4z5ojNx0bfcyLjXGkRuWWYqCZh0wVx7gpBQXOM2RQ9iVgTz2QWhLf8AuxXkSpTsO+QosTlb96ELcvbVehNSTWmpBx8gaBMdRlwV/D9AkJz5Fd3RJYqSEmkDRYvPkM1LjZAO9SJQbbJbJ9iNHW9kSyxjTldOK1T0azNy3eEkWMVicphUsc8yk3dqMIt88qSXskvInjsbnMrT8nTjmjGFIwriIjmg42xdjvDR3DQit7fsO5Lhc5p6zKrHT8bq3oRbfG9/Hfr7BM+tktXb9pirSV9N3le/UEkZJ9hQzLw6CnNLdw5u2vQhJyUX148vAqpb1o7ppX3f0ZZBGPLZYpvM7ZtOX9SVJZnKzvaKtfXNZ2/MoUpfS735INhZJau/LTVrrYtlORQrTtk5SSUrJ3XHk9d9vIp94lvzPUv7J1JNRaSWmaSy3T4tLezUwuCw9NWvGT4yl+S4IsxY5S58CnkiipZOC0a+mKu9zbV93jczO0GrpeZ1UalK1rqy3LgiE40X930Lo4JJ22VzzRa4RxTY1zsZUqPOPoDdKj09CTwv2V7nLUKak7OVuvUlUw7V9U7cv0Z0jhS5+xCVOk+PsR6T9j3RzTTW/QSkb08JRf8AYFLs6l1DpyDZGK5CTNZ9lQ4Sl7EH2XH779ELSQ90ZqkTVZ+PiXv8KX336C/wuP336INJD2RR2/REXUNJdlw+/L2JR7Opc36hpIWyMnMEhI1oYSiuFy5QdGG6PshqDQtkypDCTskoyfk947wVX7kv5Wa9PtSC4P2CrtuH3X7B0kWdRHHiHuIKMhdkxKpYTZBnNSZ7PI4y8h1NK2vB+RKhQnUbtrpf98wVNX4rRc7ajwxDW5v13pAYMkfISvDLo7P108uBnN3Zar1M3Hx11ehTf9yyCMGSrHWr3egSDs+GidivnJRaT1W9e5ZqZ75LM8Q+PJfv3I95AuN0QdMuhJ0QklZaWK6j966lbZobZonsyNIsPFdRPFdStsxtmLaQUg/eRd56gdkhbMLkHAbvPUSxPUEqaE6aC5BwGeK6ke8gtmJU0FsdIN3kXeQGVCcAthwG7yLvILIhZFqK2HBN4kXeCKghZB2xcEu8DPECdNDZEFyDgQhCJGY//9k='
            },
            {
                name: 'Monirul Hoque',
                userImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1kRIvrYp6bM4_LEKBL2OQau-jhZfNr0QKxw&usqp=CAU',
                imgUrl: 'data:image/jpeg;base64,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'
            },
            {
                name: 'Izhan',
                userImg: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                imgUrl: 'data:image/jpeg;base64,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'
            },
            {
                name: 'Sandani',
                userImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQnm7qaETgFaoTabNbopUVHpsBcqASi5M1IQ&usqp=CAU',
                imgUrl: 'data:image/jpeg;base64,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'
            },
            {
                name: 'Sabina',
                userImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6FTuThyL6wj5Z8PxoHJvAw3ivhHLlu1ckuw&usqp=CAU',
                imgUrl: 'data:image/jpeg;base64,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'
            }
        ];
        this.posts = [
            {
                title: 'Amar sonar bangla',
                time: '',
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBj1wk7gWqOcoAS0vSxJx8IW0Mum7MlijqzQ&usqp=CAU',
                message: 'You could also do this with Joda-Time. Use Period to represent a period. To format the period in the desired human representation, use PeriodFormatter which you can build by PeriodFormatterBuilder.'
            },
            {
                title: 'Rayyan',
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUNd-6AhaVZTqdFqPbHPwhToiGQb-g-KeShw&usqp=CAU',
                message: 'Yup awakened the dead I have, but here\'s my improved implementation based on @mtim posted code, as this thread comes almost on top of the searches so I am messing with the sleepy hollow,\n' +
                    '\n' +
                    '    public static String getFriendlyTime(Date dateTime) {\n' +
                    '    StringBuffer sb = new StringBuffer();\n' +
                    '    Date current = Calendar.getInstance().getTime();\n' +
                    '    long diffInSeconds = (current.getTime() - dateTime.getTime()) / 1000;\n' +
                    '\n' +
                    '    /*long diff[] = new long[]{0, 0, 0, 0};\n' +
                    '    /* sec *  diff[3] = (diffInSeconds >= 60 ? diffInSeconds % 60 : diffInSeconds);\n' +
                    '    /* min *  diff[2] = (diffInSeconds = (diffInSeconds / 60)) >= 60 ? diffInSeconds % 60 : diffInSeconds;\n' +
                    '    /* hours *  diff[1] = (diffInSeconds = (diffInSeconds / 60)) >= 24 ? diffInSeconds % 24 : diffInSeconds;\n' +
                    '    /* days * diff[0] = (diffInSeconds = (diffInSeconds / 24));\n' +
                    '     */'
            }
        ];
    }
    // @ts-ignore
    ngOnInit() {
        this.getPosts();
    }
    postMessage(form) {
        // tslint:disable-next-line:prefer-const
        this.createPost = form.value;
        // @ts-ignore
        this.createPost.title = 'Rayyan';
        this.createPost.avatar = 'https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg';
        console.log(this.createPost);
        return this.http.post(_shared_api_constants__WEBPACK_IMPORTED_MODULE_1__["USER_POST_API"].CREATE_POST, this.createPost, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhbWludWwiLCJleHAiOjE2MTY0NzcyOTgsImlhdCI6MTYxNjQ0MTI5OH0.abh3LQ5ANaMK3CgqqiMdSordV9Q7mxvNvJHUP0Tp-Wg' +
                '}')
        });
    }
    // @ts-ignore
    getPosts() {
        this.http.get(_shared_api_constants__WEBPACK_IMPORTED_MODULE_1__["USER_POST_API"].GET_POST, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhbWludWwiLCJleHAiOjE2MTY0NzcyOTgsImlhdCI6MTYxNjQ0MTI5OH0.abh3LQ5ANaMK3CgqqiMdSordV9Q7mxvNvJHUP0Tp-Wg')
        })
            .subscribe(value => {
            this.post = value;
            console.log(this.post);
        });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 154, vars: 3, consts: [[1, "home-container"], [1, "home__header"], [1, "home__header__left"], ["src", "assets/facebook.svg", "alt", "logo", "mat-card-avatar", "", 1, "logo_left"], [1, "left-input"], [1, "search-icon"], ["type", "text", "placeholder", "Search Facebook"], [1, "home__header__middle"], [1, "active"], [3, "click"], [1, "home__header__right"], ["src", "https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg", "alt", "avatar", "mat-card-avatar", ""], [1, "name"], ["matBadge", "4", "matBadgeColor", "primary", "matBadgeOverlap", "false", "matBadgePosition", "above after"], ["matBadge", "3", "matBadgeColor", "warn", "matBadgeOverlap", "false", "matBadgePosition", "above after"], [3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", "routerLink", "login"], [1, "home__body"], [1, "home__body__sidebarLeft"], [1, "inside"], [1, "user-avatar"], ["src", "https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg", "mat-card-avatar", "", "alt", ""], [1, "covid"], [1, "see-more"], [1, "home__body__contentMiddle"], [1, "home__body__contentMiddle__top"], ["class", "image-card", 4, "ngFor", "ngForOf"], [1, "home__body__contentMiddle__center"], [1, "post-message"], [1, "post-message-header", 2, "padding-bottom", "20px", "border-bottom", "1px solid lightgray"], ["alt", "", "mat-card-avatar", "", "src", "https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"], [3, "ngSubmit"], ["form", "ngForm"], ["name", "message", "ngModel", "", "placeholder", "Whats on your mind?", "type", "text", 1, "on-your-mind"], ["type", "submit", 2, "display", "none"], [1, "card-body"], ["color", "accent"], ["color", "primary"], ["color", "warn"], ["class", "posts", 4, "ngFor", "ngForOf"], [1, "home__body__feedRight"], [1, "image-card"], ["alt", "bg", 1, "bg", 3, "src"], ["alt", "avatar", 1, "avatar", 3, "src"], [1, "card-name"], [1, "posts"], [1, "posts__header"], ["mat-card-avatar", "", 3, "alt", "src"], [1, "posts__header__right"], [1, "posts__body"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "ondemand_video");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "store");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "group");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_Template_mat_icon_click_23_listener() { return ctx.getPosts(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "flag");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Aminul");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "mat-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "forum ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "mat-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "notifications ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "mat-icon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "expand_more");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "mat-menu", null, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "exit_to_app");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, " Logout ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](51, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "Aminul Hoque");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, " local_hospital");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "COVID-19 Information Center");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "flag");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, "Pages");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, "people");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, "Friends");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71, "chat");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, "Messenger");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](76, "store");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78, "Marketplace");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](81, "video_library");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](83, "Videos");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "mat-icon", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](86, "expand_more");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](88, "See More");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](91, HomeComponent_mat_card_91_Template, 6, 3, "mat-card", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "mat-card", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](94, "mat-card-header", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](95, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "form", 32, 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function HomeComponent_Template_form_ngSubmit_96_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](97); return ctx.postMessage(_r2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](98, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](99, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "mat-card-content", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](101, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "mat-icon", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](103, "videocam");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](104, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](105, "Live Video");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](106, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "mat-icon", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](108, "photo_album");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](109, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](110, "Photo/Video");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](111, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](112, "mat-icon", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](113, "mood");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](114, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](115, "Feeling/Activity");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](116, HomeComponent_mat_card_116_Template, 11, 5, "mat-card", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](117, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](118, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](119, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](120, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](121, " local_hospital");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](122, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](123, "COVID-19 Information Center");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](124, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](125, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](126, "flag");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](127, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](128, "Pages");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](129, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](130, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](131, "people");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](132, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](133, "Friends");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](134, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](135, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](136, "chat");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](137, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](138, "Messenger");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](139, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](140, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](141, "store");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](142, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](143, "Marketplace");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](144, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](145, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](146, "video_library");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](147, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](148, "Videos");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](149, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](150, "mat-icon", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](151, "expand_more");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](152, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](153, "See More");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matMenuTriggerFor", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.myDays);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.post);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardAvatar"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_6__["MatBadge"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuItem"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardHeader"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"]], styles: [".home-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  background-color: #FBF2F5;\n}\n\n\n\n.home__header[_ngcontent-%COMP%] {\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background-color: white;\n  padding: 5px;\n  position: fixed;\n  top: 0;\n  width: 100%;\n}\n\n.home__header__left[_ngcontent-%COMP%] {\n  display: flex;\n  margin-left: 10px;\n  align-items: center;\n  gap: 10px;\n  flex: 0.5;\n  height: 100%;\n}\n\n.home__header__left[_ngcontent-%COMP%]   div.left-input[_ngcontent-%COMP%] {\n  position: relative;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.home__header__left[_ngcontent-%COMP%]   div.left-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  outline: none;\n  border: 1px solid lightgray;\n  background-color: #FBF2F5;\n  padding: 10px 40px;\n  border-radius: 20px;\n  align-items: center;\n}\n\n.home__header__left[_ngcontent-%COMP%]   div.left-input[_ngcontent-%COMP%]::placeholder {\n  padding-left: 20px;\n  font-size: 15px;\n}\n\n.home__header__left[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 6px;\n  font-size: x-large;\n  left: 10px;\n  color: #828890;\n}\n\n.home__header__middle[_ngcontent-%COMP%] {\n  padding: 10px;\n  height: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex: 0.5;\n}\n\n.home__header__middle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 90%;\n  display: flex;\n  align-items: center;\n  padding: 18px 15px;\n  justify-content: center;\n}\n\n.home__header__middle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #1877F2;\n}\n\n.home__header__middle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:hover {\n  background-color: #F2F2F2;\n}\n\n.home__header__middle[_ngcontent-%COMP%]   div.active[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.home__header__middle[_ngcontent-%COMP%]   div.active[_ngcontent-%COMP%]::before {\n  content: \"\";\n  border-bottom: 4px solid #1877F2;\n  position: absolute;\n  bottom: -15px;\n  height: 2px;\n  width: 100%;\n}\n\n.home__header__middle[_ngcontent-%COMP%]   div.active[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #1877F2;\n}\n\n.home__header__right[_ngcontent-%COMP%] {\n  flex: 0.5;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  padding: 15px;\n  gap: 10px;\n}\n\n.home__header__right[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  cursor: pointer;\n}\n\n.home__header__right[_ngcontent-%COMP%]   span.name[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\n.home__header__right[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.home__header__right[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n\n.home__header__right[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:not(:first-of-type) {\n  padding: 10px;\n  border-radius: 50%;\n  background-color: #E4E6EB;\n}\n\n\n\n.home__body[_ngcontent-%COMP%] {\n  margin-top: 80px;\n  background-color: #FBF2F5;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: space-between;\n  padding-top: 10px;\n  align-items: start;\n}\n\n.home__body__sidebarLeft[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.home__body__sidebarLeft[_ngcontent-%COMP%]   .inside[_ngcontent-%COMP%] {\n  position: fixed;\n  padding: 15px;\n  margin-top: 5px;\n  width: 300px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n.home__body__sidebarLeft[_ngcontent-%COMP%]   .inside[_ngcontent-%COMP%]   .user-avatar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n}\n\n.home__body__sidebarLeft[_ngcontent-%COMP%]   .inside[_ngcontent-%COMP%]   .user-avatar[_ngcontent-%COMP%]   span.name[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\n.home__body__sidebarLeft[_ngcontent-%COMP%]   .inside[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  font-size: 16px;\n  align-items: center;\n}\n\n.home__body__sidebarLeft[_ngcontent-%COMP%]   .inside[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #1877F2;\n  font-size: xx-large;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n\n.home__body__sidebarLeft[_ngcontent-%COMP%]   .inside[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   mat-icon.see-more[_ngcontent-%COMP%] {\n  color: #828890;\n  padding: 5px;\n  border-radius: 50%;\n  background-color: #E4E6EB;\n}\n\n.home__body__sidebarLeft[_ngcontent-%COMP%]   .inside[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-of-type {\n  border-bottom: 1px solid lightgray;\n  padding-bottom: 20px;\n}\n\n.home__body__contentMiddle[_ngcontent-%COMP%] {\n  padding: 10px;\n  margin-left: 25%;\n  flex: 0.4;\n  display: flex;\n  flex-direction: column;\n  background-color: white;\n}\n\n.home__body__contentMiddle__top[_ngcontent-%COMP%] {\n  flex: 0.5;\n  display: flex;\n  gap: 10px;\n  justify-content: space-around;\n  align-items: center;\n  position: relative;\n  max-width: 100%;\n}\n\n.home__body__contentMiddle__top[_ngcontent-%COMP%]   .image-card[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 200px;\n  border-radius: 20px;\n  position: relative;\n  z-index: 0;\n}\n\n.home__body__contentMiddle__top[_ngcontent-%COMP%]   .image-card[_ngcontent-%COMP%]:hover   img.bg[_ngcontent-%COMP%] {\n  transform: scale(1.06);\n}\n\n.home__body__contentMiddle__top[_ngcontent-%COMP%]   .image-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-family: \"Segoe UI Historic\", \"Segoe UI\", Helvetica, Arial, sans-serif;\n  line-height: 1.2;\n  position: absolute;\n  bottom: 10px;\n  left: 5px;\n  color: white;\n  font-weight: 600;\n  padding: 10px 5px;\n}\n\n.home__body__contentMiddle__top[_ngcontent-%COMP%]   .image-card[_ngcontent-%COMP%]   img.bg[_ngcontent-%COMP%] {\n  max-width: 100%;\n  object-fit: cover;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  border-radius: 20px;\n  transition: all 0.3s ease;\n  cursor: pointer;\n}\n\n.home__body__contentMiddle__top[_ngcontent-%COMP%]   .image-card[_ngcontent-%COMP%]   img.avatar[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  z-index: 99;\n  position: absolute;\n  top: 10px;\n  left: 10px;\n}\n\n.home__body__contentMiddle__center[_ngcontent-%COMP%] {\n  padding: 0 10px;\n  min-height: 20px;\n  width: 80%;\n  align-self: center;\n  margin-top: 30px;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  gap: 20px;\n}\n\n.home__body__contentMiddle__center[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n}\n\n.home__body__contentMiddle__center[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .post-message-header[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n}\n\n.home__body__contentMiddle__center[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .post-message-header[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.home__body__contentMiddle__center[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .post-message-header[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]    > input.on-your-mind[_ngcontent-%COMP%] {\n  background-color: #F0F2F5;\n  display: inline-block;\n  outline: none;\n  border: none;\n  padding: 10px 20px;\n  border-radius: 20px;\n  width: 100%;\n}\n\n.home__body__contentMiddle__center[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  padding: 10px 40px;\n  width: 90%;\n  margin-top: 10px;\n  align-items: center;\n}\n\n.home__body__contentMiddle__center[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n  gap: 15px;\n}\n\n.home__body__contentMiddle__center[_ngcontent-%COMP%]   mat-card.posts[_ngcontent-%COMP%]   .posts__header[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.home__body__contentMiddle__center[_ngcontent-%COMP%]   mat-card.posts[_ngcontent-%COMP%]   .posts__header[_ngcontent-%COMP%]   .posts__header__right[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column-reverse;\n}\n\n.home__body__contentMiddle__center[_ngcontent-%COMP%]   mat-card.posts[_ngcontent-%COMP%]   .posts__header[_ngcontent-%COMP%]   .posts__header__right[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 15px;\n  text-transform: capitalize;\n  margin-bottom: 0;\n}\n\n.home__body__contentMiddle__center[_ngcontent-%COMP%]   mat-card.posts[_ngcontent-%COMP%]   .posts__body[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\n.home__body__feedRight[_ngcontent-%COMP%] {\n  flex: 0.4;\n  position: relative;\n  align-self: flex-start;\n}\n\n.home__body__feedRight[_ngcontent-%COMP%]   .inside[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  overflow-y: scroll;\n  overflow-x: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxob21lLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFxzdHlsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJDRlc7QURDYjs7QUFJQSxtQkFBQTs7QUFDQTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQ1phO0VEYWIsWUFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtBQURGOztBQU1FO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUFKSjs7QUFNSTtFQUNFLGtCQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0FBSk47O0FBTU07RUFDRSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUpSOztBQU9NO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0FBTFI7O0FBU0k7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FBUE47O0FBYUU7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQVhKOztBQWFJO0VBQ0UsWUFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FBWE47O0FBYU07RUFDRSxjQUFBO0FBWFI7O0FBZUk7RUFDRSx5QkFBQTtBQWJOOztBQWdCSTtFQUNFLGtCQUFBO0FBZE47O0FBZ0JNO0VBQ0UsV0FBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFkUjs7QUFpQk07RUFDRSxjQUFBO0FBZlI7O0FB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QUFoRVY7O0FBc0VVO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FBcEVaOztBQXNFWTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7QUFwRWQ7O0FBd0VRO0VBQ0UsZ0JBQUE7QUF0RVY7O0FBNkVFO0VBQ0UsU0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUEzRUo7O0FBNkVJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQTNFTiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInNyYy9zdHlsZXNcIjtcclxuXHJcbi5ob21lLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYm9keS1jb2xvcjtcclxufVxyXG5cclxuLyogSEVBREVSIFNFQ1RJT04gKi9cclxuLmhvbWVfX2hlYWRlciB7XHJcbiAgei1pbmRleDogMTAwMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRoZWFkZXItY29sb3I7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG5cclxuICAvLyBMRUZUIEhFQURFUiAvL1xyXG5cclxuICAmX19sZWZ0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDEwcHg7XHJcbiAgICBmbGV4OiAwLjU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgZGl2LmxlZnQtaW5wdXQge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuXHJcbiAgICAgIGlucHV0IHtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkJGMkY1O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggNDBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6OnBsYWNlaG9sZGVyIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnNlYXJjaC1pY29uIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDZweDtcclxuICAgICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gICAgICBsZWZ0OiAxMHB4O1xyXG4gICAgICBjb2xvcjogIzgyODg5MDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIExFRlQgRU5EUyBIRVJFIC8vXHJcblxyXG4gICZfX21pZGRsZSB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4OiAwLjU7XHJcblxyXG4gICAgZGl2IHtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICB3aWR0aDogOTAlO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBwYWRkaW5nOiAxOHB4IDE1cHg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgICAgbWF0LWljb24ge1xyXG4gICAgICAgIGNvbG9yOiAjMTg3N0YyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGl2OmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0YyRjJGMjtcclxuICAgIH1cclxuXHJcbiAgICBkaXYuYWN0aXZlIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICBib3JkZXItYm90dG9tOiA0cHggc29saWQgIzE4NzdGMjtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm90dG9tOiAtMTVweDtcclxuICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG5cclxuICAgICAgbWF0LWljb24ge1xyXG4gICAgICAgIGNvbG9yOiAjMTg3N0YyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBNSURETEUgRU5EUyBIRVJFIC8vXHJcblxyXG4gICZfX3JpZ2h0IHtcclxuICAgIGZsZXg6IDAuNTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBnYXA6IDEwcHg7XHJcblxyXG4gICAgPiAqIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgc3Bhbi5uYW1lIHtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgfVxyXG5cclxuICAgIGRpdiB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICBzcGFuIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGl2Om5vdCg6Zmlyc3Qtb2YtdHlwZSkge1xyXG4gICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFNEU2RUI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBSSUdIVCBFTkRTIEhFUkVcclxufVxyXG5cclxuLyogQk9EWSBTRUNUSU9OICovXHJcblxyXG4uaG9tZV9fYm9keSB7XHJcbiAgbWFyZ2luLXRvcDogODBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYm9keS1jb2xvcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xyXG5cclxuICAvLyBCT0RZIFNJREVCQVIgLy9cclxuXHJcbiAgJl9fc2lkZWJhckxlZnQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgIC5pbnNpZGUge1xyXG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBnYXA6IDIwcHg7XHJcblxyXG4gICAgICAudXNlci1hdmF0YXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBnYXA6IDE1cHg7XHJcblxyXG4gICAgICAgIHNwYW4ubmFtZSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBkaXYge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZ2FwOiAyMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICBtYXQtaWNvbiB7XHJcbiAgICAgICAgICBjb2xvcjogIzE4NzdGMjtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XHJcbiAgICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbWF0LWljb24uc2VlLW1vcmUge1xyXG4gICAgICAgICAgY29sb3I6ICM4Mjg4OTA7XHJcbiAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTRFNkVCO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjpsYXN0LW9mLXR5cGUge1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gTUlERExFIEJPRFkgLy9cclxuICAmX19jb250ZW50TWlkZGxlIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMjUlO1xyXG4gICAgZmxleDogMC40O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgICAmX190b3Age1xyXG4gICAgICBmbGV4OiAwLjU7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGdhcDogMTBweDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgLmltYWdlLWNhcmQge1xyXG4gICAgICAgIHdpZHRoOiAxMjBweDtcclxuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHotaW5kZXg6IDA7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgaW1nLmJnIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA2KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiU2Vnb2UgVUkgSGlzdG9yaWNcIiwgXCJTZWdvZSBVSVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIGJvdHRvbTogMTBweDtcclxuICAgICAgICAgIGxlZnQ6IDVweDtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4IDVweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGltZy5iZyB7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGltZy5hdmF0YXIge1xyXG4gICAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICB6LWluZGV4OiA5OTtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDogMTBweDtcclxuICAgICAgICAgIGxlZnQ6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJl9fY2VudGVyIHtcclxuICAgICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgICBtaW4taGVpZ2h0OiAyMHB4O1xyXG4gICAgICB3aWR0aDogODAlO1xyXG4gICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgZ2FwOiAyMHB4O1xyXG5cclxuICAgICAgbWF0LWNhcmQge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICAgICAucG9zdC1tZXNzYWdlLWhlYWRlciB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAgIGZvcm0ge1xyXG4gICAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGZvcm0gPiBpbnB1dC5vbi15b3VyLW1pbmQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjBGMkY1O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jYXJkLWJvZHkge1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHggNDBweDtcclxuICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBnYXA6IDE1cHg7XHJcblxyXG4gICAgICAgICAgICBtYXQtaWNvbiB7XHJcbiAgICAgICAgICAgICAgLy9mb250LXNpemU6IHh4LWxhcmdlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAvL2ZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgbWF0LWNhcmQucG9zdHMge1xyXG5cclxuICAgICAgICAucG9zdHNfX2hlYWRlciB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgICAgICAgIGltZyB7XHJcblxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5wb3N0c19faGVhZGVyX19yaWdodCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcclxuXHJcbiAgICAgICAgICAgIGgzIHtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wb3N0c19fYm9keSB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gQk9EWSBGRUVEXHJcbiAgJl9fZmVlZFJpZ2h0IHtcclxuICAgIGZsZXg6IDAuNDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XHJcblxyXG4gICAgLmluc2lkZSB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIiRwcmltYXJ5LWJ1dHRvbi1jb2xvcjogIzE4NzdGMjtcclxuJHN1Y2Nlc3MtYnV0dG9uLWNvbG9yOiAjNDJCNzJBO1xyXG5cclxuJGhlYWRlci1jb2xvcjogd2hpdGU7XHJcbiRib2R5LWNvbG9yOiAjRkJGMkY1O1xyXG5cclxuXHJcbiJdfQ== */"] });


/***/ }),

/***/ "MvpR":
/*!**********************************!*\
  !*** ./src/app/modal.service.ts ***!
  \**********************************/
/*! exports provided: ModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return ModalService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ModalService {
    constructor() {
        this.modals = [];
    }
    // tslint:disable-next-line:typedef
    add(modal) {
        // add modal to array of active modals
        this.modals.push(modal);
    }
    // tslint:disable-next-line:typedef
    remove(id) {
        // remove modal from array of active modals
        this.modals = this.modals.filter(x => x.id !== id);
    }
    // tslint:disable-next-line:typedef
    open(id) {
        // open modal specified by id
        const modal = this.modals.find(x => x.id === id);
        modal.open();
    }
    // tslint:disable-next-line:typedef
    close(id) {
        // close modal specified by id
        const modal = this.modals.find(x => x.id === id);
        modal.close();
    }
}
ModalService.ɵfac = function ModalService_Factory(t) { return new (t || ModalService)(); };
ModalService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ModalService, factory: ModalService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'untitled';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, consts: [[2, "display", "none"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "W3Zi":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _shared_api_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/api.constants */ "3LN8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/bidi */ "cH1L");






class LoginComponent {
    // tslint:disable-next-line:variable-name
    constructor(_http) {
        this._http = _http;
    }
    ngOnInit() {
    }
    login(form) {
        this._http.post(_shared_api_constants__WEBPACK_IMPORTED_MODULE_0__["USER_API"].AUTHENTICATE, form.value).subscribe(res => console.log(res));
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 174, vars: 1, consts: [[1, "login-container"], [1, "login__header"], [1, "login__header__left"], ["src", "assets/facebook-logo-full.png", "alt", "logo"], [1, "login__header__right"], [1, "login__header__right__card"], [1, "login__header__right__card__content"], [1, "login-form", 3, "ngSubmit"], ["form", "ngForm"], ["type", "text", "name", "username", "ngModel", "", "placeholder", "Email address or phone number", "required", ""], ["type", "password", "name", "password", "ngModel", "", "placeholder", "Password", "required", ""], ["type", "submit", 1, "login-button", 3, "disabled"], ["id", "forgot", "href", "#"], [1, "create-account"], [1, "tagline"], [1, "login__footer"], [1, ""], [1, "_8opy"], [1, "_95ke"], ["id", "pageFooter", "data-referrer", "page_footer", "data-testid", "page_footer"], ["data-nocookies", "1", 1, "uiList", "localeSelectorList", "_2pid", "_509-", "_4ki", "_6-h", "_6-j", "_6-i"], ["dir", "ltr", "href", "https://bn-in.facebook.com/", "title", "Bengali", 1, "_sv4"], ["dir", "ltr", "href", "https://as-in.facebook.com/", "title", "Assamese", 1, "_sv4"], ["dir", "ltr", "href", "https://hi-in.facebook.com/", "title", "Hindi", 1, "_sv4"], ["dir", "ltr", "href", "https://id-id.facebook.com/", "title", "Indonesian", 1, "_sv4"], ["dir", "ltr", "href", "https://ne-np.facebook.com/", "title", "Nepali", 1, "_sv4"], ["dir", "ltr", "href", "https://zh-cn.facebook.com/", "title", "Simplified Chinese (China)", 1, "_sv4"], ["dir", "rtl", "href", "https://ar-ar.facebook.com/", "title", "Arabic", 1, "_sv4"], ["dir", "ltr", "href", "https://ms-my.facebook.com/", "title", "Malay", 1, "_sv4"], ["dir", "ltr", "href", "https://es-la.facebook.com/", "title", "Spanish", 1, "_sv4"], ["dir", "ltr", "href", "https://pt-br.facebook.com/", "title", "Portuguese (Brazil)", 1, "_sv4"], ["role", "button", "rel", "dialog", "ajaxify", "/settings/language/language/?uri=https%3A%2F%2Fpt-br.facebook.com%2F&source=www_list_selector_more", "href", "#", "title", "Show more languages", 1, "_42ft", "_4jy0", "_517i", "_517h", "_51sy"], [1, "img", "sp_9-wrMfOJ0eG", "sx_2998c7"], ["id", "contentCurve"], ["id", "pageFooterChildren", "role", "contentinfo", "aria-label", "Facebook site links"], [1, "uiList", "pageFooterLinkList", "_509-", "_4ki", "_703", "_6-i"], ["href", "/#", "title", "Sign up for Facebook"], ["href", "/login/", "title", "Log in to Facebook"], ["href", "/#/", "title", "Take a look at Messenger."], ["href", "/#/", "title", "Facebook Lite for Android."], ["href", "https://www.facebook.com/watch/", "title", "Browse our Watch videos."], ["href", "/directory/people/", "title", "Browse our people directory."], ["href", "/directory/pages/", "title", "Browse our Pages directory."], ["href", "/pages/category/"], ["href", "/places/", "title", "Take a look at popular places on Facebook."], ["href", "/games/", "title", "Check out Facebook games."], ["href", "/directory/places/", "title", "Browse our places directory."], ["href", "/marketplace/", "title", "Buy and sell on Facebook Marketplace."], ["href", "https://pay.facebook.com/", "target", "_blank", "title", "Learn more about Facebook Pay"], ["href", "/directory/groups/", "title", "Browse our Groups directory."], ["href", "/jobs/", "title", "Apply for jobs and hire on Facebook."], ["href", "https://www.oculus.com/", "target", "_blank", "title", "Learn more about Oculus"], ["href", "https://portal.facebook.com/", "target", "_blank", "title", "Learn more about Portal from Facebook"], ["href", "https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2F&h=AT26zJpUdyD-uU65jxJS29o9I3DyOVhB6x8cyaBJ_LLsQ_tf5HfqznC7Ap2XOD8oZcexcfLkPjYGfOPDPkgRZfi4tDgdMQjrohvA_PITDTGJ5p6O0UjCPVol5Sd_FaQCkrvwBeoxVFfZR8j2EQ2J_w", "title", "Take a look at Instagram", "target", "_blank", "rel", "noopener nofollow", "data-lynx-mode", "asynclazy"], ["href", "/local/lists/245019872666104/", "title", "Browse our Local Lists directory."], ["href", "/fundraisers/", "title", "Donate to worthy causes."], ["href", "/biz/directory/", "title", "Browse our Facebook Services directory."], ["href", "/votinginformationcenter/?entry_point=c2l0ZQ%3D%3D", "title", "See the Voting Information Centre"], ["href", "/facebook", "accesskey", "8", "title", "Read our blog, discover the resource centre and find job opportunities."], ["href", "/ad_campaign/landing.php?placement=pflo&campaign_id=402047449186&extra_1=auto", "title", "Advertise on Facebook"], ["href", "/pages/create/?ref_type=site_footer", "title", "Create a Page"], ["href", "https://developers.facebook.com/?ref=pf", "title", "Develop on our platform."], ["href", "/careers/?ref=pf", "title", "Make your next career move to our brilliant company."], ["data-nocookies", "1", "href", "/privacy/explanation", "title", "Learn about your privacy and Facebook."], ["href", "/policies/cookies/", "title", "Learn about cookies and Facebook.", "data-nocookies", "1"], ["data-nocookies", "1", "href", "https://www.facebook.com/help/568137493302217", "title", "Learn about AdChoices.", 1, "_41ug"], [1, "img", "sp_9-wrMfOJ0eG", "sx_656b76"], ["data-nocookies", "1", "href", "/policies?ref=pf", "accesskey", "9", "title", "Review our terms and policies."], ["href", "/help/?ref=pf", "accesskey", "0", "title", "Visit our Help Centre."], ["accesskey", "6", "href", "/settings", "title", "View and edit your Facebook settings.", 1, "accessible_elem"], ["accesskey", "7", "href", "/allactivity?privacy_source=activity_log_top_menu", "title", "View your activity log", 1, "accessible_elem"], [1, "mvl", "copyright"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Facebook helps you connect and share with the people in your life. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-card", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-card-content", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "form", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](10); return ctx.login(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Sign in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Forgotten account?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Create New Account ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Create a Page");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " for a celebrity, band or business.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "footer", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "ul", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "English (UK)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "\u09AC\u09BE\u0982\u09B2\u09BE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "\u0985\u09B8\u09AE\u09C0\u09AF\u09BC\u09BE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "\u0939\u093F\u0928\u094D\u0926\u0940");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Bahasa Indonesia");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "\u0928\u0947\u092A\u093E\u0932\u0940");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "\u4E2D\u6587(\u7B80\u4F53)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "\u0627\u0644\u0639\u0631\u0628\u064A\u0629");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Bahasa Melayu");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Espa\u00F1ol");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Portugu\u00EAs (Brasil)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "ul", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "Log In");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "Messenger");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "Facebook Lite");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, " Watch ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "a", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "People");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "Pages");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "Page categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, "Places");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "Games");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, "Locations");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, "Marketplace");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](105, "Facebook Pay");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "a", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](108, "Groups");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "a", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](111, "Jobs");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](114, "Oculus");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "a", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](117, "Portal");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "a", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](120, "Instagram");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](123, "Local");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "a", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](126, "Fundraisers");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "a", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](129, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "a", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](132, "Voting Information Centre");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](135, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "a", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](138, "Create ad");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "a", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](141, "Create Page");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "a", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](144, "Developers");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "a", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](147, "Careers");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "a", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](150, "Privacy");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "a", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](153, "Cookies");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "a", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](156, "AdChoices");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](157, "i", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](159, "a", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](160, "Terms");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "a", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](163, "Help");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](164, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "a", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](166, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](167, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](168, "a", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](169, "Activity log");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](171, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](172, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](173, " Facebook \u00A9 2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", _r0.invalid || _r0.pending);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["Dir"]], styles: [".login-container[_ngcontent-%COMP%] {\n  background-color: #F0F2F5;\n  height: 100%;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n}\n\n.login__header[_ngcontent-%COMP%] {\n  height: 70%;\n  display: flex;\n  gap: 20px;\n  margin-top: 50px;\n  align-items: center;\n  justify-content: center;\n}\n\n.login__header__left[_ngcontent-%COMP%] {\n  width: 50%;\n  padding-right: 32%;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n\n.login__header__left[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 56px;\n  margin-right: 32px;\n  margin-bottom: 20px;\n}\n\n.login__header__left[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: normal;\n  line-height: 32px;\n  width: 500px;\n}\n\n.login__header__right__card[_ngcontent-%COMP%] {\n  max-height: 380px;\n  width: 400px;\n  padding: 10px;\n  border-radius: 10px;\n  margin-bottom: 30px;\n}\n\n.login__header__right__card__content[_ngcontent-%COMP%] {\n  padding: 5px;\n  display: flex;\n  flex-direction: column;\n}\n\n.login__header__right__card__content[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.login__header__right__card__content[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 20px;\n  outline: none;\n  border: 1px solid lightgray;\n  border-radius: 5px;\n}\n\n.login__header__right__card__content[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]::placeholder {\n  font-size: 16px;\n  font-weight: normal;\n}\n\n.login__header__right__card__content[_ngcontent-%COMP%]   .login-button[_ngcontent-%COMP%] {\n  background-color: #1877F2;\n  padding: 15px;\n  outline: none;\n  border: none;\n  border-radius: 7px;\n  color: white;\n  font-size: 18px;\n  font-weight: bold;\n  margin-bottom: 20px;\n  cursor: pointer;\n}\n\n.login__header__right__card[_ngcontent-%COMP%]   #forgot[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #1877F2;\n  border-bottom: 1px solid lightgray;\n  margin-bottom: 20px;\n  padding-bottom: 20px;\n  cursor: pointer;\n  text-align: center;\n}\n\n.login__header__right__card[_ngcontent-%COMP%]   .create-account[_ngcontent-%COMP%] {\n  background-color: #42B72A;\n  display: inline-block;\n  align-self: center;\n  outline: none;\n  border: none;\n  border-radius: 7px;\n  padding: 15px 30px;\n  color: white;\n  font-size: 18px;\n  font-weight: bold;\n  cursor: pointer;\n}\n\n.login__header__right[_ngcontent-%COMP%]   .tagline[_ngcontent-%COMP%] {\n  text-align: center;\n  letter-spacing: 0.7px;\n}\n\n@media screen and (max-width: 1000px) {\n  .login__header[_ngcontent-%COMP%] {\n    height: 70%;\n    display: flex;\n    margin-top: 50px;\n    align-items: center;\n    flex-direction: column;\n  }\n  .login__header__left[_ngcontent-%COMP%] {\n    width: 20%;\n    padding-right: 0%;\n    display: flex;\n    align-items: center;\n  }\n  .login__header__left[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-height: 30px;\n    margin-right: 0px;\n  }\n  .login__header__left[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 0px;\n    line-height: 0px;\n    width: 0px;\n  }\n}\n\n\n\n.login__footer[_ngcontent-%COMP%] {\n  align-self: flex-end;\n  color: #737373;\n  margin: 0 auto;\n  width: 80%;\n  display: flex;\n  align-items: center;\n}\n\n._8opy[_ngcontent-%COMP%] {\n  padding-top: 20px;\n}\n\n._2pid[_ngcontent-%COMP%] {\n  padding-top: 8px;\n}\n\n.localeSelectorList[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  flex-wrap: wrap;\n}\n\nul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  padding-top: 0px;\n}\n\n._4ki._6-h[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:first-child {\n  padding-left: 0;\n}\n\n._4ki._6-i[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  padding-right: 0;\n}\n\n._4ki._6-j[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  padding-left: 0px;\n  padding-right: 10px;\n}\n\n.uiList[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:first-child {\n  border-width: 0;\n}\n\n._509-[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  vertical-align: top;\n  margin: 5px;\n}\n\n._4ki[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  border-width: 0 0 0 1px;\n  display: inline-block;\n}\n\nul[_ngcontent-%COMP%] {\n  list-style-type: none;\n}\n\n#facebook[_ngcontent-%COMP%]   ._-kb[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  font-family: inherit;\n}\n\n.mvl[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\nlabel[_ngcontent-%COMP%], select[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  font-family: Helvetica, Arial, sans-serif;\n  font-size: 10px;\n}\n\n#pageFooter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  white-space: nowrap;\n}\n\n._95ke[_ngcontent-%COMP%]   #pageFooterChildren[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], ._95ke[_ngcontent-%COMP%]   .localeSelectorList[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #8a8d91;\n}\n\na[_ngcontent-%COMP%] {\n  color: #385898;\n  cursor: pointer;\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsb2dpbi5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcc3R5bGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFFQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUhGOztBQU1BO0VBQ0UsV0FBQTtFQUVBLGFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBSkY7O0FBTUU7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQUpKOztBQU1JO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBSk47O0FBT0k7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFMTjs7QUFlSTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBYk47O0FBZU07RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBYlI7O0FBZVE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FBYlY7O0FBZVU7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7QUFiWjs7QUFnQlU7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7QUFkWjs7QUFrQlE7RUFDRSx5QkMvRWE7RURnRmIsYUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBaEJWOztBQW9CTTtFQUNFLHFCQUFBO0VBQ0EsY0M5RmU7RUQrRmYsa0NBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBbEJSOztBQXFCTTtFQUNFLHlCQ3RHZTtFRHVHZixxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFuQlI7O0FBdUJJO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtBQXJCTjs7QUEwQkE7RUFDRTtJQUNFLFdBQUE7SUFFQSxhQUFBO0lBRUEsZ0JBQUE7SUFDQSxtQkFBQTtJQUVBLHNCQUFBO0VBMUJGO0VBNEJFO0lBQ0UsVUFBQTtJQUNBLGlCQUFBO0lBRUEsYUFBQTtJQUNBLG1CQUFBO0VBM0JKO0VBNkJJO0lBQ0UsZ0JBQUE7SUFDQSxpQkFBQTtFQTNCTjtFQStCSTtJQUNFLGNBQUE7SUFDQSxnQkFBQTtJQUNBLFVBQUE7RUE3Qk47QUFDRjs7QUFzQ0EsOEJBQUE7O0FBQ0E7RUFHRSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQXRDRjs7QUF5Q0E7RUFDRSxpQkFBQTtBQXRDRjs7QUEwQ0E7RUFDRSxnQkFBQTtBQXZDRjs7QUEwQ0E7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FBdkNGOztBQTBDQTtFQUNFLHFCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQXZDRjs7QUEwQ0E7RUFDRSxlQUFBO0FBdkNGOztBQTBDQTtFQUNFLGdCQUFBO0FBdkNGOztBQTBDQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7QUF2Q0Y7O0FBMENBO0VBQ0UsZUFBQTtBQXZDRjs7QUEwQ0E7RUFDRSxtQkFBQTtFQUNBLFdBQUE7QUF2Q0Y7O0FBMkNBO0VBQ0UsdUJBQUE7RUFDQSxxQkFBQTtBQXhDRjs7QUEyQ0E7RUFDRSxxQkFBQTtBQXhDRjs7QUEyQ0E7RUFDRSxvQkFBQTtBQXhDRjs7QUEyQ0E7RUFDRSxnQkFBQTtBQXhDRjs7QUE0Q0E7RUFDRSx5Q0FBQTtFQUNBLGVBQUE7QUF6Q0Y7O0FBNENBO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtBQXpDRjs7QUE0Q0E7RUFDRSxjQUFBO0FBekNGOztBQTRDQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUF6Q0Y7O0FBNENBLFVBQUE7O0FBQ0EsZ0JBQUE7O0FBQ0EsSUFBQSIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJzcmMvc3R5bGVzLnNjc3NcIjtcclxuXHJcblxyXG4ubG9naW4tY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjBGMkY1O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICAvL3dpZHRoOiAxMDA7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmxvZ2luX19oZWFkZXIge1xyXG4gIGhlaWdodDogNzAlO1xyXG4gIC8vd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDIwcHg7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAmX19sZWZ0IHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMiU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgIG1heC1oZWlnaHQ6IDU2cHg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMzJweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICBoMiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDMycHg7XHJcbiAgICAgIHdpZHRoOiA1MDBweDtcclxuICAgIH1cclxuXHJcbiAgICAvL2gyOjphZnRlcntcclxuICAgIC8vICBtYXgtd2lkdGg6IDU2MHB4O1xyXG4gICAgLy99XHJcbiAgfVxyXG5cclxuICAmX19yaWdodCB7XHJcblxyXG4gICAgJl9fY2FyZCB7XHJcbiAgICAgIG1heC1oZWlnaHQ6IDM4MHB4O1xyXG4gICAgICB3aWR0aDogNDAwcHg7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcblxyXG4gICAgICAmX19jb250ZW50IHtcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICAgICAubG9naW4tZm9ybSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIGdhcDogMTBweDtcclxuXHJcbiAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICY6OnBsYWNlaG9sZGVyIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmxvZ2luLWJ1dHRvbiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1idXR0b24tY29sb3I7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICNmb3Jnb3Qge1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBjb2xvcjogJHByaW1hcnktYnV0dG9uLWNvbG9yO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY3JlYXRlLWFjY291bnQge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRzdWNjZXNzLWJ1dHRvbi1jb2xvcjtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgICAgICBwYWRkaW5nOiAxNXB4IDMwcHg7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAudGFnbGluZSB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuN3B4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XHJcbiAgLmxvZ2luX19oZWFkZXIge1xyXG4gICAgaGVpZ2h0OiA3MCU7XHJcbiAgICAvLy8vd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLy9nYXA6IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC8vanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICZfX2xlZnQge1xyXG4gICAgICB3aWR0aDogMjAlO1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAwJTtcclxuICAgICAgLy9wYWRkaW5nLXJpZ2h0OiAzMiU7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICBpbWcge1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgICAgICAgLy9tYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBoMiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDBweDtcclxuICAgICAgICB3aWR0aDogMHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG59XHJcblxyXG5cclxuLyoqKioqKioqKmZvb3RlciBzdHlsZSoqKioqKioqL1xyXG4ubG9naW5fX2Zvb3RlciB7XHJcbiAgLy9tYXJnaW4tdG9wOiAyMHB4O1xyXG4gIC8vaGVpZ2h0OiAzMHZoO1xyXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG4gIGNvbG9yOiAjNzM3MzczO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uXzhvcHkge1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG59XHJcblxyXG4vL1xyXG4uXzJwaWQge1xyXG4gIHBhZGRpbmctdG9wOiA4cHg7XHJcbn1cclxuXHJcbi5sb2NhbGVTZWxlY3Rvckxpc3Qge1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbnVsIHtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgcGFkZGluZy10b3A6IDBweDtcclxufVxyXG5cclxuLl80a2kuXzYtaCA+IGxpOmZpcnN0LWNoaWxkIHtcclxuICBwYWRkaW5nLWxlZnQ6IDA7XHJcbn1cclxuXHJcbi5fNGtpLl82LWkgPiBsaSB7XHJcbiAgcGFkZGluZy1yaWdodDogMDtcclxufVxyXG5cclxuLl80a2kuXzYtaiA+IGxpIHtcclxuICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4udWlMaXN0ID4gbGk6Zmlyc3QtY2hpbGQge1xyXG4gIGJvcmRlci13aWR0aDogMDtcclxufVxyXG5cclxuLl81MDktID4gbGkge1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgbWFyZ2luOiA1cHg7XHJcblxyXG59XHJcblxyXG4uXzRraSA+IGxpIHtcclxuICBib3JkZXItd2lkdGg6IDAgMCAwIDFweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbnVsIHtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbn1cclxuXHJcbiNmYWNlYm9vayAuXy1rYiBkaXYge1xyXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG59XHJcblxyXG4ubXZsIHtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIC8vbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxubGFiZWwsIHNlbGVjdCwgdGQge1xyXG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxufVxyXG5cclxuI3BhZ2VGb290ZXIgYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuXHJcbi5fOTVrZSAjcGFnZUZvb3RlckNoaWxkcmVuIGEsIC5fOTVrZSAubG9jYWxlU2VsZWN0b3JMaXN0IGEge1xyXG4gIGNvbG9yOiAjOGE4ZDkxO1xyXG59XHJcblxyXG5hIHtcclxuICBjb2xvcjogIzM4NTg5ODtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4vKi5fc3Y0IHsqL1xyXG4vKiAgbWFyZ2luOiAycHgqL1xyXG4vKn0qL1xyXG4iLCIkcHJpbWFyeS1idXR0b24tY29sb3I6ICMxODc3RjI7XHJcbiRzdWNjZXNzLWJ1dHRvbi1jb2xvcjogIzQyQjcyQTtcclxuXHJcbiRoZWFkZXItY29sb3I6IHdoaXRlO1xyXG4kYm9keS1jb2xvcjogI0ZCRjJGNTtcclxuXHJcblxyXG4iXX0= */"] });
LoginComponent.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LoginComponent, factory: LoginComponent.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "XC3f":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modal.service */ "MvpR");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");




class RegisterComponent {
    constructor(modalService, el) {
        this.modalService = modalService;
        this.el = el;
        this.id = '1';
        this.element = el.nativeElement;
    }
    ngOnInit() {
        // ensure id attribute exists
        if (!this.id) {
            console.error('modal must have an id');
            return;
        }
        // move element to bottom of page (just before </body>) so it can be displayed above everything else
        document.body.appendChild(this.element);
        // close modal on background click
        this.element.addEventListener('click', el => {
            if (el.target.className === 'register') {
                this.close();
            }
        });
        // add self (this modal instance) to the modal service so it's accessible from controllers
        this.modalService.add(this);
    }
    // remove self from modal service when component is destroyed
    // tslint:disable-next-line:use-lifecycle-interface
    ngOnDestroy() {
        this.modalService.remove(this.id);
        this.element.remove();
    }
    // open modal
    open() {
        this.element.style.display = 'block';
        document.body.classList.add('jw-modal-open');
    }
    // close modal
    close() {
        this.element.style.display = 'none';
        document.body.classList.remove('jw-modal-open');
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_modal_service__WEBPACK_IMPORTED_MODULE_1__["ModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], inputs: { id: "id" }, decls: 328, vars: 1, consts: [["id", "1", 1, "register"], [1, "header"], [1, "body"], ["form", "ngForm"], [1, "user_name"], ["type", "text", "placeholder", "First Name", "name", "fname", "ngModel", ""], ["type", "text", "placeholder", "Surname", "name", "sname", "ngModel", ""], [1, "email_password"], ["type", "text", "placeholder", "Mobile number or email address", "name", "email_mobile", "ngModel", ""], ["type", "password", "placeholder", "New Password", "name", "password", "ngModel", ""], [1, "selectors"], [1, "birth_date"], [1, "title_name"], ["aria-label", "Day", "name", "birth_day", "id", "day", "title", "Day", "ngModel", "12", 1, "birth"], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], ["value", "5"], ["value", "6"], ["value", "7"], ["value", "8"], ["value", "9"], ["value", "10"], ["value", "11"], ["value", "12", "selected", "1"], ["value", "13"], ["value", "14"], ["value", "15"], ["value", "16"], ["value", "17"], ["value", "18"], ["value", ""], ["value", "20"], ["value", "21"], ["value", "22"], ["value", "23"], ["value", "24"], ["value", "25"], ["value", "26"], ["value", "27"], ["value", "28"], ["value", "29"], ["value", "30"], ["value", "31"], ["aria-label", "Month", "name", "birthday_month", "id", "month", "title", "Month", "ngModel", "2", 1, "birth"], ["value", "12"], ["aria-label", "Year", "name", "birthday_year", "id", "year", "title", "Year", "ngModel", "1", 1, "birth"], ["value", "19"], ["value", "32"], ["value", "33"], ["value", "34"], ["value", "35"], ["value", "36"], ["value", "37"], ["value", "38"], ["value", "39"], ["value", "40"], ["value", "41"], ["value", "42"], ["value", "43"], ["value", "44"], ["value", "45"], ["value", "46"], ["value", "47"], ["value", "48"], ["value", "49"], ["value", "50"], ["value", "51"], ["value", "53"], ["value", "54"], ["value", "55"], ["value", "56"], ["value", "57"], ["value", "58"], ["value", "59"], ["value", "60"], ["value", "61"], ["value", "62"], ["value", "63"], ["value", "64"], ["value", "65"], ["value", "66"], ["value", "67"], ["value", "68"], ["value", "69"], ["value", "70"], ["value", "71"], ["value", "72"], ["value", "73"], ["value", "74"], ["value", "75"], ["value", "76"], ["value", "77"], ["value", "78"], ["value", "79"], ["value", "80"], ["value", "81"], ["value", "82"], ["value", "83"], ["value", "84"], ["value", "85"], ["value", "86"], ["value", "87"], ["value", "88"], ["value", "89"], ["value", "90"], ["value", "91"], ["value", "92"], ["value", "93"], ["value", "94"], ["value", "95"], ["value", "96"], ["value", "97"], ["value", "98"], ["value", "99"], ["value", "100"], ["value", "101"], [1, "gender"], [1, "mat-radio-button"], ["for", "l1", 1, "label"], ["type", "radio", "name", "sex", "value", "1", "id", "l1", "ngModel", "", 1, "input_label"], ["for", "l2", 1, "label"], ["type", "radio", "name", "sex", "value", "2", "id", "l2", "ngModel", "", 1, "input_label"], ["for", "l3", 1, "label"], ["type", "radio", "name", "sex", "value", "3", "id", "l3", "ngModel", "", 1, "input_label"], ["type", "submit", 1, "submit-button", 3, "mat-dialog-close"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "It's quick and easy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", null, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Date of birth");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "11");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "12");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "13");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "14");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "15");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "16");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "option", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "17");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "option", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "18");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "option", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "option", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "20");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "option", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "21");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "option", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "22");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "option", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "23");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "option", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "24");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "option", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "25");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "option", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "26");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "option", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "27");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "option", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "28");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "option", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "29");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "option", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "30");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "option", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "31");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "select", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Jan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Feb");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Mar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Apr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "May");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Jun");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Jul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Aug");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Sep");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Oct");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Nov");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "option", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Dec");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "select", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "2018");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "2017");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "2016");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "2015");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "2014");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "2013");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "2012");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "2011");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "option", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "2010");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "2009");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "2008");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "2007");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "2006");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "option", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "2005");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "option", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "2004");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "option", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "2003");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "option", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "2002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "option", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "2001");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "option", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "2000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "option", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "1999");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "option", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "1998");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "option", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "1997");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "option", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "1996");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "option", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "1995");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "option", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "1994");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "option", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "1993");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "option", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "1992");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "option", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "1991");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "option", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "1990");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "option", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "1989");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "option", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "1988");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "option", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "1987");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "option", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "1986");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "option", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "1985");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "option", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "1984");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "option", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "1983");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "option", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "1982");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "option", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "1981");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "option", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "1980");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "option", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "1979");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "option", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "1978");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "option", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "1977");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "option", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "1976");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "option", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "1975");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "option", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "1974");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "option", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "1973");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "option", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "1972");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "option", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "1971");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "option", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, "1970");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "option", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, "1969");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "option", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, "1968");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "option", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, "1967");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "option", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, "1966");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "option", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "1965");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "option", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, "1964");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "option", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, "1963");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "option", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, "1962");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "option", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, "1961");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "option", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, "1960");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "option", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, "1959");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "option", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, "1958");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "option", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, "1957");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "option", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, "1956");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "option", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, "1955");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "option", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, "1954");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "option", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, "1953");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "option", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](246, "1952");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "option", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](248, "1951");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "option", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](250, "1950");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "option", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](252, "1949");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "option", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, "1948");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "option", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256, "1947");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "option", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258, "1946");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "option", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](260, "1945");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "option", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, "1944");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "option", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](264, "1943");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "option", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](266, "1942");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "option", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](268, "1941");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "option", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](270, "1940");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "option", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](272, "1939");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "option", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](274, "1938");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "option", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](276, "1937");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "option", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](278, "1936");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "option", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](280, "1935");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "option", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](282, "1934");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "option", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](284, "1933");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "option", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](286, "1932");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "option", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](288, "1931");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "option", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](290, "1930");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "option", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](292, "1929");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "option", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](294, "1928");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "option", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](296, "1927");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "option", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](298, "1926");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "option", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](300, "1925");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "option", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](302, "1924");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "option", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](304, "1923");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "option", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](306, "1922");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "option", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](308, "1921");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "div", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](311, "Gender");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "span", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "label", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](314, "Female");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](315, "input", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "span", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "label", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](318, "Male");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](319, "input", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "span", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "label", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](322, "Other");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](323, "input", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](325, "By clicking Sign Up, you agree to our Terms, Data Policy and Cookie Policy. You may receive SMS notification from us and can opt out at any time.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "button", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](327, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](326);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", _r0.value);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RadioControlValueAccessor"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogClose"]], styles: [".register[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n}\r\n.header[_ngcontent-%COMP%] {\r\n  border-bottom: 1px solid lightgray;\r\n  width: 100%;\r\n}\r\nh3[_ngcontent-%COMP%] {\r\n  font-weight: bold;\r\n  font-size: 32px;\r\n}\r\n.body[_ngcontent-%COMP%] {\r\n  margin-top: 20px;\r\n}\r\nform[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  width: 100%;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n}\r\n.user_name[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n  width: 100%;\r\n}\r\ninput[_ngcontent-%COMP%] {\r\n  flex: 1;\r\n  outline: none;\r\n  border: 1px solid lightgray;\r\n  border-radius: 8px;\r\n  padding: 10px;\r\n  background-color: #F5F6F7;\r\n}\r\n.email_password[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n  margin-top: 10px;\r\n}\r\np[_ngcontent-%COMP%] {\r\n  font-size: 11px;\r\n  margin-top: 20px;\r\n  color: #777777;\r\n}\r\n.submit-button[_ngcontent-%COMP%] {\r\n  padding: 10px 18px;\r\n  background-color: #00A400;\r\n  font-weight: bold;\r\n  text-align: center;\r\n  display: inline-block;\r\n  width: 200px;\r\n  align-self: center;\r\n  outline: none;\r\n  border: none;\r\n  border-radius: 10px;\r\n  color: white;\r\n  font-size: 16px;\r\n  letter-spacing: 1.1px;\r\n  cursor: pointer;\r\n}\r\n.selectors[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  width: 100%;\r\n  flex-direction: column;\r\n}\r\n.birth_date[_ngcontent-%COMP%], .gender[_ngcontent-%COMP%] {\r\n  outline: none;\r\n  padding: 10px;\r\n}\r\n.birth[_ngcontent-%COMP%]{\r\n  flex: 1;\r\n  border: 1px solid lightgray;\r\n  border-radius: 8px;\r\n  padding: 10px;\r\n  width: 32%;\r\n  margin-right: 1%;\r\n}\r\n.mat-radio-button[_ngcontent-%COMP%]{\r\n  flex: 1;\r\n  overflow: hidden;\r\n  border: 1px solid lightgray;\r\n  border-radius: 8px;\r\n  padding: 10px 9.5%;\r\n  margin-right: 1%;\r\n}\r\n.title_name[_ngcontent-%COMP%]{\r\n  font-size: 12px;\r\n  padding: 5px;\r\n  margin-bottom: 5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0FBQ1o7QUFDQTtFQUNFLGtDQUFrQztFQUNsQyxXQUFXO0FBQ2I7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLHVCQUF1QjtBQUN6QjtBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsV0FBVztBQUNiO0FBRUE7RUFDRSxPQUFPO0VBQ1AsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLHNCQUFzQjtBQUN4QjtBQUVBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7QUFDZjtBQUNBO0VBQ0UsT0FBTztFQUNQLDJCQUEyQjtFQUMzQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLE9BQU87RUFDUCxnQkFBZ0I7RUFDaEIsMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCO0FBR0E7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlZ2lzdGVyIHtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcbi5oZWFkZXIge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmgzIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDMycHg7XHJcbn1cclxuLmJvZHkge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbmZvcm0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnVzZXJfbmFtZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMTBweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gIGZsZXg6IDE7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjZGNztcclxufVxyXG5cclxuLmVtYWlsX3Bhc3N3b3JkIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiAxMHB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbnAge1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIGNvbG9yOiAjNzc3Nzc3O1xyXG59XHJcblxyXG4uc3VibWl0LWJ1dHRvbiB7XHJcbiAgcGFkZGluZzogMTBweCAxOHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMEE0MDA7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBsZXR0ZXItc3BhY2luZzogMS4xcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5zZWxlY3RvcnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmJpcnRoX2RhdGUsIC5nZW5kZXIge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG4uYmlydGh7XHJcbiAgZmxleDogMTtcclxuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgd2lkdGg6IDMyJTtcclxuICBtYXJnaW4tcmlnaHQ6IDElO1xyXG59XHJcbi5tYXQtcmFkaW8tYnV0dG9ue1xyXG4gIGZsZXg6IDE7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIHBhZGRpbmc6IDEwcHggOS41JTtcclxuICBtYXJnaW4tcmlnaHQ6IDElO1xyXG59XHJcblxyXG5cclxuLnRpdGxlX25hbWV7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login.component */ "W3Zi");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/register/register.component */ "XC3f");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./material.module */ "vvyD");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");











class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"],
        _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
        _components_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"]], imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
        _material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login.component */ "W3Zi");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/register/register.component */ "XC3f");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







const routes = [
    {
        path: '',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
    },
    {
        path: 'login',
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
    },
    {
        path: 'register',
        component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"],
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();


/***/ }),

/***/ "vvyD":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/badge */ "TU8p");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");









const modules = [
    _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
    _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
    _angular_material_badge__WEBPACK_IMPORTED_MODULE_7__["MatBadgeModule"]
];
class MaterialModule {
}
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ factory: function MaterialModule_Factory(t) { return new (t || MaterialModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            ...modules
        ], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_7__["MatBadgeModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_7__["MatBadgeModule"]], exports: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_7__["MatBadgeModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map