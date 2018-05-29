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

export function reducers(
  state = initialState,
  action: fromAction.CustomerAction
) {
  switch (action.type) {
    case fromAction.LOAD_CUSTOMER: {
      return {
        ...state,
        loading: true
      };
    }
    case fromAction.LOAD_CUSTOMER_SUCCESS: {
      {
        return {
          ...state,
          loading: false
        };
      }
    }
    case fromAction.LOAD_CUSTOMER_FAIL: {
      {
        return {
          ...state,
          loading: false
        };
      }
    }
  }
}
