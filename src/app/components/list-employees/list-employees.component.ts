import { Component,OnInit, inject } from '@angular/core';
import { EmployeesModel } from 'src/app/models/employees-model';
import { EmployeesServiceService } from 'src/app/services/employees-service.service';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  list:any;


  constructor(public service:EmployeesServiceService){}

  ngOnInit(){
   this.list= this.service.AllEmployees;
   console.log(this.list)
  } 

}



