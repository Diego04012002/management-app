import {
  AfterContentInit,
  AfterRenderRef,
  AfterViewChecked,
  AfterViewInit,
  Component,
  inject,
  input,
  OnInit,
  output,
  ResourceRef,
  signal,
} from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { CheckInService } from '../../services/checkin.service';
import { DatePipe } from '@angular/common';
import { CheckIn } from '../../../../interfaces/checkIn.interface';
import { AuthService } from '../../../auth/services/auth.service';
import { LastCheckinUser } from '../../../../interfaces/lastCheckIn.interface';
import { PaginationComponent } from '../../../../shared/components/pagination/pagination.component';
import { Page } from '../../../../interfaces/page.interface';
import { SkeletonCheckinCardComponent } from '../../../../shared/components/skeleton-checkin-card/skeleton-checkin-card.component';

@Component({
  selector: 'app-checkin-system-list',
  imports: [DatePipe, PaginationComponent, SkeletonCheckinCardComponent],
  templateUrl: './checkin-system-list.component.html',
})
export class CheckinSystemListComponent {
  checkInService = inject(CheckInService);
  authService = inject(AuthService);
  adminUser = this.authService.user;
  employeesInput = input.required<LastCheckinUser[]>();
  isLoading = input.required<boolean>();
  isFirstLoad = signal<boolean>(true);
  onUpdateEmployees = output<string>();


  changeStatus(id: number) {
    this.isFirstLoad.set(false);
    this.checkInService.checkIn(id).subscribe((data) => {
      if (data) {
        this.onUpdateEmployees.emit('Change status');
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
    if (status === 'CHECK_OUT') return 'Sin registro';
    if (status === 'CHECK_IN') return 'En oficina';
    return 'Fuera de oficina';
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
