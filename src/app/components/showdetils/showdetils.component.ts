import { Component, Input } from '@angular/core';
import { Product } from '../../data/product.model';
import { products } from '../../data/products';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-showdetils',
  imports: [FormsModule, CommonModule],
  templateUrl: './showdetils.component.html',
  styleUrl: './showdetils.component.css',
})
export class ShowdetilsComponent {
  @Input() id?: string;
  products: Product[] = products;
  selectedProduct?: Product;

  ngOnInit() {
    this.selectedProduct = products.find(
      (product) => product.id == parseInt(this.id!)
    );
  }

  get stockStatus() {
    return (this.selectedProduct?.stock ?? 0) > 0 ? 'In Stock' : 'Out of Stock';
  }
  get stockClass() {
    return (this.selectedProduct?.stock ?? 0) > 0 ? 'bg-success' : 'bg-danger';
  }
}
