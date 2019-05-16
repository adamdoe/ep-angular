import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortenText'
})
export class ShortenTextPipe implements PipeTransform {

  transform(value: any, limit: number): any {
    const wordCount = value.split(' ', limit);
    return wordCount.join(" ") + '...';
  }

}
