import { JsonPipe } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CountryServices } from '../../services/country-services';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-country-page',
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './country-page.html',
})
export class CountryPage {

  private formBuilder = inject(FormBuilder);
  protected countryService = inject(CountryServices);

  regions = signal(this.countryService.regions);
  countryByRegions = signal<Country[]>([]);
  borders = signal<Country[]>([]);

  myForm: FormGroup = this.formBuilder.group({
    region: ['', [Validators.required]],
    country: ['',[Validators.required]],
    border: ['',[Validators.required]],
  });

}
