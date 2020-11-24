import { Component, OnInit } from '@angular/core';
import { ArticleService } from './services/articles/articles.service';
import { BlogService } from './services/blog/blog.service';
import { ReportService } from './services/report/report.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data: string;
  constructor(private articleService: ArticleService,
              private blogService: BlogService,
              private reportService: ReportService) { }

  ngOnInit(): void {  }

  getArticles(): void {
    this.data = '';
    this.articleService.getArticlesData().subscribe(response => {
      this.data = response.map(getArticles => getArticles.title).join("\n\n");
    })
  }

  getFilteredArticles(limit: number): void {
    this.data = '';
    this.articleService.getLimitedArticlesData(limit).subscribe(response => {
      this.data = response.map(getArticles => getArticles.title).join("\n\n");
    })
  }

  getBlogs(): void {
    this.data = '';
    this.blogService.getBlogs().subscribe(response => {
      this.data = response.map(getBlogs => getBlogs.title).join("\n\n");
    })
  }

  getReports(): void {
    this.data = '';
    this.reportService.getReports().subscribe(response => {
      this.data = response.map(getReports => getReports.summary).join("\n\n");
    })
  }
}
