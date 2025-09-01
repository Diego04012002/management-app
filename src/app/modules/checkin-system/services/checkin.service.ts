import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, delay, Observable, of, tap } from 'rxjs';
import { LastCheckinUser } from '../../../interfaces/lastCheckIn.interface';
import { environment } from '../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Page } from '../../../interfaces/page.interface';
import { PaginationService } from '../../../shared/services/pagination.service';
import { NumberChecksLogs } from '../../../interfaces/numberChecksLogs.interface';
import { Record } from '../../../interfaces/record.interface';

@Injectable({ providedIn: 'root' })
export class CheckInService {
  baseUrl = environment.baseUrl;
  checkinSubject = new BehaviorSubject<LastCheckinUser[]>([]);
  http = inject(HttpClient);
  paginationService = inject(PaginationService);
  newCheck: boolean = false;

  employeeList: Map<string, Page<LastCheckinUser>> = new Map();
  employeeCount!: NumberChecksLogs;

  employeeLogMapperCache: Map<string, Page<Record>> = new Map();

  getLastCheckInList(
    page: number,
    size: number,
    fullName?:string
  ): Observable<Page<LastCheckinUser>> {
    if (page == 0) {
      page = 0;
    } else {
      page = page - 1;
    }
    if (this.employeeList.has(`${page}-${size}-${fullName}`) && !this.newCheck) {
      return of(this.employeeList.get(`${page}-${size}-${fullName}`)!).pipe(
        tap((employee) => {
          this.paginationService.numberOfPagesNext = employee.page.totalPages;
        })
      );
    }

    return this.http
      .get<Page<LastCheckinUser>>(
        `${this.baseUrl}api/getUsersWithLastLog?page=${page}&size=${size}&fullName=${fullName ? fullName: ''}`
      )
      .pipe(
        tap((employee) => {
          this.newCheck = false;
          this.paginationService.numberOfPagesNext = employee.page.totalPages;
          this.employeeList.set(`${page}-${size}-${fullName}`, employee);
        })
      );
  }

  getNumberLastCheckIn(): Observable<NumberChecksLogs> {
    if (this.employeeCount && !this.newCheck) {
      return of(this.employeeCount);
    }
    return this.http
      .get<NumberChecksLogs>(
        `${this.baseUrl}api/getCountUserWithCheckInAndCheckOut`
      )
      .pipe(
        tap((employee) => {
          this.newCheck = false;
          this.employeeCount = employee;
        })
      );
  }

  getAllLogsUser(size: number, page: number, fullName:string): Observable<Page<Record>> {
    if (page == 0) {
      page = 0;
    } else {
      page = page - 1;
    }
    if (this.employeeLogMapperCache.has(`${page}-${size}-${fullName}`)) {
      return of(this.employeeLogMapperCache.get(`${page}-${size}-${fullName}`)!).pipe(
        tap((employee) => {
          this.paginationService.numberOfPagesNext = employee.page.totalPages;
        })
      );
    } else {
      return this.http
        .get<Page<Record>>(
          `${this.baseUrl}api/getUsersWithAllLog?page=${page}&size=${size}&fullName=${fullName}`
        )
        .pipe(
          tap((employee) => {
            this.employeeLogMapperCache.set(`${page}-${size}-${fullName}`, employee);
            this.paginationService.numberOfPagesNext = employee.page.totalPages;
          })
        );
    }
  }

  get employees() {
    return this.checkinSubject.asObservable();
  }

  set setEmployees(events: LastCheckinUser[]) {
    this.checkinSubject.next(events);
  }

  checkIn(id: number) {
    this.newCheck = true;
    return this.http.post(`${this.baseUrl}api/checkInByAdmin/${id}`, {});
  }
}
