import { Component, input, signal } from '@angular/core';
import { ListItem } from "./list-item/list-item";

@Component({
  selector: 'list',
  imports: [ListItem],
  templateUrl: './list.html',
})
export class List {

  gifs = input.required<string[]>();
}
