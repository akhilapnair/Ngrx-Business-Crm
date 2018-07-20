import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
      username :['',Validators.required],
      password : ['',Validators.required]
    })
  }
  login(){
    
  }

}
