import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPageLayoutComponent } from './search-page-layout.component';

describe('SearchPageLayoutComponent', () => {
  let component: SearchPageLayoutComponent;
  let fixture: ComponentFixture<SearchPageLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchPageLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPageLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
