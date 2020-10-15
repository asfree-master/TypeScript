import {IShape} from "./main_module_IShape";
//import {Triangle as xxx} from "./main_module_Triangle"; //export class
import {Triangle as xxx} from "./main_module_Triangle"; //export class - 이름을  {그대로 사용}
import CircleAlias from "./main_module_Circle";    //export default - 이름을 마음대로 정할 수 있음

function drawAllShape(shapToDraw: IShape){
   shapToDraw.draw();
}

drawAllShape(new CircleAlias());
drawAllShape(new xxx());

