import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is a test',
      'https://freesvg.org/img/RecipeBook.png'
    ),
    new Recipe(
      'A Test Recipe',
      'This is a test',
      'https://freesvg.org/img/RecipeBook.png'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
