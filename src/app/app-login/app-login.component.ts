import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Login} from './login.Interface';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.css']
})
export class AppLoginComponent implements OnInit {
LoginForm:FormGroup;
  constructor(private fb:FormBuilder, private router:Router,private store: Store<any>) { }

  ngOnInit() {
    this.LoginForm = this.fb.group({
      email :['',Validators.required],
      password : ['',Validators.required]
    })
  }
  login(value){
    // this.store.dispatch(new )
//     console.log(value);
//     if(value.email == 'akhi.prabha@gmail.com'&&value.password == 'akhila'){
// console.log('Login successfull')
// this.router.navigate(['customer/customer-list']);
//     }
  }

}
