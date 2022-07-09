import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SukraSidhanthamDashboardComponent } from './sukra-sidhantham-dashboard.component';

describe('SukraSidhanthamDashboardComponent', () => {
  let component: SukraSidhanthamDashboardComponent;
  let fixture: ComponentFixture<SukraSidhanthamDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SukraSidhanthamDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SukraSidhanthamDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
