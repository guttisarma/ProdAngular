import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    let url: string = state.url;
    console.log('URL' + url);
    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    console.log('this.authService.isLoggedIn' + this.authService.isLoggedIn);

    if (this.authService.isLoggedIn) {
      console.log('this.authService.isLoggedIn' + this.authService.isLoggedIn);

      return true;
    }

    // Store the attempted URL for redirecting
    this.authService.redirectUrl = url;

    // Navigate to the login page with extras
    this.router.navigate(['/Login']);
    return false;
  }
}