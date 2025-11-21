import { CacheLocalStorageService } from './cache-local-storage.service';
import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal, effect } from '@angular/core';
import { environment } from '@environments/environment';
import type { GiphyResponse } from '../interfaces/giphy';
import { Gif } from '../interfaces/gif';
import { GifMapper } from '../mapper/gif.mapper';
import { map, Observable, tap } from 'rxjs';

const GIFS_KEY = 'historyGifs';

@Injectable({
  providedIn: 'root'
})
export class GifService {

  private http = inject(HttpClient)
  private cacheService = inject(CacheLocalStorageService);
  private trendingPage = signal(0);

  trendingGifs = signal<Gif[]>([])
  trendingGifsLoading = signal(false)

  trendingGifGroup = computed<Gif[][]>(() => {
    const groups = [];
    for (let i = 0; i < this.trendingGifs().length; i += 3) {
      groups.push(this.trendingGifs().slice(i, i + 3));
    }
    return groups;
  });

  searchHistory = signal<Record<string, Gif[]>>(this.cacheService.loadValue(GIFS_KEY, {}));
  searchHistorykeys = computed( () => Object.keys(this.searchHistory()))

  constructor() {
    this.loadTrendingGifs();
  }

  saveGifHistory = effect(() => {
    this.cacheService.save(GIFS_KEY, this.searchHistory());}
  );

  loadTrendingGifs() {

    if (this.trendingGifsLoading()) return;

    this.trendingGifsLoading.set(true);

    this.http.get<GiphyResponse>(`${environment.giphyApiUrl}/gifs/trending`, {
      params: {
        api_key: environment.giphyApiKey,
        limit: 20,
        offset: this.trendingPage() * 20,
      }
    }).subscribe( (resp) => {
      const gifs = GifMapper.mapGiphyItemsToGifArray(resp.data);
      this.trendingGifs.update(gifsCurrent => [...gifsCurrent, ...gifs]);
      this.trendingGifsLoading.set(false);
      this.trendingPage.update(currentValue => currentValue + 1);
    });
  }

  searchGifs(query: string): Observable<Gif[]> {
    return this.http.get<GiphyResponse>(`${environment.giphyApiUrl}/gifs/search`, {
      params: {
        api_key: environment.giphyApiKey,
        limit: 20,
        q: query
      }
    })
    .pipe(
      map( ({data}) => GifMapper.mapGiphyItemsToGifArray(data)),
      tap(items => {
        this.searchHistory.update(history => ({
          ...history, [query.toLocaleLowerCase()]: items
        }))
      })
    );
  }

  getHistoryGifs( query: string) {
    return this.searchHistory()[query] ?? [];
  }

}
