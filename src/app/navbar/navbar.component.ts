import { Component, OnInit } from '@angular/core';
import { RouterLinkActive } from '@angular/router';
import { AuthService } from './../auth.service';
import { ShoppingCartService } from './../shopping-cart.service';
import { AppUser }  from './../models/app-user';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  appUser: AppUser;
  shoppingCartItemCount: number;

  constructor(private auth: AuthService, private shoppingCartService: ShoppingCartService) {}

  async ngOnInit() {
    this.auth.appUser$.subscribe(appUser => this.appUser = appUser);

    let cart$ = await this.shoppingCartService.getCart();
    cart$.snapshotChanges().subscribe(cart => {
      this.shoppingCartItemCount = 0 ;
      for (let productId in cart.payload.val().items) {
        this.shoppingCartItemCount += cart.payload.val().items[productId].quantity;
      }
    })
  }

  logout() {
    this.auth.logout();
  }
}
