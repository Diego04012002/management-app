import { Component, inject } from '@angular/core';
import { LastCheckinUser } from '../../../../interfaces/lastCheckIn.interface';
import { Page } from '../../../../interfaces/page.interface';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { CheckInService } from '../../../checkin-system/services/checkin.service';
import { DatePipe, TitleCasePipe } from '@angular/common';
import { PaginationComponent } from "../../../../shared/components/pagination/pagination.component";
import { PaginationService } from '../../../../shared/services/pagination.service';
import { SearchInputComponent } from "../../../../shared/components/search-input/search-input.component";
import { SearchService } from '../../../../shared/services/search.service';

@Component({
  selector: 'app-employee-list',
  imports: [DatePipe, TitleCasePipe, PaginationComponent, SearchInputComponent],
  templateUrl: './employee-list.component.html',
})
export class EmployeeListComponent {
  checkInService = inject(CheckInService);
  paginationService=inject(PaginationService)
  searchService=inject(SearchService)
  page = toSignal<number>(this.paginationService.page);
  size = toSignal<number>(this.paginationService.size);
  searchNext=toSignal<string>(this.searchService.search)

  employeeResource = rxResource({
    params: () => {
      return {
        page: this.page(),
        size: this.size(),
        fullName:this.searchNext()
      };
    },
    stream: ({ params: { page, size, fullName } }) => {
      return this.checkInService.getLastCheckInList(page!, size!, fullName!);
    },
  });

  getRoleBadgeClass(role: string) {
    return role === 'ADMIN'
      ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white border-0'
      : 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0';
  }

  getRoleText(role: string) {
    return role === 'admin' ? 'Admin' : 'Empleado';
  }

  getStatusBadgeClass(action: string) {
    return action=="CHECK_IN"
      ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0'
      : 'bg-gradient-to-r from-gray-500 to-slate-500 text-white border-0';
  }

  getStatusText(action: string) {
    return action === 'CHECK_IN' ? 'Activo' : 'Inactivo';
  }
}
