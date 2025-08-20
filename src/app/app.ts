import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { BackgroundAnimationComponent } from "./shared/components/background-animation/background-animation.component";
import { HeaderComponent } from "./shared/components/header/header.component";
import { StatsComponent } from "./shared/components/stats/stats.component";
import { TabsComponent } from "./shared/components/tabs/tabs.component";
import { HeroComponent } from "./shared/components/hero/hero.component";
import { FooterComponent } from "./shared/components/footer/footer.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [BackgroundAnimationComponent, HeaderComponent, StatsComponent, TabsComponent, FooterComponent, RouterOutlet]
})
export class App {
  title = "SmartAccess Pro"
  activeTab = "profile"

  tabs=[
    {
      path:"perfil",
      label:"Perfil",
      class:"bg-gradient-to-r from-slate-600 to-slate-700 text-white shadow-lg",
      image:"profile.svg"
    },
    {
      path:"empleados",
      label:"Empleados",
      class:"bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg",
      image:"employee.svg"
    },
    {
      path:"eventos",
      label:"Eventos",
      class:"bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg",
      image:"events.svg"
    },
    {
      path:"invitaciones",
      label:"Invitaciones",
      class:"bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg",
      image:"invitations.svg"
    },
    {
      path:"checkinout",
      label:"Check-In/Out",
      class:"bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-lg",
      image:"checkinout.svg"
    },
    {
      path:"registros",
      label:"Registros",
      class:"bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-lg",
      image:"registros.svg"
    }
  ]

  setActiveTab(tab: string) {
    this.activeTab = tab
  }
}
