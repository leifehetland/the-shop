import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { ShoppingCartService } from './shopping-cart.service';
import { Observable } from 'rxjs/Observable';
import { Order } from './models/order';
import { getObservableFromList } from "./extensions/firebase-extensions";

@Injectable()
export class OrderService {

  constructor(private db: AngularFireDatabase, private shoppingCartService: ShoppingCartService) { }

  async placeOrder(order) {
    let result = this.db.list('/orders').push(order);
    this.shoppingCartService.clearCart();
    return result;
  }

  getOrder(orderId): Observable<Order> {
    return this.db.object('/orders/' + orderId).snapshotChanges().map(action => {
      return action.payload.val();
    });
  }

  getOrders(): Observable<Order[]> {
    let list = this.db.list('/orders', ref => ref.orderByChild('userId'));
    return getObservableFromList(list);
  }

  getOrdersByUser(userId): Observable<Order[]> {
    let list = this.db.list('/orders', ref => ref.orderByChild('userId').equalTo(userId));
    return getObservableFromList(list);
  }

}
