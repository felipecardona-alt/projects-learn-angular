import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollStateService {

  private trendingScrollState = signal(0);

  setTrendingScrollState(value: number) {
    this.trendingScrollState.set(value);
  }

  getTrendingScrollState() {
    return this.trendingScrollState();
  }
}
