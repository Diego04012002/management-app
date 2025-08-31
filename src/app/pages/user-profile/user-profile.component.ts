import { Component } from '@angular/core';
import { LoginLogutComponent } from "../../modules/auth/components/login-logut/logut.component";
import { UserCheckinoutComponent } from '../../modules/user-profile/components/user-checkinout/user-checkinout.component';
import { UserInformationComponent } from '../../modules/user-profile/components/user-information/user-information.component';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  imports: [UserInformationComponent, UserCheckinoutComponent, LoginLogutComponent]
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
