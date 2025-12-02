import { Component, Input } from '@angular/core';
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
  @Input() countries: Country[] = [];
  @Input() errorMessage: string | null = null;
  @Input() isLoading: boolean = false;
  @Input() isEmpty: boolean = false;

  trackById(index: number, country: Country) {
    return country.id;
  }
}
