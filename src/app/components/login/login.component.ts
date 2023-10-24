import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgModel, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

showTest:boolean=false;  
response:any;
form:FormGroup;
showMessage=false;
text='Show test data';
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

  action(){
    if(this.text==='Show test data'){
      this.show();
    }else{
      this.hide();
    }
  }

  hide(){
    this.showTest=false;
    this.text='Show test data';
  }
  show(){
       
   
    this.showTest=true;
    this.text='Hide test data';
  }

}
