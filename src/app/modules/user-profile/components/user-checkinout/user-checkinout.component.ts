import { Component, input } from '@angular/core';

@Component({
  selector: 'app-user-checkinout',
  imports: [],
  templateUrl: './user-checkinout.component.html',
})
export class UserCheckinoutComponent {

  isCheckIn=input.required<boolean>()

}
