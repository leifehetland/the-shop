import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { DataTableModule } from 'angular5-data-table';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { CustomFormsModule } from 'ng2-validation';
import { ProductCardComponent } from 'shared/components/product-card/product-card.component';
import { ProductQuantityComponent } from 'shared/components/product-quantity/product-quantity.component';
import { AuthGuard } from 'shared/services/auth-guard.service';
import { AuthService } from 'shared/services/auth.service';
import { CategoryService } from 'shared/services/category.service';
import { OrderService } from 'shared/services/order.service';
import { ProductService } from 'shared/services/product.service';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { UserService } from 'shared/services/user.service';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    CustomFormsModule,
    DataTableModule,
    AngularFontAwesomeModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot()
  ],
  declarations: [
    ProductQuantityComponent,
    ProductCardComponent,
  ],
  exports: [
    ProductQuantityComponent,
    ProductCardComponent,
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    CustomFormsModule,
    DataTableModule,
    AngularFontAwesomeModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot().ngModule
  ],
  providers: [
    AuthGuard,
    AuthService,
    UserService,
    CategoryService,
    ProductService,
    ShoppingCartService,
    OrderService
  ]
})
export class SharedModule { }
