import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CounterComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('counter should be 0', () => {
    expect(component.count).toBe(0);

    // Test view init
    const compiled = fixture.debugElement.nativeElement;
    const button = compiled.querySelector('button');
    expect(button.textContent).toBe('0');
  });

  it('counter should increment', () => {
    expect(component.count).toBe(0);

    // Test property changes
    component.increment();
    expect(component.count).toBe(1);

    // Test view changes
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const button = compiled.querySelector('button');
    expect(button.textContent).toBe('1');
  });
});
