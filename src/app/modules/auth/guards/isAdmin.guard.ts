import { CanMatchFn, Route, Router, UrlSegment } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { inject } from "@angular/core";
import { Location } from "@angular/common";

export const IsAdminGuard: CanMatchFn = (route: Route, segments: UrlSegment[]) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const location = inject(Location);



  // Evitar aplicar guard a la ruta de login
  const isAdmin =  authService.isAdmin()
  if(!isAdmin){
    location.back()
  }
  return true
};
