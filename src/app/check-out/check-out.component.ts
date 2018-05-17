import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingCartService } from './../shopping-cart.service';
import { OrderService } from './../order.service';
import { AuthService } from './../auth.service';
import { ShoppingCart } from './../models/shopping-cart';
import { Order } from './../models/order';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit, OnDestroy {
  shipping = {};
  cart: ShoppingCart;
  userId: string;
  cartSubscription: Subscription;
  userSubscription: Subscription;

  constructor(
    private orderService: OrderService,
    private shoppingCartService: ShoppingCartService,
    private authService: AuthService,
  ) {}

  async ngOnInit() {
    let cart$ = await this.shoppingCartService.getCart();
    this.cartSubscription = cart$.subscribe(cart => this.cart = cart);
    this.authService.user$.subscribe(user => {
      this.userId = user.uid;
    });
  }

  ngOnDestroy() {
    this.cartSubscription.unsubscribe();
    this.userSubscription.unsubscribe();
  }

  placeOrder() {
    let order = new Order(this.userId, this.shipping, this.cart);

    this.orderService.storeOrder(order);

    console.log(this.shipping);
  }


}
