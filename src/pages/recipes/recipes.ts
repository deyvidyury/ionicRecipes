import { RecipePage } from './../recipe/recipe';
import { RecipesService } from './../../services/recipes';
import { Recipe } from './../../models/recipe';
import { EditRecipePage } from './../edit-recipe/edit-recipe';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-recipes',
  templateUrl: 'recipes.html',
})
export class RecipesPage {
  recipes: Recipe[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private recipesService: RecipesService) {

  }

  ionViewWillEnter() {
    this.recipes = this.recipesService.getRecipes();
  }

  onLoadRecipe(recipe: Recipe, index: number) {
    this.navCtrl.push(RecipePage, { recipe: recipe, index: index });
  }

  onNewRecipe() {
    this.navCtrl.push(EditRecipePage, { mode: 'New' });
  }

}
