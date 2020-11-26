import { Component, OnInit } from '@angular/core';
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
  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  submit(event): void {
    event.preventDefault();
    console.log('--->>>>>Submit', this.loginData);
    this.userService
      .login(this.loginData)
      .toPromise()
      .then((resp) => {
        console.log('resp::', resp);
      })
      .catch((err) => {
        console.log('Err:', err);
        const { message } = err.error;
        if (message.includes('password are incorrect')) {
          console.log('withError');
          this.withError = true;
        }
      });
  }
}
