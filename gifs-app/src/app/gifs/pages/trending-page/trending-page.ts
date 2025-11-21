import { AfterViewInit, Component, ElementRef, inject, viewChild } from '@angular/core';
import { GifService } from '../../services/gif.service';
import { ScrollStateService } from 'src/app/shared/service/scroll-state.service';

@Component({
  selector: 'app-trending-page',
  templateUrl: './trending-page.html'
})
export default class TrendingPage implements AfterViewInit{

  gifService = inject(GifService);
  scrollStateService = inject(ScrollStateService);

  scrollDivRef = viewChild<ElementRef<HTMLDivElement>>('groupDiv');

  ngAfterViewInit(): void {
    const scrollDiv = this.scrollDivRef()?.nativeElement;
    if (!scrollDiv) return;

    scrollDiv.scrollTop = this.scrollStateService.getTrendingScrollState();
  }

  onScroll(event: Event) {
    const scrollDiv = this.scrollDivRef()?.nativeElement;
    if (!scrollDiv) return;

    const scrollTop = scrollDiv.scrollTop; // Scroll que se ha recorrido desde arriba. entre mas aumenta mas he recorrido
    const clientHeight = scrollDiv.clientHeight; // Punto de vista (no cambia aunque haga un refresh o cambia la pantalla )
    const scrollHeight = scrollDiv.scrollHeight;  // Sscroll total que puedo hacer.
    console.log({scrollTop , clientHeight , scrollHeight, scrollTotal: scrollTop + clientHeight})
    const isAtBottom = scrollTop + clientHeight + 300 >= scrollHeight; // Para ver si ya llegue al final del contenido mostrable
    this.scrollStateService.setTrendingScrollState(scrollTop);
    if (isAtBottom) {
      this.gifService.loadTrendingGifs();
    }
  }

}
