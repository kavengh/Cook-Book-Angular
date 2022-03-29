import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelector = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is a test',
      'https://freesvg.org/img/RecipeBook.png'
    ),
    new Recipe(
      'Another Test Recipe',
      'This is a test',
      'https://freesvg.org/img/RecipeBook.png'
    ),
  ];

  getRecipes() {
    // returns a copy
    return this.recipes.slice();
  }
}
