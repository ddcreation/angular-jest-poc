import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';
import { FoxesService } from '../foxes.service';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

// Mock services:
const mockFoxes = {
  list$: jest.fn((value) => of(value)),
  reset: jest.fn(),
};
describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListComponent],
      providers: [{ provide: FoxesService, useValue: mockFoxes }],
    }).compileComponents();
  }));

  beforeEach(() => {
    // Reset list mock:
    mockFoxes.list$.mockClear();
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load foxes', () => {
    expect(mockFoxes.list$.mock.calls.length).toBe(1);
  });

  it('should list foxes', () => {
    // EMPTY case:
    component.foxes = [];
    fixture.detectChanges();

    // No list
    expect(fixture.debugElement.query(By.css('ul'))).toBeFalsy();
    // Comment text
    expect(fixture.debugElement.query(By.css('.comment'))).toBeTruthy();

    // CASE with foxes:
    component.foxes = [
      { id: 0, name: 'Fox 0' },
      { id: 1, name: 'Fox 1' },
    ];
    fixture.detectChanges();

    // List
    expect(fixture.debugElement.query(By.css('ul'))).toBeTruthy();
    const foxesElements = fixture.debugElement.queryAll(By.css('li'));
    expect(foxesElements.length).toBe(2);
    expect(foxesElements[1].nativeElement.textContent).toBe('Fox 1');

    // No comment
    expect(fixture.debugElement.query(By.css('.comment'))).toBeFalsy();
  });

  it('should launch reset on button click', () => {
    // Need foxes:
    component.foxes = [{ id: 0, name: 'Fox 0' }];
    fixture.detectChanges();

    spyOn(component, 'resetFoxesList');

    const mouseClick = new MouseEvent('click');
    const button = fixture.debugElement.query(By.css('button'));

    button.nativeElement.dispatchEvent(mouseClick);
    fixture.detectChanges();
    expect(component.resetFoxesList).toHaveBeenCalledTimes(1);
  });
});
