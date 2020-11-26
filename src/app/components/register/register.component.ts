import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
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
  }
}
