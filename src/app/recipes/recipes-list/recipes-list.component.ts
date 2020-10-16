import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', "This is simply a Test", "https://www.seriouseats.com/recipes/images/2017/06/20170627-summer-nachos-matt-clifton-1-1500x1125.jpg"),
    new Recipe('Another Test Recipe', "This is simply a Test", "https://www.seriouseats.com/recipes/images/2017/06/20170627-summer-nachos-matt-clifton-1-1500x1125.jpg")
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe){
    this.recipeWasSelected.emit(recipe);
  }
}
