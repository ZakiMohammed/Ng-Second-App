import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Auth } from '../models/auth';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private auth: BehaviorSubject<Auth> = new BehaviorSubject<Auth>(null);

  constructor(private authService: AuthService) { 
    let auth = authService.getData();
    if (auth) {
      this.auth = new BehaviorSubject<Auth>(auth);
    }
  }

  getAuth() {
    return this.auth.asObservable();
  }
  setAuth(auth: Auth) {
    this.auth.next(auth);
    this.authService.setData(auth);
  }
}
