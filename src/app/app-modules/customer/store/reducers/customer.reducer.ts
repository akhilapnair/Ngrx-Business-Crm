import * as fromAction from '../actions';
import { Action } from '@ngrx/store';
import { Customer } from '../models/customer.model';

export interface CustomerState {
  customerList: Customer[];
  loading: boolean;
}

export const initialState: CustomerState = {
  customerList: [],
  loading: false
};

export function reducers(state= initialState, action: fromAction.) {
    // switch(){

    // }
}
