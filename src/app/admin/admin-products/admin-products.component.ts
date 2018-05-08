import { Component, OnInit } from '@angular/core';
import { ProductService } from './../../product.service';

@Component({
  selector: 'admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
  products$;

  constructor(private productService: ProductService) {
    this.products$ = this.productService.getAll();
  }

  ngOnInit() {
  }

}
