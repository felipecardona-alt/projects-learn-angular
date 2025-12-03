import { Component, effect, input, output, signal } from '@angular/core';

@Component({
  selector: 'country-search-input',
  imports: [],
  templateUrl: './search-input.html',
})
export class SearchInput {
  placeholder = input<string>('Buscar país por capital');
  searchValue = output<string>();
  debounceTime = signal<number>(1000);
  initialValue = input<string>();

  inputValue = signal<string>('');

  onSearchValue(value: string) {
    if (!value || value.length === 0) return;
    this.searchValue.emit(value);
  }

  debounceEffect = effect((onCleanup) => {
    const value = this.inputValue();

    const timeout = setTimeout(() => {
      console.log('Input Value:', value);
      return this.searchValue.emit(value);
    }, this.debounceTime());

    onCleanup(() => {
      clearTimeout(timeout);
    });
  });
}
