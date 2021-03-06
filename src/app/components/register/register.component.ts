import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  formData = {
    email: '',
    password: '',
    name: '',
    lastName: '',
    cellphone: '',
    hobby: '',
    birthdate: '',
    gender: '',
  };

  withError = false;
  loading = false;
  createdUser = false;
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}

  submit(event): void {
    event.preventDefault();
    this.loading = true;
    this.userService
      .newUser(this.formData)
      .toPromise()
      .then((resp) => {
        console.log('Resp', resp);
        this.createdUser = true;
      })
      .catch((err) => {
        this.loading = false;
        console.log(err);
      });
  }
}
