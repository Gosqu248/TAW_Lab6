"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkPostCount = void 0;
var config_1 = require("../config");
var checkPostCount = function (request, response, next) {
    var num = request.params.num;
    var parsedValue = parseInt(num, 10);
    if (isNaN(parsedValue) || parsedValue >= config_1.config.supportedPostCount) {
        return response.status(400).send('Brak lub niepoprawna wartość!');
    }
    next();
};
exports.checkPostCount = checkPostCount;
//# sourceMappingURL=checkPostCount.middleware.js.map