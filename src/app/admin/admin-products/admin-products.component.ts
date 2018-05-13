import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from './../../product.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy {
  products: any[];
  filteredProducts: any[];
  subscription: Subscription;

  constructor(private productService: ProductService) {
    this.subscription = this.productService.getAll()
    .subscribe(x => this.filteredProducts = this.products = x);
  }

  filter(query: string) {
    const q = query.toLowerCase();
    this.filteredProducts = query ?
    this.products.filter(p => p.title.toLowerCase().includes(q)) : this.products;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
  }

}
