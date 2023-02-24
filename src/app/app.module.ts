import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginService } from './auth/login/login.service';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { MedicineComponent } from './medicine/medicine/medicine.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { CreateMedicineComponent } from './medicine/create-medicine/create-medicine.component';
import { EditMedicineComponent } from './medicine/edit-medicine/edit-medicine.component';
import { MedicineService } from './medicine/medicine/medicine.service';
import { EditMedicineService } from './medicine/edit-medicine/edit-medicine.service';
import { CreateMedicineService } from './medicine/create-medicine/create-medicine.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MedicineComponent,
    CreateMedicineComponent,
    EditMedicineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule 
  ],
  providers: [
    LoginService,
    MedicineService,
    EditMedicineService,
    CreateMedicineService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
