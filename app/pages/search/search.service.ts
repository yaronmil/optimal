import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { IStackoverflowResponse, IStackOverflowItem } from './stackoverflow-response.model';


@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private subj = new BehaviorSubject<IStackOverflowItem[]>(null);

  public dataSource = this.subj.asObservable();

  readonly url = "https://api.stackexchange.com/2.2/tags/";

  constructor(private http: HttpClient) { }

  search(tag: string) {

    this.http.get<IStackoverflowResponse>(`${this.url}${tag}/faq?site=stackoverflow`).pipe(
      map((response) => response.items.map(d => {
        //removing unnecessary props
        const { title, view_count, score, link } = d;
        return { title, view_count, score, link }
      })),
    ).subscribe((items: IStackOverflowItem[]) => this.subj.next(items))


  }

}
