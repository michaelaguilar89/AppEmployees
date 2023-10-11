import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './components/list-employees/list-employees.component';
import { CreateUpdateEmployeesComponent } from './components/create-update-employees/create-update-employees.component';
import { DetailEmployeesComponent } from './components/detail-employees/detail-employees.component';
import { HeaderComponent } from './components/header/header.component';
import { EmployeesServiceService } from './services/employees-service.service';

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateUpdateEmployeesComponent,
    DetailEmployeesComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [EmployeesServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
