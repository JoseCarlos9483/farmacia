import { Component, OnInit } from '@angular/core';
import { MedicineService } from './medicine.service';
import { Paginator } from '../../Models/Paginator';
import { MedicineDto } from '../../Models/Medicine/medicine-dto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.css']
})
export class MedicineComponent implements OnInit {

  page: number = 1;
  pageSize: number = 5;

  response !: Paginator<MedicineDto>;

  records !: MedicineDto[];

  success:boolean = true;
  message:string = "";
  alert:boolean = false;

  constructor(private router:Router, private medicineService: MedicineService) { }

  ngOnInit(): void {
    this.getAllData();
  }


  getAllData(){
    this.medicineService.getAll()
      .subscribe(data =>{
        this.response = data;
        this.records = this.response.records;

      }, error => console.error(error));
  }

  deshabilitar(id:any){
    this.medicineService.delete(id)
        .subscribe(result =>{
          if(!result.data){
            this.success = result.data;
            this.message = result.message;
            this
          }
          else{
            this.alert = true;
            setTimeout(() => {
              this.alert = false;
            }, 5000);
            this.getAllData();
          }
        }, error=>{
          this.success = false;
          this.message = error
        })
  }

  logout(){

    localStorage.removeItem('token');
    this.router.navigate(['/login'])
  }

  
}
