import { CookingIngredient } from './cooking-ingredient';

export class CookingRecipeBase {
    private name: string;
    private ingredients: Array<CookingIngredient>;
    private steps: Array<string>;

    constructor(name: string) {
        this.name = name
        this.ingredients = [];
        this.steps = [];
    }

}
