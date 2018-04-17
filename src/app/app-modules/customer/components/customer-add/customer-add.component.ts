import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {
  customerForm: FormGroup;
  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.customerForm = this.fb.group({
      customerid: ['', Validators.required],
      customername: ['', Validators.required],
      address: ['', Validators.required],
      contactno: ['', Validators.required],
      email: ['', Validators.required],
      productid: ['', Validators.required],
      price: ['', Validators.required],
      quantity: ['', Validators.required],
      prproductdescriptionice: ['', Validators.required]
    });
  }
  addCustomer(value: any) {
    console.log(value);
  }
}
