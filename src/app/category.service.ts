import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import 'rxjs/add/operator/map';

@Injectable()
export class CategoryService {

  constructor(private db: AngularFireDatabase) { }

  getAll() {
   return this.db.list('/categories', ref =>
     ref.orderByChild('name')).snapshotChanges()
      .map(action => {
        return action.map(item => {
          const $key = item.payload.key;
          const data = { $key, ...item.payload.val() };
          return data;
        });
      });
  }

}
