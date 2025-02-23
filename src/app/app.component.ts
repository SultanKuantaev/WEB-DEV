import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { FormsModule } from '@angular/forms';

interface Product {
  id: number;
  name: string;
  likes: number;
}

interface Category {
  id: number;
  name: string;
  products: Product[];
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent, FormsModule],
  template: `
    <div class="container">
      <h1 class="title">Product Categories</h1>

      <!-- Add Category Form -->
      <div class="form-container add-category">
        <input 
          type="text" 
          [(ngModel)]="newCategoryName" 
          placeholder="New category name"
          (keyup.enter)="addCategory()"
          class="input-field"
        >
        <button (click)="addCategory()" class="btn btn-primary">Add Category</button>
      </div>

      <!-- Category List -->
      <div class="categories">
        <button 
          *ngFor="let category of categories" 
          (click)="selectCategory(category)"
          [class.active]="selectedCategory?.id === category.id"
          class="category-btn"
        >
          {{ category.name }}
        </button>
      </div>

      <!-- Add Product Form -->
      <div class="form-container add-product" *ngIf="selectedCategory">
        <input 
          type="text" 
          [(ngModel)]="newProductName" 
          placeholder="New product name"
          (keyup.enter)="addProduct()"
          class="input-field"
        >
        <button (click)="addProduct()" class="btn btn-primary">Add Product</button>
      </div>

      <!-- Product List -->
      <app-product-list 
        *ngIf="selectedCategory"
        [products]="selectedCategory.products"
        (remove)="removeProduct($event)"
        (like)="likeProduct($event)"
        class="product-list-container"
      ></app-product-list>
    </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  categories: Category[] = [
    {
      id: 1,
      name: 'Electronics',
      products: [
        { id: 1, name: 'Phone', likes: 0 },
        { id: 2, name: 'Laptop', likes: 0 },
        { id: 3, name: 'Tablet', likes: 0 },
        { id: 4, name: 'Smartwatch', likes: 0 },
        { id: 5, name: 'Headphones', likes: 0 }
      ]
    },
    // ... other initial categories remain the same
  ];

  selectedCategory: Category | null = null;
  newCategoryName: string = ''; // For new category input
  newProductName: string = '';  // For new product input

  selectCategory(category: Category) {
    this.selectedCategory = category;
    this.newProductName = ''; // Reset product input when switching categories
  }

  addCategory() {
    if (this.newCategoryName.trim()) {
      const newId = this.categories.length ? Math.max(...this.categories.map(c => c.id)) + 1 : 1;
      this.categories.push({
        id: newId,
        name: this.newCategoryName.trim(),
        products: []
      });
      this.newCategoryName = ''; // Reset input
    }
  }

  addProduct() {
    if (this.selectedCategory && this.newProductName.trim()) {
      const newId = this.selectedCategory.products.length 
        ? Math.max(...this.selectedCategory.products.map(p => p.id)) + 1 
        : 1;
      this.selectedCategory.products.push({
        id: newId,
        name: this.newProductName.trim(),
        likes: 0
      });
      this.newProductName = ''; // Reset input
    }
  }

  removeProduct(productId: number) {
    if (this.selectedCategory) {
      this.selectedCategory.products = this.selectedCategory.products.filter(
        product => product.id !== productId
      );
    }
  }

  likeProduct(productId: number) {
    if (this.selectedCategory) {
      const product = this.selectedCategory.products.find(p => p.id === productId);
      if (product) {
        product.likes++;
      }
    }
  }
}