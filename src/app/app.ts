import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BackgroundAnimationComponent } from './shared/components/background-animation/background-animation.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [
    BackgroundAnimationComponent,
    HeaderComponent,
    FooterComponent,
    RouterOutlet,
  ],
})
export class App {
  constructor() {}

  tabs = [
    {
      path: 'perfil',
      label: 'Perfil',
      class:
        'bg-gradient-to-r from-slate-600 to-slate-700 text-white shadow-lg',
      image: 'perfil.svg',
    },
    {
      path: 'empleados',
      label: 'Empleados',
      class: 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg',
      image: 'empleado.svg',
    },
    {
      path: 'eventos',
      label: 'Eventos',
      class:
        'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg',
      image: 'eventos.svg',
    },
    {
      path: 'invitaciones',
      label: 'Invitaciones',
      class:
        'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg',
      image: 'invitaciones.svg',
    },
    {
      path: 'checkinout',
      label: 'Check-In/Out',
      class:
        'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-lg',
      image: 'checkinout.svg',
    },
    {
      path: 'registros',
      label: 'Registros',
      class:
        'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-lg',
      image: 'registros.svg',
    },
  ];
}
