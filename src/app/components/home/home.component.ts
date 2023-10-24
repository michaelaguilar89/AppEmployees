import { Component,OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    myUser:any|null;
    userData:any;
    id:any;
    username:any;
    role:any;
    photo:any;

    constructor(private auth:AuthService){
      
    }
    ngOnInit(): void {
      this.myUser=this.auth.getCurrentUser()
      console.log(this.myUser);
    
        
    }

}
