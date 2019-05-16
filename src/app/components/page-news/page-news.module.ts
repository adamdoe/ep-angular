import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PageNewsComponent } from './page-news.component';
import { NewsItemComponent } from './news-item/news-item.component';
import { ShortenTextPipe } from 'src/app/pipes/shorten-text.pipe';

@NgModule({
  declarations: [
    PageNewsComponent,
    NewsItemComponent,
    ShortenTextPipe
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class PageNewsModule { }
