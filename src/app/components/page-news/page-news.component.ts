import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-page-news',
  templateUrl: './page-news.component.html',
  styleUrls: ['./page-news.component.less']
})
export class PageNewsComponent implements OnInit {
  posts: any;
  constructor( private postService: PostService ) { }

  ngOnInit() {
    this.postService.getPosts().subscribe(posts  => {
      this.posts = posts;
      console.log('Posts', this.posts);
    });
  }

}
