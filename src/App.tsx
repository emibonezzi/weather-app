import "./App.css";
import SearchBar from "./components/SearchBar";
import WeatherForecast from "./components/WeatherForecast";

function App() {
  return (
    <>
      <section className=" w-[400px] flex flex-col">
        <SearchBar />
        <WeatherForecast />
      </section>
    </>
  );
}

export default App;
