import { Component } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Product } from '../../data/product.model';
import { products } from '../../data/products';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-card',
  imports: [ProductComponent, FormsModule, CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  products: Product[] = products;
}
