import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './components/list-employees/list-employees.component';
import { CreateUpdateEmployeesComponent } from './components/create-update-employees/create-update-employees.component';
import { DetailEmployeesComponent } from './components/detail-employees/detail-employees.component';
import { HeaderComponent } from './components/header/header.component';
import { EmployeesServiceService } from './services/employees-service.service';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthService } from './services/auth.service';
import { GuardUserGuard } from './services/guard-user.guard';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateUpdateEmployeesComponent,
    DetailEmployeesComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule
  ],
  providers: [EmployeesServiceService,AuthService,GuardUserGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
