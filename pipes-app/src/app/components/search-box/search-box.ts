import { Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomButton } from '../custom-button/custom-button';

@Component({
  selector: 'search-box',
  imports: [FormsModule, CustomButton],
  templateUrl: './search-box.html',
})
export class SearchBoxComponent {

  placeholder = input<string>('Buscar...');
  buttonLabel = input<string>('Buscar');

  value: string = '';

  search = output<string>();

  onSearch() {
    this.search.emit(this.value);
  }
}
