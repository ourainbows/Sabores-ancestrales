import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { USER_STORAGE_KEY } from "../const/const";

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private readonly router: Router) { }

  canActivate(): boolean {
    if (localStorage.getItem(USER_STORAGE_KEY)) {
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
}
