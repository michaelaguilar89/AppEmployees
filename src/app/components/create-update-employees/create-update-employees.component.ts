import { Component } from '@angular/core';
import { FormGroup,Validators,FormControl,FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeesModel } from 'src/app/models/employees-model';
import { EmployeesServiceService } from 'src/app/services/employees-service.service';
@Component({
  selector: 'app-create-update-employees',
  templateUrl: './create-update-employees.component.html',
  styleUrls: ['./create-update-employees.component.css']
})
export class CreateUpdateEmployeesComponent {

    constructor(private fb:FormBuilder,
                private service:EmployeesServiceService,
                private route:Router
                ){

    }
    form= this.fb.group({
      name:['',Validators.required],
      lastName:['',Validators.required],
      email:['',Validators.required],
      age:['',Validators.required],
      photo:['',Validators.required]
    })

    save(){
        const employee:EmployeesModel={
        id:Number(this.service.list.length+1),
        name:String(this.form.get('name')?.value),
        lastName:String(this.form.get('lastName')?.value),
        age: Number(this.form.get('age')?.value),
        email:String(this.form.get('email')?.value),
        photo:String(this.form.get('photo')?.value)
      }

      console.log(employee);
      this.service.createEmployee(employee);
      this.route.navigate(['/listemployees']);
    }


}
