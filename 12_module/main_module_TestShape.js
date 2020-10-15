"use strict";
exports.__esModule = true;
//import {Triangle as xxx} from "./main_module_Triangle"; //export class
var main_module_Triangle_1 = require("./main_module_Triangle"); //export class - 이름을  {그대로 사용}
var main_module_Circle_1 = require("./main_module_Circle"); //export default - 이름을 마음대로 정할 수 있음
function drawAllShape(shapToDraw) {
    shapToDraw.draw();
}
drawAllShape(new main_module_Circle_1["default"]());
drawAllShape(new main_module_Triangle_1.Triangle());
