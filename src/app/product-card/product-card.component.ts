import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../product.service';
import { ShoppingCartService } from './../shopping-cart.service';
import { Product } from './../models/product';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input('product') product: Product;
  @Input('show-actions') showActions = true;

  constructor(private cartService: ShoppingCartService) {}

  addToCart(product: Product) {
    this.cartService.addToCart(this.product);
  }

}
