import { Component, OnInit, Input } from '@angular/core';

import { UsersService } from '../../services/User.service';

import { User } from '../../models/User';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {
  @Input() users: User[];
  name = '';

  constructor(private usersService: UsersService) {}

  ngOnInit() {}

  onAddUser(): void {
    const name = this.name;

    this.usersService
      .addUser({ name } as User)
      .subscribe(user => this.users.push(user));
  }
}
