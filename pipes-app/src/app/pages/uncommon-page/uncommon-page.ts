import { Person } from './../../interfaces/person';
import { Component, signal } from '@angular/core';
import { Card } from '../../components/card/card';
import { I18nSelectPipe } from '@angular/common';

const clientMale: Person = {
  name: 'Felipe',
  gender: 'male',
  age: 28,
  address: 'Calle 123, Ciudad, País'
};

const clientFemale: Person = {
  name: 'Maria',
  gender: 'female',
  age: 25,
  address: 'Avenida 456, Ciudad, País'
};

@Component({
  selector: 'uncommon-page',
  imports: [Card, I18nSelectPipe],
  templateUrl: './uncommon-page.html',
})
export default class UncommonPage {

  client = signal<Person>(clientMale);

  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  }

  changeClient() {
    if (this.client() == clientMale) {
      this.client.set(clientFemale);
      return;
    }
    this.client.set(clientMale);
  }

}
