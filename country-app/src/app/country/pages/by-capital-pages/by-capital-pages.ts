import { CountryServices } from './../../services/country.service';
import { Component, inject, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { SearchInput } from "../../components/search-input/search-input";
import { CountryList } from "../../components/country-list/country-list";
import { of } from 'rxjs';

@Component({
  selector: 'by-capital-pages',
  imports: [SearchInput, CountryList],
  templateUrl: './by-capital-pages.html',
})
export class ByCapitalPage {
  countryServices = inject(CountryServices);
  query = signal('');

  countryResource = rxResource({
    params: () => ({ query: this.query() }),
    stream: ({params}) => {
      if (!params.query ) return of([]);

      return this.countryServices.searchByCapital(params.query)
    },
  })
}
