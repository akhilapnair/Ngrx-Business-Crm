import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { of } from 'rxjs/observable/of';
import { map, catchError, switchMap, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

import * as fromActions from '../actions';
import * as fromReducers from '../reducers';
import * as fromServices from '../services';
import { Customer } from '../models';

@Injectable()
export class CustomerEffect {
  constructor(
    private customerservice: fromServices.CustomerServiceService,
    private _action$: Actions,
    private _store: Store<fromReducers.CustomerState>
  ) {}
//   @Effect()
//   loadCustomer$ = this._action$.ofType(fromActions.LOAD_CUSTOMER).pipe(
//     map((action:) => action.payload),
//     switchMap(payload => {
//       return this.customerservice.getData().pipe(
//         map(res => {this._action$.ofType(actions.LOAD_LEAD_DETAILS).pipe(
//         )
//   );
// }
