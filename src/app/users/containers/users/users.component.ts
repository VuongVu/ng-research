import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { UsersService } from '../../services/User.service';

import { User } from '../../models/User';
import { Observable } from 'rxjs/Observable';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  isAddUser = false;
  users: User[];

  constructor(
    private title: Title,
    private usersService: UsersService,
    private router: Router,
  ) {
    title.setTitle('Angular Awesome | Users');
  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.usersService.getUsers().subscribe(users => (this.users = users));
  }

  onDeleteUser(user: User): void {
    this.usersService
      .deleteUser(user)
      .subscribe(() => (this.users = this.users.filter(u => u.id !== user.id)));
  }

  onBackToHome(): void {
    this.router.navigate(['/']);
  }
}
