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
      <div className=" m-2">
        <Router location={location} routes={routes}>
          <Outlet />
        </Router>
      </div>
    </>
  );
}

export default App;
