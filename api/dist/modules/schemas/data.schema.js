"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataSchema = void 0;
var mongoose_1 = require("mongoose");
exports.DataSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    text: { type: String, required: true },
    image: { type: String, required: true },
});
exports.default = (0, mongoose_1.model)('Post-GU', exports.DataSchema);
//# sourceMappingURL=data.schema.js.map