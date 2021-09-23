import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbleIndexComponent } from './able-index.component';

describe('AbleIndexComponent', () => {
  let component: AbleIndexComponent;
  let fixture: ComponentFixture<AbleIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbleIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbleIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
