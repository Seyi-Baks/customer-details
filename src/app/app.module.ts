import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerDetailComponent } from './customer/customer-detail/customer-detail.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { CustomerItemComponent } from './customer/customer-list/customer-item/customer-item.component';
import { CustomerStartComponent } from './customer/customer-start/customer-start.component';
import { CustomerEditComponent } from './customer/customer-edit/customer-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerService } from './customer/customer.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CustomerComponent,
    CustomerDetailComponent,
    CustomerListComponent,
    CustomerItemComponent,
    CustomerStartComponent,
    CustomerEditComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
