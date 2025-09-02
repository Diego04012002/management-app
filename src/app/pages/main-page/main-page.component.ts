import { Component, inject } from '@angular/core';
import { TabsComponent } from '../../shared/components/tabs/tabs.component';
import { StatsComponent } from '../../shared/components/stats/stats.component';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { BackgroundAnimationComponent } from '../../shared/components/background-animation/background-animation.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from '../../shared/components/hero/hero.component';
import { AuthService } from '../../modules/auth/services/auth.service';
import Notiflix from 'notiflix';

@Component({
  selector: 'app-main-page',
  imports: [RouterOutlet, TabsComponent, StatsComponent],
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  constructor(){
    Notiflix.Notify.init({
      position:"right-bottom"
    })
  }

  authService=inject(AuthService)

  tabsAdmin = [
    {
      path: '/main/perfil',
      label: 'Perfil',
      class:
        'bg-gradient-to-r from-slate-600 to-slate-700 text-white shadow-lg',
      image: 'perfil.svg',
    },
    {
      path: '/main/empleados',
      label: 'Empleados',
      class: 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg',
      image: 'empleado.svg',
    },
    {
      path: '/main/eventos',
      label: 'Eventos',
      class:
        'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg',
      image: 'eventos.svg',
    },
    {
      path: '/main/invitaciones',
      label: 'Invitaciones',
      class:
        'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg',
      image: 'invitaciones.svg',
    },
    {
      path: '/main/checkinout',
      label: 'Check-In/Out',
      class:
        'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-lg',
      image: 'checkinout.svg',
    },
    {
      path: '/main/registros',
      label: 'Registros',
      class:
        'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-lg',
      image: 'registros.svg',
    },
  ];

  tabUser = [
    {
      path: '/main/perfil',
      label: 'Perfil',
      class:
        'bg-gradient-to-r from-slate-600 to-slate-700 text-white shadow-lg',
      image: 'perfil.svg',
    },
  ];
}
