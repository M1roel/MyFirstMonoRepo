import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomicComponentsComponent } from './atomic-components.component';

describe('AtomicComponentsComponent', () => {
  let component: AtomicComponentsComponent;
  let fixture: ComponentFixture<AtomicComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtomicComponentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtomicComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
