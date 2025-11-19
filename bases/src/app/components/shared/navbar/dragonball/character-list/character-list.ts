import { Component , input } from '@angular/core';
import type { Character } from '../../../../../pages/dragonball-super/dragonball-super-page';

@Component({
  selector: 'dragonball-character-list',
  imports: [],
  templateUrl: './character-list.html',
})
export class CharacterList {

  listName = input.required<string>();
  characters = input.required<Character[]>();

}
