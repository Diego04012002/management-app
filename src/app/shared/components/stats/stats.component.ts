import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RealTimeService } from '../../services/realtime.service';
import { CheckInService } from '../../../modules/checkin-system/services/checkin.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { AuthService } from '../../../modules/auth/services/auth.service';

@Component({
  selector: 'app-stats',
  imports: [RouterLink],
  templateUrl: './stats.component.html',
})
export class StatsComponent {
  realtimeService = inject(RealTimeService);
  checkinService = inject(CheckInService);
  authService = inject(AuthService);

  subCountCheckLogListener = toSignal(this.realtimeService.subCountCheckLog, {
    initialValue: 0,
  })
  subCountCheckLog=signal(0)

  subCountUserListener=toSignal(this.realtimeService.subCountUser, {
    initialValue: 0,
  })
  subCountUser=signal(0)

  subCountChekInCurrentListener=toSignal(this.realtimeService.subCountCheckInCurrent, {
    initialValue: 0,
  })
  subCountCheckInCurrent=signal(0)



  ngOnInit(){
    this.checkinService.countCheckLogsCurrent().subscribe((data:number)=>{
      this.subCountCheckLog.set(data)
    })
    this.authService.countUser().subscribe((data:number)=>{
      this.subCountUser.set(data)
    })
    this.checkinService.getCountUserWithCheckIn().subscribe((data:number)=>{
      this.subCountCheckInCurrent.set(data)
    })
  }
}
