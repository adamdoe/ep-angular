import { Injectable } from '@angular/core';
import { HttpClient }from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostService {
  postsURL:string = 'https://jsonplaceholder.typicode.com/posts';
  postsLimit:string = '?_limit=25';

  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.postsURL}${this.postsLimit}`);
  }
  constructor(private http: HttpClient) { }
}
