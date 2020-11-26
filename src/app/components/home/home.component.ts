import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  showConfirm = false;
  users: any[] = [];
  userId = '';
  typeAlert = 'confirmDelete';
  constructor(private userService: UserService, private router: Router) {}
  ngOnInit(): void {
    console.log('get all users');
    this.getUsers();
  }

  public logOut(): void {
    this.userService.logOut();
  }
  public showConfirmDel(userId): void {
    this.userId = userId;
    this.showConfirm = true;
  }

  public deleteUserEvent(): void {
    this.userService
      .deleteUser(this.userId)
      .toPromise()
      .then((resp) => {
        console.log('Respuesta: ', resp);
        this.showConfirm = true;
        this.typeAlert = 'deletedUser';
      });
  }

  public closeModal(event): void {
    this.showConfirm = false;
    if (event) {
      this.getUsers();
    }
  }

  public getUsers(): void {
    this.userService
      .getUsers('all')
      .toPromise()
      .then((resp) => {
        console.log('Resp: ', resp);
        this.users = resp.users;
      });
  }

  public newUser(): void {
    this.router.navigateByUrl('/register');
  }
}
