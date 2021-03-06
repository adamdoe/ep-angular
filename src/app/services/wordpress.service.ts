import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WordpressService {

  teamPageLimit = 12;

  constructor(private http: HttpClient) { }

  getPosts(): Observable<any[]> {
    return this.http.get<any[]>('https://eaton-partners.com/wp-json/wp/v2/posts', {
    });
  }

  getPage(id): Observable<any[]> {
    return this.http.get<any[]>('https://eaton-partners.com/wp-json/wp/v2/pages/'+id, {});
  }

  getVideos(): Observable<any []> {
    return this.http.get<any[]>('https://eaton-partners.com/wp-json/wp/v2/cpt-videos', {});
  }

  getAboutData(): Observable<any[]> {
    return this.http.get<any[]>('https://adamdoe.com/wp-json/wp/v2/pages/9', {
    });
  }

  getNewsPosts(): Observable<any[]> {
    return this.http.get<any[]>('https://eaton-partners.com/wp-json/wp/v2/posts?categories=46', {
    });
  }

  getPressPosts(): Observable<any[]> {
    return this.http.get<any[]>( 'https://eaton-partners.com/wp-json/wp/v2/posts?categories=1', {
    });
  }

  getAnnouncementPosts(): Observable<any[]> {
    return this.http.get<any[]>('https://eaton-partners.com/wp-json/wp/v2/posts?categories=49', {
    });
  }

  getPublicationPosts(): Observable<any[]> {
    return this.http.get<any[]>('https://eaton-partners.com/wp-json/wp/v2/posts?categories=50', {
    });
  }

  getTestimonials() {
    return this.http.get<any[]>('https://eaton-partners.com/wp-json/wp/v2/cpt-testimonials', {
    });
  }

  getEmployees() {
    return this.http.get<any[]>('https://eaton-partners.com/wp-json/wp/v2/team?per_page=100&_embed', {
    });
  }

  getEmployee(id) {
    return this.http.get<any[]>('https://eaton-partners.com/wp-json/wp/v2/team/' + id, {
    });
  }

  getEmployeeImage(id) {
    return this.http.get<any[]>('https://eaton-partners.com/wp-json/wp/v2/media/' + id, {
    });
  }

  getEmployeeOfficeByOfficeId(id) {

      return this.http.get<any[]>('https://eaton-partners.com/wp-json/wp/v2/joblocations/' + id, {

      });
    
  }

}
