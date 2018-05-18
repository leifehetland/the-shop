import { Injectable } from '@angular/core';
import { AppUser }  from 'shared/models/app-user';
import { AngularFireDatabase }  from 'angularfire2/database';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

  constructor(private db: AngularFireDatabase) { }

  save(user: firebase.User) {
    this.db.object('/users/' + user.uid).update({
      name: user.displayName,
      email: user.email
    });
  }

  get(uid: string): Observable<AppUser> {
    return this.db.object('/users/' + uid).valueChanges();
  }

}
