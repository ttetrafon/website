import { Injectable } from '@angular/core';

import { MainService } from './main.service';

import { CookingIngredient } from '../models/cooking-ingredient';
import { CookingRecipe } from '../models/cooking-recipe';
import { CookingRecipeBase } from '../models/cooking-recipe-base';
import { CookingUnits } from '../models/cooking-units';

@Injectable({
  providedIn: 'root'
})
export class CookingService {
  private ingredients: { [key: string] : CookingIngredient };
  private subRecipes: { [key: string] : CookingRecipeBase };
  private recipes: { [key: string] : CookingRecipe };

  constructor(private main: MainService) {
    main.log(this, "Started", console.log);
    this.ingredients = {};
    this.subRecipes = {};
    this.recipes = {};
    this.dataInitialisation();
  }

  private async dataInitialisation(): Promise<void> {
    this.main.log(this, "---> dataInitialisation()", console.log);


  }

}
