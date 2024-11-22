import { HttpClient } from '@angular/common/http';
import { inject, Injectable, Signal, signal } from '@angular/core';
import { Observable, tap } from 'rxjs';
 import { GenericResponse, User } from '@app/shared';
import { UserCredentials } from '../types';
 
 

@Injectable({
  providedIn: 'root',
})
export class AuthService { 
  #http: HttpClient = inject(HttpClient);

  login(body:UserCredentials): Observable<GenericResponse<User>> {
    const formData = new FormData();
    Object.keys(body).forEach((key) => {
      formData.append(key, body[key as keyof UserCredentials]);
    });
    return this.#http.post<GenericResponse<User>>('http://194.163.169.47:5000/login.php', formData).pipe(
      tap((res: GenericResponse<User>) => {
        console.log("🚀 ~ AuthService ~ tap ~ res:", res)
        res && res.data &&  localStorage.setItem('token', res.data?.accessToken);
      })
    );;
  }
 
}
