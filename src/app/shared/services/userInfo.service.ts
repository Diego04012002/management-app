import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { DepartmentDto } from '../../interfaces/departmentDto.interface';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
  http=inject(HttpClient);
  baseUrl = environment.baseUrl;


  getDepartments():Observable<DepartmentDto[]>{
    return this.http.get<DepartmentDto[]>(`${this.baseUrl}api/departments`)
  }
}
