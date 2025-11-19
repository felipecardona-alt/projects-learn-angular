import { DragonballService } from './../../services/dragonball';
import { Component, inject, signal } from '@angular/core';
import { CharacterList } from "../../components/shared/navbar/dragonball/character-list/character-list";
import { CharacterAdd } from "../../components/shared/navbar/dragonball/character-add/character-add";

export interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  imports: [
    CharacterList,
    CharacterAdd
],
  templateUrl: './dragonball-super-page.html',
  styleUrl: './dragonball-super-page.css',
})
export class DragonballSuperPage {
  listName = signal('Los Guerreros Z Más Fuertes');

  public dragonBallService = inject(DragonballService);

/*   constructor(
    private dragonballService: DragonballService
  ) {}
  } */
}
