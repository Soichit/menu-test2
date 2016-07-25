import {Recipe} from "./recipe";


export class FoodType {
    constructor(public name: string, public foodItems: Recipe[]) {}
}