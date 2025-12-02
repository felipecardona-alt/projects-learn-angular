import { Component, input, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'country-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './country-list.html',
})
export class CountryList {
  countries = input.required<Country[]>();

  errorMessage = input<string|unknown|null>();
  isLoading = input<boolean>(false);
  isEmpty = input<boolean>(false);
}
