import { CountryServices } from './../../services/country.service';
import { Component, inject, linkedSignal, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { SearchInput } from "../../components/search-input/search-input";
import { CountryList } from "../../components/country-list/country-list";
import { of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'by-capital-pages',
  imports: [SearchInput, CountryList],
  templateUrl: './by-capital-pages.html',
})
export class ByCapitalPage {
  countryServices = inject(CountryServices);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);

  queryParam = this.activatedRoute.snapshot.queryParamMap.get('query') ?? '';

  query = linkedSignal(() => this.queryParam);

  countryResource = rxResource({
    params: () => ({ query: this.query() }),
    stream: ({params}) => {
      if (!params.query ) return of([]);

      this.router.navigate(['/country/by-capital'], {
        queryParams: { query: params.query },
      });

      return this.countryServices.searchByCapital(params.query)
    },
  })
}
