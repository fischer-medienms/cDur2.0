import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs'
import { filter, map, take } from 'rxjs/operators'
import { AuthService } from '../services/auth.service';
import { ToastController } from '@ionic/angular'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {

  constructor(private authService: AuthService, private router: Router,private toastController: ToastController) {}  
 
  
  canActivate(route: ActivatedRouteSnapshot): Observable<boolean | UrlTree> {
    return this.authService.getCurrentUser().pipe(
      filter((val) => val !== null), // Filter out initial Behavior subject value
      take(1), // Otherwise the Observable doesn't complete!
      map((isAuthenticated) => {
        console.log('GUARD LOGIN ist authentifiziert: ', isAuthenticated);
        if (isAuthenticated) {
          return true
        } else {
          this.toastController
            .create({
              message: 'You are not allowed to access this!',
              duration: 2000,
            })
            .then((toast) => toast.present())

          return this.router.createUrlTree(['/login'])
        }
      })
    )
  }
}
