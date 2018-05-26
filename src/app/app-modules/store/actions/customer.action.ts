import { Action } from '@ngrx/store';
import { Customer } from '../models/customer.model';

export const ADD_CUSTOMER = '[CUSTOMER]ADD_CUSTOMER';
export const ADD_CUSTOMER_SUCCESS = '[CUSTOMER]ADD_CUSTOMER_SUCCESS';
export const ADD_CUSTOMER_FAIL = '[CUSTOMER]ADD_CUSTOMER_FAIL';

export class AddProperty implements Action {
  readonly type = ADD_CUSTOMER;
}
export class AddPropertySuccess implements Action {
  readonly type = ADD_CUSTOMER_SUCCESS;
}
export class AddPropertyFail implements Action {
  readonly type = ADD_CUSTOMER_FAIL;
}
