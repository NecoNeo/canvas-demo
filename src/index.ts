import { UserInterface } from "./user-interface";
import { RandomWalk } from "./random-walk/random-walk";
import { First3DDemo } from "./first-3d-demo/first-3d-demo";

const ui = UserInterface.getInstance();

// const walker = new RandomWalk();
// walker.init(ui);
// walker.beginWalking();

const demo3d = new First3DDemo();
demo3d.init(ui);
