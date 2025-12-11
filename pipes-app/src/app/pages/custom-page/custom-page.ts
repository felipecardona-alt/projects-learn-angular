import { Component } from '@angular/core';
import { SearchBoxComponent } from '../../components/search-box/search-box';

@Component({
  selector: 'custom-page',
  imports: [SearchBoxComponent],
  templateUrl: './custom-page.html',
})
export default class CustomPage { }
