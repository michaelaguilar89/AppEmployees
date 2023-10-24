import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class GuardUserGuard implements CanActivate {

  constructor(private auth:AuthService,private router:Router){

  }
  myUser:any;
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree 
    {
      this.myUser=this.auth.getCurrentUser();
     
      if(this.myUser==undefined){

        alert('Access denied, please log in');
        return this.router.navigate(['/login']).then(()=>false)
      }
    return true;
    }
  
}
