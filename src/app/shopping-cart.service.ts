import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Product } from './models/product';
import 'rxjs/add/operator/take';

@Injectable()
export class ShoppingCartService {

  constructor(private db: AngularFireDatabase) { }

  private create() {
    return this.db.list('/shopping-carts').push({
      dateCreated: new Date().getTime()
    });
  }

  private getItem(cartId: string, productId: string) {
    return this.db.object('/shopping-carts/' + cartId + '/items/' + productId);
  }

  private getCart(cartId: string) {
    return this.db.object('/shopping-carts/' + cartId);
  }

  private async getOrCreateCartId() {
    let cartId = localStorage.getItem('cartId');
    if (!cartId) {
      let result = await this.create();
      localStorage.setItem('cartId', result.key);
      // Add to cart
      return result.key;
    }
    else {
      // Add to cart
      return cartId;
    }
  }

  async addToCart(product: Product) {
    let cartId = await this.getOrCreateCartId();
    let item$ = this.getItem(cartId, product.key);
    item$.snapshotChanges().take(1).subscribe(item => {
      item$.update({ product: product, quantity: (item.payload.val().quantity || 0) + 1 });

      // if (item.payload.exists()) {
      //   item$.update({ quantity: item.payload.val().quantity + 1 });
      // }
      // else {
      //   item$.set({ product: product, quantity: 1 });
      // }
    })
  }
}
