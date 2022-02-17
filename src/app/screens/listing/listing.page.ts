import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { Food } from 'src/app/models/food.model';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.page.html',
  styleUrls: ['./listing.page.scss'],
})
export class ListingPage implements OnInit {
 categories:Category[] =[];
 foods:Food[] =[];
  constructor(private foodService:FoodService) { }

  ngOnInit() {
    this.getCategory();
    this.foods= this.foodService.getFoods();
  }

  getCategory(){
    // add dummy data for category

    this.categories = [
      {
        id: 1,
        name: 'Fruits',
        label: 'Fruits',
        active: true,
        image: 'assets/images/1.jpg'
      },{
        id: 2,
        name: 'Vegetables',
        label: 'Vegetables',
        active: false,
        image: 'assets/images/2.jpg'
      },{
        id: 3,
        name: 'Meat',
        label: 'Meat',
        active: false,
        image: 'assets/images/3.jpg'
      },
      {
        id: 4,
        name: 'Dairy',
        label: 'Dairy',
        active: false,
        image: 'assets/images/4.jpg' 
      },
      {
        id: 5,
        name: 'Beverages',
        label: 'Beverages',
        active: false,
        image: 'assets/images/5.jpg'
      },
      {
        id: 6,
        name: 'Bread',
        label: 'Bread',
        active: false,
        image: 'assets/images/6.jpg'
      }
    ]
  }

}
