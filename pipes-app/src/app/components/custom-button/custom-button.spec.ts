import { TestBed, ComponentFixture } from '@angular/core/testing';
import { CustomButton } from './custom-button';

describe('CustomButton (Átomo)', () => {
  let fixture: ComponentFixture<CustomButton>;
  let component: CustomButton;
  let button: HTMLButtonElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CustomButton]
    });

    fixture = TestBed.createComponent(CustomButton);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('label', 'Button');
    fixture.detectChanges();
    button = fixture.nativeElement.querySelector('button');
  });

  it('debe renderizar el label por defecto', () => {
    expect(button.textContent?.trim()).toBe('Button');
  });

  it('debe cambiar el label si se establece un valor diferente', () => {
    fixture.componentRef.setInput('label', 'Enviar');
    fixture.detectChanges();

    expect(button.textContent?.trim()).toBe('Enviar');
  });

  it('debe emitir el output pressed cuando se hace click', () => {
    const spy = jasmine.createSpy('pressedSpy');
    component.pressed.subscribe(spy);

    button.click();

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('no debe emitir si está disabled', () => {
    const spy = jasmine.createSpy('pressedSpyDisabled');
    component.pressed.subscribe(spy);

    fixture.componentRef.setInput('disabled', true);
    fixture.detectChanges();

    button.click();

    expect(spy).not.toHaveBeenCalled();
  });

  it('debe marcar el botón como disabled en la vista', () => {
    fixture.componentRef.setInput('disabled', true);
    fixture.detectChanges();

    expect(button.disabled).toBe(true);
  });
});
