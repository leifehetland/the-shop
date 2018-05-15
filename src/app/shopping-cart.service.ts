import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Product } from './models/product';

@Injectable()
export class ShoppingCartService {

  constructor(private db: AngularFireDatabase) { }

  private create() {
    return this.db.list('/shopping-carts').push({
      dateCreated: new Date().getTime()
    });
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
  }
}
