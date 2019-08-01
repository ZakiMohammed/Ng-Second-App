import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from '../models/post';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Helper } from '../helpers/helper';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  url: string = environment.fakeApiUrl + 'posts/';
  headers: HttpHeaders;

  constructor(private http: HttpClient) { 
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
  }

  getPosts() : Observable<Post[]> {
    return this.http.get(this.url, { headers: this.headers })
      .pipe(map(response => <Post[]>response));
  }

  getPost(id: number) : Observable<Post> {
    return this.http.get(this.url + id, { headers: this.headers })
      .pipe(map(response => <Post>response));
  }

  getPostPagination(index: number, size: number, search: string = '', orderBy: string = 'title', orderDir: string = 'ASC') : Observable<any> {
    return this.http.get(this.url, { headers: this.headers })
      .pipe(map(response => {
        let posts = <Post[]>response;        
        let totalCount = posts.length;
        let filterCount = posts.length;

        // search
        if (search) {
          posts = posts.filter(i => i.title.toLowerCase().indexOf(search.toLowerCase()) !== -1);
          filterCount = posts.length;
        }

        // order by
        posts.sort((a, b) => Helper.order<Post>(a, b, orderBy, orderDir === 'DESC'));

        // limit
        posts = posts.slice(index, index + size);

        return {
          data: posts,
          filterCount: filterCount,
          totalCount: totalCount
        };
      }));
  }
  
}
