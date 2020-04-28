import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppHeader } from './app-header.component';

describe('HeaderComponentComponent', () => {
  let component: AppHeader;
  let fixture: ComponentFixture<AppHeader>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppHeader ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppHeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
