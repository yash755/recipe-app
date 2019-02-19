import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';
import {ActivatedRoute, Params} from '@angular/router';
import {RecipeService} from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe: Recipe;
  id: number;
  length = this.recipeService.getRecipes().length;

  constructor(public route: ActivatedRoute, public recipeService: RecipeService) { }

  ngOnInit() {
    // listen and get recipe from route params id
    const id = this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.recipe = this.recipeService.getRecipe(this.id);
    });
  }

}




