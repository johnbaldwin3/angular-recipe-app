import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {
  // place to manage recipes
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A test recipe', 'this is a test description', 'https://fillmurray.com/299/299'),
    new Recipe('A fine recipe', 'food fit for people who wish they were a king', 'https://fillmurray.com/300/300' ),
    new Recipe('A bad recipe', 'really not great food', 'https://fillmurray.com/301/301' ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
