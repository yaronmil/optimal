import { SearchService } from './../search.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {

  constructor(private searchService: SearchService) { }

  runSearch(tag: string) {
    this.searchService.search(tag);
  }
  ngOnInit() {
  }

}
