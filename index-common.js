"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var content_view_1 = require("tns-core-modules/ui/content-view");
var TabBarCommon = (function (_super) {
    __extends(TabBarCommon, _super);
    function TabBarCommon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return TabBarCommon;
}(content_view_1.ContentView));
exports.TabBarCommon = TabBarCommon;
