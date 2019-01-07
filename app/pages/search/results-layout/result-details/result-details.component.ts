import { Component, OnInit, Input } from '@angular/core';
import { IStackOverflowItem } from '../../stackoverflow-response.model';

@Component({
  selector: 'app-result-details',
  templateUrl: './result-details.component.html',
  styleUrls: ['./result-details.component.css']
})
export class ResultDetailsComponent implements OnInit {

  @Input()
  selectedResult: IStackOverflowItem;
  constructor() { }

  ngOnInit() {
  }

}
