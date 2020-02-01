import { Component, OnInit, Input } from '@angular/core';
import { Customer } from '../customer.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss']
})
export class CustomerDetailComponent implements OnInit {
  customer: Customer;
  id: number;

  constructor(private route: ActivatedRoute, private customerService: CustomerService, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.customer = this.customerService.getCustomer(this.id);
    });
  }

  updateCustomer(){
    this.router.navigate(['update'], {relativeTo: this.route});
  }

  deleteCustomer(){
    this.customerService.deleteCustomer(this.id);
    this.router.navigate(['../'], {relativeTo: this.route});
  }

}
