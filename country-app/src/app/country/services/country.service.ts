import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environments';
import { RestCountry } from '../interfaces/rest-countries';
import { catchError, map, Observable, of, tap, throwError } from 'rxjs';
import { CountryMapper } from '../mapper/country.mapper';
import { Country } from '../interfaces/country';
import { Region } from '../interfaces/region';

@Injectable({
  providedIn: 'root'
})
export class CountryServices {
  private http = inject(HttpClient);
  private queryCacheByCapital = new Map<string, Country[]>();
  private queryCacheByCountry = new Map<string, Country[]>();
  private queryCacheByRegion = new Map<Region, Country[]>();

  searchByCapital(capital: string): Observable<Country[]> {
    capital = capital.trim().toLocaleLowerCase();

    if (this.queryCacheByCapital.has(capital)) {
      return of(this.queryCacheByCapital.get(capital) ?? []);
    }

    console.log('Fetching from API for capital:', capital, this.queryCacheByCapital);

    return this.http.get<RestCountry[]>(`${environment.apiBaseUrl}/capital/${capital}`)
    .pipe(
      map((countries) => CountryMapper.mapRestCountriesToCountries(countries)),
      tap( countries => this.queryCacheByCapital.set(capital, countries)),
      catchError(error => {
        console.error('Error fetching countries by capital:', error);
        return throwError(() => new Error(`No se pudo encontrar paises con la capital ${capital}`));
      })
    );
  }

  searchByCountry(code: string) {
    code = code.trim().toLocaleLowerCase();

    if (this.queryCacheByCountry.has(code)) {
      return of(this.queryCacheByCountry.get(code) ?? []);
    }

    return this.http.get<RestCountry[]>(`${environment.apiBaseUrl}/name/${code}`)
    .pipe(
      map((resp ) => CountryMapper.mapRestCountriesToCountries(resp)),
      tap( countries => this.queryCacheByCountry.set(code, countries)),
      catchError(error => {
        console.error('Error fetching countries by alpha code:', error);
        return throwError(() => new Error(`No se pudo encontrar detalles del pais con el codigo ${code}`));
      })
    );
  }

  searchByCountryByAlphaCode(code: string) {
    return this.http.get<RestCountry[]>(`${environment.apiBaseUrl}/alpha/${code}`)
    .pipe(
      map((resp ) => CountryMapper.mapRestCountriesToCountries(resp)),
      map(countries => countries.at(0)),

      catchError(error => {
        console.error('Error fetching countries by alpha code:', error);
        return throwError(() => new Error(`No se pudo encontrar detalles del pais con el codigo ${code}`));
      })
    );
  }

  searchByRegion(region: Region): Observable<Country[]> {
    return this.http.get<RestCountry[]>(`${environment.apiBaseUrl}/region/${region}`)
    .pipe(
      map((countries) => CountryMapper.mapRestCountriesToCountries(countries)),
      tap( countries => this.queryCacheByRegion.set(region, countries)),
      catchError(error => {
        console.error('Error fetching countries by region:', error);
        return throwError(() => new Error(`No se pudo encontrar paises en la region ${region}`));
      })
    );
  }
}
