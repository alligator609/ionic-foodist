import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { CartItem } from 'src/app/models/cart-item.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  cartItems$:Observable<CartItem[]>;
  constructor(private cartService:CartService, private alertCtrl: AlertController) { }
  total$:Observable<number>;
  ngOnInit() {
    this.cartItems$ = this.cartService.getCart()
    this.total$ = this.cartService.getTotal();
  }
  onIncrease(item:CartItem){
   this.cartService.changeQuantity(item.id,1);
  }
  onDecrease(item:CartItem){
    if(item.quantity==1){
      this.cartService.removeItem(item.id);
    }else{  
    this.cartService.changeQuantity(item.id,-1);
  }
  }

  async removeFromCart(item:CartItem){
    const alert = await this.alertCtrl.create({
      header: 'Remove Item',
      message: 'Are you sure you want to remove this item from the cart?',
      buttons: [
        {
          text: 'Yes',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            this.cartService.removeItem(item.id);
          }
        }, {
          text: 'No',
        }
      ]});
      alert.present();
  }
}
