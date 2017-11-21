import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { UsersService } from '../../services/User.service';

import { User } from '../../models/User';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {
  user: User;

  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService,
    private location: Location,
  ) {}

  ngOnInit() {
    this.getUser();
  }

  onGoBack(): void {
    this.location.back();
  }

  getUser(): void {
    const userId = +this.route.snapshot.paramMap.get('id');
    this.usersService.getUser(userId).subscribe(user => (this.user = user));
  }

  updateUser(): void {
    this.usersService.updateUser(this.user).subscribe(() => this.onGoBack());
  }
}
