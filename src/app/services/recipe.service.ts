import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {Subject, Observable, throwError} from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from '../recipes/recipe.model';


@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();


 recipes: Recipe[] = [
    new Recipe(
      'Chinese Chicken',
      'Chinese Chicken with sweet and sour sauce',
      'https://s-media-cache-ak0.pinimg.com/originals/63/6d/8d/636d8d6cfbf1862e5ad5f89571c55430.jpg',
      [new Ingredient('Chicken Portions', 4), new Ingredient('Chinese spices', 1)]
    ),
    new Recipe(
      'Egg delight',
      'Lightly toasted wraps with fresh eggs',
      'http://cdn.skim.gs/images/v1/msi/ivenjnophdgmridughl3/dinner-recipes-under-300-calories',
      [new Ingredient('Eggs', 6), new Ingredient('Wraps', 2), new Ingredient('Cheese', 1)]
    ),
    new Recipe(
      'Fried EggPlant',
      'Eggplant daked with cheese',
      'https://i.ytimg.com/vi/VGSc5WIljb0/maxresdefault.jpg',
      [new Ingredient('Aubergine', 6), new Ingredient('Cheese', 2)]
    )
  ];



 /* setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }*/

  // gets recipes and returns them
  getRecipes() {
    return this.recipes.slice();
  }

/*
  removeRecipe(id: number) {
    this.recipes.splice(id, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
*/

  // finds a recipe by id
  getRecipe(index: number) {
    return this.recipes[index];
  }


  // adds a new recipe
  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }




/*  // updates existing altered recipe
  // observable emits when changed and emits new slice
  upDateRecipe(id: number, newRecipe: Recipe) {
    this.recipes[id] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }*/


}


