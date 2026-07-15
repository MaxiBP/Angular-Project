import { Component } from '@angular/core';

@Component({
  selector: 'app-image-list',
  standalone: false,
  templateUrl: './image-list.html',
  styleUrl: './image-list.scss',
})
export class ImageList {
  image = {
    name: 'Luffy',
    type: 'Holo',
    price: 199,
    stock: 5,
    img: 'assets/images/luffy.png',
  };
}
