import { CountryServices } from './../../services/country.service';
import { Component, inject, resource, signal } from '@angular/core';
import { SearchInput } from "../../components/search-input/search-input";
import { CountryList } from "../../components/country-list/country-list";
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'by-capital-pages',
  imports: [SearchInput, CountryList],
  templateUrl: './by-capital-pages.html',
})
export class ByCapitalPage {
  countryServices = inject(CountryServices);
  query = signal('');

  countryResource = resource({
    params: () => ({ query: this.query() }),
    loader: async ({params}) => {
      if (!params.query ) return [];

      return await firstValueFrom(
        this.countryServices.searchByCapital(params.query)
      );
    },
  })
}
