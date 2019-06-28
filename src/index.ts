import { UserInterface } from "./user-interface";
import { RandomWalk } from "./random-walk/random-walk";

const ui = UserInterface.getInstance();

const walker = new RandomWalk();
walker.init(ui);
walker.beginWalking();
