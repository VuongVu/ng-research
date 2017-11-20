import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users.routing';

import { UsersComponent } from './containers/users/users.component';

@NgModule({
  imports: [CommonModule, UsersRoutingModule],
  declarations: [UsersComponent],
})
export class UsersModule {}
