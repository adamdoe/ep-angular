import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { post } from 'selenium-webdriver/http';
import { DomSanitizer } from '@angular/platform-browser';
import { PostTitleComponent } from '../../single-post/post-title/post-title.component';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.less']
})
export class NewsItemComponent implements OnInit {
  @Input() post;
  postDate;
  postContent;

  constructor( private _sanitizer: DomSanitizer ) { }

  ngOnInit() {
    // Use Inner HTML to output titles without HTML entities.
    this.post.title.rendered = this.limitString(this.post.title.rendered, 75);
    this.post.title.rendered = this._sanitizer.bypassSecurityTrustHtml(this.post.title.rendered);

    // Format Date - gets date from WordPress Service and formats with JS.
    this.postDate = this.formatDate(this.post.date);

    // Use Innter HTML to output content without HTML entities.
    this.post.content.rendered = this.limitString(this.post.content.rendered, 175);
    this.post.content.rendered = this.htmlToPlaintext(this.post.content.rendered);
  }

  // Format title
  limitString( string, length ) {
    console.log('String to limit:', string)
    let maxLength = length;
    let limitedString = string.substr(0, maxLength);
    limitedString = limitedString.substr(0, Math.min(limitedString.length, limitedString.lastIndexOf(" ")))
    return limitedString + '...';
  }

  // Format Date
  formatDate(date) {
    this.postDate = new Date(date);
    let options = { year: 'numeric', month: 'long', day: 'numeric' };
    this.postDate = this.postDate.toLocaleDateString("en-US", options);
    return this.postDate;
  }

  // Strip HTML
  htmlToPlaintext(text) {
    return text ? String(text).replace(/<[^>]+>/gm, '') : '';
  }

}
