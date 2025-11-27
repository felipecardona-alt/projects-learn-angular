import { Component } from '@angular/core';
import { SearchInput } from "../../components/search-input/search-input";
import { CountryList } from "../../components/country-list/country-list";

@Component({
  selector: 'by-capital-pages',
  imports: [SearchInput, CountryList],
  templateUrl: './by-capital-pages.html',
})
export class ByCapitalPage {

  onSearch(value: string) {
    console.log(value);
  }
}
