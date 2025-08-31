import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, delay, Observable, tap } from 'rxjs';
import { LastCheckinUser } from '../../../interfaces/lastCheckIn.interface';
import { environment } from '../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { CheckIn } from '../../../interfaces/checkIn.interface';
import { Page } from '../../../interfaces/page.interface';
import { PaginationService } from '../../../shared/services/pagination.service';
import { NumberChecksLogs } from '../../../interfaces/numberChecksLogs.interface';

@Injectable({ providedIn: 'root' })
export class CheckInService {
  baseUrl = environment.baseUrl;
  checkinSubject = new BehaviorSubject<LastCheckinUser[]>([]);
  http = inject(HttpClient);
  paginationService = inject(PaginationService);

  getLastCheckInList(
    page: number,
    size: number
  ): Observable<Page<LastCheckinUser>> {
    return this.http
      .get<Page<LastCheckinUser>>(
        `${this.baseUrl}api/getUsersWithLastLog?page=${page}&size=${size}`
      )
      .pipe(
        tap((employee) => {
          this.paginationService.numberOfPagesNext = employee.page.totalPages
        })
      );
  }

  getNumberLastCheckIn(): Observable<NumberChecksLogs> {
    return this.http.get<NumberChecksLogs>(
      `${this.baseUrl}api/getCountUserWithCheckInAndCheckOut`
    );
  }

  get employees() {
    return this.checkinSubject.asObservable();
  }

  set setEmployees(events: LastCheckinUser[]) {
    this.checkinSubject.next(events);
  }

  checkIn(id: number) {
    return this.http.post(`${this.baseUrl}api/checkInByAdmin/${id}`, {});
  }
}
