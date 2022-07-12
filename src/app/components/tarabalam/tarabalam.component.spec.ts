import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarabalamComponent } from './tarabalam.component';

describe('TarabalamComponent', () => {
  let component: TarabalamComponent;
  let fixture: ComponentFixture<TarabalamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarabalamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarabalamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
