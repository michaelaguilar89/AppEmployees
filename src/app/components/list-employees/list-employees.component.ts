import { Component,OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeesModel } from 'src/app/models/employees-model';
import { EmployeesServiceService } from 'src/app/services/employees-service.service';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  list:any;
  count:number=0;

  constructor(public service:EmployeesServiceService,
              private route:Router){}

  ngOnInit(){
   this.list= this.service.AllEmployees;
   console.log(this.list)
   this.count=this.list.length;
  } 

  remove(id:number){
    this.service.title='Remove Employee'   
    this.route.navigate(['/removeEmployee/',id]);
       
  }
  getDetails(){
    this.service.title='Employee Details' 
   // this.route.navigate(['/editEmployee/',id]);
  }

  

}



