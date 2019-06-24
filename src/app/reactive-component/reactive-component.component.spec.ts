import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveComponentComponent } from './reactive-component.component';

describe('ReactiveComponentComponent', () => {
  let component: ReactiveComponentComponent;
  let fixture: ComponentFixture<ReactiveComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
