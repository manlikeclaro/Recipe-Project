import {Component} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      "Spaghetti Carbonara",
      "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
      "stock-img-1.jpg"
    ),
    new Recipe(
      "Chicken Alfredo",
      "A rich and creamy pasta dish made with chicken, cream, and Parmesan cheese.",
      "stock-img-1.jpg"
    ),
    new Recipe(
      "Beef Stroganoff",
      "A Russian dish of sautéed pieces of beef served in a sauce with smetana (sour cream).",
      "stock-img-1.jpg"
    ),
    new Recipe(
      "Margherita Pizza",
      "A simple pizza topped with tomatoes, mozzarella, and fresh basil.",
      "stock-img-1.jpg"
    ),
    new Recipe(
      "Caesar Salad",
      "A green salad of romaine lettuce and croutons dressed with a lemon juice, olive oil, egg, Worcestershire sauce, anchovies, garlic, Dijon mustard, Parmesan cheese, and black pepper.",
      "stock-img-1.jpg"
    ),
    new Recipe(
      "Tacos",
      "A traditional Mexican dish consisting of a small hand-sized corn or wheat tortilla topped with a filling.",
      "stock-img-1.jpg"
    ),
    new Recipe(
      "Sushi",
      "A Japanese dish consisting of vinegared rice, usually with some sugar and salt, accompanying a variety of ingredients such as seafood, vegetables, and occasionally tropical fruits.",
      "stock-img-1.jpg"
    ),
    new Recipe(
      "Chicken Tikka Masala",
      "Chunks of roasted marinated chicken in a spiced curry sauce. The sauce is usually creamy and orange-coloured.",
      "stock-img-1.jpg"
    ),
    new Recipe(
      "Pad Thai",
      "A stir-fried rice noodle dish commonly served as a street food and at most restaurants in Thailand.",
      "stock-img-1.jpg"
    ),
    new Recipe(
      "Pancakes",
      "A flat cake, often thin and round, prepared from a starch-based batter that may contain eggs, milk, and butter and cooked on a hot surface.",
      "stock-img-1.jpg"
    ),
  ];

  getImage = (image: string): string => {
    return `assets/images/${image}`;
  }

}
