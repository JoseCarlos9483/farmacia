import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MedicineDto } from 'src/app/Models/Medicine/medicine-dto';
import { IResponse } from 'src/app/Models/Response';

@Injectable({
  providedIn: 'root'
})
export class EditMedicineService {

  constructor(private http: HttpClient) { }

  public get(id:any){
    const headers =  new HttpHeaders({
      'Content-Type': 'text/json',
      'accept': 'application/json'
      });
      const requestOptions = {headers: headers}
      return this.http.get<IResponse<MedicineDto>>('https://localhost:44387/api/Medicines/'+id, requestOptions);

  }

  public saveChanges(info:MedicineDto){
    const headers =  new HttpHeaders({
      'Content-Type': 'text/json',
      'accept': 'application/json'
      });
      const requestOptions = {headers: headers}

      const data = JSON.stringify(info);

      return this.http.put<IResponse<boolean>>('https://localhost:44387/api/Medicines/'+ info.idMedicamento,data,requestOptions)
  }
}
