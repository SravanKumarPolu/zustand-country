import create from "zustand";
export interface Country {
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

const searchAndSortCountry = (country: Country[], search: string) =>
  country
    .filter((c) => c.name.toLowerCase().startsWith(search.toLowerCase()))

    .sort((a, b) => a.name.localeCompare(b.name));

export const useCountry = create<{
  country: Country[];
  allCountry: Country[];
  setAllCountry: (country: Country[]) => void;
  search: string;
  setSearch: (search: string) => void;
}>((set, get) => ({
  country: [],
  allCountry: [],
  setAllCountry: (country) =>
    set({
      allCountry: country,
      country: searchAndSortCountry(country, get().search),
    }),
  search: "",
  setSearch: (search) =>
    set({
      search,
      country: searchAndSortCountry(get().allCountry, search),
    }),
}));

fetch("/Countries.json")
  .then((res) => res.json())
  .then((country) => {
    useCountry.getState().setAllCountry(country);
  });
