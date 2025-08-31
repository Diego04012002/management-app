import { Component, inject } from '@angular/core';
import { CheckinSystemStatsComponent } from '../../modules/checkin-system/components/checkin-system-stats/checkin-system-stats.component';
import { CheckInService } from '../../modules/checkin-system/services/checkin.service';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { CheckinSystemListComponent } from '../../modules/checkin-system/components/checkin-system-list/checkin-system-list.component';
import { PaginationService } from '../../shared/services/pagination.service';

@Component({
  selector: 'app-checkin-system',
  templateUrl: './checkin-system.component.html',
  imports: [CheckinSystemStatsComponent, CheckinSystemListComponent],
})
export class CheckInSystemComponent {
  checkInService = inject(CheckInService);
  paginationService = inject(PaginationService);
  page = toSignal<number>(this.paginationService.page);
  size = toSignal<number>(this.paginationService.size);

  tabs = [
    {
      path: '/main/checkinout/list',
      label: 'Control de empleados',
      class: 'bg-gradient-to-l from-amber-500 to-orange-500',
      image: '',
    },
    {
      path: '/main/checkinout/logs',
      label: 'Logs',
      class: 'bg-gradient-to-r from-amber-500 to-orange-500',
      image: '',
    },
  ];

  employeeResource = rxResource({
    params: () => {
      return {
        page: this.page(),
        size: this.size(),
      };
    },
    stream: ({ params: { page, size } }) => {
      return this.checkInService.getLastCheckInList(page!, size!);
    },
  });

  employeeNumber = rxResource({
    stream: () => this.checkInService.getNumberLastCheckIn(),
    defaultValue: {
      checkIns: 0,
      checkOuts: 0
    }
  });


  updateEmployees(event: string) {
    if (event == 'Change status') {
      this.employeeResource.reload();
      this.employeeNumber.reload()
    }
  }
}
