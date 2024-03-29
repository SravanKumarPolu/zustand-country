import { useCountry } from "./store";

function SearchBox() {
  const search = useCountry((state) => state.search);
  const setSearch = useCountry((state) => state.setSearch);
  return (
    <input
      type="text"
      className="my-3  px-4 py-2 block w-full rounded border border-gray-300 shadow-sm focus:outline-blue-500 appearance-none"
      placeholder="Search"
      value={search}
      onChange={(event) => setSearch(event.target.value)}
    />
  );
}

const CountryList = () => {
  const country = useCountry((state) => state.country);
  return (
    <div className=" lg:h-[41rem] h-auto overflow-y-auto scrollbar-hide">
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ml-1 m-3 ">
        {country.map((c) => (
          <li
            key={c.name}
            className=" col-span-1  rounded-lg text-center bg-white shadow-xl  ">
            <div className="flex flex-1 flex-col p-8 justify-center items-center">
              <img
                src={c.flag}
                className="w-32  h-32 align-middle rounded object-center"
              />

              <h2 className="py-4">{c.name}</h2>
              <span>Capital:{c.capital}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

function App() {
  return (
    <>
      <div className="app m-2">
        <SearchBox />
        <CountryList />
      </div>
    </>
  );
}

export default App;
