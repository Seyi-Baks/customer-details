import { Customer } from './customer.model';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class CustomerService {    
    customerChanged = new Subject<Customer[]>();

    private customers: Customer[] = JSON.parse(localStorage.getItem("customers")) || [];
    
      addCustomer(customer: Customer){
          console.log(customer);
        this.customers.push(customer);
        this.customerChanged.next(this.customers.slice());
        localStorage.setItem("customers", JSON.stringify(this.customers));
      }

      updateCustomer(index: number, customer: Customer){
          this.customers[index] = customer;
          this.customerChanged.next(this.customers.slice());
          localStorage.setItem("customers", JSON.stringify(this.customers));
      }

      getCustomers(){
          return this.customers.slice();
      }

      getCustomer(index: number){
          return this.customers[index];
      }

      deleteCustomer(index: number){
          this.customers.splice(index, 1);
          this.customerChanged.next(this.customers.slice());
          localStorage.setItem("customers", JSON.stringify(this.customers));
      }

}