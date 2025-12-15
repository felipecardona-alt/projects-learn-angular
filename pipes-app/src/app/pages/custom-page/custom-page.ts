import { heroes } from './../../interfaces/hero.data';
import { Component, signal } from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { CanflyPipe } from '../../pipes/can-fly.pipe';
import { HeroColorPipe } from '../../pipes/hero-color.pipe';
import { HeroTextColorPipe } from '../../pipes/hero-text-color.pipe';
import { TitleCasePipe } from '@angular/common';
import { HeroCreadorPipe } from '../../pipes/hero-creator.pipe';
import { HeroCreatorColorPipe } from '../../pipes/hero-creator-color.pipe';

@Component({
  selector: 'custom-page',
  imports: [ToggleCasePipe, CanflyPipe, TitleCasePipe,
            HeroColorPipe, HeroTextColorPipe, HeroCreadorPipe, HeroCreatorColorPipe],
  templateUrl: './custom-page.html',
})
export default class CustomPage {

  name = signal<string>('Felipe');

  upperCase = signal<boolean>(true);

  heroes = signal(heroes);

  changeUpperCaseState() {
    this.upperCase.update( current => !current );
  }

  formattedMap = {
    'true': 'Cambiar a Lowercase',
    'false': 'Cambiar a Uppercase'
  }

}
