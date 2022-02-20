import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../models/cart-item.model';


@Injectable({ providedIn: 'root' })


export class CartService  {
  private item$ = new BehaviorSubject<CartItem[]>([]);
  constructor() {
  }
  getItems() {
    return this.item$.asObservable();
  }
  addItem(item: CartItem) {
    this.item$.next([...this.item$.getValue(), item]);
  }
  removeItem(item: CartItem) {
    this.item$.next(this.item$.getValue().filter(i => i.id !== item.id));
  }

}