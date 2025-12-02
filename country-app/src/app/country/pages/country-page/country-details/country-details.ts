import { Component, input } from '@angular/core';
import { Country } from '../../../interfaces/country';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'country-details',
  imports: [DecimalPipe],
  templateUrl: './country-details.html',
})
export class CountryDetails {

  country = input.required<Country>();

}
