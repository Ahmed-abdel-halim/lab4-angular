import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Product } from '../../data/product.model';
import { routes } from '../../app.routes';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product',

  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  @Input() product!: Product;
  get stockStatus() {
    return this.product.stock > 0 ? 'In Stock' : 'Out of Stock';
  }

  get stockClass() {
    return this.product.stock > 0 ? 'bg-success' : 'bg-danger';
  }
}
