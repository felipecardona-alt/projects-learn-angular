import { UpperCasePipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  imports: [ UpperCasePipe],
  templateUrl: './hero-page.component.html',
  styleUrl: './hero-page.component.css',
})
export class HeroPageComponent {
  name = signal('Superman');
  age = signal(30);

  heroDescription = computed(
    () =>  `${ this.name() } - ${ this.age() } años`
  );

  nameCapitalized = computed( () => this.name().toUpperCase );

  changeHero() {
    this.name.set('Spiderman');
    this.age.set(22);
  }

  resetForm() {
    this.name.set('Superman');
    this.age.set(30);
  }

  changeAge() {
    this.age.set(60);
  }
}
