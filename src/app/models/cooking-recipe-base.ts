import { CookingIngredient } from './cooking-ingredient';

export class CookingRecipeBase {
    private name: string;
    private ingredients: { [key: string]: CookingIngredient };
    private steps: { [key: number]: string };

    constructor(name: string, ingredients: { [key: string] : CookingIngredient }, steps: { [key: number]: string }) {
        this.name = name
        this.ingredients = ingredients;
        this.steps = steps;
    }

}
