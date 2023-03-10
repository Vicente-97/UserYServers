import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from './auth.service.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardianServiceService implements CanActivate{


  constructor(private authService:AuthServiceService, private router:Router) { }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
   
    return this.authService.isAuthenticated()
    .then(
      (authenticated)=>{
        if (authenticated){
          return true;
        }else {
          this.router.navigate(['/']);
          return false;
        }
      }
    );

  }
  canActivateChild(route: ActivatedRouteSnapshot, 

    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

return this.canActivate(route, state);

}
 
}
