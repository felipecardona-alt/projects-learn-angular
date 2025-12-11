import { Injectable, signal } from '@angular/core';
import { AvailableLocale } from '../interfaces/available-locale';

@Injectable({
  providedIn: 'root'
})
export class LocaleService {

  private currentLocale = signal<AvailableLocale>('es');

  constructor() {
    this.currentLocale.set(
      localStorage.getItem('locale') as AvailableLocale || 'es'
    );
   }

  get getLocale() {
    return this.currentLocale();
  }

  setLocale(locale: AvailableLocale) {
    localStorage.setItem('locale', locale);
    this.currentLocale.set(locale);
    window.location.reload();
  }

}
