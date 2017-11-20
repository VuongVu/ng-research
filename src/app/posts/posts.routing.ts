import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PostsComponent } from './containers/posts/posts.component';
import { PostDetailComponent } from './containers/post-detail/post-detail.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: PostsComponent },
      { path: ':id', component: PostDetailComponent },
    ]),
  ],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
