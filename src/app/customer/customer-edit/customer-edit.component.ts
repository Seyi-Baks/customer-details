import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.scss']
})
export class CustomerEditComponent implements OnInit {
  id: number;
  updateMode = false;
  title: string;
  customerForm: FormGroup;

  constructor(private route: ActivatedRoute, private customerService: CustomerService, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.updateMode = params['id'] != null;
      this.initForm();
    });

    this.title = this.updateMode ? "Update Customer" : "Create New Customer"
  }

  onSubmit(){
    if(this.updateMode){
      this.customerService.updateCustomer(this.id, this.customerForm.value);
      this.onCancel();
    }else{
      this.customerService.addCustomer(this.customerForm.value);
      this.onCancel();
    }
  }

  private initForm(){
    let customerName = "";
    let customerAddress = "";
    let customerPhoneNumber = "";
    let customerGender = "";

    if(this.updateMode){
      const customer = this.customerService.getCustomer(this.id);
      customerName = customer.name;
      customerAddress = customer.address;
      customerPhoneNumber = customer.phoneNumber;
      customerGender = customer.gender;
    }

    this.customerForm = new FormGroup({
      'name': new FormControl(customerName, Validators.required),
      'address': new FormControl(customerAddress, Validators.required),
      'phoneNumber': new FormControl(customerPhoneNumber, Validators.required),
      'gender': new FormControl(customerGender, Validators.required),
    });
  }

  onCancel(){
    this.router.navigate(['../'], {relativeTo: this.route});
  }

}
