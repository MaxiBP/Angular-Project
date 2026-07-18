import { Injectable } from '@angular/core';
import { Background } from './background';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BackgroundCart {
  private _cartList: Background[] = [];
  cartList: BehaviorSubject<Background[]> = new BehaviorSubject(this._cartList);

  addToCart(image: Background) {
    let item = this._cartList.find((v1) => v1.name == image.name);
    if (!item) {
      this._cartList.push({ ...image });
    } else {
      item.quantity += image.quantity;
    }
    this.cartList.next(this._cartList);
    console.log(this._cartList);
  }
}
