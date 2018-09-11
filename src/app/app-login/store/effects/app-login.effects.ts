import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { of } from 'rxjs/observable/of';
import { map, catchError, switchMap, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

import * as fromActions from '../actions/app-login.action';
import * as fromReducers from '../reducers';
import * as fromServices from '../services';

@Injectable()
export class LoginEffect {
  constructor(
    private loginservice: fromServices.LoginService,
    private _action$: Actions,
    private _store: Store<fromReducers.State>
  ) {}
  @Effect()
  loginCustomer$ = this._action$.ofType(fromActions.LOGIN).pipe(
      map((data)=>{
          console.log(data)
          return this.loginservice.loginUser(data)
      })
    // switchMap((action) => {
    //   return this.loginservice.loginUser(action.).pipe(
    //     map(cust => new fromActions.LoginSuccess(cust))
    //     // catchError(error => new fromActions.LoadCustomerFail())
    //   );
    // })
  );
}
