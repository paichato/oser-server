"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCourse = void 0;
const CreateCourseServices_1 = __importDefault(require("./CreateCourseServices"));
const createCourse = (req, res) => {
    CreateCourseServices_1.default.execute("nodejs", 60, "paichato");
    return res.send();
};
exports.createCourse = createCourse;
