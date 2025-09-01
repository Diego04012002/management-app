import { AfterViewInit, Component, inject, input } from '@angular/core';
import { LastCheckinUser } from '../../../../interfaces/lastCheckIn.interface';
import { PaginationService } from '../../../../shared/services/pagination.service';
import { Page, Pageable } from '../../../../interfaces/page.interface';
import { NumberChecksLogs } from '../../../../interfaces/numberChecksLogs.interface';

@Component({
  selector: 'app-checkin-system-stats',
  imports: [],
  templateUrl: './checkin-system-stats.component.html',
})
export class CheckinSystemStatsComponent{
  paginationService = inject(PaginationService);
  employeesNumber = input.required<NumberChecksLogs>();
  pageContent = input<Page<LastCheckinUser>>();

  constructor() {}
}
