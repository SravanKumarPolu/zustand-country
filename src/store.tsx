export interface CountryFlag {
  name: string;
  alpha2Code: string;
  alpha3Code: string;
  callingCodes: string[];
  capital: string;
  region: string;
  population: number;
  flags: {
    svg: string;
    png: string;
  };
  currencies: {
    code: string;
    name: string;
    symbol: string;
  }[];
  languages: {
    iso639_1: string;
    iso639_2: string;
    name: string;
    nativeName: string;
  }[];
  flag: string;
  independent: boolean;
}
