import { Component, input } from '@angular/core';
import { Record } from '../../../../interfaces/record.interface';
import { DatePipe } from '@angular/common';
import { PaginationComponent } from "../../../../shared/components/pagination/pagination.component";
import { SearchInputComponent } from "../../../../shared/components/search-input/search-input.component";
import { SkeletonAccessRecordComponent } from "../../../../shared/components/skeleton-access-record/skeleton-access-record.component";

@Component({
  selector: 'app-register-list',
  imports: [DatePipe, PaginationComponent, SearchInputComponent, SkeletonAccessRecordComponent],
  templateUrl: './register-list.component.html',
})
export class RegisterListComponent {

  records=input.required<Record[]>()
  isLoading=input.required<boolean>()


  getTypeBadgeClass(type: string) {
    if(type=="USER" || type=="ADMIN"){
      return 'bg-blue-500/20 text-blue-300 border-blue-500/30'
    }
    return 'bg-purple-500/20 text-purple-300 border-purple-500/30';
  }

  getTypeText(type: string) {
    if(type=="USER" || type=="ADMIN"){
      return "Empleado"
    }
    return 'Invitado';
  }

  getActionBadgeClass(action: string) {
    return action === 'CHECK_IN'
      ? 'bg-green-500/20 text-green-300 border-green-500/30'
      : 'bg-red-500/20 text-red-300 border-red-500/30';
  }

  getActionText(action: string) {
    return action === 'CHECK_IN' ? 'Entrada' : 'Salida';
  }
}
