import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ReportResponse } from './report.response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http: HttpClient) { }

  getReports(): Observable<ReportResponse[]>
  {
    return this.http.get<ReportResponse[]>("https://test.spaceflightnewsapi.net/api/v2/reports");
  }
}
