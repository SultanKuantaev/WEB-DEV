import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from '../product-item/product-item.component';

interface Product {
  id: number;
  name: string;
  likes: number;
}

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  template: `
    <div class="product-list">
      <h2 class="subtitle">Products</h2>
      <app-product-item
        *ngFor="let product of products"
        [product]="product"
        (remove)="remove.emit($event)"
        (like)="like.emit($event)"
      ></app-product-item>
    </div>
  `,
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  @Input() products: Product[] = [];
  @Output() remove = new EventEmitter<number>();
  @Output() like = new EventEmitter<number>();
}

