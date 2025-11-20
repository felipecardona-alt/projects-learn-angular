import { effect, Injectable, Signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CacheLocalStorageService {
  save<T>(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  loadValue<T>(key: string, defaultValue: T): T {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) as T : defaultValue;
  }
}
