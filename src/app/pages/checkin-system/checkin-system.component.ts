import { Component, inject, OnDestroy } from '@angular/core';
import { CheckinSystemStatsComponent } from '../../modules/checkin-system/components/checkin-system-stats/checkin-system-stats.component';
import { CheckInService } from '../../modules/checkin-system/services/checkin.service';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { CheckinSystemListComponent } from '../../modules/checkin-system/components/checkin-system-list/checkin-system-list.component';
import { PaginationService } from '../../shared/services/pagination.service';
import { SearchService } from '../../shared/services/search.service';

@Component({
  selector: 'app-checkin-system',
  templateUrl: './checkin-system.component.html',
  imports: [CheckinSystemStatsComponent, CheckinSystemListComponent],
})
export class CheckInSystemComponent implements OnDestroy {
  checkInService = inject(CheckInService);
  paginationService = inject(PaginationService);
  searchService = inject(SearchService);
  page = toSignal<number>(this.paginationService.page);
  size = toSignal<number>(this.paginationService.size);
  search = toSignal<string>(this.searchService.search);

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
        fullName: this.search(),
      };
    },
    stream: ({ params: { page, size, fullName } }) => {
      return this.checkInService.getLastCheckInList(page!, size!, fullName!);
    },
  });

  employeeNumber = rxResource({
    stream: () => this.checkInService.getNumberLastCheckIn(),
    defaultValue: {
      checkIns: 0,
      checkOuts: 0,
    },
  });

  updateEmployees() {
    this.employeeResource.reload();
    this.employeeNumber.reload();
  }

  ngOnDestroy(): void {
    this.paginationService.resetValues();
    this.searchService.resetValue();
  }
}
