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
      type: 'Holographic',
      price: 249,
      stock: 5,
      img: 'assets/images/ruffy.png',
      clearance: false,
      quantity: 0,
    },
    {
      name: 'Classic Luffy',
      type: 'Painting',
      price: 179,
      stock: 8,
      img: 'assets/images/luffy.png',
      clearance: true,
      quantity: 0,
    },
    {
      name: 'Windows Luffy',
      type: 'Vintage',
      price: 149,
      stock: 12,
      img: 'assets/images/bg1.png',
      clearance: false,
      quantity: 0,
    },
    {
      name: 'Blue Horizon',
      type: 'Landscape',
      price: 129,
      stock: 10,
      img: 'assets/images/bg0.png',
      clearance: true,
      quantity: 0,
    },
    {
      name: 'Blue Horizon HD',
      type: '4K',
      price: 189,
      stock: 4,
      img: 'assets/images/bg01.png',
      clearance: false,
      quantity: 0,
    },
    {
      name: 'Ocean Dreams',
      type: 'Artwork',
      price: 159,
      stock: 6,
      img: 'assets/images/bg02.png',
      clearance: false,
      quantity: 0,
    },
    {
      name: 'Monkey D. Luffy',
      type: 'Anime',
      price: 269,
      stock: 7,
      img: 'assets/images/Monkey.png',
      clearance: false,
      quantity: 0,
    },
    {
      name: 'Gear 5 Awakening',
      type: 'Epic',
      price: 399,
      stock: 2,
      img: 'assets/images/g5.png',
      clearance: false,
      quantity: 0,
    },
    {
      name: 'Straw Hat Legacy',
      type: 'Minimalist',
      price: 119,
      stock: 15,
      img: 'assets/images/hat.png',
      clearance: true,
      quantity: 0,
    },
    {
      name: 'Sunny Voyage',
      type: 'Landscape',
      price: 189,
      stock: 5,
      img: 'assets/images/sunny.jpeg',
      clearance: false,
      quantity: 0,
    },
    {
      name: 'Sunny Future',
      type: 'Digital Art',
      price: 219,
      stock: 4,
      img: 'assets/images/sunnyF.png',
      clearance: true,
      quantity: 0,
    },
    {
      name: 'Chopper & Luffy',
      type: 'Cute',
      price: 169,
      stock: 9,
      img: 'assets/images/chopperLuffy.png',
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
