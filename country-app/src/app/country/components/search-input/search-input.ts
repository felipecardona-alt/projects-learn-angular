import { Component, input, output } from '@angular/core';

@Component({
  selector: 'country-search-input',
  imports: [],
  templateUrl: './search-input.html',
})
export class SearchInput {
  placeholder = input<string>('Buscar país por capital');
  searchValue = output<string>();
  onSearchValue(value: string) {
    if (!value || value.length === 0) return;
    this.searchValue.emit(value);
  }
}
