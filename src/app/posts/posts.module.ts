import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { HomeRoutingModule } from './posts.routing';
import { PostService } from './services/post.service';
import { PostResolverService } from './services/post-resolver.service';

import { PostsComponent } from './containers/posts/posts.component';
import { PostDetailComponent } from './containers/post-detail/post-detail.component';

@NgModule({
  imports: [CommonModule, HttpClientModule, HomeRoutingModule],
  declarations: [PostsComponent, PostDetailComponent],
  providers: [PostService, PostResolverService],
})
export class PostsModule {}
