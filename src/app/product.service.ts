import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import 'rxjs/add/operator/map';
import { getObservableFromList } from "./extensions/firebase-extensions";

@Injectable()
export class ProductService {

  constructor(private db: AngularFireDatabase) { }

  getAll() {
    let list = this.db.list('/products/')
    return getObservableFromList(list);
  }

  get(productId) {
    return this.db.object('/products/' + productId).snapshotChanges().map(action => {
      return action.payload.val();
    });
  }

  create(product) {
    return this.db.list('/products').push(product);
  }

  update(productId, product) {
    return this.db.object('/products/' + productId).update(product);
  }

  delete(productId) {
    return this.db.object('/products/' + productId).remove();
  }
}
