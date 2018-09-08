import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { CustomerServiceService } from '../../store/services/customer-service.service';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css'],
  providers: [CustomerServiceService]
})
export class CustomerAddComponent implements OnInit {
  customerForm: FormGroup;
  customerList: AngularFireList<any>;
  x: any;

  constructor(
    private fb: FormBuilder,
    private service: CustomerServiceService
  ) {}
  ngOnInit() {
    const x = this.service.getData().subscribe(data => (this.x = data));
    console.log(x);
    this.customerForm = this.fb.group({
      customerid: ['', Validators.required],
      customername: ['', Validators.required],
      address: ['', Validators.required],
      contactno: ['', Validators.required],
      email: ['', Validators.required],
      productid: ['', Validators.required],
      price: ['', Validators.required],
      quantity: ['', Validators.required],
      productdescription: ['', Validators.required]
    });
  }
  addCustomer(value: any) {
    console.log(value);
  }
}
