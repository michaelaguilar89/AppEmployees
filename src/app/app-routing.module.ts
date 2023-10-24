import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEmployeesComponent } from './components/list-employees/list-employees.component';
import { CreateUpdateEmployeesComponent } from './components/create-update-employees/create-update-employees.component';
import { DetailEmployeesComponent } from './components/detail-employees/detail-employees.component';
import { LoginComponent } from './components/login/login.component';
import { GuardUserGuard } from './services/guard-user.guard';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { 'path':'listEmployees',component:ListEmployeesComponent },
  { 'path':'createEmployee',canActivate:[GuardUserGuard],component:CreateUpdateEmployeesComponent},
  { 'path':'editEmployee/:id',canActivate:[GuardUserGuard],component:CreateUpdateEmployeesComponent},
  { 'path':'detailsEmployee/:id',component:DetailEmployeesComponent},
  { 'path':'removeEmployee/:id',canActivate:[GuardUserGuard],component:DetailEmployeesComponent},
  { 'path':'login',component:LoginComponent},
  { 'path':'home',canActivate:[GuardUserGuard],component:HomeComponent},
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
