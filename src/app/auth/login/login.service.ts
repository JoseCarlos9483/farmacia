import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { LoginRequest } from '../../Models/login/loginRequest';
import { Iloginresponse } from 'src/app/Models/login/loginResponse';
import { IResponse } from 'src/app/Models/Response';
import * as jwt from 'jsonwebtoken';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  //private jwtHelper = new JwtHelperService();

  key:string="B9)-Eo.Xr_EUj%~FBidja94*yLM)D+FWJ";

  constructor(private hhtp: HttpClient) { }

  public sendLogin(login : LoginRequest){ 
    
    const headers =  new HttpHeaders({
      'Content-Type': 'text/json',
      'accept': 'application/json'
      });
      const requestOptions = {headers: headers}

      const data = JSON.stringify(login);

      return this.hhtp.post<IResponse<Iloginresponse>>('https://localhost:44387/api/Users/Login', data, requestOptions);
          

  }

  saveToken(token:string){
    localStorage.setItem('token',token);
  }

  isAuthenticated(): boolean {
    return (localStorage.getItem('token') !== null);
   
  }
}
