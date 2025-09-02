import { Component, inject, input, output } from '@angular/core';
import { CheckInService } from '../../../checkin-system/services/checkin.service';
import Notiflix from 'notiflix';
import { TitleCasePipe } from '@angular/common';



@Component({
  selector: 'app-user-checkinout',
  imports: [],
  templateUrl: './user-checkinout.component.html',
})
export class UserCheckinoutComponent {

  pipe = new TitleCasePipe();
  isCheckIn=input.required<boolean>()
  idUser=input.required<number>()
  checkInService=inject(CheckInService)
  onCheckin=output<string>()


  checkIn(){
    this.checkInService.checkInYourself(this.idUser()).subscribe((data)=>{
      if(data){
        Notiflix.Notify.success(`${this.pipe.transform(data.action)} realizado con exito`)
        this.onCheckin.emit(data.action)
      }
    })
  }
}
