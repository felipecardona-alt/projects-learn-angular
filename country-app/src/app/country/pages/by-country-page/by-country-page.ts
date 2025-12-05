import { Component, inject, linkedSignal, signal } from '@angular/core';
import { CountryList } from "../../components/country-list/country-list";
import { SearchInput } from "../../components/search-input/search-input";
import { CountryServices } from '../../services/country.service';
import { of } from 'rxjs';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'by-country-page',
  imports: [CountryList, SearchInput],
  templateUrl: './by-country-page.html',
})
export class ByCountryPage {
  countryServices = inject(CountryServices);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);

  queryParam = this.activatedRoute.snapshot.queryParamMap.get('query') ?? '';
  query = linkedSignal(() => this.queryParam);
  countryResource = rxResource({
    params: () => ({ query: this.query() }),
    stream: ({params}) => {
      if (!params.query ) return of([]);

      this.router.navigate(['/country/by-country'], {
        queryParams: { query: params.query },
      });

      return this.countryServices.searchByCountry(params.query)
    },
  })
}
