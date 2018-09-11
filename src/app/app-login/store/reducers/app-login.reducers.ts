import * as fromAction from '../actions/app-login.action';
import { Action } from '@ngrx/store';



export interface State {
    error: string | null;
    pending: boolean;
  }
  
  export const initialState: State = {
    error: null,
    pending: false,
  };
  

export function reducers(
  state = [initialState],
  action: fromAction.LoginAction
) {
  switch (action.type) {
    case fromAction.LOGIN: {
      console.log('login')
      //   return [...state];
      return {
        ...state,
        loading: true
      };
    }
    case fromAction.LOGIN_SUCCESS: {
    // console.log('success',this.customerList)
      {
        return {
          
          ...state,
          loading: false
        };
      }
    }
    case fromAction.LOGIN_FAIL: {
      {
        return {
          ...state,
          loading: false
        };
      }
    }
   
  }
}
