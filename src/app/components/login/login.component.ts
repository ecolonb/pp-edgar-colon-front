import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginData = {
    email: '',
    password: '',
  };

  withError = false;
  loading = false;
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}

  submit(event): void {
    event.preventDefault();
    this.loading = true;
    this.userService
      .login(this.loginData)
      .toPromise()
      .then((resp: any) => {
        console.log('resp::', resp);
        this.loading = false;
        this.userService.setLogged(true);
        sessionStorage.setItem('token', resp.token);
        this.router.navigateByUrl('/home');
      })
      .catch((err) => {
        console.log('Err:', err);
        sessionStorage.removeItem('token');
        this.loading = false;
        const { message } = err.error;
        if (message.includes('password are incorrect')) {
          console.log('withError');
          this.withError = true;
          this.userService.setLogged(false);
        }
      });
  }
}
