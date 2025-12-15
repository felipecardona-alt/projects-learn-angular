import { heroes } from './../../interfaces/hero.data';
import { Component, signal } from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { CanflyPipe } from '../../pipes/can-fly.pipe';
import { HeroColorPipe } from '../../pipes/hero-color.pipe';
import { HeroTextColorPipe } from '../../pipes/hero-text-color.pipe';
import { TitleCasePipe } from '@angular/common';
import { HeroCreadorPipe } from '../../pipes/hero-creator.pipe';
import { HeroCreatorColorPipe } from '../../pipes/hero-creator-color.pipe';
import { HeroBySortPipe } from '../../pipes/hero-by-sort.pipe';
import { Hero } from '../../interfaces/hero';
import { HeroFilterPipe } from '../../pipes/hero-filter.pipe';

@Component({
  selector: 'custom-page',
  imports: [ToggleCasePipe, CanflyPipe, TitleCasePipe,
            HeroColorPipe, HeroTextColorPipe, HeroCreadorPipe,
            HeroCreatorColorPipe, HeroBySortPipe, HeroFilterPipe],
  templateUrl: './custom-page.html',
})
export default class CustomPage {

  name = signal<string>('Felipe');

  upperCase = signal<boolean>(true);

  heroes = signal(heroes);

  sortBy = signal<keyof Hero | null>(null);
  searchQuery = signal<string>('');

  setSortBy( sortBy: keyof Hero ) {
    this.sortBy.set( sortBy );
  }

  setSearchQuery( query: string ) {
    this.searchQuery.set( query );
  }

  changeUpperCaseState() {
    this.upperCase.update( current => !current );
  }

}
