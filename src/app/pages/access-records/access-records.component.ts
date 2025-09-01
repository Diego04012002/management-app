import { Component, inject, OnDestroy } from '@angular/core';
import { RegisterListComponent } from '../../modules/access-record/components/register-list/register-list.component';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { CheckInService } from '../../modules/checkin-system/services/checkin.service';
import { PaginationService } from '../../shared/services/pagination.service';
import { SearchService } from '../../shared/services/search.service';

@Component({
  selector: 'app-access-records',
  templateUrl: './access-records.component.html',
  imports: [RegisterListComponent],
})
export class AccessRecordsComponent implements OnDestroy {
  checkInsService = inject(CheckInService);
  paginationService = inject(PaginationService);
  searchService = inject(SearchService);

  page = toSignal<number>(this.paginationService.page);
  size = toSignal<number>(this.paginationService.size);
  search = toSignal<string>(this.searchService.search);

  recordsResource = rxResource({
    params: () => {
      return {
        size: this.size(),
        page: this.page(),
        fullName: this.search(),
      };
    },
    stream: ({ params: { size, page, fullName } }) => {
      return this.checkInsService.getAllLogsUser(size!, page!, fullName!);
    },
  });

  ngOnDestroy(): void {
    this.paginationService.resetValues();
    this.searchService.resetValue();
  }
}
