var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "backbone.marionette"], function (require, exports, Marionette) {
    "use strict";
    var App = (function (_super) {
        __extends(App, _super);
        function App() {
            _super.apply(this, arguments);
        }
        return App;
    }(Marionette.Application));
    exports.App = App;
    var app = new App();
    app.start;
});
//# sourceMappingURL=main.js.map