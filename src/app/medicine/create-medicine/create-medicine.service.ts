import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IResponse } from 'src/app/Models/Response';
import { createMedicines } from 'src/app/Models/Medicine/create-medicine';

@Injectable({
  providedIn: 'root'
})
export class CreateMedicineService {

  constructor(private http: HttpClient) { }

  public create(model: createMedicines){
    console.log(model);
    const headers =  new HttpHeaders({
      'Content-Type': 'text/json',
      'accept': 'application/json'
      });
      const requestOptions = {headers: headers}


      const data = JSON.stringify(model);
      console.log(data);
      prueba : {
        
        /* "nombre":"dsa",
        "concentracion":"dsa",
        "idFarmaceutica":1,
        "precio":1,
        "stock":1,
        "presentacion":"sa",
        "habilitado":1 */
      }
      return this.http.post<IResponse<boolean>>('https://localhost:44387/api/Medicines/Create',data, requestOptions);

  }
}
