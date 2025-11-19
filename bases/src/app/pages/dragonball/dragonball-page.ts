import { Component, computed, signal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  templateUrl: './dragonball-page.html',
  styleUrl: './dragonball-page.css',
})
export class DragonballPage {

  name = signal('Piccolo');
  power = signal(5000);

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
  ]);

  addCharacter(): void {
    if (!this.name() || !this.power || this.power() <= 0) return;

    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power(),
    };
    this.characters.update((currentCharacters) => [...currentCharacters, newCharacter]);
    this.resetFields();
  };

  resetFields(): void {
    this.name.set('');
    this.power.set(0);
  }

/*   powerClasses = computed(() => {
    return {
      "text-danger": true,
    }
  }); */

}
