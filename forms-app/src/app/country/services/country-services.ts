import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { regions } from '../interfaces/region-data';
import { combineLatest, Observable, of } from 'rxjs';
import { Country } from '../interfaces/country';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CountryServices {

  httpClient = inject(HttpClient);

  get regions() {
    return regions;
  }

  getCountriesByRegion(region: string): Observable<Country[]> {
    if ( !region) return of([]);

    console.log(`${region}`);

    const url = `${environment.apiBaseCountry}/region/${region}?fields=cca3,name,borders`;
    return this.httpClient.get<Country[]>(url);
  }

  getCountryByAlphaCode(code: string): Observable<Country> {
    const url = `${environment.apiBaseCountry}/alpha/${code}?fields=cca3,name,borders`;
    return this.httpClient.get<Country>(url);
  }

  getCountryByBorderNames(borders: string[]): Observable<Country[]> {
    if ( !borders || borders.length === 0) return of([]);

    const countriesRequests: Observable<Country>[] = [];

    borders.forEach((code) => {
      const request = this.getCountryByAlphaCode(code);
      countriesRequests.push(request);
    });

    return combineLatest(countriesRequests);
  }
}
