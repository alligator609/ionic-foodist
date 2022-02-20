import { Injectable } from '@angular/core';
import { Food } from '../models/food.model';


@Injectable({ providedIn: 'root' })


export class FoodService  {
  constructor() {
  }

  getFoods() : Food[] {
    return [
      {
        id: 1,
        title: 'Fruits',
        description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. dlorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. dd ',
        price: 1,
        image: 'assets/images/1.jpg'
      },
      {
        id: 2,
        title: 'Vegetables',
        description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. dlorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. dd ',
        price: 2,
        image: 'assets/images/2.jpg'
      },
      {
        id: 3,
        title: 'Meat',
        description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. dlorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. dd ',
        price: 3,
        image: 'assets/images/3.jpg'
      },
      {
        id: 4,
        title: 'Dairy',
        description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. dlorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. dd ',
        price: 4,
        image: 'assets/images/4.jpg'
      },
      {
        id: 5,
        title: 'Beverages',
        description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. dlorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. dd ',
        price: 5,
        image: 'assets/images/5.jpg'
      },
      {
        id: 6,
        title: 'Bread',
        description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. dlorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. dd ',

        price: 6,
        image: 'assets/images/6.jpg'
      },
      {
        id: 7,
        title: 'Fruits',
        description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. dlorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. dd ',

        price: 7,
        image: 'assets/images/1.jpg'
      },
      {
        id: 8,
        title: 'Vegetables',
        description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. dlorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. dd ',

        price: 8,

        image: 'assets/images/2.jpg'
      }];
  }

  getFood(id: number): Food {
    return this.getFoods().find(food => food.id == id);
  }
}