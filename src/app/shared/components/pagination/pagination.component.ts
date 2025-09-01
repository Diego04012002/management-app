import {
  Component,
  computed,
  inject,
  input,
  OnDestroy,
  signal,
} from '@angular/core';
import { PaginationService } from '../../services/pagination.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-pagination',
  imports: [],
  templateUrl: './pagination.component.html',
})
export class PaginationComponent implements OnDestroy {
  paginationService = inject(PaginationService);
  signalNumberPages = toSignal(
    this.paginationService.numberOfPages.asObservable(),
    { initialValue: 0 }
  );

  numberPages = computed(() => {
    const total = this.signalNumberPages();

    const arr = Array.from({ length: total }, (_, i) => i + 1);

    return total > 0 ? arr : [];
  });

  page = toSignal(this.paginationService.page);
  size = toSignal(this.paginationService.size);

  changePage(page: number) {
    this.paginationService.pageNext = page;
  }

  ngOnDestroy(): void {
    this.numberPages();
  }
}
