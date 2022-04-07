import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient-model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  recipeSelector = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Chicken Rice Platter',
      'Grilled and seasoned chicken served over rice',
      'https://c.pxhere.com/photos/3b/0f/asian_brown_catering_cheese_chicken_cholesterol_colorful_cookery-819400.jpg!d',
      [new Ingredient('Chicken', 1), new Ingredient('Rice', 1)]
    ),
    new Recipe(
      'Lamb Rice Platter',
      'Grilled and seasoned lamb served over rice',
      'https://p1.pxfuel.com/preview/464/220/849/beef-hearts-rice-cuisine-gourmet-cilantro-white-plate.jpg',
      [new Ingredient('Chicken', 1), new Ingredient('Rice', 1)]
    ),
  ];

  getRecipes() {
    // returns a copy
    return this.recipes.slice();
  }

  constructor(private slService: ShoppingListService) {}

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }
}
