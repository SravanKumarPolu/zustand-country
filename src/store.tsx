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

export const useCountry = create<{
  country: Country[];
  allCountry: Country[];
  setAllCountry: (country: Country[]) => void;
  search: string;
  setSearch: (search: string) => void;
}>((set) => ({
  country: [],
  allCountry: [],
  setAllCountry: (country) => set({ allCountry: country, country }),
  search: "",
  setSearch: (search) => set({ search }),
}));

fetch("/Countries.json")
  .then((res) => res.json())
  .then((country) => {
    useCountry.getState().setAllCountry(country);
  });
