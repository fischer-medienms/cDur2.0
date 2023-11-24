import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router,  UrlTree } from '@angular/router';
import { Observable, filter, map, take } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { ToastController } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class AutoLoginGuard {
  constructor(private authService: AuthService, private router: Router,private toastController: ToastController) {}  
 
   
  canActivate(route: ActivatedRouteSnapshot): Observable<boolean | UrlTree> {
    return this.authService.getCurrentUser().pipe(
      filter((val) => val !== null), // Filter out initial Behavior subject value
      take(1), // Otherwise the Observable doesn't complete!
      map((isAuthenticated) => {
        console.log('AUTO LOGIN ist authentifiziert: ', isAuthenticated);
        if (isAuthenticated) {   
             return this.router.createUrlTree(['/captions'])
       
        } else {       
        return null;
         
        }
      })
    )
  }
}