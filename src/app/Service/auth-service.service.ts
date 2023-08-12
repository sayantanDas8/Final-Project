import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthClass } from '../Class/auth-class';
import { LoginClass } from '../Class/login-class';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  register_url: string = 'https://wtsacademy.dedicateddevelopers.us/api/user/signup'
  login_url: string = 'https://wtsacademy.dedicateddevelopers.us/api/user/signin'

  profile_url: string = 'https://wtsacademy.dedicateddevelopers.us/api/user/profile-details'

  constructor(private http: HttpClient, private auth: StorageService) { }

  // registration
  registration(formData:any):Observable<AuthClass[]>{
    return this.http.post<AuthClass[]>(this.register_url,formData);
  }

  // login
  login(formData: any):Observable<LoginClass[]>{
    return this.http.post<LoginClass[]>(this.login_url,formData);
  }

  // profile of user
  user_profile(): Observable<AuthClass[]> {
    return this.http.get<AuthClass[]>(this.profile_url)
    // return this.http.get<AuthClass[]>(this.profile_url, {
    //   headers: new HttpHeaders({
    //     'x-access-token': `${this.auth.getToken()}`
    //   })
    // })
  }

  
  
}
