import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { createMedicines } from 'src/app/Models/Medicine/create-medicine';
import { CreateMedicineService } from './create-medicine.service';

@Component({
  selector: 'app-create-medicine',
  templateUrl: './create-medicine.component.html',
  styleUrls: ['./create-medicine.component.css']
})
export class CreateMedicineComponent implements OnInit {

  success:boolean = true;
  message:string = "";

  constructor(private router:Router, private createService: CreateMedicineService) { }

  createModel: createMedicines = {
    nombre: "",
    concentracion : "",
    idFarmaceutica : 0,
    precio: 0,
    stock: 0,
    presentacion : "",
    habilitado : 1

  }
  ngOnInit(): void {
  }

  saverNew(){
    this.createService.create(this.createModel)
        .subscribe(result =>{

          if(!result.data){
            this.success = result.data;
            this.message = result.message
          }
          else{
            this.router.navigate(['/medicine'])
          }

        }, error => console.log(error))
  }

}
