import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MedicineDto } from 'src/app/Models/Medicine/medicine-dto';
import { Paginator } from 'src/app/Models/Paginator';
import { IResponse } from 'src/app/Models/Response';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  constructor(private http: HttpClient) { }

  public getAll(){
    const headers =  new HttpHeaders({
      'Content-Type': 'text/json',
      'accept': 'application/json'
      });
      const requestOptions = {headers: headers}
      return this.http.get<Paginator<MedicineDto>>('https://localhost:44387/api/Medicines/1/100', requestOptions);
  }

  public delete(id:number){
    const headers =  new HttpHeaders({
      'Content-Type': 'text/json',
      'accept': 'application/json'
      });
      const requestOptions = {headers: headers};

      return this.http.delete<IResponse<boolean>>('https://localhost:44387/api/Medicines/'+ id, requestOptions)
  }
}
