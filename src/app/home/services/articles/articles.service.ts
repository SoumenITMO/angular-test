import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ArticlesResponse } from './articles.response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  getArticlesData(): Observable<ArticlesResponse[]>
  {
    return this.http.get<ArticlesResponse[]>("https://test.spaceflightnewsapi.net/api/v2/articles");
  }

  getLimitedArticlesData(limit: number): Observable<ArticlesResponse[]>
  {
    return this.http.get<ArticlesResponse[]>("https://test.spaceflightnewsapi.net/api/v2/articles?_limit=" + limit);
  }
}
