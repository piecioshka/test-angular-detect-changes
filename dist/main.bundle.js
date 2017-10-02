webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_app_app_component__ = __webpack_require__("../../../../../src/app/components/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_channel_list_channel_list_component__ = __webpack_require__("../../../../../src/app/components/channel-list/channel-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_channel_list_element_channel_list_element_component__ = __webpack_require__("../../../../../src/app/components/channel-list-element/channel-list-element.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__components_app_app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__components_channel_list_channel_list_component__["a" /* ChannelListComponent */],
            __WEBPACK_IMPORTED_MODULE_4__components_channel_list_element_channel_list_element_component__["a" /* ChannelListElementComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__components_app_app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<fieldset>\n\n  <legend>root.component</legend>\n\n  <button (click)=\"onClickHandler()\">click</button>\n\n  <demo-channel-list></demo-channel-list>\n\n</fieldset>\n"

/***/ }),

/***/ "../../../../../src/app/components/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var console = {
    log: __webpack_require__("../../../../debug/src/browser.js")('root.component:log'),
    group: (typeof window === 'object' && window || global).console.group,
    groupEnd: (typeof window === 'object' && window || global).console.groupEnd
};
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.onClickHandler = function () {
        // nic nie rób
    };
    AppComponent.prototype.ngOnInit = function () {
        console.log('OnInit');
    };
    AppComponent.prototype.ngOnChanges = function () {
        console.log('OnChanges');
    };
    AppComponent.prototype.ngDoCheck = function () {
        console.group('DetectChanges Mechanism');
        console.log('DoCheck');
    };
    AppComponent.prototype.ngOnDestroy = function () {
        console.log('OnDestroy');
    };
    AppComponent.prototype.ngAfterContentInit = function () {
        console.log(' ↳ AfterContentInit');
    };
    AppComponent.prototype.ngAfterContentChecked = function () {
        console.log(' ↳ AfterContentChecked');
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        console.log(' ↳ AfterViewInit');
    };
    AppComponent.prototype.ngAfterViewChecked = function () {
        console.log(' ↳ AfterViewChecked');
        console.groupEnd();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'demo-root',
        template: __webpack_require__("../../../../../src/app/components/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../../../../webpack/buildin/global.js")))

/***/ }),

/***/ "../../../../../src/app/components/channel-list-element/channel-list-element.component.html":
/***/ (function(module, exports) {

module.exports = "<fieldset>\n\n  <legend>channel-list-element</legend>\n\n  <button (click)=\"onClickHandler()\">click</button>\n  <button (click)=\"onDisableHandler()\">✖︎</button>\n  <button (click)=\"onEnableHandler()\">▶︎</button>\n\n  <p>channel-list-element: {{ name }}</p>\n\n  {{ calculate() }}\n\n</fieldset>\n"

/***/ }),

/***/ "../../../../../src/app/components/channel-list-element/channel-list-element.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChannelListElementComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var console = {
    log: __webpack_require__("../../../../debug/src/browser.js")('channel-list-element.component:log'),
    warn: (typeof window === 'object' && window || global).console.warn
};
var ChannelListElementComponent = (function () {
    function ChannelListElementComponent(changeDetection) {
        this.changeDetection = changeDetection;
        this.name = null;
    }
    ChannelListElementComponent.prototype.onDisableHandler = function () {
        this.changeDetection.detach();
        console.warn(' ⚠️ ChangeDetection on this component is detached');
    };
    ChannelListElementComponent.prototype.onEnableHandler = function () {
        this.changeDetection.reattach();
        console.warn(' ⚠️ ChangeDetection on this component is reattached');
    };
    ChannelListElementComponent.prototype.onClickHandler = function () {
        // nic nie rób
    };
    ChannelListElementComponent.prototype.ngOnInit = function () {
        console.log('OnInit');
    };
    ChannelListElementComponent.prototype.ngOnChanges = function () {
        console.log('OnChanges');
    };
    ChannelListElementComponent.prototype.ngDoCheck = function () {
        console.log('DoCheck');
    };
    ChannelListElementComponent.prototype.ngOnDestroy = function () {
        console.log('OnDestroy');
    };
    ChannelListElementComponent.prototype.ngAfterContentInit = function () {
        console.log(' ↳ AfterContentInit');
    };
    ChannelListElementComponent.prototype.ngAfterContentChecked = function () {
        console.log(' ↳ AfterContentChecked');
    };
    ChannelListElementComponent.prototype.ngAfterViewInit = function () {
        console.log(' ↳ AfterViewInit');
    };
    ChannelListElementComponent.prototype.ngAfterViewChecked = function () {
        console.log(' ↳ AfterViewChecked');
    };
    ChannelListElementComponent.prototype.calculate = function () {
        console.warn(' ♨️ calculate (name=' + this.name + ')');
    };
    return ChannelListElementComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], ChannelListElementComponent.prototype, "name", void 0);
ChannelListElementComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'demo-channel-list-element',
        template: __webpack_require__("../../../../../src/app/components/channel-list-element/channel-list-element.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */]) === "function" && _a || Object])
], ChannelListElementComponent);

var _a;
//# sourceMappingURL=channel-list-element.component.js.map
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../../../../webpack/buildin/global.js")))

/***/ }),

/***/ "../../../../../src/app/components/channel-list/channel-list.component.html":
/***/ (function(module, exports) {

module.exports = "<fieldset>\n\n  <legend>channel-list.component</legend>\n\n  <button (click)=\"onClickHandler()\">click</button>\n\n  <demo-channel-list-element name=\"a\"></demo-channel-list-element>\n  <demo-channel-list-element name=\"b\"></demo-channel-list-element>\n  <demo-channel-list-element name=\"c\"></demo-channel-list-element>\n\n</fieldset>\n"

/***/ }),

/***/ "../../../../../src/app/components/channel-list/channel-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChannelListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
// master.component.ts
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var console = {
    log: __webpack_require__("../../../../debug/src/browser.js")('channel-list.component:log')
};
var ChannelListComponent = (function () {
    function ChannelListComponent() {
    }
    ChannelListComponent.prototype.onClickHandler = function () {
        // nic nie rób
    };
    ChannelListComponent.prototype.ngOnInit = function () {
        console.log('OnInit');
    };
    ChannelListComponent.prototype.ngOnChanges = function () {
        console.log('OnChanges');
    };
    ChannelListComponent.prototype.ngDoCheck = function () {
        console.log('DoCheck');
    };
    ChannelListComponent.prototype.ngOnDestroy = function () {
        console.log('OnDestroy');
    };
    ChannelListComponent.prototype.ngAfterContentInit = function () {
        console.log(' ↳ AfterContentInit');
    };
    ChannelListComponent.prototype.ngAfterContentChecked = function () {
        console.log(' ↳ AfterContentChecked');
    };
    ChannelListComponent.prototype.ngAfterViewInit = function () {
        console.log(' ↳ AfterViewInit');
    };
    ChannelListComponent.prototype.ngAfterViewChecked = function () {
        console.log(' ↳ AfterViewChecked');
    };
    return ChannelListComponent;
}());
ChannelListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'demo-channel-list',
        template: __webpack_require__("../../../../../src/app/components/channel-list/channel-list.component.html")
    })
], ChannelListComponent);

//# sourceMappingURL=channel-list.component.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");



// if (environment.production) {
Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* enableProdMode */])();
// }
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map