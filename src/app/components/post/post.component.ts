import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent {
  postService: PostService;

  constructor(service: PostService) {
    console.log('PostComponent Loaded...');
    this.postService = service;
  }

  getPosts() {
    this.postService.getPosts();
  }
}
