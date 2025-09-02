import {
  Component,
  computed,
  inject,
  input,
  OnDestroy,
  output,
  signal,
} from '@angular/core';
import { CheckInService } from '../../services/checkin.service';
import { DatePipe } from '@angular/common';
import { AuthService } from '../../../auth/services/auth.service';
import { LastCheckinUser } from '../../../../interfaces/lastCheckIn.interface';
import { PaginationComponent } from '../../../../shared/components/pagination/pagination.component';
import { SkeletonCheckinCardComponent } from '../../../../shared/components/skeleton-checkin-card/skeleton-checkin-card.component';
import { PaginationService } from '../../../../shared/services/pagination.service';
import { SearchInputComponent } from "../../../../shared/components/search-input/search-input.component";
import { SearchService } from '../../../../shared/services/search.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-checkin-system-list',
  imports: [DatePipe, PaginationComponent, SkeletonCheckinCardComponent, SearchInputComponent],
  templateUrl: './checkin-system-list.component.html',
})
export class CheckinSystemListComponent{
  checkInService = inject(CheckInService);
  authService = inject(AuthService);
  paginationService=inject(PaginationService)
  searchService=inject(SearchService)
  employeesInput = input.required<LastCheckinUser[]>();
  isLoading = input.required<boolean>();
  isFirstLoad = signal<boolean>(true);
  onUpdateEmployees = output();
  search=toSignal(this.searchService.search)
  currentLength=signal(10)

  changeStatus(id: number) {
    this.isFirstLoad.set(false);
    this.checkInService.checkInAdmin(id).subscribe((data) => {
      if (data) {
        this.onUpdateEmployees.emit();
      }
    });
  }

  getStatusBadgeClass(status: string) {
    if (status === 'CHECK_OUT') {
      return 'bg-slate-500/20 text-slate-300 border-slate-400/30';
    }
    if (status === 'CHECK_IN') {
      return 'bg-emerald-500/20 text-emerald-300 border-emerald-400/30';
    }
    return 'bg-red-500/20 text-red-300 border-red-400/30';
  }

  getStatusText(status: string) {
    if (status === 'CHECK_OUT') return 'Fuera de oficina';
    if (status === 'CHECK_IN') return 'En oficina';
    return 'Sin registro';
  }

  getActionButtonClass(status: string) {
    if (status === 'CHECK_IN') {
      return 'bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700';
    }
    return 'bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700';
  }

  getActionText(status: string) {
    return status === 'CHECK_IN' ? 'Check-Out' : 'Check-In';
  }



}
