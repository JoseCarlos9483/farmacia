import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EditMedicineService } from './edit-medicine.service';
import { MedicineDto } from '../../Models/Medicine/medicine-dto';

@Component({
  selector: 'app-edit-medicine',
  templateUrl: './edit-medicine.component.html',
  styleUrls: ['./edit-medicine.component.css']
})
export class EditMedicineComponent implements OnInit {

  
  data:MedicineDto ={
    idMedicamento :0,
    nombre: "",
    concentracion : "",
    idFarmacia : 0,
    precio: 0,
    stock: 0,
    presentacion : "",
    habilitado : false

  };
  success:boolean = true;
  message:string = "";

  constructor(private route: ActivatedRoute, private rout:Router, private editMedicineService: EditMedicineService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.getInfo(id);
  }

  getInfo(id:any){
    this.editMedicineService.get(id)
      .subscribe(data =>{
        this.data = data.data;        
        this.success = data.success;
        this.message = data.message;
        
      }, error =>{
        this.success = false;
        this.message = error
      } )
  }

  saveInfo(){
    this.editMedicineService.saveChanges(this.data)
        .subscribe(result => {
          if(!result.data){
            this.success = result.data;
            this.message = result.message;
          }else{
            this.rout.navigate(['/medicine']);
          }

        }, error =>{
          this.success = false;
          this.message = error
        } )
  }
}
