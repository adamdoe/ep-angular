import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { WordpressService } from 'src/app/services/wordpress.service';

@Component({
  selector: 'app-page-news',
  templateUrl: './page-news.component.html',
  styleUrls: ['./page-news.component.less']
})
export class PageNewsComponent implements OnInit {
  
  // TODO: Add strong typing here when connected with DB.
  posts: any;
  wpPosts: any;

  constructor( 
    private postService: PostService, 
    private titleService: Title,
    private activatedRoute: ActivatedRoute,
    private wordpressService: WordpressService
    ) { }

  ngOnInit() {
    // this.postService.getPosts().subscribe(posts  => {
    //   this.posts = posts;
    //   console.log('Posts', this.posts);
    // });

    this.wordpressService.getPosts().subscribe(posts  => {
      console.log(posts);
      this.posts = posts;
      console.log('Posts', this.posts);

    });

    this.titleService.setTitle(this.activatedRoute.snapshot.data.title);
  }

}
