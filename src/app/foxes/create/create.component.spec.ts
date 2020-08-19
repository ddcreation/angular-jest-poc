import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateComponent } from './create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FoxesService } from '../foxes.service';
import { By } from '@angular/platform-browser';

const validFoxName = 'Wefox';

// Mock services:
const mockFoxes = {
  add: jest.fn((foxname) => ({ id: 0, name: foxname })),
};
const mockRouter = {
  navigate: jest.fn(),
};

describe('CreateComponent', () => {
  let component: CreateComponent;
  let fixture: ComponentFixture<CreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [CreateComponent],
      providers: [
        {
          provide: FoxesService,
          useValue: mockFoxes,
        },
        {
          provide: Router,
          useValue: mockRouter,
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Use snapshot of the form
  it('should init with empty form', () => {
    expect(component.form).toMatchSnapshot();
  });

  it('form should match rules', () => {
    // Required validator:
    component.form.controls.name.patchValue('');
    expect(component.form.invalid).toBe(true);
    expect(Object.keys(component.form.controls.name.errors).length).toBe(1);
    expect(Object.keys(component.form.controls.name.errors)[0]).toBe(
      'required'
    );

    // MinLength validator:
    component.form.controls.name.patchValue('aa');
    expect(component.form.invalid).toBe(true);
    expect(Object.keys(component.form.controls.name.errors).length).toBe(1);
    expect(Object.keys(component.form.controls.name.errors)[0]).toBe(
      'minlength'
    );

    // MaxLength validator:
    component.form.controls.name.patchValue('aaaaaaaaaaaaaa');
    expect(component.form.invalid).toBe(true);
    expect(Object.keys(component.form.controls.name.errors).length).toBe(1);
    expect(Object.keys(component.form.controls.name.errors)[0]).toBe(
      'maxlength'
    );

    // OK:
    component.form.controls.name.patchValue(validFoxName);
    expect(component.form.valid).toBe(true);
  });

  it('button should be disabled if form invalid', () => {
    // Disabled at the beginning:
    const button = fixture.debugElement.nativeElement.querySelector('button');
    expect(button.disabled).toBe(true);

    // Name OK = enabled
    component.form.patchValue({
      name: validFoxName,
    });
    fixture.detectChanges();
    expect(button.disabled).toBe(false);

    // Name KO = disabled
    component.form.patchValue({
      name: 'KO',
    });
    fixture.detectChanges();
    expect(button.disabled).toBe(true);
  });

  it('should submit valid form', () => {
    spyOn(component, 'onSubmit');

    const mouseClick = new MouseEvent('click');
    const button = fixture.debugElement.query(By.css('button'));

    // Disabled button does not submit:
    button.nativeElement.dispatchEvent(mouseClick);
    fixture.detectChanges();
    expect(component.onSubmit).not.toHaveBeenCalled();

    // Enabled button does submit:
    component.form.patchValue({ name: validFoxName });
    fixture.detectChanges();
    button.nativeElement.dispatchEvent(mouseClick);
    expect(component.onSubmit).toHaveBeenCalledTimes(1);
  });

  it('should add fox and redirect on valid submit', () => {
    // spyOn(mockFoxes, 'add');
    // spyOn(mockRouter, 'navigate');

    // Invalid form: no redirect
    component.onSubmit();
    expect(mockFoxes.add.mock.calls.length).toBe(0);
    expect(mockRouter.navigate.mock.calls.length).toBe(0);

    // Valid form: redirect
    component.form.patchValue({ name: validFoxName });
    component.onSubmit();
    expect(mockFoxes.add.mock.calls.length).toBe(1);
    expect(mockRouter.navigate.mock.calls.length).toBe(1);
  });
});
