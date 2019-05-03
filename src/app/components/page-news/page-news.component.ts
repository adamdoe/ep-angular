import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-news',
  templateUrl: './page-news.component.html',
  styleUrls: ['./page-news.component.less']
})
export class PageNewsComponent implements OnInit {
  
  // TODO: Add strong typing here when connected with DB.
  posts: any;

  constructor( 
    private postService: PostService, 
    private titleService: Title,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit() {
    this.postService.getPosts().subscribe(posts  => {
      this.posts = posts;
      console.log('Posts', this.posts);
    });

    this.titleService.setTitle(this.activatedRoute.snapshot.data.title);
  }

}
