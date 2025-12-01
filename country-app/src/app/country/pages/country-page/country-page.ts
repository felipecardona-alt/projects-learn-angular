import { CountryServices } from './../../services/country.service';
import { Component, inject, resource } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'country-page',
  imports: [],
  templateUrl: './country-page.html',
})
export class CountryPage {

  countryCode = inject(ActivatedRoute).snapshot.paramMap.get('country');
  countryService = inject(CountryServices);

  countryResource = rxResource({
    params: () => ({ code: this.countryCode }),
    stream: ({params}) => {
      return this.countryService.searchByCountryByAlphaCode(params.code!);
    },
  });


}

