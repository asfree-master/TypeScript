import {IShape} from "./main_module_IShape";

export default class Circle implements IShape{ //default 
  public draw(){
    console.log("Circle is drawn(external module)");
  }
}