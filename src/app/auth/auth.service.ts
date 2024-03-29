/* eslint-disable no-underscore-dangle */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _userIsAuthenticated = true;
  private _userId = 'xyz';
  get userIsAuthenticated(){
    return this._userIsAuthenticated;
  }
  constructor() { }

  get userId() {
    return this._userId;
  }

  login(){
    this._userIsAuthenticated = true;
  }
  logout(){
    this._userIsAuthenticated = false;
  }
}
