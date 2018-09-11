import { Action } from '@ngrx/store';


export const LOGIN = '[LOGIN]LOGIN';
export const LOGIN_SUCCESS = '[LOGIN]ALOGIN_SUCCESS';
export const LOGIN_FAIL = '[LOGIN]LOGIN_FAIL';


export class Login implements Action {
  readonly type = LOGIN
  constructor(payload: any) {}
}
export class LoginSuccess implements Action {
  readonly type = LOGIN_SUCCESS;
  constructor(payload: any) {}
}
export class LoginFail implements Action {
  readonly type = LOGIN_FAIL;
  constructor(payload: any) {}
}

export type LoginAction =
  | Login
  | LoginSuccess
  | LoginFail
  