import { SearchService } from './../search.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IStackOverflowItem } from '../stackoverflow-response.model';

@Component({
  selector: 'app-results-layout',
  templateUrl: './results-layout.component.html',
  styleUrls: ['./results-layout.component.css']
})
export class ResultsLayoutComponent implements OnInit {

  public results: Observable<IStackOverflowItem[]>

  public selectedResult: IStackOverflowItem;

  constructor(private searchService: SearchService) {

  }

  ngOnInit() {
    this.results = this.searchService.dataSource
  }

}
