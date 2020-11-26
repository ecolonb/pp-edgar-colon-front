import { Injectable } from '@angular/core';
import { UserService } from '../services/user.service';

import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}
  canActivate(): boolean {
    if (this.userService.isAuth()) {
      return true;
    } else {
      this.router.navigateByUrl('/login');
      return false;
    }
  }
}

// import { Injectable } from '@angular/core';
// import { CanActivate, Router } from '@angular/router';
// import { LoginService } from '../services/login.service';
// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService implements CanActivate {
//   constructor(private loginService: LoginService, private router: Router) {}
//   canActivate(): boolean {
//     return this.loginService.isAuth();
//   }
// }
