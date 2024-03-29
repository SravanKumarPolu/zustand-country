import { CountryList } from "./components/CountryList";
import SearchBox from "./components/SearchBox";

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
