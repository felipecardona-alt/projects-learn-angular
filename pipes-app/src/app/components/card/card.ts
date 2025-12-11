import { Component, input } from '@angular/core';

@Component({
  selector: 'card-pipe',
  imports: [],
  templateUrl: './card.html',
})
export class Card {

  title = input.required<string>();

}
