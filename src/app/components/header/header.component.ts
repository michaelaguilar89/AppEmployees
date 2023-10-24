import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


  auth= inject(AuthService);
  router=inject(Router);
  logOut(){
    this.auth.logOut();
    (console.log('logout from header.ts'))
    this.router.navigate(['/login']);
  }
}
