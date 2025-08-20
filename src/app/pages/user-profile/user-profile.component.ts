import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html'
})
export class UserProfileComponent {
  user = {
    name: 'Ana Martínez',
    position: 'Gerente de Recursos Humanos',
    email: 'ana.martinez@empresa.com',
    department: 'Recursos Humanos',
    lastCheckIn: '15/01/2024 08:30',
    lastCheckOut: '14/01/2024 17:45',
    initials: 'AM',
  };
}
