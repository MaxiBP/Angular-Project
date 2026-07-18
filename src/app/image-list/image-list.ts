import { Component } from '@angular/core';
import { Background } from '../background';
import { BackgroundCart } from '../background-cart';

@Component({
  selector: 'app-image-list',
  standalone: false,
  templateUrl: './image-list.html',
  styleUrl: './image-list.scss',
})
export class ImageList {
  images: Background[] = [
    {
      name: 'Ruffy',
      type: 'Holo',
      price: 199,
      stock: -5,
      img: 'assets/images/ruffy.png',
      clearance: false,
      quantity: 0,
    },
    {
      name: 'luffy',
      type: 'painting',
      price: 199,
      stock: 5,
      img: 'assets/images/Luffy.png',
      clearance: true,
      quantity: 0,
    },
    {
      name: 'windowsLuffy',
      type: 'vintage',
      price: 199,
      stock: 5,
      img: 'assets/images/bg1.png',
      clearance: false,
      quantity: 0,
    },
  ];

  constructor(private cart: BackgroundCart) {}

  addToCart(image: Background): void {
    this.cart.addToCart(image);
    image.stock -= image.quantity;
    image.quantity = 0;
  }
}
