import { Component, Input, Output, EventEmitter } from '@angular/core';

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

  @Output()
  quantityChange: EventEmitter<number> = new EventEmitter<number>();

  upQuantity(): void {
    if (this.quantity < this.max) {
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    }
    console.log(this.quantity);
  }
  downQuantity(): void {
    if (this.quantity > 0) {
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
    console.log(this.quantity);
  }
}
