import { CountryServices } from './../../services/country.service';
import { Component, inject, signal } from '@angular/core';
import { SearchInput } from "../../components/search-input/search-input";
import { CountryList } from "../../components/country-list/country-list";
import { Country } from '../../interfaces/country';

@Component({
  selector: 'by-capital-pages',
  imports: [SearchInput, CountryList],
  templateUrl: './by-capital-pages.html',
})
export class ByCapitalPage {
  countryServices = inject(CountryServices);

  isLoading = signal(false);
  isError = signal<string | null>(null);
  countries = signal<Country[]>([]);

  onSearch(query: string) {
    if (this.isLoading()) return;

    this.isLoading.set(true);
    this.isError.set(null);

    this.countryServices.searchByCapital(query)
    .subscribe({
      next: (countries) => {
        this.isLoading.set(false);
        this.countries.set(countries);
      },
      error: (err) => {
        this.isLoading.set(false);
        this.countries.set([]);
        this.isError.set(`${err.message}`);
      }
    });
  }
}
