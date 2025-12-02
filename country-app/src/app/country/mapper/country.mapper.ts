import { Country } from "../interfaces/country";
import { RestCountry } from "../interfaces/rest-countries";

export class CountryMapper {

  static mapRestCountryToCountry(restCountry: RestCountry): Country {
    return {
      id: restCountry.cca2,
      name: restCountry.translations['spa']?.common || restCountry.name.common,
      flag: restCountry.flag,
      flagsSvg: restCountry.flags.svg,
      capital: restCountry.capital.join(', '),
      population: restCountry.population,
      region: restCountry.region,
      subregion: restCountry.subregion
    }
  }

  static mapRestCountriesToCountries(restCountries: RestCountry[]): Country[] {
    return restCountries.map(this.mapRestCountryToCountry);
  }

}
