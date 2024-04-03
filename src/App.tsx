import { Outlet, ReactLocation, Router } from "@tanstack/react-location";
import { CountryList } from "./components/CountryList";
import SearchBox from "./components/SearchBox";
import CountryDetail from "./components/CountryDetail";

const location = new ReactLocation();
const routes = [
  {
    path: "/",
    element: (
      <>
        <SearchBox />
        <CountryList />
      </>
    ),
  },
  {
    path: "/countryFlag/:name",
    element: (
      <>
        <CountryDetail />
      </>
    ),
  },
];
function App() {
  return (
    <>
      <div className=" bg-blue-500 flex flex-col overflow-y-auto scrollbar-hide lg:h-auto">
        <Router location={location} routes={routes}>
          <Outlet />
        </Router>
      </div>
    </>
  );
}

export default App;
