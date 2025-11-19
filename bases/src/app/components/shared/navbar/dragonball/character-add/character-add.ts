import { Component, input, output, signal, Signal, WritableSignal } from '@angular/core';
import { Character } from '../../../../../pages/dragonball-super/dragonball-super-page';

@Component({
  selector: 'dragonball-character-add',
  imports: [],
  templateUrl: './character-add.html'
})
export class CharacterAdd {
  name = signal<string>('');
  power = signal<number>(0);

  newCharacter = output<Character>();

  addCharacter(): void {
    if (!this.name() || !this.power || this.power() <= 0) return;

    const newCharacter: Character = {
      id: Math.floor(Math.random() * 10000),
      name: this.name(),
      power: this.power(),
    };

    console.log('Agregar personaje:', newCharacter);
  /*     this.characters.update((currentCharacters) => [...currentCharacters, newCharacter]);
       */
    this.newCharacter.emit(newCharacter);
    this.resetFields();
  };

  resetFields(): void {
    this.name.set('');
    this.power.set(0);
  }
}


