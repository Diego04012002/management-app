import { Component, inject } from '@angular/core';
import { LoginLogutComponent } from '../../modules/auth/components/login-logut/logut.component';
import { UserCheckinoutComponent } from '../../modules/user-profile/components/user-checkinout/user-checkinout.component';
import { UserInformationComponent } from '../../modules/user-profile/components/user-information/user-information.component';
import { AuthService } from '../../modules/auth/services/auth.service';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  imports: [
    UserInformationComponent,
    UserCheckinoutComponent,
    LoginLogutComponent,
  ],
})
export class UserProfileComponent {
  authService = inject(AuthService);

  userResource = rxResource({
    stream: () => {
      return this.authService.getUserInformation();
    },
    defaultValue: {
      email: '',
      fullName: '',
      active: '',
      role: '',
      lastCheckIn: '',
      lastCheckOut: '',
      department: '',
    },
  });

  isCheckIn() {
    return (
      new Date(this.userResource.value()?.lastCheckIn!) >
      new Date(this.userResource.value()?.lastCheckOut!)
    );
  }
}
