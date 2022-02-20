import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { CartItem } from 'src/app/models/cart-item.model';
import { Food } from 'src/app/models/food.model';
import { CartService } from 'src/app/services/cart.service';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
 id: number;
 food:Food;

  constructor( private activatedRoute:ActivatedRoute,private foodService:FoodService,
    private cartService:CartService,
    private toast:ToastController) 
    { 
    this.id = this.activatedRoute.snapshot.params['id'];
    console.log(this.id);
  }

  ngOnInit() {
    this.food = this.foodService.getFood(this.id);
console.log(this.food);

  }
  addItemToCart(){
    const cartitem:CartItem ={
      id:this.food.id,
      name:this.food.title,
      price:this.food.price,
      quantity:1,
      image:this.food.image
    };
    this.cartService.addItem(cartitem);
    this.presentToast();
  }

  async presentToast() {
    const toast = await this.toast.create({
      message: 'Item added to cart',
      duration: 1000,
      mode:'ios',
      position:'top'
    });
    toast.present();
  }
}
