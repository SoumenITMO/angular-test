import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BlogResponse } from './blogs.response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }

  getBlogs() : Observable<BlogResponse[]> 
  {
    return this.http.get<BlogResponse[]>("https://test.spaceflightnewsapi.net/api/v2/blogs");
  }
}
