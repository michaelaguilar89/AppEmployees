import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeesModel } from 'src/app/models/employees-model';
import { EmployeesServiceService } from 'src/app/services/employees-service.service';

@Component({
  selector: 'app-detail-employees',
  templateUrl: './detail-employees.component.html',
  styleUrls: ['./detail-employees.component.css']
})
export class DetailEmployeesComponent implements OnInit {

  employee:any;
  title='';
     
  constructor(private route:ActivatedRoute,
              private service:EmployeesServiceService,
              private router:Router){

  }
  ngOnInit(): void {
    var id=this.route.snapshot.paramMap.get('id');
    console.log('id : '+id)
    var myId=Number(id);
    this.employee= this.service.getEmployeeDetail(myId);
    this.title=this.service.title;
    
  }

  remove(id:number){
    this.service.deleteEmployee(id);
    this.router.navigate(['listemployees']);
  }


}
