import { CookingRecipeBase } from './cooking-recipe-base';

export class CookingRecipe {
    private name: string;
    private parts: Array<CookingRecipeBase>;

    constructor(name: string) {
        this.name = name;
        this.parts = [];
    }

}
