import { CountryServices } from './../../services/country.service';
import { Component, inject, resource } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { NotFound } from "../../../shared/components/footer/not-found/not-found";
import { CountryDetails } from "./country-details/country-details";

@Component({
  selector: 'country-page',
  imports: [NotFound, CountryDetails],
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

