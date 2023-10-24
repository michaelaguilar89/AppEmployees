import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

response:any;
form:FormGroup;
showMessage=false;

constructor(private fb:FormBuilder, private auth:AuthService,private router:Router){
  this.form=this.fb.group({
    username:['',[Validators.required]],
    password:['',[Validators.required]],
  })
}


hideMessage()
{
  this.showMessage=false;
}
  login(){
    
    const user={
      username: String(this.form.get('username')?.value),
      password:String(this.form.get('password')?.value)
    }
    
    this.response=this.auth.login(user.username,user.password);
   console.log(this.response)
   if(this.response===null){
    //
    this.showMessage=true;
    //alert('User or password incorrect')
   }else{
    this.router.navigate(['/home']);
   }
  }
}
