import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnandadiYogamDashboardComponent } from './anandadi-yogam-dashboard.component';

describe('AnandadiYogamDashboardComponent', () => {
  let component: AnandadiYogamDashboardComponent;
  let fixture: ComponentFixture<AnandadiYogamDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnandadiYogamDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnandadiYogamDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
