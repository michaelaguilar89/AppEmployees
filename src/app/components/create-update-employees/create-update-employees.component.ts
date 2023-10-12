import { Component,OnInit } from '@angular/core';
import { FormGroup,Validators,FormControl,FormBuilder} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { EmployeesModel } from 'src/app/models/employees-model';
import { EmployeesServiceService } from 'src/app/services/employees-service.service';
@Component({
  selector: 'app-create-update-employees',
  templateUrl: './create-update-employees.component.html',
  styleUrls: ['./create-update-employees.component.css']
})
export class CreateUpdateEmployeesComponent implements OnInit {
    id=0;
    title='Create Employee';
    buttonTitle='Save';
    employee:any;
    constructor(private fb:FormBuilder,
                private service:EmployeesServiceService,
                private route:Router,
                private actived:ActivatedRoute
                ){

    }
    form= this.fb.group({
      name:['',Validators.required],
      lastName:['',Validators.required],
      email:['',Validators.required],
      companyName:['',Validators.required],
      salary:['',Validators.required],
      phoneNumber:['',Validators.required],
      role:['',Validators.required],
      age:['',Validators.required],
      photo:['',Validators.required]
    })

    ngOnInit(): void {
      this.id=Number(this.actived.snapshot.paramMap.get('id'))
      console.log('id : '+this.id);
      if(this.id>0){
        this.title='Edit Employee';
        this.buttonTitle='Update Changes';
        this.employee=this.service.getEmployeeDetail(this.id);
        this.form.patchValue({
          name:this.employee.name,
          lastName:this.employee.lastName,
          companyName:this.employee.companyName,
          salary:this.employee.salary,
          phoneNumber:this.employee.faxNumber,
          role:this.employee.role,
          age:this.employee.age,
          email:this.employee.email,
          photo:this.employee.photo
        });
      }
    }
    save(){

      if(this.id>0){//edit employee
        const employee:EmployeesModel={
          id:Number(this.id),
          name:String(this.form.get('name')?.value),
          lastName:String(this.form.get('lastName')?.value),
          companyName:String(this.form.get('companyName')?.value),
          salary:Number(this.form.get('salary')?.value),
          phoneNumber:Number(this.form.get('faxNumber')?.value),
          role:String(this.form.get('role')?.value),
          age: Number(this.form.get('age')?.value),
          email:String(this.form.get('email')?.value),
          photo:String(this.form.get('photo')?.value)
        }
          this.service.updateEmployee(employee);




      }else{//create employee
        const employee:EmployeesModel={
          id:Number(this.service.list.length+1),
          name:String(this.form.get('name')?.value),
          lastName:String(this.form.get('lastName')?.value),
          companyName:String(this.form.get('companyName')?.value),
          salary:Number(this.form.get('salary')?.value),
          phoneNumber:Number(this.form.get('faxNumber')?.value),
          role:String(this.form.get('role')?.value),
          age: Number(this.form.get('age')?.value),
          email:String(this.form.get('email')?.value),
          photo:String(this.form.get('photo')?.value)
        }
  
        console.log(employee);
        this.service.createEmployee(employee);
  
      }
              this.route.navigate(['/listemployees']);
    }


}
