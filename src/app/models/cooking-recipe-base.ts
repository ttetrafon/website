import { CookingIngredient } from './cooking-ingredient';

export class CookingRecipeBase {
    private name: string;
    private ingredients: { [key: string] : CookingIngredient };
    private steps: Array<string>;

    constructor(name: string, ingredients: { [key: string] : CookingIngredient } | undefined, steps: Array<string> | undefined) {
        this.name = name
        this.ingredients = ingredients ? ingredients : {};
        this.steps = steps ? steps : [];
    }

}
