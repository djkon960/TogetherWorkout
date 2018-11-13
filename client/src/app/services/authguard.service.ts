import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {
  constructor(private router: Router, private auth: AuthService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    switch (route.routeConfig.path) {
      case "homepage": {
        if (!this.auth.isLoggedIn()) {
          return true;
        } else {
          this.router.navigate(['main']);
          return false;
        }
      };
      case "main": {
        if (this.auth.isLoggedIn()) {
          return true;
        } else {
          this.router.navigate(['homepage']);
          return false;
        }
      };
      case "event": {
        if (this.auth.isLoggedIn()) {
          return true;
        } else {
          this.router.navigate(['homepage']);
          return false;
        }
      };
      case "bacheca-annunci": {
        if (this.auth.isLoggedIn()) {
          return true;
        } else {
          this.router.navigate(['homepage']);
          return false;
        }
      };
      case "supporto": {
        if (this.auth.isLoggedIn()) {
          return true;
        } else {
          this.router.navigate(['homepage']);
          return false;
        }
      };
      case "userprofile": {
        if (this.auth.isLoggedIn()) {
          return true;
        } else {
          this.router.navigate(['homepage']);
          return false;
        }
      };
      case "classifiche": {
        if (this.auth.isLoggedIn()) {
          return true;
        } else {
          this.router.navigate(['homepage']);
          return false;
        }
      };
      case "signin": {
        if (this.auth.isLoggedIn()) {

          this.router.navigate(['dashboard']);
          return false;
        }
        else {
          return true;
        }
      };
    }
  }
}
