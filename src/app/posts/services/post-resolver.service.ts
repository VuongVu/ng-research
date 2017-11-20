import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

import { Post } from '../models/Post';
import { PostService } from './post.service';

@Injectable()
export class PostResolverService implements Resolve<Post> {
  constructor(private router: Router, private postService: PostService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Post | Observable<Post> | Promise<Post> {
    const id = Number(route.paramMap.get('id'));

    return this.postService
      .getPost(id)
      .take(1)
      .map(post => {
        if (post) {
          return post;
        } else {
          this.router.navigate(['/posts']);
          return null;
        }
      });
  }
}
