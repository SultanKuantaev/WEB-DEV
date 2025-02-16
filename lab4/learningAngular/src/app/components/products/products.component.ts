import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Product {
  id: number;
  name: string;
  description: string;
  rating: number;
  images: string[];
  kaspiUrl: string;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Apple iPhone 14 Pro',
      description: 'Apple iPhone 14 Pro 256GB Deep Purple',
      rating: 4.8,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hc4/h46/63813028655134.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/hc4/h46/63813028655134.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/hc4/h46/63813028655134.jpg'
      ],
      kaspiUrl: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-256gb-deep-purple-106363832/'
    },
    {
      id: 2,
      name: 'Samsung Galaxy S23 Ultra',
      description: 'Samsung Galaxy S23 Ultra 12GB/512GB Green',
      rating: 4.9,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hf4/hb1/63813028655134.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/hf4/hb1/63813028655134.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/hf4/hb1/63813028655134.jpg'
      ],
      kaspiUrl: 'https://kaspi.kz/shop/p/samsung-galaxy-s23-ultra-12gb-512gb-green-107221548/'
    },
    // Add at least 10 products
  ];

  shareOnWhatsApp(url: string) {
    window.open(`https://wa.me/?text=${encodeURIComponent(url)}`, '_blank');
  }

  shareOnTelegram(url: string) {
    window.open(`https://t.me/share/url?url=${encodeURIComponent(url)}`, '_blank');
  }
}
