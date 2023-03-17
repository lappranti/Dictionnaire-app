import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFindWordComponent } from './view-find-word.component';

describe('ViewFindWordComponent', () => {
  let component: ViewFindWordComponent;
  let fixture: ComponentFixture<ViewFindWordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewFindWordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewFindWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
