import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public authState = new BehaviorSubject(false);

  constructor(private http: HttpClient, private router: Router) {
    const token = sessionStorage.getItem('token');
    if (token) {
      this.setLogged(true);
    }
  }

  public login({ email, password }): Observable<any> {
    return this.http.post(env.apiUrl.concat(env.endPoints.login), {
      email,
      password,
    });
  }
  public getUsers(search): Observable<any> {
    const target = search === 'all' ? '' : search;
    return this.http.get(
      env.apiUrl.concat(env.endPoints.allUsers.concat(`/${target}`))
    );
  }
  public setLogged(newState): void {
    this.authState.next(newState);
  }

  public isAuth(): boolean {
    return this.authState.value;
  }

  public logOut(): void {
    this.setLogged(false);
    sessionStorage.clear();
    this.router.navigateByUrl('/login');
  }
}
