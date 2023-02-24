import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { MedicineComponent } from './medicine/medicine/medicine.component';
import { CreateMedicineComponent } from './medicine/create-medicine/create-medicine.component';
import { EditMedicineComponent } from './medicine/edit-medicine/edit-medicine.component';

const routes: Routes = [    
    { path : '', component: LoginComponent},
    { path : 'login', component : LoginComponent},
    { path : 'medicine', component: MedicineComponent },
    { path : 'medicine/crear', component: CreateMedicineComponent },
    { path : 'medicine/edit/:id', component: EditMedicineComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
