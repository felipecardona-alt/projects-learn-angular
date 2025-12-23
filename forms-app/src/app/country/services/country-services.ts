import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { regions } from '../interfaces/region-data';
import { Observable, of } from 'rxjs';
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

  getCountryBorderByCodes (borders: string[]): Observable<Country[]> {
    if ( !borders || borders.length === 0) return of([]);

    // TODO
    return of(borders.map(code => {
      return {
        cca3: code,
        name: { common: '', official: '', nativeName: {} },
        borders: []
      };
    }));


  }
}
