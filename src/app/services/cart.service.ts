import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../models/cart-item.model';
import {map} from 'rxjs/operators';

@Injectable({ providedIn: 'root' })


export class CartService  {

  private item$ = new BehaviorSubject<CartItem[]>([
    {
      id:1,
      name:'sea food',
      price:0,
      quantity:0,
      image:'assets/images/1.jpg'
    }
  ]);
  constructor() {
  }
  getItems() {
    return this.item$.asObservable();
  }
  addItem(item: CartItem) {
    if(this.item$.getValue().find(i => i.id === item.id)) {
      this.changeQuantity(item.id, 1);
    }
    else{
      this.item$.next([...this.item$.getValue(), item]);
    }
  }
  removeItem(item: number) {
    this.item$.next(this.item$.getValue().filter(i => i.id !== item));
  }
  getCart(){
    return this.item$.asObservable();
  }
  
  changeQuantity(id: number, quantity: number) {
    const cartItems =this.item$.getValue();
    const index = cartItems.findIndex(i => i.id === id);
    cartItems[index].quantity += quantity;
    this.item$.next(cartItems);
  }

  getTotal() {
    return this.item$.pipe(
      map(items => {
        let total = 0;
        items.forEach(item => {
          total += item.price * item.quantity;
        });
        return total;}
    ));
  }
}