import { AfterViewInit, Component, inject, input } from '@angular/core';
import { Employee } from '../../../../interfaces/employee.interface';
import { LastCheckinUser } from '../../../../interfaces/lastCheckIn.interface';
import { PaginationService } from '../../../../shared/services/pagination.service';
import { Page, Pageable } from '../../../../interfaces/page.interface';
import { NumberChecksLogs } from '../../../../interfaces/numberChecksLogs.interface';

@Component({
  selector: 'app-checkin-system-stats',
  imports: [],
  templateUrl: './checkin-system-stats.component.html',
})
export class CheckinSystemStatsComponent implements AfterViewInit {
  paginationService = inject(PaginationService);
  employeesNumber = input.required<NumberChecksLogs>();
  pageContent = input<Page<LastCheckinUser>>();

  constructor() {}

  ngAfterViewInit(): void {
    this.paginationService.numberOfPagesNext =
      this.pageContent()?.page.totalPages ?? 0;
  }
}
