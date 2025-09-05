import { inject, Injectable } from '@angular/core';
import { SupabaseClient } from '@supabase/supabase-js';
import { AuthService } from '../../modules/auth/services/auth.service';
import { BehaviorSubject, firstValueFrom } from 'rxjs';
import { CheckInService } from '../../modules/checkin-system/services/checkin.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({ providedIn: 'root' })
export class RealTimeService {
  authService=inject(AuthService)
  checkInService=inject(CheckInService)
  supabase!: SupabaseClient;
  subCountCheckLog:BehaviorSubject<number>=new BehaviorSubject<number>(0)
  subCountUser:BehaviorSubject<number>=new BehaviorSubject<number>(0)
  subCountCheckInCurrent:BehaviorSubject<number>=new BehaviorSubject<number>(0)

  constructor(){
    this.supabase=this.authService.createSupabaseClient()
    this.onTableChange("users", "users", async (payload) => {
      this.subCountUserSignalNext = await firstValueFrom(this.authService.countUser())
    })
    this.onTableChange("check_logs","check_logs", async (payload) => {
      this.subCountCheckLogSignalNext = await firstValueFrom(this.checkInService.countCheckLogsCurrent())
    })
    this.onTableChange("check_logs","check_logs_in_office", async (payload) => {
      this.subCountCurrentInOfficeSignalNext = await firstValueFrom(this.checkInService.getCountUserWithCheckIn())
    })
  }

  async ngOnInit(){
  }

  onTableChange(table:string, channel:string, callback: (payload: any) => void) {
    return this.supabase
      .channel(channel)
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: table,
        },
        async (payload) => {
          callback(payload);
        }
      )
      .subscribe();
  }

  set subCountCheckLogSignalNext(value:number){
    this.subCountCheckLog.next(value)
  }

  get subCountCheckLogSignalValue(){
    return this.subCountCheckLog.value
  }

  set subCountUserSignalNext(value:number){
    this.subCountUser.next(value)
  }

  get subCountUserSignalValue(){
    return this.subCountUser.value
  }

  set subCountCurrentInOfficeSignalNext(value:number){
    this.subCountCheckInCurrent.next(value)
  }

  get subCountCurrentInOfficeSignalValue(){
    return this.subCountCheckInCurrent.value
  }
}
