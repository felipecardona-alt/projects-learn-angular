import { Person } from './../../interfaces/person';
import { Component, signal } from '@angular/core';
import { Card } from '../../components/card/card';
import { I18nPluralPipe, I18nSelectPipe, SlicePipe } from '@angular/common';

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
  imports: [Card, I18nSelectPipe, I18nPluralPipe, SlicePipe],
  templateUrl: './uncommon-page.html',
})
export default class UncommonPage {
  // i18nSelect
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

  // i18nPlural
  clients = signal<string[]>(['Maria', 'Pedro', 'Juan', 'Ana', 'Luis', 'Carmen']);
  clientsMap = signal({
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos dos clientes esperando.',
    other: 'tenemos # clientes esperando.'
  });

  deleteClient() {
    this.clients.update(currentClients => currentClients.slice(1));
  }

}
