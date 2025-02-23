import { Component, Input, Output, EventEmitter } from '@angular/core';

interface Product {
  id: number;
  name: string;
  likes: number;
}

@Component({
  selector: 'app-product-item',
  template: `
    <div class="product-item">
      <span>{{ product.name }}</span>
      <span>Likes: {{ product.likes }}</span>
      <button (click)="like.emit()">Like</button>
      <button (click)="remove.emit()">Remove</button>
    </div>
  `,
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent {
  @Input() product!: Product;
  @Output() remove = new EventEmitter<void>();
  @Output() like = new EventEmitter<void>();
}