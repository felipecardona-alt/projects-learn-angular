import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { GifService } from '../../services/gif.service';
import { List } from "../../components/list/list";

@Component({
  selector: 'history-page',
  imports: [List],
  templateUrl: './history-page.html',
})
export default class HistoryPage {

  gifService = inject(GifService);

  query = toSignal(
    inject(ActivatedRoute).params.pipe(
      map(params => params['query'])
    )
  );

  historyGifsByKey = computed( () => this.gifService.getHistoryGifs(this.query()));
/*   historyGifsByKey = this.gifService.getHistoryGifs(this.query()); */

}
