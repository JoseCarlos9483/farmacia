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


  constructor(private router:Router, private LoginService: LoginService) { }

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
        this.alertMessageError = data.data.success;
        this.messageError = data.message;
        if(data.data.success){
          this.router.navigate(['/medicine'])
        }
      },error => console.error(error));

  }

  Invalid() {
    if(this.loginRequest.password === "" || this.loginRequest.password === undefined 
    || this.loginRequest.user === "" || this.loginRequest.password === undefined)
    {
      return false
    }
    return true;
  }

  
}
