import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, effect, inject, LOCALE_ID, signal } from '@angular/core';
import { LocaleService } from '../../services/locale.service';
import { AvailableLocale } from '../../interfaces/available-locale';

@Component({
  selector: 'basic-page',
  imports: [
    LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe
  ],
  templateUrl: './basic-page.html',
})
export default class BasicPage {

  localeService = inject(LocaleService)
  currentLocale = signal(inject(LOCALE_ID)); // Alternative

  nameLower = signal('Felipe');
  nameUpper = signal('cardona');
  fullName = signal('FeLiPe CaRdOnA');

  customDate = signal(new Date());

  tickingDate = effect((onCleanup) => {
    const interval = setInterval(() => {
      this.customDate.set(new Date());
    }, 1000);

    onCleanup(() => clearInterval(interval));
  });

  changeLocale(locale: AvailableLocale) {
    console.log('Changing locale to:', locale);
    this.localeService.setLocale(locale);
  }

}
