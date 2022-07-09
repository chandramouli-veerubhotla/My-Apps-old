import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnandadiYogamSettingsComponent } from './anandadi-yogam-settings.component';

describe('AnandadiYogamSettingsComponent', () => {
  let component: AnandadiYogamSettingsComponent;
  let fixture: ComponentFixture<AnandadiYogamSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnandadiYogamSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnandadiYogamSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
