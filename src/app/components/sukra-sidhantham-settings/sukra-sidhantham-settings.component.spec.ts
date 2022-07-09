import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SukraSidhanthamSettingsComponent } from './sukra-sidhantham-settings.component';

describe('SukraSidhanthamSettingsComponent', () => {
  let component: SukraSidhanthamSettingsComponent;
  let fixture: ComponentFixture<SukraSidhanthamSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SukraSidhanthamSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SukraSidhanthamSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
