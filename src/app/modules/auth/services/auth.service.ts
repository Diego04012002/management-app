import { computed, inject, Injectable, signal } from '@angular/core';
import { login } from '../../../interfaces/login.interface';
import { HttpClient } from '@angular/common/http';
import { map, catchError, of, Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { User } from '../../../interfaces/user.interface';
import { UserRegister } from '../../../interfaces/userRegister.interface';
type AuthStatus = 'checking' | 'authenticated' | 'not-authenticated';
@Injectable({ providedIn: 'root' })
export class AuthService {
  http = inject(HttpClient);
  baseUrl = environment.baseUrl;
  private _authStatus = signal<AuthStatus>('checking');
  private _user = signal<User | null>(
    localStorage.getItem('user') as User | null
  );
  private _token = signal<string | null>(localStorage.getItem('token'));

  constructor() {}

  authStatus = computed<AuthStatus>(() => {
    if (this._authStatus() === 'checking') {
      return 'checking';
    }
    if (this._token()) {
      return 'authenticated';
    }
    return 'not-authenticated';
  });

  user = computed<User | null>(() => {
    return this._user();
  });

  token = computed<string | null>(() => {
    return this._token();
  });

  isAdmin = computed(() => {
    const rawUser = this._user();

    if (!rawUser) return false;

    const user = typeof rawUser === 'string' ? JSON.parse(rawUser) : rawUser;

    return user?.role === 'ADMIN';
  });

  login(user: login) {
    return this.http.post(`${this.baseUrl}auth/login`, user).pipe(
      map((response) => {
        return this.handleLoginSuccess(response);
      }),
      catchError((error) => this.handleLogout(error))
    );
  }

  register(employeeLike: Partial<UserRegister>) {
    return this.http.post(`${this.baseUrl}auth/register`, employeeLike);
  }

  checkStatus(): Observable<boolean> {
    const token = localStorage.getItem('token');
    if (!token) {
      this.logout();
      return of(false);
    }

    return this.http.get<boolean>(`${this.baseUrl}auth/isAuthorized`).pipe(
      map((response: any) => {
        return response.valid;
      }),
      catchError((error) => this.handleLogout(error))
    );
  }

  getUserInformation(): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}api/userInformation`);
  }

  private handleLoginSuccess(response: any) {
    this._authStatus.set('authenticated');
    this._token.set(response.token);
    this._user.set(response.user);
    localStorage.setItem('token', response.token);
    localStorage.setItem('user', JSON.stringify(response.user));
    return true;
  }

  logout() {
    this._user.set(null);
    this._token.set(null);
    this._authStatus.set('not-authenticated');
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  private handleLogout(error: any) {
    this.logout();
    return of(false);
  }
}
