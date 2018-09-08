import { Component, OnInit } from '@angular/core';
import { CustomerServiceService } from '../../store';
import { Store } from '@ngrx/store';
import * as Actions from '../../store/actions';


@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  x: any[];
  customer$: any;

  constructor(private service: CustomerServiceService,private store:Store<any>) {

    const x = this.service.getData().subscribe(data => (this.x = data));
    console.log(x);
   this.customer$ = this.store.dispatch({type: Actions.LOAD_CUSTOMER})
   }

  ngOnInit() {
  }

}
