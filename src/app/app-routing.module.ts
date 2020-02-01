import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { CustomerStartComponent } from './customer/customer-start/customer-start.component';
import { CustomerDetailComponent } from './customer/customer-detail/customer-detail.component';
import { CustomerEditComponent } from './customer/customer-edit/customer-edit.component';


const routes: Routes = [
  {path: '', redirectTo: '/customers', pathMatch: 'full'},
  {path: 'customers', component: CustomerComponent, children: [
    {path: '', component: CustomerStartComponent},
    {path: 'create', component: CustomerEditComponent},
    {path: ':id', component: CustomerDetailComponent},
    {path: ':id/update', component: CustomerEditComponent},
  ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
