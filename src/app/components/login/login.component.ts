import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


form:FormGroup;

constructor(private fb:FormBuilder){
  this.form=this.fb.group({
    username:['',[Validators.required]],
    password:['',[Validators.required]],
  })
}
  login(){
    console.log(this.form.value)
  }
}
