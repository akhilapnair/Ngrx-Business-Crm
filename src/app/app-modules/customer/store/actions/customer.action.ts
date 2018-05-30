import { Action } from '@ngrx/store';
import { Customer } from '../models/customer.model';

export const ADD_CUSTOMER = '[CUSTOMER]ADD_CUSTOMER';
export const ADD_CUSTOMER_SUCCESS = '[CUSTOMER]ADD_CUSTOMER_SUCCESS';
export const ADD_CUSTOMER_FAIL = '[CUSTOMER]ADD_CUSTOMER_FAIL';

export const LOAD_CUSTOMER = '[CUSTOMER] LOAD_CUSTOMER';
export const LOAD_CUSTOMER_SUCCESS = '[CUSTOMER]LOAD_CUSTOMER_SUCCESS';
export const LOAD_CUSTOMER_FAIL = '[CUSTOMER]LOAD_CUSTOMER_FAIL';
export class AddCustomer implements Action {
  readonly type = ADD_CUSTOMER;
}
export class AddCustomerSuccess implements Action {
  readonly type = ADD_CUSTOMER_SUCCESS;
}
export class AddCustomerFail implements Action {
  readonly type = ADD_CUSTOMER_FAIL;
}
export class LoadCustomer implements Action {
  readonly type = LOAD_CUSTOMER;
  constructor(payload: any) {}
}
export class LoadCustomerSuccess implements Action {
  readonly type = LOAD_CUSTOMER_SUCCESS;
  constructor(payload: any) {}
}
export class LoadCustomerFail implements Action {
  readonly type = LOAD_CUSTOMER_FAIL;
  constructor(payload: any) {}
}

export type CustomerAction =
  | LoadCustomer
  | LoadCustomerSuccess
  | LoadCustomerFail
  | AddCustomer
  | AddCustomerSuccess
  | AddCustomerFail;
