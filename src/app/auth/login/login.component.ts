import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { LoginRequest } from '../../Models/login/loginRequest';
import { IResponse } from 'src/app/Models/Response';
import { Iloginresponse } from 'src/app/Models/login/loginResponse';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginRequest: LoginRequest = {
    user: "",
    password: "",
  };
  
  
  alertMessageError: boolean = true;
  messageError: string = ""

  response!: IResponse<Iloginresponse>;


  constructor(private router:Router, private LoginService: LoginService,) { }

  ngOnInit(): void {
    this.alertMessageError = true;
    this.messageError = ""
  }
  
  login(){
    this.router.navigateByUrl('/');
    
  }

  submit(){
    
    this.LoginService.sendLogin(this.loginRequest)
      .subscribe(data => {
        this.response =  data;
        
        if(data.data.success){
          this.token(this.response.data.token);
          this.router.navigate(['/medicine'])
        }
        this.alertMessageError = data.data.success;
        this.messageError = data.message;
        this.loginRequest.user = "";
        this.loginRequest.password = "";
      },error => {
        this.alertMessageError = false;
        this.messageError = error;
        this.router.navigate(['/login'])
      });

  }

  Invalid() {
    if(this.loginRequest.password === "" || this.loginRequest.password === undefined 
    || this.loginRequest.user === "" || this.loginRequest.password === undefined)
    {
      return false
    }
    return true;
  }

  
  token(token:string){
    this.LoginService.saveToken(token);

  }
}
