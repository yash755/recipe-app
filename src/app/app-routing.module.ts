import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {RecipesComponent} from './recipes/recipes.component';
import {RecipeListTemplateComponent} from './recipes/recipe-list/recipe-item/recipe-list-template/recipe-list-template.component';
import {RecipeDetailComponent} from './recipes/recipe-detail/recipe-detail.component';
import {AddRecipeComponent} from './add-recipe/add-recipe.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'recipes', component: RecipesComponent, children: [
      { path: '', component: RecipeListTemplateComponent },
      { path: ':id', component: RecipeDetailComponent }
    ]
  },
  {
    path: 'add-recipe', component: AddRecipeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
