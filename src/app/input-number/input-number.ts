import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-number',
  standalone: false,
  templateUrl: './input-number.html',
  styleUrl: './input-number.scss',
})
export class InputNumber {
  @Input()
  quantity!: number;

  @Input()
  max!: number;

  upQuantity(): void {
    if (this.quantity < this.max) {
      this.quantity++;
    }
    console.log(this.quantity);
  }
  downQuantity(): void {
    if (this.quantity > 0) {
      this.quantity--;
    }
    console.log(this.quantity);
  }
}
