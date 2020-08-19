import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';
import { By } from '@angular/platform-browser';

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

  // Test property init
  it('counter initial state', () => {
    expect(component.count).toBe(0);
  });

  // Test view init
  it('view initial state', () => {
    expect(component.count).toBe(0);

    const button = fixture.debugElement.nativeElement.querySelector('button');
    expect(button.textContent).toBe('0');
  });

  // Test method
  it('increment is working', () => {
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

  it('button click launch increment', () => {
    spyOn(component, 'increment');

    const button = fixture.debugElement.query(By.css('button'));
    button.triggerEventHandler('click', {});
    expect(component.increment).toHaveBeenCalled();
  });
});
