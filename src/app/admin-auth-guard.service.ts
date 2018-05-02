import { Injectable } from '@angular/core';
import { CanActivate }  from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs/Observable';
import { UserService } from './user.service';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

@Injectable()
export class AdminAuthGuard implements CanActivate {

  constructor(private userService: UserService, private auth: AuthService) { }

  canActivate(): Observable<boolean> {
    return this.auth.user$
      .switchMap(user => {return this.userService.get(user.uid)})
      .map(appUser => appUser.isAdmin);
  }
}
