import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environments';
import { RestCountry } from '../interfaces/rest-countries';
import { map } from 'rxjs';
import { CountryMapper } from '../mapper/country.mapper';

@Injectable({
  providedIn: 'root'
})
export class CountryServices {
  private http = inject(HttpClient);

  searchByCapital(capital: string) {
    capital = capital.trim().toLocaleLowerCase();

    return this.http.get<RestCountry[]>(`${environment.apiBaseUrl}/capital/${capital}`)
    .pipe(
      map((countries ) => CountryMapper.mapRestCountriesToCountries(countries))
    );
  }
}
