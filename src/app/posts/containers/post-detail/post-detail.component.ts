import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PostResolverService } from '../../services/post-resolver.service';
import { Post } from '../../models/Post';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss'],
})
export class PostDetailComponent implements OnInit {
  public post: Post;

  constructor(
    private route: ActivatedRoute,
    private postService: PostResolverService,
  ) {}

  ngOnInit() {
    this.getPost();
  }

  getPost(): void {
    const postId = Number(this.route.snapshot.paramMap.get('id'));
    this.postService.getPost(postId).subscribe(post => (this.post = post));
  }
}
