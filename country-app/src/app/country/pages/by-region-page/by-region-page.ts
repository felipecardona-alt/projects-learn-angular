import { Component, signal } from '@angular/core';
import { CountryList } from "../../components/country-list/country-list";
import { RestCountry } from '../../interfaces/rest-countries';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'by-region-page',
  imports: [CountryList],
  templateUrl: './by-region-page.html',
})
export class ByRegionPage {
  countries = signal<Country[]>([]);
}
