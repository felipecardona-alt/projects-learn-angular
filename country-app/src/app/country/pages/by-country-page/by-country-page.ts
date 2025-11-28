import { Component, inject, resource, signal } from '@angular/core';
import { CountryList } from "../../components/country-list/country-list";
import { SearchInput } from "../../components/search-input/search-input";
import { CountryServices } from '../../services/country.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'by-country-page',
  imports: [CountryList, SearchInput],
  templateUrl: './by-country-page.html',
})
export class ByCountryPage {
  countryServices = inject(CountryServices);
  query = signal('');

  countryResource = resource({
    params: () => ({ query: this.query() }),
    loader: async ({params}) => {
      if (!params.query ) return [];

      return await firstValueFrom(
        this.countryServices.serchByCountry(params.query)
      );
    },
  })
}
