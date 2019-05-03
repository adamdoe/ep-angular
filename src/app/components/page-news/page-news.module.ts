import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PageNewsComponent } from './page-news.component';
import { NewsItemComponent } from './news-item/news-item.component';

@NgModule({
  declarations: [
    PageNewsComponent,
    NewsItemComponent,
    
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class PageNewsModule { }
