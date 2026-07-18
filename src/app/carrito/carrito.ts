import { Component } from '@angular/core';
import { BackgroundCart } from '../background-cart';
import { Background } from '../background';

@Component({
  selector: 'app-carrito',
  standalone: false,
  templateUrl: './carrito.html',
  styleUrl: './carrito.scss',
})
export class Carrito {
  carList: Background[] = [];
  constructor(private cart: BackgroundCart) {
    cart.cartList.subscribe((c) => (this.carList = c));
  }
}
