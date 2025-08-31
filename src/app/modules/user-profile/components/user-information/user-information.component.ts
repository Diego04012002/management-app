import { Component, input } from '@angular/core';
import { User } from '../../../../interfaces/user.interface';

@Component({
  selector: 'app-user-information',
  imports: [],
  templateUrl: './user-information.component.html',
})
export class UserInformationComponent {

  user=input.required<User>()

}
