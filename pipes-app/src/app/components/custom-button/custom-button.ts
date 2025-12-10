import { Component, input, output } from '@angular/core';

@Component({
  selector: 'custom-button',
  imports: [],
  templateUrl: './custom-button.html',
})
export class CustomButton {

  label = input.required<string>();
  disabled = input<boolean>(false);
  pressed = output<void>();

  handleClick() {
      if (!this.disabled()) {
        this.pressed.emit();
      }
    }
}
