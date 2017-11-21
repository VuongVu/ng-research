import { Component, OnInit } from '@angular/core';

import { UsersService } from '../../services/User.service';
import { User } from '../../models/User';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { of } from 'rxjs/observable/of';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss'],
})
export class UserSearchComponent implements OnInit {
  term: string;
  users$: Observable<User[]>;
  private searchTerms = new Subject<string>();

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.users$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.usersService.searchUsers(term)),
    );
  }

  searchUsers(): void {
    this.searchTerms.next(this.term);
  }
}
