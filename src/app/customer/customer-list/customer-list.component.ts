import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer.model';
import { CustomerService } from '../customer.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  customers: Customer[];

  constructor(private customerService: CustomerService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.customerService.customerChanged.subscribe((customers: Customer[]) => {
      this.customers = customers;
    });
    this.customers = this.customerService.getCustomers();
  }

  newCustomer(){
    this.router.navigate(['create'], {relativeTo: this.route});
  }


}
