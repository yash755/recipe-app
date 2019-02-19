import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipes/recipe.model';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {RecipeService} from '../services/recipe.service';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {

  id: number;
  editMode = false;
  recipeEditForm;
  newForm = false;
  imagePath: string;

  constructor(public route: ActivatedRoute, public recipeService: RecipeService, public router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    const name = '';
    const imagePath = '';
    const description = '';
    const ingredients = new FormArray([]);
    // Form set up Reactive
    this.recipeEditForm = new FormGroup({
      'name': new FormControl(name, Validators.required),
      'imagePath': new FormControl(imagePath, Validators.required),
      'description': new FormControl(description, Validators.required),
      'ingredients': ingredients
    });
  }


  // add new form group to ingredient list
  onAddIngredient() {
    this.editMode = true;
    (<FormArray>this.recipeEditForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      })
    );
  }


  // adds altered or new recipe to recipe array
  onSubmit() {
    console.log(this.recipeEditForm);
    const newRecipe = new Recipe(this.recipeEditForm.value['name'], this.recipeEditForm.value['description'], this.recipeEditForm.value['imagePath'], this.recipeEditForm.value['ingredients'])
      this.recipeService.addRecipe(newRecipe);
      this.router.navigate(['/recipes']);
  }


  deleteIngredient(index: number) {
    (<FormArray>this.recipeEditForm.get('ingredients')).removeAt(index);
  }


  onCancel() {
    this.router.navigate(['/recipes']);
  }


}
