import { SharedModule } from 'shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    SharedModule,
    NgbModule.forRoot(),
    RouterModule.forChild([])
  ],
  declarations: [
    NavbarComponent,
    HomeComponent,
    LoginComponent,
  ],
  exports: [
    NavbarComponent
  ]
})
export class CoreModule { }
