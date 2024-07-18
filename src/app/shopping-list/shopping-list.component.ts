import { Component } from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient("Flour", 250),
    new Ingredient("Sugar", 100),
    new Ingredient("Milk", 200),
    new Ingredient("Eggs", 3),
    new Ingredient("Butter", 50),
    new Ingredient("Baking Powder", 1),
    new Ingredient("Salt", 1),
  ];

}
