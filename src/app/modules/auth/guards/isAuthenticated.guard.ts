import { CanMatchFn, Route, Router, UrlSegment } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { inject } from "@angular/core";
import { firstValueFrom } from "rxjs";

export const IsAuthenticatedGuard: CanMatchFn = async (route: Route, segments: UrlSegment[]) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // Evitar aplicar guard a la ruta de login
  const isAuthenticated = await firstValueFrom(authService.checkStatus());
  if(!isAuthenticated){
    return router.parseUrl('/auth/login');
  }
  return true
};
