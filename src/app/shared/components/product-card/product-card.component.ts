import { ShoppingCart } from 'shared/models/shopping-cart';
import { Subscription } from 'rxjs/Subscription';
import { AngularFireObject } from 'angularfire2/database/interfaces';
import { Observable } from 'rxjs/Observable';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { Product } from 'shared/models/product';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  // tslint:disable-next-line:no-input-rename
  @Input('product') product: Product;
  // tslint:disable-next-line:no-input-rename
  @Input('showActions') showActions = true;
  // tslint:disable-next-line:no-input-rename
  @Input('shopping-cart') shoppingCart: ShoppingCart;

  constructor(private cartService: ShoppingCartService) {
  }

  addToCart() {
    this.cartService.addToCart(this.product);
  }
}
