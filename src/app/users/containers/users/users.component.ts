import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { UsersService } from '../../services/User.service';

import { User } from '../../models/User';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  isAddUser = false;
  users: Observable<User[]>;

  constructor(private title: Title, private userService: UsersService) {
    title.setTitle('Angular Awesome | Users');
  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.users = this.userService.getUsers();
  }
}
