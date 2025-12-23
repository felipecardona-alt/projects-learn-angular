import { JsonPipe } from '@angular/common';
import { Component, effect, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CountryServices } from '../../services/country-services';
import { Country } from '../../interfaces/country';
import { switchMap, tap } from 'rxjs';

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


  onFormChanges = effect((onCleanup) => {
    const regionSubscription = this.onRegionChange();

    onCleanup(
      () => {
        regionSubscription.unsubscribe()
        console.log('Region change subscription cleaned up');
      });
  });

  onRegionChange() {
    return this.myForm
      .get('region')!
      .valueChanges.pipe(
        tap( () => this.myForm.get('country')!.setValue('') ),
        tap( () => this.myForm.get('border')!.setValue('') ),
        tap( () => {
          this.borders.set([]);
          this.countryByRegions.set([]);
        }),
        switchMap( region => this.countryService.getCountriesByRegion(region!) ),
      )
      .subscribe( (countries) => {
        console.log(countries);
        this.countryByRegions.set(countries);
      });
  }

}
