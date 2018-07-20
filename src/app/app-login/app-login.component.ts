import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Login} from './login.Interface';
@Component({
  selector: 'app-app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.css']
})
export class AppLoginComponent implements OnInit {
LoginForm:FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.LoginForm = this.fb.group({
      email :['',Validators.required],
      password : ['',Validators.required]
    })
  }
  login(value){
    console.log(value);
    if(value.email == 'akhi.prabha@gmail.com'&&value.password == 'akhila'){
console.log('Login successfull')
    }
  }

}
