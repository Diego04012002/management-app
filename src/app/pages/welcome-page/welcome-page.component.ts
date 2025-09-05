import { AfterViewInit, Component, inject } from '@angular/core';
import { HeroComponent } from '../../shared/components/hero/hero.component';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../modules/auth/services/auth.service';

@Component({
  selector: 'app-welcome-page',
  imports: [HeroComponent, RouterLink],
  templateUrl: './welcome-page.component.html',
})
export class WelcomePageComponent implements AfterViewInit {
  authService = inject(AuthService);
  router = inject(Router);

  ngAfterViewInit(): void {
    if (this.authService.user()) {
      this.router.navigateByUrl('/main/perfil');
    }
  }


}
