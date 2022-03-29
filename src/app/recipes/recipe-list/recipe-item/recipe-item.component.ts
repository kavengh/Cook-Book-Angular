import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
})
export class RecipeItemComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<Recipe>();

  @Input() recipe: Recipe;
  constructor() {}

  ngOnInit(): void {}

  onSelected() {
    this.recipeSelected.emit(this.recipe);
  }
}
