import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private userService: UserService) {}
  users: any[] = [];
  ngOnInit(): void {
    console.log('get all users');
    this.userService
      .getUsers('all')
      .toPromise()
      .then((resp) => {
        console.log('Resp: ', resp);
        this.users = resp.users;
      });
  }

  public logOut(): void {
    this.userService.logOut();
  }
}
