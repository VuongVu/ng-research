import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { UsersRoutingModule } from './users.routing';
import { UsersService } from './services/User.service';
import { MessagesService } from './services/Messages.service';

import { UsersComponent } from './containers/users/users.component';
import { UserDetailComponent } from './containers/user-detail/user-detail.component';
import { AddUserComponent } from './containers/add-user/add-user.component';
import { MessagesComponent } from './containers/messages/messages.component';

@NgModule({
  imports: [CommonModule, FormsModule, UsersRoutingModule],
  declarations: [
    UsersComponent,
    UserDetailComponent,
    AddUserComponent,
    MessagesComponent,
  ],
  providers: [UsersService, MessagesService],
})
export class UsersModule {}
