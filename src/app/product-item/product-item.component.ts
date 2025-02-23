import { Component, Input, Output, EventEmitter } from '@angular/core';

interface Product {
  id: number;
  name: string;
  likes: number;
}

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [],
  template: `
    <div class="product-item">
      <span class="product-name">{{ product.name }}</span>
      <div class="actions">
        <span class="likes">Likes: {{ product.likes }}</span>
        <button (click)="like.emit(product.id)" class="btn btn-like">Like</button>
        <button (click)="remove.emit(product.id)" class="btn btn-remove">Remove</button>
      </div>
    </div>
  `,
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent {
  @Input() product!: Product;
  @Output() remove = new EventEmitter<number>();
  @Output() like = new EventEmitter<number>();
}