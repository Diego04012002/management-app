import { Component, input } from '@angular/core';
import { User } from '../../../../interfaces/user.interface';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-user-information',
  imports: [DatePipe],
  templateUrl: './user-information.component.html',
})
export class UserInformationComponent {

  user=input.required<User>()

  getInitials(fullName:string){
    return fullName.split(' ').slice(0,2).map(word=>word[0]).join('')
  }
}
