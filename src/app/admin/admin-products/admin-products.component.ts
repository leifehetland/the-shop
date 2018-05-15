import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from './../../product.service';
import { Subscription } from 'rxjs/Subscription';
import { Product } from './../../models/product';
import { DataTableResource } from 'angular5-data-table';

@Component({
  selector: 'admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy {
  products: Product[]= [];
  filteredProducts: any[];
  subscription: Subscription;
  tableResource: DataTableResource<Product>;
  items: Product[] = [];
  itemCount: number = 0;

  constructor(private productService: ProductService) {
    this.subscription = this.productService.getAll()
      .subscribe(products => {
        this.products = products;
        this.initializeTable(this.products);
      });
  }

  private initializeTable(p: Product[]) {
    this.tableResource = new DataTableResource(p);
    this.tableResource.query({ offset: 0, limit: 10 }).then(items => this.items = items);
    this.tableResource.count().then(count => this.itemCount = count);
  }

  reloadItems(params) {
    if (!this.tableResource) return;

    this.tableResource.query(params).then(items => this.items = items);
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
