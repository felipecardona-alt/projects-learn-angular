import { Component, inject, signal } from '@angular/core';
import { List } from "../../components/list/list";
import { GifService } from '../../services/gif.service';
import { Gif } from '../../interfaces/gif';
import { GifMapper } from '../../mapper/gif.mapper';

@Component({
  selector: 'app-search-page',
  imports: [List],
  templateUrl: './search-page.html',
})
export default class SearchPage {

  gifService = inject(GifService);
  gifs = signal<Gif[]>([]);

  onSearch(query: string) {
    this.gifService.searchGifs(query).subscribe( (resp) => {
      this.gifs.set(resp);
      console.log(resp);
    });
  }
}
