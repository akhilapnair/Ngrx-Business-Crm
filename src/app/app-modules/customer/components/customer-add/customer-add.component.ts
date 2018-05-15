import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {
  customerForm: FormGroup;
  customerObservable: Observable<any[]>;
  constructor(private fb: FormBuilder, private db: AngularFireDatabase) {}
  ngOnInit() {
    this.customerObservable = this.getData('/product');
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
  getData(listPath): Observable<any[]> {
    return this.db.list(listPath).valueChanges();
  }
  addCustomer(value: any) {
    console.log(value);
  }
}
