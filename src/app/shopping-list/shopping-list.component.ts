import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model.ts';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('Apple', 10),
    new Ingredient('Tomato', 5),
    new Ingredient('Orange', 15),
    new Ingredient('Melon', 25),
  ];
}
