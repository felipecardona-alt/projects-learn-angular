import { LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'basic-page',
  imports: [
    LowerCasePipe, UpperCasePipe, TitleCasePipe
  ],
  templateUrl: './basic-page.html',
})
export default class BasicPage {
  nameLower = signal('Felipe');
  nameUpper = signal('cardona');
  fullName = signal('FeLiPe CaRdOnA');
}
