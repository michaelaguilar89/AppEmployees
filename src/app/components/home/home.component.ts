import { Component,OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    myUser:any;
    userData:any;
    id:any;

    constructor(private auth:AuthService){
      
    }
    ngOnInit(): void {
      this.myUser=this.auth.getCurrentUser();
      console.log('myUser :   '+this.myUser);
       this.id=Number(this.myUser.id);
        console.log('id : '+this.id);
        this.userData=this.auth.getUserById(this.id);
        console.log(this.userData)
        
    }

}
