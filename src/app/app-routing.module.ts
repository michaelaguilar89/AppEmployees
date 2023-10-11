import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEmployeesComponent } from './components/list-employees/list-employees.component';
import { CreateUpdateEmployeesComponent } from './components/create-update-employees/create-update-employees.component';
import { DetailEmployeesComponent } from './components/detail-employees/detail-employees.component';

const routes: Routes = [
  { 'path':'listEmployees',component:ListEmployeesComponent },
  { 'path':'createEmployee',component:CreateUpdateEmployeesComponent},
  { 'path':'editEmployee/:id',component:CreateUpdateEmployeesComponent},
  { 'path':'detailsEmployee/:id',component:DetailEmployeesComponent},
  { 'path':'removeEmployee/:id',component:DetailEmployeesComponent},
  { 'path':'',redirectTo:'listEmployees',pathMatch:'full'},
  { 'path':'**',redirectTo:'listEmployees',pathMatch:'full'}

   
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    useHash:true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
