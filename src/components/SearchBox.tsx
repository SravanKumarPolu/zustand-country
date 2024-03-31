import { useCountry } from "../store";

export default function SearchBox() {
  const search = useCountry((state) => state.search);
  const setSearch = useCountry((state) => state.setSearch);
  return (
    <div className="flex justify-center align-midddle m-2 mx-3">
      <input
        type="text"
        className="my-3   px-4 py-2 block w-full rounded border border-gray-300 shadow-sm focus:outline-blue-500 appearance-none"
        placeholder="Search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
    </div>
  );
}
