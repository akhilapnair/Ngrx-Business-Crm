import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Injectable()
export class LoginService {
  constructor() {}
  loginUser(data) {
    if(data.email == 'akhi.prabha@gmail.com'&& data.password == 'akhila'){
        console.log('Login successfull')  }
}
}