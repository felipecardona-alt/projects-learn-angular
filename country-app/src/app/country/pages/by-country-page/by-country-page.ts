import { Component, signal } from '@angular/core';
import { CountryList } from "../../components/country-list/country-list";
import { SearchInput } from "../../components/search-input/search-input";
import { Country } from '../../interfaces/country';

@Component({
  selector: 'by-country-page',
  imports: [CountryList, SearchInput],
  templateUrl: './by-country-page.html',
})
export class ByCountryPage {
  countries = signal<Country[]>([]);
  onSearch(value: string) {
    console.log(value);
  }
}
