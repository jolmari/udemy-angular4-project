import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
	selector: 'app-recipes-list',
	templateUrl: './recipes-list.component.html',
	styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
	private recipes: Recipe[] = [
		new Recipe('Test recipe',
		'This is a test recipe!',
		'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Recipe-575434.svg/2000px-Recipe-575434.svg.png'),
		new Recipe('Test recipe #2',
		'This is also a test recipe!',
		'https://c1.staticflickr.com/6/5127/5263978082_01bbd0e746_b.jpg')
	];

	constructor() { }

	ngOnInit() { }

}
