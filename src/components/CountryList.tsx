import { Link } from "@tanstack/react-location";
import { useCountry } from "../store";

export const CountryList = () => {
  const country = useCountry((state) => state.country);
  return (
    <div className="m-3 mr-2 ">
      <div className=" lg:h-[41rem] h-auto overflow-y-auto scrollbar-hide">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ml-1 m-3 ">
          {country.map((c) => (
            <Link key={c.name} to={`./countryFlag/${c.name}`}>
              <li
                key={c.name}
                className=" col-span-1  rounded-lg text-center bg-white shadow-xl  ">
                <div className="flex flex-1 flex-col p-8 justify-center items-center">
                  <img
                    src={c.flag}
                    className="w-32  h-32 align-middle rounded object-center"
                  />

                  <h2 className="py-4">{c.name}</h2>
                  {/* <span>Capital:{c.capital}</span> */}
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};
