import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model.ts';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient(1,'Apple', 10),
    new Ingredient(2,'Tomato', 5),
    new Ingredient(3,'Orange', 15),
    new Ingredient(4,'Melon', 25),
  ];
  trackByFn = (item : any) => {
    return item.id
  }
}
