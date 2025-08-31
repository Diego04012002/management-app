import { Component, input } from '@angular/core';
import { User } from '../../../../interfaces/user.interface';

@Component({
  selector: 'app-login-logut',
  imports: [],
  templateUrl: './logut.component.html',
})
export class LoginLogutComponent {
  user = input.required<User>()
}
