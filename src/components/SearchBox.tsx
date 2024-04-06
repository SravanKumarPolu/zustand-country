import { useCountry } from "../store";

export default function SearchBox() {
  const search = useCountry((state) => state.search);
  const setSearch = useCountry((state) => state.setSearch);
  return (
    <div className=" ">
      <div className="flex fixed  bg-blue-500 w-full   h-[10%]  justify-center  items-center  ">
        <input
          type="text"
          className="my-3   px-4 py-2 w-[90%]  h-[60%]  rounded border align-midddle border-gray-300 shadow-sm focus:outline-blue-500 appearance-none"
          placeholder="Search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>
    </div>
  );
}
