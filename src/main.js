"use strict";

exports.__esModule = true;
var core_1 = require("@angular/core");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var app_module_1 = require("./app/app.module");
var environment_1 = require("./environments/environment");
if (environment_1.environment.production) {
  (0, core_1.enableProdMode)();
}
(0, platform_browser_dynamic_1.platformBrowserDynamic)()
  .bootstrapModule(app_module_1.AppModule)
  ["catch"](function (err) {
    return console.error(err);
  });
var a;
var b = [6, 8];
var g;
var Color;
(function (Color) {
  Color[(Color["red"] = 0)] = "red";
  Color[(Color["green"] = 1)] = "green";
  Color[(Color["blue"] = 2)] = "blue";
})(Color || (Color = {}));
var background = Color.blue;