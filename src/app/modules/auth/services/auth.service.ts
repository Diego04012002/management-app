import { computed, inject, Injectable, signal } from '@angular/core';
import { login } from '../../../interfaces/login.interface';
import { HttpClient } from '@angular/common/http';
import { map, catchError, of } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
type AuthStatus = 'checking' | 'authenticated' | 'not-authenticated';
@Injectable({ providedIn: 'root' })
export class AuthService {
  http = inject(HttpClient);
  baseUrl = environment.baseUrl;
  private _authStatus = signal<AuthStatus>('checking');
  private _user = signal<any | null>(localStorage.getItem('user'));
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

  user = computed<any | null>(() => {
    return this._user();
  });

  token = computed<string | null>(() => {
    return this._token();
  });

  isAdmin = computed(() => {
    return this._user()?.role == 'admin' ? true : false;
  });

  login(user: login) {
    return this.http.post(`${this.baseUrl}auth/login`, user).pipe(
      map((response) => {
        return this.handleLoginSuccess(response);
      }),
      catchError((error) => this.handleLogout(error))
    );
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
  }

  private handleLogout(error: any) {
    this.logout();
    return of(false);
  }
}
