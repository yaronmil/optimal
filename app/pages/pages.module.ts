import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPageLayoutComponent } from './search/search-page-layout/search-page-layout.component';
import { ResultsLayoutComponent } from './search/results-layout/results-layout.component';
import { SearchInputComponent } from './search/search-input/search-input.component';
import { ResultDetailsComponent } from './search/results-layout/result-details/result-details.component';

@NgModule({
  declarations: [SearchPageLayoutComponent, ResultsLayoutComponent, SearchInputComponent, ResultDetailsComponent],
  imports: [
    CommonModule
  ],
  exports: [SearchPageLayoutComponent]
})
export class PagesModule { }
