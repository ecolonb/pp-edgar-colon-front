import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  public login({ email, password }): Observable<any> {
    return this.http.post(env.apiUrl.concat(env.endPoints.login), {
      email,
      password,
    });
  }
}
