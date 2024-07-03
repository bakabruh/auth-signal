import { inject, Injectable } from '@angular/core';
import { AuthenticationStore } from '../store/index.store';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly store = inject(AuthenticationStore);

  login(username: string, password: string): void {
    this.store.login({ username, password });
  }
}
