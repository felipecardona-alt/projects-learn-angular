import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../pages/dragonball-super/dragonball-super-page';

const loadFromLocalStorage = (): Character[] => {
  const data = localStorage.getItem('dragonball-characters');
  return data ? JSON.parse(data) : [];
};

@Injectable({
  providedIn: 'root'
})
export class DragonballService {

  characters = signal<Character[]>(loadFromLocalStorage());

  addCharacter(character: Character): void {
    this.characters.update(
      (currentCharacters) => [...currentCharacters, character]);
  };

  saveToLocalStorage = effect(() => {
    localStorage.setItem('dragonball-characters', JSON.stringify(this.characters()));
  });

}
