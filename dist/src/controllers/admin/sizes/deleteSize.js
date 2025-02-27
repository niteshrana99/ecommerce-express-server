"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteSize = void 0;
const db_1 = __importDefault(require("../../../../db"));
const baseController_1 = require("../baseController");
class SizeController extends baseController_1.BaseController {
    constructor() {
        super(db_1.default.size, 'sizeId');
    }
}
exports.deleteSize = new SizeController().deleteEntity;
