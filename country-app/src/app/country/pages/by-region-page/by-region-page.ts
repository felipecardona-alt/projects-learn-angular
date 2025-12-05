import { Component, inject, linkedSignal, signal } from '@angular/core';
import { CountryList } from "../../components/country-list/country-list";
import { Region } from '../../interfaces/region';
import { CountryServices } from '../../services/country.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

function validateQueryParam (param: string) {
  param = param.toLowerCase().trim();
  const validRegions: Record<string, Region> = {
    africa: 'Africa',
    americas: 'Americas',
    asia: 'Asia',
    europe: 'Europe',
    oceania: 'Oceania',
    antarctic: 'Antarctic',
  }

  return validRegions[param] ?? 'Americas';
}


@Component({
  selector: 'by-region-page',
  imports: [CountryList],
  templateUrl: './by-region-page.html',
})
export class ByRegionPage {
  countryServices = inject(CountryServices);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);

  queryParam = this.activatedRoute.snapshot.queryParamMap.get('query') ?? '';
  region = linkedSignal<Region>(() => validateQueryParam(this.queryParam));

  public regions: Region[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
    'Antarctic',
  ];

  private buttonClasses: string[] = [
    'btn-primary',
    'btn-secondary',
    'btn-accent',
    'btn-info',
    'btn-success',
    'btn-warning'
  ];

  getButtonClass(index: number): string {
    return this.buttonClasses[index % this.buttonClasses.length];
  }

  selectedRegion(region: Region) {
    this.region.set(region);
  }

  countryResource = rxResource({
    params: () => ({ query: this.region() }),
    stream: ({params}) => {
      if (!params.query ) return of([]);

      this.router.navigate(['/country/by-region'], {
        queryParams: { query: params.query },
      });

      return this.countryServices.searchByRegion(params.query)
    },
  })
}
