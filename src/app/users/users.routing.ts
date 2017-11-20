import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UsersComponent } from './containers/users/users.component';

@NgModule({
  imports: [RouterModule.forChild([{ path: '', component: UsersComponent }])],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
